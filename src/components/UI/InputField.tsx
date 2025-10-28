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
  return (
    <div
      className={twMerge(
        "flex flex-col gap-1 col-span-2",
        !col_span && "md:col-span-1",
      )}
    >
      <label htmlFor={id} className="font-semibold text-primary">
        {label}
      </label>
      <input
        className="outline-none placeholder-primary/70 focus:ring-2 ring-offset-2 ring-primary/80 duration-300 h-12 px-3 border-primary/20 rounded-md border"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default InputField;
