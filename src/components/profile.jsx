import React from "react";
import "./profile.css";

export const Profile = () => {
  const [age, setAge] = React.useState(23);

  const handleAge = (value) => [setAge(age + value)];

  return (
    <>
      <div>
        <div className="profile">
          <img
            src="https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
            alt=""
          />
        </div>
        <p>name : Peter parker</p>
        <p>Age : {age}</p>
        <p>Location : Mumbai</p>
        <p>Orignstion : Masai school</p>
        <button onClick={() => handleAge(1)}> INCREASE AGE </button>
        <button onClick={() => handleAge(-1)}> DECREASE AGE </button>
      </div>
    </>
  );
};
