import Link from 'next/link';

export default function OurProducts() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl font-semibold text-center m-6'>
        Here are our products
      </h1>
      <Link
        href='/ourproducts/information'
        className='text-center m-6 bg-gray-300 rounded-2xl p-4'>
        Information...
      </Link>
    </div>
  );
}
