import { Box, Grid, IconButton } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { CmpButton,CmpDatePickerField } from '../../component/ToolBox/ToolBox';
import { Assignment, AssignmentLate, AssignmentTurnedIn,  OpenInNew, PendingActions, Sync } from '@mui/icons-material';
import TicketCard from '../Ticket/Components/TicketCard';
import TitleCards from './Components/TitleCards';
import './Dashboard.css'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { getEmployeeTicketStats, getTicketStats } from './action';
import moment from 'moment';
import Widgets from './Components/Widgets';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setDashboardEmp } from './DashboardSlice';

export default function DashBoard() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [sFilterObj,setFilterObj] = useState({
        dateFrom:new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay() - 30),
        dateTo:new Date()
    });

    const [sEmpList,setEmpList] = useState([]);
    const [sTicketStat,setTicketStat] = useState({
        totalTicket:0,
        resolved:0,
        pending:0,
        unassigned:0
    });
   
    const fLoadDashboardData = useCallback(async()=>{
        fLoadDetails(sFilterObj.dateFrom,sFilterObj.dateTo);
    },[]);

    const fLoadDetails= async(fromDt,toDt)=>{
        let obj={
            start_date : moment(fromDt).format("YYYY-MM-DD"),
            end_date : moment(toDt).format("YYYY-MM-DD")
        }
        console.log(sFilterObj,obj);
        const result1 = await getTicketStats(obj);
        console.log(result1);
        if(result1.status ===200){
            setTicketStat({
                totalTicket : result1.data.total_tickets,
                pending : result1.data.pending_tickets,
                resolved : result1.data.resolved_tickets,
                unassigned : result1.data.unassigned_tickets,
            });
        }
        const result = await getEmployeeTicketStats(obj);
        console.log(result);
        if(result.status ===200){
            let employeeStatList = result.data.employees;
            setEmpList(employeeStatList);
        }
    }
    useEffect (()=>{
        fLoadDashboardData();
    },[fLoadDashboardData]);

    const onShowTicketCellClick = (params) => {
        console.log(params);
        dispatch(setDashboardEmp({
            empId: params.row.employee_id,
            empName: params.row.employee_name,
        }));
        navigate('/EmployeeTickets');
        
    };

    const columns = [
        {
            field: 'employee_id',
            headerName: 'Employee Id',
            flex: 1,
            align:'center',
            headerAlign: 'center',
           headerClassName:'mui-report-grid-header',
        },
        {
            field: 'employee_name',
            headerName: 'Name',
            flex: 3,
            headerClassName:'mui-report-grid-header',
        },
        {
            field: 'total_assigned_tickets',
            headerName: 'Total Tickets',
            flex: 2,
            align:'center',
            headerAlign: 'center',
            headerClassName:'mui-report-grid-header',
        },
        {
            field: 'total_solved_tickets',
            headerName: 'Solved Tickets',
            flex: 2,
            align:'center',
            headerAlign: 'center',
           headerClassName:'mui-report-grid-header',
        },
        {
            field: 'total_pending_tickets',
            headerName: 'Pending Tickets',
            flex: 2,
            align:'center',
            headerAlign: 'center',
            headerClassName:'mui-report-grid-header',
        },
          
        {
            field: '...',
            flex: 1,
            align: 'center',
            headerAlign: 'center',
            hide: false,
            headerClassName:'mui-report-grid-header',
            renderCell: (params) => {
    
                return (
                    <IconButton size='small' color='primary' onClick={() => {onShowTicketCellClick(params)  }}>
                        <OpenInNew />
                    </IconButton>
                );
            }
        },
       
    ];

    return (
        <div className="container ">
            <div>
            <ToastContainer />
            </div>
            <Box sx={{ flexGrow: 1 }}>
                {/* <Grid
                    container
                    spacing={1}
                    columns={{ xs: 12, sm: 12, md: 12 }}
                    sx={{ alignItems:'center', justifyContent:'end' }}
                    className="mb-4 text-end">
                    <Grid item xs={6} sm={6} md={3}>
                    <TitleCards key={1} xTitle={'Total Tickets'} xCount={sTicketStat.totalTicket} xId={1} xColor={'#44cfcf'}/>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                    <TitleCards key={2} xTitle={'Completed Tickets'} xCount={sTicketStat.resolved} xId={2}  xColor={'#1fae6c'}/>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                    <TitleCards key={3} xTitle={'Pending Tickets'} xCount={sTicketStat.pending} xId={3}  xColor={'#eae020'}/>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                    <TitleCards key={4} xTitle={'UnAssigned'} xCount={sTicketStat.unassigned} xId={4}  xColor={'#fa1f1f'}/>
                    </Grid>
                    
                </Grid>  */}

                <Grid container spacing={2} >
                    <Grid item xs={3}>
                        <Widgets
                            type="total"
                            title="Total Tickets"
                            amount={sTicketStat.totalTicket}
                            link=""
                            color="crimson"
                            icon={
                                <Assignment className="icon"
                                    style={{
                                        color: "purple",
                                        backgroundColor: "rgba(128, 0, 128, 0.2)",
                                    }}

                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Widgets
                            type="solved"
                            title="Resolved Tickets"
                            amount={sTicketStat.resolved}
                            link=""
                            color="green"
                            icon={<AssignmentTurnedIn className="icon" style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Widgets
                            type="pending"
                            title="Pending Tickets"
                            amount={sTicketStat.pending}
                            link=""
                            color="goldenrod"
                            icon={<PendingActions className="icon" style={{ color: "goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2)", }} />}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Widgets
                            type="unAssigned"
                            title="Unassigned"
                            amount={sTicketStat.unassigned}
                            link=""
                            color="crimson"
                            icon={<AssignmentLate className="icon" style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)", }} />}
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={1}
                    columns={{ xs: 12, sm: 12, md: 12 }}
                    sx={{ alignItems:'center' }}
                    className="mb-3 text-end">
                    <Grid item xs={12} sm={12} md={12}>
                        <Box width='100%'
                                    className="mt-2"
                                    sx={{
                                        height: '55vh',
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
                                rows={sEmpList}
                                getRowId={(row) => row.employee_id}
                                columns={columns}
                                rowHeight={45}
                                headerHeight={40}
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
                                hideFooter={true}
                                getRowClassName={(params) =>
                                    'mui-report-grid-row'
                                }
                            // onRowClick={(params)=>{onClickGrid(params)}}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={1}
                    columns={{ xs: 12, sm: 12, md: 12 }}
                    sx={{ alignItems:'center', justifyContent:'end' }}
                    className="mb-1 text-end">
                    <Grid item xs={5} sm={4} md={2}>
                        <CmpDatePickerField
                            xValue={sFilterObj.dateFrom}
                            xOnChange={(newValue) => setFilterObj((obj) => ({ ...obj, dateFrom: newValue.$d }))}
                            xName={'dateFrom'}
                            xError={false}
                            xErrorMessage={false}
                            xOnKeyUp={''}
                            xTabIndex={'3'}
                            xLabel={'From'}
                        />
                    </Grid>
                    <Grid item xs={5} sm={4} md={2}>
                        <CmpDatePickerField
                                xValue={sFilterObj.dateTo}
                                xOnChange={(newValue) => setFilterObj((obj) => ({ ...obj, dateTo: newValue.$d }))}
                                xName={'dateTo'}
                                xError={false}
                                xErrorMessage={false}
                                xOnKeyUp={''}
                                xTabIndex={'4'}
                                xLabel={'To'}
                            />
                    </Grid>
                
                    <Grid item xs={2} sm={1} md={1}>
                        <IconButton size='large' color='primary' onClick={() => {fLoadDetails(sFilterObj.dateFrom,sFilterObj.dateTo)  }}>
                            <Sync sx={{backgroundColor:'#b6b6fd', fontSize:'30px', padding:'2px',borderRadius: '25px'}}/>
                        </IconButton>
                        {/* <CmpButton
                            xvariant={'contained'}
                            xsize={'small'}
                        // xonClick={(e) => fOnpressLoad(sHeadObj)}
                            xLabel={'Load'}
                        /> */}
                    </Grid>
                </Grid> 
            </Box>
        </div>
    );
};

