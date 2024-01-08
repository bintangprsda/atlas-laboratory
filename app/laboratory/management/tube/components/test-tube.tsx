"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, FlaskConical, PlusCircle, Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestTube() {
  return (
    <Card className="mb-4 md:mb-0">
          <CardHeader>
            <CardTitle>List Test</CardTitle>
            <CardDescription>Select test laboratory</CardDescription>
          </CardHeader>
          <CardContent>
            <Separator className="my-2" />
            <div className="space-y-8 p-2 ">
              <div className="grid gap-6">
                <ScrollArea className="h-[300px]">
                   <div className="flex items-center mt-4">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="profilePictureURL" alt="Avatar" />
                      <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                      completeName
                      </p>
                      <p className="text-sm text-muted-foreground">
                      hospital
                      </p>
                    </div>
                    <div className="ml-auto font-light text-sm">role</div>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </CardContent>
    </Card>
    
  );
}