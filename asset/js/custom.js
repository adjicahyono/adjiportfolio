$(document).ready(function () {
  //Remove Preloader
  $("#preloader").fadeOut("slow");

  // Set Animasi
  init_animate();
});
// Trigger Element with class animate_animated
function init_animate() {
  $(".animate__animated").each(function () {
    $(this).on("iniview", function (event, isInview) {
      // Mengambil nilai dari attribute data-animate
      var animate_class = $(this).attr("data-animate");
      // Mendeteksi element ketika tampil
      if (isInview) {
        // Jika tampil/visible
        $(this).addClass(animate_class);
      } else {
        // Jika tidak tampil / not visible
        $(this).removeClass(animate_class);
      }
    });
  });
}
