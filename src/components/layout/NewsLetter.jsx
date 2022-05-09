import React, { useState, useEffect } from 'react'

export default function NewsLetter({ status, message, onValidated }) {
    const [email, setEmail] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        email &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email,
            });
    }
    useEffect(() => {
        if (status === "success") clearFields();
    }, [status])

    const clearFields = () => {
        setEmail('');
    }
    return (
        <>
            <div className="footerInputWrapper">
                <form onSubmit={(e) => submitForm(e)}  >

                    <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} placeholder='Sign up for our newsletter' />
                    <button
                        type="submit"
                        formValues={[email]}><i className="fa fa-long-arrow-alt-right"></i></button>
                </form>
            </div>
            <div>

                {status === "sending" && (
                    <div>
                        sending...
                    </div>
                )}
                {status === "error" && (
                    <div

                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
                {status === "success" && (
                    <div

                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
            </div>
        </>
    )
}
