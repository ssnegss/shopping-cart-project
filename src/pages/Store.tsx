import { useEffect, useState } from "react";

export const Store = () => {
  const [productData, setProductData] = useState([] as any[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.storerestapi.com/products");
        const json = await response.json();
        setProductData(json.data);
        console.log(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ul>
        {productData.map((product) => (
          <li key={product._id}>
            {product.title}
          </li>
        ))}
      </ul>
    </>
  );
};
