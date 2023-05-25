import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Home from './home'
import axios from 'axios';
import { useState } from 'react';
import { FaLock,FaUser,FaKey } from 'react-icons/fa';
import './style1.css';
function Login(){
    const styl={
        padding:'20px',
        background:"whitesmoke",
        marginTop:'10%',
        // backgroundImage: "linear-gradient(to left top, white,steelblue)",
        boxShadow:'4px 3px 11px -1px black',
        opacity:'0.8',
        background:'black',
        color:'white'
    }
    const h2={
        textAlign:'center',
        textDecoration:'underline',
        paddingBottom:'5%',
        fontFamily:'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif',
    }
    const focus={
        borderBottom:'3px solid blue',
        transition:'.7s'
    }
    const input={
        borderBottom:'1px solid white',
        borderLeft:'none',
        borderRight:'none',
        borderTop:'none',
        background:'inherit',
        borderRadius:'1px'
    }
    const [lgdata,setLgdata]=useState([]);
    const [userType,setUserType]=useState()
    const[secretKey,setSecretKey]=useState();
    useEffect(()=>{
        axios.get('http://localhost:4000/userData')
        .then((res)=>setLgdata(res.data))
    },[])
    console.log(lgdata)
    const handleSubmit=(e)=>{
        if(userType=="admin" && secretKey!="supreme")
        {
            alert("invalid admin")
        }
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <div style={styl}>
                <h3 style={h2}>Login Here</h3>
                <hr/>
                    <form className='form'>
                    <div className='form-group'>
                            <table>
                                <tr>
                                <td><label>User</label></td>
                                <td><input type='radio' value='user' name='userType' required="" onChange={(e)=>setUserType(e.target.value)}/></td>
                                <td><label  style={{marginLeft:'15px'}}>Admin</label></td>
                                <td><input type='radio' value='admin' name='userType' required="" onChange={(e)=>setUserType(e.target.value)}/></td>
                                </tr>
                            </table>
                            
                    </div><br/>
                    {userType=="admin" ? (<div className='form-group mb-3'>
                            <tr>
                                <td><FaKey/></td>
                                <td>
                                <input type='text' style={input} required className='form-control' placeholder='secret key' onChange={(e)=>setSecretKey(e.target.value)}/>
                                </td>
                            </tr>
                        </div>) : null}
                        <div className='form-group mb-3'>
                            <tr>
                                <td><FaUser/></td>
                                <td>
                                <input type='text' style={input} required className='form-control' placeholder='Enter Username'/>
                                </td>
                            </tr>
                        </div>
                        <div className='form-group mb-3'>
                            <tr>
                                <td>
                                <FaLock/>
                                </td>
                                <td>
                                <input type='password' style={input} className='form-control' required placeholder='Enter Password'/>
                                </td>
                            </tr>
                        </div>
                        <Link to='/'><button className='btn btn-danger mb-2'  style={{width:'100%'}} >Login</button></Link>
                    </form>
                </div>
            </div>
            <div className='col-md-4'></div>
            
        </div>
    </div>
  );
}

export default Login;