type FormInputPropsType = {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
};

const FormInput = ({
  label,
  id,
  name,
  placeholder = "",
}: FormInputPropsType) => {
  return (
    <div className="flex flex-1 flex-col gap-[10px]">
      <label htmlFor={id} className="flex items-center gap-1">
        <span>{label}</span>
        <span className="border-1 text-lg text-red-600">{label && "*"}</span>
      </label>

      <input
        type="text"
        className="rounded border p-3 text-sm"
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
