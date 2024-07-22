import {React,useState,useEffect} from 'react'
import axios from "axios"
import Person from './Person.jsx'
import useGetConversations from '../../hooks/useGetConversations.js'

const SearchResults = () => {


	const {loading,conversations} = useGetConversations();

	// useEffect(()=>{
	// 	if (token) {
	// 		getAllUsers();
	// 	}	  
	// },[token])
	if(loading){
		return <span className="loading loading-spinner loading-md"></span>
	}
  return (
    <div className='flex flex-col py-2 overflow-scroll'>
		{conversations.map((item,index)=>{
			return <Person key = {index} item = {item} lastIndex={index === conversations.length - 1? false:true}/> 
		  })}
    </div>
  )
}

export default SearchResults