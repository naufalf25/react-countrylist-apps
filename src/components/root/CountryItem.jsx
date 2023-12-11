function CountryItem({ item }) {
  return (
    <div className="w-72 rounded-md shadow-md dark:bg-dark-element dark:text-white">
      <div>
        <img
          src={item.flags.png}
          alt={item.flags.alt}
          className="rounded-t-md w-full h-44 object-cover"
        />
      </div>
      <div className="p-8 mb-4">
        <h2 className="font-bold text-xl">{item.name.common}</h2>
        <div className="mt-4 flex flex-col gap-1">
          <p>
            <span className="font-semibold">Population:</span>{' '}
            {item.population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {item.region}
          </p>
          <p>
            <span className="font-semibold">Capital:</span> {item.capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryItem;
