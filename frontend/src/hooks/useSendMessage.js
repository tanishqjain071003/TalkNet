import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import axios from 'axios'
import { useAuthContext } from '../../context/AuthContext.jsx'

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();
	      const {url} = useAuthContext();
	    const token = localStorage.getItem("token")
	const sendMessage = async (message) => {
		setLoading(true);
		try {
			const response = await axios({
                method: 'post',
                url: url + `/api/message/send/${selectedConversation._id}`,
                data:{message},
                headers: {token}, 
              });
              console.log(response.data.success)
              setMessages([...messages, response.data.newMessage]);
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;
