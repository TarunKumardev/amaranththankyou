import  { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import ModalPortal from '@/components/ModalPortal';
import Modal from '@/components/Modal';

interface ModalContent {
  component: ReactNode;
}

interface ModalContextType {
  showModal: (modalContent: ModalContent) => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);



export function ModalProvider({ children }: { children: ReactNode }) {
  const [modals, setModals] = useState<ModalContent[]>([]);

  const showModal = useCallback((modalContent: ModalContent) => {
    setModals((prevModals) => [...prevModals, modalContent]);
  }, []);

  const hideModal = useCallback(() => {
    setModals((prevModals) => prevModals.slice(0, -1));
  }, []);

  return (
   <>
     <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
       {modals.map((modalContent, index) => {
         return(
            <ModalPortal key={index}>
                 <Modal onClose={hideModal} 
                  key={index}>{modalContent.component}</Modal>
            </ModalPortal>                     
            )
       } )}
    </ModalContext.Provider>
   </>
  );
}


export function useModal() {
    const context = useContext(ModalContext);
    if (!context) {
      throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
  }


