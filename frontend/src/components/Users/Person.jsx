import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useAuthContext } from '../../context/AuthContext.jsx'
const Person = ({lastIndex,item}) => {

  const token = localStorage.getItem("token")
  const {url} = useAuthContext();
  const image = item.image;

  const handleClick = async (e) => {
		e.preventDefault();
    const response = await axios({
      method:"get",
      url:url+`/api/user/addToFriend/${item._id}`,
      headers:{token},
    })
    if(response.data.success){
     toast.success(response.data.message)
    }
    else{
      toast.error("Error occured")
    }
	};
  
  return (
    <>
    <div onClick = {handleClick}className={`flex h-16 gap-2 items-center hover:bg-teal-400 p-2 py-1 cursor-pointer`}>
        <div className={`avatar`}>
 			    <div className='w-12 rounded-full '>
 						<img src={url+'/images/'+image} alt={item.fullName}/>
 					</div>
 			</div>
            <div className='flex flex-col justify-between'>
                    <p className='font-bold text-gray-200 '>{item.fullName}</p>
            </div>
        </div>
      <div>
    </div>
    {!lastIndex ? <></>:<hr className="h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />}
    </>
        
  )
}

export default Person
