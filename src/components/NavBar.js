import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function Navbar() {
  return (
    <header className='bg-pink-900'>
      <div className='inline-flex float-right mt-6 mb-0 pr-3'>
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
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            activeClassName='text-purple-500'
            className='inline-flex items-center px-3 py-6 mr-4 text-purple-100 hover:text-red-300 text-4xl font-bold cursive tracking-widest'
          >
            Kaley
          </NavLink>
          <NavLink
            to='/about'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-red-300'
            activeClassName='text-purple-500 bg-red-200'
          >
            About me!
          </NavLink>
          <NavLink
            to='/project'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-red-300'
            activeClassName='text-purple-500 bg-red-200'
          >
            Projects
          </NavLink>
          <NavLink
            to='/post'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-red-300'
            activeClassName='text-purple-500 bg-red-900'
          >
            Blog posts
          </NavLink>
        </nav>
        {/* <div className='inline-flex py-3 px-3 my-6 '>
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
          <SocialIcon
            url='https://www.linkedin.com/in/kaley-kuhn-1914701b3/'
            // className='inline-flex items-center pl-9 px-3 my-6'
            className='mr-4'
            target='_blank'
            fgColor='#ffff'
            // bgColor='pink'
            style={{ height: 35, width: 35 }}
          />
        </div> */}
      </div>
    </header>
  );
}
