import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react'

const SubsTableItem = ({email,mongoId,deleteEmail,date}) => {

    const emailDate = new Date(date);

  return (
    <tr className='bg-white border-b text-left'>
        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            {email?email:"No Email"}
        </th>
        <td className='hidden sm:block px-6 py-4'>
            {emailDate.toDateString()}
        </td>

        <td className='px-6 py-4 cursor-pointer' onClick={()=>deleteEmail(mongoId)}>
            <Image src={assets.delete_icon} width={50} height={50} className='transform transition-transform hover:rotate-180'/>
        </td>

    </tr>
  )
}

export default SubsTableItem