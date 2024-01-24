"use client"
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import DatePicker from "./date-picker";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserCheck } from "lucide-react";
import { AcceptOrder } from "./accept"
import { CancelOrder } from "./cancel"

const OrderRequest = () => {
  const [orderTests, setOrderTests] = useState([]);
  const [selectedOrderTest, setSelectedOrderTest] = useState(null);

  useEffect(() => {
    // Fetch orderTest data when the component mounts
    const fetchOrderTestData = async () => {
      try {
        const response = await fetch("../../api/order");
        const data = await response.json();
        console.log("Fetched Data:", data); // Log the fetched data to inspect it
        setOrderTests(data.orderTests);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchOrderTestData();
  }, []);

  const handleOrderTestClick = (orderTest) => {
    setSelectedOrderTest(orderTest);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full mx-auto max-w-[950] mb-5 grid md:grid-cols-2 gap-4">
    <div className="grid md:grid-cols">
      {/* Order Test List Section */}
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Order Date</CardTitle>
          <CardDescription>
            {/* Replace DatePicker with your actual DatePicker component */}
            <DatePicker />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            <div className="space-y-8">
              {orderTests
                .filter((orderTest) => orderTest.status !== "Selesai")
                .map((orderTest, index) => (
                  <div
                    key={index}
                    className="flex items-center hover:bg-secondary/80 rounded-lg p-2 cursor-pointer"
                    onClick={() => handleOrderTestClick(orderTest)}
                  >
                    <div className="h-8 w-8 flex items-center justify-center rounded-full">
                      {/* Replace UserCheck with your actual icon or image component */}
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

      <div className="grid md:grid-cols">
      {selectedOrderTest && (
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>{selectedOrderTest.namaPasien}</CardTitle>
            <CardDescription>{selectedOrderTest.namaRS}</CardDescription>
          </CardHeader>
          <CardContent>
          <ScrollArea className="h-[300px]">
            <p className="text-xs text-muted-foreground">No. Reg: {selectedOrderTest.documentNumber}</p>

            {Array.isArray(selectedOrderTest.selectedTests) ? (
              <div className="text-sm text-muted-foreground">
                {selectedOrderTest.selectedTests.map((test, index) => (
                  <div key={index}>
                    <p>Price: {test.price}</p>
                    <p>Test Name: {test.testName}</p>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <p>Price: {selectedOrderTest.selectedTests?.price}</p>
                <p>Test Name: {selectedOrderTest.selectedTests?.testName}</p>
              </>
            )}
            {/* Add more details as needed */}
            </ScrollArea>
          </CardContent>
          <CardFooter className="justify-between space-x-2">
          <CancelOrder/>
          <AcceptOrder/>
          </CardFooter>
        </Card>
      )}
      </div>
    </div>
    </div>
    
  );
};

export default OrderRequest;
