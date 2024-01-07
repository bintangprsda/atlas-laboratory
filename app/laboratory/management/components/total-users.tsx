import Link from "next/link"
import { siteConfig } from "@/config/site"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  CheckCircle,
  RefreshCw,
  Send,
  FilePieChart,
  Stethoscope,
  Microscope ,
  FileSpreadsheet ,
  Truck 
} from 'lucide-react';

const UsersDashboard = () => {
  return (
    <div className="grid md:grid-cols-4 gap-4 ">
      <Card  className="hover:bg-secondary/80">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Laboratory
          </CardTitle>
          <Microscope className="text-orange-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">45</div>
        </CardContent>
      </Card>
      <Card  className="hover:bg-secondary/80">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Nurse
          </CardTitle>
          <Stethoscope  className="text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">30</div>
        </CardContent>
      </Card>
        <Card  className="hover:bg-secondary/80">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Pick-up
          </CardTitle>
          <Truck  className="text-yellow-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5</div>
        </CardContent>
      </Card>
        <Card  className="hover:bg-secondary/80">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Finance
          </CardTitle>
          <FileSpreadsheet className="text-indigo-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5</div>
        </CardContent>
      </Card>
      </div>
  );
};

export default UsersDashboard;