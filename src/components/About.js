import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import lovely from '../pexels-alexander-ant-4585185.jpg';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import { SocialIcon } from 'react-social-icons';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    
  }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className='relative'>
      <img
        src={lovely}
        alt='rainbow colors mixed background'
        className='absolute w-full'
      />
      <div className='p-10 lg:pt-48 container mx-auto relative'>
        <section className='bg-pink-900 rounded-lg shadow-2xl lg:flex p-20'>
          <img
            src={urlFor(author.authorImage).url()}
            className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'
            alt={author.name}
          />
          <div className='text-lg flex flex-col justify-center'>
            <h1 className='cursive text-6xl text-green-300 mb-4'>
              Hey there. I'm{' '}
              <span className='text-green-100'>{author.name}</span>
            </h1>
            <div className='prose lg:prose-xl text-white'>
              <BlockContent
                blocks={author.bio}
                projectId='latphb8r'
                dataset='production'
              />
              <div className='inline-flex py-3 px-3 my-6 '>
                <SocialIcon
                  url='https://github.com/kaleykuhn'
                  // className=' inline-flex items-center pl-9 px-3 my-6 mr-3 sm: mr-0 '
                  className='mr-4'
                  target='_blank'
                  fgColor='#fff'
                  // bgColor='white'
                  style={{ height: 35, width: 35 }}
                />
                <SocialIcon
                  url='https://www.linkedin.com/in/kaley-kuhn-1914701b3/'
                  // className='inline-flex items-center pl-9 px-3 my-6'
                  className='mr-4'
                  target='_blank'
                  fgColor='#ffff'
                  // bgColor='pink'
                  style={{ height: 35, width: 35 }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
