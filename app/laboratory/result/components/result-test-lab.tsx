"use client"
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import DatePicker from "./date-picker";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserCheck } from "lucide-react";

const ResultTestLab = () => {
  const [orderTests, setOrderTests] = useState([]);

  useEffect(() => {
    // Fetch orderTest data when the component mounts
    const fetchOrderTestData = async () => {
      try {
        const response = await fetch("../../api/order");
        const data = await response.json();
        setOrderTests(data.orderTests);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchOrderTestData();
  }, []);

  return (
    <div className="grid md:grid-cols">
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Order Date</CardTitle>
          <CardDescription>
            <DatePicker />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            <div className="space-y-8">
              {orderTests
                .filter((orderTest) => orderTest.status === "Selesai")
                .map((orderTest, index) => (
                  <div
                    key={index}
                    className="flex items-center hover:bg-secondary/80 rounded-lg p-2"
                  >
                    <div className="h-8 w-8 flex items-center justify-center rounded-full">
                      <UserCheck className="h-7 w-7" />
                    </div>
                    <div className="ml-4 flex-shrink-0 space-y-1">
                      <p className="text-sm font-medium leading-none truncate">
                        {orderTest.namaPasien}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {orderTest.namaRS}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {orderTest.tanggalKirim}
                      </p>
                    </div>
                    <Badge className="ml-auto text-xs" variant={orderTest.status}>
                      {orderTest.status}
                    </Badge>
                  </div>
                ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultTestLab;
