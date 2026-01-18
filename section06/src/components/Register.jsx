import { useState } from "react";

export default function Register() {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input
          type="date"
          value={input.birth}
          onChange={onChange}
          name="birth"
        />
      </div>

      <div>
        <select value={input.country} onChange={onChange} name="country">
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>

      <div>
        <textarea value={input.bio} onChange={onChange} name="bio"></textarea>
      </div>
    </>
  );
}
