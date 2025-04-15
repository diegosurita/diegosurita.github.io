import { existsSync, readdirSync, readFileSync } from "node:fs";
import { ReactNode } from "react";
import parse from "html-react-parser";

const getDictionary = (files: string[], folder: string): Record<string, any> => {
  return files
    .map((file) => {
      const name = file.replace(".json", "");
      const content = readFileSync(`${folder}/${file}`, "utf8");
      return { [name]: JSON.parse(content) };
    })
    .reduce((acc, item) => {
      return {
        ...acc,
        ...item,
      };
    }, {});
};
export default function useTranslations(locale: string) {
  const folder = `${process.cwd()}/src/i18n/${locale}`;
  if (!existsSync(folder)) {
    throw new Error(`Folder ${folder} does not exist`);
  }

  const files = readdirSync(folder);
  const dictionary = getDictionary(files, folder);

  return {
    t: (key: string): ReactNode => {
      const keys = key.split('.');
      const result = keys.reduce((obj, key) => obj?.[key], dictionary);
      if (typeof result !== 'string') {
        console.warn(`Translation key "${key}" did not return a string`);
        return key;
      }
      return parse(result);
    },
  };
}
