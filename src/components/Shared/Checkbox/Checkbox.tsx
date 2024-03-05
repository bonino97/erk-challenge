interface CheckboxProps {
  label: string;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, onChange }) => (
  <label className='flex items-center space-x-2'>
    <input
      type='checkbox'
      className='form-checkbox rounded h-4 w-4 border-blue-300 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out cursor-pointer accent-gray-700'
      onChange={onChange}
    />
    <span className='text-gray-700 uppercase'>{label}</span>
  </label>
);

export default Checkbox;
