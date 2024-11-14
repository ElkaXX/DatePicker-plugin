import React, { useState } from "react";
import "./DatePicker.css";

// Interface defining expected properties for DatePicker component
interface DatePickerProps {
  id: string;
  label: string;
  value: string;
  onChange: (date: string) => void; // Callback for handling date changes
}

const DatePicker: React.FC<DatePickerProps> = ({
  id,
  label,
  value,
  onChange,
}) => {
  const [date, setDate] = useState(value); // State to manage selected date

  // Event handler to update state and propagate the selected date
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    onChange(selectedDate); // Call parent component's callback with the new date
  };

  return (
    <div className="date-picker">
      <label htmlFor={id} className="date-picker-label">
        {label}
      </label>
      <input
        type="date"
        id={id}
        value={date}
        onChange={handleDateChange} // Attach event handler for date changes
        className="date-picker-input"
      />
    </div>
  );
};

export default DatePicker;
