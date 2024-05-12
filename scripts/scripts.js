document.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body')
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const menuItem = document.querySelectorAll('.menu__item')

	const toggleMenu = () => {
		menu.classList.toggle('menu--active')
		burger.classList.toggle('burger--active')
		body.classList.toggle('no-scroll')
	}

	const clickOutsideMenu = event => {
		if (!menu.contains(event.target) && !burger.contains(event.target)) {
			menu.classList.remove('menu--active')
			burger.classList.remove('burger--active')
			body.classList.remove('no-scroll')
		}
	}

	burger.addEventListener('click', toggleMenu)
	document.addEventListener('click', clickOutsideMenu)

	// if (burger) {
	//   menuItem.forEach((item) => {
	//     item.addEventListener('click', () => {
	//       burger.classList.toggle('active')
	//       menu.classList.remove('active')
	//       body.classList.remove('no-scroll')
	//     })
	//   })
	// }

	const accordion = document.querySelectorAll('.accordion')

	accordion?.forEach(acc => {
		acc.addEventListener('click', function (e) {
			const content = this.querySelector('.accordion__content')
			if (!this.classList.contains('accordion--active')) {
				accordion.forEach(otherAcc => {
					if (otherAcc !== this) {
						const otherContent = otherAcc.querySelector('.accordion__content')
						otherAcc.classList.remove('accordion--active')
						otherContent.style.maxHeight = '0'
					}
				})
				this.classList.add('accordion--active')
				content.style.maxHeight = content.scrollHeight + 'px'
			} else {
				this.classList.remove('accordion--active')
				content.style.maxHeight = '0'
			}
		})
	})

	const menuLinks = document.querySelectorAll('[class][data-goto]')

	if (menuLinks.length > 0) {
		menuLinks.forEach(link => {
			link.addEventListener('click', onMenuLinkClick)
		})

		function onMenuLinkClick(e) {
			const link = e.target
			if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
				const gotoBlock = document.querySelector(link.dataset.goto)
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top
				window.scrollBy({
					top: gotoBlockValue,
					behavior: 'smooth',
				})
				e.preventDefault()
			}
		}
	}

	Fancybox.bind('[data-fancybox]')

	if (document.querySelector('[name="phone"]')) {
		const element = document.querySelector('[name="phone"]')
		const maskOptions = {
			mask: '+{7} 000 000 00 00',
		}
		const mask = IMask(element, maskOptions)
	}
	if (document.querySelector('.promo__swiperAlt')) {
		var swiperAlt = new Swiper('.promo__swiperAlt', {
			// loop: true,
			effect: 'fade',
			spaceBetween: 10,
			pagination: {
				el: '.promo__swiperAlt-pagination',
				// clickable: true,
			},
			// on: {
			// 	beforeSlideChangeStart: function () {
			// 		// Удаляем класс со всех слайдов перед переключением
			// 		var slides = document.querySelectorAll('.swiper-slide')
			// 		slides.forEach(function (slide) {
			// 			slide.classList.remove('swiper-slide--start')
			// 		})
			// 	},
			// 	slideChangeTransitionEnd: function () {
			// 		// Добавляем класс к активному слайду после переключения
			// 		var activeSlide = document.querySelector('.swiper-slide-active')
			// 		if (activeSlide) {
			// 			activeSlide.classList.add('swiper-slide--start')
			// 		}
			// 	},
			// },
		})
	}
	if (document.querySelector('.promo__swiperBig')) {
		var swiperSmall = new Swiper('.promo__swiperSmall', {
			loop: true,
			spaceBetween: 23,
			slidesPerView: 4,
			allowTouchMove: false,
			simulateTouch: false,
			breakpoints: {
				1441: {
					slidesPerView: 4,
					spaceBetween: 23,
				},
				993: {
					slidesPerView: 3,
					spaceBetween: 16,
				},
				769: {
					slidesPerView: 2.5,
					spaceBetween: 16,
				},
				577: {
					slidesPerView: 2.3,
					spaceBetween: 16,
				},
				414: {
					slidesPerView: 2,
					spaceBetween: 16,
				},
				320: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
			},
		})
		var swiperBig = new Swiper('.promo__swiperBig', {
			loop: true,
			spaceBetween: 10,
			// allowTouchMove: false,
			// simulateTouch: false,
			navigation: {
				nextEl: `.promo__swiper-next`,
				prevEl: `.promo__swiper-prev`,
			},
			thumbs: {
				swiper: swiperSmall,
			},
		})
	}
	if (document.querySelector('.projects__swiper')) {
		var projectsSwiper = new Swiper('.projects__swiper', {
			slidesPerView: 2.5,
			spaceBetween: 0,
			pagination: {
				el: `.projects__pagination`,
				type: 'fraction',
				formatFractionCurrent: function (number) {
					return number >= 10 ? number.toString() : '0' + number
				},
				formatFractionTotal: function (number) {
					return number >= 10 ? number.toString() : '0' + number
				},
			},
			navigation: {
				nextEl: `.projects__next`,
				prevEl: `.projects__prev`,
			},
			breakpoints: {
				1367: {
					slidesPerView: 2.5,
				},
				993: {
					slidesPerView: 2.2,
				},
				769: {
					slidesPerView: 1.2,
				},
				577: {
					slidesPerView: 2.2,
				},
				480: {
					slidesPerView: 1.2,
				},
				320: {
					slidesPerView: 1.2,
				},
			},
		})
	}
	if (document.querySelector('.services__swiper')) {
		var servicesSwiper = new Swiper('.services__swiper', {
			slidesPerView: 4,
			spaceBetween: 0,
			breakpoints: {
				993: {
					slidesPerView: 4,
				},
				769: {
					slidesPerView: 3,
				},
				577: {
					slidesPerView: 2,
				},
				361: {
					slidesPerView: 1.8,
				},
				320: {
					slidesPerView: 1.1,
				},
			},
			navigation: {
				nextEl: `.services__swiper-next`,
				prevEl: `.services__swiper-prev`,
			},
		})
	}
	if (document.querySelector('.clients__swiper')) {
		var clientsSwiper = new Swiper('.clients__swiper', {
			pagination: {
				el: '.clients__pagination',
				type: 'fraction',
				formatFractionCurrent: function (number) {
					return number >= 10 ? number.toString() : '0' + number
				},
				formatFractionTotal: function (number) {
					return number >= 10 ? number.toString() : '0' + number
				},
			},
			navigation: {
				nextEl: `.clients__next`,
				prevEl: `.clients__prev`,
			},
			breakpoints: {
				1440: {
					slidesPerView: 7,
					spaceBetween: 55,
				},
				1367: {
					slidesPerView: 6,
					spaceBetween: 55,
				},
				993: {
					slidesPerView: 5,
					spaceBetween: 30,
				},
				769: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				577: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				414: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				320: {
					slidesPerView: 1.4,
					spaceBetween: 15,
				},
			},
		})
	}
	if (document.querySelector('.certificates__swiper')) {
		var certificatesSwiper = new Swiper('.certificates__swiper', {
			spaceBetween: 7,
			pagination: {
				el: '.certificates__pagination',
				type: 'fraction',
				formatFractionCurrent: function (number) {
					return number >= 10 ? number.toString() : '0' + number
				},
				formatFractionTotal: function (number) {
					return number >= 10 ? number.toString() : '0' + number
				},
			},
			navigation: {
				nextEl: `.certificates__next`,
				prevEl: `.certificates__prev`,
			},
			breakpoints: {
				1440: {
					slidesPerView: 5,
				},
				1367: {
					slidesPerView: 4,
				},
				993: {
					slidesPerView: 4,
				},
				769: {
					slidesPerView: 3,
				},
				577: {
					slidesPerView: 2,
				},
				414: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1.1,
				},
			},
		})
	}
	if (document.querySelector('.blog__swiper')) {
		var blogSwiper = new Swiper('.blog__swiper', {
			pagination: {
				el: '.blog__pagination',
				type: 'fraction',
				formatFractionCurrent: function (number) {
					return number >= 10 ? number.toString() : '0' + number
				},
				formatFractionTotal: function (number) {
					return number >= 10 ? number.toString() : '0' + number
				},
			},
			navigation: {
				nextEl: `.blog__next`,
				prevEl: `.blog__prev`,
			},
			breakpoints: {
				993: {
					slidesPerView: 3,
				},
				769: {
					slidesPerView: 2,
				},
				577: {
					slidesPerView: 2,
				},
				414: {
					slidesPerView: 1.4,
				},
				320: {
					slidesPerView: 1.1,
				},
			},
		})
	}

	// const slidersSwipers = []
	// const sliderSwiper = document.querySelectorAll('.slider__swiper')
	// sliderSwiper?.forEach((swiper, index) => {
	// 	slidersSwipers.push(setSlidersSwiper(index + 1))
	// })
	// function setSlidersSwiper(index) {
	// 	return new Swiper(`.slider__swiper--${index}`, {
	// 		navigation: {
	// 			prevEl: `.slider__arrow-prev--${index}`,
	// 			nextEl: `.slider__arrow-next--${index}`,
	// 		},
	// 		breakpoints: {
	// 			992: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 32,
	// 			},
	// 			768: {
	// 				slidesPerView: 2.1,
	// 				spaceBetween: 24,
	// 			},
	// 			576: {
	// 				slidesPerView: 1.6,
	// 				spaceBetween: 16,
	// 			},
	// 			414: {
	// 				slidesPerView: 1.5,
	// 				spaceBetween: 12,
	// 			},
	// 			320: {
	// 				slidesPerView: 1.1,
	// 				spaceBetween: 12,
	// 			},
	// 		},
	// 	})
	// }
})
