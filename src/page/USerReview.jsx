import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Avatar from '@mui/material/Avatar';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { MDBTypography } from 'mdb-react-ui-kit';



const USerReview = () => {
  return (
    <div>
        
      <MDBTypography variant='h2' className='ms-3 mt-2'>Reviews....</MDBTypography>
      <Accordion >
        <AccordionSummary 
          expandIcon={<ArrowDownwardIcon/>} 
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <Avatar  alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
       
          <Typography className='mt-2 ms-2 '>Username</Typography>
          <DeleteOutlineOutlinedIcon  className='ms-auto mt-2 me-3'/>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ..............commmenst.. dnjfhjdfjd mdfdbfjdfkjdsbsd bsdbdbsjkd dsdbjkbdsjbdsj dsbcdbjkbsdjkbjdksb cjbsdjkc
            dsbbsjdbasjdbjsabdjabjasbabbdsbdj bcjsdbjskd cbhjbdasj ascjbsjbsj shbhsvhds shbhbss sbdhbsdhs
          </Typography>
        </AccordionDetails>
      </Accordion>


    </div>
  )
}

export default USerReview