import React,{useState} from "react";

const Contact = () => {
  const[userData,setUserData]=useState({
  firstName:"",
  lastName:"",
  phone:"",
  email:"",
  address:"",
  message:"",
  });
  let name,value;
  const postUserData=(event)=>{
    name=event.target.name;
    value=event.target.value;
    setUserData({...userData,[name]:value});
  };

  const submitData = async(event)=>{
    event.preventDefault();
    const{firstName,lastName,phone,email,address,message}=userData;
     if(firstName && lastName && phone && email && address && message){
     const store =fetch("https://reactwithfirebase-7cb22-default-rtdb.firebaseio.com/userDataRecords.json",{method:"POST",headers:{
      "Content-Type":"application/json",
     },
     body:JSON.stringify({
      firstName,lastName,phone,email,address,message
     }),
      
     });
     if(store){
      setUserData({
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        address:"",
        message:"",
      });
      alert("store succesfully");
     }else{
      alert("failed to store");
     }
    }else{
      alert("failed to store");

    }

  }
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold" >
                    Contact us <br />
                    for any query
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, itaque!
                  </p>
                  <figure>
                    <img
                      src="images/coder.webp"
                      alt="contactpic"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          placeholder="First Name"
                          className="form-control"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          placeholder="Last Name"
                          className="form-control"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          placeholder="Phone Number"
                          className="form-control"
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="email"
                          id=""
                          placeholder="Your Email"
                          className="form-control"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name="address"
                          id=""
                          placeholder="Your Address"
                          className="form-control"
                          value={userData.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name="message"
                          id=""
                          placeholder="Enter Your Messsage"
                          className="form-control"
                          value={userData.message}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style contact-input-field">
                      <input
                        class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                      {/* <label class="form-check-label" className="main-hero-para"> */}
                        I agreed all terms and conditions.
                      {/* </label> */}
                    </div>
                    <button type="submit" className="btn btn-style w-100" onClick={submitData}>Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
