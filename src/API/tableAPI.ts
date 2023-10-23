import { axiosInstance, baseRequest } from ".";

export const tableAPI = {
	async getTableList() {
		return baseRequest(() => axiosInstance.get('table/'));
	},
}