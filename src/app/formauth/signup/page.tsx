import React from 'react';
import { signupaction } from './actionforformauth';
import { useActionState } from 'react';

const SignUp = () => {
  const [state, action, pending] = useActionState(signupaction, undefined);

  return (
    <div className='bg-blue-500 h-[60vh] w-[50vw] m-auto flex flex-col items-center justify-center'>
      <form
        action={action}
        className='max-w-[20vw] flex flex-col items-center justify-center gap-2 m-auto'>
        <input
          type='text'
          name='name'
          className='bg-yellow-200 border-1 rounded-md'
        />
        {state?.errors?.name && <p>{state.errors.name}</p>}
        <input
          type='text'
          name='email'
          className='bg-yellow-200 border-1 rounded-md'
        />
        {state?.errors?.email && <p>{state.errors.email}</p>}
        <input
          type='text'
          name='password'
          placeholder='password'
          className='bg-yellow-200 border-1 rounded-md'
        />
        {state?.errors?.password && (
          <div>
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error: any) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}

        <button
          type='submit'
          style={{
            color: 'white',
            marginBottom: 20,
            border: '2px solid #fff',
            borderRadius: 10,
            padding: 10,
          }}
          disabled={pending}>
          {pending ? 'Submitting' : 'Sign up'}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
