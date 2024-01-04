// NavigationSection.js

import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import {
  ClipboardCopy,
  ClipboardEdit,
  ClipboardCheck,
  Info,
  Beaker,
  Box,
  Settings,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const NavigationSection = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-4 gap-4 justify-center">
     
      <div className="flex flex-col items-center mb-2">

        <Link
          href="laboratory/information"
          className={buttonVariants({ variant: "orange" })}
        >
          <Info className="h-5 w-5" />
        </Link>
        <span className="custom-text text-xs mt-2 md:text-xs">
          Information
        </span>
      </div>
      <div className="flex flex-col items-center mb-2 ">
        <Link
          href="laboratory/smarttube"
          className={buttonVariants({ variant: "teal" })}
        >
          <Beaker className="h-5 w-5" />
        </Link>
        <span className="custom-text text-xs mt-2 md:text-xs">
          SmartTube
        </span>

      </div>
      <div className="flex flex-col items-center mb-2">

        <Link
          href="laboratory/consumable"
          className={buttonVariants({ variant: "purple" })}
        >
          <Box className="h-5 w-5" />
        </Link>
        <span className="custom-text text-xs mt-2 md:text-xs">
          Consumable
        </span>
      </div>
      <div className="flex flex-col items-center mb-2 ">
        <Link
          href="laboratory/management"
          className={buttonVariants({ variant: "gray" })}
        >
          <Settings className="h-5 w-5" />

        </Link>
        <span className="custom-text text-xs mt-2 md:text-xs">
          Management
        </span>
      </div>
    </div>
  );
};

export default NavigationSection;
