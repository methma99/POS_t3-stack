import React from 'react';
import Link from 'next/link';
import { Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {

  const userImageUrl = 'https://example.com/path/to/user-image.png';
  const userName = 'John Doe';

  return (
    <div className={'container mx-auto bg-white-100 flex items-center border-b-2 px-6 py-2 h-18'}>
      <h1 className='font-bold'>Company Name</h1>
      <div className='grow'>
        <div className='flex items-center justify-center gap-2 md:gap-8'>
          <Link href='sales'>Sales</Link>
          <Link href='invoice'>Invoice</Link>
          <Link href='product'>Products</Link>
        </div>
      </div>
      <div className='flex grow items-center justify-end sm:hidden'>
        <Popover>
          {({ open }) => (
            <>
              <Popover.Button
                className={`inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
                hover:bg-gray-100 hover:text-gray-500 focus:outline focus:ring-2 focus:ring-inset focus:ring-indigo-500 ${
                  open ? 'text-gray-500' : 'text-gray-400'
                }`}
              >
                <span className='sr-only'>Open Menu</span>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
              <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
              >
                <div className='rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50'>
                  <div className=' px-5 pt-5 pb-6'>
                    <div className='flex items-center justify-between'>
                      <h1 className='font-bold'>Company Name</h1>
                      <div className='-mr-2'>
                        <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
                hover:bg-gray-100 hover:text-gray-500 focus:outline focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-gray-500'>
                  <span className='sr-only'>Close Menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
                      </div>
                    </div>
                    <div className='mt-6'>
                      <nav className='grid gap-y-8'>
                        <Link 
                        className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2'
                        href='/'
                        >
                          Dashboard
                        </Link>

                        <Link 
                        className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2'
                        href='/'
                        >
                          Hold List
                        </Link>

                        <Link 
                        className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2'
                        href='/'
                        >
                          Close Register
                        </Link>

                        <Link 
                        className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2'
                        href='/'
                        >
                          Log Out
                        </Link>

                      </nav>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </>
            
          )}
        </Popover>
      </div>

      {/* Right-end buttons */}
      <div className='flex-grow flex items-center justify-end hidden sm:flex'>
        <Popover>
          {({ open }) => (
            <>
              <Popover.Button className={`text-gray-500 p-2 ${open ? 'text-gray-700' : ''}`}>
                {/* Replace this with the icon you want for Button 1 */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </Popover.Button>
              
              <Popover.Button className={`text-gray-500 p-2 ${open ? 'text-gray-700' : ''}`}>
                {/* Replace this with the icon you want for Button 2 */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
              </Popover.Button>
              <Popover.Button className={`text-gray-500 p-2 ${open ? 'text-gray-700' : ''}`}>
              {/* Replace this with the icon you want for Button 2 */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            </Popover.Button>
             <Popover.Button className={`text-gray-500 p-2 ${open ? 'text-gray-700' : ''}`}>
             {/* Replace this with the icon you want for Button 2 */}
             <svg
               xmlns='http://www.w3.org/2000/svg'
               className='h-6 w-6'
               fill='none'
               viewBox='0 0 24 24'
               stroke='currentColor'
               aria-hidden='true'
             >
               <path
                 strokeLinecap='round'
                 strokeLinejoin='round'
                 strokeWidth='2'
                 
                 d='M4 6h16M4 12h16m-7 6h7'
               />
             </svg>
           </Popover.Button>
            <Popover.Button className={`text-gray-500 p-2 ${open ? 'text-gray-700' : ''}`}>
            {/* Replace this with the icon you want for Button 2 */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </Popover.Button>

              {/* Add more buttons here with different icons */}
            </>
          )}
        </Popover>

        
        {/* User Image */}
        <Popover>
          {({ open }) => (
            <>
              <Popover.Button className={`p-2 ${open ? 'text-gray-700' : ''}`}>
                <img
                  src={userImageUrl}
                  alt='User'
                  className='w-6 h-6 rounded-full'
                />
              </Popover.Button>
            </>
          )}
        </Popover>

        {/* User Name */}
        <Popover>
          {({ open }) => (
            <>
              <Popover.Button className={`text-gray-500 p-2 ${open ? 'text-gray-700' : ''}`}>
                {userName}
              </Popover.Button>
            </>
          )}
        </Popover>

      </div>
    </div>
  );
};

export default Navbar;
