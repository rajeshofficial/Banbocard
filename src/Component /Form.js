import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Select from 'react-select';
import countryList from 'react-select-country-list'


export default function Form() {
    const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');


  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(enteredEmail);

    setIsValidEmail(isValid);
  };

  const handleConfirmPasswordChange = (e) => {
    const enteredConfirmPassword = e.target.value;
    setConfirmPassword(enteredConfirmPassword);
  };
  const options = countryList().getData();
  

  return (
    <div>
 <form class="row g-3">
 <div class="col-md-6">
    <label for="FirstName" class="form-label">First Name </label>
    <input type="name" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="LastName" class="form-label">Last Name</label>
    <input type="name" class="form-control" id="inputPassword4"/>
  </div>
  
  <div className="col-md-6">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${isValidEmail ? '' : 'is-invalid'}`}
            id="inputEmail"
            value={email}
            onChange={handleEmailChange}
          />
          {!isValidEmail && (
            <div className="invalid-feedback">Please enter a valid email address.</div>
          )}
        </div>
  <div class="col-md-6">
  <label for="Contact Number" class="form-label">Contact Number</label>
  <input type="tel" class="form-control" id="inputEmail4" placeholder="Eg +44 7474747474" />
</div>







<div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className={`form-control ${password === confirmPassword ? '' : 'is-invalid'}`}
            id="inputConfirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {password !== confirmPassword && (
            <div className="invalid-feedback">Passwords do not match.</div>
          )}
        </div>

  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>






{/* 

  <div className="col-md-6">
          <label htmlFor="inputCountry" className="form-label">
            Country
          </label>
          <CountrySelect
            className="form-control"
            value={selectedCountry}
            onChange={(value) => setSelectedCountry(value)}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <StateSelect
            className="form-control"
            country={selectedCountry}
            value={selectedState}
            onChange={(value) => setSelectedState(value)}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <CitySelect
            className="form-control"
            country={selectedCountry}
            state={selectedState}
            value={selectedCity}
            onChange={(value) => setSelectedCity(value)}
          />
        </div> */}
        



  <div className="col-md-6">
          <label htmlFor="inputCountry" className="form-label">
            Country
          </label>
          <Select
            options={options}
            value={selectedCountry}
            onChange={(value) => setSelectedCountry(value)}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>

  <div class="col-md-2">
    <label for="inputZip" class="form-label">PostCode</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-md-6">
    <label for="Email" class="form-label">Website</label>
    <input type="text/html" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="Email" class="form-label">Instagram</label>
    <input type="text/html" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="Linkedin" class="form-label">Linkedin</label>
    <input type="text/html" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
 
    </div>
  )
}
