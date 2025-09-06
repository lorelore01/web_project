import express from 'express';
import cors from 'cors';

const app = express();
const port:number = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    console.log("aaa");
    res.json({ message: "Olá, do servidor!" });
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

