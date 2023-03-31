import { FastifyInstance } from "fastify";
import i18next from "i18next";
import i18nextMiddleware from "i18next-http-middleware";
import Backend from "i18next-fs-backend";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const loadI18n = (fastify: FastifyInstance) => {
  i18next
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init({
      backend: {
        loadPath: __dirname + "/locales/{{lng}}/base.json",
        addPath: __dirname + "/locales/{{lng}}/{{ns}}.missing.json",
      },
      fallbackLng: "cat",
      preload: ["cat", "esp"],
      saveMissing: true,
    });

  fastify.register(i18nextMiddleware.plugin, { i18next });
};
