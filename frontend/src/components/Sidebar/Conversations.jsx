import {React,useState,useEffect} from 'react'
import axios from "axios"
import Conversation from './Conversation.jsx'
import useGetConversations from '../../hooks/useGetConversations.js'

const Conversations = () => {
  	const [users,setUsers] = useState([]);
	// const url = "http://localhost:4000";
	// const token = localStorage.getItem("token");

	// const getAllUsers = async ()=>{
	// 	const response = await axios({
    //                     method: 'get',
    //                     url: url + '/api/users',
    //                     headers: {token}, 
    //                   });
	// 	if(response.data.success){
	// 		setUsers(response.data.filteredUsers);
	// 	}
	// }
	const {loading,conversations} = useGetConversations();


	// useEffect(()=>{
	// 	if (token) {
	// 		getAllUsers();
	// 	}	  
	// },[token])
	
  return (
    <div className='flex flex-col py-2 overflow-auto'>
		{(loading)? (<div className='loading loading-spinner'></div>):
		conversations.map((item,index)=>{
			return <Conversation key = {index} item = {item} lastIndex={index === conversations.length - 1? false:true}/> 
		  })}
      
  
    </div>
  )
}

export default Conversations
