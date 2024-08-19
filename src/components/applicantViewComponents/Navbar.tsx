import { GithubIcon, LinkedinIcon } from "lucide-react";
import { Button } from "../ui/button";

export const Navbar = () => {
    return (
      <div className="flex items-center justify-around py-4 w-full sticky top-0 bg-background z-10 lg:py-2">
        <div className="size-12 bg-pink-500 rounded-xl grid text-center items-center">
          LOGO
        </div>
        <div className="flex gap-4 items-center lg:gap-14">
          <Button>Company Site</Button>
          <LinkedinIcon></LinkedinIcon>
          <GithubIcon></GithubIcon>
        </div>
      </div>
    );
  };