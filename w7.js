// Tombol hero interaktif
document.getElementById("joinBtn").addEventListener("click", function() {
    window.scrollTo({ top: document.getElementById("join").offsetTop - 50, behavior: "smooth" });
  });
  
  // Validasi form sederhana
  document.getElementById("joinForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("Semua kolom wajib diisi 🌿");
      event.preventDefault();
    } else {
      alert(`Terima kasih, ${name}! Kami akan menghubungimu segera 💚`);
    }
  });
  