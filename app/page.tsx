import ProjectLinks from '@/components/project-links';
import NameHeader from '@/components/name-header';

export default function Component() {

  return (
    <div className="min-h-screen bg-white">
      <NameHeader/>
      <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:space-x-8 md:justify-between">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold text-foreground mb-4 block text-black">Projects</h2>
          <div className="mt-4">
            <ProjectLinks databaseName={'projects'} />
          </div>
        </div>
        
        {/* Divider */}
        <div className="hidden md:block w-px bg-border self-stretch"></div>
        
        <div className="md:w-1/2 space-y-6 mt-6 md:mt-0">
          <h2 className="text-2xl font-bold text-foreground mb-4 block">Playground</h2>
          <div className="mt-4">
            <ProjectLinks databaseName={'playground'} />
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}