"use client";

import { vacantPositionData } from "@/lib/mock-data";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";

import JobDetailBanner from "@/components/applicantViewComponents/JobDetailBanner";
import JobDetailTab from "@/components/applicantViewComponents/JobDetailTab";
import ApplicationForm from "@/components/applicantViewComponents/ApplicationForm";

const ApplyPage = ({ params }: { params: { slug: string } }) => {
  const [tab, setTab] = useState<string>("job details");

  const onTabChange = (value: string) => {
    setTab(value);
  };

  const handleApplyButtonClick = (value: string) => {
    setTab(value);
    if (window.scrollY > 100) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="h-full flex flex-col gap-8 p-4 lg:max-w-[70dvw] lg:mx-auto">
        {/* JOB DETAIL BANNER */}
        <JobDetailBanner vacantPositionData={vacantPositionData} />

        {/* JOB APPLICATION FORM / JOB DESCRIPTION TABS */}
        <Tabs value={tab} onValueChange={onTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="job details">Job Details</TabsTrigger>
            <TabsTrigger value="apply">Apply</TabsTrigger>
          </TabsList>

          {/* JOB DETAILS TAB */}
          <TabsContent value="job details">
            <JobDetailTab
              vacantPositionData={vacantPositionData}
              handleApplyButtonClick={handleApplyButtonClick}
            />
          </TabsContent>

          {/* APPLY TAB */}
          <TabsContent value="apply">
            <ApplicationForm />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default ApplyPage;
