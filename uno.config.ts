import extratorUna from "@una-ui/extractor-vue-script";

import presetUna from "@una-ui/preset";
import prefixes from "@una-ui/preset/prefixes";
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default {
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetUna(),
  ],
  extractors: [
    extratorUna({
      prefixes,
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
};
