import Request from '../Request.js';

const baseUrl = 'https://swapi.dev/api';

export const getPeople = async function (pageNumber = 1) {
  const peoples = await Request(`${baseUrl}/people/?page=${pageNumber}`);
  return peoples;
};

export const getInfos = async function (url) {
  const infos = await Request(url);
  return infos;
};

export const searchPeople = async function (query) {
  const people = await Request(`${baseUrl}/people/?search=${query}`);
  return people;
};
