(() => {


  let _mobileNav = document.body.querySelector(".mobilemenu__toggle");
  let _mobileMenu = document.body.querySelector(".mobilemenu");

  _mobileNav.addEventListener('click', function(e){

    /// open close toggle handling
    if (_mobileMenu.dataset.show === "true") {
      _mobileMenu.dataset.show = false;
      this.classList.replace('vi-cross', 'vi-burger');

    } else {
      _mobileMenu.dataset.show = true;
      this.classList.replace('vi-burger', 'vi-cross');
      _level1.classList.replace('hide', 'show');
      _level2.classList.replace('show', 'hide');
    }

  });

  /// submenu handling
  let _menuItems = document.body.querySelectorAll(".mobilemenu .link--icon--after");
  let _level1 = document.body.querySelector(".level1");
  let _level2;

  _menuItems.forEach((item) => {
    item.addEventListener('click', (e) => {

      e.preventDefault();
      _level1.classList.replace('show', 'hide');
      let _href = item.dataset.menu;
      _level2 = document.body.querySelector('.level2.' + _href);
      _level2.classList.replace('hide', 'show');
      return false;

    });
  });


  /// backbutton
  let _mobileBack = document.body.querySelectorAll(".level2 .back");
  _mobileBack.forEach((button) => {
    button.addEventListener('click', (e) => {

      _level2.classList.replace('show', 'hide');
      _level1.classList.replace('hide', 'show');

    });
  });

  /// closebutton
  let _mobileClose = document.body.querySelectorAll(".level2 .close");
  _mobileClose.forEach((close) => {
    close.addEventListener('click', (e) => {

      _level2.classList.replace('show', 'hide');
      _level1.classList.replace('hide', 'show');
      _mobileMenu.dataset.show = false;
      _mobileNav.classList.replace('vi-cross', 'vi-burger');

    });
  });

})()
