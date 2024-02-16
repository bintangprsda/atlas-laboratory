import Link from "next/link";
import { Icons } from "@/components/icons";
import {
  Beaker,
  Box,
  Settings,
  Stethoscope,
  Calculator,
} from 'lucide-react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export function DashboardMenu() {
  return (
    <div className="space-y-8">
      <CardContent className="w-full grid gap-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link href="/laboratory">
            <div className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground ">
              <Beaker className="mb-3 h-6 w-6" />
              Laboratory
            </div>
          </Link>
          <Link href="/nurse">
            <div className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground">
              <Stethoscope className="mb-3 h-6 w-6" />
              Nurse
            </div>
          </Link>
          <Link href="/finance">
            <div className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground">
              <Calculator className="mb-3 h-6 w-6" />
              Finance
            </div>
          </Link>
          <Link href="/pick-up">
            <div className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground">
              <Box className="mb-3 h-6 w-6" />
              Pick-up
            </div>
          </Link>
        </div>
      </CardContent>
    </div>


  );
}
