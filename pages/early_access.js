import React, {useContext, useState} from 'react';
import dataContext from "../components/DataContext";
import cookie from 'js-cookie';
import "../public/code.css";
import '../public/nav.css'
import '../public/form.css'
import Logo from '../components/Logo';
import {getCode} from '../api/api';
import Button from '../components/Button';
import CONSTANTS from '../utils/constants';

function EarlyAccess () {
    let HARDCODED_CODE = "1234";
    const [invalid, setInvalid] = useState(false);
    const [code, setCode] = useState("");
    let {saveEarlyAccessToken} = useContext(dataContext);

    const onChange = (ev) => {
        
        setCode(ev.target.value);
        setInvalid(false);
    }
    const sendCode = () => {
        getCode(code).then(data => {
            const valid = data && data.valid
            console.log(data)
            if (valid) {
                saveEarlyAccessToken(data.hashCode)
            } else {
                setInvalid(true);
            }
        }).catch(() => console.error);
    }
    const sendEmail = () => {
        window.open(`mailto:${CONSTANTS.ADMIN_EMAIL}`);
    };
        return <div className="early-access">
            <div className="header">
                <Logo />
                <div className="subtitle">First-of-its-kind database on Latino talent working in Hollywood.</div>
            </div>
            <div className="body">
                <p className="lbl-code">Introduce your early access code here</p>
                {/* {invalid ? <p>Invalid Code</p> : null} */}
                <input className="input-code" style={invalid ? {color: "#ff4848", borderColor: "#ff4848"} : null} onChange={onChange} id='txt-code' text={code}/>
                {/* <button className="btn-submit" sendCode={sendCode}>Enter</button> */}
                <div className="invalid">
                    {invalid ? 
                        <div className="message-error">
                            <span className="oval">!</span>
                            Code is not valid, try again.
                        </div>
                    : null}
                </div>
                <Button title="Enter" action={sendCode} />
                <div className="contact-us">
                    <p className="message">
                        Want access or be included on the database?
                        <span onClick={sendEmail} className="email-link">Contact us here</span>
                    </p>
                </div>
                <div className="footer">
                    ©2020 All rights reserved.
                </div>
            </div>
        </div>
}

export default EarlyAccess;