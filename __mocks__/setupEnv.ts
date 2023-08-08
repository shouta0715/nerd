import { loadEnvConfig } from "@next/env";

const setupEnv = async () => {
  loadEnvConfig(process.env.PWD || process.cwd());
};

export default setupEnv;
