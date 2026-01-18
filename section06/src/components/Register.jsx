import { useState, useRef } from "react";

export default function Register() {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <input
          ref={inputRef}
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

      <button onClick={onSubmit}>제출</button>
    </>
  );
}
