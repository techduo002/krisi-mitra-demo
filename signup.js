const SUPABASE_URL = "https://kghafvoigkbcnpsikeow.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnaGFmdm9pZ2tiY25wc2lrZW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0ODI4OTIsImV4cCI6MjA3NjA1ODg5Mn0.F-b888j82DAx-IIkQacyQnJS1eBXnZdYVL8y_AI50DI";
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function signUpUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const fullName = document.getElementById('fullname').value;
  const role = document.getElementById('role').value;

  const { data, error } = await client.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role: role,
      },
    },
  });

  if (error) {
    alert("❌ " + error.message);
    return;
  }

  alert("✅ Signup successful! Please check your email to verify.");
  window.location.href = "login.html";
}
