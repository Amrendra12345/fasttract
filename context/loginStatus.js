import { createContext, useContext, useState, ReactNode } from "react";

// Create the context
const ModalContext = createContext({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

// Provider component
export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
// Custom hook for easy access
export const useModal = () => useContext(ModalContext);
