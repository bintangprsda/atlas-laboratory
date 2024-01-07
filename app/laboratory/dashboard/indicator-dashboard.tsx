"use client"
import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  RefreshCw,
  Send,
  FilePieChart
} from 'lucide-react';

const IndicatorDashboard = () => {
  const [orderTests, setOrderTests] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('../../api/order'); // Assuming your API route is correct
        const data = await response.json();
        setOrderTests(data.orderTests); // Set the retrieved data in the state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  // Function to calculate counts for different statuses
  const getStatusCounts = (status) => {
    return orderTests.reduce((count, test) => {
      if (test.status === status) {
        return count + 1;
      }
      return count;
    }, 0);
  };

  // Calculate counts for different statuses
  const totalTests = orderTests.length;
  const completedTests = getStatusCounts('Selesai');
  const runningTests = getStatusCounts('Running');
  const sentTests = getStatusCounts('Dikirim');

  return (
    <div className="grid md:grid-cols-4 gap-4 ">
      {/* Display cards with status counts */}
      <Card className="hover:bg-secondary/80">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Sample
          </CardTitle>
          <FilePieChart className="text-orange-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalTests}</div>
        </CardContent>
      </Card>
      <Card className="hover:bg-secondary/80">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Selesai
          </CardTitle>
          <CheckCircle className="text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{completedTests}</div>
        </CardContent>
      </Card>
      <Card className="hover:bg-secondary/80">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Running
          </CardTitle>
          <RefreshCw className="text-yellow-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{runningTests}</div>
        </CardContent>
      </Card>
      <Card className="hover:bg-secondary/80">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Dikirim
          </CardTitle>
          <Send className="text-indigo-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{sentTests}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IndicatorDashboard;
