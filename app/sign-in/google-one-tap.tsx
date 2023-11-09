'use client'

import useOneTap from '@/hooks/useOneTap'

export default function GoogleOneTap() {
  useOneTap()

  return (
    <div
      id="g_id_onload"
      data-client_id={process.env.GOOGLE_CLIENT_ID}
      data-login_uri={`${process.env.PUBLIC_HOST_URL}/api/auth/callback/google`}
      data-auto_select="true"
    ></div>
  )
}
