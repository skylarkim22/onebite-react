const InputText = ({ id, label, defaultValue, value, onChange, disabled }) => {
  const handlerChange = (e) => {
    if (onChange) onChange(e);
  };

  const isControlled = typeof value !== "undefined";

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        className={disabled ? "disabled" : ""}
        defaultValue={!isControlled ? defaultValue : undefined}
        value={isControlled ? value || "" : undefined}
        onChange={handlerChange}
      />
    </div>
  );
};

export default InputText;
