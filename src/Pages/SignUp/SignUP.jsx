import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm, } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const SignUP = () => {
  const {createUser,updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
  
        toast.success('Your Account Successfully completed');
  
        // Return the promise for chaining
        return updateUserProfile(data.name, data.photoURL);
      })
      .then(() => {
        reset();
        navigate('/');
      })
      .catch(error => {
        console.error(error);
        toast.error(error.message);
      });
  };
  
  return (
    <>
    <Helmet>
        <title>Bistro Boss || Sugn UP</title>
      </Helmet>
    <div className="loginImg hero min-h-screen relative">
      <div className="hero-content flex-col md:flex-row relative">
        <div className="text-center md:w-1/2 lg:text-left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            iusto, eum officiis sunt tempora architecto dolore dolor. Natus
            minus autem tempore molestiae, optio nulla ut deserunt,
          </p>
        </div>
        <div className="card md:w-1/2 max-w-sm ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Your name"
                className="input input-bordered"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.name && <span>Photo URL is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                name="email"
                placeholder="email"
                className="input input-bordered"
                value={register.email}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                type="text"
                {...register("password", {
                  required: true,
                  maxLength: 12,
                  minLength: 6,
                  pattern:
                    /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,12}/,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered"
                value={register.password}
              />
              {errors.password?.type === "pattern" && (
                <p className="text-sm text-red-500">
                  Password must contain at least one uppercase letter, one
                  digit, and one special character (@$!%*#?&)
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary bg-[#D1A054] duration-1000 hover:bg-[#f3a838] outline-none border-none"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="mx-auto -mt-6">
            <small>
              <span className="text-[#D1A054]">Already registered? Go to</span>
              <Link className="font-medium" to="/login">
                Sign In
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUP;
