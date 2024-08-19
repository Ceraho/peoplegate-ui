import { jobType, VacantPositionType } from "@/types/types";

export const defaultJobs: jobType[] = [
  {
    id: 1,
    title: "Software Engineer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur",
    location: "EMEA",
    remote: "Remote",
    department: "Engineering",
    type: "Internship",
  },
  {
    id: 2,
    title: "Marketing Manager",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur",
    location: "Istanbul, Turkey",
    remote: "Hybrid",
    department: "Marketing",
    type: "Full-Time",
  },
  {
    id: 3,
    title: "Product Designer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur",
    location: "Ankara, Turkey",
    remote: "On-Site",
    department: "Design",
    type: "Part-Time",
  },
  {
    id: 4,
    title: "Data Analyst",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur",
    location: "Talinn, Estonia",
    remote: "Hybrid",
    department: "Analytics",
    type: "Full-Time",
  },
  {
    id: 5,
    title: "Sales Representative",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur",
    location: "Istanbul, Turkey",
    remote: "Remote",
    department: "Sales",
    type: "Part-Time",
  },
];

export const vacantPositionData: VacantPositionType = {
  companyName: "ABC",
  roleTitle: "Software Engineer",
  remote: "Remote / On-Site / Hybrid",
  location: "Istanbul, Turkey",
  department: "Engineering",
  jobDescription:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel soluta non cumque quaerat natus dolorem tempora amet omnis at magni modi rerum ea, commodi voluptatumillum veniam magnam voluptas. Ipsum illum iure voluptatibusfugit, numquam commodi repudiandae doloremque, molestias omnisconsequatur maiores, excepturi recusandae consequunturofficiis laboriosam laborum dolorum. Nulla ad, porro commodiincidunt tempore rem voluptates et voluptatibus! Voluptatibussunt, quibusdam debitis aut veniam ipsum dicta asperioresoptio rerum nisi incidunt laboriosam earum providentvoluptatem at. Iusto dignissimos commodi nihil, rem ex quiconsequatur voluptatibus praesentium harum non!",
  jobRequirements:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci libero iste laborum nobis quia assumenda dolores architecto veniam inventore, ratione quidem vel magnam pariatur, illo doloribus fuga consequuntur unde quaerat.\n-Lorem,\n-Ipsum,\n-Dolor,\n-Sit,\n-Amet",
};
