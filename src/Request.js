import axios from 'axios';

const Request = async function (url) {
  try {
    const { data } = await axios(url);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default Request;
