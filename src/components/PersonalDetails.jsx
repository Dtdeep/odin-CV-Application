import mikay from "../assets/mikay.jpg";
import "../styles/Personal-Details.css";
import { useState } from "react";
export default function PersonalDetails({ isEditing }) {
  const [fullName, setFullName] = useState("Firstname Last name");
  const [birthday, setBirthDay] = useState("5th January 2019 in Pantukan");
  const [address, setAddress] = useState("Pantukan, Davao de Oro, Philippines");
  const [phoneNumber, setPhoneNumbner] = useState("09192950079");
  const [email, setEmail] = useState("firstName@gmail.com");

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleBirthDay = (e) => {
    setBirthDay(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumbner(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <section>
      <img src={mikay} alt="" />
      <form action="">
        <label className="bold" htmlFor="name">
          Name
        </label>
        {isEditing === false ? (
          <p>{fullName}</p>
        ) : (
          <input
            id="name"
            type="text"
            onChange={handleFullName}
            value={fullName}
          />
        )}

        <label htmlFor="birthday" className="bold">
          Birthday
        </label>
        {isEditing === false ? (
          <p>{birthday}</p>
        ) : (
          <input
            id="birthday"
            type="text"
            onChange={handleBirthDay}
            value={birthday}
          />
        )}

        <label htmlFor="address" className="bold">
          Address
        </label>
        {isEditing === false ? (
          <p>{address}</p>
        ) : (
          <input
            id="address"
            type="text"
            onChange={handleAddress}
            value={address}
          />
        )}

        <label htmlFor="phoneNumber" className="bold">
          Phone Number
        </label>
        {isEditing === false ? (
          <p>{phoneNumber}</p>
        ) : (
          <input
            id="phoneNumber"
            type="text"
            onChange={handlePhoneNumber}
            value={phoneNumber}
          />
        )}

        <label htmlFor="email" className="bold">
          Email
        </label>
        {isEditing === false ? (
          <p>{email}</p>
        ) : (
          <input id="email" type="text" onChange={handleEmail} value={email} />
        )}
      </form>
    </section>
  );
}
