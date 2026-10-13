// Topçuoğlu Peyzaj - ana betik
(function () {
  "use strict";

  var WHATSAPP_NUMBER = "905373193766"; // başında + olmadan

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");

  // Kaydırınca header'ı koyu yeşil yap
  function onScroll() {
    header.classList.toggle("is-solid", window.scrollY > 40);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobil menü
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    header.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
  }

  toggle.addEventListener("click", function () {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  // Hizmet kartına tıklayınca formdaki "Konu" alanını doldur
  var konu = document.getElementById("konu");
  document.querySelectorAll(".service-card[data-konu]").forEach(function (card) {
    card.addEventListener("click", function () {
      var value = card.getAttribute("data-konu");
      Array.prototype.forEach.call(konu.options, function (opt) {
        if (opt.text === value) konu.value = opt.value || opt.text;
      });
    });
  });

  // Form: doğrula, WhatsApp mesajı olarak aç
  var form = document.getElementById("contact-form");
  var note = document.getElementById("form-note");
  var defaultNote = note.textContent;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var data = new FormData(form);
    var ad = (data.get("ad") || "").trim();
    var soyad = (data.get("soyad") || "").trim();
    var telefon = (data.get("telefon") || "").trim();

    form.querySelectorAll(".is-invalid").forEach(function (el) { el.classList.remove("is-invalid"); });

    var missing = [];
    if (!ad) missing.push("ad");
    if (!telefon) missing.push("telefon");
    if (missing.length) {
      missing.forEach(function (name) { form.elements[name].classList.add("is-invalid"); });
      note.textContent = "Ad ve telefon alanlarını doldurun, size bu numaradan dönelim.";
      note.classList.add("is-error");
      form.elements[missing[0]].focus();
      return;
    }

    note.classList.remove("is-error");

    var lines = [
      "Merhaba, Topçuoğlu Peyzaj web sitesinden yazıyorum.",
      "",
      "Ad Soyad: " + ad + " " + soyad,
      "Telefon: " + telefon
    ];
    if (data.get("eposta")) lines.push("E-posta: " + data.get("eposta"));
    if (data.get("adres")) lines.push("Adres: " + data.get("adres"));
    lines.push("Konu: " + data.get("konu"));
    if (data.get("mesaj")) lines.push("", data.get("mesaj"));

    var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
    window.open(url, "_blank", "noopener");

    note.textContent = "WhatsApp açıldı. Mesajı oradan göndermeniz yeterli.";
    setTimeout(function () { note.textContent = defaultNote; }, 8000);
  });
})();
