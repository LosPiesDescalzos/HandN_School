// (function() {
//   document.addEventListener("DOMContentLoaded", () => {
//     displayActiveButton()
//   })
// })();
//
// function displayActiveButton() {
//   const navigationLinks = document.querySelectorAll('.block');
//
//   if (document.location.pathname.includes("index") || document.location.pathname.endsWith('/')) {
//     [...navigationLinks].find(link => link.dataset.link === 'index').classList.add('block__active')
//   }
//
//   if (document.location.pathname.includes("courses")) {
//     [...navigationLinks].find(link => link.dataset.link === 'courses').classList.add('block__active')
//   }
//
//   if (document.location.pathname.includes("parents")) {
//     [...navigationLinks].find(link => link.dataset.link === 'parents').classList.add('block__active')
//   }
//
//   if (document.location.pathname.includes("account")) {
//     [...navigationLinks].find(link => link.dataset.link === 'account').classList.add('block__active')
//   }
//
//   if (document.location.pathname.includes("students")) {
//     [...navigationLinks].find(link => link.dataset.link === 'students').classList.add('block__active')
//   }
//
// }
