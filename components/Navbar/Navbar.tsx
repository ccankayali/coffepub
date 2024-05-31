import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'

function Navbar() {
  return (
    <div>
        <div className='flex justify-center p-3 bg-amber-950 text-white'>
            <div className='flex items-center space-x-2 mt-1'>
              <Image src="/images/logo/2.png" alt="logo" className='pl-1 mb-2' width={35} height={5} />
              <Link href="/" className="text-2xl font-pacifiko">CoffePub</Link>
            </div>

            <div className='flex-1 flex justify-center space-x-4'>
              <Button variant='navbar' size='sm' >
                <Link href="/" className="text-lg">Home</Link>
              </Button>
              <Button variant='navbar' size='sm'>
                <Link href="/about" className="text-lg">About</Link>
              </Button>
              <Button variant='navbar' size='sm'>
                <Link href="/contact" className="text-lg">Contact</Link>    
              </Button>
            </div>

            <div className='flex justify-end space-x-4'>
              <Button variant='navbar' size='sm'>
                <Link href="/login" className="text-lg">Login</Link>
              </Button>
              <Button variant='navbar' size='sm'>
                <Link href="/signup" className="text-lg">Sign Up</Link>
              </Button>
            </div>
        </div>
    </div>
  )
}

export default Navbar