import { redirect } from "react-router-dom"

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname
  const isLoggedIn = localStorage.getItem("loggedin")
  
  if (!isLoggedIn) {
    throw redirect(`/login?message=You must log in first.&redirectTo=${pathname}`)
  }
}

// import { Navigate } from "react-router-dom"
// export async function requireAuth() {
//     const isloggedIn = false
//     if(!isloggedIn) {
//         return <Navigate to="/login?message=You must log in first." />
//     }
//     return null
// }


{/* import { useNavigate } from 'react-router-dom';

export function requireAuth() {
  const isLoggedIn = false;
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate{'/login?message=You must log in first.', { replace: true }};
  }
} 


{/* import { useHistory } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = false;
  const history = useHistory();

  if (!isLoggedIn) {
    history.push("/login?message=You must log in first.");
  }
} */}