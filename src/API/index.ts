import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://technical-task-api.icapgroupgmbh.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const baseRequest = async (requestFunction: () => Promise<any>) => {
  try {
    return await requestFunction();
  } catch (error: any) {
    throw error.response?.data;
  }
};
