import { axiosInstance, baseRequest } from ".";
import { Contact } from "../type";

export const tableAPI = {
  async getTableList(offset: number = 0) {
    return baseRequest(() =>
      axiosInstance.get(`table/?limit=10&offset=${offset}`)
    );
  },

  async createContact(data: Contact) {
    return baseRequest(() => axiosInstance.post("table/", data));
  },

  async updateContact(data: Partial<Contact>, id: number) {
    return baseRequest(() => axiosInstance.patch(`table/${id}/`, data));
  },

  async deleteContact(id: number) {
    return baseRequest(() => axiosInstance.delete(`table/${id}/`));
  },
};
