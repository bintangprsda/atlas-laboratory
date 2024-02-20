import React from 'react';
import { Button } from "@/components/ui/button"; // Import your custom Button component

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center items-center space-x-1 my-4">
      {/* Previous Button */}
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded text-sm"
      >
        Previous
      </Button>
      
      {/* Page Numbers */}
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          className="px-3 py-1 rounded text-sm"
        >
          {page}
        </Button>
      ))}
      
      {/* Next Button */}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded text-sm"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
