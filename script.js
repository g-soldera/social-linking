// "mode" variable to lines 42-49
// let mode = "dark"

// Select img from div with "profile" id
const avatar = document.querySelector("#profile img")

function toggleMode() {
  // Select <html> element
  const html = document.documentElement

  // Toggle light mode by class
  html.classList.toggle("light")

  // Set avatar attributes according to classList content
  if (html.classList.contains("light")) {
    // Change avatar image when light mode
    avatar.setAttribute("src", "assets/avatar.png")

    // Turn grayscale filter (web-safe) on when lightmode
    /* avatar.setAttribute(
      "style",
      "-webkit-filter: grayscale(100%); -webkit-filter: grayscale(1) filter: grayscale(100%);"
    ) */
  } else {
    // Change avatar image when dark mode
    avatar.setAttribute("src", "assets/avatar.png")

    // Turn grayscale filter (web-safe) off
    /* avatar.setAttribute(
      "style",
      "-webkit-filter: grayscale(0%); -webkit-filter: grayscale(0) filter: grayscale(0%);"
    ) */
  }

  // Add and remove light mode with classList content
  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  // Add and remove light mode with cache variable "mode" - Add class to <body> element - UNCOMMENT VARIABLE TO USE
  /* if (mode === "light") {
    mode = "dark"
    document.body.classList.remove("light")
  } else {
    mode = "light"
    document.body.classList.add("light")
  } */
}


// Open Avatar full-size pop-up (abreviated)
const popup = document.getElementById("popup")
const closeButton = document.getElementById("closeButton")

avatar.addEventListener("click", function () {
  popup.style.display = "block"
})

closeButton.addEventListener("click", function () {
  popup.style.display = "none"
})

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    popup.style.display = "none"
  }
})


// avatar.addEventListener("click", function () {
//   // Create Pop-up
//   const popup = document.createElement("div")
//   popup.className = "popup"

//   // Create fullImage Element
//   const fullImage = document.createElement("img")
//   fullImage.src = "assets/avatar.png"
//   fullImage.alt = "Imagem em tamanho real"

//   // Create close button
//   const closeButton = document.createElement("button")
//   closeButton.textContent = "Fechar" // Close button text, can be ""
//   closeButton.className = "closeButton"

//   // closeButton onclick event
//   closeButton.addEventListener("click", function () {
//     // Close pop-up
//     document.body.removeChild(popup)
//   })

//   // Add image and close button
//   popup.appendChild(fullImage)
//   popup.appendChild(closeButton)

//   // Add pop-up to <body>
//   document.body.appendChild(popup)

//   // Add escape key to close popup
//   document.addEventListener("keydown", function (event) {
//     if (event.key === "Escape") {
//       // Remove popup on escape press
//       document.body.removeChild(popup)
//     }
//   })
// })
