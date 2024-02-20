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
import { DataFilter } from "./data-filter"
import Pagination from './pagination'; // Ensure this path matches where your Pagination component is saved
import { DatePickerWithRange } from './date-range';

export function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const [orderTests, setOrderTests] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    const fetchOrderTestData = async () => {
      try {
        const response = await fetch("/api/order");
        const data = await response.json();
        setOrderTests(data.orderTests);
        // Generate filter options based on unique Rs. Pengirim names
        const rsNames = Array.from(new Set(data.orderTests.map(test => test.namaRS)))
                            .map(name => ({ name, checked: false }));
        setFilterOptions(rsNames);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchOrderTestData();
  }, []);

  const handleFilterChange = (rsName, checked) => {
    setFilterOptions(options =>
      options.map(option => ({
        ...option,
        checked: option.name === rsName ? checked : option.checked,
      }))
    );
  };

  // Determine if any filters are active
  const isAnyFilterActive = filterOptions.some(option => option.checked);

  // Filter data based on active filters or return all data if no filters are active
  const filteredData = isAnyFilterActive
    ? orderTests.filter(test =>
        filterOptions.find(option => option.name === test.namaRS && option.checked)
      )
    : orderTests; // Default to all data if no filters are selected

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const currentTableData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Card>
      <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
      <div className="ml-auto hidden h-8 lg:flex mb-5">
      <DatePickerWithRange />
      <DataFilter filterOptions={filterOptions} onFilterChange={handleFilterChange} />
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
