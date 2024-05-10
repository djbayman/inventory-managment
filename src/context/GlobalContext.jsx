import { createContext, useState } from "react";

export const InventoryContext = createContext();

// export const useShortContex = useContext(InventoryContext);

const InventoryProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [sideBarToggle, setSideBarToggle] = useState(true);

  const value = {
    step,
    setStep,
    sideBarToggle,
    setSideBarToggle,
  };
  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
