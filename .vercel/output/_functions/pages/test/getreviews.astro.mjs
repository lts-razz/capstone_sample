import { e as createComponent, r as renderTemplate, o as renderHead } from '../../chunks/astro/server_Bg41pT7u.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Getreviews = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><title>Test Get Venue Reviews API</title>', '</head> <body> <h1>Test Get Venue Reviews</h1> <form id="venueReviewsForm"> <input name="venueId" placeholder="Venue ID" value="venueId-123"> <input name="page" type="number" placeholder="Page" value="1"> <input name="limit" type="number" placeholder="Limit" value="5"> <button type="submit">Fetch Venue Reviews</button> </form> <pre id="output"></pre> <script>\n      const form = document.getElementById("venueReviewsForm");\n      const output = document.getElementById("output");\n\n      form?.addEventListener("submit", async (e) => {\n        e.preventDefault();\n        const formData = new FormData(form);\n        const venueId = formData.get("venueId") || "";\n        const page = formData.get("page") || "1";\n        const limit = formData.get("limit") || "5";\n\n        try {\n          const res = await fetch(\n            `/api/reviews/get?venueId=${encodeURIComponent(venueId)}&page=${page}&limit=${limit}`\n          );\n          const text = await res.text();\n\n          let data;\n          try {\n            data = JSON.parse(text);\n          } catch {\n            output.textContent = "\u274C Invalid JSON:\\n" + text;\n            return;\n          }\n\n          output.textContent = "\u2705 Response:\\n" + JSON.stringify(data, null, 2);\n        } catch (err) {\n          output.textContent = "\u274C Request failed: " + err;\n        }\n      });\n    <\/script> </body> </html>'], ['<html lang="en"> <head><meta charset="UTF-8"><title>Test Get Venue Reviews API</title>', '</head> <body> <h1>Test Get Venue Reviews</h1> <form id="venueReviewsForm"> <input name="venueId" placeholder="Venue ID" value="venueId-123"> <input name="page" type="number" placeholder="Page" value="1"> <input name="limit" type="number" placeholder="Limit" value="5"> <button type="submit">Fetch Venue Reviews</button> </form> <pre id="output"></pre> <script>\n      const form = document.getElementById("venueReviewsForm");\n      const output = document.getElementById("output");\n\n      form?.addEventListener("submit", async (e) => {\n        e.preventDefault();\n        const formData = new FormData(form);\n        const venueId = formData.get("venueId") || "";\n        const page = formData.get("page") || "1";\n        const limit = formData.get("limit") || "5";\n\n        try {\n          const res = await fetch(\n            \\`/api/reviews/get?venueId=\\${encodeURIComponent(venueId)}&page=\\${page}&limit=\\${limit}\\`\n          );\n          const text = await res.text();\n\n          let data;\n          try {\n            data = JSON.parse(text);\n          } catch {\n            output.textContent = "\u274C Invalid JSON:\\\\n" + text;\n            return;\n          }\n\n          output.textContent = "\u2705 Response:\\\\n" + JSON.stringify(data, null, 2);\n        } catch (err) {\n          output.textContent = "\u274C Request failed: " + err;\n        }\n      });\n    <\/script> </body> </html>'])), renderHead());
}, "D:/Ralph's Coding/Coding Files/capstone/src/pages/test/getreviews.astro", void 0);

const $$file = "D:/Ralph's Coding/Coding Files/capstone/src/pages/test/getreviews.astro";
const $$url = "/test/getreviews";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Getreviews,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
