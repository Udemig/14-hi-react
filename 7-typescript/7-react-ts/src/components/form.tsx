import type { ChangeEvent, FormEvent, MouseEvent } from "react";

const Form = () => {
  // form gönderilince:
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {};

  // input değişince
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  // butona tıklandığında
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {};

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" />
      <button onClick={handleClick}>Gönder</button>
    </form>
  );
};

export default Form;
