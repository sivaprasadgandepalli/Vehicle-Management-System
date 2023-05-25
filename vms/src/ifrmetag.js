import Iframe from 'react-iframe'
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from './images/img.jpg'
export default function Map(){
    return(
        <>
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-md-4'>
                <img src={Img} alt="logo" className='i1'/>
                </div>
                <div className='col-md-8' style={{background:'lightgreen'}}>
                    <h3 style={{textAlign:"center"}}>contact</h3>
                    <form className='form'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group mt-3 mb-2'>
                                    <input type='text' className='form-control' placeholder='Username'/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group mt-3 mb-2'>
                                    <input type='email' className='form-control' placeholder='email'/>
                                </div>
                            </div>
                        </div>
                        <div className='form-group mb-3'>
                            <input type='email' className='form-control' placeholder='subject'/>
                        </div>
                        <div className='form-group mb-3'>
                            <textarea className='form-control'>Type Message</textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className='container mt-3' style={{boxShadow:'3px 5px 7px 5px black'}}>
            <div className='row'>
            <h2 style={{textAlign:'center',textDecoration:'underline'}}>Find Us</h2>
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30510.29243438077!2d82.
            0419953090155!3d17.083090171177147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3
            a3783210b6a2a7f%3A0xe9651e406e38686a!2sSurampalem%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!
            4v1680632200805!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
        </>
    )
}