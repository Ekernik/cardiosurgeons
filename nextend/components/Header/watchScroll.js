export const listenToScroll = () => {
  const body = document.querySelector('body');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove('scroll-up');
      return;
    }

    if (
      currentScroll - 5 > lastScroll &&
      !body.classList.contains('scroll-down')
    ) {
      body.classList.remove('scroll-up');
      body.classList.add('scroll-down');
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains('scroll-down')
    ) {
      body.classList.remove('scroll-down');
      body.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
  });
};

export const showFullHeader = () => {
  const body = document.querySelector('body');
  body.classList.remove('scroll-down');
};
