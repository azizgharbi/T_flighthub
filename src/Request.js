import axios from 'axios';

export default async function (url) {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.error(err);
  }
};
