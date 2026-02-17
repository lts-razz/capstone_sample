import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bg41pT7u.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DnTnltzz.mjs';
export { renderers } from '../renderers.mjs';

const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- 
COLORS

lion: #aa8f66
butterscotch: #ed9b40
jet: #363537 
-->${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="w-full py-16"> <div class="max-w-6xl mx-auto px-4"> <h1 class="text-4xl font-bold mb-12 text-center" style="color: var(--jet-primary);">
GET IN TOUCH
</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <!-- Contact Form --> <div class="card-container p-8"> <h2 class="text-2xl font-bold mb-6" style="color: var(--butterscotch-primary);">
SEND US AN EMAIL
</h2> <form id="contact-form" class="space-y-6"> <div> <label for="email" class="block text-sm font-semibold mb-2">
Tell us your email so we can contact you back!
</label> <input id="email" type="email" class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-butterscotch-500 transition" placeholder="your@email.com" required> </div> <div> <label for="reason" class="block text-sm font-semibold mb-2">
What's your reason for contacting us?
</label> <input id="reason" type="text" class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-butterscotch-500 transition" placeholder="e.g., Inquiry, Support, Partnership" required> </div> <div> <label for="message" class="block text-sm font-semibold mb-2">
Tell us the specifics!
</label> <textarea id="message" class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-butterscotch-500 transition resize-none" rows="4" placeholder="Your message here..."></textarea> </div> <button id="contactFormSubmit" type="submit" class="w-full px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 transform hover:scale-105" style="background-color: var(--butterscotch-primary);">
SUBMIT
</button> </form> </div> <!-- Contact Methods & Map --> <div class="space-y-8"> <!-- Contact Methods Card --> <div class="card-container p-8"> <h2 class="text-2xl font-bold mb-6" style="color: var(--jet-primary);">
CONTACT METHODS
</h2> <div id="contact-types" class="space-y-4"> <div class="flex justify-between items-center pb-3 border-b border-gray-200"> <span class="font-semibold">Telephone</span> <a href="tel:63999999999" class="hover:opacity-75 transition">
(+63) 99999999
</a> </div> <div class="flex justify-between items-center pb-3 border-b border-gray-200"> <span class="font-semibold">Cellphone</span> <a href="tel:6399999999" class="hover:opacity-75 transition">
(+63) 99999999
</a> </div> <div class="flex justify-between items-center pb-3 border-b border-gray-200"> <span class="font-semibold">Fax</span> <a href="tel:6399999999" class="hover:opacity-75 transition">
(+63) 99999999
</a> </div> <div class="flex justify-between items-center pb-3 border-b border-gray-200"> <span class="font-semibold">Email</span> <a href="email:support@milkuph.com" class="hover:opacity-75 transition">
support@milkuph.com
</a> </div> </div> </div> <!-- Map Card --> <div class="card-container p-8"> <h2 class="text-2xl font-bold mb-4" style="color: var(--jet-primary);">
OUR LOCATION
</h2> <div class="w-full h-64 rounded-lg overflow-hidden bg-gray-200"> <img src="/MapsSample.png" alt="our location map" class="w-full h-full object-cover"> </div> </div> </div> </div> </div> </div>  ` })} ${renderScript($$result, "D:/Ralph's Coding/Coding Files/capstone/src/pages/contact-us.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Ralph's Coding/Coding Files/capstone/src/pages/contact-us.astro", void 0);

const $$file = "D:/Ralph's Coding/Coding Files/capstone/src/pages/contact-us.astro";
const $$url = "/contact-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactUs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
