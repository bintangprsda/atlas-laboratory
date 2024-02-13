import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  ChevronLeft,
} from 'lucide-react';
import InformationTest from "./components/information-test"


const Information: React.FC = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w flex-col items-start gap-2">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-lg font-extrabold leading-tight tracking-tighter md:text-4xl">
          📋 Information Test Laboratory
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
          Detailed Clinical Laboratory Test Information
        </p>
      </div>
      
      <InformationTest />
    </section>

  );
};

export default Information;


