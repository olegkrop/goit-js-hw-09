import { Notify } from "notiflix";

const form = document.querySelector(".form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  let delay = Number(event.currentTarget.delay.value);
  const delayStep = Number(event.currentTarget.step.value);
  const amount = Number(event.currentTarget.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += delayStep;
  }
  event.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => shouldResolve ?
      resolve({ position, delay }) : reject({ position, delay }), delay);
  });
}