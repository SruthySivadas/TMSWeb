import { getEmployeeTicketStatsAPI, getTicketStatsAPI } from "../../Server/Apis";

const getEmployeeTicketStats = async (xObj) => {
    try {
      const result = await getEmployeeTicketStatsAPI(xObj);
      return result;
    } catch (error) {
    }
};
const getTicketStats = async (xObj) => {
    try {
      const result = await getTicketStatsAPI(xObj);
      return result;
    } catch (error) {
    }
};


export {
    getEmployeeTicketStats,
    getTicketStats
};
