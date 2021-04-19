import axios from 'axios';

const Request = async function (url) {
  try {
    const instance = axios.create();
    instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    const { data } = await instance.get(url);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default Request;
