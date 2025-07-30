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
