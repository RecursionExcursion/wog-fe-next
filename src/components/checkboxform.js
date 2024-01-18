export default function CheckboxForm(props) {
  return (
    <div className="border border-primary p-10 flex flex-col gap-5">
      <div>{props.title}</div>
      <div className="flex flex-col gap-2">
        {props.options.map((option) => (
          <div className="flex flex-row gap-4" key={option.value}>
            <input type="checkbox" value={option.value} name={props.title} />
            <label>{option.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
