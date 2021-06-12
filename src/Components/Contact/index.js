import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
    const [contactState, setContactState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = contactState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            };
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        setContactState({...contactState, [e.target.name]: e.target.value });

        if(!errorMessage) {
            setContactState({ ...contactState, [e.target.name]: e.target.value });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <section>
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" defaultValue={email} onBlur={handleChange}></input>
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}></textarea>
                </div>

                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}

                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;