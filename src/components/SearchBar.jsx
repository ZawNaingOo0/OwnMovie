import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BiMoviePlay } from 'react-icons/bi';


const SearchBar = ({ onSubmit }) => {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <nav className='h-16 text-white bg-gray-900 capitalize shadow-md overflow-hidden'>
      <div className='flex'>
        <div className='flex justify-start items-center h-full'>
          <NavLink className='ml-10' to='/'>
            <BiMoviePlay className=' w-12 h-16 text-amber-500 cursor-pointer' />
          </NavLink>
          <form onSubmit={handleSubmit} autoComplete='off' className='p-2 text-gray-300 focus-within:text-gray-600'>
            <label htmlFor='search-field' className='sr-only'>
              Search all files
            </label>
            <div className='flex justify-start items-center'>
              <input
                type='search'
                className='px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                placeholder='Search'
                aria-label='Search'
                aria-describedby='button-addon2'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
