import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NoticePage } from "src/libs/next/types";

export const getMarkdowns = () => {
  const docsPath = path.join(process.cwd(), "src/docs/notice");
  const subfolders = fs
    .readdirSync(docsPath)
    .filter((folder) => fs.statSync(path.join(docsPath, folder)).isDirectory());

  subfolders.sort((a, b) => parseInt(b, 10) - parseInt(a, 10));

  const markdowns: NoticePage["markdowns"] = subfolders.flatMap((folder) => {
    const folderPath = path.join(docsPath, folder);
    const filenames = fs
      .readdirSync(folderPath)
      .filter((file) => path.extname(file) === ".md");

    return filenames.map((filename) => {
      const filePath = path.join(folderPath, filename);
      const content = fs.readFileSync(filePath, "utf8");
      const parsed = matter(content);

      return {
        content: parsed.content,
        title: parsed.data.title,
        date: parsed.data.date,
        category: parsed.data.category,
        importance: parsed.data.importance,
      };
    });
  });

  return markdowns;
};
