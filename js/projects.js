'use strict';

const modalTriggers = document.querySelectorAll('.project-button');
// const modalCloseTrigger = document.querySelector('.popup-modal__close');
const bodyBlackout = document.querySelector('.blackout');

// const closeModal = () => {
//   popupModal.classList.remove('is--visible');
//   bodyBlackout.classList.remove('is-blacked-out');
// };

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const { projectButton } = trigger.dataset;
    const popupModal = document.querySelector(`[data-project-modal='${projectButton}']`);

    popupModal.classList.add('is--visible');
    bodyBlackout.classList.add('is-blacked-out');
    
    // popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
    //   popupModal.classList.remove('is--visible');
    //   bodyBlackout.classList.remove('is-blacked-out');
    // });
    
    bodyBlackout.addEventListener('click', () => {
      popupModal.classList.remove('is--visible');
      bodyBlackout.classList.remove('is-blacked-out');
    });
  });
});
