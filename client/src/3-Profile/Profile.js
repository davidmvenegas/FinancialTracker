import './profile.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div>
            <div className="profile-container">
                <Link className='profile-go-back' to='/main'>Go back</Link>
                <div className="profile-wrapper">
                    <h1 className="profile-title">Your Profile</h1>
                    <form className="profile-form">
                        <div className="profile-input-wrapper">
                            <span className="profile-input-label">First Name</span>
                            <input className="profile-input" type="text" />
                            <span className="profile-input-focus"></span>
                        </div>
                        <div className="profile-input-wrapper">
                            <span className="profile-input-label">Last Name</span>
                            <input className="profile-input" type="text" />
                            <span className="profile-input-focus"></span>
                        </div>
                        <div className="profile-input-wrapper">
                            <span className="profile-input-label">Email</span>
                            <input className="profile-input" type="email" />
                            <span className="profile-input-focus"></span>
                        </div>
                        <div className="profile-input-wrapper">
                            <span className="profile-input-label">Upload Profile Picture</span>
                            <input className="profile-input" id='photo-file-input' type="file" accept="image/png, image/gif, image/jpeg" />
                            <span className="profile-input-focus"></span>
                        </div>
                        <div className="profile-input-wrapper">
                            <span className="profile-input-label">Age</span>
                            <input className="profile-input" type="number" />
                            <span className="profile-input-focus"></span>
                        </div>
                        <div className="profile-input-wrapper">
                            <span className="profile-input-label">Gender</span>
                            <select className="profile-input">
                                <option disabled selected hidden>---</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="nonbinary">Non-Binary</option>
                            </select>
                            <span className="profile-input-focus"></span>
                        </div>
                        <div className="profile-input-wrapper">
                            <span className="profile-input-label">Marital Status</span>
                            <select className="profile-input">
                                <option disabled selected hidden>---</option>
                                <option value="single">Single</option>
                                <option value="maried">Maried</option>
                                <option value="divorced">Divorced</option>
                                <option value="widowed">Widowed</option>
                            </select>
                            <span className="profile-input-focus"></span>
                        </div>
                        <div className="profile-input-wrapper">
                            <span className="profile-input-label">Annual Income</span>
                            <div className="profile-input-money-wrapper">
                                <span>$</span>
                                <input className="profile-input" type="number" />
                            <span className="profile-input-focus"></span>
                            </div>
                        </div>
                        <div className="profile-submit-btn-container">
                            <button type='submit' className="profile-submit-btn">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile
