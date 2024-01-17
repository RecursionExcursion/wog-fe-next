export default function CheckboxForm(props) {
  return (
    <div className="border border-primary">
      <div>
        {props.title}
      </div>
      <div>
        {props.options.map((option) => (
          <div className="flex flex-row" key={option.value}>
            <label>
              <input
                type="checkbox"
                value={option.value}
                name={props.title}
              />
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
