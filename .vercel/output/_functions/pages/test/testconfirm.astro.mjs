import { e as createComponent, m as maybeRenderHead, l as renderScript, r as renderTemplate } from '../../chunks/astro/server_Bg41pT7u.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Testconfirm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="confirmBookingForm"> <input name="bookingId" placeholder="Booking ID"> <input name="userId" placeholder="User ID (owner)"> <button type="submit">Confirm Booking</button> </form> ${renderScript($$result, "D:/Ralph's Coding/Coding Files/capstone/src/pages/test/testconfirm.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Ralph's Coding/Coding Files/capstone/src/pages/test/testconfirm.astro", void 0);

const $$file = "D:/Ralph's Coding/Coding Files/capstone/src/pages/test/testconfirm.astro";
const $$url = "/test/testconfirm";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Testconfirm,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
