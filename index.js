
import express from "express"
import { PORT } from "./config.js"
import cors from "cors"
import { connectDB } from "./db/db.js"
import cookieParser from "cookie-parser"
import session from "express-session"
import productRouter from "./routes/productRoutes.js"


const app = express()

app.use(cors({
    origin: "https://capitan24front.vercel.app",
    methods: [ "GET", "PUT", "POST", "DELETE", "OPTIONS"],
    credentials: true,
    optionsSuccessStatus: 200
}))

app.use(express.json({ limit: '50mb' }));
app.use(cookieParser())

app.use(session({
    secret : "secret",
    resave : false,
    saveUninitialized : false,
    cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
    }
}))


console.log("Conectando a MongoDB...");
connectDB()


app.use("/api/products", productRouter)
console.log("Exportando rutas desde productRouter");
console.log(productRouter);

app.listen(PORT, () => {
    console.log(`\n🚀 ===== SERVIDOR INICIADO EXITOSAMENTE ===== 🚀`);
    console.log(`📡 Puerto: ${PORT}`);
})
