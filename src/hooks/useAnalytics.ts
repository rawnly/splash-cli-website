import splitbee from '@splitbee/web'
import { useEffect } from 'react'

const useAnalytics = () => {
	useEffect( () => {
		splitbee.init( {
			scriptUrl: "/bee.js",
			apiUrl: "/_hive",
		} )
	}, [] )
}

export default useAnalytics
