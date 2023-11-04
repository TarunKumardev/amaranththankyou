import React from 'react';

function Modal({ onClose, children, }) {
//   if (!isOpen) {
//     return null; // Don't render the modal if it's not open
//   }

  const closeModal = () => {
    if (onClose) {
      onClose();
    }
  };

  const overlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const content = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '4px',
    maxWidth: '80%',
    maxHeight: '80%',
    overflow: 'auto',
    position: 'relative',
    zIndex: 1001,
  };

  return (
    <div style={overlay} onClick={closeModal}>
      <div style={content} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
