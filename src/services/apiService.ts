import type { Category, Provider, Slot, BookingResponse } from "../types";
import API from "./axios";

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await API.get("/categories");
  return res.data.data;
};

export const fetchProviders = async (): Promise<Provider[]> => {
  const res = await API.get("/providers");
  return res.data;
};

export const fetchAvailableSlots = async (): Promise<Slot[]> => {
  const res = await API.get("/slots");
  return res.data;
};

export const bookSlot = async (slotId: string): Promise<BookingResponse> => {
  const res = await API.post('/book', { slotId });
  return res.data;
};
