export type Category = {
  id: number;
  name: string;
};

export type Provider = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  charges_per_slot_rupee: number;
  slot_duration_mins: number;
  work_start_time: string;
  work_end_time: string;
}

export type Slot = {
  id: number;
  start_time: string;
  end_time: string;
  status: number;
  slot_hold_time: string | null;
  created_at: string;
  updated_at: string;
  provider_id: number;
  charges_per_slot_rupee: number;
}

export type SlotPreview = {
  id: number;
  start_time: string; // ISO string
  end_time: string;   // ISO string
  status: string;
  slot_hold_time: string; // ISO string

  provider: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    work_start_time: string;
    work_end_time: string;
    slot_duration_mins: number;
    charges_per_slot_rupee: number;

    category: {
      id: number;
      name: string;
    };
  };
}

export type BookingStatus = 'CONFIRMED' | 'CANCELLED';

export type Booking = {
  id: number;
  status: BookingStatus;
  booking_time: string; // ISO string if coming from API
  created_at: string;
  updated_at: string;

  slot: {
    id: number;
    start_time: string; // or Date if parsed
    end_time: string;
  };

  provider: {
    id: number;
    name: string;
  };
};
