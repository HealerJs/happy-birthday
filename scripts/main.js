const letterLoad = () => {
  let paragraphs = document.querySelectorAll("#happyText p");
  let delay = 0;

  paragraphs.forEach((p, index) => {
    setTimeout(() => {
      p.style.opacity = 1;
    }, delay);
    delay += 2000;
  });
}

class MainRouter {
  constructor() {
    this.main = document.getElementById("main");
    this.pages = this.main.children;
  }

  changeRoute(contentId) {
    Array.from(this.pages).forEach(page => {
      page.style.display = page.id === contentId ? "block" : "none";
    });
    if(contentId == "love"){
      letterLoad()
    }
  }
}

class RouterMenu extends MainRouter {
  constructor() {
    super();
    const musicBtn = document.getElementById("musicBtn");
    const cakeBtn = document.getElementById("cakeBtn");
    const letterBtn = document.getElementById("letterBtn");

    this.setRoute(cakeBtn, "cakePage");
    this.setRoute(musicBtn, "musicPlayer");
    this.setRoute(letterBtn, "love");

    // DEFAULT ROUTE
    this.route("cakePage");
  }

  setRoute(btn, contentId) {
    btn.onclick = () => this.route(contentId);
  }

  route(contentId) {
    this.changeRoute(contentId);
  }
}



function extinguish() {
  const flame = document.querySelector('.flame');
  flame.style.display = 'none';
  const smoke = document.createElement('div');
  smoke.classList.add('smoke');
  document.querySelector('.candle').appendChild(smoke);
}

document.addEventListener("DOMContentLoaded", () => {
  new RouterMenu();
});