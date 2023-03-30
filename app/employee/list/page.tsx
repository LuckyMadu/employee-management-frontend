"use client";

import { FC, useEffect, useMemo, useState } from "react";

// components
import { Loader } from "@/components/atoms";
import { ConfirmationModal } from "@/components/molecules";
import { Navbar, EmployeeCard } from "@/components/organisms";

// store
import useStore from "@/store";

import { ISelectedEmployee } from "@/types";

const EmployeeList: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<ISelectedEmployee>();

  const { employees, isLoading, setEmployees, removeEmployee, setIsLoading } =
    useStore();

  const memoizedEmployees = useMemo(() => employees, [employees]);

  useEffect(() => {
    const fetchEmployees = async () => {
      await setEmployees();
      setIsLoading(false);
    };
    fetchEmployees();
  }, []);

  const handleRemoveEmployee = async () => {
    if (selectedEmployee?._id) {
      try {
        await removeEmployee(selectedEmployee._id);
        await setEmployees();
        setModalIsOpen(false);
      } catch (error) {
        console.log("employee fetching failed after remove", error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        {selectedEmployee && (
          <ConfirmationModal
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            selectedEmployee={selectedEmployee}
            handleRemoveEmployee={handleRemoveEmployee}
          />
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {memoizedEmployees?.map((employee) => (
              <EmployeeCard
                key={employee._id}
                item={employee}
                setModalIsOpen={setModalIsOpen}
                setSelectedEmployee={setSelectedEmployee}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default EmployeeList;
