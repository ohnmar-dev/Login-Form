import React,{Component} from 'react';
import style from './App.module.css';
class LoginDesign extends Component {
    state = {  }
    render() { 
        return ( 
           <div className={style.login}>
                
                <h2>LOGIN</h2>
              
               {/* this is email input */}
                   <div className={style.formInput}>
                   <i className="fas fa-envelope "></i>
                   <input type="email" name="name"
                    placeholder="Email"
                    ></input>
                   </div>

                    {/* this is password input */}
                    <div className={style.formInput}>
                    <i class="fa fa-lock"></i>
                    <input type="password" name="name"
                    placeholder="Password"
                    ></input>
                    </div>

                    {/* this is checked box */}
                    <div className={style.CheckInput}>
                    <input type="checkbox" 
                    ></input>
                   <label>Remember me</label>
                    </div>
                
                    {/* this is button */}
                    <div className={style.button}>
                   <input type="submit" value="LOGIN"/>
                   </div>
                   Or Login with
                   {/* this is facebook link */}
                    <div className={style.link}>
                        <span><i className="fab fa-facebook-square" style={{"margin-right":"10px","color":"rgb(24, 55, 138)"}}></i><a href="https://www.facebook.com/">Facebook</a> </span>
                    
                    {/* this is gmail link */}
                   
                    <span style={{"margin-left":"10px"}}><i className="fab fa-google"  style={{"margin-right":"10px"}}></i><a href="https://www.gmail.com/">Gmail</a> </span>
                    </div>
                    <p>Not a member? <a href="">Sign Up now</a></p>
           </div>
         );
    }
}
 
export default LoginDesign;