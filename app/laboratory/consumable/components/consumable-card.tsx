"use client";
import React, { useState, useEffect } from 'react';
import { Card,CardHeader,CardTitle,CardDescription , CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Search, Trash2, PlusCircle, FlaskConical } from "lucide-react"

export default function Consumable1() {
    const [barang, setBarang] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Ensure the URL is correct and accessible
        const response = await fetch("../../api/consumable"); 
        const data = await response.json();
        setBarang(data.barang); // Adjust according to your API response structure
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
    <Card className="px-12 py-10 tablet:min-w-[500px] shadow-md">
        <CardHeader>
          <h2>🧬 Consumable</h2>
          <p>Select your store consumable</p>
        </CardHeader>
    <div className="w-full mb-5 grid md:grid-cols-4 gap-4">
        {barang.map((item, index) => (
      <div className="mx-auto px-2">
        <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
        <img 
        className="w-full rounded-lg object-cover object-center" 
        src={item.gambarBarang || "/sample-image.jpg"} 
        alt="Item"
        style={{ width: '150px', height: '150px' }} 
        />
        <p className="my-4 pl-4 font-bold text-gray-500">{item.namaBarang}</p>
        <Badge className="mb-4 ml-4 text-xs font-semibold text-gray-800">{item.stokBarang} PCS</Badge>
        </div>
        </div>
      ))}
    </div>
    </Card>
  );
}

