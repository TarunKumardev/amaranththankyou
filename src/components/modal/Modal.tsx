import React from 'react';


type ModalProps = {
  onSave?: () => void;
  onClose: () => void;
  onDelete?: () => void;
  children: React.ReactNode;
  showDeleteButton?: boolean;
  title?: string;
};


function Modal({ onSave, onClose, children, onDelete, showDeleteButton = false, title = "TITLE" }: ModalProps) {
  const closeModal = () => {
    if (onClose) {
      onClose();
    }
  };
  console.log(showDeleteButton, "showDeleteButton");



  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }} onClick={closeModal}>
      <div style={{
        backgroundColor: 'white',
        color: "black",
        borderRadius: '4px',
        width: "580px",
        maxWidth: '80%',
        maxHeight: '80%',
        overflow: 'auto',
        position: 'relative',
        zIndex: 1001,
      }} onClick={(e) => e.stopPropagation()}>
        {/* close  modal state save modal   */}
        <div style={{ backgroundColor: '#f3f4f6', height: "48px", fontSize: "22px", fontWeight: "700", color: "black", display: "flex", alignItems: "center", padding: "0px 16px" }}>{title}</div>
        {children}
        <div style={{ display: "flex", justifyContent: "flex-end", backgroundColor: '#f3f4f6', padding: "8px 16px" }} >
          <div style={{ display: "flex", gap: "12px" }}>
            <button className="close-button" onClick={closeModal} style={{ backgroundColor: "transparent", border: "none", color: "#00008B" }}>
              Close
            </button>
            {showDeleteButton ? (
              <button className="delete-button" onClick={onDelete} style={{ backgroundColor: 'red', border: 'none', color: 'white', borderRadius: '4px' }}>
                Delete
              </button>
            ) : (
              <button className="close-button" onClick={onSave} style={{ backgroundColor: "#00008B", border: "none", color: "white", borderRadius: "4px" }}>
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}



export default Modal;
