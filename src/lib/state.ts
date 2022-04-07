import create from 'zustand'
import { type PhotoResponse } from '../types'

type State = {
	photo: PhotoResponse | null
	setPhoto: ( photo: PhotoResponse | null ) => void
}


export const usePhotoContext = create<State>( set => ( {
	photo: null,
	setPhoto: photo => set( { photo } )
} ) )
