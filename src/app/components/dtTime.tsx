import { format } from 'date-fns';
import { useState, useEffect } from 'react';

export default function CurrentDateTime() {
  const [currentTime, setCurrentTime] = useState('');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(format(new Date(), "eeee, d MMMM yyyy hh:mm:ss a"));
    }, 1000);
    
    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <span>
      {currentTime}
    </span>
  );
}
