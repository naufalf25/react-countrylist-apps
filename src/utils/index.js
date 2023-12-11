const getAllCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const data = response.json();
  return data;
};

const getCountryByName = async (keyword) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${keyword}`
  );

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const data = response.json();
  return data;
};

const getCountryByRegion = async (region) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/region/${region}`
  );

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const data = response.json();
  return data;
};

const getCountryNameByCode = async (code) => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  console.log(await response.json());

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const data = response.json()[0];
  console.log(data);
  const countryName = data.name.common;
  return countryName;
};

export {
  getAllCountries,
  getCountryByName,
  getCountryByRegion,
  getCountryNameByCode,
};
