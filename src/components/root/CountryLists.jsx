import CountryItem from './CountryItem';

function CountryLists({ data }) {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
      {data.map((d) => (
        <CountryItem key={d.name.common} item={d} />
      ))}
    </div>
  );
}

export default CountryLists;
