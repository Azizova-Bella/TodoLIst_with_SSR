import CardUser from '@/components/CardUser'
import AddUser from '@/components/AddUser'
import axios from 'axios'

export const API = 'https://67de3c40471aaaa74283aa75.mockapi.io/users'

export async function getData() {
	try {
		const { data } = await axios(API)
		return data
	} catch (error) {
		console.error(error)
	}
}

const Home = async () => {
	const data = await getData()
	return (
		<div className="w-[80%] m-auto mt-6">
			<AddUser />
			<div className="mt-4">
				{data?.map((e) => (
					<CardUser key={e.id} e={e} />
				))}
			</div>
		</div>
	)
}

export default Home
