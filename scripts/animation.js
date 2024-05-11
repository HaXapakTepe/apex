if (document.querySelector('.one')) {
	const text = document.querySelector('.one')
	let progress = 0
	const duration = 1000 // длительность анимации в миллисекундах
	let intervalIdUp // идентификатор интервала для анимации подъема
	let intervalIdDown // идентификатор интервала для анимации спуска
	let isForward = true // направление анимации

	function updateGradient(isRising) {
		const redStart = isRising
			? Math.floor(progress * 25)
			: 25 - Math.floor(progress * 25)
		const whiteStart = isRising
			? 100 - Math.floor(progress * 25)
			: 75 + Math.floor(progress * 25)

		text.style.backgroundImage = `
      linear-gradient(0deg, #F83737 ${redStart}%, #F83737 ${redStart}%, transparent ${redStart}%),
      linear-gradient(180deg, white ${whiteStart}%, white ${whiteStart}%, transparent ${whiteStart}%)`

		progress += 0.05

		if (progress <= 1) {
			requestAnimationFrame(() => updateGradient(isRising))
		} else {
			progress = 0
			if (isRising) {
				clearInterval(intervalIdUp)
				startAnimationDown() // запустить анимацию спуска после подъема
			} else {
				clearInterval(intervalIdDown)
				startAnimationUp() // запустить анимацию подъема после спуска
			}
		}
	}

	function startAnimationUp() {
		clearInterval(intervalIdUp)
		intervalIdUp = setInterval(() => updateGradient(true), 500) // вызывать updateGradient(true) каждые 2 секунды
	}

	function startAnimationDown() {
		clearInterval(intervalIdDown)
		intervalIdDown = setInterval(() => updateGradient(false), 2500) // вызывать updateGradient(false) каждые 5 секунд
	}

	startAnimationUp()
}

if (document.querySelector('.two')) {
	const text = document.querySelector('.two')
	let progress = 0
	const duration = 1000 // длительность анимации в миллисекундах
	let intervalIdUp // идентификатор интервала для анимации подъема
	let intervalIdDown // идентификатор интервала для анимации спуска
	let isForward = true // направление анимации

	function updateGradient(isRising) {
		const redStart = isRising
			? Math.floor(progress * 40)
			: 40 - Math.floor(progress * 40)
		const whiteStart = isRising
			? 100 - Math.floor(progress * 40)
			: 60 + Math.floor(progress * 40)

		text.style.backgroundImage = `
      linear-gradient(0deg, #F83737 ${redStart}%, #F83737 ${redStart}%, transparent ${redStart}%),
      linear-gradient(180deg, white ${whiteStart}%, white ${whiteStart}%, transparent ${whiteStart}%)`

		progress += 0.05

		if (progress <= 1) {
			requestAnimationFrame(() => updateGradient(isRising))
		} else {
			progress = 0
			if (isRising) {
				clearInterval(intervalIdUp)
				startAnimationDown() // запустить анимацию спуска после подъема
			} else {
				clearInterval(intervalIdDown)
				startAnimationUp() // запустить анимацию подъема после спуска
			}
		}
	}

	function startAnimationUp() {
		clearInterval(intervalIdUp)
		intervalIdUp = setInterval(() => updateGradient(true), 1000) // вызывать updateGradient(true) каждые 2 секунды
	}

	function startAnimationDown() {
		clearInterval(intervalIdDown)
		intervalIdDown = setInterval(() => updateGradient(false), 2000) // вызывать updateGradient(false) каждые 5 секунд
	}

	startAnimationUp()
}

