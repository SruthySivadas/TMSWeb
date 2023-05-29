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

const GCSimpleSearch = (
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
        xMediaQuery = false
    }
) => {

    // const fCheckKey = (event) => {
    //     if (event.keyCode === 40) {
    //         var selectedLength = document.getElementsByClassName("Mui-selected").length;
    //         if (selectedLength === 0) {
    //             let tabel = document.getElementById('table-main-grid-5');
    //             tabel?.getElementsByClassName('MuiDataGrid-row')[0].firstChild.click();
    //             tabel?.getElementsByClassName('MuiDataGrid-row')[0].firstChild.focus();
    //         }
    //     }
    // }
    useEffect(() => {
        document.getElementById('GCSimpleSearch').focus()
        // setTimeout(() => {
        //     document.onkeydown = fCheckKey;
        // }, 1000);
    }, []);
    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={4} className="mb-3">
                <Grid item xs={12} className="d-flex justify-content-between mx-2">
                    <div className="gnr-item-search-label">{xTitle}</div>
                    <CloseIcon className="grnt-item-search-close-icon" onClick={xCloseSearchModal} />
                </Grid>
            </Grid>

            <Grid container spacing={2} columns={{ xs: 12, sm: 6, md: 12 }}>
                <Grid item xs={3} sm={2} md={2} className="wms-search-label">
                    Any Data
                </Grid>
                <Grid item xs={9} sm={4} md={4}>
                    <div className="input-group input-group-sm">
                        <input className="form-control form-control-sm"
                            id="GCSimpleSearch"
                            type="text"
                            name="AnyData"
                            value={xModelObj.AnyData}
                            onChange={xonChangeInputModal}
                            onKeyUp={xSearchEnter}
                        />
                        {xMediaQuery ? <span className="input-group-text wms-salse-icon px-2" onClick={(e)=>xSearchEnter(xEnterObj)}><ArrowForwardOutlinedIcon /></span> : ""}
                    </div>
                </Grid>
                <Grid item xs={3} sm={2} md={2} className="wms-search-label">
                    Code
                </Grid>
                <Grid item xs={9} sm={4} md={4}className="input-group input-group-sm">
                    <input className="form-control form-control-sm"
                        type="text"
                        name="Code"
                        value={xModelObj.Code}
                        onChange={xonChangeInputModal}
                        onKeyUp={xSearchEnter}
                    />
                      {xMediaQuery ? <span className="input-group-text wms-salse-icon px-2" onClick={(e)=>xSearchEnter(xEnterObj)}><ArrowForwardOutlinedIcon /></span> : ""}
                </Grid>
                <Grid item xs={3} sm={2} md={2} className="wms-search-label">
                    Name
                </Grid>
                <Grid item xs={9} sm={4} md={4} className="input-group input-group-sm">
                    <input className="form-control form-control-sm"
                        type="text"
                        name="Name"
                        value={xModelObj.Name}
                        onChange={xonChangeInputModal}
                        onKeyUp={xSearchEnter}
                    />
                      {xMediaQuery ? <span className="input-group-text wms-salse-icon px-2" onClick={(e)=>xSearchEnter(xEnterObj)}><ArrowForwardOutlinedIcon /></span> : ""}
                </Grid>
                <Grid item xs={2} sm={2} md={2}>

                </Grid>
                <Grid item xs={18} sm={4} md={4}>
                    <div style={{ display: "flex", justifyContent: "space-around" }} className="search-btn-sm">
                        <button className="btn btn-primary  search-btn" onClick={xClearSimpleSearch}>Clear</button>
                        <button className="btn btn-primary  search-btn" onClick={(e) => { xCloseSearchModal(e); xClearSimpleSearch(e); }} >Cancel</button>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={2} className="search-item mt-2">
                <Grid item xs={12} className=" height-table-scroll" component="div">
                    <div style={{ height: "30vh", width: '100%' }} id="table-main-grid-5" className='search-grid-table '>
                        <Box style={{ height: 300, width: '100%' }} className="bintransfer-out-grid" >
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

export default GCSimpleSearch;