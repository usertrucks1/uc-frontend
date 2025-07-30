import type { Category, Provider, Slot } from "../types";
import API from "./axios";

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await API.get("/categories");
  return res.data.data;
};

export const fetchProviders = async (categoryId: number): Promise<Provider[]> => {
  const res = await API.get(`/providers?category_id=${categoryId}`);
  return res.data.data;
};

export const fetchSlots = async (providerId: number, startDate: string): Promise<Slot[]> => {
  const res = await API.get(`/slots?provider_id=${providerId}&start_date=${startDate}`);
  return res.data;
};

export const holdSlot = async (slot_id: number) => {
  const response = await API.post('/slots/hold', { slot_id });
  return response.data;
};

export const bookSlot = async (slot_id:number, data: any) => {
  const response = await API.post(`/slots/${slot_id}/book`, { data });
  return response.data;
};

