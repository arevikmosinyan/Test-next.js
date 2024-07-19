import React from 'react';
import Link from 'next/link';

const Auth = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Link
          href='/formauth/signup'
          style={{
            color: 'white',
            marginBottom: 20,
            border: '2px solid #fff',
            borderRadius: 10,
            padding: 10,
          }}>
          Go to SignUp page
        </Link>
      </div>
      <div
        style={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Link
          href='/login'
          style={{
            color: 'white',
            marginBottom: 20,
            border: '2px solid #fff',
            borderRadius: 10,
            padding: 10,
          }}>
          Go to LoginPage
        </Link>
      </div>
    </>
  );
};

export default Auth;
