import { ThemeToggle } from '@/components/ui/theme-toggle';
import Link from 'next/link';

interface ProjectLayoutProps {
  children: React.ReactNode;
  currentProject?: number;
}

export function ProjectLayout({
  children,
  currentProject,
}: ProjectLayoutProps) {
  return (
    <div className='min-h-screen bg-white dark:bg-black text-black dark:text-white'>
      {/* Header */}
      <header className='border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/90 backdrop-blur-sm sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center'>
          <div className='flex items-center gap-3'>
            <div className='w-8 md:w-10 h-8 md:h-10 border-2 border-purple-300 rounded flex items-center justify-center'>
              <span className='text-black dark:text-white font-bold text-xs md:text-sm'>
                DJ
              </span>
            </div>
            <Link
              href='/'
              className='text-lg md:text-xl font-bold text-black dark:text-white hover:text-purple-300 transition-colors'
            >
              Portfolio
            </Link>
          </div>
          <nav className='hidden md:flex gap-6 lg:gap-8'>
            <Link
              href='/'
              className='text-black dark:text-white font-medium hover:text-purple-200 transition-colors'
            >
              Home
            </Link>
            <Link
              href='/about'
              className='text-black dark:text-white font-medium hover:text-purple-200 transition-colors'
            >
              About
            </Link>
            <Link
              href='/#projects'
              className='text-purple-300 font-medium hover:text-purple-200 transition-colors'
            >
              Projects
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className='py-12 md:py-16 lg:py-20'>{children}</main>

      {/* Footer */}
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
    </div>
  );
}
