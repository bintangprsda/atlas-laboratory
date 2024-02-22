"use client"
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table"
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

  // This function can be called to refresh data
  const fetchData = async () => {
    try {
      const response = await fetch("../../api/order"); // Adjust the path as needed
      const data = await response.json();
      setOrderTests(data.orderTests);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
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
          <CardTitle>📅 Order Date</CardTitle>
          <CardDescription>
            {/* Replace DatePicker with your actual DatePicker component */}
            <DatePicker validDates={orderTests.map(test => test.tanggalKirim)} />

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
      
            <Card className="col-span-3">
            {selectedOrderTest && (
              <>
              <CardHeader>
                <CardTitle>{selectedOrderTest.namaPasien}</CardTitle>
                <p className="text-xs text-muted-foreground mb-3">Username : {selectedOrderTest.username}</p>
                <p className="text-xs text-muted-foreground mb-3">hospital : {selectedOrderTest.hospital}</p>
                <CardDescription>
                  {selectedOrderTest.namaRS}
                  </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <p className="text-xs text-muted-foreground mb-3">No. Reg: {selectedOrderTest.documentNumber}</p>
                  
                  {Array.isArray(selectedOrderTest.selectedTests) ? (
                    <div className="text-sm text-muted-foreground">
                      {/* Assume Table, TableHeader, etc., are components you have defined or imported */}
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">No</TableHead>
                            <TableHead className="flex-1">Test Name</TableHead>
                            <TableHead className="w-[min-content] text-right">Price</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {selectedOrderTest.selectedTests.map((test, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{index + 1}</TableCell>
                              <TableCell className="flex-1">{test.testName}</TableCell>
                              <TableCell className="w-[min-content] text-right">{test.price}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                        <TableFooter>
                          <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell className="text-right">{selectedOrderTest.totalHarga}</TableCell>
                          </TableRow>
                        </TableFooter>
                      </Table>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-end gap-x-2">
                <CancelOrder selectedOrderTest={selectedOrderTest} />
                <AcceptOrder selectedOrderTest={selectedOrderTest} refreshData={fetchData} />
              </CardFooter>
              </>
            )}
            </Card>
          
      </div>
    </div>
    </div>
    
  );
};

export default OrderRequest;
