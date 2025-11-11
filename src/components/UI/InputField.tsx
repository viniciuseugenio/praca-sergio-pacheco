import { twMerge } from "tailwind-merge";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  placeholder: string;
  col_span?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  id,
  col_span = false,
  ...props
}) => {
  const idLabel = `${id}-label`;
  return (
    <div
      className={twMerge(
        "col-span-2 flex flex-col gap-1",
        !col_span && "md:col-span-1",
      )}
    >
      <label id={idLabel} htmlFor={id} className="text-primary font-semibold">
        {label}
      </label>
      <input
        aria-describedby={idLabel}
        className="placeholder-primary/70 ring-primary/80 border-primary/20 h-12 rounded-md border px-3 ring-offset-2 duration-300 outline-none focus:ring-2"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default InputField;
