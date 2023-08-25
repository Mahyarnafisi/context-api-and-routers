import { createContext, useState, useContext } from "react";

const BASE_URL = "https://dummyjson.com/products/category";

const DataContext = createContext("");

function ContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //

  //Fetching Main data from end-point
  async function fetchingData(category) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/${category}`);
      const data = await res.json();
      setProducts(data.products);
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
