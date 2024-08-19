import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VacantPositionType } from "@/types/types";
import { Button } from "../ui/button";

type Props = {
  vacantPositionData: VacantPositionType;
  handleApplyButtonClick: (value: string) => void;
};

const JobDetailTab = ({
  vacantPositionData,
  handleApplyButtonClick,
}: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Job Description</CardTitle>
        <CardDescription className="text-md leading-loose">
          {vacantPositionData.jobDescription}
        </CardDescription>
      </CardHeader>
      <CardHeader>
        <CardTitle>Job Requirements</CardTitle>
        <CardDescription className="text-md leading-loose">
          {vacantPositionData.jobRequirements}
        </CardDescription>
      </CardHeader>

      {/* CTA GROUP */}
      <CardFooter className="w-full grid place-items-center">
        <div className="grid gap-6 place-items-center w-full lg:w-96 lg:pt-12">
          <Button
            className="w-full"
            onClick={() => handleApplyButtonClick("apply")}
          >
            Apply
          </Button>
          <span className="font-semibold">Or</span>
          <Button className="w-full" variant={"secondary"}>
            Refer a Friend
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default JobDetailTab;
