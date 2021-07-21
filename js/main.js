import navigation from './navigation.js'
import confetti from 'https://cdn.skypack.dev/canvas-confetti'

navigation()

// jQuery is required to function correctly. Don't do this on a real project.
$(document).ready(function() {
  confetti()
})
