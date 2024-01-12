
import Link from "next/link";
import { Button ,buttonVariants } from "@/components/ui/button";
import {
  ChevronLeft, Copy 
} from 'lucide-react';
import { DialogDemo } from "./components/form"
import { AddTest } from "./components/add-test"




const SmartTube: React.FC = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w flex-col items-start gap-2">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-lg font-extrabold leading-tight tracking-tighter md:text-4xl">
            Smart Tube 
          </h1>
          <div className="flex text-xs font-extrabold flex-grow justify-end">
            <Link
              href="/laboratory"
              className={buttonVariants({ variant: "ghost" })}
            >
              <ChevronLeft />
              Back
            </Link>
          </div>

        </div>
        <p className="max-w-[700px] text-sm text-muted-foreground">
          Automated Tube Allocation Based on Laboratory Test Types
        </p>
      </div>
      <DialogDemo />
       <div className="w-full h-full flex items-center justify-center">
      <div className="w-full mx-auto max-w-[950] mb-5 grid md:grid-cols-2 gap-4">
    <AddTest/>
      </div>
      </div>
      

    </section>

  );
};

export default SmartTube;


