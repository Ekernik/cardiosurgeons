export const handleSubmit = () => {
  try {
    formSettings.checkValues(4, 8);
    // Make success animation
    const floatingForm = document.querySelector('.contact-form');
    const curtain = document.querySelector('.contact-form__curtain');
    floatingForm.style.animation = 'group-fade-out .3s ease-in forwards';
    floatingForm.style.display = 'none';
    curtain.style.display = 'flex';
    curtain.style.animation = 'contact-form--fade-in 1.5s ease-in forwards';
    console.log('Форма отправленна');
  } catch (err) {
    console.log(`Форма не отправленна: ${err.message}`);
  }
};

export const formSettings = {
  TEST_submit_link:
    'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdOifwVekKhMgITAZwIR_eZAZ4YPsuqHKpLMDfP-b063L3ctw/formResponse',
  TEST_name_entry: 'entry.127199314',
  submit_link:
    'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf7t2cJf7YhztRgyaMtT61FTlbRINIUeJGBRs6IWkOMPBOzlw/formResponse',
  name_entry: 'entry.887370446',
  ref_link: 'entry.1034264162',
  phone_entry: 'entry.1023395244',
  email_entry: 'entry.1597334997',
  message_entry: 'entry.1730993424',
  ref_origin: function () {
    if (typeof window !== 'undefined') {
      const hostname = window.location.pathname;
      const url_oskol = '/news/priem-v-gorode-stariy-oskol';
      const url_saransk = '/news/priem-v-gorode-saransk';
      const url_vladimir = '/news/priem-v-gorode-vladimir';
      const url_stavropol = '/news/priem-v-gorode-stavropol';
      const url_arzamas = '/news/priem-v-gorode-arzamas';
      const url_hasavyurt = 'priem-v-gorode-hasavyurt';
      const url_zheleznogorsk = 'priem-v-gorode-zheleznogorsk';
      const url_volhov = '/news/priem-v-gorode-volhov';
      const url_shahti = '/news/priem-v-gorode-shahti';
      const url_cherkessk = '/news/priem-v-gorode-cherkessk';
      const url_nizhniy_novgorod = '/news/priem-v-gorode-nizhniy-novgorod';
      const url_velikie_luki = '/news/priem-v-gorode-velikie-luki';
      const url_lipeck = '/news/priem-v-gorode-lipeck';
      const url_kostroma = '/news/priem-v-gorode-kostroma';
      const url_cherepovets = '/news/priem-v-gorode-cherepovets';
      const url_bryansk = 'bryansk';
      if (hostname.includes(url_oskol)) return 'Старый Оскол';
      else if (hostname.includes(url_saransk)) return 'Саранск';
      else if (hostname.includes(url_lipeck)) return 'Липецк';
      else if (hostname.includes(url_vladimir)) return 'Владимир';
      else if (hostname.includes(url_stavropol)) return 'Ставрополь';
      else if (hostname.includes(url_arzamas)) return 'Арзамас';
      else if (hostname.includes(url_volhov)) return 'Волхов';
      else if (hostname.includes(url_shahti)) return 'Шахты';
      else if (hostname.includes(url_hasavyurt)) return 'Хасавюрт';
      else if (hostname.includes(url_zheleznogorsk)) return 'Железногорск';
      else if (hostname.includes(url_cherkessk)) return 'Черкесск';
      else if (hostname.includes(url_nizhniy_novgorod))
        return 'Нижний Новгород';
      else if (hostname.includes(url_velikie_luki)) return 'Великие Луки';
      else if (hostname.includes(url_lipeck)) return 'Липецк';
      else if (hostname.includes(url_kostroma)) return 'Кострома';
      else if (hostname.includes(url_cherepovets)) return 'Череповец';
      else if (hostname.includes(url_bryansk)) return 'Брянск';
      else return hostname;
    }
  },
  checkValues: function (cutA = 0, cutB = 10) {
    let inputs = Array.prototype.slice
      .call(document.querySelectorAll('input[required]'))
      .slice(cutA, cutB);
    let valid = inputs.filter(input => input.checkValidity() === true);
    return inputs.length === valid.length ? true : false;
  },
};
