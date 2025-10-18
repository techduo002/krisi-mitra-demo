const SUPABASE_URL = "https://kghafvoigkbcnpsikeow.supabase.co";
const SUPABASE_KEY = "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";
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadDashboard() {
  const { data: { user }, error } = await client.auth.getUser();

  if (error || !user) {
    alert("Please log in first.");
    window.location.href = "login.html";
    return;
  }

  document.getElementById("userEmail").textContent = user.email;
  document.getElementById("userName").textContent = user.user_metadata.full_name || "N/A";
  document.getElementById("userRole").textContent = user.user_metadata.role || "Farmer";

  // Example random tip
  const tips = [
    "💧 Water your crops early in the morning to reduce evaporation.",
    "🌾 Rotate crops each season to improve soil fertility.",
    "🌤️ Keep track of weather to plan irrigation.",
    "🪱 Use organic compost to enrich the soil naturally."
  ];
  document.getElementById("tipText").textContent = tips[Math.floor(Math.random() * tips.length)];
}

async function logoutUser() {
  await client.auth.signOut();
  alert("Logged out successfully!");
  window.location.href = "login.html";
}

loadDashboard();
