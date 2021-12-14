const formSettings = {
  TEST_submit_link:
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdOifwVekKhMgITAZwIR_eZAZ4YPsuqHKpLMDfP-b063L3ctw/formResponse",
  TEST_name_entry: "entry.127199314",
  submit_link:
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf7t2cJf7YhztRgyaMtT61FTlbRINIUeJGBRs6IWkOMPBOzlw/formResponse",
  name_entry: "entry.887370446",
  ref_link: "entry.1034264162",
  phone_entry: "entry.1023395244",
  email_entry: "entry.1597334997",
  message_entry: "entry.1730993424",
  ref_origin: function () {
    if (typeof window !== "undefined") {
      const hostname = window.location.pathname;
      const url_oskol = "/news/priem-v-gorode-stariy-oskol-21.12.2021";
      const url_vladimir = "/news/priem-v-gorode-vladimir-09-11-2021";
      const url_stavropol = "/news/priem-v-gorode-stavropol-02-11-2021";
      if (hostname === url_oskol) return "Старый Оскол";
      else if (hostname === url_vladimir) return "Владимир";
      else if (hostname === url_stavropol) return "Ставрополь";
      else return hostname;
    }
  },
  checkValues: function (cutA = 0, cutB = 10) {
    let inputs = Array.prototype.slice
      .call(document.querySelectorAll("input[required]"))
      .slice(cutA, cutB);
    let valid = inputs.filter((input) => input.checkValidity() === true);
    return inputs.length === valid.length ? true : false;
  },
};

export default formSettings;
