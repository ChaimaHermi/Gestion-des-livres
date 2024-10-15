import http from "http";

import app from "./app.js";
const server = http.createServer(app);
const Port = process.env.PORT || 5000;

const PORT = 5000; // You can change the port number if needed

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
