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
import { useEffect, useState } from 'react';

export function DashboardUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('../../../api/users') // Ganti dengan URL endpoint API Anda
      .then((response) => response.json())
      .then((data) => {
        if (data && data.users) {
          setUsers(data.users);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Card className="mb-4 md:mb-0">
    <CardHeader>
      <CardTitle>List Users</CardTitle>
      <CardDescription>Select test laboratory</CardDescription>
    </CardHeader>
    <CardContent>
      <Separator className="my-2" />
      <div className="space-y-8 p-2 ">
        <div className="grid gap-6">
          <ScrollArea className="h-[300px]">
            {users.map((user, index) => (
              <div className="flex items-center mt-4" key={index}>
                <Avatar className="h-9 w-9">
                  <AvatarImage src={user.profilePictureURL} alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">{user.completeName}</p>
                  <p className="text-sm text-muted-foreground">{user.hospital}</p>
                </div>
                <div className="ml-auto font-light text-sm">{user.role}</div>
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>
    </CardContent>
  </Card>
  );
}



{/* 
<Card>
          <CardHeader>
            <CardTitle>List Hospitals</CardTitle>
            <CardDescription>Total Tube for test Laboratory</CardDescription>
          </CardHeader>
          <CardContent>
            <Separator className="my-2" />
            <div className="space-y-4">
              <div className="grid gap-6">
                <ScrollArea className="h-[300px]">
                  <div className="flex mt-2 items-center justify-between space-x-4">
                   
                    </div>
                    </ScrollArea>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Roles</CardTitle>
                <CardDescription>Total Tube for test Laboratory</CardDescription>
              </CardHeader>
              <CardContent>
                <Separator className="my-2" />
                <div className="space-y-4">
                  <div className="grid gap-6">
                    <ScrollArea className="h-[300px]">
                      <div className="flex mt-2 items-center justify-between space-x-4">
                       
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              </CardContent>
            </Card>*/}
