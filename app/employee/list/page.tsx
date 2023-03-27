"use client";

import { FC, useState, useEffect, useMemo } from "react";
import axios from "axios";

// types
import { IEmployee, BaseResponse } from "@/types";

// components
import { Navbar, EmployeeCard } from "@/components/organisms";

const EmployeeList: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  const memoizedEmployees = useMemo(() => employees, [employees]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<BaseResponse>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/employee/list`
        );
        setEmployees(data?.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {memoizedEmployees?.map((employee) => (
              <EmployeeCard key={employee._id} item={employee} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default EmployeeList;
