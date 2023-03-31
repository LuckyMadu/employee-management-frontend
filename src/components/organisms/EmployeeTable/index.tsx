"use client";

import { FC } from "react";
import Link from "next/link";

// components
import { Image, TableRow } from "@/src/components/atoms";

// utils
import { COLORS, TABLE_TITLES } from "@/src/constants";
import { IEmployeeTableProps } from "@/src/types";
import { RiDeleteBin5Fill, RiEditBoxLine } from "react-icons/ri";

export const EmployeeTable: FC<IEmployeeTableProps> = ({
  employees,
  setSelectedEmployee,
  setModalIsOpen,
}) => {
  return (
    <div className="rounded-t-xl overflow-hidden p-10">
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
            return (
              <tr>
                <TableRow>
                  <Image
                    src={
                      employee.photo
                        ? employee.photo
                        : "https://randomuser.me/api/portraits/lego/7.jpg"
                    }
                    className="w-20 h-20"
                    alt="profile image"
                  />
                </TableRow>
                <TableRow text={employee.firstName} />
                <TableRow text={employee.lastName} />
                <TableRow text={employee.email} />
                <TableRow text={employee.phone} />
                <TableRow text={employee.gender} />
                <TableRow>
                  <div className="flex">
                    <Link href={`/employee/${employee._id}`}>
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
    </div>
  );
};
