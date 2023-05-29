import { getEmployeeListAPI,createEmployeeAPI,deleteEmployeeAPI,updateEmployeeAPI,getEmployeeRosterListAPI, createEmployeeRosterAPI, deleteEmployeeRosterAPI, updateEmployeeRosterAPI } from '../../Server/Apis';

const createEmployee = async (xObj) => {
    try {
      const result = await createEmployeeAPI(xObj);
      return result;
    } catch (error) {
    }
};

const getEmployeeList = async (id) => {
    try {
      const result = await getEmployeeListAPI();
      return result;
    } catch (error) {
    }
};

const deleteEmployee = async (id) => {
    try {
      const result = await deleteEmployeeAPI(id);
      return result;
    } catch (error) {
    }
};

const updateEmployee = async (xObj,id) => {
    try {
      const result = await updateEmployeeAPI(xObj,id);
      return result;
    } catch (error) {
    }
};

const getEmployeeRosterList = async (empId) => {
    try {
      const result = await getEmployeeRosterListAPI(empId);
      return result;
    } catch (error) {
    }
};

const createEmployeeRoster = async (xObj) => {
    try {
      const result = await createEmployeeRosterAPI(xObj);
      return result;
    } catch (error) {
    }
};

const deleteEmployeeRoster = async (id) => {
    try {
      const result = await deleteEmployeeRosterAPI(id);
      return result;
    } catch (error) {
    }
};

const updateEmployeeRoster = async (xObj,id) => {
    try {
      const result = await updateEmployeeRosterAPI(xObj,id);
      return result;
    } catch (error) {
    }
};
export {
    createEmployee,
    getEmployeeList,
    updateEmployee,
    deleteEmployee,
    getEmployeeRosterList,
    createEmployeeRoster,
    deleteEmployeeRoster,
    updateEmployeeRoster
};
