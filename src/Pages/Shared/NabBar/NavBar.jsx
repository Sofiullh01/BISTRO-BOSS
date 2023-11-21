import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";
import cartIcon from '../../../assets/icon/cart.png'

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res);
        toast.success("User Sign Out Success");
      })
      .then((err) => {
        console.log(err);
      });
  };

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        // উপরে স্ক্রোল হচ্ছে
        document.getElementById("navbar").style.display = "block";
        document.getElementById("navbar").style.padding = "20px 10px";
      } else {
        // নীচে স্ক্রোল হচ্ছে
        document.getElementById("navbar").style.display = "none";
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    // কম্পোনেন্ট আনমাউন্ট হলে ইভেন্ট লিস্টেনার সরাতে ক্লিনআপ ফাংশন
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navLinks = (
    <>
      <li className="font-medium">
        <Link to="/">Home</Link>
      </li>
      <li className="font-medium">
        <Link to="/menu">Our Menu</Link>
      </li>
      <li className="font-medium">
        <Link to="/order/salad">Order Now</Link>
      </li>
      <li className="font-medium">
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to='/'>
          <div className=" relative">
            <img src={cartIcon} alt="" width={50}  />
            <div className=" py-1 px-1.5 bg-[#FF0000] absolute top-5 right-0 rounded-full">+0</div>
          </div>
        </Link>
      </li>
      {user ? (
        <>
          <li onClick={handleLogOut} className="btn font-medium btn-sm">
            Log Out
          </li>
        </>
      ) : (
        <>
          <li className="btn">
            <Link to="/login">Log In</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div
        className="navbar fixed bg-black text-white  z-10 bg-opacity-40 max-w-6xl"
        // id="navbar"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className=" text-3xl  font-Cinzel font-extrabold btn-ghost normal-case rounded-md px-2">
            <Link to="/">
              BISTRO BOSS{" "}
              <span className="block text-lg font-normal tracking-widest">
                Restaurant
              </span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
