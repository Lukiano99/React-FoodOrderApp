import React, { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import UserProgressContext from "../../store/UserProgressContext";

const Modal = ({ children, open, onClose, className = "" }) => {
  const dialog = useRef();
  const userProgressCtx = useContext(UserProgressContext);

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => {modal.close();
    };
  }, [open]);



  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
