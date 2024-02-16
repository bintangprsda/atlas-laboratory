"use client";
import React, { useState, useEffect } from 'react';
import { Card,CardHeader,CardTitle,CardDescription , CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

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
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlusCircle  } from 'lucide-react';
import AddOrder from "./add-order";

export default function Consumable() {
  const [barang, setBarang] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
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

  const handleAddItemClick = (item) => {
    // Cek apakah item sudah ada dalam selectedItems berdasarkan namaBarang atau kriteria unik lainnya
    const isItemAlreadyAdded = selectedItems.some(selectedItem => selectedItem.namaBarang === item.namaBarang);
  
    if (!isItemAlreadyAdded) {
      const newItem = { ...item, quantity: 1 };
      setSelectedItems(prevItems => [...prevItems, newItem]);
    } else {
      // Jika item sudah ada, bisa menampilkan notifikasi atau update logika lainnya
      alert("Item already added.");
    }
  };

  const handleUpdateQuantity = (itemName, newQuantity) => {
    setSelectedItems(prevItems =>
      prevItems.map(item =>
        item.namaBarang === itemName ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  

  const handleDeleteItem = (itemToDelete) => {
    setSelectedItems(prevItems => prevItems.filter(item => item.namaBarang !== itemToDelete.namaBarang));
  };

  if (isLoading) return <p>Loading...</p>;

  return (
          <div className="w-full mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="px-4 md:px-12 py-10 shadow-md">
          <CardHeader>
            <h2 className="text-lg md:text-xl">🧬 Inventory item</h2>
            <p className="text-sm md:text-base">select the type of inventory item</p>
          </CardHeader>
          <ScrollArea  className="h-[400px] ">
            {barang.map((item, index) => (
              <div key={index} className="flex w-full mb-2 items-center justify-between rounded-2xl border-[1px] border-gray-200 p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                <CardDescription className="flex items-center">
                  <div className="">
                    <Avatar className="h-20 w-20 md:h-[83px] md:w-[83px] rounded-lg">
                      {item.gambarBarang ? (
                        <img src={item.gambarBarang} alt="Item" className="h-full w-full object-cover" />
                      ) : (
                        <span>CN</span>
                      )}
                    </Avatar>
                  </div>
                  <div className="ml-4">
                    <h1 className="font-semibold text-sm ">{item.namaBarang}</h1>
                    <div className="flex items-center justify-between gap-x-3">
                      <Badge className="text-xs font-medium">
                        {item.stokBarang}
                      </Badge>
                      {/* Implement responsive select size here */}
                      
                    </div>
                  </div>
                </CardDescription>
                <div className="flex mr-6 items-center justify-center ">
                <button onClick={() => handleAddItemClick(item)} className="text-xs md:text-sm">
                <PlusCircle size="1.2em" />
              </button>
                </div>
              </div>
            ))}
          </ScrollArea>
          <CardFooter className="border-t pt-5 pb-0 flex items-center justify-end gap-x-3">
            <Button variant={"outline"} className="text-xs md:text-sm">
              Cancel
            </Button>
            <Button variant={"default"} className="text-xs md:text-sm">
              Order
            </Button>
          </CardFooter>
        </Card>
        <AddOrder items={selectedItems} onDelete={handleDeleteItem} onUpdateQuantity={handleUpdateQuantity} />

      </div>

  );
}
