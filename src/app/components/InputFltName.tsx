import { UseFormRegister } from "react-hook-form";
interface InptProps {
  id: string; // Pass the currency list as a prop
  placeHolder: string; // Add this line
  name: string;
  register: UseFormRegister<any>; // Add the register prop
}

export default function Inpt({
  id,
  name,
  register,
  placeHolder = "",
}: InptProps) {
  return (
    <div className="relative">
      <input
        type="text"
        id={id}
        title={id}
        name={name}
        {...register(name)}
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 kaiser"
        placeholder={placeHolder}
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-900 px-2 kaiser-focus:px-2 kaiser-focus:text-blue-600 kaiser-focus:dark:text-blue-500 kaiser-placeholder-shown:scale-100 kaiser-placeholder-shown:-translate-y-1/2 kaiser-placeholder-shown:top-1/2 kaiser-focus:top-2 kaiser-focus:scale-75 kaiser-focus:-translate-y-4 left-1"
      >
        {placeHolder}
      </label>
    </div>
  );
}
