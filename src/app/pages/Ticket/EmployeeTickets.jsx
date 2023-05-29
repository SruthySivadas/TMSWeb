import { Box, Grid, IconButton, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import {  CmpTypographyField } from '../../component/ToolBox/ToolBox'
import {  Fullscreen } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid'
import { GridToolbar } from '@mui/x-data-grid'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { getEmployeeTickets } from './action'
import TicketDetailCard from './Components/TicketDetailCard'
import './TicketSummary.css'

export default function EmployeeTickets() {

    const [sTicketList,setTicketList] = useState([]);
    const rdxEmployee = useSelector((state) => state.DashboardSlice.value);
    const [sShowModal,setShowModal] = useState(false);
    const [sSelectedTicket,setSelectedTicket] = useState(0);
   

    const loadEmployees = async()=>{
        const result = await getEmployeeTickets(rdxEmployee.empId);
        if(result.status ===200){
            console.log(result);
            setTicketList(result.data);
        }
    };
   
    useEffect(()=>{
        loadEmployees();
    },[]);

    const onShowCellClick = (params) => {
        setSelectedTicket(params.row.ticket_number);
        setShowModal(true);
    };

    const columns = [
        {
            field: 'ticket_number',
            headerName: 'Ticket No.',
            flex: 1,
            align:'center',
            headerAlign: 'center',
            headerClassName:'mui-report-grid-header',
        },
        {
            field: 'title',
            headerName: 'Title',
            flex: 2,
            headerAlign: 'center',
            headerClassName:'mui-report-grid-header',
        },
        {
            field: 'description',
            headerName: 'Description',
            flex: 3,
            headerAlign: 'center',
            headerClassName:'mui-report-grid-header',
        },
        {
            field: 'created_at',
            headerName: 'Created at',
            flex: 2,
            align:'center',
            headerAlign: 'center',
            headerClassName:'mui-report-grid-header',
            valueFormatter: ({ value }) => moment(value).format("DD/MM/YYYY hh:mm a")

        },                  
        {
            field: 'resolved',
            headerName: 'Resolved',
            align:'center',
            headerAlign: 'center',
            flex: 1,
            headerClassName:'mui-report-grid-header',
            valueFormatter: ({ value }) => value?"Yes":"No"

        },  
        {
            field: 'resolved_datetime',
            headerName: 'Resolved at',
            flex: 2,
            align:'center',
            headerAlign: 'center',
            headerClassName:'mui-report-grid-header',
            valueFormatter: ({ value }) => value?moment(value).format("DD/MM/YYYY hh:mm a"):''

        },    
        // {
        //     field: 'done',
        //     headerName: 'Edit',
        //     flex: 1,
        //     align: 'center',
        //     headerAlign: 'center',
        //     hide: false,
        //     headerClassName:'mui-report-grid-header',
        //     renderCell: (params) => {
        //         if(params.row.resolved){
        //             return(<div></div>)
        //         }else{
        //             return (
        //                 <IconButton size='small'  onClick={() => { onShowCellClick(params); }}>
        //                     <AssignmentTurnedIn style={{ color:'green' }}/>
        //                 </IconButton>
        //                 );
        //             }
        //     }
        // },
        {
            field: 'show',
            headerName: '',
            flex: 1,
            align: 'center',
            headerAlign: 'center',
            hide: false,
            headerClassName:'mui-report-grid-header',
            renderCell: (params) => {
    
                return (
                    <IconButton size='small' color='primary' onClick={() => { onShowCellClick(params); }}>
                        <Fullscreen />
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
            <Grid container spacing={1} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} className=' mb-3'>
                <Grid item xs={12}>
                    <Grid container spacing={1} columns={{ xs: 12, sm: 12, md: 12}} >
                        <Grid item xs={12} sm={4} md={4}>
                            <Grid
                                container
                                spacing={1}
                                columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                                sx={{ alignItems: 'center' }}>
                                <Grid item xs={6} sm={6} md={6}>
                                    <CmpTypographyField xcomponent={'span'} xText={'Employee id'} />
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
                                    <CmpTypographyField xcomponent={'span'} xText={'Name'} />
                                </Grid>
                                <Grid item xs={1} sm={1} md={1}>
                                    <CmpTypographyField xcomponent={'span'} xText={':'} />
                                </Grid>
                                <Grid item xs={7} sm={7} md={7}>
                                    <CmpTypographyField xcomponent={'span'} xText={rdxEmployee.empName} />  
                                </Grid>
                            </Grid>
                        </Grid>      
                           
                    </Grid>
                </Grid>   
            </Grid>
            
            <Box width='100%'
                        className="mt-2"
                        sx={{
                            height: '75vh',
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
                    rows={sTicketList}
                    getRowId={(row) => row.ticket_number}
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
                <Box className="model-employee-ticket-detail">
                    <TicketDetailCard
                        TicketNumber={sSelectedTicket}
                        TicketList={sTicketList}
                        setTicketList={setTicketList} 
                        onClose={setShowModal}
                    />
                </Box>
            </Modal>
        </div>
  )
}
