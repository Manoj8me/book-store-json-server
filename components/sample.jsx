import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Registration() {
    const [details, setDetails] = useState({
        id: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        country: "",
        dob: ""
    });

    const [errors, setErrors] = useState({
        id: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        country: "",
        dob: ""
    });

    const handleSetDetails = (e) => {
        const { name, value } = e.target;
        setDetails(prevState => ({
            ...prevState, [name]: value
        }));
        setErrors(prevState => ({
            ...prevState, [name]: "" // Clear error for that field when user types
        }));
    };

    const validate = () => {
        let isProceed = true;
        let newErrors = {};

        // Validate id
        if (!details.id) {
            newErrors.id = "Username cannot be blank";
            isProceed = false;
        }

        // You can add more validations for other fields here similarly...

        setErrors(newErrors);
        return isProceed;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Data submitted successfully");
        }
    };

    return (
        <div>
            <h4>User Registration Form</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User Name</label>
                    <input type="text" name='id' value={details.id} onChange={handleSetDetails} />
                    {errors.id && <span style={{ color: 'red' }}>{errors.id}</span>}
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name='password' value={details.password} onChange={handleSetDetails} />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                </div>

                <div>
                    <label>First Name</label>
                    <input type="text" name='firstName' value={details.firstName} onChange={handleSetDetails} />
                    {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
                </div>

                <div>
                    <label>Last Name</label>
                    <input type="text" name='lastName' value={details.lastName} onChange={handleSetDetails} />
                    {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
                </div>

                <div>
                    <label>Email</label>
                    <input type="text" name='email' value={details.email} onChange={handleSetDetails} />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </div>

                <div>
                    <label>Phone Number</label>
                    <input type="text" name='phone' value={details.phone} onChange={handleSetDetails} />
                    {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
                </div>

                <div>
                    <label>Address</label>
                    <textarea name='address' value={details.address} onChange={handleSetDetails} />
                    {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
                </div>

                <div>
                    <label>City</label>
                    <input type="text" name='city' value={details.city} onChange={handleSetDetails} />
                    {errors.city && <span style={{ color: 'red' }}>{errors.city}</span>}
                </div>

                <div>
                    <label>State</label>
                    <input type="text" name='state' value={details.state} onChange={handleSetDetails} />
                    {errors.state && <span style={{ color: 'red' }}>{errors.state}</span>}
                </div>

                <div>
                    <label>Country</label>
                    <input type="text" name='country' value={details.country} onChange={handleSetDetails} />
                    {errors.country && <span style={{ color: 'red' }}>{errors.country}</span>}
                </div>

                <div>
                    <label>Date Of Birth</label>
                    <input type="date" name='dob' value={details.dob} onChange={handleSetDetails} />
                    {errors.dob && <span style={{ color: 'red' }}>{errors.dob}</span>}
                </div>

                <button type='submit'>Register</button>
                <Link to="/">Back</Link>
            </form>
        </div>
    );
}

export default Registration;
