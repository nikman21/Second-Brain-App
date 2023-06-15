'use client';
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <button onClick={() => signIn('google')}>Google</button>
    </div>
    
  )
}

export default Login