"use client";

import { FC } from "react";
import Link from "next/link";

// components
import { Image, TableRow } from "@/src/components/atoms";

// utils
import {
  COLORS,
  DEFAULT_PROFILE_IMAGE_URL,
  TABLE_TITLES,
} from "@/src/constants";
import { IEmployeeTableProps } from "@/src/types";
import { RiDeleteBin5Fill, RiEditBoxLine } from "react-icons/ri";

export const EmployeeTable: FC<IEmployeeTableProps> = ({
  employees,
  setSelectedEmployee,
  setModalIsOpen,
}) => {
  return (
    <div className="rounded-t-xl overflow-hidden p-10">
      {employees.length > 0 ? (
        <table className="table-auto">
          <thead className="bg-gray-200">
            <tr>
              {TABLE_TITLES.map((item) => {
                return (
                  <th className="px-4 py-2" key={item.key}>
                    {item.value}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {employees?.map((employee) => {
              const { _id, photo, firstName, lastName, email, phone, gender } =
                employee;
              return (
                <tr key={_id}>
                  <TableRow>
                    <Image
                      src={photo ? photo : DEFAULT_PROFILE_IMAGE_URL}
                      className="w-20 h-20"
                      alt="profile image"
                    />
                  </TableRow>
                  <TableRow text={firstName} />
                  <TableRow text={lastName} />
                  <TableRow text={email} />
                  <TableRow text={phone} />
                  <TableRow text={gender} />
                  <TableRow>
                    <div className="flex">
                      <Link href={`/employee/${_id}`}>
                        <RiEditBoxLine size={26} color={COLORS.BLUE} />
                      </Link>
                      <RiDeleteBin5Fill
                        size={26}
                        color={COLORS.RED}
                        onClick={() => {
                          setSelectedEmployee(employee);
                          setModalIsOpen(true);
                        }}
                      />
                    </div>
                  </TableRow>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};
