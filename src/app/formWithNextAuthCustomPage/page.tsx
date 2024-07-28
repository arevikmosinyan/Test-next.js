'use client';
import { signIn } from 'next-auth/react';
import React, { FormEventHandler, useState } from 'react';

const FormWithNextAuthForCustomPage = () => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    //karogh enq tal validationner mer uzats
    e.preventDefault();
    const res = await signIn('credentials', {
      //type: 'credentials',-ic enq nayum signIn-i parameter@
      email: userInfo.email,
      password: userInfo.password,
      redirect: false, //invalid credentials-i depqum voch te redirect kani, ayl kveradarcni res@ vorpes error parunakogh object
      //im depqum chashxatec
    });

    console.log(res);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center justify-center mx-auto bg-yellow-200 p-2 gap-4'>
        <input
          type='email'
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          placeholder='john90smith@gmail.com'
        />
        <input
          type='password'
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          placeholder='*********'
        />
        <button
          type='submit'
          className='border-[#000000] border-[2px] rounded-lg p-[4px]'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormWithNextAuthForCustomPage;
