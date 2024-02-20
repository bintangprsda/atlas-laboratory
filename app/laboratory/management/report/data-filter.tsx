"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SlidersHorizontal } from 'lucide-react';

export function DataFilter({ filterOptions, onFilterChange }) {
  const handleFilterChange = (rsName, checked) => {
    onFilterChange(rsName, checked);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="ml-auto">
          <SlidersHorizontal className="mr-2 h-4 w-4"/>Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>Choose RS</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {filterOptions.map((option, index) => (
          <DropdownMenuCheckboxItem
            key={index}
            checked={option.checked}
            onCheckedChange={(checked) => handleFilterChange(option.name, checked)}
          >
            {option.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
