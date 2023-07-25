import { AiOutlineMenu } from 'react-icons/ai';

export const Navbar = ({ onClickChange }) => {
  
  return (
    <>
      <div className="cursor-pointer" onClick={onClickChange}>
        <AiOutlineMenu size={30} />
      </div>

      <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px"></div>
    </>
  );
};
