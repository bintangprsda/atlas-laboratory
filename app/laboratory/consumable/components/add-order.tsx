import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardFooter  } from '@/components/ui/card';
import { Trash  } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area"

function AddOrder({ items, onDelete, onUpdateQuantity }) {
  const handleQuantityChange = (e, itemName) => {
    const newQuantity = e.target.value;
    onUpdateQuantity(itemName, newQuantity);
  };

  return (
    <Card className="flex flex-col p-2 md:p-4 shadow-md rounded-lg h-full">
  <CardHeader className="mb-3 md:mb-4">
    <h2 className="text-lg md:text-xl font-semibold">Order Summary</h2>
  </CardHeader>
  <CardContent className="flex-grow">
    <ScrollArea>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row justify-between items-center mb-3 md:mb-4 p-2 rounded-lg">
            <div className="flex items-center space-x-2 md:space-x-3 justify-start">
              <span className="text-xs md:text-sm font-bold">{index + 1}.</span>
              <span className="text-xs md:text-sm font-medium">{item.namaBarang}</span>
            </div>
            <div className="flex items-center mt-2 md:mt-0">
              <select
                value={item.quantity}
                onChange={(e) => handleQuantityChange(e, item.namaBarang)}
                className="form-select appearance-none block w-full px-2 md:px-3 py-1 text-xs md:text-base font-normal bg-white border border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                aria-label={`Select quantity for ${item.namaBarang}`}
              >
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              <span className="ml-2 md:ml-4 mr-1 md:mr-2 text-xs md:text-sm font-medium">PCS</span>
              <Button
                onClick={() => onDelete(item)}
                variant="outline"
                aria-label={`Delete ${item.namaBarang}`}
                className="text-xs md:text-sm flex items-center justify-center"
              >
                {/* Ensure the icon size adapts responsively, if needed */}
                <Trash size="1.2em"/> {/* Adjust the icon size as per your design system */}
              </Button>
            </div>
          </div>

        ))
      ) : (
        <p className="text-xs md:text-sm">No items added.</p>
      )}
    </ScrollArea>
  </CardContent>
  <CardFooter className="mt-auto px-2 md:px-4 md:px-12 py-3 md:py-5 border-t flex items-center justify-end gap-x-2 md:gap-x-3">
    <Button variant="outline" className="text-xs md:text-sm">
      Cancel
    </Button>
    <Button variant="default" className="text-xs md:text-sm">
      Order
    </Button>
  </CardFooter>
</Card>



  );
}

export default AddOrder;