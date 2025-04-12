import React from 'react'
import Deletebtn from '@/components/Deletebtn'
import Editbtn from '@/components/EditUser'

const CardUser = ({ e }) => {
	return (
		<div className="flex items-center justify-between p-6 mb-5 bg-gradient-to-r from-blue-800 to-teal-400 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
			<div className="flex flex-col space-y-2">
				<p className="text-xl font-semibold text-white">{e.name}</p>

				<p className="text-sm font-medium text-white bg-opacity-70 bg-gray-800 rounded-full px-4 py-1">
					ID: {e.id}
				</p>
			</div>

			<div className="flex gap-3">
				<Editbtn id={e.id} currentName={e.name} />
				<Deletebtn id={e.id} />
			</div>
		</div>
	)
}

export default CardUser