if (document.querySelector('.three')) {
	const text = document.querySelector('.three')
	let progress = 0
	const duration = 1000 // длительность анимации в миллисекундах
	let intervalIdUp // идентификатор интервала для анимации подъема
	let intervalIdDown // идентификатор интервала для анимации спуска
	let isForward = true // направление анимации

	function updateGradient(isRising) {
		const redStart = isRising
			? Math.floor(progress * 60)
			: 60 - Math.floor(progress * 60)
		const whiteStart = isRising
			? 100 - Math.floor(progress * 60)
			: 40 + Math.floor(progress * 60)

		text.style.backgroundImage = `
      linear-gradient(0deg, #F83737 ${redStart}%, #F83737 ${redStart}%, transparent ${redStart}%),
      linear-gradient(180deg, white ${whiteStart}%, white ${whiteStart}%, transparent ${whiteStart}%)`

		progress += 0.05

		if (progress <= 1) {
			requestAnimationFrame(() => updateGradient(isRising))
		} else {
			progress = 0
			if (isRising) {
				clearInterval(intervalIdUp)
				startAnimationDown() // запустить анимацию спуска после подъема
			} else {
				clearInterval(intervalIdDown)
				startAnimationUp() // запустить анимацию подъема после спуска
			}
		}
	}

	function startAnimationUp() {
		clearInterval(intervalIdUp)
		intervalIdUp = setInterval(() => updateGradient(true), 1500) // вызывать updateGradient(true) каждые 2 секунды
	}

	function startAnimationDown() {
		clearInterval(intervalIdDown)
		intervalIdDown = setInterval(() => updateGradient(false), 1500) // вызывать updateGradient(false) каждые 5 секунд
	}

	startAnimationUp()
}

if (document.querySelector('.four')) {
	const text = document.querySelector('.four')
	let progress = 0
	const duration = 1000 // длительность анимации в миллисекундах
	let intervalIdUp // идентификатор интервала для анимации подъема
	let intervalIdDown // идентификатор интервала для анимации спуска
	let isForward = true // направление анимации

	function updateGradient(isRising) {
		const redStart = isRising
			? Math.floor(progress * 80)
			: 80 - Math.floor(progress * 80)
		const whiteStart = isRising
			? 100 - Math.floor(progress * 80)
			: 20 + Math.floor(progress * 80)

		text.style.backgroundImage = `
      linear-gradient(0deg, #F83737 ${redStart}%, #F83737ed ${redStart}%, transparent ${redStart}%),
      linear-gradient(180deg, white ${whiteStart}%, white ${whiteStart}%, transparent ${whiteStart}%)`

		progress += 0.05

		if (progress <= 1) {
			requestAnimationFrame(() => updateGradient(isRising))
		} else {
			progress = 0
			if (isRising) {
				clearInterval(intervalIdUp)
				startAnimationDown() // запустить анимацию спуска после подъема
			} else {
				clearInterval(intervalIdDown)
				startAnimationUp() // запустить анимацию подъема после спуска
			}
		}
	}

	function startAnimationUp() {
		clearInterval(intervalIdUp)
		intervalIdUp = setInterval(() => updateGradient(true), 2000) // вызывать updateGradient(true) каждые 2 секунды
	}

	function startAnimationDown() {
		clearInterval(intervalIdDown)
		intervalIdDown = setInterval(() => updateGradient(false), 1000) // вызывать updateGradient(false) каждые 5 секунд
	}

	startAnimationUp()
}

if (document.querySelector('.five')) {
	const text = document.querySelector('.five')
	let progress = 0
	const duration = 1000 // длительность анимации в миллисекундах
	let intervalIdUp // идентификатор интервала для анимации подъема
	let intervalIdDown // идентификатор интервала для анимации спуска
	let isForward = true // направление анимации

	function updateGradient(isRising) {
		const redStart = isRising
			? Math.floor(progress * 106)
			: 106 - Math.floor(progress * 106)
		const whiteStart = isRising
			? 100 - Math.floor(progress * 106)
			: 0 + Math.floor(progress * 106)

		text.style.backgroundImage = `
      linear-gradient(0deg, #F83737 ${redStart}%, #F83737 ${redStart}%, transparent ${redStart}%),
      linear-gradient(180deg, white ${whiteStart}%, white ${whiteStart}%, transparent ${whiteStart}%)`

		progress += 0.05

		if (progress <= 1) {
			requestAnimationFrame(() => updateGradient(isRising))
		} else {
			progress = 0
			if (isRising) {
				clearInterval(intervalIdUp)
				startAnimationDown() // запустить анимацию спуска после подъема
			} else {
				clearInterval(intervalIdDown)
				startAnimationUp() // запустить анимацию подъема после спуска
			}
		}
	}

	function startAnimationUp() {
		clearInterval(intervalIdUp)
		intervalIdUp = setInterval(() => updateGradient(true), 2500) // вызывать updateGradient(true) каждые 2 секунды
	}

	function startAnimationDown() {
		clearInterval(intervalIdDown)
		intervalIdDown = setInterval(() => updateGradient(false), 500) // вызывать updateGradient(false) каждые 5 секунд
	}

	startAnimationUp()
}
