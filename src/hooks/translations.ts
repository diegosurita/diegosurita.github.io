import { existsSync, readdirSync, readFileSync } from "node:fs";
import { ReactNode } from "react";
import parse from "html-react-parser";

type Dictionary = Record<string, string>;

const getDictionary = (files: string[], folder: string): Dictionary => {
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

export default function useTranslations(lang: string) {
  const folder = `${process.cwd()}/src/i18n/${lang}`;
  if (!existsSync(folder)) {
    throw new Error(`Folder ${folder} does not exist`);
  }

  const files = readdirSync(folder);
  const dictionary: Dictionary = getDictionary(files, folder);

  return {
    t: (key: string): ReactNode => {
      const keys = key.split('.');
      const result = keys.reduce<unknown>((obj, key) => {
        if (obj && typeof obj === 'object') {
          return (obj as Record<string, unknown>)[key];
        }
        return undefined;
      }, dictionary);
      if (typeof result !== 'string') {
        console.warn(`Translation key "${key}" did not return a string`);
        return key;
      }
      return parse(result);
    },
  };
}
