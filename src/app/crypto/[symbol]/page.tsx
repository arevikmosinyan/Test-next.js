"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

interface CryptoData {
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
    };
  };
}

function isCryptoData(data: any): data is CryptoData {
  return (
    typeof data.name === "string" &&
    typeof data.symbol === "string" &&
    typeof data.quote === "object" &&
    typeof data.quote.USD === "object" &&
    typeof data.quote.USD.price === "number"
  );
}

const fetchCryptoQuote = async (symbol: string) => {
  const response = await fetch(
    `http://localhost:3000/api/quote?symbol=${symbol}`,
    {
      headers: {
        "Content-Type": "application/json",
      },

      method: "GET",
    }
  );
  const json = await response.json();

  return json.data.data;
};

const CryptoSingle = ({ params }: { params: { symbol: string } }) => {
  const {
    data: cryptoData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cryptoData", params.symbol],
    queryFn: async () => {
      const res = await fetchCryptoQuote(params.symbol);
      // console.log({ res });
      const mod = Object.values(res).flat();
      return mod;
    },
  });

  // console.log(cryptoData);

  // console.log(cryptoData, "nnnn");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="text-2xl sm:text-3xl md:text-5xl text-center m-6 bg-gray-300 p-4 rounded-lg">
      CryptoSingle by {params.symbol}
      {cryptoData && isCryptoData(cryptoData[0]) && (
        <div className="m-4 text-start bg-gray-100 p-3 rounded-xl">
          <h2 className="p-3">name: {cryptoData[0].name}</h2>
          <p className="p-3">symbol: {cryptoData[0].symbol}</p>
          <p className="p-3">price: {cryptoData[0].quote.USD.price}</p>
        </div>
      )}
    </div>
  );
};

export default CryptoSingle;

// import React from "react";
// import { useQuery } from "@tanstack/react-query";

// const fetchCryptoQuote = async (symbol: string) => {
//   const response = await fetch(
//     `http://localhost:3000/api/quote?symbol=${symbol}`,
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },

//       method: "GET",
//     }
//   );
//   const json = await response.json();

//   return json.data.data;
// };

// const CryptoSingle = async ({ params }: { params: { symbol: string } }) => {
//   const dt = await fetchCryptoQuote(params.symbol);
//   console.log(dt, "nnnn");
//   return (
//     <div className="text-2xl sm:text-3xl md:text-5xl text-center m-6 bg-red-300 p-4 rounded-lg">
//       CryptoSingle by {params.symbol}
//       {/* {dt?.symbol[0].id}
//       {dt?.symbol[0].name}
//       {dt?.symbol[0].symbol}
//       {dt?.symbol[0].quote.USD.price} */}
//     </div>
//   );
// };

// export default CryptoSingle;
