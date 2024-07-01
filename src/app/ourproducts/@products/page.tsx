async function ProductsSection() {
  const data = await fetch('https://swapi.tech/api/films').then((res) =>
    res.json(),
  );
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Product 2',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      id: 3,
      name: 'Product 3',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div className='h-[50vh] mx-auto bg-white p-4 rounded-md shadow-md m-8 bg-gray-100'>
      <h2 className='text-2xl font-semibold mb-6 text-center'>Our Products</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map((product) => (
          <div
            key={product.id}
            className='border border-gray-200 p-4 rounded-md'>
            <h3 className='text-xl font-semibold mb-2'>{product.name}</h3>
            <p className='text-gray-800 mb-2'>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsSection;
