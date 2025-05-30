import React from "react";

const ContactForm = () => {
    return (
        <div className="container flex items-center justify-center min-h-[15vh] py-10 my-10">
            <div className="w-1/2">
                <h3 className="text-4xl font-bold mb-4">Contact Us</h3>
                <p className="text-gray-500">We would love to hear from you. Please fill out the form below and we will get back to you as soon as possible.</p>
            </div>
            <div className="w-1/2 p-10">
                <form className="contact-form">
                    <div className="form-group flex flex-col">
                        <label htmlFor="name">{'Name'}</label>
                        <input className="form-input" type="text" id="name" name="name" autoComplete="off" />
                    </div>
                    <div className="form-group flex flex-col">
                        <label htmlFor="email">{'Email'}</label>
                        <input className="form-input" type="email" id="email" name="email" autoComplete="off" />
                    </div>
                    <div className="form-group flex flex-col">
                        <label htmlFor="message">{'Message'}</label>    
                        <textarea className="form-input" id="message" name="message" autoComplete="off" />
                    </div>
                    <button className="btn-primary" type="submit">{'Get in touch'}</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
