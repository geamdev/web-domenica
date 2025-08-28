import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ProjectNavigationProps {
  showBackButton?: boolean;
  nextProject?: number;
  prevProject?: number;
}

export function ProjectNavigation({
  showBackButton = true,
  nextProject,
  prevProject,
}: ProjectNavigationProps) {
  return (
    <div className='text-center'>
      {(nextProject || prevProject) && (
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          {prevProject && (
            <Link
              href={`/projects/${prevProject}`}
              className='flex-1 sm:flex-none'
            >
              <Button
                variant='outline'
                className='border-purple-300 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-6 md:px-8 py-2 md:py-3 w-full sm:w-auto'
              >
                ← Previous Project
              </Button>
            </Link>
          )}
          {nextProject && (
            <Link
              href={`/projects/${nextProject}`}
              className='flex-1 sm:flex-none'
            >
              <Button
                variant='outline'
                className='border-purple-300 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-6 md:px-8 py-2 md:py-3 w-full sm:w-auto'
              >
                Next Project →
              </Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
