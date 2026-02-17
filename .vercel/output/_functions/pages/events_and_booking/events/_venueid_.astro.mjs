import { e as createComponent, f as createAstro, r as renderTemplate, n as defineScriptVars, m as maybeRenderHead, k as renderComponent, h as addAttribute } from '../../../chunks/astro/server_Bg41pT7u.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/Layout_DnTnltzz.mjs';
import { g as getVenue } from '../../../chunks/venues_LvyUIv_S.mjs';
import 'clsx';
/* empty css                                           */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$BookingForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BookingForm;
  const { venueId, venueName, pricePerNight } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div id="booking-form" data-astro-cid-odunxw63> <h2 class="text-2xl font-bold mb-6" style="color: var(--jet-primary);" data-astro-cid-odunxw63>\nComplete Your Booking\n</h2> <form id="bookingForm" class="space-y-6" data-astro-cid-odunxw63> <!-- Guest Information --> <div class="space-y-4" data-astro-cid-odunxw63> <h3 class="text-lg font-semibold" style="color: var(--lion-primary);" data-astro-cid-odunxw63>\nGuest Information\n</h3> <div data-astro-cid-odunxw63> <label for="fullName" class="block text-sm font-medium mb-2" style="color: var(--jet-primary);" data-astro-cid-odunxw63>\nFull Name *\n</label> <input type="text" id="fullName" name="fullName" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all" style="focus:ring-color: var(--butterscotch-primary);" data-astro-cid-odunxw63> </div> <div data-astro-cid-odunxw63> <label for="email" class="block text-sm font-medium mb-2" style="color: var(--jet-primary);" data-astro-cid-odunxw63>\nEmail Address *\n</label> <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all" style="focus:ring-color: var(--butterscotch-primary);" data-astro-cid-odunxw63> </div> <div data-astro-cid-odunxw63> <label for="phone" class="block text-sm font-medium mb-2" style="color: var(--jet-primary);" data-astro-cid-odunxw63>\nPhone Number *\n</label> <input type="tel" id="phone" name="phone" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all" style="focus:ring-color: var(--butterscotch-primary);" data-astro-cid-odunxw63> </div> </div> <!-- Booking Details --> <div class="space-y-4 pt-6 border-t border-gray-200" data-astro-cid-odunxw63> <h3 class="text-lg font-semibold" style="color: var(--lion-primary);" data-astro-cid-odunxw63>\nBooking Details\n</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-astro-cid-odunxw63> <div data-astro-cid-odunxw63> <label for="checkIn" class="block text-sm font-medium mb-2" style="color: var(--jet-primary);" data-astro-cid-odunxw63>\nCheck-in Date *\n</label> <input type="date" id="checkIn" name="checkIn" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all" style="focus:ring-color: var(--butterscotch-primary);" data-astro-cid-odunxw63> </div> <div data-astro-cid-odunxw63> <label for="checkOut" class="block text-sm font-medium mb-2" style="color: var(--jet-primary);" data-astro-cid-odunxw63>\nCheck-out Date *\n</label> <input type="date" id="checkOut" name="checkOut" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all" style="focus:ring-color: var(--butterscotch-primary);" data-astro-cid-odunxw63> </div> </div> <div data-astro-cid-odunxw63> <label for="guests" class="block text-sm font-medium mb-2" style="color: var(--jet-primary);" data-astro-cid-odunxw63>\nNumber of Guests *\n</label> <input type="number" id="guests" name="guests" min="1" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all" style="focus:ring-color: var(--butterscotch-primary);" data-astro-cid-odunxw63> </div> <div data-astro-cid-odunxw63> <label for="eventType" class="block text-sm font-medium mb-2" style="color: var(--jet-primary);" data-astro-cid-odunxw63>\nEvent Type *\n</label> <select id="eventType" name="eventType" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all" style="focus:ring-color: var(--butterscotch-primary);" data-astro-cid-odunxw63> <option value="" data-astro-cid-odunxw63>Select event type</option> <option value="wedding" data-astro-cid-odunxw63>Wedding</option> <option value="birthday" data-astro-cid-odunxw63>Birthday Party</option> <option value="corporate" data-astro-cid-odunxw63>Corporate Event</option> <option value="conference" data-astro-cid-odunxw63>Conference</option> <option value="other" data-astro-cid-odunxw63>Other</option> </select> </div> <div data-astro-cid-odunxw63> <label for="specialRequests" class="block text-sm font-medium mb-2" style="color: var(--jet-primary);" data-astro-cid-odunxw63>\nSpecial Requests\n</label> <textarea id="specialRequests" name="specialRequests" rows="4" placeholder="Any special requests or requirements..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all resize-none" style="focus:ring-color: var(--butterscotch-primary);" data-astro-cid-odunxw63></textarea> </div> </div> <!-- Price Breakdown --> <div class="pt-6 border-t border-gray-200" data-astro-cid-odunxw63> <div class="bg-gray-50 rounded-lg p-4 space-y-2 mb-6" data-astro-cid-odunxw63> <div class="flex justify-between text-sm" data-astro-cid-odunxw63> <span class="text-gray-600" data-astro-cid-odunxw63>Price per night</span> <span style="color: var(--butterscotch-primary);" data-astro-cid-odunxw63>\n$', ' </span> </div> <div class="flex justify-between text-sm" id="nightsBreakdown" data-astro-cid-odunxw63> <span class="text-gray-600" data-astro-cid-odunxw63>Number of nights</span> <span id="nightsCount" data-astro-cid-odunxw63>0</span> </div> <div class="flex justify-between font-bold pt-2 border-t border-gray-200" style="color: var(--jet-primary);" data-astro-cid-odunxw63> <span data-astro-cid-odunxw63>Total</span> <span id="totalPrice" style="color: var(--butterscotch-primary);" data-astro-cid-odunxw63>$0.00</span> </div> </div> </div> <!-- Submit Button --> <button type="submit" class="w-full py-3 px-4 text-white font-semibold rounded-lg transition-all hover:opacity-90 text-center" style="background-color: var(--butterscotch-primary);" id="submitBtn" data-astro-cid-odunxw63>\nComplete Booking\n</button> <p class="text-xs text-gray-500 text-center" data-astro-cid-odunxw63>\nBy booking, you agree to our terms and conditions\n</p> </form> </div> <script>(function(){', "\n  const form = document.getElementById('bookingForm');\n  const checkInInput = document.getElementById('checkIn');\n  const checkOutInput = document.getElementById('checkOut');\n  const nightsCountEl = document.getElementById('nightsCount');\n  const totalPriceEl = document.getElementById('totalPrice');\n  const submitBtn = document.getElementById('submitBtn');\n\n  function calculatePrice() {\n    if (checkInInput.value && checkOutInput.value) {\n      const checkIn = new Date(checkInInput.value);\n      const checkOut = new Date(checkOutInput.value);\n      const nights = Math.max(\n        1,\n        Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24))\n      );\n\n      nightsCountEl.textContent = nights;\n      const total = nights * pricePerNight;\n      totalPriceEl.textContent = '$' + total.toFixed(2);\n    }\n  }\n\n  checkInInput?.addEventListener('change', calculatePrice);\n  checkOutInput?.addEventListener('change', calculatePrice);\n\n  form.addEventListener('submit', async (e) => {\n    e.preventDefault();\n\n    submitBtn.disabled = true;\n    submitBtn.textContent = 'Processing...';\n\n    const formData = {\n      fullName: document.getElementById('fullName').value,\n      email: document.getElementById('email').value,\n      phone: document.getElementById('phone').value,\n      checkIn: checkInInput.value,\n      checkOut: checkOutInput.value,\n      guests: parseInt(document.getElementById('guests').value),\n      eventType: document.getElementById('eventType').value,\n      specialRequests: document.getElementById('specialRequests').value,\n      venueId: venueId,\n    };\n\n    try {\n      const response = await fetch('/api/bookings/CreateBookings', {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(formData),\n      });\n\n      if (response.ok) {\n        alert('Booking confirmed! Check your email for details.');\n        form.reset();\n        nightsCountEl.textContent = '0';\n        totalPriceEl.textContent = '$0.00';\n      } else {\n        alert('Booking failed. Please try again.');\n      }\n    } catch (error) {\n      console.error('Booking error:', error);\n      alert('An error occurred. Please try again.');\n    } finally {\n      submitBtn.disabled = false;\n      submitBtn.textContent = 'Complete Booking';\n    }\n  });\n})();<\/script> "])), maybeRenderHead(), pricePerNight.toFixed(2), defineScriptVars({ venueId, pricePerNight }));
}, "D:/Ralph's Coding/Coding Files/capstone/src/components/bookingForm.astro", void 0);

