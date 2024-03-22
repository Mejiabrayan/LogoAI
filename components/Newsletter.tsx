import React from 'react'

const Newsletter = () => {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 border-t'>
    <div className='container px-4 md:px-6'>
      <div className='flex flex-col items-center justify-center space-y-4 text-center'>
        <div className='space-y-2'>
          <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>
            Sign Up for Updates
          </h2>
          <p className='max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400'>
            Stay updated with the latest product news and updates.
          </p>
        </div>
        <div className='w-full max-w-sm space-y-2'>
          <form className='flex sm:flex-row flex-col space-y-2 sm:space-y-0 sm:space-x-2'>
            <input
              className='max-w-lg flex-1 px-4 py-2 border-border border rounded-md '
              placeholder='Enter your email'
              type='email'
            />
            <button
              type='submit'
              className='inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-4 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300'
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Newsletter
