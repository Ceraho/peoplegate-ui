import React from "react";
import { Badge } from "../ui/badge";
import { HomeIcon, MapPin, BookUser } from "lucide-react";
import { VacantPositionType } from "@/types/types";

const JobDetailBanner = ({vacantPositionData}: {vacantPositionData: VacantPositionType}) => {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-md bg-gradient-to-tr from-secondary to-primary lg:h-[45dvh] lg:items-center lg:justify-center lg:gap-12">
      <div className="size-20 rounded-full bg-blue-700 grid place-items-center lg:size-40 lg:text-2xl">
        {vacantPositionData.companyName}
      </div>
      <h1 className="text-3xl font-semibold lg:text-6xl">
        {vacantPositionData.roleTitle}
      </h1>
      <div className="flex gap-4 flex-wrap">
        <Badge className="w-fit h-fit flex gap-3">
          <span>
            <HomeIcon size={24} />
          </span>
          <span>{vacantPositionData.remote}</span>
        </Badge>
        <Badge className="w-fit h-fit flex gap-3">
          <span>
            <MapPin size={24} />
          </span>
          <span>{vacantPositionData.location}</span>
        </Badge>
        <Badge className="w-fit h-fit flex gap-3">
          <span>
            <BookUser size={24} />
          </span>
          <span>{vacantPositionData.department}</span>
        </Badge>
      </div>
    </div>
  );
};

export default JobDetailBanner;
