import Layout from '../components/Layout';
import { Link, useLoaderData } from 'react-router-dom';
import BackButton from '../components/detail/BackButton';
import { getAllCountries } from '../utils';
import { useEffect, useState } from 'react';

function Detail() {
  const [all, setAll] = useState(null);
  const data = useLoaderData()[0];

  useEffect(() => {
    const allCountries = async () => {
      try {
        const data = await getAllCountries();
        const sortByAlphabet = data.sort((a, b) => {
          if (a.name.common < b.name.common) {
            return -1;
          }

          if (a.name.common > b.name.common) {
            return 1;
          }

          return 0;
        });

        setAll(sortByAlphabet);
      } catch (error) {
        console.error(error);
      }
    };

    allCountries();
  }, []);

  return (
    <Layout>
      <div className="mt-2 p-5 md:px-12 lg:px-20">
        <BackButton />
        <div className="mt-16 lg:flex lg:justify-center lg:items-center lg:gap-20">
          <div className="flex justify-center items-center lg:w-1/2">
            <img
              src={data.flags.svg}
              alt={data.flags.alt}
              className="w-[27rem] md:w-[35rem] h-60 md:h-80 lg:w-[38rem] lg:h-96 transition-shadow duration-300 hover:shadow-md"
            />
          </div>
          <div className="mt-10 lg:w-1/2 dark:text-white lg:mt-0">
            <h2 className="capitalize font-bold text-2xl md:text-3xl">
              {data.name.common}
            </h2>
            <div className="lg:mt-6 lg:flex lg:items-start lg:gap-12">
              <div className="mt-6 flex flex-col gap-2 lg:mt-0">
                <p>
                  <span className="font-semibold">Native Name: </span>
                  {'nativeName' in data.name
                    ? Object.values(data.name.nativeName)
                        .map(({ common }) => common)
                        .join(', ')
                    : '-'}
                </p>
                <p>
                  <span className="font-semibold">Population: </span>
                  {'population' in data
                    ? data.population.toLocaleString()
                    : '-'}
                </p>
                <p>
                  <span className="font-semibold">Region: </span>
                  {data.region}
                </p>
                <p>
                  <span className="font-semibold">Sub Region: </span>
                  {data.subregion}
                </p>
                <p>
                  <span className="font-semibold">Capital: </span>
                  {data.capital ? data.capital.join(', ') : '-'}
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-2 lg:mt-0">
                <p>
                  <span className="font-semibold">Top Level Domain: </span>
                  {data.tld}
                </p>
                <p>
                  <span className="font-semibold">Currencies: </span>
                  {'currencies' in data
                    ? Object.values(data.currencies)
                        .map(({ name }) => name)
                        .join(', ')
                    : '-'}
                </p>
                <p>
                  <span className="font-semibold">Languages: </span>
                  {'languages' in data
                    ? Object.values(data.languages).join(', ')
                    : '-'}
                </p>
              </div>
            </div>
            <div className="mt-20">
              <h2 className="font-semibold text-xl">Border Countries: </h2>
              <div className="mt-4 flex gap-3 items-center justify-start flex-wrap">
                {'borders' in data ? (
                  Object.values(data.borders).map((code) => {
                    if (all) {
                      const targetCountry = all.filter(
                        (a) => a.cca3 === code
                      )[0];

                      return (
                        <Link
                          to={`/${code}`}
                          key={code}
                          className="py-2 px-6 text-center text-sm shadow-lg dark:bg-dark-element hover:font-semibold"
                        >
                          {targetCountry.name.common}
                        </Link>
                      );
                    }
                  })
                ) : (
                  <p className="py-2 px-6 text-center text-sm shadow-lg dark:bg-dark-element">
                    Borders not found
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Detail;
