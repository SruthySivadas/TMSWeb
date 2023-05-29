import React from "react";
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from "moment";


const GCSearch = ({
    xStatusArr,
    xLocationArr,
    xSupplierArr,
    xSalesGroup,
    xSearchModalObj,
    xGetSearchValue,
    fonChangeStatusModal,
    fonChangeVocNoModal,
    fOnChangeDateModel,
    fonChangePartyModal,
    fonChangeLocModal,
    fonChangeRefNoModal,
    fonChangeSalesGroupModal,
    fCloseSearchModal,
    fClearSearchModal,
    GridSearchHeadRowData,
    GridDataColumnsSearch,
    xOnCellKeyDownSearch,
    xOnRowClickSearch,
    vMediaQuery = false,
    xEnterObj
}) => {
    const fCheckKey = (event) => {
        // console.log("event.keyCode", event.keyCode);
        if (event.keyCode === 40) {
            var selectedLength = document.getElementsByClassName("Mui-selected").length;
            if (selectedLength === 0) {
                let tabel = document.getElementById('table-main-grid-4');
                tabel?.getElementsByClassName('MuiDataGrid-row')[0].firstChild.click();
                tabel?.getElementsByClassName('MuiDataGrid-row')[0].firstChild.focus();
            }
        }
    }
    useEffect(() => {
        setTimeout(() => {
            document.onkeydown = fCheckKey;
        }, 1000);
    }, []);

    return (
        <div className="container-fluid">
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={1} columns={{ xs: 8, sm: 8, md: 12 }} >
                    <Grid item xs={12} className="d-flex justify-content-between">
                        <div className="gnr-item-search-label">SalesGroup</div>
                        <CloseIcon className="grnt-item-search-close-icon" onClick={fCloseSearchModal} />
                    </Grid>
                    <Grid item xs={8} className="gnr-item-search-label">
                        <Grid container spacing={1} columns={{ xs: 6, sm: 6, md: 12 }} >
                            <Grid item xs={6} className="gnr-item-search-label">
                                <Grid container spacing={1} columns={{ xs: 12, sm: 12, md: 12 }} >
                                    <Grid item xs={2} className="gnr-item-search-label">
                                        Status
                                    </Grid>
                                    <Grid item xs={10} className="gnr-item-search-label" >
                                        <select className="form-select form-select-sm" name="Status" value={xSearchModalObj.Status} onKeyUp={(e) => { xGetSearchValue(e) }} onChange={(e) => { fonChangeStatusModal(e, xStatusArr) }} >
                                            {xStatusArr.length > 0 ? <> {xStatusArr?.map((value, index) => (
                                                <option className='py-2' value={value} key={"WmsStatus" + index} >{value}</option>
                                            ))} </> : <option value=""></option>}
                                        </select>
                                    </Grid>
                                    <Grid item xs={2} className="gnr-item-search-label">
                                        Vocher No
                                    </Grid>
                                    <Grid item xs={10} className="gnr-item-search-label">
                                        <input className="form-control form-control-sm" type="text" name="VocNo" value={xSearchModalObj.VocNo} onKeyUp={(e) => { xGetSearchValue(e) }} onChange={(e) => { fonChangeVocNoModal(e) }} />
                                    </Grid>
                                    <Grid item xs={2} className="gnr-item-search-label">
                                        Post Date
                                    </Grid>
                                    <Grid item xs={10} className="gnr-item-search-label">
                                        <input className="form-control form-control-sm" type="date" name="PostDt" value={moment(xSearchModalObj.PostDt).format('YYYY-MM-DD')} onKeyUp={(e) => { xGetSearchValue(e) }} onChange={(e) => { fOnChangeDateModel(e) }} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} className="gnr-item-search-label">
                                <Grid container spacing={1} columns={{ xs: 12, sm: 12, md: 12 }} >
                                    <Grid item xs={2} className="gnr-item-search-label">
                                        Location
                                    </Grid>
                                    <Grid item xs={10} className="gnr-item-search-label">
                                        <select className="form-select form-select-sm" name="Loc" value={xSearchModalObj.Loc} onKeyUp={(e) => { xGetSearchValue(e) }} onChange={(e) => { fonChangeLocModal(e, xLocationArr) }}>
                                            {xLocationArr?.length > 0 ? <> {xLocationArr?.map((option, index) => (
                                                <option className='py-2' value={option.UID} key={"Location" + index} >{option.Name1}</option>
                                            ))} </> : <option value=""></option>}
                                        </select>
                                    </Grid>
                                    <Grid item xs={2} className="gnr-item-search-label">
                                        Ref.No
                                    </Grid>
                                    <Grid item xs={10} className="gnr-item-search-label">
                                        <input className="form-control form-control-sm" type="text" name="RefNo" value={xSearchModalObj.RefNo} onKeyUp={(e) => { xGetSearchValue(e) }} onChange={(e) => { fonChangeRefNoModal(e) }} />
                                    </Grid>
                                    <Grid item xs={2} className="gnr-item-search-label">
                                        Sales Group
                                    </Grid>
                                    <Grid item xs={10} className="gnr-item-search-label">
                                        <select className="form-select form-select-sm" name="SalesGroup" value={xSearchModalObj.SalesGroup} onKeyUp={(e) => { xGetSearchValue(e) }} onChange={(e) => { fonChangeSalesGroupModal(e, xSalesGroup) }}>
                                            {xSalesGroup.length > 0 ? <> {xSalesGroup?.map((obj, index) => (
                                                <option className='py-2' value={obj.UId} key={"WmsStatus" + index} >{obj.Name1}</option>
                                            ))} </> : <option value=""></option>}
                                        </select>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={1} sm={1} md={1} className="gnr-item-search-label">
                                Party
                            </Grid>
                            <Grid item xs={5} sm={5} md={11} className="gnr-item-search-label">
                                <select className="form-select form-select-sm" value={xSearchModalObj.Party} onKeyUp={(e) => { xGetSearchValue(e) }} onChange={(e) => { fonChangePartyModal(e, xSupplierArr) }} >
                                    {xSupplierArr.length > 0 ? <> {xSupplierArr?.map((obj, index) => (
                                        <option className='py-2' value={Object.values(obj)[0]} key={"WmsStatus" + index} >{Object.values(obj)[1]}</option>
                                    ))} </> : <option value=""></option>}
                                </select>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={8} sm={4} md={4} className="gnr-item-search-label align-self-center">
                        <Grid container spacing={3} columns={{ xs: 36, sm: 36, md: 12 }} >
                            {vMediaQuery ? <Grid item xs={12} className="gnr-item-search-label mt-2">
                                <button className="btn btn-primary  search-btn" onClick={(e) => { xGetSearchValue(xEnterObj) }} >Enter</button>
                            </Grid> : ""}
                            <Grid item xs={12} className="gnr-item-search-label mt-2">
                                <button className="btn btn-primary  search-btn" onClick={fClearSearchModal} >Clear</button>
                            </Grid>
                            <Grid item xs={12} className="gnr-item-search-label mt-2">
                                <button className="btn btn-primary  search-btn" onClick={(e) => { fCloseSearchModal(e); fClearSearchModal(e); }} >Cancel</button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={1} columns={{ xs: 4, sm: 4, md: 12 }} >
                    <Grid item xs={12} className="gnr-item-search-label mt-2">
                        <div style={{ height: vMediaQuery ? 200 : 300, width: '100%' }} id="table-main-grid-4">
                            <DataGrid
                                rows={GridSearchHeadRowData}
                                columns={GridDataColumnsSearch}
                                onCellKeyDown={xOnCellKeyDownSearch}
                                onRowClick={xOnRowClickSearch}
                                // pageSize={5}
                                // rowsPerPageOptions={[5]}
                                hideFooter
                            />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default GCSearch;
