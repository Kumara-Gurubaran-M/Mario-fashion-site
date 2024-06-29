import React, { useState, useEffect } from 'react'
import Navbar from './nav/Navbar'
import Routing from './routing'
import Footer from "./footer/Footer"

function Login() {
    const [state, setState] = useState(true)
    const [emailInfo, setEmailInfo] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [errMsg2, setErrMsg2] = useState("");

    const emailValidation = () => {
        return String(emailInfo)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };

    const handleSubscription = () => {
        if (emailInfo === "" && password === "") {
            setErrMsg("Please provide an Email !");
            setErrMsg2("Please provide a Password !");
        }
        else if (!emailValidation(emailInfo) && password === "") {
            setErrMsg("Please give a valid Email!");
            setErrMsg2("Please provide a Password");
        }
        else if (emailInfo === "") {
            setErrMsg("Please provide an Email!");
        }
        else if (!emailValidation(emailInfo)) {
            setErrMsg("Please give a valid Email!");
        }
        else if (password === "" || password.length <= 5) {
            setErrMsg2("Password should be at least 6 characters long!");
            setErrMsg("")
        }
        else {
            setErrMsg("");
            setErrMsg2("");
            setEmailInfo("");
            setPassword("");
            setState(!state);
        }
    };

    useEffect(() => {
        // This code will run after state has been updated
        console.log("error", errMsg, errMsg2);
    }, [errMsg, errMsg2]);

    return (
        <>
            {state ?
                <div className='login-container'>
                    <div className='login'>
                        <h1>Login</h1>
                        <div className='inner-login'>
                            <label>Email</label>
                            <input
                                type='email'
                                placeholder='Enter Email Address'
                                onChange={(e) => setEmailInfo(e.target.value)}
                                value={emailInfo}
                            ></input>
                        </div>
                        {errMsg && (
                            <p className='errormsg' >{errMsg}</p>
                        )}
                        <div className='inner-login'>
                            <label>Password</label>
                            <input
                                type='password'
                                placeholder='Enter Password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            ></input>
                        </div>
                        {errMsg2 && (
                            <p className='errormsg' >{errMsg2}</p>
                        )}

                        <button onClick={handleSubscription}>Login</button>
                    </div>
                </div>
                :
                <div>
                    <Navbar />
                    <Routing />
                    <Footer />
                </div>}
        </>

    )
}
export default Login
// import React, { useState, useEffect } from 'react'
// import Navbar from './nav/Navbar'
// import Routing from './routing'
// import Footer from "./footer/Footer"

// function Login() {
//     const [state, setState] = useState(true)
//     const [emailInfo, setEmailInfo] = useState("");
//     const [password, setPassword] = useState("");
//     const [errMsg, setErrMsg] = useState("");
//     const [errMsg2, setErrMsg2] = useState("");

//     const emailValidation = () => {
//         return String(emailInfo)
//             .toLocaleLowerCase()
//             .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
//     };

//     const handleSubscription = () => {
//         if (emailInfo === "" && password === "") {
//             setErrMsg("Please provide an Email !");
//             setErrMsg2("Please provide a Password !");
//         }
//         else if (!emailValidation(emailInfo) && password === "") {
//             setErrMsg("Please give a valid Email!");
//             setErrMsg2("Please provide a Password");
//         }
//         else if (emailInfo === "") {
//             setErrMsg("Please provide an Email!");
//         }
//         else if (!emailValidation(emailInfo)) {
//             setErrMsg("Please give a valid Email!");
//         }
//         else if (password === "" || password.length <= 5) {
//             setErrMsg2("Password should be at least 6 characters long!");
//             setErrMsg("")
//         }
//         else {
//             setErrMsg("");
//             setErrMsg2("");
//             setEmailInfo("");
//             setPassword("");
//             setState(!state);
//         }
//     };

//     useEffect(() => {
//         // This code will run after state has been updated
//         console.log("error", errMsg, errMsg2);
//     }, [errMsg, errMsg2]);

//     return (
//         <>
//             {state ?
//                 <div className='login-container'>
//                     <div className='login'>
//                         <h1>Login</h1>
//                         <div className='inner-login'>
//                             <label>Email</label>
//                             <input
//                                 type='email'
//                                 placeholder='Enter Email Address'
//                                 onChange={(e) => setEmailInfo(e.target.value)}
//                                 value={emailInfo}
//                             ></input>
//                         </div>
//                         {errMsg && (
//                             <p className='errormsg' >{errMsg}</p>
//                         )}
//                         <div className='inner-login'>
//                             <label>Password</label>
//                             <input
//                                 type='password'
//                                 placeholder='Enter Password'
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 value={password}
//                             ></input>
//                         </div>
//                         {errMsg2 && (
//                             <p className='errormsg' >{errMsg2}</p>
//                         )}

//                         <button onClick={handleSubscription}>Login</button>
//                     </div>
//                 </div>
//                 :
//                 <div>
//                     <Navbar />
//                     <Routing />
//                     <Footer />
//                 </div>}
//         </>

//     )
// }

// export default Login