"use client";

import JobCardItem from "@/components/employerViewComponents/jobCardItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FilterIcon, PlusIcon, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { employerDefaultJobs } from "@/lib/mock-data";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import JobCardForm from "@/components/employerViewComponents/JobCardForm";

const AddNewJob = () => {
  const [isNotDesktop, setIsNotDesktop] = useState(false);

  useEffect(() => {
    const checkIsNotDesktop = () => setIsNotDesktop(window.innerWidth < 1024);
    checkIsNotDesktop();
    window.addEventListener("resize", checkIsNotDesktop);
    return () => window.removeEventListener("resize", checkIsNotDesktop);
  }, []);

  if (isNotDesktop) {
    return (
      <div>
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="w-fit gap-1">
              <span>
                <PlusIcon size={20} />
              </span>
              <span>Add Job</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Edit Job</DrawerTitle>
              <DrawerDescription>
                You can create a new job from this section. Click save when
                you're done.
              </DrawerDescription>
            </DrawerHeader>
            <JobCardForm />
            <DrawerFooter className="pt-2 space-y-4">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-fit gap-1">
            <span>
              <PlusIcon size={20} />
            </span>
            <span>Add Job</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="text-left">
            <DialogTitle>Edit Job</DialogTitle>
            <DialogDescription>
              You can create a new job from this section. Click save when you're
              done.
            </DialogDescription>
          </DialogHeader>
          <JobCardForm />
          <DialogFooter className="w-full">
            <DialogClose className="w-full" asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const JobsFilterGroup = () => {
  const [filterGroup, setFilterGroup] = useState<boolean>(false);

  const handleSetFilterGroup = () => {
    setFilterGroup(!filterGroup);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="h-fit flex gap-4">
        <div className="relative w-full md:w-64">
          <Input
            type="text"
            placeholder="Search jobs..."
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>
        <div className="hidden lg:block self-center">FILTER GROUP</div>
        <button
          onClick={handleSetFilterGroup}
          className={`lg:hidden px-2 rounded-md ${
            filterGroup
              ? "transition ease-in bg-accent"
              : "transition ease-in bg-transparent"
          }`}
        >
          <FilterIcon />
        </button>
      </div>
      {filterGroup && <div>FILTER GROUP</div>}
    </div>
  );
};

const JobsPage = () => {
  return (
    <div className="w-full py-6 px-4 flex flex-col gap-6">
      <div className="w-full flex flex-col gap-6 lg:flex-row lg:justify-between">
        <AddNewJob />
        <JobsFilterGroup />
      </div>
      {employerDefaultJobs.map((jobItem) => (
        <JobCardItem jobItem={jobItem} />
      ))}
    </div>
  );
};

export default JobsPage;
