const hamburger = document.querySelector('.nav-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const cross = document.querySelector('#cross');
const animatorAll = document.querySelector('.animators');
hamburger.addEventListener('click', () => {
  mobileMenu.style.left = '0';
});

cross.addEventListener('click', () => {
  mobileMenu.style.left = '-100%';
});

const animators = [
  {
    name: 'Osamu Tezuka',
    url: 'img/artist-1.jpg',
    about: 'Japanese cartoonist, manga artist, and animator.',
    text: 'Prefecture and innovative redefinitions of genres earned him.',
  },
  {
    name: 'Hayao Miyazaki',
    url: 'img/artist-2.jpg',
    about: 'Manga artist, and animator.',
    text: 'Studio Ghibli’s Hayao Miyazaki names the essential ’50 books to read to your children’',
  },
  {
    name: 'Kazuchika Kise',
    url: 'img/artist-3.jpg',
    about: 'Japanese cartoonist, manga artist.',
    text: 'Animation is a method of photographing successive drawings, models, or even puppets.',
  },
  {
    name: 'Kazuhiro Furuhashi',
    url: 'img/artist-4.jpg',
    about: 'Animator',
    text: 'Principles of Animation are Timing and Spacing, Squash and Stretch',
  },
  {
    name: 'Shigeo Koshi',
    url: 'img/artist-5.jpg',
    about: 'Cartoonist, manga artist, and animator.',
    text: 'Animators analyses specific films',
  },
  {
    name: 'Ayumi Kurashima',
    url: 'img/artist-6.jpg',
    about: 'Japanese manga artist.',
    text: 'Magically animate your designs with just one click.',
  },
];

/* <div class="animator">
      <img src="img/artist-1.jpg" alt="">
      <div class="animator-description column flex-column">
          <h3>Osamu Tezuka</h3>
          <p><i>Japanese cartoonist, manga artist, and animator.</i></p>
          <hr>
          <p>Prefecture and innovative redefinitions of genres earned him.</p>
      </div>
    </div> */

// eslint-disable-next-line no-plusplus
for (let i = 0; i < animators.length; i++) {
  const div = document.createElement('div');
  div.classList.add('animator');

  const img = document.createElement('img');
  img.src = animators[i].url;

  const innerDiv = document.createElement('div');
  innerDiv.classList.add('animator-description', 'column', 'flex-column');

  const h3 = document.createElement('h3');
  h3.innerHTML = animators[i].name;

  const p1 = document.createElement('p');
  const italic = document.createElement('i');
  italic.innerHTML = animators[i].about;
  p1.appendChild(italic);

  const hr = document.createElement('hr');

  const p2 = document.createElement('p');
  p2.innerHTML = animators[i].text;

  innerDiv.append(h3, p1, hr, p2);
  div.append(img, innerDiv);
  animatorAll.append(div);
}