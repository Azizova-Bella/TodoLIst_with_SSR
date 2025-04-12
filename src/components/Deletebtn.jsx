'use client'
import React from 'react'
import axios from 'axios'

const Deletebtn = ({ id }) => {
	const deleteData = async () => {
		try {
			await axios.delete(`https://67de3c40471aaaa74283aa75.mockapi.io/users/${id}`)
			location.reload()
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div>
			<button
				className="bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
				onClick={deleteData}
			>
				Delete
			</button>
		</div>
	)
}

export default Deletebtn
