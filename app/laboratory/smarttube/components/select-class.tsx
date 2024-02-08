import React, { useState } from 'react';
// Ensure you import your Select components correctly based on the library you are using
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function DropdownSelect() {
  const [selectedClass, setSelectedClass] = useState('');

  return (
    <Select onValueChange={handleClassChange} value={selectedClass}>
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Select Class" />
    </SelectTrigger>
    <SelectContent>
      {/* It's crucial that the value attribute matches the expected format */}
      <SelectItem value="Class1">Class 1 - 15% Discount</SelectItem>
      <SelectItem value="Class2">Class 2 - 10% Discount</SelectItem>
      <SelectItem value="Class3">Class 3 - 5% Discount</SelectItem>
    </SelectContent>
  </Select>
  );
}

export default DropdownSelect;
