import { NextApiHandler } from 'next';
import { api } from '../../lib/unsplash';
import { PhotoResponse } from '../../types';

const Handler: NextApiHandler = async ( req, res ) => {
	try {
		const response = await api.get( '/photos/random', {
			params: {
				orientation: 'landscape',
				collection: '1459961'
			}
		} )

		const photo: PhotoResponse = {
			id: response.data.id,
			description: response.data.description,
			likes: response.data.likes,
			downloads: response.data.downloads,
			views: response.data.views,
			blur_hash: response.data.blur_hash,
			url: response.data.urls.regular,
			username: response.data.user.username,
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
