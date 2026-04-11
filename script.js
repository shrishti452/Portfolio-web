// 🔥 Preloader (smooth hide)
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("preloader");
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);
});

// 🔥 Typing Animation (improved smooth)
const roles = ["I'm a Developer", "I'm a Designer", "I'm a Problem Solver"];
let i = 0;
let j = 0;
let isDeleting = false;
function type() {
  const text = roles[i];
  document.querySelector(".typing").textContent = text.substring(0, j);
  if (!isDeleting) {
    j++;
    if (j > text.length) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    j--;
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
type();
// 🔥 Custom Cursor (circle + dot)
const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  dot.style.top = y + "px";
  dot.style.left = x + "px";
});
// 🔥 Cursor Hover Effects (smooth & professional)
document.querySelectorAll("button, .icons span").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
    cursor.style.borderColor = "white";
    dot.style.transform = "translate(-50%, -50%) scale(1.5)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursor.style.borderColor = "cyan";
    dot.style.transform = "translate(-50%, -50%) scale(1)";
  });
});
// 🔥 SECTION SWITCH
function showSection(id, el) {
  document.querySelectorAll(".section").forEach((sec) => {
    sec.style.display = "none";
    sec.classList.remove("show");   // 🔥 added
  });

  const current = document.getElementById(id);

  current.style.display = id === "home" ? "flex" : "block";

  // 🔥 animation trigger
  setTimeout(() => {
    current.classList.add("show");  // 🔥 added
  }, 10);

  document.querySelectorAll("nav ul li").forEach((li) => {
    li.classList.remove("active");
  });
  el.classList.add("active");

  // 🔥 trigger animations (same as your code)
  if (id === "skills") {
    animateBars();
    animateCircles();
  }
}

// 🔥 Cursor fix (important update)
document.querySelectorAll("button, .icons i, .card").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
    cursor.style.borderColor = "white";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursor.style.borderColor = "cyan";
  });
});


function animateCircles(){
    const circles=document.querySelectorAll(".circle-skill");
    circles.forEach(circle=>{
        let percent=circle.getAttribute("data-percent");
        let start=0;
        let interval=setInterval(()=>{
            start++;
            circle.style.background=
            `conic-gradient(cyan ${start*3.6}deg, #222 0deg)`;
            if (start>=percent)
            {
                clearInterval(interval);
            }
        },15);
    });
}

function animateBars() {
  const bars = document.querySelectorAll(".progress div");
  bars.forEach((bar) => {
    let width = bar.getAttribute("data-width");
    setTimeout(() => {
      bar.style.width = width;
    }, 200);
  });
}

// 🔥 First load animation
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("home").classList.add("show");
});

document.addEventListener("mousedown", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(2.5)";
  dot.style.transform = "translate(-50%, -50%) scale(2)";
});

document.addEventListener("mouseup", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(1)";
  dot.style.transform = "translate(-50%, -50%) scale(1)";
});  