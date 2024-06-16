import { Router } from "express";

const serverRouter = Router();

serverRouter.get("/", (req, res) => {
  res.send(
    [
        { 
            icon: "http://localhost:3001/images/serverIcons/serverIcon1.png",
            name: "Sus Server"
        }
    ]);
});

export default serverRouter;