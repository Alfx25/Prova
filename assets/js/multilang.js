document.getElementById("it").addEventListener("click", () => {
  document.getElementById("gallery-navbar").innerHTML = "Galleria";
  document.getElementById("services-navbar").innerHTML = "Servizi";
  document.getElementById("plans-navbar").innerHTML = "Piani";
  document.getElementById("contact-navbar").innerHTML =
    '<i class="icon-speech"></i>CONTATTACI';
  document.getElementById("title-hero").innerHTML =
    "Agenzia di crescita <br> Influencer";
  document.getElementById("start-hero").innerHTML =
    '<i class="icon-cup"></i>INIZIAMO';
});

document.getElementById("en").addEventListener("click", () => {
  document.reset();
});
