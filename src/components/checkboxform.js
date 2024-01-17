import React, { useState } from "react";

export default function CheckboxForm(props) {
  const options = props.options;
  console.log("options", options);

  // Step 1: Define state
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Step 3: Handle checkbox state changes
  const handleCheckboxChange = (option) => {
    if (selectedOptions.some((item) => item.value === option.value)) {
      // If the option is already selected, remove it
      setSelectedOptions(selectedOptions.filter((item) => item.value !== option.value));
    } else {
      // If the option is not selected, add it
      setSelectedOptions([...selectedOptions, { value: option.value, name: option.name }]);
    }
  };

  return (
    <form className="mb-2 flex-shrink-0 flex-grow-0 w-64">
     <div >Selected: {selectedOptions.map(option => option.name).join(", ")}</div>
      {/* Step 2: Map through the array of options */}
      {options.map((option) => (
        <div key={option.value}>
          <label>
            <input
              type="checkbox"
              value={option.value}
              checked={selectedOptions.some((item) => item.value === option.value)}
              onChange={() => handleCheckboxChange(option)}
            />
            {option.name}
          </label>
        </div>
      ))}
    </form>
  );
}
