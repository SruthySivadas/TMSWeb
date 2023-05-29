import { Close, Save } from '@mui/icons-material'
import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import { CmpButton, CmpCheckboxField, CmpDatePickerField, CmpInputField, CmpTimePicker, CmpTypographyField, CmpTypographyFieldColor } from '../../../component/ToolBox/ToolBox'
import { fAlertToast } from '../../../Utility/Utilitys';
import { createEmployee, createEmployeeRoster, updateEmployee, updateEmployeeRoster } from '../action';
import { useSelector } from 'react-redux';
import { TimePicker } from '@mui/x-date-pickers';
import moment from 'moment';


export default function RosterDetailModal({
    xId,
    xDate,
    xShift_start_time,
    xShift_end_time,
    xAvailability,
    onClose,
    refreshGrid
}) {
        const rdxEmployee = useSelector((state) => state.EmployeeSlice.value);
        const [sDetailObj,setDetailObj]= useState({
            shift_start_time:xShift_start_time,
            shift_end_time:xShift_end_time,
            date:xDate,
            availability:xAvailability
        });

       const onClickSave = async () => {
        if (sDetailObj.date === "") {
            fAlertToast('FAILED', 'Select Date');
            return;
        }

        let obj = {          
            shift_start_time: moment(sDetailObj.shift_start_time).format("HH:mm:ss"),
            shift_end_time:  moment(sDetailObj.shift_end_time).format("HH:mm:ss"),
            date:  moment(sDetailObj.shift_start_time).format("YYYY-MM-DD"),
            availability: sDetailObj.availability,
            employee: rdxEmployee.empId
        }

        if(xId ===0){
           const result = await createEmployeeRoster(obj);
           if(result.status ===201){
              fAlertToast("SUCCESS","Successfully Saved!");
              refreshGrid();
           }
        }
        else{
            const result = await updateEmployeeRoster(obj,xId);
            if(result.status ===200){
              fAlertToast("SUCCESS","Successfully Saved!");
              refreshGrid();
           }
           
        }
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0}>
        <Grid item xs={12} className="ticket-Modal-title d-flex justify-content-end">
            <Close onClick={() => onClose(false)} />
        </Grid>
    </Grid>
    <Grid container spacing={1} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} className='p-4'>
                <Grid item xs={12}>
                    <Grid container spacing={1} columns={{ xs: 12, sm: 12, md: 12}} >
                        <Grid item xs={12} sm={6} md={4}>
                            <Grid
                                container
                                spacing={1}
                                columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                                sx={{ alignItems: 'center' }}>
                                <Grid item xs={6} sm={6} md={6}>
                                    <CmpTypographyFieldColor xcomponent={'span'} xText={'Employee Id'} />
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
                           
                    </Grid>
                </Grid>   
            </Grid>
            <Grid container spacing={1} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} className='mt-3 p-4'>
                <Grid item xs={12}>
                    <Grid container spacing={1} columns={{ xs: 12 }} >
                        <Grid item xs={12} sm={6} md={6}>
                            <Grid
                                container
                                spacing={1}
                                columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                                sx={{ alignItems: 'center' }}>
                                <Grid item xs={4} sm={4} md={3}>
                                    <CmpTypographyField xcomponent={'span'} xText={'Date'} />
                                </Grid>
                                <Grid item xs={1} sm={1} md={1}>
                                    <CmpTypographyField xcomponent={'span'} xText={':'} />
                                </Grid>
                                <Grid item xs={4} >
                                    <CmpDatePickerField
                                            xValue={sDetailObj.date}
                                            xOnChange={(newValue) => setDetailObj({...sDetailObj,date: newValue.$d})}
                                            xName={'date'}
                                            xError={false}
                                            xErrorMessage={false}
                                            xOnKeyUp={''}
                                            xLabel=""
                                        />   
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
                                    <CmpTypographyField xcomponent={'span'} xText={'Shift Time'} />
                                </Grid>
                                <Grid item xs={1} sm={1} md={1}>
                                    <CmpTypographyField xcomponent={'span'} xText={':'} />
                                </Grid>
                                <Grid item xs={4} >
                                    {/* <TimePicker
                                        label="Start picker"
                                        value={sDetailObj.shift_start_time}
                                        onChange={(newValue) => setDetailObj({...sDetailObj,date: newValue})}
                                    /> */}
                                    <CmpTimePicker
                                            xValue={sDetailObj.shift_start_time}
                                            xOnChange={(newValue) => setDetailObj({...sDetailObj,shift_start_time: newValue.$d})}
                                            xName={'date'}
                                            xError={false}
                                            xErrorMessage={false}
                                            xOnKeyUp={''}
                                            xLabel=""
                                        />   
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
                                    <CmpTypographyField xcomponent={'span'} xText={'Shift Time'} />
                                </Grid>
                                <Grid item xs={1} sm={1} md={1}>
                                    <CmpTypographyField xcomponent={'span'} xText={':'} />
                                </Grid>
                                <Grid item xs={4} >
                                    <CmpTimePicker
                                            xValue={sDetailObj.shift_end_time}
                                            xOnChange={(newValue) => {console.log(newValue);console.log(moment(newValue.$d).format("HH:mm:ss")); setDetailObj({...sDetailObj,shift_end_time: newValue.$d})}}
                                            xName={'date'}
                                            xError={false}
                                            xErrorMessage={false}
                                            xOnKeyUp={''}
                                            xLabel=""
                                        />   
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
                                    <CmpTypographyField xcomponent={'span'} xText={'Available'} />
                                </Grid>
                                <Grid item xs={1} sm={1} md={1}>
                                    <CmpTypographyField xcomponent={'span'} xText={':'} />
                                </Grid>
                                <Grid item xs={1} >
                                    <CmpCheckboxField xChecked={sDetailObj.availability} xOnChange={(event) => setDetailObj({...sDetailObj,availability:event.target.checked})} />
                                </Grid>
                            </Grid>
                        </Grid>      
                    </Grid>
                </Grid>   
            </Grid>
            <Grid
                container
                spacing={1}
                columns={{ xs: 12, sm: 12, md: 10 }}
                className='mt-4  p-4 d-flex justify-content-end'
            >
            
                <Grid item xs={2} md={2} >
                    <CmpButton
                        xvariant={'contained'}
                        xsize={'small'}
                        xStartIcon ={<Save/>}
                        xonClick={() => onClickSave()}
                        xLabel={'save'}
                    />
                </Grid>
            
                
            </Grid> 
    </Box >
  )
}
