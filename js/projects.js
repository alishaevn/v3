'use strict';

const blackout = document.querySelector('.blackout');
const body = document.querySelector('body');
const modalOpenTriggers = document.querySelectorAll('.project-button');
const bodyBlackout = document.querySelector('.blackout');

modalOpenTriggers.forEach(trigger => {
	trigger.addEventListener('click', () => {
		const { projectButton } = trigger.dataset;
		const popupModal = document.querySelector(`[data-project-modal='${projectButton}']`);

		
    	popupModal.classList.add('is--visible');
		blackout.classList.add('is-blacked-out');
		body.classList.add('hidden');
    
		popupModal.scrollIntoView();
    
    	popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
    		popupModal.classList.remove('is--visible');
			blackout.classList.remove('is-blacked-out');
			body.classList.remove('hidden');
			
    	});
    
    	blackout.addEventListener('click', () => {
    		popupModal.classList.remove('is--visible');
			blackout.classList.remove('is-blacked-out');
			body.classList.remove('hidden');
    	});
	});
});
