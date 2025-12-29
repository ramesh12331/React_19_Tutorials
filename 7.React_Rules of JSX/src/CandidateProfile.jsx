import React from 'react'

const CandidateProfile = () => {
    const name = "Peter Parker";
    const role = "Web Developer";
    const yearOfExperience = 5;
    const isAvailable = true;
  return (
    <div>
      <h2>{name}</h2>
      <p>
        {role} with {yearOfExperience} year of experience
      </p>
      <p>
        Started in {2025 - yearOfExperience}
      </p>
      <p>
        status : {isAvailable ? "Available for hire" : "Not Available"}
      </p>
      <p>Contact : {name.toLowerCase().replace(" ",".")}@gmail.com</p>
    </div>
  )
}

export default CandidateProfile
