export type jobType = {
  id: number;
  title: string;
  desc: string;
  location: string;
  remote: string;
  department: string;
  type: string;
};

export type VacantPositionType = {
  companyName: string;
  roleTitle: string;
  remote: string;
  location: string;
  department: string;
  jobDescription: string;
  jobRequirements: string;
};

export type mainNavbarItem = {
  id: number;
  title: string;
  link: string;
  icon?: React.ReactNode;
};
