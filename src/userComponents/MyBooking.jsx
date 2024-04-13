import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingLIst from './BookingLIst'


export default function MyBooking() {
  return (
    <div className='px-4 sm:px-10 mt-10'>
      <h2 className='font-bold text-2xl'>My Booking</h2>
      <Tabs defaultValue="Upcoming" className="w-full">
      <TabsList className='w-full justify-start'>
    <TabsTrigger value="Upcoming">Upcoming</TabsTrigger>
    <TabsTrigger value="Expired">Expired</TabsTrigger>
  </TabsList>
  <TabsContent value="Upcoming">
    <BookingLIst/>
  </TabsContent>
  <TabsContent value="Expired">
    <BookingLIst/>
  </TabsContent>
</Tabs>


    </div>
  )
}
