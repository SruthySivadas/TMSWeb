import React from "react";
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'firstName', width: 130 },
    { field: 'lastName', headerName: 'lastName', width: 130 },
    { field: 'abc', headerName: 'abc', width: 130 },

];

const rows = [
    { id: 1, lastName: 'abc', firstName: 'abc', age: 35 },
    { id: 2, lastName: 'abc', firstName: 'abc', age: 42 },
    { id: 3, lastName: 'abc', firstName: 'abc', age: 45 },
    { id: 4, lastName: 'abc', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'abc', firstName: 'abc', age: 11 },
    { id: 6, lastName: 'abc', firstName: "abc", age: 150 },
    { id: 7, lastName: 'abc', firstName: 'abc', age: 44 },
    { id: 8, lastName: 'abc', firstName: 'abc', age: 36 },
    { id: 9, lastName: 'abc', firstName: 'abc', age: 65 },
];

const GCVanMaster = ({
    fCloseSalesGroupModal,
    xVanMasterModalObj,
    xDocStatus,
    xVocNo,
    xVocType,
    xVocTypeName,
    xSaleGroupTypeArr,
    xSalesGroup,
    xGetVanMasterSearchEnter,
    xfOnVanMasterSrNoModal,
    xfOnVanMasterTypModal,
    xfOnVanMasterEmployeeModal,
    xfOnVanMasterActiveModal,
    xMediaQuery,
    xEnterObj,
    xfNewSaleGroup,
    xfSaveSaleGroup,
    xfDeleteSaleGroup,
    xrows,
    xcolumns,
    xRowClick,
    xRowCellClick,
    xErrorMsg
}) => {
    return (
        <div className="container-fluid">
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={xMediaQuery ? 0 : 2} >
                    <Grid item xs={12} className="d-flex justify-content-between">
                        <div className="gnr-item-search-label">SalesGroup</div>
                        <CloseIcon className="grnt-item-search-close-icon" onClick={fCloseSalesGroupModal} />
                    </Grid>
                    <Grid item xs={12} className="d-flex justify-content-start">
                        {/* <div className="gnr-item-search-label pe-2" onClick={xfNewSaleGroup}><i className="fas fa-plus " ></i> New |</div> */}

                        <button type="button" className={xDocStatus == "POST" ? "btn  btn-sm btn-secondary me-2 search-btn" : 'btn btn-primary btn-sm me-2 search-btn'} disabled={xDocStatus == "POST"} onClick={xfNewSaleGroup} ><i className="fas fa-plus " ></i> New</button>
                        <button type="button" className={xDocStatus == "POST" ? "btn  btn-sm btn-secondary me-2 search-btn" : 'btn btn-primary btn-sm me-2 search-btn'} disabled={xDocStatus == "POST"} onClick={xfSaveSaleGroup} ><i className="fas fa-save"></i> Save </button>
                        <button type="button" className={xDocStatus == "POST" ? "btn  btn-sm btn-secondary me-2 search-btn" : 'btn btn-primary btn-sm me-2 search-btn'} disabled={xDocStatus == "POST"} onClick={xfDeleteSaleGroup} ><i className="fas fa-trash-alt"></i> Delete </button>

                    </Grid>
                </Grid>
                <Grid container spacing={1} columns={{ xs: 6, sm: 6, md: 12 }} className={xMediaQuery ? "" : "pt-3"}>
                    <Grid item xs={2} sm={2} md={2} className="gnr-item-search-label">
                        <input className="form-control form-control-sm" type="text" readOnly value={xVocNo} />
                    </Grid>
                    <Grid item xs={1} sm={2} md={2} className="gnr-item-search-label">
                        <input className="form-control form-control-sm" type="text" readOnly value={xVocType} />
                    </Grid>
                    <Grid item xs={3} sm={2} md={2} className="gnr-item-search-label" >
                        <input className="form-control form-control-sm" type="text" readOnly value={xVocTypeName} />
                    </Grid>
                </Grid>
                <Grid container spacing={1} columns={{ xs: 4, sm: 4, md: 12 }} className={xMediaQuery ? "pt-1" : "pt-3"}>
                    <Grid item xs={4} sm={4} md={6} className="gnr-item-search-label">
                        <Grid container spacing={1} columns={{ xs: 12, sm: 12, md: 12 }} className={xMediaQuery ? "" : "pt-3"}>
                            <Grid item xs={2} sm={2} md={2} className="gnr-item-search-label">
                                Group
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} className="gnr-item-search-label">
                                <input className="form-control form-control-sm" type="text" name="GroupCode" value={xVanMasterModalObj.Group} readOnly />
                            </Grid>
                            <Grid item xs={8} sm={8} md={8} className="gnr-item-search-label">
                                <select className="form-select form-select-sm" name="Group" value={xVanMasterModalObj.Group} disabled>
                                    {xSalesGroup.length > 0 ? <> {xSalesGroup?.map((obj, index) => (
                                        <option className='py-2' value={obj[Object.keys(obj)[0]]} key={"GCVanMaster" + index} >{obj[Object.keys(obj)[1]]}</option>
                                    ))} </> : <option value=""></option>}
                                </select>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} className="gnr-item-search-label">
                                Sr.No
                            </Grid>
                            <Grid item xs={10} sm={10} md={10} className="gnr-item-search-label">
                                <input className="form-control form-control-sm" type="text" name="SrNo" value={xVanMasterModalObj.SrNo} onChange={xfOnVanMasterSrNoModal} onKeyUp={(e) => { xGetVanMasterSearchEnter(e) }} readOnly />
                                <span className={xErrorMsg.SrNo == "" ? "hide-error" : "show-error"}>{xErrorMsg.SrNo}</span>
                           
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} className="gnr-item-search-label">
                                Type
                            </Grid>
                            <Grid item xs={10} sm={10} md={10} className="gnr-item-search-label">
                                <select className="form-select form-select-sm" name="Type" value={xVanMasterModalObj.Type} onChange={xfOnVanMasterTypModal} >
                                    {xSaleGroupTypeArr.length > 0 ? <> {xSaleGroupTypeArr?.map((obj, index) => (
                                        <option className='py-2' value={obj[Object.keys(obj)[0]]} key={"GCVanMaster" + index} >{obj[Object.keys(obj)[1]]}</option>
                                    ))} </> : <option value=""></option>}
                                </select>
                                <span className={xErrorMsg.Type == "" ? "hide-error" : "show-error"}>{xErrorMsg.Type}</span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} sm={2} md={6} className="gnr-item-search-label">
                        <Grid container spacing={1} columns={{ xs: 12, sm: 12, md: 12 }} className={xMediaQuery ? "" : "pt-3"}>

                            <Grid item xs={2} sm={2} md={2} className="gnr-item-search-label">
                                Employee
                            </Grid>
                            <Grid item xs={10} sm={10} md={10} className="gnr-item-search-label" >
                                <div className="input-group input-group-sm ">
                                    <input type="text" className="form-control w-code" name="EmployeeID" value={xVanMasterModalObj.EmployeeID} readOnly />
                                    <input type="text" className="form-control w-name" name="EmployeeName" value={xVanMasterModalObj.EmployeeName} onChange={xfOnVanMasterEmployeeModal} onKeyUp={(e) => { xGetVanMasterSearchEnter(e) }} />
                                    <span className="input-group-text" id="inputGroup-sizing-sm"><MoreHorizIcon onClick={(e) => { xGetVanMasterSearchEnter(e) }} /></span>
                                </div>
                                <span className={xErrorMsg.EmployeeID == "" ? "hide-error" : "show-error"}>{xErrorMsg.EmployeeID}</span>
                            </Grid>
                            {/* <Grid item xs={2} sm={2} md={2} className="gnr-item-search-label">
                                Branch
                            </Grid>
                            <Grid item xs={4} sm={10} md={10} className="gnr-item-search-label">
                                <select className="form-select form-select-sm" name="Branch" value={xVanMasterModalObj.Branch} disabled>
                                    <option >Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Grid> */}
                            <Grid item xs={2} sm={10} md={2} className="gnr-item-search-label">
                            </Grid>
                            <Grid item xs={4} sm={10} md={10} className="gnr-item-search-label">
                                <input className="form-check-input p-2 mx-1" type="checkbox" name="Active" checked={xVanMasterModalObj.Active == 'Y'} onChange={xfOnVanMasterActiveModal} /> Active
                                <span className={xErrorMsg.Active == "" ? "hide-error" : "show-error"}>{xErrorMsg.Active}</span>
                            </Grid>

                        </Grid>
                    </Grid>
                    {/* <Grid item xs={12} sm={2} md={3} className="gnr-item-search-label">
                        <Grid container spacing={1} columns={{ xs: 12, sm: 12, md: 12 }} className={xMediaQuery ? "" : "pt-3"}>
                            {xMediaQuery ? <Grid item xs={6} sm={4} md={4} className="gnr-item-search-label align-self-center" >
                                {xMediaQuery ? <button className="btn btn-primary  search-btn" onClick={(e) => { xGetVanMasterSearchEnter(xEnterObj) }}>Load</button> : ""}
                            </Grid> : ""}
                            <Grid item xs={6} sm={10} md={10} className="gnr-item-search-label">
                                <div className={xMediaQuery ? "border w-50 h-100" : "border w-50 h-100 "}>
                                    <img src={xVanMasterModalObj.ImageUrl} alt="SalesImageUrl" width={"100%"} height={"100%"} />
                                </div>
                            </Grid>
                        </Grid>
                        <div className={xMediaQuery ? "border w-50 h-100" : "border w-25 "}>
                            <img src={xVanMasterModalObj.ImageUrl} alt="SalesImageUrl" width={"100%"} height={"100%"} />;
                        </div>
                    </Grid> */}
                </Grid>
                <Grid container spacing={1} columns={{ xs: 4, sm: 4, md: 12 }} className="pt-0">                   
                    <Grid item xs={12} className=" height-table-scroll" component="div">
                        <div style={{ height: xMediaQuery ? "30vh" : "30vh", width: '100%' }} id="table-main-grid-5" className='search-grid-table '>
                            <Box style={{ height: xMediaQuery ? "40vh" : "40vh", width: '100%' }} className="mt-2" >
                                <DataGrid
                                    rows={xrows}
                                    columns={xcolumns}
                                    onCellKeyDown={xRowCellClick}
                                    onRowClick={xRowClick}
                                    hideFooter
                                />
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default GCVanMaster;
