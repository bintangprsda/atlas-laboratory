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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AcceptOrder () {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Accept</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Accept Sampel Order</DialogTitle>
          <DialogDescription>
            Input number laboratory to accept sample 
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="name"
              defaultValue="2400013"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
            <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="submit">Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
