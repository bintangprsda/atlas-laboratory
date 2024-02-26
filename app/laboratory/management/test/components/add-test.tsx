
import { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
  } from "@/components/ui/card";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import {Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AddTest = () => {
  const [formData, setFormData] = useState({
    testName: '',
    price: '',
    codeTube: '10',
    type: 'INTERNAL',
    jadwal: '',
    resultTest: '',
    category: 'HEMATOLOGY',
    deskripsi: '',
    keterangan: '',
    kodeTest: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      console.log('Submitting form:', formData);
      const response = await fetch('../../../api/addTest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add data');
      }

      const data = await response.json();
      console.log('Response:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add New</Button>
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-[950px] mx-auto p-4 rounded-md">
        <DialogHeader>
          <DialogTitle>Add New</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <Card className="w-full mt-4">
        <CardContent className="grid gap-6">
      <Form>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-5">
          <div className="grid gap-2">
            <Label htmlFor="testName">Test Name</Label>
            <Input
              id="testName"
              name="testName"
              type="text"
              placeholder="Input Test Name..."
              value={formData.testName}
            onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              type="number"
              placeholder="Input Price..."
              value={formData.price}
            onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="jadwal">Work Schedule</Label>
            <Input
              id="jadwal"
              name="jadwal"
              type="text"
              placeholder="Input Schedule..."
              value={formData.jadwal}
            onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="kodeTest">Code Test</Label>
            <Input
              id="kodeTest"
              name="kodeTest"
              type="text"
              placeholder="Input Code..."
              value={formData.kodeTest}
            onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="grid gap-2">
            <Label htmlFor="codeTube">Code Tube</Label>
            <Select
              id="codeTube"
              name="codeTube"
              value={formData.codeTube}
            onChange={handleChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Code Tube" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="13">11</SelectItem>
                <SelectItem value="30">30</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="resultTest">Result Test</Label>
            <Input
              id="resultTest"
              name="resultTest"
              type="number"
              placeholder="Input Result..."
              value={formData.resultTest}
            onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Select
              id="category"
              name="category"
              value={formData.category}
            onChange={handleChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="HEMATOLOGY">HEMATOLOGY</SelectItem>
                <SelectItem value="KIMIA">KIMIA</SelectItem>
                <SelectItem value="SEROLOGY">SEROLOGY</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="type">Type</Label>
            <Select
              id="type"
              name="type"
              value={formData.type}
            onChange={handleChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="EXTERNAL">EXTERNAL</SelectItem>
                <SelectItem value="INTERNAL">INTERNAL</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="deskripsi">Description</Label>
            <Input
              id="deskripsi"
              name="deskripsi"
              type="text"
              placeholder="Input Description..."
              value={formData.deskripsi}
            onChange={handleChange}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="keterangan">Information</Label>
            <Input
              id="keterangan"
              name="keterangan"
              type="text"
              placeholder="input Information Test..."
              value={formData.keterangan}
            onChange={handleChange}
            />
          </div>
        </div>
      </Form>

      </CardContent>
            </Card>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="button" variant="default " onClick={handleSubmit}>
              Save
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
   );
};
export default AddTest;