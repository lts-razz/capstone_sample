import { e as createComponent, o as renderHead, l as renderScript, r as renderTemplate } from '../../chunks/astro/server_Bg41pT7u.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Testcreate = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><title>Test Booking API</title>${renderHead()}</head> <body> <h1>Test Booking API</h1> <form id="bookingForm"> <input name="userId" value="userId"> <input name="venueId" value="venueId"> <input name="startDate" value="startDate"> <input name="endDate" value="endDate"> <input name="eventType" value="eventType"> <button type="submit">Create Booking</button> </form> ${renderScript($$result, "D:/Ralph's Coding/Coding Files/capstone/src/pages/test/testcreate.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/Ralph's Coding/Coding Files/capstone/src/pages/test/testcreate.astro", void 0);

const $$file = "D:/Ralph's Coding/Coding Files/capstone/src/pages/test/testcreate.astro";
const $$url = "/test/testcreate";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Testcreate,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
