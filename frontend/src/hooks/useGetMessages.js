import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";


const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();
	const token = localStorage.getItem("token")
	const url = 'http://localhost:4000'
	useEffect(() => {
		const getMessages = async () => {
			setLoading(true)
    
			try {
			const response = await axios({
				method:"get",
				url:url+`/api/message/${selectedConversation._id}`,
				headers:{token},
			})
			if(response.data.success){
				setMessages(response.data.messages)
			}
			} catch (error) {
			console.log(error);
			}finally{ setLoading(false)}
    
		};

		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);

	return { messages, loading };
};
export default useGetMessages;