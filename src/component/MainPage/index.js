import {Component} from 'react'
import './index.css'

class MainPage extends Component{
    state={isGetStarted:false,isStartReading:false}

   renderScreen=()=>{
        return(
            <div className='get-started'>
            <div className="icon">
            <p><a href="https://medium.com/">x</a></p>
            </div>
                
                <h1 className="join-medium">Join Medium.</h1>
                <button type="button" className='logobutton'>
                    
                        <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?operation=register&state=google-%7Chttps%3A%2F%2Fmedium.com%2F%3Fsource%3Dregister--------------------------lo_home_nav-----------%7Cregister&access_type=online&client_id=216296035834-k1k6qe060s2tp2a2jam4ljdcms00sttg.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fmedium.com%2Fm%2Fcallback%2Fgoogle&response_type=id_token%20token&scope=email%20openid%20profile&nonce=b8751794128504c0bc2900423250851a1a7878560aefeadcb6cdf263718f48a2&flowName=GeneralOAuthFlow">
                        <div className='login-cont'>
                        <img src="https://res.cloudinary.com/dwey6nqcg/image/upload/v1652931891/bdy_vohq9d.jpg" className="logo" alt="google"/>
                        <p>Sign up with Google</p>
                        </div>
                        </a>
                    
                </button>
                <button type="button" className='logobutton'>
                    
                        <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=542599432471018&kid_directed_site=0&app_id=542599432471018&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv5.0%2Fdialog%2Foauth%3Fclient_id%3D542599432471018%26redirect_uri%3Dhttps%253A%252F%252Fmedium.com%252Fm%252Fcallback%252Ffacebook%26scope%3Dpublic_profile%252Cemail%26state%3Dfacebook-%257Chttps%253A%252F%252Fmedium.com%252F%253Fsource%253Dregister--------------------------lo_home_nav-----------%257Cregister%257C1fab48c6e52341eeb9a0c4a06e219286%257Ca7ba7044bce40f520be9f5bb31820358e703138dd2931e65368c1d8012153947%26response_type%3Dtoken%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D9121c166-cd3e-42e5-be83-1c95d5bb8aa9%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fmedium.com%2Fm%2Fcallback%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Dfacebook-%257Chttps%253A%252F%252Fmedium.com%252F%253Fsource%253Dregister--------------------------lo_home_nav-----------%257Cregister%257C1fab48c6e52341eeb9a0c4a06e219286%257Ca7ba7044bce40f520be9f5bb31820358e703138dd2931e65368c1d8012153947%23_%3D_&display=page&locale=en_GB&pl_dbl=0">
                        <div className='login-cont'>
                        <img src="https://res.cloudinary.com/dwey6nqcg/image/upload/v1652934430/facebook-icon_kdzztg.png" className="logo" alt="facebook"/>
                        <p>Sign up with Facebook</p>
                        </div>
                        </a>
                    
                </button>
                <button type="button" className='logobutton'>
                    
                        <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?operation=register&state=google-%7Chttps%3A%2F%2Fmedium.com%2F%3Fsource%3Dregister--------------------------lo_home_nav-----------%7Cregister&access_type=online&client_id=216296035834-k1k6qe060s2tp2a2jam4ljdcms00sttg.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fmedium.com%2Fm%2Fcallback%2Fgoogle&response_type=id_token%20token&scope=email%20openid%20profile&nonce=b8751794128504c0bc2900423250851a1a7878560aefeadcb6cdf263718f48a2&flowName=GeneralOAuthFlow">
                        <div className='login-cont'>
                        <img src="https://res.cloudinary.com/dwey6nqcg/image/upload/v1652934604/mail-post-envelope-icon-shape-postage-logo-symbol-email-communication-vector-id1188904068_lwlpzp.jpg" className="logo" alt="email"/>
                        <p>Sign up with Email</p>
                        </div>
                        </a>
                    
                </button>
                <p>Already have an account?<span>Sign in</span></p>
                <p className="privacy">Click “Sign Up” to agree to Medium’s <a className="a" href="https://policy.medium.com/medium-terms-of-service-9db0094a1e0f"> Terms of Service</a> and acknowledge that<br/> Medium’s <a href="https://policy.medium.com/medium-privacy-policy-f03bf92035c9" className="a">Privacy Policy</a> applies to you.</p>
            </div>
        )
    }
    onGetStarted=()=>{
        this.setState({isGetStarted:true})
    }

    renderMain=()=>{
        return(
            <div className="main-container">
            <div className="nav-container">
            <div>
            <img src="https://res.cloudinary.com/dwey6nqcg/image/upload/v1652840648/images_1_.2_qmbl0g.jpg" className="image" alt="logo"/>
            </div>
                <div className='cont'>
                    <p className="para"><a href="https://medium.com/about?autoplay=1">Our story</a></p>
                    <p className="para"> <a href="https://medium.com/membership">Membership</a></p>
                    <p className="para"> <a href="https://medium.com/creators">Write</a></p>
                    <p className="para">Sign In</p>
                    <button type="button" className='button b1' onClick={this.onGetStarted}>Get Started</button>
                </div>
            </div>
            <hr className='horizontal'/>
            <div className='content'>
            <h1 className="head">Stay curious.</h1>
            <p className="description">Discover stories,thinking and<br/>expertise from writers on any topic.</p>
            <button type="button" className='button b2'>Start reading</button>
            
            </div>
            </div>
        )
    }
    
   render(){
       const {isGetStarted}=this.state
       const {isStartReading}=this.state
        return(
            <div className="main">
                  {isGetStarted?this.renderScreen():this.renderMain()}
                  {isStartReading?this.renderScreen():null}
            </div>
            
        )
    }
}
export default MainPage