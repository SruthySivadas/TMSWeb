import React, { useState } from 'react'
import { CmpButton, CmpTypographyField, CmpTypographyFieldColor, StatusIcon } from '../../../component/ToolBox/ToolBox'
import { Close, Done, DoneRounded, Person, Schedule, Title, Verified, WatchLater } from '@mui/icons-material'
import { Box, Grid } from '@mui/material'
import moment from 'moment';
import { confirmAlert } from 'react-confirm-alert';
import { updateTicketasResolved } from '../action';
import { fAlertToast } from '../../../Utility/Utilitys';

export default function TicketDetailCard({
    TicketNumber,
    TicketList,
    setTicketList,
    onClose
}) {
    let selected = TicketList.find(i=>i.ticket_number ===TicketNumber);
   const [Ticket,setTicket] = useState(selected);

   const onResolvedClick = async(params)=>{
        confirmAlert({
            title: 'Update',
            message: 'Are you sure to update?',
            buttons: [
            {
                className: 'alertBtn',
                label: 'Yes',
                onClick: async () => {
                    const result = await updateTicketasResolved({},TicketNumber);
                    if(result.status ==200){
                        fAlertToast("SUCCESS","Updated Successfully!");
                        let tckt = {...Ticket,resolved:true,resolved_datetime:new Date()}
                        setTicket(tckt)
                        let ticklist = TicketList.map(i=>{return i.ticket_number===TicketNumber?tckt:i});
                        setTicketList(ticklist);
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
            <span> Ticket : {TicketNumber}</span>
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
                            <CmpTypographyFieldColor xcomponent={'span'} xText={'Title'} />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            <CmpTypographyField xcomponent={'span'} xText={':'} />
                        </Grid>
                        <Grid item xs={7} sm={7} md={8}>
                            <CmpTypographyField xcomponent={'span'} xText={Ticket.title} />
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
                            <CmpTypographyFieldColor xcomponent={'span'} xText={'Description'} />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            <CmpTypographyField xcomponent={'span'} xText={':'} />
                        </Grid>
                        <Grid item xs={7} sm={7} md={8}>
                            <CmpTypographyField xcomponent={'span'} xText={Ticket.description} />
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
                            <CmpTypographyFieldColor xcomponent={'span'} xText={'Created at'} />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            <CmpTypographyField xcomponent={'span'} xText={':'} />
                        </Grid>
                        <Grid item xs={7} sm={7} md={8}>
                            <CmpTypographyField xcomponent={'span'} xText={moment(Ticket.created_at).format('DD/MM/YYYY  h:mm:ss a')} />
                        </Grid>
                    </Grid>
                </Grid>   
             </Grid>
        </Grid>   
    </Grid>
    <Grid
        container
        spacing={1}
        columns={{ xs: 12, sm: 12, md: 12 }}
        style={{position:'absolute',bottom:'10px'}}
        className='mt-1 mb-4 px-4 d-flex justify-content-end '
    >
        
        <Grid item xs={6} md={6} className='text-end' >
            <CmpButton
                xvariant={'contained'}
                xsize={'small'}
                xStartIcon ={<DoneRounded/>}
                xDisable={Ticket.resolved}
                xonClick={() => onResolvedClick()}
                xLabel={'Mark as resolved'}
            />
        </Grid>
        <Grid item xs={1} md={.8} >
            
        </Grid>
       
    </Grid>
   
    </Box >
  )
}
