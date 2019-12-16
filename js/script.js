
// modal window with big image
const showImage = (imageHolderAnchorObject) => {
  const src = imageHolderAnchorObject.getElementsByClassName("doc-img")[0].src;

  document.modalBG = document.createElement("div");
  document.modalBG.classList = "modal-bg flex-center";
  document.body.appendChild(document.modalBG);

  document.modalBG.addEventListener("click", closeModal);
  // document.onmousedown = (event) => {
  //     if (event.target == document.modalBG) closeModal();
  // };

  let modal = document.createElement("div");
  modal.classList = "modal";
  document.modalBG.appendChild(modal);

  let img = document.createElement("img");
  img.classList = "modal-img";
  img.src = src.replace("/thumbnails/", "/");
  modal.appendChild(img);

  // let p = document.createElement("p");
  // p.classList = "modal-p";
  // p.innerHTML = document.getElementsByClassName("doc-description")[0].innerHTML;
  // modal.appendChild(p);
};

const closeModal = () => {
  if (document.modalBG) {
    document.modalBG.parentElement.removeChild(document.modalBG);
    delete document.modalBG;
  }
};

document.addEventListener("keydown", (event) => event.code == "Escape" ? closeModal() : null);



// images lazy loading
const lazyLoading = () => {
  let imgs = document.getElementsByTagName("img");

  Array.from(imgs).forEach(img => {
    if (!img.hasAttribute("data-src")) return;

    let s = img.offsetTop;  // scrolled, docScrolled
    let dh = parseInt(getComputedStyle(img).height);  // docHeidht
    let wh = window.innerHeight;  // windowHeight
    let x = window.scrollY;  // sindowScrolled

    if (s + dh > x && s < x + wh) {
      img.src = img.getAttribute("data-src");
    }
  });
};
document.addEventListener("scroll", lazyLoading);


document.addEventListener("DOMContentLoaded", () => {
    lazyLoading();
});
