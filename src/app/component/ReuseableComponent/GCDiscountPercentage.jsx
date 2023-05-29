import React from "react";
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const GCDiscountPercentage = ({
    fCloseDiscountPercentageModal,
    xGrossAmount,
    xLDiscAmount,
    xTDiscAmount,
    xTDiscPer,
    fonChangeInputDiscountModal,
    fOnChangeTDiscAmtModal,
    GetApplyTDiscount,
    xErrorMsgDiscountModal,
    vRdxWmsInvoiceHead
}) => {
    // const vRdxWmsInvoiceHead = useSelector((state) => state.SliceWmsInvoice.value.HeadObject);
    useEffect(() => {
        document.getElementById('GCTransDiscount').focus();          
    }, []);
    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={1} columns={{ xs: 4, sm: 4, md: 12 }}>
                <Grid item xs={12} className="gnr-item-search-label">
                    <Grid container spacing={1} columns={{ xs: 4, sm: 4, md: 12 }} >
                        <Grid item xs={12} className="gnr-item-search-label fs-4">
                            Discount Percentage
                        </Grid>
                        <Grid item xs={4} className="gnr-item-search-label">
                            Gross Amount
                        </Grid>
                        <Grid item xs={8} className="gnr-item-search-label">
                            <input className="form-control form-control-sm" type="text" name="vA_GrossAmt" value={xGrossAmount} readOnly/>
                        </Grid>
                        <Grid item xs={4} className="gnr-item-search-label">
                            Line Discount Amount
                        </Grid>
                        <Grid item xs={8} className="gnr-item-search-label">
                            <input className="form-control form-control-sm" type="text" name="A_LDiscAmt" value={xLDiscAmount} readOnly />
                        </Grid>
                        <Grid item xs={4} className="gnr-item-search-label">
                            Trans Discount %
                        </Grid>
                        <Grid item xs={8} className="gnr-item-search-label">
                            <input className="form-control form-control-sm" type="text" id="GCTransDiscount" name="xTDiscPer" value={xTDiscPer} onChange={(e)=>{fonChangeInputDiscountModal(e)}} />
                            <span className={xErrorMsgDiscountModal.A_DiscPerc == "" ?  "hide-error" : "show-error" }>{xErrorMsgDiscountModal.A_DiscPerc}</span>
                        </Grid>
                        <Grid item xs={4} className="gnr-item-search-label">
                            Trans Discount Amount
                        </Grid>
                        <Grid item xs={8} className="gnr-item-search-label">
                            <input className="form-control form-control-sm" type="text" name="xTDiscPer" value={xTDiscAmount} onChange={(e)=>{fOnChangeTDiscAmtModal(e)}}/>
                            <span className={xErrorMsgDiscountModal.A_TDiscAmt == "" ?  "hide-error" : "show-error" }>{xErrorMsgDiscountModal.A_TDiscAmt}</span>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={1} columns={{ xs: 4, sm: 4, md: 12 }} className="text-center pt-2">
                <Grid item xs={12} className="gnr-item-search-label">
                    <Grid container spacing={1} columns={{ xs: 4, sm: 4, md: 12 }} >
                        <Grid item xs={6} className="gnr-item-search-label">
                            <button className={vRdxWmsInvoiceHead.A_DocStat !== "ENTER" ?"btn btn-secondary search-btn" :"btn btn-primary  search-btn"} onClick={GetApplyTDiscount} disabled={ vRdxWmsInvoiceHead.A_DocStat !== "ENTER"} >Ok</button>
                        </Grid>
                        <Grid item xs={6} className="gnr-item-search-label">
                            <button className="btn btn-primary  search-btn" onClick={fCloseDiscountPercentageModal}>Cancel</button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    );
};

export default GCDiscountPercentage;