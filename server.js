const express = require("express")
const connectDB = require("./config/db")

const app = express()

//Connect Database
connectDB()

//Init Middleware
app.use(express.json({ extended: false }))

app.get("/", (req, res) => res.json({ msg: "Welcome baby" }))

//bringing in Filles ie Define Routes
//every backend api starts with /api
app.use("/api/users", require("./routes/users"))
app.use("/api/auth", require("./routes/auth"))
app.use("/api/contacts", require("./routes/contacts"))

const PORT = process.env.PORT || 5000
//looks for environment variable first
//5000 uses local port in buildstage

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

/* to start in dev environment: npm run server */
