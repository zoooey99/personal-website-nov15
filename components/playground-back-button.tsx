import Link from "next/link";
import {Button} from '@/components/ui/button'
import { ArrowLeft } from "lucide-react";


export default function PlaygroundBackButton(){
    return(
    <div className="fixed bottom-0 left-0 mb-4 ml-4">
        <Link href={'/'}>
            <Button variant={'link'} className="">
                <ArrowLeft className="mr-2"/>back to home
            </Button>
        </Link>
    </div>
    );
    
}