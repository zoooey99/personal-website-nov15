import ProjectLinks from '@/components/project-links';
import NameHeader from '@/components/name-header';

export default function Component() {

  return (
    <div className="min-h-screen bg-white">
      <NameHeader/>
      <ProjectLinks databaseName={'projects'}/>
      <ProjectLinks databaseName={'playground'}/>
    </div>
  )
}