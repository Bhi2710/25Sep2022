import Fb from "../assetes/facebook.png";
import link from "../assetes/linkedin.png";
import google from "../assetes/google-plus.png";

const Main = () =>{
    return(
        <div class="main">
        <div class="bodyContainer">
            <div class="leftContainer">
                <div class="companyName">
                    <span class="Company">Company</span><span>Name</span>
                </div>
                <div class="Center">
                    <span class="sign">Sign in to Account</span>
                </div>
                    <hr />
                <div>
                    <span class="Center">
                        <img src={Fb} alt="facebooh" />
                        <img src={link} alt="linkedin" />
                        <img src={google} alt="google+" />
                    </span>
                    <span class="orUse">Or use your email account</span>
                </div>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                </form>
                <div class="Checkbox">
                    <input type="checkbox" /><span class="rememberMe">Remember me</span><span class="forgetPassword">Forgot Password?</span>
                </div>
                <div class="Center">
                    <button class="button1">Sign in</button>
                </div>
                <div class="leftBottom">
                    <span class="privacy">Privacy Policy</span><li></li><span>Terms & Conditions</span>
                </div>
            </div>
            <div class="rightContainer">
                <div class="h2">
                    <span>Hello, Friend!</span>
                </div>
                <div class="empty"></div>
                <div class="Paragraph">
                    <p>Fill up personal information and</p>
                </div>
                <div class="Paragraph">
                    <p>start journey with us.</p>
                </div>
                <div class="Center">
                    <button class="button2">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Main;