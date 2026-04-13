import { createContext, useContext, useState } from "react";

const DripDetailModalContext = createContext();

export const useDripDetailModal = () => {
  const context = useContext(DripDetailModalContext);
  if (!context) {
    throw new Error("useDripDetailModal must be used within DripDetailModalProvider");
  }
  return context;
};

export const DripDetailModalProvider = ({ children }) => {
  const [selectedDripId, setSelectedDripId] = useState(null);

  const openDripDetail = (id) => setSelectedDripId(id);
  const closeDripDetail = () => setSelectedDripId(null);

  return (
    <DripDetailModalContext.Provider
      value={{ selectedDripId, openDripDetail, closeDripDetail }}
    >
      {children}
    </DripDetailModalContext.Provider>
  );
};
