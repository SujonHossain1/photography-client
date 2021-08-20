import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <section id="contact-section">
            <div className="contact-wrap">
                <div className="contact-title">
                    <h1>Contact us</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero fugit,
                        nihil nam nesciunt harum adipisci?
                    </p>
                </div>
                <form>
                    <div className="from-control">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="" id="name" required />
                    </div>
                    <div className="from-control">
                        <label htmlFor="name">Your Email</label>
                        <input type="email" name="" id="name" required />
                    </div>
                    <div className="from-control">
                        <label htmlFor="name">Your Message</label>
                        <textarea name="" id="" required />
                    </div>
                    <div className="w-100 m-auto text-center mt-5">
                        <input className="btn btn-success mt-4" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
