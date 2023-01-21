import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import auth from '../../Shared/firbase.init';

const Signup = () => {
    const [createUserWithEmailAndPassword, user,loading] =
      useCreateUserWithEmailAndPassword(auth);
      const navigate=useNavigate();
      const handleSubmit=event=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        createUserWithEmailAndPassword(email,password)

      }
      if(user){
        navigate('/home')
      }
      if(loading)
      {
        return <Loading></Loading>
      }
    return (
      <div>
        <div className="flex h-screen justify-center items-center ">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="mx-auto">
              <h2 class="text-2xl font-semibold text-center">Register</h2>
              <form onSubmit={handleSubmit}>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <label class="input-group">
                    <input
                      name="name"
                      type="text"
                      placeholder="enter your name"
                      class="input input-bordered"
                      required
                    />
                  </label>
                </div>
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
                      required
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
                      required
                    />
                  </label>
                </div>
                <input
                  type="submit"
                  value="Register"
                  class="btn btn-primary btn-wide font-semibold text-white mb-8"
                />
              </form>
              <p className="mb-5 text-sm">
                Already have an account?{" "}
                <Link className="text-neutral" to="/login">
                  Click here to login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;