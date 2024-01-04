import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"

const RecentOrder = () => {
  return (
    <div className="grid md:grid-cols">
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Recent Order</CardTitle>
          <CardDescription>
            25-12-2023
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="flex items-center hover:bg-secondary/80 rounded p-2">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/public/iconsiloam.webp" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="ml-4 flex-shrink-0 space-y-1">
                <p className="text-sm font-medium leading-none truncate">
                  Olivia Martin
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  SH Kelapa Dua
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  23-12-2023 20:30
                </p>
              </div>
              <Badge className="ml-auto text-xs" variant="completed">
                Completed
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentOrder;