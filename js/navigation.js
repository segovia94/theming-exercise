export default function navigation() {
  const toggles = document.querySelectorAll('.menu__toggle')

  toggles.forEach(toggle => {
    const parent = toggle.parentElement

    toggle.addEventListener('click', () => {
      parent.classList.toggle('menu--open')
    })
  })
}
