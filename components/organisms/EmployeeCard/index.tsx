import { Button, Image } from "@/components/atoms";
import { EmployeeCardBody } from "@/components/molecules";
import { COLORS } from "@/lib/constants/colors";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const EmployeeCard = () => {
  return (
    <div className="flex m-6">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <Image
          src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
          alt="profile image"
        />
        <div className="p-3">
          <EmployeeCardBody />
          <div className="flex items-center justify-end mt-2">
            <Button>Add Employee</Button>
            <RiDeleteBin5Fill size={26} color={COLORS.RED} />
          </div>
        </div>
      </div>
    </div>
  );
};
