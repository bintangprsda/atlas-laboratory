"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlusCircle  } from 'lucide-react';

export default function UserCard() {
  const [barang, setBarang] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("../../api/consumable"); // Pastikan URL ini benar
        const data = await response.json();
        setBarang(data.barang); // Sesuaikan dengan struktur data API Anda
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      
        <Card  className="px-12 py-10 tablet:min-w-[500px] shadow-md">
        {barang.map((item, index) => (
          <>
          <div key={index} className="flex items-center space-x-4 rounded-md border p-4 mb-2">
            <CardContent className="px-0 flex items-stretch justify-normal gap-x-6">
            <Avatar style={{ width: '96px', height: '96px' }}> 
  <AvatarImage src={item.gambarBarang || "/sample-image.jpg"} alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

              <div className="space-y-2">
                <h1 className="font-semibold">{item.namaBarang}</h1>
                <div className="text-gray-500 text-xs">
                  {item.stokBarang} PCS
                </div>
                <div className="flex items-center justify-normal gap-x-3">
                  <div className="grid gap-2">
                    <Select>
                      <SelectTrigger variant="outline" className="w-full">
                        <SelectValue placeholder="Select Order" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10 PCS</SelectItem>
                        <SelectItem value="50">50 PCS</SelectItem>
                        <SelectItem value="100">100 PCS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button size={"icon"} variant={"outline"}>
                    <PlusCircle size="1.4em" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </div>
          </>
          ))}
          <CardFooter className="border-t pt-5 pb-0 flex items-center justify-end gap-x-3">
            <Button variant={"outline"}>
              Cancel
            </Button>
            <Button variant={"default"}>
              Order
            </Button>
          </CardFooter>
          
        </Card>
      
    </div>
  );
}
