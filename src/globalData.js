import { createContext, useState, useContext } from 'react';

const DataContext = createContext();

const Context = ({ children }) => {
  const [formState, setformState] = useState({
    url: '',
    status: '',
    output: null,
    loading: false,
  });
  return (
    <DataContext.Provider
      value={{
        formState,
        setformState,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom Hook
export const useGlobalContext = () => {
  return useContext(DataContext);
};

export { Context, DataContext };