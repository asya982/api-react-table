import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://146.190.118.121/api/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const baseRequest = async (requestFunction: () => Promise<any>) => {
  try {
    return await requestFunction();
  } catch (error: any) {
    const field = Object.keys(error.response?.data)[0];
    throw new Error(
      error.response?.data.messsage || error.response?.data[field]
    );
  }
};
