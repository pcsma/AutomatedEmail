import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer ,toast } from 'react-toastify'

const Contact = () => {
    const form = useRef();
    const notify = () => toast.success("Message sent sucessfully!",{
      position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
    })

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mqo19na', 'template_0szr4kq', form.current, {
        publicKey: 'ovmlmawe_sAXrviyr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          notify('')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <section className="flex justify-center items-center mx-6 h-full w-full lg:min-h-10 lg:w-1/2">
        <form className="bg-[#2a368b] text-white max-w-lg w-full p-[25px] rounded-2xl" ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col">
                <h2 className="flex items-center justify-center text-3xl">Contact</h2>
                <div className="flex flex-col mb-6">
                    <label>Name </label>
                    <input className="h-10 border-inherit w-full text-black rounded p-1 mt-2" type="text" placeholder="Enter your name" name='sender_name' required />
                </div>
                <div className="flex flex-col mb-6">
                    <label>E-mail </label>
                    <input className="h-10 border-inherit w-full text-black rounded p-1 mt-2" type="text" placeholder="Enter your e-mail" name='sender_mail' required />
                </div>
                <div className="flex flex-col mb-6">
                    <label>Concern </label>
                    <textarea className="h-20 border-inherit p-1 w-full text-black rounded mt-2" type="text" placeholder="Enter your concerns" name='sender_concern' required/>
                </div>
                <div className="flex flex-col mb-6">
                    <label>Details </label>
                    <textarea className="h-20 border-inherit w-full text-black rounded p-1 mt-2" type="text" placeholder="Enter concern details" name='concern_details' required/>
                </div>
                <button className="bg-[#ffd41b] rounded h-9 w-full text-[#2a368b]" type="submit">Send Message</button>
                <ToastContainer />
            </div>
        </form>
      </section>
    </div>
  )
}

export default Contact
