import React from 'react'
// import Image from './Vikas.png'
import Privasec from './Privasec.png'
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { AiTwotoneBug } from "react-icons/ai";

function App() {
  return (
    <div className='w-full h-full bg-black text-white p-5'>
      <div className='border p-10 '>
        <div className='w-full px-[10%] '>
          <div className='flex flex-col pb-[1%]  '>
            <h1 className='text-7xl md:text-5xl font-semibold'>Vikas <span className='text-[#66DA43]'>Khanna</span> </h1>
            {/* <p className='text-lg text-[#66DA43]'>Technical Specialist</p> */}
            <hr className='w-[40%] mt-5'/>
          </div>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='w-full md:w-[60%] mr-10'>
              {/* <h1 className='text-7xl font-semibold'>About me</h1> */}
              <p className='mt-5 text-xl'>
              I am currently serving as a Technical Specialist at Privasec Singapore, where I am entrusted with the end-to-end delivery of security assessments. My responsibilities include managing and mentoring the Web application security practice, ensuring the highest standards of security are upheld. With a strong background in offensive security, I hold the Offensive Security Certified Professional (OSCP) certification since May 2017. My expertise spans various domains, including Web application and API security assessments, thick client application assessments, and network security assessments.
                </p>
              <div className='md:flex hidden items-center mt-10'>
                <a href='https://www.linkedin.com/in/vikaskhanna01/' target='blank' className='mr-5'>
                  <BsLinkedin className='hover:text-[#66DA43]' size={35} />
                </a>
                <a href='https://twitter.com/0xn00b' target='blank' className='mr-5'>
                  <FaTwitterSquare className='hover:text-[#66DA43]' size={40} />
                </a>
                <a href="https://www.exploit-db.com/?author=9620" target='blank' className='mr-5'>
                  < AiTwotoneBug className='hover:bg-[#66DA43] text-black border bg-white rounded' size={35}/>
                </a>
                <a href="https://privasec.com/" target='blank' className='mr-5'>
                  <img src={Privasec} alt="Priyasec-logo" sizes={40}  className='hover:bg-[#496b3e] border   bg-white rounded'/>
                </a>
              </div>
            </div>
            <img className=' md:w-80 md:h-80 mt-5 rounded-3xl rounded-br-3xl object-cover' src="https://res.cloudinary.com/dzmicyc9d/image/upload/v1703908223/Vikas.0d89502f4a0bbea7437d_gh04oj.jpg" alt='Vikas-khanna' />
            <div className='flex md:hidden items-center mt-10'>
                <a href='https://www.linkedin.com/in/vikaskhanna01/' target='blank' className='mr-5'>
                  <BsLinkedin className='hover:text-gray-400' size={35} />
                </a>
                <a href='https://twitter.com/0xn00b' target='blank' className='mr-5'>
                  <FaTwitterSquare className='hover:text-gray-400' size={40} />
                </a>
                <a href="https://www.exploit-db.com/?author=9620" target='blank' className='mr-5'>
                  < AiTwotoneBug className='hover:bg-[#66DA43] text-black border bg-white rounded' size={35}/>
                </a>
                <a href="https://privasec.com/" target='blank' className='mr-5'>
                  <img src={Privasec} alt="Priyasec-logo" sizes={40}  className='hover:bg-[#496b3e] border   bg-white rounded' />
                </a>
              </div>
          </div>
          <hr className='my-5' />
          <div>
            <h1 className='max-sm:text-5xl  max-md:text-5xl  lg:text-7xl   font-semibold '>Upcoming <span className='text-[#66DA43]'>Talks</span></h1>
            <h1 className='text-3xl font-semibold mt-8'>API Security 101</h1>
            <ul className="text-xl list-disc list-inside ">
              <li>
              <a href='https://www.hack.sydney/' target='blank' className='text-lg hover:text-blue-400 hover:underline text-[#66DA43] focus:text-gray-400' >HCKSYD Sydney 2023: November 23-24</a>
              </li>
              <li>
              <a href='https://blackhatmea.com/' target='blank' className='text-lg hover:text-blue-400 hover:underline text-[#66DA43] focus:text-gray-400 mt-5 ' >BlackHat MEA 2023: November 15</a>
              </li>
            </ul>
           
            <p className='mt-5 text-xl'>I intend to deliver a session focusing on API security and the common vulnerabilities encountered in API implementations. In the course of my research, I've pinpointed two security issues within Apple's system, with a total estimated value of $10,000 USD. These particular concerns will be presented and thoroughly discussed as an essential component of my presentation.</p>
            <h1 className='mt-5 text-3xl font-semibold'>Unlocking the Gates - Understanding Authentication Bypass Vulnerabilities</h1>
            <ul className="text-xl list-disc list-inside ">
              {/* <li>
              <a href='https://www.hack.sydney/' target='blank' className='text-lg hover:text-blue-400 hover:underline text-[#66DA43] focus:text-gray-400' >HCKSYD Sydney 2023: November 23-24</a>
              </li> */}
              <li>
              <a href='https://blackhatmea.com/' target='blank' className='text-lg hover:text-blue-400 hover:underline text-[#66DA43] focus:text-gray-400 mt-5 ' >BlackHat MEA 2023: November 15</a>
              </li>
            </ul>
            <p className='mt-5 text-xl'>"Unlocking the Gates - Understanding Authentication Bypass Vulnerabilities" provides a captivating and informative experience for individuals engaged in securing digital systems. Participants will gain a heightened awareness of authentication vulnerabilities, along with practical strategies to strengthen their application's security. By fortifying the gates against unauthorized access, sensitive data, and user identities will be safeguarded. During the session, I will share my own discovery of an authentication bypass vulnerability in one of Apple's subdomains, offering a real-world example of its impact. Additionally, I will delve into over 15 techniques that can be employed to bypass authentication or gain control of user accounts. This comprehensive discussion will equip attendees with valuable insights into the methods attackers use and empower them to proactively defend against potential threats.</p>
          </div>
          <div>
            <h1 className="text-5xl font-semibold mt-5 mb-5 max-sm:text-4xl">CVEs <span className='text-[#66DA43]'>/</span> Contribution</h1>
            <ul className="text-xl list-disc list-inside ">
              <li className="">2021 - <span className="text-[#66DA43]">Contributor, OWASP Projects</span></li>
              <li className="">2022 - <span className="text-[#66DA43]">CVE‑2022‑21450, Oracle</span></li>
              <li className="">2018  - <span className="text-[#66DA43]">CVE‑2018‑1513, IBM</span></li>
              <li className="">2018 - <span className="text-[#66DA43]">CVE‑2018‑1563, IBM</span></li>
             
            </ul>
              {/* <p className="text-xl"><span className=' '>. 2021 - </span><span className="text-[#66DA43]">Contributor</span> <span className=" text-[#66DA43]">OWASP Projects</span></p> */}
          </div>
          <div>
          <h1 className="text-5xl font-semibold mt-5 mb-5 max-sm:text-4xl">Hall <span className='text-[#66DA43]'>of</span> Fame</h1>
          <ul className="text-xl list-disc list-inside pr-5">
            <li className="">2021 - <span className="text-[#66DA43]">Hall Of Fame, Apple</span></li>
            <li className="">2019 - <span className="text-[#66DA43]">Hall Of Fame, Nokia</span></li>
            <li className="">2017 - <span className="text-[#66DA43]">Hall Of Fame, AT&T</span></li>
            <li className="">2016 - <span className="text-[#66DA43]">Hall Of Fame, Google</span></li>
            <li className="">2016 - <span className="text-[#66DA43]"> Hall Of Fame, Oracle</span></li>
            <li className="">2016 - <span className="text-[#66DA43]">Hall Of Fame, General Motors</span></li>
            <li className="">2015 - <span className="text-[#66DA43]">Hall Of Fame, Microsoft</span></li>
            <li className="">2015 - <span className="text-[#66DA43]">Hall Of Fame, ebay</span></li>
            <li className="">2015 - <span className="text-[#66DA43]">Hall Of Fame, BlackBerry</span></li>
            <li className="">2015 - <span className="text-[#66DA43]">Hall Of Fame, Sony</span></li>
          </ul>
          </div> 
        </div>
      </div>   
    </div>
  )
}

export default App