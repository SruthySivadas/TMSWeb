import axios from 'axios';
import { fAlertToast } from '../Utility/Utilitys';

const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]')?.value;
console.log(csrfToken);
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  responseType: 'json',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-CSRFToken':csrfToken
  }
});

//Old Function

// export const httpRequest = async (axiosData) => {
//   try {
//     const res = await axiosInstance.request(axiosData);
//     console.log(res);
//     return res;
//   } catch (error) {
//     throw error;
//   }
// };

// New Function

// export const httpRequest = async (axiosData) => {
//   try {
//     const res = await axiosInstance.request(axiosData);
//     if (res?.data.Type !== 'Success') {
//       fAlertToast('FAILED', res.data.message);
//     }
//     return res;
//   } catch (error) {
//     if (error.response && error.response.data && error.response.data.Type === 'Failed') {
//       // handled error at server
//       fAlertToast('FAILED', error.response.data.Status);
//     } else {
//       fAlertToast('FAILED', 'something went wrong');
//     }
//     throw error;
//   }
// };

// updated function

// export const httpRequest = async (axiosData) => {
//   try {
//     const res = await axiosInstance.request(axiosData);
//     if (res.status == 200) {
//       return res;
//     }
//   } catch (error) {
//     fAlertToast(
//       'FAILED',
//       error.message +
//         ', ' +
//         (error.response.data.message == undefined
//           ? error.response.data.Status
//           : error.response.data.message)
//     );
//     throw error;
//   }
// };


export const httpRequest = async (axiosData) => {
  try {
    const res = await axiosInstance.request(axiosData);
    return res;

  } catch (error) {
    fAlertToast(
      'FAILED',
      error.message +
        ', ' +
        (error.response.data.message == undefined
          ? error.response.data.Status
          : error.response.data.message)
    );
    throw error;
  }
};