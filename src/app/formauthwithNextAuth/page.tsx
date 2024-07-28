'use client';
import React from 'react';
import { signIn } from 'next-auth/react';

//yete NextAuth-i credentialnerov sign in-i built in login formn enq ogtagorcum //aysinqn uneneq credentials:{email:...,password:...}//datark object chi mer credentials@
const LoginWithNextAuth = () => {
  return (
    <div>
      <button
        className='bg-red-300 p-2 rounded-lg border-[2px] border-black'
        onClick={() => signIn()}>
        Login (LoginWithNextAuth)
      </button>
    </div>
  );
};

export default LoginWithNextAuth;
// return (
//   <div className='flex flex-col items-center justify-center gap-4'>
//     <h1>Login</h1>
//     <form className='flex flex-col items-center justify-center mx-auto bg-yellow-200 p-2 gap-4'>
//       <input type='email' placeholder='john90smith@gmail.com' />
//       <input type='password' placeholder='*********' />
//       <button
//         type='submit'
//         className='border-[#000000] border-[2px] rounded-lg p-[4px]'>
//         Submit
//       </button>
//     </form>
//   </div>
// );
