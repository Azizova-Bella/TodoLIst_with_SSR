'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const API = 'https://67de3c40471aaaa74283aa75.mockapi.io/users'

const AddUser = () => {
	const [name, setName] = useState('')
	const router = useRouter()

	const add = async () => {
		if (!name) return
		try {
			await axios.post(API, { name })
			setName('')
			router.refresh()
		} catch (error) {
			console.error('Add user failed:', error)
		}
	}

	return (
		<div className="max-w-md mx-auto p-6 bg-gradient-to-r from-blue-800 to-teal-300 rounded-lg shadow-lg space-y-4">
			<p className="text-2xl font-semibold text-white">Add New User</p>
			<div className="flex gap-4 items-center">
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Enter name"
					className="flex-1 p-3 w-[100px] border lg:w-[700px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<button
					onClick={add}
					className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
				>
					Add User
				</button>
			</div>
		</div>
	)
}

export default AddUser
