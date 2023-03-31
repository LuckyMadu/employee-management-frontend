import { FC } from "react";
import Modal from "react-modal";

import { IModalProps } from "@/src/types";
import { MODAL_STYLES } from "@/src/lib/constants";

export const ConfirmationModal: FC<IModalProps> = ({
  modalIsOpen,
  setModalIsOpen,
  selectedEmployee,
  handleRemoveEmployee,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={MODAL_STYLES}
    >
      <div className="p-2">
        <h3 className="font-bold text-2xl">Delete Employee</h3>
        <p className="py-4">
          Are you sure you want to delete the employee? {`\n`}
          <p className="font-semibold">
            {selectedEmployee?._id &&
              selectedEmployee.firstName + " " + selectedEmployee.lastName}
          </p>
        </p>
        <div className="modal-action">
          <label className="btn btn-error" onClick={handleRemoveEmployee}>
            Delete
          </label>
          <label className="btn" onClick={() => setModalIsOpen(false)}>
            Cancel
          </label>
        </div>
      </div>
    </Modal>
  );
};
