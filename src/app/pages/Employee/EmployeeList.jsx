import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import './Employee.css'
import { Box, Grid, IconButton, Modal } from '@mui/material';
import { CmpButton } from '../../component/ToolBox/ToolBox';
import { Add, Delete, Edit, PersonAdd, Visibility } from '@mui/icons-material';
import EmployeeDetailModal from './Components/EmployeeDetailModal';
import { ToastContainer } from 'react-toastify';
import { deleteEmployee, getEmployeeList } from './action';
import { fAlertToast } from '../../Utility/Utilitys';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmployee } from './EmployeeSlice';

export default function EmployeeList() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [sEmployeeList,setEmployeeList] = useState([]);
    const [sShowModal,setShowModal] = useState(false);
    
    const [sEmpObj,setEmpObj]= useState({
        empId:'',
        empName:''
    });

    const loadEmployees = async()=>{
        const result = await getEmployeeList();
        if(result.status ==200){
            setEmployeeList(result.data);
        }
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
                    const result = await deleteEmployee(params.row.employee_id);
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

    useEffect(()=>{
        loadEmployees();
    },[]);

  
    const onClickNew = () => {
        setEmpObj({empId:'',empName:''});
        setShowModal(true);
    };
    const onEditCellClick = (params) => {
        setEmpObj({empId:params.row.employee_id,empName:params.row.name});
        setShowModal(true);
    };
    
    const onShowRosterCellClick = (params) => {
        console.log(params);
        dispatch(setEmployee({
            empId: params.row.employee_id,
            empName: params.row.name,
        }));
        navigate('/EmployeeRoster');
        
    };
   
    const onClickGrid = (params) => {
        // if (params.field !== 'delete' || params.field !== 'edit') {
        //     console.log(params);
          
        // }
    }

    const refreshGrid = ()=>{
        loadEmployees();
        setShowModal(false);
    };
    const columns = [
        {
            field: 'employee_id',
            headerName: 'Employee Id',
            flex: 3,
            align:'center',
            headerAlign: 'center',
            headerClassName:'mui-report-grid-header'
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 7,
            headerClassName:'mui-report-grid-header'
        },
        {
            field: 'show',
            headerName: 'Roster',
            flex: 1,
            align: 'center',
            headerAlign: 'center',
            hide: false,
            headerClassName:'mui-report-grid-header',
            renderCell: (params) => {
    
                return (
                    <IconButton size='small' color='primary' onClick={() => { onShowRosterCellClick(params); }}>
                        <Visibility />
                    </IconButton>
                );
            }
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
         <Box sx={{ flexGrow: 1 }}>
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
                        xStartIcon ={<PersonAdd/>}
                        xonClick={() => onClickNew()}
                        xLabel={'New Employee'}
                    />
                </Grid>
            </Grid>
        </Box>
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
                rows={sEmployeeList}
                getRowId={(row) => row.employee_id}
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
                // components={{
                //     Toolbar: GridToolbar,

                // }}
                
                // getRowClassName={(params) =>
                //     params.indexRelativeToCurrentPage % 2 === 0 ? 'mui-report-grid-even-row' : 'mui-report-grid-odd-row'
                // }
                getRowClassName={(params) =>
                    'mui-report-grid-row'
                }
                onRowClick={(params)=>{onClickGrid(params)}}
            />
        </Box>
        <Modal
            open={sShowModal}
            onClose={() => setShowModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box className="employee-Modal">
                <EmployeeDetailModal xEmpId={sEmpObj.empId} xEmpName={sEmpObj.empName}  onClose={setShowModal} refreshGrid={refreshGrid}/>
            </Box>
        </Modal>
    </div>
  )
}
