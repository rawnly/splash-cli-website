
export type PhotoResponse = {
	id: string
	description: string

	likes: number
	downloads: number
	views?: number
	blur_hash: string
	url: string

	username: string
}
