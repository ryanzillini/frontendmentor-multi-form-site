import React, { useState } from "react";

export default function PersonalInfo(props) {
  const { values, change, submit, errors } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form>
      <label>
        Name
        <input
          type="text"
          value={values.fLName}
          placeholder="enter name here"
          onChange={onChange}
          name="name"
        />
      </label>
      <label>
        Email Address
        <input
          type="text"
          value={values.email}
          placeholder="enter name here"
          onChange={onChange}
          name="name"
        />
      </label>
      <label>
        Phone Number
        <input
          type="tel"
          value={values.phoneNumber}
          placeholder="e.g.+1 234 567 8900"
          onChange={onChange}
          name="name"
        />
      </label>
      <button>Next Steop</button>
    </form>
  );
}
