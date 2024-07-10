import {React,useState} from 'react'
import toast from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
		e.preventDefault();

	};

  return (

    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
      <input type = 'text' value = {search} onChange={(e) => setSearch(e.target.value)}className='input h-12 input-bordered rounded-full' placeholder='Search'/>
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
    </form>
     
   
  )
}

export default SearchInput