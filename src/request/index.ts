import axios from "axios";

const authOptions = {
  url: "https://accounts.spotify.com/api/token",
};

export const registerClient = async (): Promise<any> => {
  // console.log(22);
  try {
    const data = await axios.post(
      "https://accounts.spotify.com/api/token",
      {
        grant_type: "client_credentials",
      },
      {
        headers: {
          " Content-Type": "application/x-www-form-urlencoded",

          Authorization:
            "Basic " +
            Buffer.from(
              process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID +
                ":" +
                process.env.NEXT_PUBLIC_SPOTIFY_SECRET
            ).toString("base64"),
        },
      }
    );
    // console.log({ data });
    return data;
  } catch (error) {
    // console.log(error);
  }
};

// export const fetchArtists = () => {
//   const defaultOptions = {
//     baseURL: process.env.REACT_APP_API_PATH,
//     method: "get",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   let instance = axios.create(defaultOptions);

//   // Set the AUTH token for any request
//   instance.interceptors.request.use(function (config) {
//     const token = localStorage.getItem("token");
//     config.headers.Authorization = token ? `Bearer ${token}` : "";
//     return config;
//   });

//   return instance;
// };

// export default fetchArtists();

//listn e

const fetchCryptosListingsLatest = (params: {}) => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_COIN_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY,
    },
    params: params,
  });

  return instance.get("v1/cryptocurrency/listings/latest");
};

export default fetchCryptosListingsLatest;

export const fetchAllCryptosListings = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_COIN_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY,
    },
  });

  return instance.get("v1/cryptocurrency/listings/latest");
};

//yuraqanchyur item ne listi//petq e params tanq vor symbol-ov kardanq

export const fetchCryptosQuotesLatestv2 = (params: {}) => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_COIN_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY,
    },
  });

  return instance.get("v2/cryptocurrency/quotes/latest", {
    params: params,
  });
};
