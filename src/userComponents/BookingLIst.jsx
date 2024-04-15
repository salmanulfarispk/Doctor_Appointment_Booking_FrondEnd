import { Calendar } from 'lucide-react';
import { Clock } from 'lucide-react';
import { MapPin } from 'lucide-react';
import moment from 'moment';
import { CancelAppointment } from './CancelAppointment';
import axios from 'axios';


export default function BookingLIst({bookingList,expired,updatedRecord}) {

  const onDeleteBooking=async(appointmentid)=>{
     try{
     const token={
      headers:{
        Authorization:`${localStorage.getItem("jwt")}`
      }
     };

     const response= await axios.delete(`http://localhost:3001/user/cancelAppointment/${appointmentid}`,token)
       if(response.status==200){
        updatedRecord()
       }

     }catch(err){
      console.log(err);
     }
  }
   
  return (
    <div>
   {bookingList&&bookingList.map((item,index)=>(
     <div key={index} className='flex gap-4  items-center border lg:p-4 sm:p-2 lg:m-3 sm:m-0 rounded-lg mb-3'>
       <img src={item.image}
       width={70}
       height={70}
       alt='doc-image'
       className='rounded-full h-[70px] w-[70px] object-cover'
       />
     <div className='flex flex-col gap-2 lg:w-full py-2 px-1'>
      <h2 className='font-bold lg:text-[18px] items-center flex justify-between'>{item.doctorName}
         
         {!expired&&<CancelAppointment onContinueClick={()=>onDeleteBooking(item.AppointmentId)}/>}
      
      </h2>
      <h2 className='flex gap-2 font-mono text-gray-500'><MapPin className='text-primary h-6 w-5' />{item.hospital}</h2>
      <h2 className='flex gap-2 font-mono'><Calendar className='text-primary h-5 w-5 '/>Appointment On : {moment(item.date).format('DD-MMM-YYYY')}</h2>
      <h2 className='flex gap-2 font-mono'><Clock className='text-primary h-5 w-5'/> At Time : {item.time}</h2>


      </div>
  </div>
   ))}


    </div>
  )
}
