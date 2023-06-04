
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const amount = Number(form.querySelector('input[name="amount"]').value);
  const delay = Number(form.querySelector('input[name="delay"]').value);
  const step = Number(form.querySelector('input[name="step"]').value);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay + (i - 1) * step)
      .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}