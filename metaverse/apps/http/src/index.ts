import express from "express";
import { router } from "./routes/v1";

import client from "@repo/db/client"

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());


app.use("/api/v1",router)

app.listen(PORT,()=>{
    console.log(`Server is running on the ${PORT}`)
})