import { createContext, useState, useContext } from "react";

const BASE_URL = "http://localhost:2023";

const DataContext = createContext("");

function ContextProvider({ children }) {
  const [smartphonesData, setSmartphonesData] = useState([]);
  const [laptopsData, setLaptopsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //

  //Fetching smartphones from end-point
  async function fetchingSmartphones() {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/smartphones`);
      const data = await res.json();
      setSmartphonesData(data);
      console.log(data);
    } catch (error) {
      console.log(`${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  //Fetching laptops from end-point
  async function fetchingLaptops() {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/laptops`);
      const data = await res.json();
      setLaptopsData(data);
      console.log(data);
    } catch (error) {
      console.log(`${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <DataContext.Provider
      value={{
        isLoading,
        smartphonesData,
        laptopsData,
        fetchingSmartphones,
        fetchingLaptops,
        setIsLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useDataBase() {
  const context = useContext(DataContext);
  if (context === undefined) alert("something went wrong");

  return context;
}
export { ContextProvider, useDataBase };
