import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  ChevronLeft,
} from 'lucide-react';
import  UsersDashboard  from "../components/total-users"
import  {DashboardUsers}  from "../users/components/list-users"
import  {ListHospitals}  from "../users/components/list-hospitals"
import  {ListRoles}  from "../users/components/list-roles"



const UsersList: React.FC = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w flex-col items-start gap-2">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-lg font-extrabold leading-tight tracking-tighter md:text-4xl">
            Users
          </h1>
          <div className="flex text-xs font-extrabold flex-grow justify-end">
            <Link
              href="/laboratory/management"
              className={buttonVariants({ variant: "ghost" })}
            >
              <ChevronLeft />
              Back
            </Link>
          </div>

        </div>
        <p className="max-w-[700px] text-sm text-muted-foreground">
          Request for Items for Blood Collection Preparation from Wards
        </p>
      </div>
      <UsersDashboard/>
      <div className="w-full h-full flex items-center justify-center">
      <div className="w-full mx-auto max-w-[950] mb-5 grid md:grid-cols gap-4">
        <DashboardUsers/>
      </div>
      </div>
      
    </section>

  );
};

export default UsersList;

