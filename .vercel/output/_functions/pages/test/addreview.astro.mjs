import { e as createComponent, r as renderTemplate, o as renderHead } from '../../chunks/astro/server_Bg41pT7u.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Addreview = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><title>Test Add Review API</title>', `</head> <body> <h1>Test Add Review API</h1> <form id="reviewForm"> <input name="userId" placeholder="User ID" value="userId-123"> <input name="bookingId" placeholder="Booking ID" value="bookingId-123"> <input name="rating" type="number" min="1" max="5" placeholder="Rating (1-5)" value="5"> <input name="comment" placeholder="Comment" value="Great venue!"> <button type="submit">Add Review</button> </form> <pre id="output"></pre> <script>
      const form = document.getElementById('reviewForm');
      const output = document.getElementById('output');

      form?.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const userId = formData.get('userId') || '';
        const bookingId = formData.get('bookingId') || '';
        const rating = parseInt(formData.get('rating') || '0', 10);
        const comment = formData.get('comment') || '';

        const body = { userId, bookingId, rating, comment };

        try {
          const res = await fetch('/api/reviews/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          });

          const text = await res.text();
          let data;
          try {
            data = JSON.parse(text);
          } catch {
            output.textContent = '\u274C Invalid JSON:\\n' + text;
            return;
          }

          output.textContent = '\u2705 Response:\\n' + JSON.stringify(data, null, 2);
        } catch (err) {
          output.textContent = '\u274C Request failed: ' + err;
        }
      });
    <\/script> </body> </html>`], ['<html lang="en"> <head><meta charset="UTF-8"><title>Test Add Review API</title>', `</head> <body> <h1>Test Add Review API</h1> <form id="reviewForm"> <input name="userId" placeholder="User ID" value="userId-123"> <input name="bookingId" placeholder="Booking ID" value="bookingId-123"> <input name="rating" type="number" min="1" max="5" placeholder="Rating (1-5)" value="5"> <input name="comment" placeholder="Comment" value="Great venue!"> <button type="submit">Add Review</button> </form> <pre id="output"></pre> <script>
      const form = document.getElementById('reviewForm');
      const output = document.getElementById('output');

      form?.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const userId = formData.get('userId') || '';
        const bookingId = formData.get('bookingId') || '';
        const rating = parseInt(formData.get('rating') || '0', 10);
        const comment = formData.get('comment') || '';

        const body = { userId, bookingId, rating, comment };

        try {
          const res = await fetch('/api/reviews/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          });

          const text = await res.text();
          let data;
          try {
            data = JSON.parse(text);
          } catch {
            output.textContent = '\u274C Invalid JSON:\\\\n' + text;
            return;
          }

          output.textContent = '\u2705 Response:\\\\n' + JSON.stringify(data, null, 2);
        } catch (err) {
          output.textContent = '\u274C Request failed: ' + err;
        }
      });
    <\/script> </body> </html>`])), renderHead());
}, "D:/Ralph's Coding/Coding Files/capstone/src/pages/test/addreview.astro", void 0);

const $$file = "D:/Ralph's Coding/Coding Files/capstone/src/pages/test/addreview.astro";
const $$url = "/test/addreview";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Addreview,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
