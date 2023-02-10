const userDatabase = ["rajan.chaudhari08", "rajanchaudhari", "rajan.chaudhari"];

const spinner = document.getElementById("spinner"),
  errorMessage = document.getElementById("errorMessage");

const updateUserStatus = (value) => {
  console.log("value", value);
  spinner.classList.remove("visible");

  const usernameExists = userDatabase.some((user) => user === value);

  console.log("userDatabase", userDatabase);
  console.log("usernameExists", usernameExists);

  if (usernameExists) {
    errorMessage.classList.add("visible");
  } else {
    errorMessage.classList.remove("visible");
  }
};

const debounce = (callback, time) => {
  let interval;
  return (...args) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      callback.apply(null, args);
    }, time);
  };
};

const handleStartTyping = () => {
  spinner.classList.add("visible");
};

const handleChange = debounce((input) => {
  const { value } = input.target;

  updateUserStatus(value);
}, 100);
