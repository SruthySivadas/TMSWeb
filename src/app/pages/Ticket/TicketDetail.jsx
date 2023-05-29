import { Close, Delete, Edit, Save } from '@mui/icons-material'
import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment';
import { CmpButton, CmpInputField, CmpTypographyField, CmpTypographyFieldColor } from '../../component/ToolBox/ToolBox'
import { confirmAlert } from 'react-confirm-alert';
import { createTicket, deleteTicket, updateTicket } from './action';
import { fAlertToast } from '../../Utility/Utilitys';


export default function TicketDetail({
    onClose,
    refreshParent,
}) {  
    const xTicketDetail = useSelector((state) => state.TicketSlice.value);
    const [sDetailObj,setDetailObj]= useState(xTicketDetail);
    const [sEditable,setEditable] = useState(xTicketDetail.ticketNumber === 0);

    const onClickSave = async () => {
        if (sDetailObj.title === "") {
            fAlertToast('FAILED', 'Enter title');
            return;
        }
        if (sDetailObj.description === "") {
            fAlertToast('FAILED', 'Enter description');
            return;
        }

        let obj = {      
            title:sDetailObj.title,
            description: sDetailObj.description   
        }

        if(xTicketDetail.ticketNumber === 0){
           const result = await createTicket(obj);
           if(result.status ===201){
              fAlertToast("SUCCESS","Successfully Saved!");
              refreshParent();
           }
        }
        else{
            const result = await updateTicket(obj,xTicketDetail.ticketNumber);
            if(result.status ===200){
              fAlertToast("SUCCESS","Successfully Saved!");
              refreshParent();
           }
           
        }
    };
    const onClickDelete = async(params)=>{
        confirmAlert({
            title: 'Delete',
            message: 'Are you sure to delete permanently?',
            buttons: [
              {
                className: 'alertBtn',
                label: 'Yes',
                onClick: async () => {
                    const result = await deleteTicket(xTicketDetail.ticketNumber);
                    if(result.status === 204){
                        fAlertToast("SUCCESS","Deleted Successfully!");
                        refreshParent();
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
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0}>
        <Grid item xs={12} className="ticket-Modal-title d-flex justify-content-between">
            <span> Ticket : {xTicketDetail.ticketNumber}</span>
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
                        <Grid item xs={4} sm={4} md={2}>
                            <CmpTypographyField xcomponent={'span'} xText={'Title'} />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            <CmpTypographyField xcomponent={'span'} xText={':'} />
                        </Grid>
                        <Grid item xs={7} sm={7} md={8}>
                            <CmpInputField
                                    xValue={sDetailObj.title}
                                    xType={'text'} 
                                    xName={'Title'}
                                    xReadOnly={!sEditable}
                                    xOnChange={(event) => { setDetailObj({ ...sDetailObj, title: event.target.value }) }}
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
                        <Grid item xs={4} sm={4} md={2}>
                            <CmpTypographyField xcomponent={'span'} xText={'Description'} />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            <CmpTypographyField xcomponent={'span'} xText={':'} />
                        </Grid>
                        <Grid item xs={7} sm={7} md={8}>
                            <CmpInputField
                                    xValue={sDetailObj.description}
                                    xType={'text'} 
                                    xName={'description'}
                                    xReadOnly={!sEditable}
                                    xOnChange={(event) => { setDetailObj({ ...sDetailObj, description: event.target.value }) }}
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
        <Grid item xs={2} md={1.5} >
            <CmpButton
                xvariant={'contained'}
                xsize={'small'}
                xStartIcon ={<Edit/>}
                xDisable={sDetailObj.resolved}
                xonClick={() => setEditable(true)}
                xLabel={'Edit'}
            />
        </Grid>
        <Grid item xs={2} md={1.5} >
            <CmpButton
                xvariant={'contained'}
                xsize={'small'}
                xStartIcon ={<Save/>}
                xDisable={sDetailObj.resolved}
                xonClick={() => onClickSave()}
                xLabel={'save'}
            />
        </Grid>
        <Grid item xs={2} md={1.5} >
            <CmpButton
                xvariant={'contained'}
                xsize={'small'}
                xDisable={sDetailObj.resolved}
                xStartIcon ={<Delete/>}
                xonClick={() => onClickDelete()}
                xLabel={'Delete'}
            />
        </Grid>
        <Grid item xs={2} md={.8} >
            
        </Grid>
    </Grid>
    {xTicketDetail.ticketNumber !== 0 && <Grid container spacing={1} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} className='p-4'>
        <Grid item xs={12}>
            <Grid container spacing={1} columns={{ xs: 12 }} >
                <Grid item>
                <CmpTypographyFieldColor xcomponent={'span'} xText={'Status Info :'} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Grid
                        container
                        spacing={1}
                        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                        sx={{ alignItems: 'center' }}>
                        <Grid item xs={4} sm={4} md={2}>
                            <CmpTypographyField xcomponent={'span'} xText={'Created at'} />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            <CmpTypographyField xcomponent={'span'} xText={':'} />
                        </Grid>
                        <Grid item xs={7} sm={7} md={8}>
                            <CmpTypographyField xcomponent={'span'} xText={moment(sDetailObj.created_at).format('DD/MM/YYYY  h:mm:ss a')} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Grid
                        container
                        spacing={1}
                        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                        sx={{ alignItems: 'center' }}>
                        <Grid item xs={4} sm={4} md={2}>
                            <CmpTypographyField xcomponent={'span'} xText={'Assigned To'} />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            <CmpTypographyField xcomponent={'span'} xText={':'} />
                        </Grid>
                        <Grid item xs={7} sm={7} md={8}>
                            <CmpTypographyField xcomponent={'span'} xText={sDetailObj.assigned_to} />
                        </Grid>
                    
                    </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                    <Grid
                        container
                        spacing={1}
                        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                        sx={{ alignItems: 'center' }}>
                        <Grid item xs={4} sm={4} md={2}>
                            <CmpTypographyField xcomponent={'span'} xText={'Status'} />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            <CmpTypographyField xcomponent={'span'} xText={':'} />
                        </Grid>
                        <Grid item xs={7} sm={7} md={8}>
                            <CmpTypographyField xcomponent={'span'} xText={sDetailObj.resolved?'Completed':'Pending'} />
                        </Grid>
                    
                    </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                    <Grid
                        container
                        spacing={1}
                        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                        sx={{ alignItems: 'center' }}>
                        <Grid item xs={4} sm={4} md={2}>
                            <CmpTypographyField xcomponent={'span'} xText={'Resolved at'} />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            <CmpTypographyField xcomponent={'span'} xText={':'} />
                        </Grid>
                        <Grid item xs={7} sm={7} md={8}>
                            <CmpTypographyField xcomponent={'span'} xText={moment(sDetailObj.resolvedTime).format('DD/MM/YYYY  h:mm:ss a')} />
                        </Grid>
                    </Grid>
                </Grid>      
             </Grid>
        </Grid>   
    </Grid>
    }
 
    </Box >
  )
}
