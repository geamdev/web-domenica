import { GlobalHeader } from './GlobalHeader';
import { GlobalFooter } from './GlobalFooter';

interface GlobalLayoutProps {
  children: React.ReactNode;
  currentPage?: 'home' | 'about' | 'projects';
}

export function GlobalLayout({
  children,
  currentPage = 'home',
}: GlobalLayoutProps) {
  return (
    <div className='min-h-screen bg-white dark:bg-black text-black dark:text-white'>
      <GlobalHeader currentPage={currentPage} />
      <main className='py-8'>{children}</main>
      <GlobalFooter />
    </div>
  );
}
