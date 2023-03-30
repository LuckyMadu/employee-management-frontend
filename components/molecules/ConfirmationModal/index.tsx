import { FC } from "react";
import Modal from "react-modal";

import { IModalProps } from "@/types";
import { MODAL_STYLES } from "@/constants";

export const ConfirmationModal: FC<IModalProps> = ({
  modalIsOpen,
  setIsModalOpen,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setIsModalOpen(false)}
      style={MODAL_STYLES}
    >
      <div className="p-2">
        <h3 className="font-bold text-2xl">Delete Employee</h3>
        <p className="py-4">Are you sure you want to delete the employee?</p>
        <div className="modal-action">
          <label className="btn btn-error">Delete</label>
          <label className="btn" onClick={() => setIsModalOpen(false)}>
            Cancel
          </label>
        </div>
      </div>
    </Modal>
  );
};
