import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='px-4 lg:px-6 h-14 flex items-center'>
      <Link className='flex items-center justify-center' href='#'>
        <span className='font-bold'>LogoAICreator</span>
      </Link>
      <nav className='ml-auto flex gap-4 sm:gap-6'>
        <Link
          className='text-sm font-medium hover:text-[#FF8C42] underline-offset-4'
          href='#features'
        >
          Features
        </Link>
        <Link
          className='text-sm font-medium hover:text-[#FF8C42] underline-offset-4'
          href='/sign-in'
        >
          Sign In
        </Link>
      </nav>
    </header>
  );
};

export default Header;
