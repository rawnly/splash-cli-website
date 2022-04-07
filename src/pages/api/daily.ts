import { NextApiHandler } from 'next';
import axios from 'axios'
import { api } from '../../lib/unsplash';
import { PhotoResponse } from '../../types';

const Handler: NextApiHandler = async ( req, res ) => {
	try {
		const response = await axios.get<{ id: string }>( 'https://lambda.splash-cli.app/api' )
		const { id } = response.data

		const r = await api.get( `/photos/${id}` )

		const photo: PhotoResponse = {
			id: r.data.id,
			blur_hash: r.data.blur_hash,
			description: r.data.description,
			downloads: r.data.downloads,
			likes: r.data.likes,
			views: r.data.views,
			url: r.data.urls.regular,
			username: r.data.user.username
		}

		return res.send( {
			ok: true,
			photo
		} )
	} catch ( error ) {
		console.error( error )
		return res.send( { ok: false } )
	}
}

export default Handler
