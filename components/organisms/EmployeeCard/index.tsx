import { Button, Image } from "@/components/atoms";
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
    <div className="flex m-6">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <Image src={item.photo} alt="profile image" />
        <div className="p-3">
          <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
            <div className="flex flex-col pb-3">
              <dt className="text-gray-500 dark:text-gray-400">Name</dt>
              <dd className="font-semibold">
                {" "}
                {item.first_name} {item.last_name}
              </dd>
            </div>
            <div className="flex flex-col pb-3">
              <dt className="text-gray-500 dark:text-gray-400">Email</dt>
              <dd className="font-semibold">{item.email}</dd>
            </div>
            <div className="flex flex-col py-3">
              <dt className="text-gray-500 dark:text-gray-400">Gender</dt>
              <dd className="font-semibold">{item.gender}</dd>
            </div>
            <div className="flex flex-col pt-3">
              <dt className="text-gray-500 dark:text-gray-400">Phone number</dt>
              <dd className="font-semibold">{item.number}</dd>
            </div>
          </dl>
          <div className="flex items-center justify-end mt-2">
            <RiEditBoxLine size={26} color={COLORS.RED} />
            <RiDeleteBin5Fill size={26} color={COLORS.RED} />
          </div>
        </div>
      </div>
    </div>
  );
};
