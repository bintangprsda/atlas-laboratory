import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DatePickerWithRange } from './date-range';
import { DataFilter } from "./data-filter"
import Pagination from './pagination'; // Ensure this path matches where your Pagination component is saved

export function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Adjust the page size as needed
  const [orderTests, setOrderTests] = useState([]); // This will store the fetched data

  useEffect(() => {
    // Fetch orderTest data when the component mounts
    const fetchOrderTestData = async () => {
      try {
        const response = await fetch("/api/order"); // Adjust the fetch URL as needed
        const data = await response.json();
        setOrderTests(data.orderTests); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchOrderTestData();
  }, []);

  const totalPages = Math.ceil(orderTests.length / pageSize);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the data to display on the current page
  const currentTableData = orderTests.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <Card>
      <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
      <div className="ml-auto hidden h-8 lg:flex mb-5">
      <DatePickerWithRange />
      <DataFilter/>
            </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>Tgl. Kirim</TableHead>
            <TableHead>Registrasi</TableHead>
            <TableHead>Rs. Pengirim</TableHead>
            <TableHead>Pasien</TableHead>
            <TableHead>Test</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentTableData.map((test, index) => (
            <TableRow key={index}>
              <TableCell>{(currentPage - 1) * pageSize + index + 1}</TableCell>
              <TableCell>{test.tanggalKirim}</TableCell>
              <TableCell>{test.documentNumber}</TableCell>
              <TableCell>{test.namaRS}</TableCell>
              <TableCell>{test.namaPasien}</TableCell>
              <TableCell>
                {test.selectedTests.map((t, idx) => (
                  <div key={idx}>{t.testName}</div>
                ))}
              </TableCell>
              <TableCell>{test.status}</TableCell>
              <TableCell className="text-right">
              {test.selectedTests.map((t, idx) => (
                  <div key={idx}>{t.price}</div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={7}>Total</TableCell>
            <TableCell className="text-right">Custom Total Calculation</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      </CardContent>
      <CardFooter>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

        </CardFooter>
     
    </Card>
  );
}
