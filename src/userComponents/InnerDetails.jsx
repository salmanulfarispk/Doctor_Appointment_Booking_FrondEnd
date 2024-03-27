import { Button } from '@/components/ui/button'
import { GraduationCap, MapPin } from 'lucide-react'
import React from 'react'

export default function InnerDetails({doctor}) {

const socialmedialist=[
  {
    id:1,
    icon:'/youtube.png'

  },
  {
    id:2,
    icon:'/linkedin.png'

  },
  {
    id:3,
    icon:'/twitter.png'

  },
  {
    id:4,
    icon:'/facebook.png'

  }

]


  return (
    <>
    <div className='grid grid-cols-1  md:grid-cols-3 border-[1px] p-3 rounded-lg'>
    {/* doctor image only */}
 <div>
    <img src={doctor.image}
    width={200}
    height={200}
    alt='doctor-image'
    className='rounded-lg w-full h-full object-bottom'
    />

 </div>


{/* doctor informations */}
<div className='col-span-2 mt-2 flex flex-col gap-2 items-baseline md:px-10'>
    
  <h2 className='font-bold text-xl'>{doctor.name}</h2>
  <h2 className='flex gap-2 text-gray-500 text-sm'>
   <GraduationCap/>
    <span>{doctor.experience} years of experience</span>
  </h2>
  <h2 className='text-sm flex gap-2 text-gray-500'>
  <MapPin style={{ width: '21px', height: '21px' }} />
    <span>{doctor.hospital}</span>
  </h2>
  <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary'>{doctor.category}</h2>

  <div className='flex gap-3'>
  {socialmedialist.map((item,index)=>(
  <img src={item.icon} key={index}
    width={30} height={30}
  />

  ))}
  </div>

  {/* <Button className='mt-2 rounded-full mb-2'>Book Appointment</Button> */}
  <button className=' text-gray-100 mt-2 rounded-full mb-2 bg-primary/90 px-3 py-2 hover:text-gray-50 
  hover:bg-blue-800'>Book Appointment</button>

</div>
</div>


<div className='p-3 border-[1px] rounded-lg mt-4'>
  <h2 className='font-bold text-[20px]'>About Me</h2>
  <p className='text-gray-500 tracking-wide mt-2'>{doctor.about}</p>
</div>



</>
  )
}
