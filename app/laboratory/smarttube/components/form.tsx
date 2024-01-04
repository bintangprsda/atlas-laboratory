"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, FlaskConical, PlusCircle, Trash2  } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"


export function DialogDemo() {
  return (
    <>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Klik Form</Button>
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-[950px] mx-auto p-4 rounded-md">
        <DialogHeader>
          <DialogTitle>Form laboratory</DialogTitle>
          <DialogDescription>
            Select your test and, Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search test..." className="pl-8 w-full sm:w-[500px] md:w-[900px]" />
        </div>
        <Tabs defaultValue="account" className="w-full sm:w-[900px]"> 
          <TabsList className="grid w-full sm:w-[500px] md:w-[900px] grid-cols-2"> 
            <TabsTrigger value="account">Front</TabsTrigger>
            <TabsTrigger value="password">Back</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <ScrollArea className="h-[300px]">
            <div className="mt-3 flex flex-row items-start space-x-3 space-y-0">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                FULL BLOOD COUNT
              </label>

            </div>
          </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="password">
            <ScrollArea className="h-[300px]">
            <div className="mt-3 flex flex-row items-start space-x-3 space-y-0">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms2"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                HBSAG QUALITATIVE
              </label>

            </div>
          </div>
            </ScrollArea>
          </TabsContent>
            
        </Tabs>


        <DialogFooter>
          <Button type="submit">Done</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
      <div className="w-full h-full flex items-center justify-center">
      <div className="w-full mx-auto max-w-[950] mb-5 grid md:grid-cols-2 gap-4">
        <Card className="mb-4 md:mb-0">
          <CardHeader>
            <CardTitle>Test Laboratory</CardTitle>
            <CardDescription>
              Select test laboratory
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Separator className="my-2" />
            <div className="space-y-4">
              <div className="grid gap-6">
                <ScrollArea className="h-[300px]">
                  <div className="flex mt-2 items-center justify-between space-x-4 ">
                    <div className="flex items-center space-x-4">
                      <div className="h-8 w-8 flex items-center justify-center rounded-full">
                        <FlaskConical className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-sm font-extrabold leading-none">
                          Full Blood Count
                        </h2>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="primary">2 Hours</Badge>
                          <p className="text-xs text-muted-foreground">Rp. 150.000</p>
                        </div>
                      </div>

                    </div>
                    <Button variant="ghost" size="icon">
                      <PlusCircle className="h-4 w-4" />
                    </Button>

                  </div>
                </ScrollArea>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Tube </CardTitle>
            <CardDescription>
              Total Tube for test Laboratory
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Separator className="my-2" />
            <div className="space-y-4">
              <div className="grid gap-6">
                <ScrollArea className="h-[300px]">
                  <div className="flex mt-2 items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">


                    </div>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>

                  </div>
                </ScrollArea>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
    </>
    
  )
}
