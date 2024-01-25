"use client"
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
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

const ResultTestLab = () => {
  const [orderTests, setOrderTests] = useState([]);
  const [selectedOrderTest, setSelectedOrderTest] = useState(null);

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

  const handleOrderTestClick = (orderTest) => {
    setSelectedOrderTest(orderTest);
  };

  return (
    <div className="grid md:grid-cols">
      {/* Order Test List Section */}
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
                    className="flex items-center hover:bg-secondary/80 rounded-lg p-2 cursor-pointer"
                    onClick={() => handleOrderTestClick(orderTest)}
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

      {/* Details Section */}
      {selectedOrderTest && (
        <Card className="col-span-3">
        <CardHeader>
          <CardTitle>{selectedOrderTest.namaPasien}</CardTitle>
          <CardDescription>{selectedOrderTest.namaRS}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
          <p className="text-xs text-muted-foreground mb-3">No. Reg: {selectedOrderTest.documentNumber}</p>

          {Array.isArray(selectedOrderTest.selectedTests) ? (
            <div className="text-sm text-muted-foreground">
              {selectedOrderTest.selectedTests.map((test, index) => (
                <div key={index}>
                 <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">No</TableHead>
                      <TableHead className="flex-1">Test Name</TableHead>
                      <TableHead className="w-[min-content] text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">1</TableCell>
                      <TableCell className="flex-1">
                          {test.testName}
                      </TableCell>
                      <TableCell className="w-[min-content] text-right">{test.price}</TableCell>
                    </TableRow>
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={2}>Total</TableCell>
                      <TableCell className="text-right">{selectedOrderTest.totalHarga}</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>

                </div>
              ))}
            </div>
          ) : (
            <>
              
              
            </>
          )}
          {/* Add more details as needed */}
          </div>
        </CardContent>
          <CardFooter className="justify-between space-x-2">
            <Label htmlFor="filePDF">Upload</Label>
                <Input id="resultTest" type="file" />
                <Button type="button" variant="secondary">
              Upload
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default ResultTestLab;
