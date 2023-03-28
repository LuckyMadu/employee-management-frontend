"use client";

import { FC, useEffect, useMemo } from "react";

// components
import { Navbar, EmployeeCard } from "@/components/organisms";
import useStore from "@/store";
import { Loader } from "@/components/atoms";

const EmployeeList: FC = () => {
  const { employees, isLoading, setEmployees, setIsLoading } = useStore();

  const memoizedEmployees = useMemo(() => employees, [employees]);

  useEffect(() => {
    setEmployees();
    setIsLoading(false);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        {isLoading ? (
          <Loader />
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
