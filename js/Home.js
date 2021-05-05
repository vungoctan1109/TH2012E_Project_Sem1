// scrollAppear;
function scrollAppear() {
  var controlTitle = document.querySelectorAll(".control-title");
  var controFooter = document.querySelectorAll(".controlfooter");
  var screenPosition = window.innerHeight / 1.1;
  var screenPositionbottom = window.innerHeight / 20;
  //  controFooter;
  for (let i = 0; i < controFooter.length; i++) {
    let introPosition = controFooter[i].getBoundingClientRect().top;
    if (introPosition < screenPosition) {
      controFooter[i].classList.add("animate__fadeInUp");
    }
  }
  // controlTitle;
  for (let i = 0; i < controlTitle.length; i++) {
    let introPosition = controlTitle[i].getBoundingClientRect().top;
    let introPositionBottom = controlTitle[i].getBoundingClientRect().bottom;
    if (introPosition < screenPosition) {
      controlTitle[i].classList.add("intro-appear");
    }
    // else {
    //   controlTitle[i].classList.remove("intro-appear");
    // }
    // if (introPositionBottom < screenPositionbottom) {
    //   controlTitle[i].classList.remove("intro-appear");
    // }
  }
}
window.addEventListener("scroll", scrollAppear);
$(window).on("load", function (event) {
  $("body").removeClass("preloading");
  $(".loaderbox").delay(1000).fadeOut("slow");
});
