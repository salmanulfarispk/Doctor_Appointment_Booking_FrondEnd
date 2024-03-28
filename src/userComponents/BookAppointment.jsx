import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Calendar } from "@/components/ui/calendar"
import { CalendarDays } from 'lucide-react'

  

export default function BookAppointment() {

    const [date, setDate] =useState(new Date)





  return (
    <div>
     
  <Dialog>
  <DialogTrigger>
  <button className=' text-gray-100 mt-2 rounded-full mb-2 bg-primary/90 px-3 py-2 hover:text-gray-50 
  hover:bg-blue-800'>Book Appointment</button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Book Appointment</DialogTitle>
      <DialogDescription>
         <div>     
            <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col items-baseline'>
                <h2 className='flex gap-2 items-center'>
                    <CalendarDays/>
                    Select Date
                </h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />




             </div>
              <div>

 
              </div>
            </div>
         </div> 

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}
