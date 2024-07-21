import { assets } from '@/Assets/assets'
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Header = () => {

    const [email,setEmail] = useState("");

    const onSubmitHandler = async (e) =>{
        e.preventDefault();

        //logic to send the input field data to Email API
        const formData = new FormData();
        formData.append("email",email);

        //making the API call
        const response = await axios.post('/api/email',formData);
        if (response.data.success) {
            toast.success(response.data.msg);

            //to empty the email input field
            setEmail("");
        }
        else{
            toast.error("Error")
        }
    }

  return (
    <div className='py-5 px-5 md:px12 lg:px-28 flex-grow bg-gradient-to-r from-gray-100 via-yellow-100 to-gray-100'>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />

            <Link href="/admin">
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black bg-gray-100 hover:bg-gray-300 transition-colors shadow-md hover:shadow-lg transition-shadow transform transition-transform hover:scale-105'>
                Get Started 
                <Image src={assets.arrow}/>
            </button>
            </Link>
            
        </div>

        <div className='text-center my-8'>
            <h1 className='text-3xl sm:text-5xl font-medium'>
                Welcome To TCK Blogging
            </h1>

            <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>
            Dive into a diverse collection of articles, where we explore a wide range of topics including technology, sports, food, and lifestyle. Whether you're interested in the latest tech trends, in-depth sports analyses, delicious recipes, or lifestyle tips and inspiration, our blog is designed to provide you with valuable insights and engaging content. Stay tuned for our latest updates and enrich your knowledge with our thoughtfully curated articles.
            </p>

            <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000] transform transition-transform hover:scale-105' action=''>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type='email' placeholder='Enter you email' className='pl-4 outline-none flex-grow bg-gradient-to-r from-gray-100 via-yellow-100 to-gray-100'/>
                <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-500 active:text-white bg-gray-200 hover:bg-gray-300 transition-colors'>
                    Subscribe
                </button>
            </form>
        </div>

    </div>
  )
}

export default Header