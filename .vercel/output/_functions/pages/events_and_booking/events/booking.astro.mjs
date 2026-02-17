import { e as createComponent, m as maybeRenderHead, r as renderTemplate } from '../../../chunks/astro/server_Bg41pT7u.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const $$Booking = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div></div> `;
}, "D:/Ralph's Coding/Coding Files/capstone/src/pages/events_and_booking/events/booking.astro", void 0);

const $$file = "D:/Ralph's Coding/Coding Files/capstone/src/pages/events_and_booking/events/booking.astro";
const $$url = "/events_and_booking/events/booking";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Booking,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
