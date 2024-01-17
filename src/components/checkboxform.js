export default function CheckboxForm(props) {
  const options = props.options;

  const handleSelection = (selectedOptions) => {
    props.onSelection(selectedOptions);
  };

  return (
    <div className="border border-primary">
      <div>
        {props.title}
      </div>
      <div>
        {options.map((option) => (
          <div className="flex flex-row" key={option.value}>
            <label>
              <input
                type="checkbox"
                value={option.value}
                onChange={(e) => handleSelection(e.target.value)}
              />
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
