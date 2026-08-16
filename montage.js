/* -----------------------------------------------------------
   STUDIO STANDARD — CINEMATIC MONTAGE ENGINE
----------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("startExperience");
  const montageContainer = document.getElementById("montageContainer");
  const audioFrame = document.getElementById("bgAudio");

  /* -----------------------------------------------------------
     IMAGE + WORD DATA
  ----------------------------------------------------------- */

  const images = [
    "assets/images/1.png",
    "assets/images/2.png",
    "assets/images/3.png",
    "assets/images/4.png",
    "assets/images/5.png",
    "assets/images/6.png",
    "assets/images/7.png",
    "assets/images/8.png"
  ];

  const words = [
    "Fresh Up",
    "WITH",
    "WHEELER’S TV SERVICE",
    "AND RADIO",
    "Hill BARBER S",
    "7up",
    "1954 P566-927.9",
    "JOURS 9AM 72",
    "TUBES TESTED FREE",
    "1952",
    "CALL FOR PHILIP",
    "BRIS TUBES BAT"
  ];

  /* -----------------------------------------------------------
     UTILITY — CREATE ELEMENTS
  ----------------------------------------------------------- */

  function createImage(src) {
    const img = document.createElement("img");
    img.src = src;
    img.className = "ss-image";
    montageContainer.appendChild(img);
    return img;
  }

  function createWord(text) {
    const div = document.createElement("div");
    div.className = "ss-word";
    div.textContent = text;
    montageContainer.appendChild(div);
    return div;
  }

  /* -----------------------------------------------------------
     CINEMATIC SEQUENCING ENGINE
  ----------------------------------------------------------- */

  async function playSequence() {

    montageContainer.classList.remove("ss-hidden");

    // Fade-in effect
    montageContainer.style.opacity = 0;
    montageContainer.style.transition = "opacity 1.2s ease";
    setTimeout(() => {
      montageContainer.style.opacity = 1;
    }, 100);

    let delay = 0;

    // IMAGE SEQUENCE
    images.forEach((src, index) => {
      const img = createImage(src);

      setTimeout(() => {
        img.style.opacity = 1;
      }, delay);

      setTimeout(() => {
        img.style.opacity = 0;
      }, delay + 1200);

      delay += 1500;
    });

    // WORD SEQUENCE
    words.forEach((text, index) => {
      const word = createWord(text);

      setTimeout(() => {
        word.style.opacity = 1;
      }, delay);

      setTimeout(() => {
        word.style.opacity = 0;
      }, delay + 1000);

      delay += 1200;
    });
  }

  /* -----------------------------------------------------------
     START EXPERIENCE BUTTON
  ----------------------------------------------------------- */

  startBtn.addEventListener("click", () => {

    // Start YouTube audio
    audioFrame.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: "playVideo"
      }),
      "*"
    );

    // Start cinematic montage
    playSequence();
  });

});
