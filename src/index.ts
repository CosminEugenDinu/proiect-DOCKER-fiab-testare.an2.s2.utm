import express from "express";
import { Request as Req, Response as Res } from "express";

const app = express();
app.set("json spaces", 2);
app.get("/", (req: Req, res: Res) => {
  res.json({
    titlu: "Testare Docker",
    student: {
      nume: "Dinu Eugen Cosmin",
      anul: "II",
      "an-universitar": "2021-2022",
      "forma-invatamant": "ID"
    },
    universitatea: "Titu Maiorescu",
    facultatea: "Informatica"
  })
})
const port = process.env.port || 3333;
app.listen(port, () => console.log("Listening on port: ", port));