import { Button } from '@/components/ui/button';

function AddOrder({ items, onDelete, onUpdateQuantity }) {
  const handleQuantityChange = (e, itemName) => {
    const newQuantity = e.target.value;
    onUpdateQuantity(itemName, newQuantity);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
  {items.length > 0 ? (
    items.map((item, index) => (
      <div key={index} className="flex justify-between items-center mb-4 p-2 hover:bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-bold text-gray-600">{index + 1}.</span>
          <span className="text-sm font-medium text-gray-700">{item.namaBarang}</span>
        </div>
        <div className="flex items-center">
          <select
            value={item.quantity}
            onChange={(e) => handleQuantityChange(e, item.namaBarang)}
            className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label={`Select quantity for ${item.namaBarang}`}
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <span className="ml-4 mr-2 text-sm font-medium text-gray-600">PCS</span>
          <Button
            onClick={() => onDelete(item)}
            variant={"destructive"}
            aria-label={`Delete ${item.namaBarang}`}
          >
            Delete
          </Button>
        </div>
      </div>
    ))
  ) : (
    <p className="text-sm text-gray-600">No items added.</p>
  )}
</div>

  );
}

export default AddOrder;