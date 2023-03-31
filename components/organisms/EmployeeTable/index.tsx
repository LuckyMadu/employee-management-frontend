"use client";

import { FC } from "react";
import Link from "next/link";
import { RiDeleteBin5Fill, RiEditBoxLine } from "react-icons/ri";

// components
import { Image } from "@/components/atoms";

// utils
import { COLORS } from "@/constants";
import { IEmployeeProps } from "@/types";

export const EmployeeTable: FC<IEmployeeProps> = ({
  item,
  setModalIsOpen,
  setSelectedEmployee,
}) => {
  return <div className="card w-96 bg-base-100 shadow-xl">Table</div>;
};
