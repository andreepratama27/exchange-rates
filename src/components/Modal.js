import React from "react";

const Modal = () => {
  return (
    <div className="modal modal-option">
      <div className="modal-background" />
      <div className="modal-content">
        <p className="subtitle">Select your currency</p>
        <div className="select">
          <select>
            <option>IDR</option>
            <option>MYR</option>
          </select>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" />
    </div>
  );
};

export default Modal;
