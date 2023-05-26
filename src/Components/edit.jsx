import { React, useEffect } from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";


const edit = () => {
  /* eslint-disable */
  const [date, setDate] = useState();
  const [regNo, setRegNo] = useState();
  const [name, setName] = useState();
  const [interest, setInterest] = useState();
  const [bio, setBio] = useState();
  
  const uid = auth.currentUser.uid;
  const run = async()=>{
    const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        setName(docSnap.data()["name"]);
        setDate(docSnap.data()["date"]);
        setRegNo(docSnap.data()["regNo"]);
        setInterest(docSnap.data()["interest"]);
        setBio(docSnap.data()["bio"]);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
  }
  return (
    <>
      <div class="container-xl px-4 mt-4">
        <hr class="mt-0 mb-4" />
        <div class="row">
          <div class="col-xl-4">
            {/* <!-- Profile picture card--> */}
            <div class="card mb-4 mb-xl-0">
              <div class="card-header">Profile Picture</div>
              <div class="card-body text-center">
                {/* <!-- Profile picture image--> */}
                <img
                  class="img-account-profile rounded-circle mb-2"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                />
                {/* <!-- Profile picture help block--> */}
                <div class="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                {/* <!-- Profile picture upload button--> */}
                <button class="btn btn-primary" type="button">
                  Upload new image
                </button>
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            {/* <!-- Account details card--> */}
            <div class="card mb-4">
              <div class="card-header">Edit Profile</div>
              <div class="card-body">
                <form>
                  {/* <!-- Form Group (username)--> */}
                  <div class="col-md-6">
                    <label class="small mb-1" for="regNo">
                      Registration Number
                    </label>
                    <input
                      class="form-control"
                      id="regNo"
                      type="number"
                      placeholder="Enter your Registration Number"
                      value={regNo}
                    />
                  </div>
                  {/* <!-- Form Row--> */}
                  <div class="row gx-3 mb-3">
                    {/* <!-- Form Group (first name)--> */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="Name">
                        Name
                      </label>
                      <input
                        class="form-control"
                        id="Name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                      />
                    </div>
                  </div>

                  {/* <!-- Form Row        --> */}
                  <div class="row gx-3 mb-3">
                    {/* <!-- Form Group (organization name)--> */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="interest">
                        Interest/Hobbies
                      </label>
                      <input
                        class="form-control"
                        id="interest"
                        type="text"
                        placeholder="Enter your Interest/Hobbies"
                        value=""
                      />
                    </div>
                    {/* <!-- Form Group (location)--> */}
                  </div>
                  <div>
                    <div class="col-md-6">
                      <label class="small mb-1" for="Bio">
                        Bio
                      </label>
                      <input
                        class="form-control"
                        id="Bio"
                        type="text"
                        placeholder="Enter your Bio"
                        value=""
                      />
                    </div>
                  </div>
                  {/* <!-- Form Row--> */}
                  <div class="row gx-3 mb-3">
                    {/* <!-- Form Group (phone number)--> */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputPhone">
                        Phone number
                      </label>
                      <input
                        class="form-control"
                        id="inputPhone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value="555-123-4567"
                      />
                    </div>
                  </div>
                  <div>
                    {/* <!-- Form Group (birthday)--> */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputBirthday">
                        Birthday
                      </label>
                      <input
                        class="form-control"
                        id="birthday"
                        type="date"
                        name="birthday"
                        placeholder="Enter your birthday"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <br />
                  {/* <!-- Save changes button--> */}
                  <div class="d-flex justify-content-between">
                    <button class="btn btn-primary" type="button">
                      Save changes
                    </button>
                    <button class="btn btn-primary" type="button">
                      Log out
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default edit;
