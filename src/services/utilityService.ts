export const to12Hour = (time: string) => {
  const [hourStr, minute] = time.split(':');
  let hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${ampm}`;
};

export const GetBookingStatus = (status: number) => {
  switch (status) {
    case 1:
      return "Confirmed"
    case 2:
      return "Cancelled"
    default:
      break;
  }
}

export const GetSlotStatus = (status: number) => {
  switch (status) {
    case 1:
      return "Unavailable"
    case 2:
      return "Available"
    case 3:
      return "Hold"
    case 4:
      return "Booked"

    default:
      break;
  }
}

