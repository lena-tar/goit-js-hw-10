import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/2-snackbar.css';

const form = document.querySelector('.form');

const svgToDataUri = svg => `data:image/svg+xml,${encodeURIComponent(svg)}`;

const ICON_OK = svgToDataUri(`
<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
xmlns="http://www.w3.org/2000/svg">
  <circle
    cx="10"
    cy="10"
    r="8.5"
    stroke="white"
    stroke-width="1.5"
  />
  <path
    d="M6 10.5L9 13.5L14 7.5"
    stroke="white"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
`);

const ICON_ERR = svgToDataUri(`
<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" r="8.5"
          stroke="white" stroke-width="1.5"/>
  <path d="M7 7L13 13M13 7L7 13"
        stroke="white" stroke-width="1.5"
        stroke-linecap="round"/>
</svg>
`);

form.addEventListener('submit', e => {
  e.preventDefault();

  const delayMs = Number(form.delay.value);

  const state = form.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'fulfilled' ? resolve(delayMs) : reject(delayMs);
    }, delayMs);
  });

  promise
    .then(ms => {
      iziToast.show({
        class: 'toast toast--success',
        position: 'topRight',
        timeout: 5000,
        progressBar: true,
        close: true,
        iconUrl: ICON_OK,
        message: `Fulfilled promise in ${ms}ms`,
      });
    })
    .catch(ms => {
      iziToast.show({
        class: 'toast toast--error',
        position: 'topRight',
        timeout: 5000,
        progressBar: true,
        close: true,
        iconUrl: ICON_ERR,
        message: `Rejected promise in ${ms}ms`,
      });
    });

  form.reset();
});
