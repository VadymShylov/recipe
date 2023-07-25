import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Input = () => {
  const [searchTerm, setSearchTerms] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const handleChangeValue = e => {
    const search = e.target.value.trim();
    setSearchTerms(search);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchTerm === '') {
      return toast.info('Pls fill up Search holder');
    }

    navigate(`category/${searchTerm}`, {
      state: location.state,
    });

    setSearchTerms('');
  };

  return (
    <div className="bg-gray-200 rounded-full flex items-center px-2  ">
      <AiOutlineSearch size={25} />
      <form onSubmit={handleSubmit}>
        <input
          value={searchTerm}
          name={searchTerm}
          onChange={handleChangeValue}
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search foods"
        />
      </form>
    </div>
  );
};
