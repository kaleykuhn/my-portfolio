import React from 'react';
//import image from '../slide1.jpg';
//import image from '../pexels-naveen-annam-1722072.jpg';
//import image from '../pexels-kehn-hermano-3588602.jpg';
//import image from '../pexels-pixabay-161772.jpg';
//import image from '../pexels-ali-müftüoğulları-2289895.jpg';
// import image from '../pexels-irina-iriser-1090972.jpg';
import image from '../pexels-pixabay-161772.jpg';

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt='Las Vegas overhead view strip'
        className='absolute object-cover w-full h-full'
      />

      <section className='relative flex justify-center min-h-screen pt-14 lg:pt-64 px-8'>
        <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name'>
          Web Dev Kaley Kuhn .
        </h1>
      </section>
    </main>
  );
}
