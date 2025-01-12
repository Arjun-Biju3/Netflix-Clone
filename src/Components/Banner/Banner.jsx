import React from 'react'
import "./Banner.css"
function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner-btn'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi deleniti, distinctio voluptate asperiores ducimus nobis vero quidem recusandae corrupti, repudiandae hic. Sint animi cumque, harum quasi fugiat corrupti quam dignissimos?</h1>

        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner


