// import { redirect } from "react-router-dom"

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname
  const isLoggedIn = localStorage.getItem("loggedin")
  
  if (isLoggedIn == "false") {
    // throw redirect(`/login?message=You must log in first.&redirectTo=${pathname}`)
    const redirectUrl = `/login?redirectTo=${pathname}`
    window.location.href = redirectUrl
  }
  return null
}