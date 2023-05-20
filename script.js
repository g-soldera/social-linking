let mode = "dark"

function toggleMode() {
  const html = document.documentElement
  const avatar = document.querySelector("#profile img")

  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    avatar.setAttribute("src", "assets/avatar.png")
    avatar.setAttribute(
      "style",
      "-webkit-filter: grayscale(100%); -webkit-filter: grayscale(1) filter: grayscale(100%);"
    )
  } else {
    avatar.setAttribute("src", "assets/avatar.png")
    avatar.setAttribute(
      "style",
      "-webkit-filter: grayscale(0%); -webkit-filter: grayscale(0) filter: grayscale(0%);"
    )
  }

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // if (mode === "light") {
  //   mode = "dark"
  //   document.body.classList.remove("light")
  // } else {
  //   mode = "light"
  //   document.body.classList.add("light")
  // }
}
