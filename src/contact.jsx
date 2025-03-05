import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Main = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        emailjs.sendForm(
            'service_z9p83ss', // Remplacez par votre Service ID
            'template_72n6gsc', // Remplacez par votre Template ID
            form.current,
            'jK0BpkPetINK5JWHJTSrf' // Remplacez par votre Public Key
        )
            .then((result) => {
                setSubmitStatus('Message sent successfully!');
                form.current.reset();
            })
            .catch((error) => {
                setSubmitStatus('Failed to send message. Please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id='contact' className='lg:pt-[20vh] pt-14 overflow-hidden'>
            <div className='flex flex-col lg:flex-row lg:items-center gap-10 group'>
                <motion.div
                    className=' lg:w-[60vw]'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        className='lg:pl-1  p-1 uppercase text-[#696767] text-[25px] font-semibold  pb-2 transition-colors duration-300 group-hover:text-[#0097b2]'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >Let’s work together!
                    </motion.p>
                    <motion.p
                        className='lg:w-[90%] text-[#696767] text-[14px] lg:pl-1  p-1'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >I design and code beautifully simple things and I love what I do. Just simple like that!
                    </motion.p>
                    <form ref={form} onSubmit={sendEmail} className='lg:pl-1 p-1'>
                        <div className='w-[100%] flex gap-5 pt-8'>
                            <input
                                type="text"
                                name="firstName"
                                placeholder='First name'
                                className='w-[50%] bg-transparent rounded-md p-3 border-[#696767]/25 border-[1px] text-[14px] text-[#696767]'
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder='Last name'
                                className='w-[50%] bg-transparent rounded-md p-3 border-[#696767]/25 border-[1px] text-[14px] text-[#696767]'
                                required
                            />
                        </div>
                        <div className='w-[100%] flex gap-5 pt-3'>
                            <input
                                type="email"
                                name="email"
                                placeholder='Email address'
                                className='w-[50%] bg-transparent rounded-md p-3 border-[#696767]/25 border-[1px] text-[14px] text-[#696767]'
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder='Phone number'
                                className='w-[50%] bg-transparent rounded-md p-3 border-[#696767]/25 border-[1px] text-[14px] text-[#696767]'
                            />
                        </div>
                        <div className='w-[100%] pt-3'>
                            <textarea
                                name="message"
                                rows={8}
                                placeholder='Message'
                                className='w-[100%] bg-transparent rounded-md p-3 border-[#696767]/25 border-[1px] text-[14px] text-[#696767]'
                                required
                            ></textarea>
                        </div>
                        {submitStatus && (
                            <div className={`mt-3 text-sm ${submitStatus.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                                {submitStatus}
                            </div>
                        )}
                        <div className='pt-3'>
                            <div className="flex md:justify-start">
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="relative flex items-center px-6 py-3 bg-[#0097b2] rounded-full border border-[#0097b2] overflow-hidden group disabled:opacity-50"
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="relative z-10 text-sm font-medium text-black">
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </span>
                                    <span className="absolute inset-0 bg-[#0097b2] rounded-full -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                    <span className="relative z-10 ml-3 text-black">
                                        <IoIosSend className="w-4 h-4" />
                                    </span>
                                </motion.button>
                            </div>
                        </div>
                    </form>
                </motion.div>

                <motion.div
                    className='lg:w-[40vw] flex flex-col gap-5'
                    variants={infoVariants}
                    initial='hidden'
                    whileInView='visible'
                    exit='exit'
                    transition={{ duration: 2 }}
                >
                    <div className='flex gap-3 items-center'>
                        <button className='border-[#0097b2] border-[1px] text-[#0097b2] rounded-full px-[10px] py-[10px] hover:bg-[#0097b2] hover:text-[#000] transition duration-300'>
                            <IoPhonePortraitOutline />
                        </button>
                        <div>
                            <p className='text-black'>Phone</p>
                            <p className='font-semibold text-black text-[14px]'>06 87 98 48 13</p>
                        </div>
                    </div>

                    <div className='flex gap-3 items-center'>
                        <button className='border-[#0097b2] border-[1px] text-[#0097b2] rounded-full px-[10px] py-[10px] hover:bg-[#0097b2] hover:text-[#000] transition duration-300'>
                            <MdOutlineAlternateEmail />
                        </button>
                        <div>
                            <p className='text-black'>Email</p>
                            <p className='font-semibold text-black text-[14px]'>bensafyrajae19@gmail.com</p>
                        </div>
                    </div>

                    <div className='flex gap-3 items-center'>
                        <button className='border-[#0097b2] border-[1px] text-[#0097b2] rounded-full px-[10px] py-[10px] hover:bg-[#0097b2] hover:text-[#000] transition duration-300'>
                            <MdOutlineLocationOn />
                        </button>
                        <div>
                            <p className='text-black'>Address</p>
                            <p className='font-semibold text-black text-[14px]'>Sidi Moumen, Casablanca</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Main;