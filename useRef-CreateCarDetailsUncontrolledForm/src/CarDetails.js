import React, { useRef, useEffect } from 'react';

const CarDetails = ({ initialData }) => {
  const modelRef = useRef(null);
  const yearRef = useRef(null);
  const colorRef = useRef(null);

  useEffect(() => {
    if (initialData) {
      modelRef.current.value = initialData.model || '';
      yearRef.current.value = initialData.year || '';
      colorRef.current.value = initialData.color || '';
    }
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const model = modelRef.current.value;
    const year = yearRef.current.value;
    const color = colorRef.current.value;

    // Do something with the form data
    console.log('Model:', model);
    console.log('Year:', year);
    console.log('Color:', color);

    // Reset the form
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Model:</label>
        <input type="text" ref={modelRef} />
      </div>
      <div>
        <label>Year:</label>
        <input type="text" ref={yearRef} />
      </div>
      <div>
        <label>Color:</label>
        <input type="text" ref={colorRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CarDetails;
