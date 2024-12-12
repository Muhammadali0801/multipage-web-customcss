import React from 'react'
import Image from 'next/image'

const AboutImage = () => {
  return (
    <div>
        <div style={{width:"500px", border:"2px solid black", borderRadius:"20px", display:"flex", flexDirection:"row"}}>
            <Image src={"/about-images/shoe1.jpg"} alt='Shop shoes display'width={400} height={220} />

        </div>
        <div style={{width:"500px", border:"2px solid black", borderRadius:"20px", display:"flex", flexDirection:"row", marginTop:"50px"}}>
            <Image src={"/about-images/shoe2.jpg"} alt='Shop shoes display'width={300} height={350} />

        </div>
        <div style={{width:"500px", border:"2px solid black", borderRadius:"20px", display:"flex", flexDirection:"row", marginTop:"50px"}}>
            <Image src={"/about-images/shoe3.jpeg"} alt='Shop shoes display'width={400} height={220} />

        </div>
    </div>
  )
}

export default AboutImage