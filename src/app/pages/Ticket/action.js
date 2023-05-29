import { getTicketListAPI,createTicketAPI,deleteTicketAPI,updateTicketAPI, getEmployeeTicketsAPI, updateTicketasResolvedAPI } from '../../Server/Apis';

const createTicket = async (xObj) => {
    try {
      const result = await createTicketAPI(xObj);
      return result;
    } catch (error) {
    }
};

const getTicketList = async (id) => {
    try {
      const result = await getTicketListAPI();
      return result;
    } catch (error) {
    }
};

const deleteTicket = async (id) => {
    try {
      const result = await deleteTicketAPI(id);
      return result;
    } catch (error) {
    }
};

const updateTicket = async (xObj,id) => {
    try {
      const result = await updateTicketAPI(xObj,id);
      return result;
    } catch (error) {
    }
};


const getEmployeeTickets = async (id) => {
  try {
    const result = await getEmployeeTicketsAPI(id);
    return result;
  } catch (error) {
  }
};

const updateTicketasResolved = async (xObj,id) => {
  try {
    const result = await updateTicketasResolvedAPI(xObj,id);
    return result;
  } catch (error) {
  }
};

export {
    createTicket,
    getTicketList,
    updateTicket,
    deleteTicket,
    getEmployeeTickets,
    updateTicketasResolved
};
