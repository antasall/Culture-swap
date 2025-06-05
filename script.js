document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("testimonialForm");
  const testimonialsDiv = document.getElementById("testimonials");

  // Affichage des témoignages depuis le stockage local
  if (testimonialsDiv) {
    const stored = JSON.parse(localStorage.getItem("testimonials") || "[]");
    if (stored.length === 0) {
      testimonialsDiv.innerHTML = "<p>Aucun témoignage pour le moment.</p>";
    } else {
      testimonialsDiv.innerHTML = stored.map(t => `
        <div style="margin-bottom:20px;">
          <strong>${t.name}</strong> (${t.country})<br>
          <p>${t.message}</p>
        </div>
      `).join("");
    }
  }

  // Soumission du formulaire
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.name.value;
      const country = form.country.value;
      const message = form.message.value;

      const data = { name, country, message };
      const existing = JSON.parse(localStorage.getItem("testimonials") || "[]");
      existing.push(data);
      localStorage.setItem("testimonials", JSON.stringify(existing));

      alert("Merci pour ton témoignage !");
      form.reset();
    });
  }
});
