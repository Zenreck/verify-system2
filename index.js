export default function handler(req, res) {
    // If user is requesting HTML page
    if (req.method === "GET" && !req.query.code) {
        res.setHeader("Content-Type", "text/html");
        return res.status(200).send(`
<!DOCTYPE html>
<html>
<head>
    <title>Verify System</title>
</head>
<body style="font-family: Arial; text-align: center; margin-top: 100px;">
    <h1>Verification System 😎</h1>

    <button onclick="getCode()">Get Code</button>
    <input id="input" placeholder="Enter code" />
    <button onclick="check()">Verify</button>

    <p id="output"></p>

    <script>
        let currentCode = "";

        async function getCode() {
            const res = await fetch("?action=generate");
            const data = await res.json();
            currentCode = data.code;
            document.getElementById("output").innerText = "Code sent (check console 👀)";
            console.log("CODE:", currentCode);
        }

        function check() {
            const val = document.getElementById("input").value;

            if (val === currentCode) {
                document.getElementById("output").innerText = "✅ Verified!";
            } else {
                document.getElementById("output").innerText = "❌ Wrong code";
            }
        }
    </script>
</body>
</html>
        `);
    }

    // Generate verification code
    if (req.query.action === "generate") {
        const code = Math.floor(100000 + Math.random() * 900000);
        return res.status(200).json({ code });
    }

    return res.status(404).json({ error: "Not found" });
}
