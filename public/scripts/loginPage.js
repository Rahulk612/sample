function loginPage(){
    return `<div id="mainPageModel">
    <div class="mainContent">
        <div class="close">+</div>
        <div id="optionsForLogin">
            <div class="studentLogin"><a id="studentName" href="#">Student</a></div>
            <div class="employerLogin"><a id="employerName" href="#">Employer / T&P</a></div>
        </div>
        <div class="forGoogle">
            <a class="forGoogleClick" href="/login/google"><span><img id="googleIcon" src="/images/googleLogo.png" alt=""></span>Login with Google</a>
        </div>
        <div class="forOr">
            <div class="orBrfore"></div>
            <div><p>OR</p></div>
            <div class="orAfter"></div>
        </div>
            <div class="inputModel">
                <form action="/internshala/products/jobs" method="post">
                    <p id="email">Email</p>
                    <input class="inputs" id="emailLogin" type="email" name="email" placeholder="jhon@example.com">
                    <div id="emailMessage">
                        <p id="emailNameAlert"><img id="alertImg" src="./images/alert.png"> This field is required</p>
                    </div>
                    <p id="password">Password</p>
                    <input class="inputs" id="passwordLogin"  type="password" name="password" placeholder="Must be atleast 6 characters">
                    <div id="passMessage">
                        <p id="passNameAlert"><img id="alertImg" src="./images/alert.png"> This field is required</p>
                    </div>
                    <div class="forgotPass">
                        <a href=""><p>Forgot Password?</p></a>
                    </div>
                    <a  href="#"><input type="submit" value="Login"class="loginButton"></input></a>
                    
                    <div class="newUser">
                        <p>New to intershala? Register(<span><a href="#">Student </a></span>/<span><a href="#"> Employer</a></span>)</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>`;
}


export default loginPage