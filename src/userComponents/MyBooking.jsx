import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingLIst from './BookingLIst';
import Header from './Header';
import axios from 'axios';


export default function MyBooking() {
  const [bookingList,setBookingList] =useState([]);

   
  const userid=localStorage.getItem("userId")

  const getUserBookingList = async () => {
    try {
      const verifyToken = {
        headers: {
          Authorization: `${localStorage.getItem("jwt")}`
        }
      };
      const response = await axios.get(`http://localhost:3001/user/bookingdetails/${userid}`, verifyToken);
      if (response.status === 200) { 
        setBookingList(response.data.datas)
        
      }
    } catch (err) {
      console.log(err);
      
    }
  };

  useEffect(() => {
    getUserBookingList();
  }, [bookingList]);

  const filterUserBooking = (type) => {
    const currentDate = new Date();
    const result = bookingList.filter((item) =>
      type === 'Upcoming' ? new Date(item.date) >= currentDate : new Date(item.date) <= currentDate
    );
    // console.log("result", result);
    return result;
  };


  return (
    <>
      <div className="md:px-10">
        <Header />
      </div>

      <div className='px-8 sm:px-10 mt-10'>
        <h2 className='font-bold text-2xl mb-2'>My Booking</h2>
        <Tabs defaultValue="Upcoming" className="w-full">
          <TabsList className='w-full justify-start'>
            <TabsTrigger value="Upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="Expired">Expired</TabsTrigger>
          </TabsList>
          <TabsContent value="Upcoming">
            <BookingLIst bookingList={filterUserBooking('Upcoming')} 
              updatedRecord={()=>getUserBookingList()}
             expired={false}
             />
          </TabsContent>
          <TabsContent value="Expired">
            <BookingLIst bookingList={filterUserBooking('Expired')} 
            expired={true}
            />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
