"use client"
import Image from "next/image"
import gallary1 from "./../../../public/whatwedo/gallary1.jpg"
import gallary2 from "./../../../public/whatwedo/gallary2.jpg"
import gallary3 from "./../../../public/whatwedo/gallary3.jpg"
import gallary4 from "./../../../public/whatwedo/gallary4.jpg"
import gallary5 from "./../../../public/whatwedo/gallary5.jpg"
import gallary6 from "./../../../public/whatwedo/gallary6.jpg"
import gallary7 from "./../../../public/whatwedo/gallary7.jpg"
import gallary8 from "./../../../public/whatwedo/gallary8.jpg"
import gallary9 from "./../../../public/whatwedo/gallary9.jpg"
import gallary10 from "./../../../public/whatwedo/gallary10.jpg"
import gallary11 from "./../../../public/whatwedo/gallary11.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Whatwedogallary(){

  useEffect(() => {
    AOS.init();
  }, []);
  

    return(

        <>
        
        <div  className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div data-aos="fade-up"
     data-aos-duration="3000">
            <Image
              className="h-auto max-w-full rounded-lg"
              src={gallary1}
              alt="image1"
            />
          </div>
          <div  data-aos="fade-up"
     data-aos-duration="3000">
            <Image
              className="h-auto max-w-full rounded-lg"
              src={gallary2}
              alt="image2"
            />
          </div>
          <div  data-aos="fade-up"
     data-aos-duration="3000">
            <Image
              className="h-auto max-w-full rounded-lg"
              src={gallary3}
              alt="image3"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div  data-aos="fade-up"
     data-aos-duration="3000">
            <Image
              className="h-auto max-w-full rounded-lg"
              src={gallary4}
              alt="image4"
            />
          </div>
          <div  data-aos="fade-up"
     data-aos-duration="3000">
            <Image
              className="h-auto max-w-full rounded-lg"
              src={gallary5}
              alt="image5"
            />
          </div>
          <div  data-aos="fade-up"
     data-aos-duration="3000">
            <Image
              className="h-auto max-w-full rounded-lg"
              src={gallary6}
              alt="image6"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div  data-aos="fade-up"
     data-aos-duration="3000">
            <Image
              className="h-auto max-w-full rounded-lg"
              src={gallary7}
              alt="image7"
            />
          </div>
          <div  data-aos="fade-up"
     data-aos-duration="3000">
            <Image
              className="h-auto max-w-full rounded-lg"
              src={gallary8}
              alt="image8"
            />
          </div>
          <div  data-aos="fade-up"
     data-aos-duration="3000">
            <Image
              className="h-auto max-w-full rounded-lg"
              src={gallary9}
              alt="image9"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div  data-aos="fade-up"
     data-aos-duration="3000">
            <Image
              className="h-auto max-w-full rounded-lg"
              src={gallary10}
              alt="image10"
            />
          </div>
          <div  data-aos="fade-up"
     data-aos-duration="3000">
            <Image
              className="h-auto max-w-full rounded-lg"
              src={gallary11}
              alt="image11"
            />
          </div>
         
        </div>
      </div>
    </div>
        </>
    )
}