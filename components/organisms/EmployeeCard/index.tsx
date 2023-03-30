"use client";

import { FC } from "react";
import Link from "next/link";
import { Image } from "@/components/atoms";
import { COLORS } from "@/constants";
import { IEmployeeProps } from "@/types";
import { RiDeleteBin5Fill, RiEditBoxLine } from "react-icons/ri";

export const EmployeeCard: FC<IEmployeeProps> = ({
  item,
  setModalIsOpen,
  setSelectedEmployee,
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={
            item.photo
              ? item.photo
              : "https://randomuser.me/api/portraits/med/men/75.jpg"
          }
          alt="profile image"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {item.firstName} {item.lastName}
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
          <dd className="font-semibold">{item.phone}</dd>
        </div>
        <div className="card-actions justify-end">
          <Link href={`/employee/${item._id}`}>
            <RiEditBoxLine size={26} color={COLORS.BLUE} />
          </Link>
          <RiDeleteBin5Fill
            size={26}
            color={COLORS.RED}
            onClick={() => {
              setSelectedEmployee(item);
              setModalIsOpen(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};
