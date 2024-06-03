import React from 'react'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <div className="bg-[url('/images/f1.jpg')] bg-center bg-no-repeat bg-cover h-full w-full">
        <div className='bg-black/60 min-h-[440px]'>
            <div className='container grid md:grid-cols-3 pb-20 pt-5'>
                <div className=' py-8 px-4'>
                    
                    <a className='font-semibold text-2xl md:text-3xl font-pacifiko text-light' >CoffePub </a>

                    <p className='pt-4 text-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto tempore ea, illo cumque corporis expedita nulla numquam </p>


                        <a className='inline-block border-2 text-white font-poppins font-semibold bg-red-600 py-2 px-4 mt-5 text-sm rounded-full'
                         href='https://www.youtube.com/@EfeGorkemUmit'> 
                        Visit Yout Youtube Chanel
                        </a>
                </div>
                <div className='py-8 px-4 col-span-2 sm:col-auto'>
                              <h1 className='text-xl  font-semibold text-white'>Adress</h1>

                                <div className='mt-4 space-y-4 text-light'>
                                    <p>Turkey İzmir</p>
                                    <p>+90 555 555 55 55</p>


                                </div>

                                <div className='flex items-center gap-3 mt-6'>

                                    <a href='https://www.youtube.com/@EfeGorkemUmit'>
                                        <FaYoutube className='text-3xl duration-300 text-light hover:scale-110 '></FaYoutube>
                                    </a>

                                    <a href='https://www.linkedin.com/in/efe-g%C3%B6rkem-%C3%BCmit-a084009b/'>
                                        <FaLinkedin className='text-3xl duration-300 text-light hover:scale-110 '></FaLinkedin>
                                    </a>

                                    <a href='https://www.instagram.com/efegorkemumit/'>
                                        <FaInstagram className='text-3xl duration-300 text-light hover:scale-110 '></FaInstagram>
                                    </a>


                                </div>


                        </div>
            </div>
        </div>
    </div>
  )
}

export default Footer