var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'), // Required
  path: 'https://raw.githubusercontent.com/duschno/duschno.github.io/main/data.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
})