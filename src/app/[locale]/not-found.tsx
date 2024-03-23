"use client";

import { useTranslations } from "next-intl";

export default function NotFound(){
  const t = useTranslations("NotFoundPage");
  return (
    <html>
      <body>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </body>
    </html>
  );
};