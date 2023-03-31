import { toast, TypeOptions } from "react-toastify";

/**
 * @description Common flash message
 * @param message String - flash message
 * @param type String - 'info', 'success', 'warning', 'error', 'default'
 */
export const makeToast = (message: string, type: TypeOptions) => {
  toast(message, {
    type,
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export default makeToast;
