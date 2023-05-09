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

  /*=========================================================================================*/

  const adicionar = document.querySelector("#adicionar");
  const formularioContainer = document.querySelector(".alinhamento-to-do");
  const lista = document.querySelector(".primeira");
  
  adicionar.addEventListener("click", function() {
  
    const formulario = document.createElement("form");
    formulario.id = "formulario";
  
    const tituloFormulario = document.createElement("h2");
    tituloFormulario.innerHTML = '<span class="material-icons" id="close">close</span> Nova Task';
    formulario.appendChild(tituloFormulario);
  
    const macaNome = document.createElement("maca");
    macaNome.for = "maca";
    macaNome.textContent = "Título *";
    formulario.appendChild(macaNome);
  
    const campoNome = document.createElement("input");
    campoNome.type = "text";
    campoNome.id = "nome";
    campoNome.placeholder = "Nome";
    formulario.appendChild(campoNome);
  
    const bananaDescricao = document.createElement("banana");
    bananaDescricao.for = "banana";
    bananaDescricao.textContent = "Descriçao";
    formulario.appendChild(bananaDescricao);
  
    const campoDescricao = document.createElement("textarea");
    campoDescricao.id = "descricao";
    campoDescricao.placeholder = "Descrição";
    formulario.appendChild(campoDescricao);
  
    const botaoSalvar = document.createElement("button");
    botaoSalvar.type = "submit";
    botaoSalvar.textContent = "Criar Task";
    formulario.appendChild(botaoSalvar);
  
    const closeIcon = formulario.querySelector("#close");
    closeIcon.addEventListener("click", function() {
      formulario.style.display = "none";
    });
  
    formulario.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const novoItem = document.createElement("li");
      const nome = campoNome.value;
      const descricao = campoDescricao.value;
      novoItem.textContent = `${nome} - ${descricao}`;
      lista.appendChild(novoItem);
  
      campoNome.value = "";
      campoDescricao.value = "";
  
      formulario.style.display = "none";
    });
  
    formularioContainer.appendChild(formulario);
  
    formulario.style.display = "block";
  });