'use client';

import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant='outline'
      size='sm'
      onClick={toggleTheme}
      className='border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </Button>
  );
}
