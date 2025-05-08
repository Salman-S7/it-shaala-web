'use client';

import { useEffect, useState, useRef } from 'react';
import EnrollmentForm from './enrollment-form';

export default function AutoEnrollmentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const delayRef = useRef(15000); // Start with 15 seconds
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const schedulePopup = () => {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(true);
        delayRef.current = Math.min(delayRef.current + 5000, 60000);
        schedulePopup(); // Recursive call
      }, delayRef.current);
    };

    schedulePopup();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return <EnrollmentForm isOpen={isOpen} onClose={handleClose} />;
}
