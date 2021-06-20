module.exports.validatorsRegister = (name, password, location, email) => {
  const errors = {};

  if (name.trim() == "") {
    errors.username = "username cant be empty";
  }

  if (location == "") {
    errors.password = "password cant be empty";
  }

  if (password == "") {
    errors.password = "password cant be empty";
  }

  if (email.trim() === "") {
    errors.email = "email cant be empty";
  } else {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(regex)) {
      errors.email = "Email must be a valid email address";
    }
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validatorsLogin = (email, password) => {
  const errors = {};

  if (email.trim() === "") {
    errors.email = "email cant be empty";
  }

  if (password.trim() === "") {
    errors.password = "password cant be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
