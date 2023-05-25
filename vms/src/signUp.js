import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './style1.css';
const SignUp=()=> {
    const styl={
        padding:'20px',
        background:'white',
        marginTop:'10%',
        boxShadow:'4px 3px 11px black',
        opacity:'0.8',
        borderRadius:'15px'
    }
    const h2={
        textAlign:'center',
        textDecoration:'underline',
        marginBottom:'8%'
    }
    const input={
        borderBottom:'1px solid black',
        borderLeft:'none',
        borderRight:'none',
        borderTop:'none',
        background:'inherit',
        borderRadius:'1px'
    }
  return (
    <div className='container'>
        <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4' >
            <div style={styl} id='sgnp'>
                <h3 style={h2}>Sign Up</h3>
                <hr/>
                <form className='form' id='signup' >
                        <div className='form-group mb-3'>
                        <input type='text' style={input} className='form-control' placeholder='Enter firstname'/>
                        </div>
                        <div className='form-group mb-3'>
                        <input type='text' style={input} className='form-control' placeholder='Enter Lastname'/>
                        </div>
                        <div className='form-group mb-3'>
                        <input type='email' style={input} className='form-control' placeholder='Enter email id'/>
                        </div>
                        <div className='form-group mb-3'>
                        <input type='password' style={input} className='form-control' placeholder='Create Password'/>
                        </div>
                        <button className='btn btn-success mb-2' style={{width:'100%'}}>SignUp</button>
                        <p>Already have an account <Link to='/loginPage'>Login</Link></p>
                </form>
            </div>
        </div>
        <div className='col-md-4'></div>
        </div>
    </div>
  );
}

export default SignUp;