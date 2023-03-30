"use client";

import { FC, useEffect, useMemo, useState } from "react";

// components
import { Navbar, EmployeeCard } from "@/components/organisms";
import useStore from "@/store";
import { Loader } from "@/components/atoms";
import { ConfirmationModal } from "@/components/molecules";

const EmployeeList: FC = () => {
  const [modalIsOpen, setIsModalOpen] = useState(false);
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
        <ConfirmationModal
          modalIsOpen={modalIsOpen}
          setIsModalOpen={setIsModalOpen}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {memoizedEmployees?.map((employee) => (
              <EmployeeCard
                key={employee._id}
                item={employee}
                setIsModalOpen={setIsModalOpen}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default EmployeeList;
