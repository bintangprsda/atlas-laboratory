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
  FilePieChart
} from 'lucide-react';

const IndicatorDashboard = () => {
  return (
    <div className="grid md:grid-cols-4 gap-4 ">
      <Card  className="hover:bg-secondary/80">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Sample
          </CardTitle>
          <FilePieChart className="text-orange-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">45</div>
          
        </CardContent>
      </Card>
      <Card  className="hover:bg-secondary/80">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Selesai
          </CardTitle>
          <CheckCircle className="text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">30</div>
          
        </CardContent>
      </Card>
        <Card  className="hover:bg-secondary/80">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Running
          </CardTitle>
          <RefreshCw className="text-yellow-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5</div>
          
        </CardContent>
      </Card>
        <Card  className="hover:bg-secondary/80">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Dikirim
          </CardTitle>
          <Send className="text-indigo-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5</div>
          
        </CardContent>
      </Card>
      </div>
  );
};

export default IndicatorDashboard;