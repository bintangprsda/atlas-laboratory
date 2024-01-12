import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { DashboardMenu } from "@/components/menu-dashboard"
import DatePicker from "@/components/date-picker";
import { SiteHeader } from "@/components/site-header"

export default function IndexPage() {
  return (
    <>
    <SiteHeader/>
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
    <div className="flex max-with flex-col items-center gap-2">
  <h1 className="text-lg text-center font-extrabold leading-tight tracking-tighter md:text-4xl">
    ATLAS <span className="font-regular text-blue-500">Laboratory</span>
  </h1>
  <p className="max-w-[700px] text-sm text-muted-foreground">
    Advance Feature for Laboratory Service
  </p>
      </div>
      <DashboardMenu />
      </section>
      </>
  )
}
