import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import connectDB from "./config/connectDB";
import cors from 'cors'

require('dotenv').config();


let app = express();
// app.use(cors({ origin: true }))
app.use(cors({ credentials: true, origin: true })); //vid62 ủa sao của mình khác ổng nhể, cái này là làm theo 1 cmt youtube
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

viewEngine(app);
initWebRoutes(app);


connectDB();

let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log("Project is running on the port: " + port)
})