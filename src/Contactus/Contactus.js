import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Shared/firbase.init';

const Contactus = () => {
    const [user]=useAuthState(auth);
    return (
      <div className="flex h-screen justify-center items-center ">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="mx-auto">
            <h2 class="text-2xl font-semibold text-center">Contact us</h2>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <label class="input-group">
                  <input
                    name="text"
                    type="text"
                    class="input input-bordered"
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
                    value={user.email}
                    class="input input-bordered"
                    readOnly
                  />
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Write your query</span>
                </label>
                <label class="input-group mb-6">
                  <input
                    name="text"
                    type="text"
                    placeholder="Enter query"
                    style={{height:'70px', width:'220px'}}
                    className="h-11 w-40 input input-bordered"
                  />
                </label>
              </div>
              <input
                type="submit"
                value="Contact us"
                class="btn btn-primary btn-wide font-semibold text-white mb-8"
              />
          </div>
        </div>
      </div>
    );
};

export default Contactus;