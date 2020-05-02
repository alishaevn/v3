'use strict'

const blackout = document.querySelector('.blackout')
const body = document.querySelector('body')
const modalOpenTriggers = document.querySelectorAll('.project-button')

modalOpenTriggers.forEach(trigger => {
	trigger.addEventListener('click', () => {
		const { projectButton } = trigger.dataset
		const popupModal = document.querySelector(`[data-project-modal='${projectButton}']`)
		const modalBgImage = document.getElementById('modal-mock-up')
		const appName = document.getElementById('app-name')
		const modal = document.getElementById('popup-modal')

		let image
		let title
		let bg

		switch(projectButton) {
		case 'vizer':
			image = 'url(assets/projects/vizer-modal.png)'
			title = 'var(--vizerCoral)'
			bg = 'var(--vizerPink)'
			break
		case 'moishe':
			image = 'url(assets/projects/moishe-modal.png)'
			break
		}

		modalBgImage.style['background-image'] = image
		appName.style.color = title
		modal.style['background-color'] = bg

		
		popupModal.classList.add('is--visible')
		blackout.classList.add('is-blacked-out')
		body.classList.add('hidden')
		
		popupModal.scrollIntoView()
    
		popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
			popupModal.classList.remove('is--visible')
			blackout.classList.remove('is-blacked-out')
			body.classList.remove('hidden')
			
		})
    
		blackout.addEventListener('click', () => {
			popupModal.classList.remove('is--visible')
			blackout.classList.remove('is-blacked-out')
			body.classList.remove('hidden')
		})
	})
})
