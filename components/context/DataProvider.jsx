"use client";
import { createContext, useState, useEffect, useContext } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [appData, setAppData] = useState({
    users: [],
    collections: [],
    assets: [],
  });
  const [user, setUser] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

  const getUser = async () => {
    const res = await fetch("/api/auth/getuser", { method: "GET" });

    if (res.ok) {
      const data = await res.json();
      setUser(data.user);
      return;
    }
  };
  const fetchAppData = async () => {
    try {
      const response = await fetch("/api/datarefresh", {
        method: "GET",
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData.message);
      }
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        setAppData({
          ...appData,
          users: data.users || [],
          collections: data.collections || [],
          assets: data.assets || [],
        });
      }
    } catch (error) {
      console.log(`${error.name} : ${error.message}`);
    }
  };
  useEffect(() => {
    fetchAppData();
    getUser();

    setInterval(() => {
      fetchAppData();
      getUser();
    }, 180000);
  }, []);

  return (
    <DataContext.Provider
      value={{
        appData,
        user,
        searchResult,
        setSearchResult,
        getUser,
        setUser,
        fetchAppData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);

export default DataContext;
