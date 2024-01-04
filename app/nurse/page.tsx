import Link from "next/link"
import { siteConfig } from "@/config/site"
import NavigationSection from "./dashboard/navigation-section"
import IndicatorDashboard from "./dashboard/indicator-dashboard"
import RecentOrder from "./dashboard/recent-order"





export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-lg font-extrabold leading-tight tracking-tighter md:text-4xl">
          Nurse Dashboard
        </h1>
        <p className="max-w-[700px] text-sm text-muted-foreground">
          Nurse Siloam Hospitlas Lippo Village
        </p>
      </div>
      <NavigationSection />
      <RecentOrder />


    </section>
  )
}
