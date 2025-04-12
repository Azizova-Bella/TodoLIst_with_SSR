'use client'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { API } from '@/app/page'

const Editbtn = ({ id, currentName }) => {
	const [isEditing, setIsEditing] = useState(false)
	const [newName, setNewName] = useState(currentName)
	const router = useRouter()

	const handleSave = async () => {
		if (!newName) return
		try {
			await axios.put(`${API}/${id}`, { name: newName })
			setIsEditing(false)
			router.refresh()
		} catch (error) {
			console.error('Edit failed:', error)
		}
	}

	return (
		<div className="inline-flex gap-2 items-center">
			{isEditing ? (
				<>
					<input
						type="text"
						value={newName}
						onChange={(e) => setNewName(e.target.value)}
						className="border px-2 py-1"
					/>
					<button
						onClick={handleSave}
						className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
					>
						Save
					</button>
					<button
						onClick={() => {
							setIsEditing(false)
							setNewName(currentName)
						}}
						className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
					>
						Cancel
					</button>
				</>
			) : (
				<button
					onClick={() => setIsEditing(true)}
					className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
				>
					Edit
				</button>
			)}
		</div>
	)
}

export default Editbtn
