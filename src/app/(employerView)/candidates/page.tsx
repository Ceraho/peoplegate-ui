"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ChevronUp, ChevronDown } from "lucide-react";

// Mock data for demonstration
const mockApplicants = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    position: "Software Engineer",
    status: "New",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    position: "Product Manager",
    status: "Interviewing",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    position: "UX Designer",
    status: "Rejected",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    position: "Data Analyst",
    status: "Offered",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    position: "Marketing Specialist",
    status: "New",
  },
];

type Applicant = (typeof mockApplicants)[0];

export default function ApplicantsPage() {
  const [applicants, setApplicants] = useState<Applicant[]>(mockApplicants);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<keyof Applicant>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isNotDesktop, setIsNotDesktop] = useState(false);

  useEffect(() => {
    const checkIsNotDesktop = () => setIsNotDesktop(window.innerWidth < 1024);
    checkIsNotDesktop();
    window.addEventListener("resize", checkIsNotDesktop);
    return () => window.removeEventListener("resize", checkIsNotDesktop);
  }, []);

  const handleSort = (column: keyof Applicant) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const filteredAndSortedApplicants = applicants
    .filter(
      (applicant) =>
        (statusFilter === "All" || applicant.status === statusFilter) &&
        (applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          applicant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          applicant.position.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (a[sortColumn] < b[sortColumn])
        return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn])
        return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-500";
      case "Interviewing":
        return "bg-yellow-500";
      case "Offered":
        return "bg-green-500";
      case "Rejected":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="py-6 px-4 md:px-4 lg:px-6 md:py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        Applicants
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-6 space-y-4 md:space-y-0">
        <div className="relative w-full md:w-64">
          <Input
            type="text"
            placeholder="Search applicants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Statuses</SelectItem>
            <SelectItem value="New">New</SelectItem>
            <SelectItem value="Interviewing">Interviewing</SelectItem>
            <SelectItem value="Offered">Offered</SelectItem>
            <SelectItem value="Rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {isNotDesktop ? (
        <div className="space-y-4">
          {filteredAndSortedApplicants.map((applicant) => (
            <Card key={applicant.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{applicant.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {applicant.email}
                    </p>
                  </div>
                  <Badge
                    className={`${getStatusColor(applicant.status)} text-white`}
                  >
                    {applicant.status}
                  </Badge>
                </div>
                <p className="text-sm">{applicant.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort("name")}>
                  Name{" "}
                  {sortColumn === "name" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="ml-2 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-2 h-4 w-4" />
                    ))}
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort("email")}>
                  Email{" "}
                  {sortColumn === "email" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="ml-2 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-2 h-4 w-4" />
                    ))}
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort("position")}>
                  Position{" "}
                  {sortColumn === "position" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="ml-2 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-2 h-4 w-4" />
                    ))}
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort("status")}>
                  Status{" "}
                  {sortColumn === "status" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="ml-2 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-2 h-4 w-4" />
                    ))}
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedApplicants.map((applicant) => (
              <TableRow key={applicant.id}>
                <TableCell className="font-medium">{applicant.name}</TableCell>
                <TableCell>{applicant.email}</TableCell>
                <TableCell>{applicant.position}</TableCell>
                <TableCell>
                  <Badge
                    className={`${getStatusColor(applicant.status)} text-white`}
                  >
                    {applicant.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
