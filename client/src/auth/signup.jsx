import React, {useRef, useState} from 'react'
import { useNavigate  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./signup.css"
function signup() {
  const inputRef = useRef();
  const [prev, setPrev] = useState(true);
  const [next, setNext] = useState(false);
  const [image, setImage] = useState("");

  const Navigate = useNavigate();
  const handleChange = (e)=>{
    const file = e.target.files[0];
    if(file){
      setImage(URL.createObjectURL(file))
    }
  }
  console.log(image)
  return (
    <div className='signup' >
      
      {/* <Link to="/home">Home</Link> */}
      {prev &&
      (<form className='form-signup'>
        <span class="material-symbols-outlined  logo-sign">person</span>
        <h3>Welcome</h3>
        <p className='p-sign'>Sign Up to start your chating</p>
            <label >E-mail:
            <input type="text" 
            placeholder='e-mail'
            />
            </label>
            <label >
              password:
            <input type="password" 
            placeholder='password'
            />
            </label>
           
        <div className="btn-form">
          <button onClick={()=>{
          setPrev(false)
          setNext(true)}} type='submit'>Next &#x2192;</button>
          
        </div>
        <p className='log-link'> Do you have account? <Link to="/login"><span>Login in</span></Link></p>
      </form>)}
      

      {next && (
         <form className='form-signup'>
          <label htmlFor="" className='img-form'>
            <div class="img-forms">
              <img
                    src={image}
                    
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginBottom: "5px"
                    }}
                  />
            </div>
            
            <h6 onClick={() => inputRef.current.click()} type='button' className='btn-upload-pdp'>
        Upload Profile Picture
      </h6>
           <input type="file" 
          accept="image/*"
          hidden
          ref={inputRef}
          onChange={handleChange}
          /> 
          </label>
          <label >
            Name:
        <input type="text" 
        placeholder='Name'
        />
        </label>
        <label >
          User Name: <input type="text" 
        placeholder='User Name'
        />
        </label>
         <label >
          Birthday Date:
        <input type="date"
        className='date' />
        </label>
        <div className="btn-next">
        
          <button 
          type='button'
          onClick={()=>{
          setPrev(true)
          setNext(false)}}
          >&#x2190; previous</button>
       <button  
       
       onClick={()=>{Navigate("/livechat")}}>Login &#x2192;</button>
        
          </div>
      </form>
      )}
    </div>
  )
}

export default signup
