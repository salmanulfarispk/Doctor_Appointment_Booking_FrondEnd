import React from 'react'

const BookedUsers = () => {
  return (
    <div>
        
<div className="overflow-x-auto">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">image</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">username</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">gamil</th>
        {/* <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Remove user</th> */}

       
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      <tr className="odd:bg-gray-50">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">img</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">bsbs</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer@gmail</td>
        {/* <td className="whitespace-nowrap px-4 py-2 text-gray-700"><button className='bg-red-500 rounded-lg p-2 text-white hover:bg-red-600'>
             Remove</button></td>  */}

        
        
      </tr>

  
    </tbody>
  </table>
</div>
    </div>
  )
}

export default BookedUsers