'use strict';

const modalOpenTriggers = document.querySelectorAll('.project-button');
const bodyBlackout = document.querySelector('.blackout');

modalOpenTriggers.forEach(trigger => {
	trigger.addEventListener('click', () => {
		const { projectButton } = trigger.dataset;
		const popupModal = document.querySelector(`[data-project-modal='${projectButton}']`);

    	popupModal.classList.add('is--visible');
    	bodyBlackout.classList.add('is-blacked-out');
    
    	popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
    		popupModal.classList.remove('is--visible');
    		bodyBlackout.classList.remove('is-blacked-out');
    	});
    
    	bodyBlackout.addEventListener('click', () => {
    		popupModal.classList.remove('is--visible');
    		bodyBlackout.classList.remove('is-blacked-out');
    	});
	});
});
