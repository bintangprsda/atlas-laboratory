import { Metadata } from "next"
import Link from "next/link"
import { Icons } from "@/components/icons"
import { UserAuthForm } from "./components/login-form"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Login",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>
    <SiteHeader/>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">

        <div className="p-5 flex flex-col space-y-2 text-center justify-center">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <Icons.logo className="mx-auto h-6 w-6" />
              <h1 className="text-2xl font-semibold tracking-tight">
                Login
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your Username and Password to login.
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}