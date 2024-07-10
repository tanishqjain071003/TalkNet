import {React,useState} from 'react'
import axios from 'axios'
import { BsSend } from "react-icons/bs";
import useConversation from '../../zustand/useConversation';
import useSendMessage from '../../hooks/useSendMessage';
const MessageInput = () => {
  const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

  // const [message, setMessage] = useState("");
  // const {messages,selectedConversation,setMessages} = useConversation();
  // const url = "http://localhost:4000"
  // const token = localStorage.getItem("token")
  // const sendMessage = async(message) =>{
  //   const response = await axios({
  //     method: 'post',
  //     url: url + `/api/message/send/${selectedConversation._id}`,
  //     data:{message},
  //     headers: {token}, 
  //   });
  //   console.log(response.data.success)
  //   if(!response.data.success){
  //     alert(response.data.message)
  //   }
  //   setMessages([...messages,response.data.newMessage])
  // }

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};
  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input type="text" onChange={(e) => setMessage(e.target.value)} value={message} placeholder='Type a message' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'/>
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
            {false ? <div className='loading loading-spinner'></div> : <BsSend />}
        </button>
      </div>
    </form>
  )
}

export default MessageInput