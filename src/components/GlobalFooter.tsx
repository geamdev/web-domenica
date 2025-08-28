import Link from 'next/link';

export function GlobalFooter() {
  return (
    <footer className='border-t border-gray-200 dark:border-gray-800 py-8 bg-gray-50 dark:bg-gray-900/30'>
      <div className='max-w-4xl mx-auto px-4 md:px-6 text-center'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8'>
          <div className='flex items-center gap-3'>
            <div className='w-8 md:w-10 h-8 md:h-10 border-2 border-purple-300 rounded flex items-center justify-center'>
              <span className='text-black dark:text-white font-bold text-xs md:text-sm'>
                DJ
              </span>
            </div>
            <div className='text-left'>
              <h3 className='text-lg md:text-xl font-semibold text-black dark:text-white'>
                Domenica Jaramillo
              </h3>
              <p className='text-gray-600 dark:text-gray-400 text-sm md:text-base'>
                UX Designer & Developer
              </p>
            </div>
          </div>

          <div className='text-gray-600 dark:text-gray-400 text-sm md:text-base'>
            © 2025 Domenica Jaramillo. All rights reserved.
          </div>

          <div className='flex gap-3 md:gap-4'>
            <Link
              href='#'
              className='w-8 md:w-10 h-8 md:h-10 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center text-black dark:text-white hover:border-purple-300 transition-colors'
            >
              📷
            </Link>
            <Link
              href='#'
              className='w-8 md:w-10 h-8 md:h-10 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center text-black dark:text-white hover:border-purple-300 transition-colors'
            >
              💼
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
