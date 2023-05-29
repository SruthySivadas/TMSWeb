import { Close, Delete, Save } from '@mui/icons-material'
import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import { CmpButton, CmpInputField, CmpTypographyField } from '../../../component/ToolBox/ToolBox'
import { fAlertToast } from '../../../Utility/Utilitys';
import { createEmployee, updateEmployee } from '../action';

export default function EmployeeDetailModal({
    xEmpId,
    xEmpName,
    onClose,
    refreshGrid
}) {
    const [sDetailObj,setDetailObj]= useState({
        empId:xEmpId,
        empName:xEmpName
    });

    const onClickSave = async () => {
        if (sDetailObj.empName === "") {
            fAlertToast('FAILED', ' Enter Employee Name');
            return;
        }

        let obj = {
            name: sDetailObj.empName
        }

        if(sDetailObj.empId ===''){
           const result = await createEmployee(obj);
           if(result.status ===201){
              fAlertToast("SUCCESS","Successfully Saved!");
              refreshGrid();
           }
        }
        else{
            const result = await updateEmployee(obj,sDetailObj.empId);
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
                            <CmpTypographyField xcomponent={'span'} xText={'Employee id'} />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            <CmpTypographyField xcomponent={'span'} xText={':'} />
                        </Grid>
                        <Grid item xs={7} sm={7} md={7}>
                            <CmpInputField
                                    xValue={sDetailObj.empId}
                                    xType={'text'} 
                                    xName={'Employee Id'}
                                    xReadOnly={true}
                                    xOnChange={() => { }}
                                    xError={false}
                                    xErrorMessage={''}
                                    xOnKeyUp={''}
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
                            <CmpTypographyField xcomponent={'span'} xText={'Name'} />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            <CmpTypographyField xcomponent={'span'} xText={':'} />
                        </Grid>
                        <Grid item xs={7} sm={7} md={7}>
                            <CmpInputField
                                    xValue={sDetailObj.empName}
                                    xType={'text'} 
                                    xName={'name'}
                                    xReadOnly={false}
                                    xOnChange={(event) => { setDetailObj({ ...sDetailObj, empName: event.target.value }) }}
                                    xError={false}
                                    xErrorMessage={''}
                                    xOnKeyUp={''}
                                />
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
        className='mt-1 mb-4 px-4 d-flex justify-content-end'
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
        {/* <Grid item xs={2} md={1.5} >
            <CmpButton
                xvariant={'contained'}
                xsize={'small'}
                xStartIcon ={<Delete/>}
             //   xonClick={() => onClickPost()}
                xLabel={'Delete'}
            />
        </Grid> */}
        <Grid item xs={2} md={.5} >
            
        </Grid>
    </Grid> 
    </Box >
  )
}
