import { axiosInstance, baseRequest } from ".";

export const tableAPI = {
	async getUser() {
		return baseRequest(() => axiosInstance.get(''));
	},
}