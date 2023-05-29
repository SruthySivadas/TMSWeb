import { Box, Grid, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import TicketCard from './Components/TicketCard';
import moment from 'moment';
import './TicketSummary.css';
import { resetTicket, setTicket } from './TicketSlice';
import TicketDetail from './TicketDetail';
import { CmpButton, CmpTypographyField } from '../../component/ToolBox/ToolBox';
import { Add, Verified } from '@mui/icons-material';
import { getTicketList } from './action';

export default function TicketSummary() {
  const dispatch = useDispatch();
  const [sTicketList,setTicketList] = useState([]);
  const [sShowModal,setShowModal] = useState(false);

  const loadTickets = async()=>{
    const result = await getTicketList();
    if(result.status ===200){
      setTicketList(result.data);
    }
  };
  useEffect(()=>{
    loadTickets();
  },[]);

  const refreshParent = ()=>{
    console.log("hhh");
    loadTickets();
    setShowModal(false);
  }
  const fOnpressItem = (item) => {
    console.log(item.ticket_number);
    dispatch(setTicket({
            ticketNumber: item.ticket_number,
            title:item.title,
            description:item.description,
            resolved: item.resolved,
            resolvedTime: item.resolved_datetime,
            created_at: item.created_at,
            assigned_to: item.assigned_to?.name
      })
    );
    if (item.ticket_number !== '') {
      //navigate('/TicketDetail');
      setShowModal(true);
    }
  };
  const onClickNew = () => {
    dispatch(resetTicket({ }));
    setShowModal(true);

  };

  
  return (
    <div className="container Dispatch">
    <div className="my-2">
      {/* <DispatchSummaryBreadCrumbs /> */}
    </div>
    <div>
      <ToastContainer />
    </div>
    <Box sx={{ flexGrow: 1 }}>
    <Grid
        container
        spacing={1}
        columns={{ xs: 12, md: 12}}
        className='mb-3 d-flex'
    >
    
        <Grid item xs={4} md={2} >
            <CmpButton
                xvariant={'contained'}
                xsize={'small'}
                xStartIcon ={<Add/>}
               xonClick={() => onClickNew()}
                xLabel={'Create Ticket'}
            />
        </Grid>
        <Grid item xs={4} md={6} >          
        </Grid>
        <Grid item xs={6} md={4} >  
          <Grid
              container
              spacing={1}
              columns={{ xs: 12, md: 12}}
              className='mb-3 d-flex'
          >
              <Grid item xs={1} md={1} >          
                <Verified style={{ color: 'green'}} fontSize="small" />
              </Grid>
              <Grid item xs={4} md={4} > 
                <CmpTypographyField xcomponent={'span'} xText={'Resolved'} />
              </Grid>
              <Grid item xs={1} md={1} >          
                <Verified style={{ color: 'FFD800'}} fontSize="small" />
              </Grid>
              <Grid item xs={4} md={4} > 
                <CmpTypographyField xcomponent={'span'} xText={'Pending'} />
              </Grid>
          </Grid>
        </Grid>        
        
       
    </Grid>
      <Grid
        container
        spacing={2}
        columns={{ xs: 12, sm: 12, md: 12 }}
        sx={{ height: '70vh', overflowY: 'auto', paddingRight: '16px', alignContent: sTicketList.length === 0 ? 'center' : 'start' }}>
        {sTicketList.length === 0 ? (
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <div>
              <p style={{ fontSize: '2rem' }}> List is Empty </p>
            </div>
          </Grid>
        ) : (
            sTicketList.map((itm) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={itm.ticket_number}
                onClick={() => fOnpressItem(itm)}
                >
                <TicketCard
                    xTicketNo={itm.ticket_number}
                    xTitle={itm.title}
                    xCreatedAt={moment(itm.created_at).format('DD/MM/YYYY HH:MM:SS a')}
                    xEmployee={itm.assigned_to?itm.assigned_to.name:''}
                    xResolved={itm.resolved}
                />
              </Grid>
            );
          })
        )}
      </Grid>
     
    </Box>
    <Modal
        open={sShowModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box className="model-sales-invoice-GCVanMaster-Modal">
            <TicketDetail  onClose={setShowModal} refreshParent={refreshParent}/>
        </Box>
    </Modal>
  </div>
  )
}
