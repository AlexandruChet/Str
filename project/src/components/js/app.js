let btnBlock = document.getElementById("btnBlock");
let text = document.getElementById("text");

btnBlock.onclick = function () {
	if (text.textContent === '') {
		text.textContent =
			'Renovarea este reînnoirea și îmbunătățirea spațiului. Mai întâi planificați, apoi alegeți materialele și, de asemenea, angajați specialiști calificați pentru lucrări de calitate.';
	} else {
		text.textContent = '';
	}
}

const navList = document.getElementById('nav-list');
const burgerMenu = document.getElementById('burger-menu');

burgerMenu.addEventListener('click', function () {
  navList.classList.toggle('active');
});

const BtnOpenText = document.querySelectorAll('#BtnOpenText')
const OpenTextP = document.querySelectorAll('.open_text_p')

BtnOpenText.forEach((element) => {
	element.addEventListener('click', () => {
		if (element.nextElementSibling.style.display === 'none') {
			element.nextElementSibling.style.display = 'block'
		} else {
			element.nextElementSibling.style.display = 'none'
		}
	})
})