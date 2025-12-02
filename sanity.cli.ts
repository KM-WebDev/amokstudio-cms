import { defineCliConfig } from "sanity/cli";
import { Dataset } from "./env";

export default defineCliConfig({
    api: {
        projectId: "32tlrsqk",
        dataset: Dataset,
    },
    deployment: {
        /**
         * Enable auto-updates for studios.
         * Learn more at https://www.sanity.io/docs/cli#auto-updates
         */
        autoUpdates: true,
    },
});
