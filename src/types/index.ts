export type Category = {
  id: number;
  name: string;
};

export type Provider = {
  id: number;
  name: string;
  categoryId: number;
};

export type Slot = {
  id: string;
  providerId: number;
  startTime: string; 
  endTime: string; 
};

export type BookingResponse = {
  success: boolean;
  message: string;
  bookingId: string;
};
