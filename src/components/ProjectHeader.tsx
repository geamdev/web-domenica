import { Badge } from '@/components/ui/badge';

interface ProjectHeaderProps {
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export function ProjectHeader({ title, description, tags, icon }: ProjectHeaderProps) {
  return (
    <div className='text-center mb-12 md:mb-16'>
      <div className='flex justify-center mb-4 md:mb-6'>
        <div className='w-16 md:w-20 h-16 md:h-20 bg-purple-600 rounded-lg flex items-center justify-center'>
          <span className='text-2xl md:text-3xl'>{icon}</span>
        </div>
      </div>
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 md:mb-6 leading-tight'>
        {title}
      </h1>
      <div className='flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8'>
        {tags.map((tag, index) => (
          <Badge key={index} className='bg-purple-400 text-white border-0 text-xs md:text-sm'>
            {tag}
          </Badge>
        ))}
      </div>
      <p className='text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4'>
        {description}
      </p>
    </div>
  );
}
