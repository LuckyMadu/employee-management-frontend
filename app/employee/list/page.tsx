"use client";

import { FC, useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Navbar, EmployeeCard } from "@/components/organisms";
import { IEmployee, BaseResponse } from "@/types";

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
          <div className="grid grid-cols-4 gap-6">
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
