import React, { useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import auth from '../../Shared/firbase.init';




const Navbar = () => {
  const [user]=useAuthState(auth);
   const [signOut, loading] = useSignOut(auth);
    if(loading){
      <Loading></Loading>
    }
    return (
      <div class="navbar bg-base-100">
        <div class="navbar-start mb-4">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li tabindex="0">
                <Link to="/contactus">Contact us</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl italic">INSAID</a>
        </div>
        <div class="navbar-end  hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contactus">Contact us</Link>
            </li>
            <li>
              
                {user ? (
                <a onClick={() => signOut()}>Signout</a>
              ) : (
                <Link to="/login">Login</Link>
              )}
              
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;