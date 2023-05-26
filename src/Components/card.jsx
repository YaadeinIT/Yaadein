import React from "react";

const Card = (props) => {
  return (
    <>
      <section class="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-6 mb-4 mb-lg-0">
              <div class="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div class="row g-0">
                  <div
                    class="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      class="img-fluid my-5"
                      style={{ width: "80px;" }}
                    />
                    <h5 style={{ color: "black" }}>{props.name}</h5>
                    <p style={{ color: "black" }}>{props.bio}</p>
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body p-4">
                      <h6>{props.name}</h6>
                      <hr class="mt-0 mb-4" />
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Email</h6>
                          <p class="text-muted">{props.email}</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Phone</h6>
                          <p class="text-muted">{props.phone}</p>
                        </div>
                      </div>
                      <h6>Interest/Hobbies</h6>
                      <hr class="mt-0 mb-4" />
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Recent</h6>
                          <p class="text-muted">{props.interest}</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Relationship Status</h6>
                          <p class="text-muted">{props.relationship}</p>
                        </div>
                      </div>
                      <div class="d-flex justify-content-start">
                        <a href="#!">
                          <i
                            class="fa fa-facebook fa-lg"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <a href="#!">
                          <i
                            class="fa fa-twitter ms-4 fa-lg"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <a href="#!">
                          <i
                            class="fa fa-instagram ms-4 fa-lg"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
