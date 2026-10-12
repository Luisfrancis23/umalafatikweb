const WHATSAPP_NUMBER = "966500000000"; // 👈 your real number, no + or spaces

// Mobile nav toggle
document.getElementById("menuToggle").onclick = () => {
  document.getElementById("navLinks").classList.toggle("open");
};
document.querySelectorAll("#navLinks a").forEach(a =>
  a.addEventListener("click", () => document.getElementById("navLinks").classList.remove("open"))
);

// Reservation → WhatsApp
document.getElementById("reserveForm").onsubmit = e => {
  e.preventDefault();
  const name = rName.value, email = rEmail.value, phone = rPhone.value;
  const guests = rGuests.value, date = rDate.value, time = rTime.value;
  const msg = `Hello Uma Lafatik! I'd like to reserve a table.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nGuests: ${guests}\nDate: ${date}\nTime: ${time}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  document.getElementById("reserveMsg").textContent = "Opening WhatsApp to confirm your reservation…";
};
