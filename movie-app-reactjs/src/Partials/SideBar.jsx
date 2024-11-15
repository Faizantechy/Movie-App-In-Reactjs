import React from 'react'

import { Link } from 'react-router-dom'

function SideBar() {
  return (
      <div className='lg:w-[20% lg:px-5 lg:py-8 lg:h-full lg:border-r lg:border-black'>
     

          <h1 className='text-3xl font-bold'><i className="ri-play-circle-fill text-purple-600"></i> SCSDB</h1>

          <nav>
              
              <h2 className='mt-3 font-bold text-xl'>News Feeds</h2>

              <ul className='flex flex-col gap-7 text-xl ml-2 mt-5 font-semibold'>

                  <Link className='hover:bg-purple-600 p-2 rounded-lg duration-75 active:scale-[90%]'><i class="ri-fire-fill"></i> Trending</Link>
                  <Link className='hover:bg-purple-600 p-2 rounded-lg duration-75 active:scale-[90%]' ><i class="ri-bard-fill"></i> Popular</Link>
                  <Link className='hover:bg-purple-600 p-2 rounded-lg duration-75 active:scale-[90%]' ><i class="ri-movie-line"></i> Movies</Link>
                  <Link className='hover:bg-purple-600 p-2 rounded-lg duration-75 active:scale-[90%]' ><i class="ri-tv-2-line"></i> Tv Shows</Link>
                  <Link className='hover:bg-purple-600 p-2 rounded-lg duration-75 active:scale-[90%]' ><i class="ri-contacts-line"></i> People</Link>


              </ul>

              <hr className='h-[2px] bg-black w-full mt-4' />

        <h2 className='mt-3 font-bold text-xl'>Website Information</h2>

              
              <ul className='flex flex-col gap-7 text-xl ml-2 mt-5 font-semibold'>

<Link className='hover:bg-purple-600 p-2 rounded-lg duration-75 active:scale-[90%]'><i class="ri-folder-info-line"></i> About</Link>
<Link className='hover:bg-purple-600 p-2 rounded-lg duration-75 active:scale-[90%]'><i class="ri-phone-line"></i> Contact</Link>

                  


</ul>

          </nav>
          

    </div>
  )
}

export default SideBar