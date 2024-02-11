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
    <div className="mx-auto  max-w-7xl flex-1  items-center  justify-center  ">
        <div className="mt-20 items-center justify-between sm:mt-32 md:flex">
          <div>
            <div className=" mx-auto   flex h-7 w-fit items-center rounded-md bg-[#3a1703] mb-4 px-4 sm:ml-0  ">
              <p className="text-sm text-[#f56324]">
                Currently in private beta
              </p>
            </div>

            <div className="">
              <h1 className="  bg-gradient-to-br from-black to-neutral-600 bg-clip-text text-center text-5xl font-bold  text-transparent dark:bg-gradient-to-r dark:from-white dark:to-neutral-800 sm:text-left sm:text-5xl md:max-w-2xl  xl:text-7xl/none ">
                Welcome to <br /> ATLAS Laboratory
              </h1>

              <div className="px-4 text-neutral-600 lg:px-0 ">
                <p className="mt-6 max-w-xl text-center sm:text-left">
                  Build, test and, and send transactional emails at scale.
                  Resend provides the best developer experience helping you
                  reach users instead of spam folders{" "}
                </p>
                <div className="mt-4">
                  <h1 className="text-center sm:text-left">
                    Press{" "}
                    <span className="rounded-md border border-neutral-600 bg-neutral-800  px-1 text-sm ">
                      A
                    </span>{" "}
                    to request access
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div>
            <video
              loop
              muted
              className="hidden aspect-square bg-transparent md:block"
              src="#"
            />
          </div>
        </div>
      </div>
      </section>
      </>
  )
}
