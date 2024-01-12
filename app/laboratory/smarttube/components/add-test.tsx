"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, MoreVertical , PlusCircle, Trash2, FlaskConical  } from "lucide-react";
import { NextResponse } from "next/server"; // Pastikan untuk mengimpor ini dengan benar sesuai dengan aturan pembuatan koneksi dengan server di Next.js

export function AddTest() {
  return (
    <Card className="mb-4 md:mb-0">
      <CardHeader>
        <CardTitle>List Test</CardTitle>
        <CardDescription>Select test laboratory</CardDescription>
      </CardHeader>
      <CardContent>
      <Separator className="my-2" />
        <ScrollArea className="h-[300px]">
          <div className="grid gap-6">
           
              <div  className="flex items-center mt-4">
              <div className="ml-3 h-8 w-8 flex items-center justify-center rounded-full">
              <FlaskConical className="h-5 w-5" />
              </div>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">test.name</p>
                <p className="text-sm text-muted-foreground">test.ID</p>
              </div>
              <div className="ml-auto font-light text-sm">
              <Button variant="ghost" size="icon"> 
                    <MoreVertical  className="h-4 w-4" />
                  </Button>
                </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}