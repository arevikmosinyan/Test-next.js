'use client';
import './globals.css';
import Image from 'next/image';
import background from '/public/images/background.png';
import { adsData } from '../constants/adsData';
import Link from 'next/link';
import registerClient from '../request/index';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';
// import { submitForm } from "./actions.js";

export default function Home() {
  const { pending } = useFormStatus();

  const handleSubmit = async () => {
    // console.log("11111");
    try {
      // const res = await registerClient({
      //   url: "https://accounts.spotify.com/api/token",
      //   method: "POST",
      // });
      const res = await registerClient();
      // console.log(res); // stegh local storage-um pahem res-i acces_token token:' ' key value-ov ???
    } catch (error) {
      // console.error("Error in handleFetch:", error);
    }
  };
  return (
    <div className='w-full h-1/2 flex flex-col justify-center items-center'>
      <h1
        className='text-2xl sm:text-3xl md:text-5xl text-center m-6'
        style={{ fontFamily: 'Open Sans, sans-serif' }}>
        Advertisement of our works
      </h1>
      <Image
        src={background}
        alt='Advertisement of our works'
        className='object-cover'
      />
      <Link
        href='/ourproducts'
        className='text-base sm:text-xl md:text-3xl text-center  text-white m-4 font-medium bg-gray-800 p-4 rounded-xl'>
        Get to know our products first (parallel routing)
      </Link>
      <Link
        href='/crypto'
        className='text-base sm:text-xl md:text-3xl text-center  text-white m-4 font-medium bg-gray-800 p-4 rounded-xl'>
        Here is our cryptocurency page (Dynamic routing with API)
      </Link>
      <p
        className='text-base sm:text-xl md:text-3xl text-center m-4 font-medium'
        style={{ fontFamily: 'Roboto, sans-serif' }}>
        Here are some of our works (Dynamic routing)
      </p>
      <div className='flex flex-col bg-gray-200 rounded-lg p-4 m-4'>
        {adsData.map((elem, index) => (
          <div
            className='flex flex-col md:flex-row flex-1 items-center justify-center w-full h-full p-5'
            key={elem.title}>
            <Image
              src={elem.img}
              alt={elem.title}
              width={300}
              height={300}
              className='object-cover'
            />
            <div className='flex flex-1 flex-col items-center justify-center'>
              <Link
                href={elem.link}
                className='flex items-center justify-center'>
                <p
                  className='text-base sm:text-2xl text-center m-4 font-medium'
                  style={{ fontFamily: 'Roboto, sans-serif' }}>
                  {elem.title}
                </p>
                <p className='text-blue-600 underline'>Details...</p>
              </Link>
              <p
                className='text-base sm:text-lg text-justify m-4 font-medium'
                style={{ fontFamily: 'Roboto, sans-serif' }}>
                {elem.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='bg-gray-600 w-full h-auto'>
        <h1
          className='text-base sm:text-xl md:text-3xl text-center text-white m-4 font-medium'
          style={{ fontFamily: 'Roboto, sans-serif' }}>
          Our clients
          <form
            // action={submitForm}
            onSubmit={handleSubmit}
            className='flex items-center justify-center'>
            <button
              type='submit'
              style={{
                margin: 20,
                border: '2px solid #fff',
                borderRadius: 10,
                padding: 10,
              }}
              disabled={pending}>
              {pending ? 'Getting clients names...' : 'Get clients'}
            </button>
          </form>
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Link
            href='/formtodo'
            style={{
              color: 'white',
              marginBottom: 20,
              border: '2px solid #fff',
              borderRadius: 10,
              padding: 10,
            }}>
            Go to our FormToDo
          </Link>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Link
            href='/formauth'
            style={{
              color: 'white',
              marginBottom: 20,
              border: '2px solid #fff',
              borderRadius: 10,
              padding: 10,
            }}>
            Go to our FormAuth
          </Link>
        </div>
      </div>
    </div>
  );
}
