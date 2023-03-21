import { Button } from "@/components/atoms";
import { Image } from "@/components/atoms";
import CardBody from "@/components/molecules/CardBody";
import { COLORS } from "@/lib/constants/colors";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Card = () => {
  return (
    <div className="flex m-6">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <Image
          src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
          alt="profile image"
        />
        <div className="p-3">
          <CardBody />
          <div className="flex items-center justify-end mt-2">
            <Button>Add Employee</Button>
            <RiDeleteBin5Fill size={26} color={COLORS.RED} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
