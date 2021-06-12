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
                setErrorMessage(`A ${e.target.name} is required.`);
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
            <h1 className="fw-bold fs-2 pt-3 px-5">Contact Me:</h1>
            <form className="px-5" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="fw-bold">Name:</label>
                    <input className="ml4" type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
                </div>

                <div>
                    <label htmlFor="email" className="fw-bold">Email:</label>
                    <input type="text" name="email" defaultValue={email} onBlur={handleChange}></input>
                </div>

                <div>
                    <label htmlFor="message" className="fw-bold">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}></textarea>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <button type="submit" className="fw-bold">Submit</button>
            </form>
        </section>
    );
};

export default Contact;