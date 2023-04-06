"use client";

import { FC, useCallback, useEffect, useMemo, useState } from "react";

// components
import { Loader } from "@/src/components/atoms";
import { ConfirmationModal, LayoutSwitch } from "@/src/components/molecules";
import {
  Navbar,
  EmployeeCard,
  EmployeeTable,
} from "@/src/components/organisms";

// types
import { ISelectedEmployee } from "@/src/types";

// store
import useStore from "@/src/store";

const EmployeeList: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [isTableViewOn, setIsTableViewOn] = useState<boolean>(false);
  const [selectedEmployee, setSelectedEmployee] = useState<ISelectedEmployee>();

  const { employees, isLoading, setEmployees, removeEmployee } = useStore();

  const memoizedEmployees = useMemo(() => employees, [employees]);

  useEffect(() => {
    const fetchEmployees = async () => {
      await setEmployees();
    };
    fetchEmployees();
  }, []);

  /**
   * Delete the selected employee
   */
  const handleRemoveEmployee = useCallback(async () => {
    if (selectedEmployee?._id) {
      try {
        await removeEmployee(selectedEmployee._id);
        setEmployees();
        setModalIsOpen(false);
      } catch (error) {
        console.error("employee fetching failed after remove", error);
      }
    }
  }, [removeEmployee, selectedEmployee, setEmployees]);

  /**
   * Switch layouts (Table View | Card View)
   */
  const handleLayoutChange = useCallback(() => {
    setIsTableViewOn((prevState) => !prevState);
  }, [isTableViewOn]);

  return (
    <>
      {/* Header */}
      <Navbar />

      <div className="container mx-auto">
        <div className="layout-container">
          <LayoutSwitch
            isTableViewOn={isTableViewOn}
            handleLayoutChange={handleLayoutChange}
          />
        </div>
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
        ) : isTableViewOn ? (
          <div className="table-container">
            <EmployeeTable
              employees={memoizedEmployees}
              setModalIsOpen={setModalIsOpen}
              setSelectedEmployee={setSelectedEmployee}
            />
          </div>
        ) : (
          <div className="card-container">
            {memoizedEmployees.length > 0 ? (
              memoizedEmployees?.map((employee) => (
                <EmployeeCard
                  key={employee._id}
                  item={employee}
                  setModalIsOpen={setModalIsOpen}
                  setSelectedEmployee={setSelectedEmployee}
                />
              ))
            ) : (
              <p className="flex justify-center">No employees found.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default EmployeeList;
