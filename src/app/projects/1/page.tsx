import { GlobalLayout } from '@/components/GlobalLayout';
import { ProjectHeader } from '@/components/ProjectHeader';
import { ProjectHighlights } from '@/components/ProjectHighlights';
import { ProjectFeatures } from '@/components/ProjectFeatures';
import { ProjectNavigation } from '@/components/ProjectNavigation';

export default function DesignSystemPage() {
  const highlights = [
    {
      title: 'Goal',
      description:
        'Create a unified design language for all our digital products.',
    },
    {
      title: 'Process',
      description:
        'Conducted an audit of existing designs, created component libraries, and established guidelines for usage.',
    },
    {
      title: 'Outcome',
      description:
        'Improved design consistency and development efficiency across all projects.',
    },
  ];

  const components = [
    {
      title: 'Buttons components',
      description: 'The considerations for buttons and all states.',
      icon: '🔘',
    },
    {
      title: 'Elevations',
      description:
        'The use of visual hierarchy is just not defined as how is implemented but also when to do it',
      icon: '📊',
    },
    {
      title: 'Tokens usage',
      description:
        'Tokens have been set up for the design system with identifiable names and proper sorting.',
      icon: '🏷️',
    },
    {
      title: 'Defining colors',
      description:
        'From the start we define the usage of brand colors and semantic colors for creating accessible interfaces.',
      icon: '🎨',
    },
    {
      title: 'Typography',
      description:
        'The style for the typography for all the needs that a wide range of products demands.',
      icon: '📝',
    },
  ];

  return (
    <GlobalLayout currentPage='projects'>
      <div className='max-w-6xl mx-auto px-4 md:px-6'>
        <ProjectHeader
          title='Design System'
          description='A comprehensive design system for consistent and efficient UI development.'
          tags={[
            'Design System',
            'UI Design',
            'Documentation',
            'Component Library',
            'Style Guide',
          ]}
          icon='🎨'
        />

        <ProjectHighlights highlights={highlights} />

        <ProjectFeatures features={components} />

        {/* Project Details */}
        <div className='mb-16 md:mb-20'>
          <h2 className='text-3xl md:text-4xl font-bold text-black dark:text-white mb-8 md:mb-12 text-center'>
            Project Details
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12'>
            {/* Left Column */}
            <div className='space-y-6 md:space-y-8'>
              <div>
                <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white mb-3 md:mb-4'>
                  Background
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base'>
                  The company had multiple digital products with inconsistent UI
                  elements, making design and development inefficient.
                </p>
              </div>

              <div>
                <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white mb-3 md:mb-4'>
                  What problem did you aim to solve?
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base'>
                  Lack of a standardized design system caused inconsistencies
                  and slowed down product development.
                </p>
              </div>

              <div>
                <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white mb-3 md:mb-4'>
                  Who was the user?
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base'>
                  Internal design and development teams.
                </p>
              </div>

              <div>
                <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white mb-3 md:mb-4'>
                  What challenges did you have?
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base'>
                  Ensuring adoption across teams, balancing flexibility with
                  consistency, and maintaining scalability.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className='space-y-6 md:space-y-8'>
              <div>
                <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white mb-3 md:mb-4'>
                  My Role
                </h3>
                <p className='text-gray-600 dark:text-gray-300 text-lg md:text-xl font-medium'>
                  Design Lead
                </p>
              </div>

              <div>
                <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white mb-3 md:mb-4'>
                  Activities
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base'>
                  Design audit, component library creation, documentation
                  writing, team workshops, and adoption strategy.
                </p>
              </div>

              <div>
                <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white mb-3 md:mb-4'>
                  Results
                </h3>
                <div className='space-y-4'>
                  <div>
                    <h4 className='text-base md:text-lg font-semibold text-black dark:text-white mb-2'>
                      What was the outcome?
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300 text-sm md:text-base'>
                      Improved design consistency and development efficiency
                      across all projects.
                    </p>
                  </div>
                  <div>
                    <h4 className='text-base md:text-lg font-semibold text-black dark:text-white mb-2'>
                      How did the solution change the game?
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300 text-sm md:text-base'>
                      Developed and implemented a comprehensive design system
                      with reusable components and clear guidelines.
                    </p>
                  </div>
                  <div>
                    <h4 className='text-base md:text-lg font-semibold text-black dark:text-white mb-2'>
                      What did you learn from working on this experience?
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300 text-sm md:text-base'>
                      Effective collaboration between designers and developers
                      is key to a successful design system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProjectNavigation nextProject={2} />
      </div>
    </GlobalLayout>
  );
}
