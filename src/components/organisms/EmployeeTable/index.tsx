"use client";

import { FC } from "react";
import Link from "next/link";

// components
import { Image } from "@/src/components/atoms";

// utils
import { COLORS } from "@/src/constants";
import { IEmployeeProps } from "@/src/types";

export const EmployeeTable: FC = ({}) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr>
          <td>Shining Star</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
        </tr>
      </tbody>
    </table>
  );
};
