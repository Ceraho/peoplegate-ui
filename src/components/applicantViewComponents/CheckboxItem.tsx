import { Checkbox } from "../ui/checkbox";

export const CheckboxItem = ({ label }: { label: string }) => {
    return (
      <div className="flex items-center gap-2">
        <Checkbox className="size-6" />
        <p className="text-lg">{label}</p>
      </div>
    );
  };