import { fLogin } from '../../Server/Apis';
import { fExecuteAPI } from '../../Server/Apis1';
import { fAlertToast } from '../../Utility/Utilitys';

const getLogin = async (xObj) => {
  try {
    const vLogin = await fLogin(xObj);
    return vLogin;
  } catch (error) {
  }
};

export {
  getLogin
};
