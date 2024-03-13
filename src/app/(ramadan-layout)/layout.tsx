import Breadcrumb from "@/components/Divisions/Breadcrumb";
import { ReactNode } from "react";

const RamadanLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Breadcrumb />
      <div>{children}</div>
    </div>
  );
};

export default RamadanLayout;
