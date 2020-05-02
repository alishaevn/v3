'use strict'

const blackout = document.querySelector('.blackout')
const body = document.querySelector('body')
const modalOpenTriggers = document.querySelectorAll('.project-button')

modalOpenTriggers.forEach(trigger => {
	trigger.addEventListener('click', () => {
		const { projectButton } = trigger.dataset
		const popupModal = document.querySelector(`[data-project-modal='${projectButton}']`)

		const modalBgImages = document.getElementsByClassName('modal-mock-up')
		const modalBgImage = [...modalBgImages].find(image => image.classList.contains(`${projectButton}`))
		const appNames = document.getElementsByClassName('app-name')
		const appName = [...appNames].find(name => name.classList.contains(`${projectButton}`))
		const modalBgColors = document.getElementsByClassName('popup-modal')
		const modalBgColor = [...modalBgColors].find(color => color.classList.contains(`${projectButton}`))

		let image
		let name
		let color

		switch(projectButton) {
		case 'vizer':
			image = 'url(assets/projects/vizer-modal.png)'
			name = 'var(--vizerCoral)'
			color = 'var(--vizerPink)'
			break
		case 'moishe':
			image = 'url(assets/projects/moishe-modal.png)'
			name = 'var(--white)'
			color = 'var(--moisheBlue)'
			break
		case 'scimo':
			image = 'url(assets/projects/scimo-modal.png)'
			name = 'var(--scimoTeal)'
			color = 'var(--scimoSilver)'
			break
		}

		modalBgImage.style['background-image'] = image
		appName.style.color = name
		modalBgColor.style['background-color'] = color

		
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
