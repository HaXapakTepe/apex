if (document.querySelector('#mapYandex')) {
	var points = [
		[
			'<div class="map-baloon"><p>г. Москва, ул. Название, д номер</p></div>',
			55.75562586957788,
			37.617153024359574,
		],
	]

	ymaps.ready(init)

	function init() {
		var myMap = new ymaps.Map('mapYandex', {
			center: [55.75562586957788, 37.617153024359574],
			zoom: 12,
		})

		var myCollection = new ymaps.GeoObjectCollection()

		for (var i = 0; i < points.length; i++) {
			var myPlacemark = new ymaps.Placemark(
				[points[i][1], points[i][2]],
				{
					balloonContent: points[i][0],
				},
				{
					iconLayout: 'default#image',
					// iconImageHref: '/apex/assets/images/icons/loca.svg',
					iconImageHref: '../../assets/images/icons/loca.svg',
					iconImageSize: [48, 48],
				}
			)
			myCollection.add(myPlacemark)
		}

		myMap.geoObjects.add(myCollection)

		// Обработчик клика на адрес
		var addressTitles = document.querySelectorAll('.stores__item-title')
		addressTitles.forEach(function (title) {
			title.addEventListener('click', function () {
				var coords = this.getAttribute('data-coords').split(',')
				myMap.setCenter([coords[0], coords[1]], 16)
			})
		})
	}
}
