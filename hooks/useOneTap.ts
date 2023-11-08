import googleOneTap from 'google-one-tap'
import { useEffect } from 'react'

export default function useOneTap() {
  const options = {
    client_id:
      '615164233858-36tr3n5i32l8256j95ncvnf68htp11cj.apps.googleusercontent.com', // required
    auto_select: false, // optional
    cancel_on_tap_outside: false, // optional
    context: 'signin' // optional
  }

  useEffect(() => {
    //@ts-ignore
    googleOneTap(options, response => {
      // Send response to server
      console.log(response)
    })
  }, [])
}
