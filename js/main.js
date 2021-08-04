//variable para el ID del boton
const button = document.getElementById('button');

//variable para el ID de la clase principal
const IDstiker = document.getElementById('stickerid');

//constante donde llama a los stikers que estan almacenados en css
const stikers = ['enamorado','feliz', 'triste', 'risa', 'locura'];

//evento que al presionar el boton llama a la funcion
//esta es otra alternativa al evento onclick que se usa en HTML
button.addEventListener('click', () => createNotification());

//funcion que da logica al sistema
function createNotification( stiker = null) {

  //creo una constante y esta su vez va crear una etiqueta en el HTML
  const notiStiker = document.createElement('section');

  //a la constante le agrega una class
  notiStiker.classList.add('activate');

  //si la constante es true '?' ejecutame la funcion
  notiStiker.classList.add(stiker ? stiker : getRandomType());

  //en la ID le agrega todo los datos almacenados en la primera constante
  stickerid.appendChild(notiStiker);

  //de la ID removeme cada 3s todos los datos almacenados que pertenezcan a la constante
  setTimeout(() => {
    notiStiker.remove();
  }, 3000);
}

//funcion que genera aleatoriamente nuestros stikers
function getRandomType() {
  return stikers[Math.floor(Math.random() * stikers.length)];
}

//-------------------- BITÁCORA --------------------//
const open = document.getElementById('open');
const modalBitacora = document.getElementById('modal-bitacora');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modalBitacora.classList.add('show');  
});

close.addEventListener('click', () => {
  modalBitacora.classList.remove('show');
});

