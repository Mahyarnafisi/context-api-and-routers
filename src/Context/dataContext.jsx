import { createContext, useState, useContext } from "react";

const BASE_URL = "http://localhost:2023";

const DataContext = createContext("");

function ContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(products);

  //

  //Fetching Main data from end-point
  async function fetchingData() {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/laptops`);
      const data = await res.json();
      setProducts(data);
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
        products,
        fetchingData,
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
