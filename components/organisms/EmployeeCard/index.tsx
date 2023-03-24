"use client";

import { FC } from "react";
import { Image } from "@/components/atoms";
import { COLORS } from "@/lib/constants/colors";
import { IEmployeeProps } from "@/types";
import { RiDeleteBin5Fill, RiEditBoxLine } from "react-icons/ri";
import Link from "next/link";

export const EmployeeCard: FC<IEmployeeProps> = ({ item }) => {
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
          <Link href="/employee/edit">
            <RiEditBoxLine size={26} color={COLORS.RED} />
          </Link>

          <RiDeleteBin5Fill size={26} color={COLORS.RED} />
        </div>
      </div>
    </div>
  );
};
