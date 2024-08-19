import { jobType } from "@/types/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Building2, Clock9, Laptop, MapPin } from "lucide-react";

export const JobCard = ({ jobDetails }: { jobDetails: jobType }) => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{jobDetails.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <CardDescription className="text-md">{jobDetails.desc}</CardDescription>
          <div className="flex flex-wrap gap-3">
            <Badge className="gap-2">
              <span>
                <Clock9 />
              </span>
              <p>{jobDetails.type}</p>
            </Badge>
            <Badge className="gap-2">
              <span>
                <Laptop />
              </span>
              <p>{jobDetails.remote}</p>
            </Badge>
            <Badge className="gap-2">
              <span>
                <Building2 />
              </span>
              <p>{jobDetails.department}</p>
            </Badge>
            <Badge className="gap-2">
              <span>
                <MapPin />
              </span>
              <p>{jobDetails.location}</p>
            </Badge>
          </div>
        </CardContent>
      </Card>
    );
  };