const $$Astro = createAstro();
const $$venueId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$venueId;
  const { venueId } = Astro2.params;
  if (!venueId || typeof venueId !== "string") {
    console.error("[v0] No venue ID provided");
    Astro2.redirect("/events_and_booking/events");
  }
  const { data, error } = await getVenue(venueId);
  if (error || !data) {
    console.error(
      "[v0] Failed to load venue:",
      error?.message || "Venue not found"
    );
    Astro2.redirect("/events_and_booking/events");
  }
  const venue = {
    id: data.id || venueId,
    name: data.name || "Unknown Venue",
    image_url: data.image_url || void 0,
    price_per_night: data.price_per_night || 0,
    capacity: data.capacity || void 0,
    description: data.description || void 0
  };
  if (venue.price_per_night <= 0) {
    console.error("[v0] Venue data is incomplete:", {
      name: venue.name,
      price: venue.price_per_night
    });
    Astro2.redirect("/events_and_booking/events");
  }
  console.log("[v0] Loaded venue:", {
    id: venue.id,
    name: venue.name,
    price: venue.price_per_night
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-v4ps4xed": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="top-runner" class="w-full py-12 text-white" style="background-color: var(--jet-primary);" data-astro-cid-v4ps4xed> <div class="max-w-6xl mx-auto px-4" data-astro-cid-v4ps4xed> <a href="/events_and_booking/events" class="inline-flex items-center gap-2 mb-6 text-butterscotch-500 hover:text-butterscotch-400 transition-colors" data-astro-cid-v4ps4xed> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-v4ps4xed> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-v4ps4xed></path> </svg>
Back to Events
</a> <h1 class="text-4xl font-bold mb-2" data-astro-cid-v4ps4xed>${venue.name}</h1> <p class="text-lg opacity-90" data-astro-cid-v4ps4xed>
Complete your booking for this amazing venue
</p> </div> </div>  <div class="w-full py-12" data-astro-cid-v4ps4xed> <div class="max-w-6xl mx-auto px-4" data-astro-cid-v4ps4xed> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-astro-cid-v4ps4xed> <!-- Venue Details --> <div class="lg:col-span-1" data-astro-cid-v4ps4xed> <div class="bg-white rounded-lg border border-gray-200 overflow-hidden sticky top-20" data-astro-cid-v4ps4xed> ${venue.image_url && renderTemplate`<img${addAttribute(venue.image_url || "/placeholder.svg", "src")}${addAttribute(venue.name, "alt")} class="w-full h-48 object-cover" data-astro-cid-v4ps4xed>`} <div class="p-6" data-astro-cid-v4ps4xed> <h3 class="text-xl font-bold mb-4" style="color: var(--jet-primary);" data-astro-cid-v4ps4xed>
Booking Details
</h3> <div class="space-y-4" data-astro-cid-v4ps4xed> <div class="flex justify-between items-center pb-4 border-b border-gray-200" data-astro-cid-v4ps4xed> <span class="text-gray-600" data-astro-cid-v4ps4xed>Price per Night</span> <span class="text-2xl font-bold" style="color: var(--butterscotch-primary);" data-astro-cid-v4ps4xed>
$${venue.price_per_night.toFixed(2)} </span> </div> ${venue.capacity && renderTemplate`<div class="pb-4 border-b border-gray-200" data-astro-cid-v4ps4xed> <span class="text-gray-600 text-sm" data-astro-cid-v4ps4xed>Capacity</span> <p class="font-semibold" style="color: var(--jet-primary);" data-astro-cid-v4ps4xed> ${venue.capacity} guests
</p> </div>`} ${venue.description && renderTemplate`<div data-astro-cid-v4ps4xed> <span class="text-gray-600 text-sm" data-astro-cid-v4ps4xed>About</span> <p class="text-sm text-gray-700 mt-2" data-astro-cid-v4ps4xed> ${venue.description} </p> </div>`} </div> <div class="mt-6 pt-6 border-t border-gray-200" data-astro-cid-v4ps4xed> <p class="text-xs text-gray-500 text-center" data-astro-cid-v4ps4xed>
You'll receive a confirmation email after booking
</p> </div> </div> </div> </div> <!-- Booking Form --> <div class="lg:col-span-2" data-astro-cid-v4ps4xed> <div class="bg-white rounded-lg border border-gray-200 p-8" data-astro-cid-v4ps4xed> ${renderComponent($$result2, "BookingForm", $$BookingForm, { "venueId": venue.id, "venueName": venue.name, "pricePerNight": venue.price_per_night, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Ralph's Coding/Coding Files/capstone/src/components/bookingForm.astro", "client:component-export": "default", "data-astro-cid-v4ps4xed": true })} </div> </div> </div> </div> </div> ` })} `;
}, "D:/Ralph's Coding/Coding Files/capstone/src/pages/events_and_booking/events/[venueId].astro", void 0);

const $$file = "D:/Ralph's Coding/Coding Files/capstone/src/pages/events_and_booking/events/[venueId].astro";
const $$url = "/events_and_booking/events/[venueId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$venueId,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
