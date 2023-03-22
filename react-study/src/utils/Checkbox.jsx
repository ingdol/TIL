export const Checkbox = ({
  id,
  filter,
  isChecked,
  onChange,
  label,
  className,
  isRadio,
  name,
  value,
  defaultCursor, // readonly) 포인터 커서가 필요 없을 경우
}) => (
  <div
    className={`${filter ? "checkbox-filter" : ""} ${
      !filter && `checkbox-wrapper ${defaultCursor ? "auto-cursor" : ""}`
    }`}
  >
    <input
      type={isRadio ? "radio" : "checkbox"}
      id={id}
      value={value && value}
      checked={isChecked}
      name={name && name}
      onChange={e => onChange && onChange(e)}
    />
    <label htmlFor={id}></label>
    <label htmlFor={id} className={className}>
      {label}
    </label>
  </div>
);
