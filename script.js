let mode = "dark"

function toggleMode() {
  // Select <html>
  const html = document.documentElement

  // Select img from div with "profile" id
  const avatar = document.querySelector("#profile img")

  // Toggle light mode by class
  html.classList.toggle("light")

  // Set avatar attributes according to classList content
  if (html.classList.contains("light")) {
    avatar.setAttribute("src", "assets/avatar.png")

    // Toggle grayscale filter (web-safe) on when lightmode
    // avatar.setAttribute(
    //   "style",
    //   "-webkit-filter: grayscale(100%); -webkit-filter: grayscale(1) filter: grayscale(100%);"
    // )
  } else {
    avatar.setAttribute("src", "assets/avatar.png")

    // Toggle grayscale filter (web-safe) off
    // avatar.setAttribute(
    //   "style",
    //   "-webkit-filter: grayscale(0%); -webkit-filter: grayscale(0) filter: grayscale(0%);"
    // )
  }

  // Add and remove light mode with classList content
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // Add and remove light mode with cache variable "mode"
  // if (mode === "light") {
  //   mode = "dark"
  //   document.body.classList.remove("light")
  // } else {
  //   mode = "light"
  //   document.body.classList.add("light")
  // }
}
