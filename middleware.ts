export { auth as middleware } from './auth'

export const config = {
  // matcher: []
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
