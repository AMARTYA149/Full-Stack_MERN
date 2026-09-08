import app from "./app";
import { Config } from "./config";
import logger from "./config/logger";

const startServer = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => {
            logger.info("Server listening on port: ", { port: PORT });
        });
    } catch (error) {
        console.error("Something went wrong: ", error);
        process.exit(1);
    }
};

startServer();
