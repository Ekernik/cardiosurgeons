const formSettings = {
  email_entry: "entry.1879504940",
  phone_entry: "entry.1859320754",
  message_entry: "entry.1529901543",
  name_entry: "entry.1552386635",
  submit_link:
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLScZ7vKD_Cgav2R21Zgmex2vnBGro2HMYpV0F9_wWG9qF_HHww/formResponse",
  checkValues: function (cutA = 0, cutB = 10) {
    let inputs = Array.prototype.slice
      .call(document.querySelectorAll("input[required]"))
      .slice(cutA, cutB);
    let valid = inputs.filter((input) => input.checkValidity() === true);
    console.log(inputs);
    return inputs.length === valid.length ? true : false;
  },
};

export default formSettings;
