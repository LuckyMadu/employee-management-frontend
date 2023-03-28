"use client";

import { FC, useState, useEffect, useMemo } from "react";

// types
import { IEmployee } from "@/types";

// components
import { Navbar, EmployeeCard } from "@/components/organisms";
import { fetchEmployees } from "@/services/employeeService";

const EmployeeList: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [employees, setEmployees] = useState<IEmployee[]>();

  const memoizedEmployees = useMemo(() => employees, [employees]);

  const fetchData = async () => {
    const { data } = await fetchEmployees();
    setEmployees(data);
    setIsLoading(false);
  };

  useEffect(() => {
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
