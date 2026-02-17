import { e as createComponent, o as renderHead, l as renderScript, r as renderTemplate } from '../../chunks/astro/server_Bg41pT7u.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Testuser = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><title>Test GetUserBookings API</title>${renderHead()}</head> <body> <h1>Test GetUserBookings API</h1> <form id="getUserBookingsForm"> <input name="userId" value="userId"> <button type="submit">Get User Bookings</button> </form> ${renderScript($$result, "D:/Ralph's Coding/Coding Files/capstone/src/pages/test/testuser.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/Ralph's Coding/Coding Files/capstone/src/pages/test/testuser.astro", void 0);

const $$file = "D:/Ralph's Coding/Coding Files/capstone/src/pages/test/testuser.astro";
const $$url = "/test/testuser";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Testuser,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
