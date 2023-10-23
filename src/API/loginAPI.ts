import { axiosInstance, baseRequest } from ".";
import { LoginForm } from "../components/LoginPage/LoginPage";

export const loginAPI = {
  async login(data: LoginForm) {
    return baseRequest(() => axiosInstance.post("login/", data));
  },
};
