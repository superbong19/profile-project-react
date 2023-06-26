import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { BiMessageRoundedDots } from 'react-icons/bi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zc1amfb', 'template_lx3asad', form.current, 'kuIJclE0jy9r61gq4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>congluan19092003@gmail.com</h5>
                        <a href="mailto:congluan19092003@gmail.com" target='_blank'>Send a message</a>
                    </article>
                    {/* END OF CONTACT OPTION */}

                    <article className="contact__option">
                        <BiMessageRoundedDots className='contact__option-icon' />
                        <h4>Messager</h4>
                        <h5>CongLuanLeVan</h5>
                        <a href="https://m.me/profile.php?id=100008840711598" target='_blank'>Send a message</a>
                    </article>

                    {/* END OF CONTACT OPTION */}

                    <article className="contact__option">
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+123456789</h5>
                        <a href="https://api.whatsapp.com/send?phone+=2312312321" target='_blank'>Send a message</a>
                    </article>
                </div>

                {/* END OF CONTACT OPTION */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact