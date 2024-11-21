import PlaygroundBackButton from "@/app/playground/playground-back-button";
import { ArrowLeft, ArrowLeftCircle,ArrowLeftIcon,ArrowLeftFromLine, ArrowLeftFromLineIcon } from 'lucide-react';

export default async function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="w-auto flex flex-col gap-12">
        <PlaygroundBackButton/>
        {children}
      </div>
    );
  }  
