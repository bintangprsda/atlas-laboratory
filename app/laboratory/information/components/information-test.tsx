import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"

const InformationTest = () => {
  return (
    <div className="grid md:grid-cols">
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Detail Parameter</CardTitle>
          <CardDescription>
            Test laboratory
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="flex items-center hover:bg-secondary/80 rounded p-2">
              <div className="space-y-1">
                <p className="text-sm font-medium">
                  Full Blood Count ( Hb. Ht, E, Leukocyte, Platelet, MVC, MCH, MCHC )
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  Rp. 150.000
                </p>
                <Badge className="ml-auto text-xs" variant="primary">
                  Detail
                </Badge>
              </div>
            </div>
            <div className="flex items-center hover:bg-secondary/80 rounded p-2">
              <div className="space-y-1">
                <p className="text-sm font-medium">
                  Full Blood Count ( Hb. Ht, E, Leukocyte, Platelet, MVC, MCH, MCHC )
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  Rp. 150.000
                </p>
                <Badge className="ml-auto text-xs" variant="primary">
                  Detail
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default InformationTest;