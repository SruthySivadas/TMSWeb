import React from "react";
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
// const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'firstName', width: 130 },
//     { field: 'lastName', headerName: 'lastName', width: 130 },
//     { field: 'abc', headerName: 'abc', width: 130 },

// ];

// const rows = [
//     { id: 1, lastName: 'abc', firstName: 'abc', age: 35 },
//     { id: 2, lastName: 'abc', firstName: 'abc', age: 42 },
//     { id: 3, lastName: 'abc', firstName: 'abc', age: 45 },
//     { id: 4, lastName: 'abc', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'abc', firstName: 'abc', age: 11 },
//     { id: 6, lastName: 'abc', firstName: "abc", age: 150 },
//     { id: 7, lastName: 'abc', firstName: 'abc', age: 44 },
//     { id: 8, lastName: 'abc', firstName: 'abc', age: 36 },
//     { id: 9, lastName: 'abc', firstName: 'abc', age: 65 },
// ];

const GCEmployee = (
    {
        xCloseSearchModal,
        xTitle,
        xAnyData,
        xModelObj,
        xSearchEnter,
        xonChangeInputModal,
        xGridArr,
        xGridDataColumnsSearch,
        xRowClick,
        xRowCellClick,
        xClearSimpleSearch,
        xEnterObj,
        xMediaQuery = false,
        
    }
) => {

    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={4} className="mb-3">
                <Grid item xs={12} className="d-flex justify-content-between mx-2">
                    <div className="gnr-item-search-label">{xTitle}</div>
                    <CloseIcon className="grnt-item-search-close-icon" onClick={xCloseSearchModal} />
                </Grid>
            </Grid>

            <Grid container spacing={1} columns={{ xs: 12, sm: 6, md: 12 }} className="align-items-center">
                <Grid item xs={12} sm={12} md={5} className="wms-search-label">
                    <Grid container spacing={2} columns={{ xs: 12, sm: 6, md: 12 }}>
                        <Grid item xs={3} sm={2} md={3} className="wms-search-label">
                            Any Data
                        </Grid>
                        <Grid item xs={9} sm={4} md={9}>
                            <div className="input-group input-group-sm">
                                <input className="form-control form-control-sm"
                                    id="GCEmployeeAnyData"
                                    type="text"
                                    name="AnyData"
                                    value={xModelObj.AnyData}
                                    onChange={xonChangeInputModal}
                                    onKeyUp={xSearchEnter}
                                />
                                {xMediaQuery ? <span className="input-group-text wms-salse-icon px-2" onClick={(e) => xSearchEnter(xEnterObj)}><ArrowForwardOutlinedIcon /></span> : ""}
                            </div>
                        </Grid>
                        <Grid item xs={3} sm={2} md={3} className="wms-search-label">
                            First Name
                        </Grid>
                        <Grid item xs={9} sm={4} md={9} className="input-group input-group-sm">
                            <input className="form-control form-control-sm"
                                type="text"
                                name="FirstName"
                                value={xModelObj.FirstName}
                                onChange={xonChangeInputModal}
                                onKeyUp={xSearchEnter}
                            />
                            {xMediaQuery ? <span className="input-group-text wms-salse-icon px-2" onClick={(e) => xSearchEnter(xEnterObj)}><ArrowForwardOutlinedIcon /></span> : ""}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={5} className="wms-search-label">
                    <Grid container spacing={2} columns={{ xs: 12, sm: 6, md: 12 }}>
                        <Grid item xs={3} sm={2} md={3} className="wms-search-label">
                            Middle Name
                        </Grid>
                        <Grid item xs={9} sm={4} md={9} className="input-group input-group-sm">
                            <input className="form-control form-control-sm"
                                type="text"
                                name="MiddleName"
                                value={xModelObj.MiddleName}
                                onChange={xonChangeInputModal}
                                onKeyUp={xSearchEnter}
                            />
                            {xMediaQuery ? <span className="input-group-text wms-salse-icon px-2" onClick={(e) => xSearchEnter(xEnterObj)}><ArrowForwardOutlinedIcon /></span> : ""}
                        </Grid>
                        <Grid item xs={3} sm={2} md={3} className="wms-search-label">
                            Last Name
                        </Grid>
                        <Grid item xs={9} sm={4} md={9} className="input-group input-group-sm">
                            <input className="form-control form-control-sm"
                                type="text"
                                name="LastName"
                                value={xModelObj.LastName}
                                onChange={xonChangeInputModal}
                                onKeyUp={xSearchEnter}
                            />
                            {xMediaQuery ? <span className="input-group-text wms-salse-icon px-2" onClick={(e) => xSearchEnter(xEnterObj)}><ArrowForwardOutlinedIcon /></span> : ""}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={2} className="wms-search-label">
                    <Grid container spacing={2} columns={{ xs: 12, sm: 6, md: 12 }} >
                        <Grid item xs={6} sm={12} md={12}>
                            <button className="btn btn-primary  search-btn" onClick={xClearSimpleSearch}>Clear</button>
                        </Grid>
                        <Grid item xs={6} sm={12} md={12}>
                            <button className="btn btn-primary  search-btn" onClick={(e) => { xCloseSearchModal(e); xClearSimpleSearch(e); }} >Cancel</button>
                        </Grid>
                    </Grid>
                </Grid>




            </Grid>
            <Grid container spacing={0} className="search-item ">
                <Grid item xs={12} className=" height-table-scroll" component="div">
                    <div style={{ height: xMediaQuery ? "30vh" : "40vh", width: '100%' }} id="table-main-grid-6" className='search-grid-table '>
                        <Box style={{ height: xMediaQuery ? "30vh" : "50vh", width: '100%' }} className="bintransfer-out-grid" >
                            <DataGrid
                                rows={xGridArr}
                                columns={xGridDataColumnsSearch}
                                hideFooter
                                onCellKeyDown={xRowCellClick}
                                onRowClick={xRowClick}
                            />
                        </Box>
                    </div>
                </Grid>

            </Grid>
        </Box>
    );
};

export default GCEmployee;