document.getElementById("sendBtn").addEventListener("click", async () => {
  const input = document.getElementById("userInput").value;

  try {
    const res = await fetch(`${BACKEND_URL}/yourRoute`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input })
    });

    const data = await res.json();
    document.getElementById("response").innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    document.getElementById("response").innerText = "Error: " + err.message;
  }
});