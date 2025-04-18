import lume from "lume/mod.ts";
import theme from "theme/mod.ts";

const site = lume();

site.use(theme());

const files = [
  "_data.yml",
  "favicon.svg",
  "index.yml",
];
for (const file of files) {
  site.remoteFile(file, import.meta.resolve(`../src/${file}`));
}

export default site;
