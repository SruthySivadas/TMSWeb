import React from 'react';
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import { CircularProgress } from '@mui/material';
import './ReuseableComponent.css';
const GCItemSearch = ({
  fCloseItemSearch,
  title,
  xOnCellKeyDown,
  xOnRowClick,
  xItemRows,
  xItemColumn,
  xonChangeInputModal,
  fonChangeInputModalSelect,
  xItemSearchModalObj,
  xfClear,
  xGetItemSearchValue,
  sLoadingItemSearch,
  xEnterObj,
  vMediaQuery = false,
  vRdxDBLocationGroup
}) => {
  const vItemNameAnydata = useRef(null);
  const vItemNameCode = useRef(null);
  const vItemNameName = useRef(null);
  const vItemNameBarcode = useRef(null);
  const vItemNameGroupCode = useRef(null);
  const vItemNameRefNo = useRef(null);
  const vItemNameNameFL = useRef(null);
  const vItemNameCostPrice = useRef(null);
  const vItemNameRSP = useRef(null);

  // const fCheckKey = (event) => {
  //     // console.log("event.keyCode", event.keyCode);
  //     if (event.keyCode === 40) {
  //         var selectedLength = document.getElementsByClassName("Mui-selected").length;
  //         if (selectedLength === 0) {
  //             let tabel = document.getElementById('table-main-grid-3');
  //             tabel?.getElementsByClassName('MuiDataGrid-row')[0].firstChild.click();
  //             // tabel?.getElementsByClassName('MuiDataGrid-row')[0].firstChild.dblclick();
  //             tabel?.getElementsByClassName('MuiDataGrid-row')[0].firstChild.focus();
  //         }
  //     }
  // }
  useEffect(() => {
    // ondblclick
    document.getElementById('GCItemSearch').focus();
    // setTimeout(() => {
    //     document.onkeydown = fCheckKey;
    // }, 1000);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} className="gnr-item-search ">
      <Grid container spacing={0} className="grnt-item-search-title">
        <Grid item xs={12} className="item-search d-flex justify-content-between">
          <span> {title} Search</span>
          <CloseIcon className="grnt-item-search-close-icon" onClick={fCloseItemSearch} />
        </Grid>
      </Grid>
      <Grid container spacing={1} columns={{ xs: 4, sm: 4, md: 12, lg: 12 }} className="pt-3 px-2">
        <Grid item xs={1} className="gnr-item-search-label">
          Any Data
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <input
            className="form-control form-control-sm"
            id="GCItemSearch"
            type="text"
            ref={vItemNameAnydata}
            name="vAnydata"
            value={xItemSearchModalObj.vAnydata}
            onChange={xonChangeInputModal}
            onKeyUp={(e) => {
              xGetItemSearchValue(e);
            }}
          />
        </Grid>
        <Grid item xs={1} className="gnr-item-search-label">
          Code
        </Grid>
        <Grid item xs={3}>
          <input
            className="form-control form-control-sm"
            type="text"
            ref={vItemNameCode}
            name="vItemNameCode"
            value={xItemSearchModalObj.vItemNameCode}
            onChange={xonChangeInputModal}
            onKeyUp={(e) => {
              xGetItemSearchValue(e);
            }}
          />
        </Grid>
        <Grid item xs={1} className="gnr-item-search-label">
          Name
        </Grid>
        <Grid item xs={3}>
          <input
            className="form-control form-control-sm"
            type="text"
            name="vItemNameName"
            value={xItemSearchModalObj.vItemNameName}
            ref={vItemNameName}
            onChange={xonChangeInputModal}
            onKeyUp={(e) => {
              xGetItemSearchValue(e);
            }}
          />
        </Grid>
        <Grid item xs={1} className="gnr-item-search-label">
          Barcode
        </Grid>
        <Grid item xs={3}>
          <input
            className="form-control form-control-sm"
            type="text"
            name="vItemNameBarcode"
            value={xItemSearchModalObj.vItemNameBarcode}
            ref={vItemNameBarcode}
            onChange={xonChangeInputModal}
            onKeyUp={(e) => {
              xGetItemSearchValue(e);
            }}
          />
        </Grid>
        <Grid item xs={1} className="gnr-item-search-label">
          Group
        </Grid>
        <Grid item xs={3}>
          <div className="grn-header-checkbox">
            <select
              className="form-select form-select-sm"
              name="vItemNameGroupCode"
              ref={vItemNameGroupCode}
              onChange={fonChangeInputModalSelect}
              value={xItemSearchModalObj.vItemNameGroupCode}
              onKeyUp={(e) => {
                xGetItemSearchValue(e);
              }}>
              <option className="py-2" value="ALL">
                {' '}
                All{' '}
              </option>
              {vRdxDBLocationGroup?.map((option, index) => (
                <option className="py-2" value={option.Cd} key={'Group1' + index}>
                  {option.Name1 === '' ? 'All' : option.Name1}{' '}
                </option>
              ))}
            </select>
          </div>
        </Grid>
        <Grid item xs={1} className="gnr-item-search-label">
          Ref.No
        </Grid>
        <Grid item xs={3}>
          <input
            className="form-control form-control-sm"
            type="text"
            name="vItemNameRefNo"
            ref={vItemNameRefNo}
            onChange={xonChangeInputModal}
            value={xItemSearchModalObj.vItemNameRefNo}
            onKeyUp={(e) => {
              xGetItemSearchValue(e);
            }}
          />
        </Grid>
        <Grid item xs={1} className="gnr-item-search-label">
          Name F.L
        </Grid>
        <Grid item xs={3}>
          <input
            className="form-control form-control-sm"
            type="text"
            name="vItemNameNameFL"
            ref={vItemNameNameFL}
            onChange={xonChangeInputModal}
            value={xItemSearchModalObj.vItemNameNameFL}
            onKeyUp={(e) => {
              xGetItemSearchValue(e);
            }}
          />
        </Grid>
        {/* <Grid item xs={1} className="gnr-item-search-label">
                    Cost Price
                </Grid>
                <Grid item xs={1} >
                    <input className="form-control form-control-sm" type="text" name="vItemNameCostPrice" ref={vItemNameCostPrice} onChange={xonChangeInputModal} value={xItemSearchModalObj.vItemNameCostPrice} onKeyUp={(e) => { xGetItemSearchValue(e) }} />
                </Grid>
                <Grid item xs={1} className="gnr-item-search-label">
                    R.S.P
                </Grid>
                <Grid item xs={1} >
                    <input className="form-control form-control-sm" type="text" name="vItemNameRSP" ref={vItemNameRSP} onChange={xonChangeInputModal} value={xItemSearchModalObj.vItemNameRSP} onKeyUp={(e) => { xGetItemSearchValue(e) }} />
                </Grid> */}
        <Grid item xs={1} className="gnr-item-search-label"></Grid>
        <Grid item xs={3}>
          <div
            style={{ display: 'flex', justifyContent: 'space-around' }}
            className="search-btn-sm">
            {vMediaQuery ? (
              <button
                className="btn btn-primary  search-btn"
                onClick={(e) => {
                  xGetItemSearchValue(xEnterObj);
                }}>
                Load
              </button>
            ) : (
              ''
            )}

            <button className="btn btn-primary  search-btn" onClick={xfClear}>
              Clear
            </button>
            <button className="btn btn-primary  search-btn" onClick={fCloseItemSearch}>
              Cancel
            </button>
          </div>
        </Grid>
      </Grid>
      {sLoadingItemSearch ? (
        <div className="text-center">
          {' '}
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={2} className="search-item mt-2">
          <Grid item xs={12} className=" height-table-scroll " component="div">
            <div
              style={{ height: '30vh', width: '100%' }}
              id="table-main-grid-3"
              className="search-grid-table ">
              <Box style={{ height: 300, width: '100%' }} className="bintransfer-out-grid px-2">
                <DataGrid
                  rowHeight={30}
                  headerHeight={40}
                  getRowClassName={(params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? 'mui-even-row' : 'mui-odd-row'
                  }
                  sx={{
                    border: 1,
                    borderColor: 'primary.light'
                  }}
                  rows={xItemRows}
                  columns={xItemColumn}
                  getRowId={(row) => row.id}
                  hideFooter
                  // onColumnHeaderEnter={}
                  onCellKeyDown={xOnCellKeyDown}
                  onRowClick={xOnRowClick}
                />
              </Box>
            </div>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default GCItemSearch;
