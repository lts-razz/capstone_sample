import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../../chunks/astro/server_Bg41pT7u.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DnTnltzz.mjs';
import 'clsx';
/* empty css                                     */
import { a as getAllVenues } from '../../chunks/venues_LvyUIv_S.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$EventCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EventCard;
  const { venue } = Astro2.props;
  return renderTemplate`<!-- Refactored to receive individual venue as prop and render single card -->${maybeRenderHead()}<div id="event-card" class="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full h-full flex flex-col bg-white border border-gray-200" data-astro-cid-nfommrp7> ${venue.image_url && renderTemplate`<img${addAttribute(venue.image_url || "/placeholder.svg", "src")}${addAttribute(venue.name || "Venue", "alt")} class="w-full h-48 object-cover" data-astro-cid-nfommrp7>`} <div class="p-6 flex flex-col grow" data-astro-cid-nfommrp7> <h3 class="text-xl font-bold mb-2" style="color: var(--jet-primary);" data-astro-cid-nfommrp7> ${venue.name || "Venue"} </h3> ${venue.description && renderTemplate`<p class="text-gray-600 text-sm mb-4 grow" data-astro-cid-nfommrp7> ${venue.description.substring(0, 100)}...
</p>`} ${venue.price_per_night && renderTemplate`<div class="mb-4" data-astro-cid-nfommrp7> <p class="text-sm text-gray-500" data-astro-cid-nfommrp7>Starting from</p> <p class="text-2xl font-bold" style="color: var(--butterscotch-primary);" data-astro-cid-nfommrp7>
$${venue.price_per_night} <span class="text-sm text-gray-600" data-astro-cid-nfommrp7>/night</span> </p> </div>`} <a${addAttribute(`/events_and_booking/events/${venue.id}`, "href")} class="mt-auto rounded-lg text-white font-semibold py-2 px-4 transition-all hover:opacity-90 text-center" style="background-color: var(--butterscotch-primary);" data-astro-cid-nfommrp7>
Book Now
</a> </div> </div> `;
}, "D:/Ralph's Coding/Coding Files/capstone/src/components/eventCards/eventCard.astro", void 0);

const $$Events = createComponent(async ($$result, $$props, $$slots) => {
  const { data: venues, error } = await getAllVenues();
  const venuesToDisplay = venues || [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-zpog3hzu": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="top-runner" class="w-full py-12" style="background-color: var(--jet-primary);" data-astro-cid-zpog3hzu> <div class="max-w-6xl mx-auto px-4" data-astro-cid-zpog3hzu> <h1 class="text-4xl font-bold mb-4 text-white!" data-astro-cid-zpog3hzu>
DISCOVER AMAZING VENUES!
</h1> <p class="text-lg opacity-90 text-white!" data-astro-cid-zpog3hzu>
Find the perfect space for your next event from our curated selection
</p> </div> </div> <div id="main-showcase" class="w-full py-12" data-astro-cid-zpog3hzu> <div class="max-w-6xl mx-auto px-4" data-astro-cid-zpog3hzu> <p class="text-gray-600 mb-8 text-sm uppercase font-semibold" data-astro-cid-zpog3hzu>
Showing our available venues
</p> <div class="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-zpog3hzu> ${venuesToDisplay.map((venue) => renderTemplate`${renderComponent($$result2, "EventCard", $$EventCard, { "venue": venue, "data-astro-cid-zpog3hzu": true })}`)} </div> </div> </div> ` })} `;
}, "D:/Ralph's Coding/Coding Files/capstone/src/pages/events_and_booking/events.astro", void 0);

const $$file = "D:/Ralph's Coding/Coding Files/capstone/src/pages/events_and_booking/events.astro";
const $$url = "/events_and_booking/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Events,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
