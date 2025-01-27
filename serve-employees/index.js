import express from "express";
import cors from "cors";

const app = express ();

// Configure CORS pour accepter les requêtes de http://localhost:3000
app.use(cors({ origin: ["http://localhost:5173"] }));

const port = 3310;

app.get("/api/employees", (req, res) => {
    res.json({
        results: [
            {
                name: { first: "Charlie", last: "Thompson" },
                email: "charlie.thompson@example.com",
                picture: { 
                    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
                },
            },
        ],
});

   });

   app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
   });
