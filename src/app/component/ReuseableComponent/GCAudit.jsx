import React from "react";
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import { CircularProgress } from '@mui/material';


const GCAudit = ({
     fCloseAuditModal, 
     sAuditSelectArr,
     GridDataAuditColumns,
     GridDataAuditRows,
     xAuditId,
     fonChangeAuditSelect,
     xTitle
     }) => {

    return (
        <Box sx={{ flexGrow: 1 }} className="gnr-item-search">
            <Grid container spacing={2} className="grnt-item-search-title">
                <Grid item xs={12} className="item-search" style={{ textAlign: "center" }}>
                   {xTitle} <CloseIcon className="grnt-item-search-close-icon" onClick={fCloseAuditModal} />
                </Grid>
            </Grid>
            <Grid container spacing={1} columns={{ xs: 4, sm: 4, md: 12 }} className="mt-2" >
                <Grid item xs={1} className="gnr-item-search-label ">
                    Label
                </Grid>
                <Grid item xs={3} >
                    <div className="grn-header-checkbox">
                        {/* <select className="form-select form-select-sm" name="vItemNameGroupCode" ref={vItemNameGroupCode} onChange={fonChangeInputModalSelect} value={xItemSearchModalObj.vItemNameGroupCode} onKeyUp={(e) => { xGetItemSearchValue(e) }}>
                            <option className='py-2' value="ALL"  > All  </option>
                            {sAuditSelectArr?.map((option, index) => (
                                <option className='py-2' value={option.id} key={"Group1" + index} >{option.name} </option>
                            ))}
                        </select> */}

                        <select className="form-select form-select-sm" name={xAuditId} onChange={fonChangeAuditSelect}>
                            {sAuditSelectArr?.map((option, index) => (
                                <option className='py-2' value={option.id} key={"auditfield" + index} >{option.name} </option>
                            ))}
                        </select>
                    </div>
                </Grid>
            </Grid>
            {
                false ? <div className="text-center"> <CircularProgress /></div> : <Grid container spacing={1} className="search-item ">
                    <Grid item xs={12} className=" height-table-scroll" component="div">
                        <div style={{ height: "50vh", width: '100%' }} id="table-main-grid-3" className='search-grid-table mt-2'>
                            <Box style={{ height: "100%", width: '100%' }} className="bintransfer-out-grid" >
                                <DataGrid
                                    rows={GridDataAuditRows}
                                    columns={GridDataAuditColumns}
                                    getRowId={(row) => row.id}
                                    hideFooter
                                // // onColumnHeaderEnter={}
                                // onCellKeyDown={xOnCellKeyDown}
                                // onRowClick={xOnRowClick}
                                />
                            </Box>
                        </div>
                    </Grid>

                </Grid>
            }

        </Box>
    );
};

export default GCAudit;
