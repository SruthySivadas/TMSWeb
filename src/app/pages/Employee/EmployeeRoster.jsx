import { Box, Grid, IconButton, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { CmpButton, CmpTypographyField, CmpTypographyFieldColor } from '../../component/ToolBox/ToolBox'
import { Add, AddCircle, Delete, Edit } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid'
import { GridToolbar } from '@mui/x-data-grid'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { deleteEmployeeRoster, getEmployeeRosterList } from './action'
import RosterDetailModal from './Components/RosterDetailModal'
import { confirmAlert } from 'react-confirm-alert'
import { fAlertToast } from '../../Utility/Utilitys'

const sRosterList0 = [
    
    {
        "id": 4,
        "shift_start_time": "09:00:00",
        "shift_end_time": "17:00:00",
        "date": "2023-05-26",
        "availability": true,
        "employee": 4
    }
    
]
export default function EmployeeRoster() {

    const [sRosterList,setRosterList] = useState([]);
    const rdxEmployee = useSelector((state) => state.EmployeeSlice.value);
    const [sShowModal,setShowModal] = useState(false);
   
    const [sDetailObj,setDetailObj] = useState({
        shift_start_time:new Date(),
        shift_end_time:new Date(),
        date:new Date(),
        availability:true,
        id:0
    })

    const loadEmployees = async()=>{
        const result = await getEmployeeRosterList(rdxEmployee.empId);
        if(result.status ==200){
            setRosterList(result.data);
        }
    };
   
    useEffect(()=>{
        loadEmployees();
    },[]);

    const onClickNew = () => {
        setDetailObj({
            id:0,
            shift_start_time:new Date(),
            shift_end_time:new Date(),
            date:new Date(),
            availability:true
        });
        setShowModal(true);
    };
    const onEditCellClick = (params) => {
       //setEmpObj({empId:params.row.employee_id,empName:params.row.name});

        let shiftStartTime =moment(params.row.shift_start_time, 'HH:mm:ss').toDate();
        let shiftEndTime =moment(params.row.shift_end_time, 'HH:mm:ss').toDate();
        setDetailObj({
            id:params.row.id,
            shift_start_time:shiftStartTime,
            shift_end_time:shiftEndTime,
            date:params.row.date,
            availability:params.row.availability
        });
        setShowModal(true);
    };

    const onDeleteCellClick = async(params)=>{
        console.log("delete");
        confirmAlert({
            title: 'Delete',
            message: 'Are you sure to delete permanently?',
            buttons: [
              {
                className: 'alertBtn',
                label: 'Yes',
                onClick: async () => {
                    const result = await deleteEmployeeRoster(params.row.id);
                    if(result.status ==204){
                        fAlertToast("SUCCESS","Deleted Successfully!");
                        loadEmployees();
                    }
                }
              },
              {
                className: 'alertBtn',
                label: 'No',
                onClick: () => { }
              }
            ]
          });
        
    };

    const refreshGrid = ()=>{
        loadEmployees();
        setShowModal(false);
    };
    const columns = [
        {
            field: 'id',
            headerName: 'Id',
            flex: 2,
            align:'center',
            headerAlign: 'center',
            headerClassName:'mui-report-grid-header',
            hide:true
        },
        {
            field: 'date',
            headerName: 'Date',
            flex: 3,
            align:'center',
            headerAlign: 'center',
            headerClassName:'mui-report-grid-header',
            valueFormatter: ({ value }) => moment(value).format("DD/MM/YY")

        },             
        {
            field: 'shift_start_time',
            headerName: 'Shift Start At',
            flex: 3,
            align:'center',
            headerAlign: 'center',
            headerClassName:'mui-report-grid-header',
            // valueFormatter: ({ value }) => moment(value).format("HH:MM:SS a")

        },
        {
            field: 'shift_end_time',
            headerName: 'Shift End At',
            flex: 3,
            align:'center',
            headerAlign: 'center',
            headerClassName:'mui-report-grid-header',
            // valueFormatter: ({ value }) => moment(value).format("HH:MM:SS a")
        },
        {
            field: 'availability',
            headerName: 'Availability',
            align:'center',
            headerAlign: 'center',
            flex: 3,
            headerClassName:'mui-report-grid-header',
            valueFormatter: ({ value }) => value?"Available":"Not Available"

        },  
        {
            field: 'edit',
            headerName: 'Edit',
            flex: 1,
            align: 'center',
            headerAlign: 'center',
            hide: false,
            headerClassName:'mui-report-grid-header',
            renderCell: (params) => {
    
                return (
                    <IconButton size='small' color='primary' onClick={() => { onEditCellClick(params); }}>
                        <Edit />
                    </IconButton>
                );
            }
        },
        {
            field: 'delete',
            headerName: 'Delete',
            flex: 1,
            align: 'center',
            headerAlign: 'center',
            hide: false,
            headerClassName:'mui-report-grid-header',
            renderCell: (params) => {
    
                return (
                    <IconButton size='small' color='primary' onClick={() => { onDeleteCellClick(params); }}>
                        <Delete />
                    </IconButton>
                );
            }
        },
    ];
    return (
        <div  className="container">
            <div>
                <ToastContainer />
            </div>
            <Grid container spacing={1} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} className='mt-3'>
                <Grid item xs={12}>
                    <Grid container spacing={1} columns={{ xs: 12, sm: 12, md: 12}} >
                        <Grid item xs={12} sm={4} md={4}>
                            <Grid
                                container
                                spacing={1}
                                columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                                sx={{ alignItems: 'center' }}>
                                <Grid item xs={6} sm={6} md={6}>
                                    <CmpTypographyFieldColor xcomponent={'span'} xText={'Employee id'} />
                                </Grid>
                            
                                <Grid item xs={1} sm={1} md={1}>
                                    <CmpTypographyField xcomponent={'span'} xText={':'} />
                                </Grid>
                                <Grid item xs={5} sm={5} md={5}>
                                    <CmpTypographyField xcomponent={'span'} xText={rdxEmployee.empId} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Grid
                                container
                                spacing={1}
                                columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                                sx={{ alignItems: 'center' }}>
                                <Grid item xs={4} sm={4} md={3}>
                                    <CmpTypographyFieldColor xcomponent={'span'} xText={'Name'} />
                                </Grid>
                                <Grid item xs={1} sm={1} md={1}>
                                    <CmpTypographyField xcomponent={'span'} xText={':'} />
                                </Grid>
                                <Grid item xs={7} sm={7} md={7}>
                                    <CmpTypographyField xcomponent={'span'} xText={rdxEmployee.empName} />  
                                </Grid>
                            </Grid>
                        </Grid>      
                        <Grid item xs={12} sm={2} md={2} className='text-end'>
                            {/* <IconButton size='large' color='primary' onClick={() => onClickNew()}>
                                <AddCircle fontSize="22"/>
                            </IconButton> */}
                            <CmpButton
                                    xvariant={'contained'}
                                    xsize={'small'}
                                    xStartIcon ={<Add/>}
                                    xonClick={() => onClickNew()}
                                    xLabel={'New'}
                                />
                        </Grid>      
                    </Grid>
                </Grid>   
            </Grid>
            {/* <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={1}
                    columns={{ xs: 12, sm: 12}}
                    className='d-flex  text-end'
                >
                
                    <Grid item xs={12}>
                        <CmpButton
                            xvariant={'contained'}
                            xsize={'small'}
                            xStartIcon ={<Add/>}
                        // xonClick={() => onClickNew()}
                            xLabel={'New Employee'}
                        />
                    </Grid>
                </Grid>
            </Box> */}
            <Box width='100%'
                        className="mt-2"
                        sx={{
                            height: '70vh',
                            width: '100%',
                            '& .actions': {
                                color: 'text.secondary'
                            },
                            '& .textPrimary': {
                                color: 'text.primary'
                            },
                            '& .Mui-error': {
                                backgroundColor: `rgb(126,10,15, 0.1})`,
                                color: '#ff4343',
                            },
                        }}>

                <DataGrid
                    rows={sRosterList}
                    getRowId={(row) => row.id}
                    columns={columns}
                    rowHeight={50}
                    headerHeight={60}
                    sx={{
                        border: 0,
                        borderColor: 'primary.light',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        '& .MuiDataGrid-row:hover': {
                            color: 'primary.main',
                            cursor: 'pointer',
                            fontWeight: 500,
                            backgroundColor: '#ebeef0',
                            // boxShadow: 'rgba(0, 0, 0, 0.35) 10px 15px 15px'
                        },

                    }}
                    components={{
                        Toolbar: GridToolbar,
                    }}
                            
                    getRowClassName={(params) =>
                        'mui-report-grid-row'
                    }
                // onRowClick={(params)=>{onClickGrid(params)}}
                />
            </Box>
            <Modal
                open={sShowModal}
                onClose={() => setShowModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box className="model-sales-invoice-GCVanMaster-Modal">
                    <RosterDetailModal 
                        xId={sDetailObj.id}
                        xShift_start_time={sDetailObj.shift_start_time} 
                        xShift_end_time={sDetailObj.shift_end_time}
                        xDate={sDetailObj.date}
                        xAvailability={sDetailObj.availability}
                        onClose={setShowModal}
                        refreshGrid={refreshGrid}/>
                </Box>
            </Modal>
        </div>
  )
}
