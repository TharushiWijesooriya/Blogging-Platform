import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({authorImg,title,author,date,deleteBlog,mongoId}) => {

    const BlogDate = new Date(date);

  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-10 py-4 font-medium text-gray-900 whitespace-nowrap'>
            <Image width={50} height={50} src={authorImg?authorImg:assets.profile_icon} />
            <p>
                {author?author:"No Author"}
            </p>
        </th>

        <td className='px-10 py-4'>
            {title?title:"No Title"}
        </td>

        <td className='px-6 py-4'>
            {BlogDate.toDateString()}
        </td>

        <td onClick={()=>deleteBlog(mongoId)} className='px-6 py-4'>
        <Image src={assets.delete_icon} width={50} height={50} className='cursor-pointer transform transition-transform hover:rotate-180'/>
        </td>

        <td className='px-6 py-4'>
            <Image src={assets.edit_icon}width={50} height={50} className='cursor-pointer transform transition-transform hover:rotate-90'/>
        </td>

        <td className='px-6 py-4'>
            <Image src={assets.view_icon}width={50} height={50} />
        </td>

        <td className='px-6 py-4'>
            <Image src={assets.like_icon}width={50} height={50} />
        </td>

    </tr>
  )
}

export default BlogTableItem