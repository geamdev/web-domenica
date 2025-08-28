import { ThemeToggle } from '@/components/ui/theme-toggle';
import { MobileMenu } from './MobileMenu';
import Link from 'next/link';

interface GlobalHeaderProps {
  currentPage?: 'home' | 'about' | 'projects';
}

export function GlobalHeader({ currentPage = 'home' }: GlobalHeaderProps) {
  return (
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

        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-6 lg:gap-8'>
          <Link
            href='/'
            className={`font-medium transition-colors ${
              currentPage === 'home'
                ? 'text-purple-300 dark:text-purple-300'
                : 'text-black dark:text-white hover:text-purple-200'
            }`}
          >
            Home
          </Link>
          <Link
            href='/about'
            className={`font-medium transition-colors ${
              currentPage === 'about'
                ? 'text-purple-300 dark:text-purple-300'
                : 'text-black dark:text-white hover:text-purple-200'
            }`}
          >
            About
          </Link>
          <Link
            href='/#projects'
            className={`font-medium transition-colors ${
              currentPage === 'projects'
                ? 'text-purple-300 dark:text-purple-300'
                : 'text-black dark:text-white hover:text-purple-200'
            }`}
          >
            Projects
          </Link>
        </nav>

        {/* Right side - Theme Toggle and Mobile Menu */}
        <div className='flex items-center gap-2'>
          {/* Desktop Theme Toggle */}
          <div className='hidden md:block'>
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <MobileMenu currentPage={currentPage} />
        </div>
      </div>
    </header>
  );
}
