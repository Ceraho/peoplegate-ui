"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Badge } from "../ui/badge";
import { Bookmark, Ellipsis } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { employerJobType } from "@/types/types";
import JobCardForm from "./JobCardForm";

const JobEditComponent = ({ jobItem }: { jobItem: employerJobType }) => {
  const [open, setOpen] = useState(false);
  const [isNotDesktop, setIsNotDesktop] = useState(false);

  useEffect(() => {
    const checkIsNotDesktop = () => setIsNotDesktop(window.innerWidth < 1024);
    checkIsNotDesktop();
    window.addEventListener("resize", checkIsNotDesktop);
    return () => window.removeEventListener("resize", checkIsNotDesktop);
  }, []);

  if (isNotDesktop) {
    return (
      <div className="block lg:hidden">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger>
            <Ellipsis className="transition ease-in-out hover:stroke-primary active:stroke-primary" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Edit Job</DrawerTitle>
              <DrawerDescription>
                Delete or make changes to the selected job here. Click save when
                you're done.
              </DrawerDescription>
            </DrawerHeader>
            <JobCardForm jobItem={jobItem} />
            <DrawerFooter className="pt-2 space-y-4">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
              <hr />
              <DrawerClose asChild>
                <Button variant="destructive">Delete Job</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }

  return (
    <div className="hidden lg:block">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Ellipsis className="transition ease-in-out hover:stroke-primary active:stroke-primary" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="text-left">
            <DialogTitle>Edit Job</DialogTitle>
            <DialogDescription>
              Delete or make changes to the selected job here. Click save when
              you're done.
            </DialogDescription>
          </DialogHeader>
          <JobCardForm jobItem={jobItem} />
          <DialogFooter>
            <div className="h-full w-full flex flex-col gap-4">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <hr />
              <DialogClose asChild>
                <Button variant="destructive">Delete Job</Button>
              </DialogClose>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const jobCardItem = ({ jobItem }: { jobItem: employerJobType }) => {
  return (
    <Card>
      <CardContent className="p-4 flex flex-nowrap justify-between">
        <div className="flex flex-col gap-4 w-4/5">
          <h3 className="font-semibold text-xl">{jobItem.title}</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>{jobItem.department}</Badge>
            <Badge>{jobItem.location}</Badge>
            <Badge>{jobItem.remote}</Badge>
          </div>
          <hr />
          <div className="flex justify-between w-full">
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">
                {jobItem.applicantCount}
              </span>{" "}
              Applicants
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <JobEditComponent jobItem={jobItem} />
          <button>
            <Bookmark
              className={cn("hover:stroke-primary", [
                jobItem.isBookmarked
                  ? "hover:fill-transparent transition ease-in-out fill-primary stroke-primary"
                  : "transition ease-in-out fill-background stroke",
              ])}
            />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default jobCardItem;
