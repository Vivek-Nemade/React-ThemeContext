import React from "react";
import style from "./Form.module.css";

const Form = () => {
  return (
    <div>
      {/* <form>
        <label>UserName</label>
        <input type="text" placeholder="username" />
        <label>Email ID</label>
        <input type="email" placeholder="abc@gmail.com" />
        <label>Password</label>
        <input type="password" placeholder="password" />
        <button>Submit</button>
      </form> */}

      <form className={style.formDiv}>
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
