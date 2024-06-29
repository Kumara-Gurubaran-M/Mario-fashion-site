import React, { useState } from 'react'
import { HiOutlineChevronRight } from "react-icons/hi";
export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")
    const [errname, setErrName] = useState("")
    const [erremail, setErrEmail] = useState("")
    const [errmsg, setErrMsg] = useState("")
    const [successfullmsg, setSuccessfullmsg] = useState(false)

    const EmailValidation = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    };

    const handleName = (e) => {
        setName(e.target.value);
        setErrName("")
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail("")
    }
    const handleMsg = (e) => {
        setMsg(e.target.value);
        setErrMsg("")
    }

    const handlePost = (e) => {
        e.preventDefault();
        if (!name) {
            setErrName("Enter your name")
        }
        if (!email) {
            setErrEmail("Enter your Email")
        } else if (!EmailValidation(email)) {
            setErrEmail("Enter valid Email")
        }
        if (!msg) {
            setErrMsg("Enter your Message")
        }
        else {
            setSuccessfullmsg(true)

        }
    }
    return (
        <div>
            <div className='about'>
                <h1 className='about-title'>Contact</h1>
                <div className='about-from'>
                    <p>About Us</p>
                    <span className='greaterthan'><HiOutlineChevronRight /></span>
                    <span className='to'>Contact</span>
                </div>
                <h2 className='form-title'>Fill up a Form</h2>

            </div>
            {successfullmsg ? (<form><p className='successfullmsg'>Thank you dear {name}, Your messages has been received successfully. Futher details will sent to you by your email at {email}</p></form>)
                :
                <form >
                    <label>Name</label>
                    <input
                        placeholder='Enter your name here'
                        type='text'
                        value={name}
                        onChange={handleName}
                    />
                    <span className='errormsg'>{errname}</span>
                    <label>Email</label>
                    <input
                        placeholder='Enter your Email here'
                        type='text'
                        value={email}
                        onChange={handleEmail}
                    />
                    <span className='errormsg'>{erremail}</span>
                    <label>Message</label>
                    <textarea
                        placeholder='Enter your Message here'
                        type='text'
                        value={msg}
                        onChange={handleMsg}
                    ></textarea>
                    <span className='errormsg'>{errmsg}</span>
                    <button onClick={handlePost} >Post</button>

                </form>


            }
        </div>
    )
}

