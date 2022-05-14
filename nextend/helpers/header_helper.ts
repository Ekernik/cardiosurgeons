import styles from '@/components/Header/Dropdown/styles.module.scss';
import burger_styles from '@/components/Header/BurgerMenu/styles.module.scss';

// Mount dropdown listeners
export const mountDropdownListeners = () => {
  document.addEventListener('click', e => {
    let currentDropdown;
    const isDropdownButton = (e.target as HTMLElement).matches(
      '[data-dropdown-button]',
    );
    if (
      !isDropdownButton &&
      (e.target as HTMLElement).closest('[data-dropdown]') != null
    )
      return;

    if (isDropdownButton) {
      currentDropdown = (e.target as HTMLElement).closest('[data-dropdown]');
      currentDropdown.classList.toggle(styles.active);
    }

    document
      .querySelectorAll(`[data-dropdown].${styles.active}`)
      .forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove(styles.active);
      });
  });
};

// Watch if scrolling up or down
export const mountScrollListener = () => {
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

export const removeNoScroll = () => {
  const body = document.querySelector('body');
  body.classList.remove('fixed-page');
};

//// Burger Menu

export const changeSection = position => {
  const menus = document.querySelectorAll(`.${burger_styles.burger__menu}`);
  menus.forEach(menu => menu.classList.remove(burger_styles.active));
  if (position === 'top') menus[0].classList.add(burger_styles.active);
  if (position === 'middle') menus[1].classList.add(burger_styles.active);
  if (position === 'bottom') menus[2].classList.add(burger_styles.active);
  if (position === 'diseases') menus[3].classList.add(burger_styles.active);
  if (position === 'heart-diseases')
    menus[4].classList.add(burger_styles.active);
  if (position === 'heart-rythm') menus[5].classList.add(burger_styles.active);
  if (position === 'diagnostics') menus[6].classList.add(burger_styles.active);
};

export const openBurgerMenu = () => {
  const headerBurger = document.querySelector(
    `.${burger_styles.burger__lines}`,
  );
  const headerMenu = document.querySelector(`.${burger_styles.burger__nav}`);
  const menus = document.querySelectorAll(`.${burger_styles.burger__menu}`);
  console.log(burger_styles.burger__nav);
  if (headerMenu.classList.contains(burger_styles.menu___opened)) {
    menus[0].classList.remove(burger_styles.active);
    menus[1].classList.remove(burger_styles.active);
    menus[2].classList.remove(burger_styles.active);
  }
  if (!headerMenu.classList.contains(burger_styles.menu___opened)) {
    menus[0].classList.add(burger_styles.active);
  }
  const body = document.querySelector('body');
  body.classList.toggle('fixed-page');
  headerBurger.classList.toggle(burger_styles.menu___opened);
  headerMenu.classList.toggle(burger_styles.menu___opened);
};
