import { Box, Grid } from '@mui/material'
import React from 'react'
import { CmpTypographyField, CmpTypographyFieldColor, StatusIcon } from '../../../component/ToolBox/ToolBox'
import { Person, Schedule, Title, Verified, WatchLater } from '@mui/icons-material'

export default function TicketCard({
    xTicketNo,
    xTitle,
    xCreatedAt,
    xEmployee,
    xResolved
}) {
  return (
    <Box sx={{ flexGrow: 1 }} className="ticket-card">
    <Grid
      container
      spacing={1}
      columns={{ xs: 12, sm: 12, md: 12 }}>
      <Grid item xs={12} sm={12} md={12} >
      <Grid
              container
              spacing={1}
              columns={{ xs: 12, sm: 12, md: 12 }}
              sx={{ alignItems: 'center' }}>
              <Grid item xs={11} textAlign={'center'}>
                <CmpTypographyFieldColor xcomponent={'span'} xText={'Ticket #'+xTicketNo} />
              </Grid>
             
              <Grid item xs={1} >
                    <Verified style={{ color: xResolved ? 'green' : '#FFD800' }} fontSize="10px" />
              </Grid>
            </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Grid
          container
          spacing={0}
          columns={{ xs: 12, sm: 12, md: 12 }}
          sx={{ alignItems: 'center' }}>
          <Grid item xs={12} sm={12} md={12}>
            <Grid
              container
              spacing={0}
              columns={{ xs: 12, sm: 12, md: 12 }}
              sx={{ alignItems: 'center' }}>
              <Grid item xs={2} >
                <Title fontSize='.5rem'/>
              </Grid>
              <Grid item xs={10} >
                <CmpTypographyField xcomponent={'span'} xText={xTitle} />
                </Grid>
              
            </Grid>
          </Grid>
          <Grid item xs={12} >
            <Grid
              container
              spacing={1}
              columns={{ xs: 12, sm: 12, md: 12 }}
              sx={{ alignItems: 'center' }}>
               <Grid item xs={2} >
                <Schedule fontSize='.5rem'/>
              </Grid>
              <Grid item xs={10} >
                <CmpTypographyField xcomponent={'span'} xText={xCreatedAt} />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={12}>
            <Grid
              container
              spacing={0}
              columns={{ xs: 12, sm: 12, md: 12 }}
              sx={{ alignItems: 'center' }}>
              <Grid item xs={4} sm={4} md={4}>
                <CmpTypographyField xcomponent={'span'} xText={'Resolved At'} />
              </Grid>
              <Grid item xs={1} sm={1} md={1}>
                <CmpTypographyField xcomponent={'span'} xText={':'} />
              </Grid>
              <Grid item xs={7} sm={7} md={7}>
                <CmpTypographyField xcomponent={'span'} xText={xCreatedAt} />
              </Grid>
            </Grid>
          </Grid> */}
          <Grid item xs={12}>
            <Grid
              container
              spacing={1}
              columns={{ xs: 12, sm: 12, md: 12 }}
              sx={{ alignItems: 'center' }}>
              <Grid item xs={2} >
                <Person fontSize='.5rem'/>
              </Grid>
              <Grid item xs={10} >
                <CmpTypographyField xcomponent={'span'} xText={xEmployee} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box >
  )
}
