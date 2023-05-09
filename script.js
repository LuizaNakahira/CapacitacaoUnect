window.onload = function() {
    const toggleSwitch = document.querySelector('#switch');
    const footer = document.querySelector('footer');
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    const h1 = document.querySelector('h1');
    const h2 = document.querySelectorAll('h2');
    const label = document.querySelector('label');
    const ul = document.querySelectorAll('ul');
    const FraseDoDia = document.querySelector('.FraseDoDia');
    const frase = document.querySelector('.frase');
    const logoImage = document.querySelector('.LogoUnect');
    
    function switchTheme(event) {
      if (event.target.checked) {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        h1.classList.add('dark-mode');
        label.classList.add('dark-mode');
        ul.forEach(function(ul) {
            ul.classList.add('dark-mode');
          });
        h2.forEach(function(h2) {
          h2.classList.add('dark-mode');
        });
        FraseDoDia.classList.add('dark-mode');
        frase.classList.add('dark-mode');
        logoImage.src = 'ImagemDark.png';
      } else {
        body.classList.remove('dark-mode');
        header.classList.remove('dark-mode');
        footer.classList.remove('dark-mode');
        h1.classList.remove('dark-mode');
        label.classList.remove('dark-mode');
        ul.forEach(function(element) {
            element.classList.remove('dark-mode');
          });
        h2.forEach(function(element) {
          element.classList.remove('dark-mode');
        });
        FraseDoDia.classList.remove('dark-mode');        
        frase.classList.remove('dark-mode');
        logoImage.src ='ImagemLight.png' ;
      }
    }
  
    toggleSwitch.addEventListener('click', switchTheme, false);
  }