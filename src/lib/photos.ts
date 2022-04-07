import axios from 'axios'
import { PhotoResponse } from '../types'

export const getDaily = async () => {
	const res = await axios.get<{ photo: PhotoResponse; ok: boolean }>( '/api/daily' )
	return res.data
}

export const getRandom = async () => {
	const res = await axios.get<{ photo: PhotoResponse; ok: boolean }>( '/api/random' )
	return res.data
}
