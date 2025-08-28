import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface ProjectFeaturesProps {
  features: Feature[];
  title?: string;
  columns?: 2 | 3;
}

export function ProjectFeatures({ features, title = "Components & Guidelines", columns = 3 }: ProjectFeaturesProps) {
  const gridCols = columns === 2 
    ? 'grid-cols-1 md:grid-cols-2' 
    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <div className='mb-16 md:mb-20'>
      <h2 className='text-3xl md:text-4xl font-bold text-black dark:text-white mb-8 md:mb-12 text-center'>
        {title}
      </h2>
      <div className={`grid ${gridCols} gap-6 md:gap-8`}>
        {features.map((feature, index) => (
          <Card
            key={index}
            className='bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all duration-300 shadow-sm hover:shadow-md'
          >
            <CardHeader>
              <div className='flex items-center gap-3 mb-3'>
                <span className='text-xl md:text-2xl'>{feature.icon}</span>
                <CardTitle className='text-black dark:text-white text-base md:text-lg'>
                  {feature.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className='text-gray-600 dark:text-gray-300 text-sm md:text-base'>
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
