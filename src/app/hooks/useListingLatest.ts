"use client";

import { useQuery } from "react-query";

const fetchCryptos = async () => {
  const response = await fetch("/api?start=0&limit=100&sort=market_cap", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const json = await response.json();

  return json.data.data;
};

const useListingLatest = () => {
  return {};
};

export default useListingLatest;
