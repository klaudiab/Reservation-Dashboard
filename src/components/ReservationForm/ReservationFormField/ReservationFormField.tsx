import { FormFieldProps } from "../../../types/reservation";;

const ReservationFormField: React.FC<FormFieldProps> = ({
  label,
  type,
  placeholder,
  name,
  register,
  error,
  value,
  options,
}) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    {type === "select" ? (
      <select className="form-control" {...register(name)} defaultValue={value}>
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    ) : (
    <input className="form-control"
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      {...register(name)}
    />
    )}
    {error && <span className="error-message">{error.message}</span>}
    </div>
);
export default ReservationFormField;