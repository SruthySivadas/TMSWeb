import { Box, Grid } from '@mui/material'
import React from 'react'
import { CmpTypographyField } from '../../../component/ToolBox/ToolBox'
export default function TitleCards({
    xTitle,
    xCount,
    xIcon,
    xId,
    xColor
}) {
  return (
    <Box sx={{ flexGrow: 1,backgroundColor: xColor }} className="title-card">
    <Grid
      container
      spacing={1}
      columns={{ xs: 12, sm: 12, md: 12 }}>
      
      <Grid item xs={12} sm={12} md={12}>
        <Grid
          container
          spacing={0}
          columns={{ xs: 12, sm: 12, md: 12 }}
          sx={{ alignItems: 'center' }}>
          <Grid item xs={12} sm={12} md={12} sx={{textAlign:'left'}}>
            <h6 style={{fontWeight:500}}>{xTitle}</h6>
            {/* <CmpTypographyField xcomponent={'span'} xText={xTitle} /> */}
          </Grid>
          <Grid item xs={12} >
            <h5 style={{fontWeight:600}}>{xCount}</h5>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box >
  )
}
