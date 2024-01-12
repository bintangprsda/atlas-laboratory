"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { testData } from "./testData";

export function DialogDemo() {
  const { register, handleSubmit } = useForm();
  const [searchValue, setSearchValue] = useState("");
  const items = testData;

  const onSubmit = (data) => {
    console.log(data);
  };

  const filterTests = (tests) => {
    return tests.filter((test) =>
      test.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Klik Form</Button>
        </DialogTrigger>
        <DialogContent className="w-full sm:max-w-[950px] mx-auto p-4 rounded-md">
          <DialogHeader>
            <DialogTitle>Form laboratory</DialogTitle>
            <DialogDescription>
              Select your test and, Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="relative">
            <Input
              {...register("search")}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search test..."
              className="pl-8 w-full sm:w-[500px] md:w-[900px]"
            />
          </div>
          <Tabs defaultValue="front" className="w-full sm:w-[900px]">
            <TabsList className="grid w-full sm:w-[500px] md:w-[900px] grid-cols-2">
              <TabsTrigger value="front">Front</TabsTrigger>
              <TabsTrigger value="back">Back</TabsTrigger>
            </TabsList>
            <TabsContent value="front">
              <ScrollArea className="h-[300px]">
                {items.front.map((category) => (
                  <div key={category.category}>
                    <Badge className="mt-2 ml-auto w-full mb-4 flex items-center justify-center">
                      <div className="font-bold">{category.category}</div>
                    </Badge>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {category.subcategories.map((subcategory) => (
                        <div key={subcategory.name}>
                          <h3 className="text-sm font-bold mb-2">{subcategory.name}</h3>
                          <div className="mt-3 space-y-3">
                            {filterTests(subcategory.tests).map((test) => (
                              <div key={test.id} className="flex items-start space-x-3">
                                <div className="grid gap-1.5 leading-none">
                                  <Checkbox id={test.id} {...register(test.id)} />
                                </div>
                                <label
                                  htmlFor={test.id}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {test.name}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </TabsContent>
            <TabsContent value="back">
              <ScrollArea className="h-[300px]">
                {items.back.map((category) => (
                  <div key={category.category}>
                    <Badge className="mt-2 ml-auto w-full mb-4 flex items-center justify-center">
                      <div className="font-bold">{category.category}</div>
                    </Badge>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {category.subcategories.map((subcategory) => (
                        <div key={subcategory.name}>
                          <h3 className="text-sm font-bold mb-2">{subcategory.name}</h3>
                          <div className="mt-3 space-y-3">
                            {filterTests(subcategory.tests).map((test) => (
                              <div key={test.id} className="flex items-start space-x-3">
                                <div className="grid gap-1.5 leading-none">
                                  <Checkbox id={test.id} {...register(test.id)} />
                                </div>
                                <label
                                  htmlFor={test.id}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {test.name}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </TabsContent>
          </Tabs>
          <DialogFooter>
          <Button type="close" variant="default" onClick={handleSubmit(onSubmit)}>
    Save
  </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
