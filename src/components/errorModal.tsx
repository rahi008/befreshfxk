import React, { useState } from 'react';

interface DaisyUIModalProps {
  errorMessage?: string;
  isOpen: boolean;
  onClose: () => void;
}

const DaisyUIModal: React.FC<DaisyUIModalProps> = ({ errorMessage, isOpen, onClose }) => {
  return (
    <dialog id="my_modal_3" className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
      <form method="dialog" className="modal-box">
        <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <h3 className="font-bold text-lg">Error</h3>
        {errorMessage && <p className="py-4">{errorMessage}</p>}
        <button onClick={onClose} className="btn btn-primary">Close</button>
      </form>
    </dialog>
  );
};

export default DaisyUIModal;
