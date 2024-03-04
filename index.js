import express from "express";
//import file system inbuilt module
import fs from "fs";

import { format } from "date-fns";

const app = express();
//the server port 4000
const PORT = 4000;

//the date  is formatted to be displayed as dd/MM/yyyy HH:mm:ss
let date = format(new Date(), " dd-MM-yyyy  HH-mm-ss");
const filePath = `timeStamp/${date}.txt`;
  

app.get("/write", (req, res) => {
    try {
      //to write file
    fs.writeFileSync(filePath, `${date}`, "utf8");
    res
      .status(200)
      .send(
        `<h1 style="text-align:center;background-color:aliceblue;">${date}</h1>`
      );
  } catch (error) {
    console.error("Error writing file:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/read", (req, res) => {

    try {
      //to read file
      let date = fs.readFileSync(filePath, "utf8");
     
    res
      .status(200)
      .send(
        `<h1 style="text-align:center;background-color:yellow;">${date}</h1>`
      );
  } catch (error) {
    console.error("Error reading file:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});
