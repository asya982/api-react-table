import { axiosInstance, baseRequest } from ".";
import { LoginForm } from "../type";

export const loginAPI = {
  async login(data: LoginForm) {
    return baseRequest(() => axiosInstance.post("login/", data));
  },
};
