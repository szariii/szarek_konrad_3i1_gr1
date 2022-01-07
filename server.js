const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/", function (req, res) {
    res.send("<h1>my app on heroku! - kolejna mała zmiana pliku - Konrad Szarek 3I1 gr1</h1>")
})

app.get("/data", function (req, res) {
    res.send({imie: "Konrad", nazwisko: "Szarek", klasa: "3I1", grupa: "1"})
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
