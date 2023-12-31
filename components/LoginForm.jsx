import Link from 'next/link';


export default function LoginForm() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: "100%" }}>
      <header>
        <a className="wrapper">
          <img src="images/logo-icon.png" alt="Logo" className="app-name-logo-icon"></img>
          <h1 className="app-name">App Name</h1>
        </a>
      </header>
      <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="login-white-container">
          <p className="login-form-title">Log in</p>
          <form className="">
            <input
              type="text"
              placeholder="Email"
            />
            <input
              type="password"
              placeholder="Password"
            />
            <div className="remember-me-checkbox">
              <input type="checkbox" value="lsRememberMe" id="rememberMe" />
              <label for="rememberMe">Remember me</label>
            </div>
            <button className="login-button" type="submit">Login</button>
          </form>
        </div>
      </div>

      <footer>
        <div className="contact-footer">
          <p>Contact</p>
        </div>
        <div className="privacy-footer">
          <p>Privacy</p>
        </div>
        <div className="copyright-footer">
          <p>Copyright</p>
        </div>
      </footer>
    </div>
  );
}
