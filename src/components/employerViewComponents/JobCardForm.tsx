"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { employerJobType } from "@/types/types";

export default function JobCardForm({ jobItem }: { jobItem?: employerJobType }) {
  return (
    <form className="grid items-start gap-4 px-4 lg:px-0 lg:gap-8">
      <div className="grid gap-2">
        <Label htmlFor="jobTitle">Job Title</Label>
        <Input
          type="text"
          id="jobTitle"
          defaultValue={jobItem?.title}
          placeholder="Job Title"
        />
      </div>
      <div className="grid gap-2">
        <Select
        defaultValue={jobItem?.department}
        // onValueChange={setStatusFilter}
        >
          <Label htmlFor="jobDepartment">Job Department</Label>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Engineering">Engineering</SelectItem>
            <SelectItem value="Marketing">Marketing</SelectItem>
            <SelectItem value="Analytics">Analytics</SelectItem>
            <SelectItem value="Design">Design</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Select
        defaultValue={jobItem?.location}
        // onValueChange={setStatusFilter}
        >
          <Label htmlFor="jobLocation">Job Location</Label>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Istanbul, Turkey">Istanbul, Turkey</SelectItem>
            <SelectItem value="Ankara, Turkey">Ankara, Turkey</SelectItem>
            <SelectItem value="Talinn, Estonia">Talinn, Estonia</SelectItem>
            <SelectItem value="EMEA">EMEA</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="jobRemote">Job Remote</Label>
        <RadioGroup defaultValue={jobItem?.remote} className="space-y-1 lg:flex lg:gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="On-Site" id="on-site" />
            <Label htmlFor="on-site">On-Site</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Hybrid" id="hybrid" />
            <Label htmlFor="hybrid">Hybrid</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Remote" id="remote" />
            <Label htmlFor="remote">Remote</Label>
          </div>
        </RadioGroup>
      </div>
      <Button type="submit">{!jobItem ? "Create Job" : "Save changes"}</Button>
    </form>
  );
}