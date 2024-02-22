"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, MoreVertical , PlusCircle, Trash2 } from "lucide-react";
import { NextResponse } from "next/server"; // Pastikan untuk mengimpor ini dengan benar sesuai dengan aturan pembuatan koneksi dengan server di Next.js

export function ListTube() {
  const [tubeData, setTubeData] = useState([]);

  useEffect(() => {
    // Panggil API untuk mendapatkan data tubeTypes
    const fetchData = async () => {
      try {
        const response = await fetch('../../../api/tube'); // Ganti URL sesuai dengan endpoint API Anda
        const data = await response.json();
        if (response.ok) {
          setTubeData(data.tubeTypes); // Mengatur data yang diambil dari API ke state
        } else {
          console.error('Failed to fetch tube types:', data.message);
        }
      } catch (error) {
        console.error('Error fetching tube types:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card className="mb-4 md:mb-0">
      <CardHeader>
        <CardTitle>🧪 List Tube</CardTitle>
        <CardDescription>Select test laboratory</CardDescription>
      </CardHeader>
      <CardContent>
      <Separator className="my-2" />
        <ScrollArea className="h-[300px]">
          <div className="grid gap-6">
            {tubeData.map((tube) => (
              <div key={tube.id} className="flex items-center mt-4">
              <div className="ml-3 h-8 w-8 flex items-center justify-center rounded-full">
                <Avatar>
                  <AvatarImage src={tube.pictureTube} alt={tube.tubeName} />
                  <AvatarFallback>{tube.tubeName.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{tube.tubeName}</p>
                <p className="text-sm text-muted-foreground">Code Tube : {tube.id}</p>
              </div>
              <div className="ml-auto font-light text-sm">
              <Button variant="ghost" size="icon"> 
                    <MoreVertical  className="h-4 w-4" />
                  </Button>
                </div>
            </div>
            
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
