import { toast } from 'react-toastify';
const handleError = (errMsg, needToUpdateInDb) => {
  if (needToUpdateInDb) {
    // TODO: update server about error
  }
};

//ALERT
const fAlertToast = (xIsSucccess, xMessage) => {
  let vToasterStyle = {
    position: 'top-right',
    autoClose: xIsSucccess === 'SUCCESS' ? 800 : false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'light',
    delay: 0
  };

  if (xIsSucccess === 'SUCCESS') {
    return toast.success(xMessage, vToasterStyle);
  } else if (xIsSucccess === 'FAILED') {
    return toast.error(xMessage, vToasterStyle);
  } else if (xIsSucccess === 'WARNING') {
    return toast.warning(xMessage, vToasterStyle);
  } else if (xIsSucccess === 'INFO') {
    return toast.info(xMessage, vToasterStyle);
  }
};

export { handleError, fAlertToast };
