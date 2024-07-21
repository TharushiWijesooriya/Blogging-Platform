'use client'
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {

    const [data,setData] = useState(null);

    const fetchBlogData = async () =>{
        const response =await axios.get('/api/blog',{
            params:{
                id:params.id
            }
        })
        setData(response.data);
    }

    useEffect(()=>{
        fetchBlogData();
    },{})

  return (data?<>
    <div className='flex-grow bg-gradient-to-r from-gray-100 via-yellow-100 to-gray-100 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            
            <Link href={`/`}>
            <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
            </Link>

            <Link href="/admin">
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black bg-gray-100 hover:bg-gray-300 transition-colors shadow-md hover:shadow-lg transition-shadow transform transition-transform hover:scale-105'>
                Get Started 
                <Image src={assets.arrow}/>
            </button>
            </Link>
        </div>

        <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>
                {data.title}
            </h1>

            <Image src={data.authorImg} width={60} height={60} alt='' className='mx-auto mt-6 border border-white rounded-full' />
        
            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>              
                {data.author}
            </p>
        
        </div>
    </div>

    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt='' />

        <div className='blog-content' dangerouslySetInnerHTML={{__html:data.description}}></div>

        <div className='my-6 flex justify-between items-center'>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 shadow-md hover:shadow-xl transition-shadow'>
                Upvote
                <Image src={assets.upvote_icon} alt='' width={30}/>
            </button>

            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 shadow-md hover:shadow-xl transition-shadow'>
                Upvote
                <Image src={assets.downvote_icon} alt='' width={30}/>
            </button>

            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 shadow-md hover:shadow-xl transition-shadow'>
                Like
                <Image src={assets.like_icon} alt='' width={30}/>
            </button>

            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 shadow-md hover:shadow-xl transition-shadow'>
                Comment
                <Image src={assets.comment_icon} alt='' width={30}/>
            </button>
        </div>
        
        <div className='my-24'>
            <p className='text-black font font-semibold my-4'>
                Share this article on social media
            </p>
            <div className='flex'>
                <Image src={assets.facebook_icon} width={50} alt='' className='transform transition-transform hover:scale-105 cursor-pointer'/>
                <Image src={assets.twitter_icon} width={50} alt='' className='transform transition-transform hover:scale-105 cursor-pointer'/>
                <Image src={assets.googleplus_icon} width={50} alt='' className='transform transition-transform hover:scale-105 cursor-pointer'/>
            </div>
        </div>

    </div>

    <Footer/>

    </>:<></>
  )
}

export default page