import React,{ useRef } from 'react'
import { FaLocationArrow } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md'
import { IoMdCall } from 'react-icons/io'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_g3786ir', 'template_u1rfdve', form.current, '2QMm44-e4ryaA1IZC')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };
    return (
        <div name="Contact" className='bg-slate-100'>
            <section className='contact'>
                <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>

                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Connect with me </h2>

                    {/* <div className=' w-full'>

                        <div >
                            <div className='flex p-2 items-center font-medium'>
                                <FaLocationArrow size={20}></FaLocationArrow>
                                <h4 className='pl-4'>College:</h4>
                                <p> Dayananda Sagar College Of Engineering</p>
                            </div>
                        </div>

                        <div >
                            <div className='flex p-2 items-center font-medium'>
                                <MdAlternateEmail size={25}></MdAlternateEmail>
                                <h4 className='pl-4'>Email:</h4>
                                <p>kediaayush26@gmail.com</p>
                            </div>
                        </div>

                        <div >
                            <div className='flex p-2 items-center font-medium'>
                                <IoMdCall size={25}></IoMdCall>
                                <h4 className='pl-4'>Call:</h4>
                                <p>+91 7054710975</p>
                            </div>
                        </div>

                    </div> */}

                    <form className='space-y-8' ref={form} onSubmit={sendEmail}>
                        <div>
                            <label for="name" className='block mb-2 text-sm font-medium text-gray-700'>Name</label>
                            <input type="text"  name="name" className='bg-gray-50 border p-2.5 w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary-500'></input>
                        </div>
                        <div>
                            <label for="email" className='block mb-2 text-sm font-medium text-gray-700'>Email</label>
                            <input type="email" name="email" className='bg-gray-50 border w-full p-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary-500'></input>
                        </div>

                        <div>
                            <label for="Subject" className='block mb-2 text-sm font-medium text-gray-700'>Subject</label>
                            <input type="text" name="subject" className='bg-gray-50 border w-full p-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary-500'></input>
                        </div>
                        <div>
                            <div >
                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                <textarea name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="write your message..."></textarea>
                            </div>
                        </div>
                        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#294c5a] hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
                    </form>






                </div>
            </section>
        </div>
    )
}






