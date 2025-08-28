import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Highlight {
  title: string;
  description: string;
}

interface ProjectHighlightsProps {
  highlights: Highlight[];
  title?: string;
}

export function ProjectHighlights({ highlights, title = "Highlights" }: ProjectHighlightsProps) {
  return (
    <div className='mb-16 md:mb-20'>
      <h2 className='text-3xl md:text-4xl font-bold text-black dark:text-white mb-8 md:mb-12 text-center'>
        {title}
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
        {highlights.map((highlight, index) => (
          <Card key={index} className='bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow'>
            <CardHeader>
              <CardTitle className='text-black dark:text-white text-lg md:text-xl'>
                {highlight.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-gray-600 dark:text-gray-300 text-sm md:text-base'>{highlight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
