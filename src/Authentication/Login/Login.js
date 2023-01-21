import React from 'react';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import auth from '../../Shared/firbase.init';


const Login = () => {
    const [signInWithEmailAndPassword, user,loading] =
      useSignInWithEmailAndPassword(auth);
      const navigate=useNavigate();

      const handleSubmit=event=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        signInWithEmailAndPassword(email,password);
        console.log(email,password);


      }
              if (user) {
                navigate("/home");
              }
               if (loading) {
                 return <Loading></Loading>;
               }
      
    return (
      <div className="flex h-screen justify-center items-center ">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="mx-auto">
            <h2 class="text-2xl font-semibold text-center">Login</h2>
            <form onSubmit={handleSubmit}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <label class="input-group">
                  <input
                    name="email"
                    type="email"
                    placeholder="enter your email"
                    class="input input-bordered"
                  />
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <label class="input-group mb-6">
                  <input
                    name="password"
                    type="password"
                    placeholder="enter your password"
                    class="input input-bordered"
                  />
                </label>
              </div>
              <input
                type="submit"
                value="Login"
                class="btn btn-primary btn-wide font-semibold text-white mb-8"
              />
            </form>
            <p className='mb-5 text-sm'>
              New to Insaid? <Link className='text-neutral' to="/signup">Register Now</Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;