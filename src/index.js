import { httpServer } from "./app.js";

try {
  httpServer.listen(process.env.APP_PORT || 5100, () => {
    console.log("App is running on PORT", process.env.APP_PORT || 5100);
  });
} catch (err) {
  console.log("connection failed", err?.message);
}
