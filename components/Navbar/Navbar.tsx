import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import OrderButton from '../Button/OrderButton'
import { FaCoffee } from 'react-icons/fa'

function Navbar() {
  return (
    <div className='bg-amber-950 text-white p-3'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-2 lg:text-3xl md:text-2xl' data-aos="fade">
          <Image src="/images/logo/2.png" alt="logo" width={35} height={35} />
          <Link href="/" className="text-2xl font-pacifiko">CoffePub</Link>
        </div>

        <div className='space-x-4 hidden lg:flex' data-aos="fade-down">
          <Link href="/">
            <Button variant='navbar' size='sm'>
              <span className="text-lg">Home</span>
            </Button>
          </Link>
          <Link href="/about">
            <Button variant='navbar' size='sm'>
              <span className="text-lg">About</span>
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant='navbar' size='sm'>
              <span className="text-lg">Contact</span>
            </Button>
          </Link>
        </div>

        <div  data-aos-once="true" data-aos-delay="500">
          <OrderButton icon={FaCoffee} label='Order' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
