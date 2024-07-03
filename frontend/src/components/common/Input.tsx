interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-medium mb-2">
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...rest}
      />
    </div>
  );
};

export default Input;
