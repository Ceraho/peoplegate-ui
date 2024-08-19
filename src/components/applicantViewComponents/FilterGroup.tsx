"use client";

import { Filter, FilterX } from "lucide-react";
import { Button } from "../ui/button";
import { CheckboxItem } from "./CheckboxItem";
import { cn } from "@/lib/utils";
import { useState } from "react";

const filterGroup = {
  keyword: "",
  jobType: [
    {
      id: "full-time",
      label: "Full-Time",
      checked: false,
    },
    {
      id: "part-time",
      label: "Part-Time",
      checked: false,
    },
    {
      id: "internship",
      label: "Internship",
      checked: false,
    },
  ],
  remote: [
    {
      id: "remote",
      label: "Remote",
      checked: false,
    },
    {
      id: "hybrid",
      label: "Hybrid",
      checked: false,
    },
    {
      id: "onsite",
      label: "On-Site",
      checked: false,
    },
  ],
  department: [
    {
      id: "engineering",
      label: "Engineering",
      checked: false,
    },
    {
      id: "marketing",
      label: "Marketing",
      checked: false,
    },
    {
      id: "sales",
      label: "Sales",
      checked: false,
    },
    {
      id: "analytics",
      label: "Analytics",
      checked: false,
    },
  ],
};

export const FilterGroup = () => {
  const [renderFilterGroup, setRenderFilterGroup] = useState(false);

  const toggleFilterGroup = () => {
    setRenderFilterGroup(!renderFilterGroup);
  };

  return (
    <>
      <Button
        className="flex gap-2 lg:hidden"
        onClick={() => toggleFilterGroup()}
      >
        <span>{renderFilterGroup ? <FilterX /> : <Filter />}</span>
        <span>Filters</span>
      </Button>

      <div
        className={cn("hidden lg:flex flex-col gap-6", [
          renderFilterGroup && "flex",
        ])}
      >
        <div>
          <p className="font-semibold pb-2 text-lg">Job Type</p>
          <div className="flex flex-col gap-2">
            {filterGroup.jobType.map((item) => (
              <CheckboxItem key={item.id} label={item.label} />
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold pb-2 text-lg">On-Site / Remote</p>
          <div className="flex flex-col gap-2">
            {filterGroup.remote.map((item) => (
              <CheckboxItem key={item.id} label={item.label} />
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold pb-2 text-lg">Department</p>
          <div className="flex flex-col gap-2">
            {filterGroup.department.map((item) => (
              <CheckboxItem key={item.id} label={item.label} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
