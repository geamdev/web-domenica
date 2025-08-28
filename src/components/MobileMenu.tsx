'use client';

import * as React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  currentPage?: 'home' | 'about' | 'projects';
}

const menuItems = [
  { title: 'Home', href: '/', page: 'home' },
  { title: 'About', href: '/about', page: 'about' },
  { title: 'Projects', href: '/#projects', page: 'projects' },
];

export function MobileMenu({ currentPage = 'home' }: MobileMenuProps) {
  const [open, setOpen] = React.useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800'
        >
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side='right'
        className='w-[300px] sm:w-[350px] bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700'
      >
        <SheetHeader className='border-b border-gray-200 dark:border-gray-700 pb-6'>
          <SheetTitle className='flex items-center gap-3 text-left'>
            <div className='w-10 h-10 border-2 border-purple-300 rounded flex items-center justify-center'>
              <span className='text-black dark:text-white font-bold text-sm'>
                DJ
              </span>
            </div>
            <span className='text-xl font-bold text-black dark:text-white'>
              Portfolio
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className='flex flex-col h-full'>
          {/* Navigation */}
          <nav className='flex-1 p-6'>
            <div className='space-y-3'>
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href || '#'}
                  onClick={closeMenu}
                  className={cn(
                    'block w-full py-4 px-5 rounded-xl transition-all duration-200 text-lg font-medium',
                    currentPage === item.page
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 shadow-sm'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>

          {/* Footer with Theme Toggle */}
          <div className='p-6 border-t border-gray-200 dark:border-gray-700'>
            <div className='flex items-center justify-between'>
              <span className='text-sm text-gray-600 dark:text-gray-400 font-medium'>
                Theme
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
