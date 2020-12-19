const port = process.env.PORT || 8080;
const express = require("express"),
  path = require("path"),
  app = express();

// Uncomment this code to put your site down for maintenance.
// app.use((req, res, next) => {
//   res.status(503).send('Site is down for maintenance, check back soon.');
// });

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.resolve(__dirname, "..", "client", "build")));
}

if (process.env.NODE_ENV === "production") {
  // Handle React routing, return all requests to React app
  app.get("*", (request, response) => {
    response.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
