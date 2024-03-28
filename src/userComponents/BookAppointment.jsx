import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Calendar } from "@/components/ui/calendar"
import { CalendarDays, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

  

export default function BookAppointment() {

    const [date, setDate] =useState(new Date)
    const [TimeSlot,setTimeSlot]=useState()
    const[selectedSlot,SetSelecetedSlot]=useState()

    useEffect(()=>{
            getTime();
    },[])

    const getTime = () => {
        const timeList = [];
        for (let i = 10; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }
  
        setTimeSlot(timeList)
      }
  
      const IsPastDay=(day)=>{
        return day<new Date();
      }


  return (
    <div>
     
  <Dialog>
  <DialogTrigger>
  <button className=' text-gray-100 mt-2 rounded-full mb-2 bg-primary/90 px-3 py-2 hover:text-gray-50 
  hover:bg-blue-800'>Book Appointment</button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogDescription>
         <div>     
            <div className='grid grid-cols-1 md:grid-cols-2 mt-2'>
            <div className='flex flex-col gap-3 items-baseline'>
                <h2 className='flex gap-2 items-center'>
                    <CalendarDays className='text-primary h-5 w-5'/>
                    Select Date
                </h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={IsPastDay}
              className="rounded-md border"
            />
             </div>
            <div className='mt-2 md:mt-0'>
                <h2 className='flex gap-2 items-center mb-3'>
                <Clock className='text-primary h-5 w-5'/>
                Select Time Slot
                </h2>
              <div className='grid grid-cols-3 gap-3 border rounded-lg px-2 py-3'>
             {TimeSlot && TimeSlot.map((item,index)=>(
                 <h2 key={index} className={`p-2 border  rounded-full cursor-pointer text-center
                 hover:bg-primary hover:text-white ${item.time===selectedSlot&& 'bg-primary text-white'}`} 
                 onClick={(()=>SetSelecetedSlot(item.time))}>{item.time}</h2>
             ))}
 
              </div>
              </div>
              <textarea placeholder='Note..' cols="1" rows="3" className='border-[1px] mt-2' ></textarea>

            </div>            

         </div> 

      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <>
            <Button type='button' variant='outline' className='mb-5 text-red-500 px-3 py-1
            hover:bg-white border-red-500 border-[1px] hover:text-red-500'
            >close</Button>
            <Button type="button" disabled={!(date&&selectedSlot)}>
              Submit
            </Button>
            </>
          </DialogClose>
        </DialogFooter>
  </DialogContent>
</Dialog>
          

    </div>
  )
}
