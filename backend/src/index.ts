import { setupServer } from "./config/server-setup";

const PORT = 3000;

const start = async () => {
  let server;
  try {
    server = await setupServer();
    server.listen(PORT, () => {
      console.log(`Server running on ${PORT} `);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
start();
