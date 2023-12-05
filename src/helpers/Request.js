import axios from 'axios';

export const getFilesFormated = async () => {
  const url =
    process.env.REACT_APP_API_BASE || `http://localhost:3500/files/data`;

  try {
    const response = await axios.get(url, {
      headers: {
        Accept: 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    const errorN = new Error(`status_code:${error.response.status}`);
    errorN.status = error.response.status;
    throw errorN;
  }
};
