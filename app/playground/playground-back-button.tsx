import Link from "next/link";
import {Button} from '@/components/ui/button'
import { ArrowLeft } from "lucide-react";
import { link } from "fs";

export default function PlaygroundBackButton(){
    return(
    <div className="fixed ">
        <Button variant={'link'} className="" > 
            <Link href={'/'}><ArrowLeft className="mr-2"/>back to home</Link>
        </Button>
    </div>
    );
    
}