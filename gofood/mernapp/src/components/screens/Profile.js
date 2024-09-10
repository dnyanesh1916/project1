import React ,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "",age:"",moNo:"",img:"" })
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/getProfile", {
          // credentials: 'include',
          // Origin:"http://localhost:3000/login",
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: credentials.username, email: credentials.email, password: credentials.password, location: credentials.location,moNo:credentials.mono,age:credentials.age,photo:credentials.profileImage })
    
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
          //save the auth toke to local storage and redirect
          localStorage.setItem('token', json.authToken)
          navigate("/login")
    
        }
        else {
          alert("Enter Valid Credentials")
        }
      }

      const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
      }

  return (
    <div>
         <div>
        <div class="container">
        <h2>Edit Profile</h2>
        <form action="/submit_profile" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="profileImage">Profile Image:</label>
                <input type="file" id="profileImage"  value={credentials.profileImage} onChange={onChange} name="profileImage" accept="image/*"/>
            </div>
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username"  value={credentials.username} onChange={onChange} name="username"/>
            </div>
            <div class="form-group">
                <label for="location">Location:</label>
                <input type="text" id="location"  value={credentials.location} onChange={onChange} name="location"/>
            </div>
            <div class="form-group">
                <label for="mono">Mobile Number:</label>
                <input type="tel" id="mono" name="mono"  value={credentials.mono} onChange={onChange} pattern="[0-9]{10}" />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" value={credentials.email} onChange={onChange} name="email" />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" value={credentials.password} onChange={onChange} name="password"/>
            </div>
            <div class="form-group">
                <label for="age">Age:</label>
                <input type="number" id="age" name="age" value={credentials.age} onChange={onChange} min="1"/>
            </div>
            <div class="form-group">
                <button type="submit">Save Changes</button>
            </div>
        </form>
    </div>
    </div>
    </div>
  )
}
