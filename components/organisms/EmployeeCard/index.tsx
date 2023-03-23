import { Image } from "@/components/atoms";
import { COLORS } from "@/lib/constants/colors";
import { FC } from "react";
import { RiDeleteBin5Fill, RiEditBoxLine } from "react-icons/ri";

interface IEmployee {
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  gender: string;
  id: string;
  photo: string;
}
interface IEmployeeProps {
  item: IEmployee;
}

export const EmployeeCard: FC<IEmployeeProps> = ({ item }: any) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={item.photo} alt="profile image" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {item.first_name} {item.last_name}
          <div className="badge badge-secondary">{item.gender}</div>
        </h2>
        <hr />
        <div className="flex pb-1">
          <dt className="text-gray-500 dark:text-gray-400">Email &nbsp;</dt>
          <dd className="font-semibold">{item.email}</dd>
        </div>
        <div className="flex pb-1">
          <dt className="text-gray-500 dark:text-gray-400">
            Phone number &nbsp;
          </dt>
          <dd className="font-semibold">{item.number}</dd>
        </div>
        <div className="card-actions justify-end">
          <RiEditBoxLine size={26} color={COLORS.RED} />
          <RiDeleteBin5Fill size={26} color={COLORS.RED} />
        </div>
      </div>
    </div>
  );
};
