
// modal window with big image
const showImage = (imageHolderAnchorObject) => {
  const src = imageHolderAnchorObject.getElementsByClassName("doc-img")[0].src;

  let modalBG = document.createElement("div");
  modalBG.classList = "modal-bg flex-center";
  document.body.appendChild(modalBG);
  const closeModal = () => {
    modalBG.parentElement.removeChild(modalBG);
  };
  modalBG.onclick = closeModal;
  // document.onmousedown = (event) => {
  //     if (event.target == modalBG) closeModal();
  // };

  let modal = document.createElement("div");
  modal.classList = "modal";
  modalBG.appendChild(modal);

  let img = document.createElement("img");
  img.classList = "modal-img";
  img.src = src.replace("/thumbnails/", "/");
  modal.appendChild(img);

  // let p = document.createElement("p");
  // p.classList = "modal-p";
  // p.innerHTML = document.getElementsByClassName("doc-description")[0].innerHTML;
  // modal.appendChild(p);
};



// images lazy loading
const lazyLoading = () => {
  let docs = document.getElementsByClassName("document");

  Array.from(docs).forEach(doc => {
    let s = doc.offsetTop;  // scrolled, docScrolled
    let dh = parseInt(getComputedStyle(doc).height);  // docHeidht
    let wh = window.innerHeight;  // windowHeight
    let x = window.scrollY;  // sindowScrolled

    if (s + dh > x && s < x + wh) {
      let img = doc.getElementsByClassName("doc-img")[0];
      img.src = img.getAttribute("data-src");
    }
  });
};
document.addEventListener("scroll", lazyLoading);


document.addEventListener("DOMContentLoaded", () => {
    lazyLoading();
});
