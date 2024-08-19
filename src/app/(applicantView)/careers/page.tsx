"use client";

import { defaultJobs } from "@/lib/mock-data";
import { Navbar } from "@/components/applicantViewComponents/Navbar";
import { FilterGroup } from "@/components/applicantViewComponents/FilterGroup";
import HeroBanner from "@/components/applicantViewComponents/HeroBanner";
import { JobCard } from "@/components/applicantViewComponents/JobCard";

const JobsSection = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {defaultJobs.map((job: any) => (
        <JobCard key={job.id} jobDetails={job} />
      ))}
    </div>
  );
};

const CareerPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex flex-col">
        <HeroBanner />
        <div className="p-4 flex flex-col lg:flex-row gap-12 lg:gap-32 lg:p-8 lg:pt-16">
          <FilterGroup />
          <JobsSection />
        </div>
      </div>
    </>
  );
};

export default CareerPage;
