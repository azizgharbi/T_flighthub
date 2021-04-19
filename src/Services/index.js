import Request from '../Request.js';

const baseUrl = 'https://swapi.dev/api';

export const getPeople = async function () {
  const peoples = await Request(`${baseUrl}/people`);
  return peoples;
};

export const getInfos = async function (url) {
  const infos = await Request(url);
  return infos;
};

// https://swapi.dev/api/people/?search=r2

export const searchPeople = async function (query) {
  const people = await Request(`${baseUrl}/people/?search=${query}`);
  return people;
};
