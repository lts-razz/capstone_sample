import { e as createComponent, m as maybeRenderHead, l as renderScript, r as renderTemplate } from '../../chunks/astro/server_Bg41pT7u.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Testall = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1>Test Get All Bookings</h1> <button id="fetchAllBookings">Get All Bookings</button> ${renderScript($$result, "D:/Ralph's Coding/Coding Files/capstone/src/pages/test/testall.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Ralph's Coding/Coding Files/capstone/src/pages/test/testall.astro", void 0);

const $$file = "D:/Ralph's Coding/Coding Files/capstone/src/pages/test/testall.astro";
const $$url = "/test/testall";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Testall,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
