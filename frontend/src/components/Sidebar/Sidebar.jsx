import React, { useEffect, useState } from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import LogoutButton from './LogoutButton.jsx'
import Profile from './Profile.jsx'

const Sidebar = () => {

  return (
	<div className='flex flex-col'>
		<div className='border-r border-slate-500 p-4 flex flex-col'>
				<SearchInput />
				<div className='divider px-3'></div>
				<Conversations />
				<LogoutButton />	
		</div>
		<div className='mt-auto p-4 flex flex-col-reverse'>
			<Profile />
		</div>
	</div>
    
  )
}

export default Sidebar
