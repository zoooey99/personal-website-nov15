import { createClient } from '@/utils/supabase/server';
import { ArrowUpRight } from 'lucide-react';



export default async function ProjectLinks({ databaseName, title }: { databaseName: string, title: string }) {
  const supabase = await createClient();
  const { data: projects } = await supabase.from(databaseName).select();
  const formattedProjects = (projects || []).map(project => ({
    text: project['link_name'],
    href: project['link_url'] 
  }));

  return (
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32">
        <h2 className="text-3xl font-bold text-foreground mb-6 block text-black">{title}</h2>
        <ul className="space-y-4">
          {(formattedProjects || []).reverse().map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className="text-xl font-semibold text-black inline-flex items-center group"
              >
                <span className="relative">
                  {link.text}
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-[#F3A46C] via-[#F1EEC8] to-[#D3EEF4] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </span>
                <ArrowUpRight className="ml-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100" size={20} />
              </a>
            </li>
          ))}
        </ul>
      </main>
  )
}