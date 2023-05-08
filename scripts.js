const toggleSwitch = document.querySelector('#switch');

      
      toggleSwitch.addEventListener('click', switchTheme, false);

      function switchTheme(e) {
        
        if (e.target.checked) {
          
          document.body.classList.add('dark');
        } else {
         
          document.body.classList.remove('dark');
        }
      }

/*=======================================================================================*/
