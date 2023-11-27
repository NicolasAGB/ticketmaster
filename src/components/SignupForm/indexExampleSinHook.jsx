import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const SingupForm = () => {
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [adress, setAdress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");

  const handleClearClick = () => {
    setName("");
    setAge("");
    setAdress("");
    setZipcode("");
    setPhone("");
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log("test handleSubtmitForm**", {
      name,
      age,
      adress,
      zipcode,
      phone,
    });
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="">
        {" "}
        name
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <br />
      </label>
      <label htmlFor="">Age</label>
      <input
        type="text"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        required
      />
      <br />
      <label htmlFor="">
        Address
        <input
          type="text"
          value={adress}
          onChange={(event) => setAdress(event.target.value)}
          required
        />
        <br />
      </label>
      <label htmlFor="">
        Zip code
        <input
          type="text"
          value={zipcode}
          onChange={(event) => setZipcode(event.target.value)}
          required
        />
        <br />
      </label>
      <label htmlFor="">
        Phone
        <input
          type="text"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
        <br />
      </label>
      <div>
        <button type="button" onClick={handleClearClick}>
          Clear
        </button>
        <button type="submit">Subtmit</button>
      </div>
    </form>
  );
};
