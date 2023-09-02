import { format } from 'date-fns';

export default function CurrentDateTime() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "eeee, d MMMM yyyy hh:mm a");

  return (
    <span>
      {formattedDate}
    </span>
  );
}
