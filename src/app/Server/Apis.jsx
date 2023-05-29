

import { httpRequest } from './Axios';

export const fLogin = async (obj) => {
    try{
        var resp = {};

        let apiObj ={
            method: 'POST',
            url: `api/login/`,
            data: obj
        }
        resp = await httpRequest(apiObj);
        return resp;
    }
    catch (err) {
        return err;
    }
};

export const getEmployeeListAPI = async () => {
    try{
        var resp = {};

        let apiObj ={
            method: 'GET',
            url: `api/employees/`,
        }
        resp = await httpRequest(apiObj);
        return resp;
    }
    catch (err) {
        return err;
    }
};

export const createEmployeeAPI = async (obj) => {
    try{
        var resp = {};

        let apiObj ={
            method: 'POST',
            url: `api/employees/`,
            data: obj
        }
        resp = await httpRequest(apiObj);
        return resp;
    }
    catch (err) {
        return err;
    }
};

export const updateEmployeeAPI = async (obj,id) => {
    try{
        var resp = {};

        let apiObj ={
            method: 'PUT',
            url: `api/employees/${id}/`,
            data: obj
        }
        resp = await httpRequest(apiObj);
        return resp;
    }
    catch (err) {
        return err;
    }
};

export const deleteEmployeeAPI = async (id) => {
    try{
        var resp = {};

        let apiObj ={
            method: 'DELETE',
            url: `api/employees/${id}/`,
        }
        resp = await httpRequest(apiObj);
        return resp;
    }
    catch (err) {
        return err;
    }
};

export const getEmployeeRosterListAPI = async (empId) => {
    try{
        var resp = {};

        let apiObj ={
            method: 'GET',
            url: `api/employee-roster/employee/${empId}/`,
        }
        resp = await httpRequest(apiObj);
        return resp;
    }
    catch (err) {
        return err;
    }
};

export const createEmployeeRosterAPI = async (obj) => {
    try{
        var resp = {};

        let apiObj ={
            method: 'POST',
            url: `api/employee-roster/`,
            data: obj
        }
        resp = await httpRequest(apiObj);
        return resp;
    }
    catch (err) {
        return err;
    }
};

export const deleteEmployeeRosterAPI = async (id) => {
    try{
        var resp = {};

        let apiObj ={
            method: 'DELETE',
            url: `api/employee-roster/${id}/`,
        }
        resp = await httpRequest(apiObj);
        return resp;
    }
    catch (err) {
        return err;
    }
};


export const updateEmployeeRosterAPI = async (obj,id) => {
    try{
        var resp = {};

        let apiObj ={
            method: 'PUT',
            url: `api/employee-roster/${id}/`,
            data: obj
        }
        resp = await httpRequest(apiObj);
        return resp;
    }
    catch (err) {
        return err;
    }
};

export const getTicketListAPI = async () => {
    try{
        var resp = {};

        let apiObj ={
            method: 'GET',
            url: `api/tickets/`,
        }
        resp = await httpRequest(apiObj);
        return resp;
    }
    catch (err) {
        return err;
    }
};

export const createTicketAPI = async (obj) => {
    try{
        var resp = {};

        let apiObj ={
            method: 'POST',
            url: `api/tickets/`,
            data: obj
        }
        resp = await httpRequest(apiObj);
        return resp;
    }
    catch (err) {
        return err;
    }
};

export const updateTicketAPI = async (obj,id) => {
    try{
        var resp = {};

        let apiObj ={
            method: 'PUT',
            url: `api/tickets/${id}/`,
            data: obj
        }
        resp = await httpRequest(apiObj);
        return resp;
    }
    catch (err) {
        return err;
    }
};

export const deleteTicketAPI = async (id) => {
    try{
        var resp = {};

        let apiObj ={
            method: 'DELETE',
            url: `api/tickets/${id}/`,
        }
        resp = await httpRequest(apiObj);
        return resp;
    }
    catch (err) {
        return err;
    }
};

export const getEmployeeTicketStatsAPI = async (obj) => {
    try{
        var resp = {};

        let apiObj ={
            method: 'GET',
            url: `api/employee-ticket-stats/`,
            params:obj
        }
        resp = await httpRequest(apiObj);
        return resp;
    }
    catch (err) {
        return err;
    }
};

export const getTicketStatsAPI = async (obj) => {
    try{
        var resp = {};

        let apiObj ={
            method: 'GET',
            url: `api/tickets-stats/date-range/`,
            params:obj
        }
        resp = await httpRequest(apiObj);
        return resp;
    }
    catch (err) {
        return err;
    }
};

export const getEmployeeTicketsAPI = async (id) => {
    try{
        var resp = {};

        let apiObj ={
            method: 'GET',
            url: `api/employees/${id}/tickets/`,
        }
        resp = await httpRequest(apiObj);
        return resp;
    }
    catch (err) {
        return err;
    }
};

export const updateTicketasResolvedAPI = async (obj,id) => {
    try{
        var resp = {};

        let apiObj ={
            method: 'PUT',
            url: `api/tickets/${id}/resolve/`,
            data: obj
        }
        resp = await httpRequest(apiObj);
        return resp;
    }
    catch (err) {
        return err;
    }
};