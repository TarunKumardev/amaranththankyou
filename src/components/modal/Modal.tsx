import React from 'react';

function Modal({ onSave,onClose, children,header, title="TITLE"}) {
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
    color:"black",
    borderRadius: '4px',
    width:"580px",
    maxWidth: '80%',
    maxHeight: '80%',
    overflow: 'auto',
    position: 'relative',
    zIndex: 1001,
  };

  return (
    <div style={overlay} onClick={closeModal}>
     <div style={content} onClick={(e) => e.stopPropagation()}>
        <div style={{backgroundColor:'#f3f4f6', height:"48px", fontSize:"22px", fontWeight:"700", color:"black",display:"flex", alignItems:"center", padding:"0px 16px"}}>{title ? title : header}</div>
        {children}
       <div style={{display:"flex",justifyContent:"flex-end", backgroundColor:'#f3f4f6', padding:"8px 16px" }} >
       <div style={{display:"flex", gap:"12px"}}>
       <button className="close-button" onClick={closeModal} style={{backgroundColor:"transparent",border:"none", color:"#00008B"}}>
          Close
        </button>
       <button className="close-button" onClick={onSave} style={{backgroundColor:"#00008B",border:"none", color:"white", borderRadius:"4px"}}>
          Save
        </button>
       </div>
       </div>
      </div>
    </div>
  );
}

export default Modal;
