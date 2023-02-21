import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

iniciar();

form.addEventListener('submit', guardarForm);
form.addEventListener('input', throttle(salidaForm, 500));

function guardarForm(e) {
  e.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value) => console.log(value));
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function salidaForm(e) {
  let datoSalida = localStorage.getItem(LOCALSTORAGE_KEY);
  datoSalida = datoSalida ? JSON.parse(datoSalida) : {};
  datoSalida[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(datoSalida));
}

function iniciar() {
  let datosInicio = localStorage.getItem(LOCALSTORAGE_KEY);
  if (datosInicio) {
    datosInicio = JSON.parse(datosInicio);
    Object.entries(datosInicio).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}