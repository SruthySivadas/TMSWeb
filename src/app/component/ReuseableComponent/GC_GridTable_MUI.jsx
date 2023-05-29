import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import useMediaQuery from '@mui/material/useMediaQuery';
const statusData = ['Accept', 'Reject', 'Partial', ' '];
const typeData = ['DC', 'PR', '--'];

export default function FullFeaturedCrudGrid({ rowsData, setUpdateRows, vendorList }) {
  const vMediaQuery = useMediaQuery('(max-width:450px)');
  const vendorListUpdate = vendorList.map((itm) => ({ value: itm.AcCd, label: itm.Name2 }));
  vendorListUpdate.push({ value: '', label: '' });

  const setType = (params) => {
    let row = updateValues({ ...params.row, B_Type: params.value });
    const updatedRows = rowsData.map((itm) => (itm.B_SrNo === row.B_SrNo ? row : itm));
    setUpdateRows(updatedRows);

    return { ...params.row, B_Type: params.value };
  };

  const setVendorList = (params) => {
    let row = updateValues({ ...params.row, B_Vendor: params.value });
    const updatedRows = rowsData.map((itm) => (itm.B_SrNo === row.B_SrNo ? row : itm));
    setUpdateRows(updatedRows);

    return { ...params.row, B_Vendor: params.value };
  };

  const setStatus = (params) => {
    if (params.value === 'Accept') {
      params.row.B_Acc_Qty = params.row.B_Qty;
      params.row.B_Status = params.value;
    } else if (params.value === 'Reject') {
      params.row.B_Type = '--';
    }

    let row = updateValues({ ...params.row, B_Status: params.value });
    const updatedRows = rowsData.map((itm) => (itm.B_SrNo === row.B_SrNo ? row : itm));
    setUpdateRows(updatedRows);
    return row;
  };

  const setAccptQty = (params) => {
    let row = updateValues({ ...params.row, B_Acc_Qty: params.value });
    const updatedRows = rowsData.map((itm) => (itm.B_SrNo === row.B_SrNo ? row : itm));
    setUpdateRows(updatedRows);

    return { ...params.row, B_Acc_Qty: params.value };
  };

  const setVendorCost = (params) => {
    let row = updateValues({ ...params.row, B_VendorCost: params.value });
    const updatedRows = rowsData.map((itm) => (itm.B_SrNo === row.B_SrNo ? row : itm));
    setUpdateRows(updatedRows);

    return { ...params.row, B_VendorCost: params.value };
  };

  const updateValues = (obj) => {
    const calculatedObj = calculate(
      obj.B_Acc_Qty,
      obj.B_BaseQty,
      obj.B_Qty,
      obj.B_DC_LPCost,
      obj.B_VendorCost,
      obj.B_Status,
      obj.B_Type
    );
    return { ...obj, ...calculatedObj };
  };

  const calculate = (
    B_Acc_Qty = 0,
    B_BaseQty = 0,
    B_Qty = 0,
    B_DC_LPCost = 0,
    B_VendorCost = 0,
    B_Status,
    B_Type
  ) => {
    let B_Acc_Qty1;
    if (B_Status === 'Accept') {
      B_Acc_Qty1 = B_Qty;
    } else if (B_Status === 'Reject') {
      B_Acc_Qty1 = 0;
      B_Type = '--';
    } else {
      B_Acc_Qty1 = B_Acc_Qty;
    }
    const B_Acc_BaseQty = B_Acc_Qty1 * (B_BaseQty / B_Qty);
    const B_DC_NetAmt = B_Acc_Qty1 * B_DC_LPCost;
    const PR_Amount = B_Acc_Qty1 * B_VendorCost;

    return { B_Acc_Qty: B_Acc_Qty1, B_Acc_BaseQty, B_DC_NetAmt, PR_Amount, B_Type };
  };

  const columns = [
    {
      field: 'B_SrNo',
      headerName: 'Sr.No',
      width: 50,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'B_ItmCd',
      headerName: 'Item code',
      width: 80
    },
    {
      field: 'B_ItemCd',
      headerName: 'Item Name',
      width: 230
    },
    {
      field: 'B_Qty',
      headerName: 'Qty',
      width: 50,
      align: 'right',
      headerAlign: 'right'
    },
    {
      field: 'B_Unit',
      headerName: 'Unit',
      width: 50
    },
    {
      field: 'B_BaseQty',
      headerName: 'BaseQty',
      width: 80,
      align: 'right',
      headerAlign: 'right'
    },
    {
      field: 'B_NetAmt',
      headerName: 'Req. Net Amount',
      width: 100,
      align: 'right',
      headerAlign: 'right'
    },
    {
      field: 'B_Status',
      headerName: 'Status',
      width: 60,
      editable: true,
      type: 'singleSelect',
      valueOptions: statusData,
      valueSetter: setStatus
    },
    {
      field: 'B_Type',
      headerName: 'Type',
      width: 60,
      editable: true,
      type: 'singleSelect',
      valueOptions: typeData,
      valueSetter: setType
    },

    {
      field: 'B_Acc_Qty',
      HeaderName: 'Accept Qty',
      width: 80,
      align: 'right',
      headerAlign: 'right',
      type: 'number',
      editable: true,
      valueSetter: setAccptQty
    },
    {
      field: 'B_Acc_BaseQty',
      headerName: 'Accept Base Qty',
      width: 100,
      align: 'right',
      headerAlign: 'right'
    },

    {
      field: 'B_DC_LPCost',
      headerName: 'DC. LP Rate',
      width: 90,
      align: 'right',
      headerAlign: 'right'
    },

    {
      field: 'B_DC_NetAmt',
      headerName: 'Net Amount',
      width: 70,
      align: 'right',
      headerAlign: 'right'
    },

    {
      field: 'B_VendorCost',
      headerName: 'vendor Cost',
      width: 70,
      align: 'right',
      headerAlign: 'right',
      type: 'number',
      editable: true,
      valueSetter: setVendorCost
    },

    {
      field: 'PR_Amount',
      headerName: 'PR_Amount',
      width: 70,
      align: 'right',
      headerAlign: 'right'
    },

    {
      field: 'B_Vendor',
      // field:'Vendorname',
      headerName: 'Vendor',
      width: 130,
      editable: true,
      type: 'singleSelect',
      valueOptions: vendorListUpdate,
      valueFormatter: ({ id: rowId, value, field, api }) => {
        const option = vendorListUpdate.find((itm) => itm.value === value);
        return option.label;
      },
      // valueOptions: vendorList.map((itm)=> ({ value: itm.Name2, label: itm.AcCd })),
      // renderCell: (params) => (
      //   <div style={{backgroundColor:'red'}}>
      //       <p>
      //         renderitem
      //       </p>
      //   </div>
      // ),
      valueSetter: setVendorList
    }
  ];
  return (
    <Box
      sx={{
        height: vMediaQuery ? '50vh' : '50vh',
        width: '100%',
        '& .actions': {
          color: 'text.secondary'
        },
        '& .textPrimary': {
          color: 'text.primary'
        }
      }}>
      <DataGrid
        rows={rowsData}
        columns={columns}
        rowHeight={30}
        headerHeight={40}
        sx={{
          border: 2,
          borderColor: 'primary.light'
        }}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'mui-even-row' : 'mui-odd-row'
        }
      />
    </Box>
  );
}
