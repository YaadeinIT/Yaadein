import React, { useRef, useState } from 'react';

const DatePicker = () => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div class='mb-3'>
      <div className="form-group">
      <input
        type="date"
        onChange={handleChange}
        ref={dateInputRef}
      />
      </div>
    </div>
  );
};

export default DatePicker;