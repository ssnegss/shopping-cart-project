import { useEffect, useState } from "react";

export const StoreItems = () => {
  const [storeItems, setstoreItems] = useState([] as any[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const json = await response.json();
        setstoreItems(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return storeItems;
};
