async function ContactSection() {
  const data = await fetch('https://swapi.tech/api/films').then((res) =>
    res.json(),
  );
  return (
    <div className='h-[50vh] mx-auto bg-yellow-100 p-8 rounded-md shadow-md mt-8'>
      <h2 className='text-2xl font-semibold mb-6 text-center'>Contact Us</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <h3 className='text-xl font-semibold mb-2'>Address</h3>
          <p className='text-gray-800'>
            123 Main Street, <br />
            Cityville, State, <br />
            Country - 12345
          </p>
        </div>
        <div>
          <h3 className='text-xl font-semibold mb-2'>Phone Number</h3>
          <p className='text-gray-800'>+1 (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
