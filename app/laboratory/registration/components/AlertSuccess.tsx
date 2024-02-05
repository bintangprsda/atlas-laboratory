import { Send } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertSuccess() {
  return (
    <Alert className="bg-green-300">
      <Send className="h-4 w-4" />
      <AlertTitle>Registration Successful</AlertTitle>
      <AlertDescription>
        Patient data has been successfully sending.
      </AlertDescription>
    </Alert>
  )
}
