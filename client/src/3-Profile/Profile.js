import './profile.css'
import { React, useState, useEffect } from 'react'
import { useFinanceContext } from '../FinanceContext'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Profile() {
    const { user } = useFinanceContext()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [picture, setPicture] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [maritalStatus, setMaritalStatus] = useState('')
    const [annualIncome, setAnnualIncome] = useState('')
    const [trigger, setTrigger] = useState()
    const [profileData, setProfileData] = useState()

    const activeInput = ((firstName !== '') || (lastName !== '') || (email !== '') || (picture !== '') || (age !== '') || (gender !== '') || (maritalStatus !== '') || (annualIncome !== ''))

    const firstNameChange = (e) => setFirstName(e.target.value)
    const lastNameChange = (e) => setLastName(e.target.value)
    const emailChange = (e) => setEmail(e.target.value)
    const pictureChange = (e) => setPicture(e.target.value)
    const ageChange = (e) => setAge(e.target.value)
    const genderChange = (e) => setGender(e.target.value)
    const maritalStatusChange = (e) => setMaritalStatus(e.target.value)
    const annualIncomeChange = (e) => setAnnualIncome(e.target.value)

    function handleSubmit(e) {
        e.preventDefault()
        axios.patch(`/users/${user.user.id}`, {
            user: {
                first_name: ((firstName !== '') ? firstName : user.user.first_name),
                last_name: ((lastName !== '') ? lastName : user.user.last_name),
                profile_picture: ((picture !== '') ? picture : user.user.profile_picture),
                email: ((email !== '') ? email : user.user.email),
                age: ((age !== '') ? age : user.user.age),
                gender: ((gender !== '') ? gender : user.user.gender),
                marital_status: ((maritalStatus !== '') ? maritalStatus : user.user.marital_status),
                annual_income: ((annualIncome !== '') ? annualIncome : user.user.annual_income)
            }
        }, { withCredentials: true })
        .then(res => console.log(res))
        .catch(err => console.error(err))
        setTrigger(Math.random())
    }

    useEffect(() => {
        axios.get('/logged_in', { withCredentials: true })
        .then(res => setProfileData(res.data.user))
        .catch(err => console.error(err))
    }, [trigger])

    return (
        <div>
            <div className="profile-container">
                <Link className='profile-go-back' to='/main'>Go back</Link>
                <div className="profile-wrapper">
                    <h1 className="profile-title">Customize Your Profile</h1>
                    <form onSubmit={handleSubmit} className="profile-form">
                        <div className="profile-input-wrapper">
                            <span className="profile-input-label">First Name</span>
                            <input onChange={firstNameChange} className="profile-input" type="text" placeholder={profileData?.first_name} />
                            <span className="profile-input-focus"></span>
                        </div>
                        <div className="profile-input-wrapper">
                            <span className="profile-input-label">Last Name</span>
                            <input onChange={lastNameChange} className="profile-input" type="text" placeholder={profileData?.last_name} />
                            <span className="profile-input-focus"></span>
                        </div>
                        <div className="profile-input-wrapper">
                            <span className="profile-input-label">Email</span>
                            <input onChange={emailChange} className="profile-input" type="email" placeholder={profileData?.email} />
                            <span className="profile-input-focus"></span>
                        </div>
                        <div className="profile-input-wrapper">
                            <span className="profile-input-label">Upload Profile Picture</span>
                            <input onChange={pictureChange} className="profile-input" id='photo-file-input' type="file" accept="image/png, image/gif, image/jpeg" />
                            <span className="profile-input-focus"></span>
                        </div>
                        <div className="profile-input-wrapper">
                            <span className="profile-input-label">Age</span>
                            <input onChange={ageChange} className="profile-input" type="number" placeholder={profileData?.age} />
                            <span className="profile-input-focus"></span>
                        </div>
                        <div className="profile-input-wrapper">
                            <span className="profile-input-label">Gender</span>
                            <select id='genderSelect' onChange={genderChange} className="profile-input" value={((gender !== '') ? gender : profileData?.gender)} >
                                <option disabled selected hidden>---</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="nonbinary">Non-Binary</option>
                                <option value="notsay">(Rather not say)</option>
                            </select>
                            <span className="profile-input-focus"></span>
                        </div>
                        <div className="profile-input-wrapper">
                            <span className="profile-input-label">Marital Status</span>
                            <select id='maritalSelect' onChange={maritalStatusChange} className="profile-input" value={((maritalStatus !== '') ? maritalStatus : profileData?.marital_status)}>
                                <option disabled selected hidden>---</option>
                                <option value="single">Single</option>
                                <option value="maried">Maried</option>
                                <option value="divorced">Divorced</option>
                                <option value="widowed">Widowed</option>
                                <option value="notsay">(Rather not say)</option>
                            </select>
                            <span className="profile-input-focus"></span>
                        </div>
                        <div className="profile-input-wrapper">
                            <span className="profile-input-label">Annual Income</span>
                            <div className="profile-input-money-wrapper">
                                <span>$</span>
                                <input onChange={annualIncomeChange} className="profile-input" type="number" placeholder={profileData?.annual_income} />
                            <span className="profile-input-focus"></span>
                            </div>
                        </div>
                        <div className="profile-submit-btn-container">
                            <button style={activeInput ? {pointerEvents: "all", opacity: "1"} : {pointerEvents: "none", opacity: ".5"}} type='submit' className="profile-submit-btn">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile
