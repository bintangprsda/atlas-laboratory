import Link from "next/link"
import { siteConfig } from "@/config/site"
import NavigationSection from "./dashboard/navigation-section"
import IndicatorDashboard from "./dashboard/indicator-dashboard"
import RecentOrder from "./dashboard/recent-order"
import DatePicker from "./dashboard/date-picker"



export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-lg font-extrabold leading-tight tracking-tighter md:text-4xl">
          Welcome, <span className="font-regular">Atlas Laboratory</span>
        </h1>
        <p className="max-w-[700px] text-sm text-muted-foreground">
          Siloam Hospitlas Lippo Village
        </p>
      </div>
      <DatePicker />
      <NavigationSection />
      <IndicatorDashboard />
      <RecentOrder />
      </section>
  )
}
