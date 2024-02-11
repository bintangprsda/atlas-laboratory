"use client";
import { useEffect, useState } from 'react';
import Link from "next/link"
import { siteConfig } from "@/config/site"
import NavigationSection from "./dashboard/navigation-section"
import IndicatorDashboard from "./dashboard/indicator-dashboard"
import RecentOrder from "./dashboard/recent-order"
import useAuth from '../../helpers/hooks/useAuth';





export default function IndexPage() {
  useAuth();
  // State untuk menyimpan data pengguna
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Mendapatkan dan mem-parsing data pengguna dari localStorage saat komponen dimuat
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-lg font-extrabold leading-tight tracking-tighter md:text-4xl">
        Welcome, <span className="font-regular">{user ? user.completeName : 'Atlas Laboratory'}</span>
        </h1>
        <p className="max-w-[700px] text-sm text-muted-foreground">
          Nurse  {user ? user.hospital : 'Siloam Hospitlas Lippo Village'}
        </p>
      </div>
      <NavigationSection />
      <RecentOrder />


    </section>
  )
}
