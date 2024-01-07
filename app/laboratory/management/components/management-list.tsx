import Link from "next/link";
import { Icons } from "@/components/icons"
import {
  User,
  UserCog,
  Settings,
  Clipboard,
  Tags,
  } from 'lucide-react';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Card,
  CardContent,
} from "@/components/ui/card";


export function Sidebar({ className, management }) {
  return (
    <div className="space-y-8">
      <CardContent className="w-full grid gap-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link href="/laboratory/management/users">
            <div className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground">
              <User className="mb-3 h-6 w-6 text-blue-500" /> {/* Example: Blue color */}
              List user
            </div>
          </Link>
          <Link href="/laboratory/management/tube">
            <div className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground">
              <Settings className="mb-3 h-6 w-6 text-green-500" /> {/* Example: Green color */}
              Setting Tube
            </div>
          </Link>
          <Link href="/laboratory/management/consumable">
            <div className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground">
              <Clipboard className="mb-3 h-6 w-6 text-red-500" /> {/* Example: Red color */}
              Consumable
            </div>
          </Link>
          <Link href="/laboratory/management/report">
            <div className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground">
              <Tags className="mb-3 h-6 w-6 text-yellow-500" /> {/* Example: Yellow color */}
              Report
            </div>
          </Link>
        </div>

      </CardContent>
    </div>
    
  )
}
