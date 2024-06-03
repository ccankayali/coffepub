import React from 'react'

const ServiceData=[
  {
      id:1,
      img:"/images/1.png",
      name:"Expresso",
      description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
      aosDelay:"100"
  },
  {
      id:2,
      img:"/images/3.png",
      name:"Cappicuno",
      description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
      aosDelay:"300"
  },
  {
      id:3,
      img:"/images/4.png",
      name:"Americano",
      description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
      aosDelay:"500"
  },
  {
      id:4,
      img:"/images/5.png",
      name:"Latte",
      description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
      aosDelay:"700"
  },
]

function Services() {
  return (
    <div className='py-10 '>
      <div className='container'>
        <div className='text-center mb-20'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-second2 font-bold'>Best Coffee For You</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 place-items-center'>
          {ServiceData.map((item) => (
            <div key={item.id} data-aos='fade-up' data-aos-delay={item.aosDelay} className='flex flex-col items-center'>
              <img src={item.img} alt='' className='w-52 h-52 object-cover rounded-full' />
              <h1 className='text-2xl font-second2 font-bold mt-5'>{item.name}</h1>
              <p className='text-center mt-3'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services