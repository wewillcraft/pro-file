import lightningcss from "lume/plugins/lightningcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import inline from "lume/plugins/inline.ts";
import icons from "lume/plugins/icons.ts";
import typography from "npm:@tailwindcss/typography";
import postcss from "lume/plugins/postcss.ts";
import basePath from "lume/plugins/base_path.ts";
import metas from "lume/plugins/metas.ts";
import { Options as SitemapOptions, sitemap } from "lume/plugins/sitemap.ts";
import { favicon, Options as FaviconOptions } from "lume/plugins/favicon.ts";
import { merge } from "lume/core/utils/object.ts";

import "lume/types.ts";

export interface Options {
  sitemap?: Partial<SitemapOptions>;
  favicon?: Partial<FaviconOptions>;
}

export const defaults: Options = {
  favicon: {
    input: "favicon.svg",
  },
};

/** Configure the site */
export default function (userOptions?: Options) {
  const options = merge(defaults, userOptions);

  return (site: Lume.Site) => {
    site.use(lightningcss())
      .use(basePath())
      .use(metas())
      .use(icons())
      .use(inline())
      .use(sitemap(options.sitemap))
      .use(favicon(options.favicon))
      .use(tailwindcss({
        options: {
          plugins: [typography],
        },
      }))
      .use(postcss());
  };
}
