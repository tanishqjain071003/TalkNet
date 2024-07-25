import React, { useEffect, useState } from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import LogoutButton from './LogoutButton.jsx'
import Profile from './Profile.jsx'

const Sidebar = () => {

  return (
	<div className='flex flex-col w-1/3 h-full'>
		<div className='border-r border-slate-500 p-4 flex flex-col overflow-auto'>
				<SearchInput />
				<div className='divider px-3'></div>
				<Conversations />
		</div>
		<div className='mt-auto p-4 flex flex-col'>
			<Profile />	
		</div>
	</div>
    
  )
}

export default Sidebar
