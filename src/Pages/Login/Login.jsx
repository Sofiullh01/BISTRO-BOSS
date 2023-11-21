import {useContext, useEffect,useState} from 'react';
import toast from 'react-hot-toast';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import './login.css';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const {loginUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';


  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;
    console.log(email, password, captcha);

    loginUser(email,password)
    .then(result => {
      const loginUser = result.user;
      console.log(loginUser)
      toast.success('Login user successfoly')
      navigate(from,{replace: true})
    })
    .then(err=>{
      toast.error('something problems');
      console.log(err)
    })
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value)){
      setDisabled(false);
    }else{
      setDisabled(true);
      toast.error('Captcha Does Not Match');
    }
  };

  return (
    <>
    <Helmet>
        <title>Bistro Boss || Sugn In</title>
      </Helmet>
    <div className="loginImg hero min-h-screen relative">
      <div className="hero-content flex-col md:flex-row relative">
        <div className="text-center md:w-1/2 lg:text-left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto, eum officiis sunt tempora
            architecto dolore dolor. Natus minus autem tempore molestiae, optio nulla ut deserunt, accusantium error
            esse repellendus accusamus asperiores est voluptatibus quo exercitationem tempora dignissimos corrupti
            aliquam.
          </p>
        </div>
        <div className="card md:w-1/2 max-w-sm ">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate/>
              </label>
              <input
                type="text"
                name="captcha"
                onBlur={handleValidateCaptcha}
                placeholder="Type the text above"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled} className="btn btn-primary" type="submit" value="Log In" />
            </div>
          </form>
          <p className='mx-auto -mt-6'><small>New Here? <Link className='font-medium'
           to='/register'>Register</Link></small></p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
