import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CancelOrder ({ selectedOrderTest }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Cancel</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cancel Sampel Order</DialogTitle>
          <DialogDescription>
            Confirmation {selectedOrderTest.namaPasien}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
          <Select>
            <SelectTrigger className="w-[380px]">
              <SelectValue placeholder="Select Description" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Description</SelectLabel>
                <SelectItem value="Sample Lysis">Sample Lysis</SelectItem>
                <SelectItem value="Sample is insufficient">Sample is insufficient</SelectItem>
                <SelectItem value="Not suitable">Not suitable</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          </div>
        </div>
        <DialogFooter>
            <DialogClose asChild>
            <Button type="button" variant="secondary">
              No
            </Button>
          </DialogClose>
          <Button type="submit" variant="default">Yes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

