import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { DashboardMenu } from "@/components/menu-dashboard"
import DatePicker from "@/components/date-picker";


export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-lg font-extrabold leading-tight tracking-tighter md:text-4xl">
          Welcome, <span className="font-regular">Bintang Persada</span>
        </h1>
        <p className="max-w-[700px] text-sm text-muted-foreground">
          Laboratory Siloam Hospitlas Lippo Village
        </p>
      </div>
      <DatePicker />
      <DashboardMenu />
      </section>
  )
}
