import { e as createComponent, m as maybeRenderHead, l as renderScript, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_Bg41pT7u.mjs';
import 'piccolore';
/* empty css                                      */
import { $ as $$Layout } from '../chunks/Layout_DnTnltzz.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$ImageSlider = createComponent(($$result, $$props, $$slots) => {
  const slides = [
    {
      image: "/heroSlideshow/image1.jpg",
      text: "Welcome to Milku!"
    },
    {
      image: "/heroSlideshow/image2.jpg",
      text: "Discover Our Scenery"
    },
    {
      image: "/heroSlideshow/image3.jpg",
      text: "Book With Us Today"
    }
  ];
  return renderTemplate`<!-- Improved slideshow with better text styling and overlay -->${maybeRenderHead()}<div class="relative w-full h-screen md:h-96 lg:h-[85vh] overflow-hidden z-1"> ${slides.map((slide, index) => renderTemplate`<div class="absolute inset-0 w-full h-full bg-center bg-cover opacity-0 transition-opacity duration-1000 flex items-center justify-center"${addAttribute(index, "data-index")}${addAttribute(slide.image, "data-image")}> <div class="absolute inset-0 bg-black/30"></div> <h2 class="relative text-3xl text-[white]! md:text-5xl font-bold text-center px-4 py-8 rounded-lg drop-shadow-lg bg-[#363537]/30 backdrop-blur-sm border border-white/30"> ${slide.text} </h2> </div>`)} </div> ${renderScript($$result, "D:/Ralph's Coding/Coding Files/capstone/src/components/imageSlider.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Ralph's Coding/Coding Files/capstone/src/components/imageSlider.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- 
COLORS

lion: #aa8f66
butterscotch: #ed9b40
jet: #363537 
-->${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="hero" class="w-full h-auto"> ${renderComponent($$result2, "Slideshow", $$ImageSlider, {})} </div>  <div id="about-us" class="w-full bg-neutral-light py-16"> <div class="max-w-6xl mx-auto px-4"> <div class="mb-16"> <h2 class="text-3xl font-bold mb-6" style="color: var(--jet-primary);">
OUR FOUNDER
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div> <p class="text-justify leading-relaxed">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              bibendum suscipit hendrerit. Pellentesque dignissim consequat
              elit, sed efficitur lectus auctor non. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Aenean eget urna ac augue ultricies aliquet. Pellentesque
              porttitor nibh et mattis lobortis.
</p> </div> <div class="card-container p-4"> <img src="/samples/founder.png" alt="founder" class="w-full h-64 rounded-lg object-cover"> <p class="text-center text-sm font-semibold mt-3">Founder 1990-1956</p> </div> </div> </div> <div class="mb-16"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div class="card-container p-4 order-2 md:order-1"> <img src="/samples/vintage-resort.png" alt="vintage resort" class="w-full h-64 rounded-lg object-cover"> <p class="text-center text-sm font-semibold mt-3">Las Vegas, 1935</p> </div> <div class="order-1 md:order-2"> <h2 class="text-3xl font-bold mb-6" style="color: var(--jet-primary);">
OUR HISTORY
</h2> <p class="text-justify leading-relaxed">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            bibendum suscipit hendrerit. Pellentesque dignissim consequat elit,
            sed efficitur lectus auctor non. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Aenean eget
            urna ac augue ultricies aliquet. Pellentesque porttitor nibh et
            mattis lobortis.
</p> </div> </div> </div> </div> </div>  <div class="w-full py-16"> <div class="max-w-6xl mx-auto px-4"> <h2 class="text-3xl font-bold mb-12 text-center" style="color: var(--jet-primary);">
GET IN TOUCH
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <!-- Contact Form --> <div id="contact-us" class="card-container p-8"> <h3 class="text-2xl font-bold mb-6" style="color: var(--butterscotch-primary);">
CONTACT US!
</h3> <p class="mb-4 text-gray-600">
Fill out the form to get in touch with our team.
</p> <a href="/contact-us" class="inline-block px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90" style="background-color: var(--butterscotch-primary);">
Send us a message
</a> </div> <!-- Location Map --> <div id="find-us" class="card-container p-8"> <h3 class="text-2xl font-bold mb-6" style="color: var(--jet-primary);">
WE'RE LOCATED AT...
</h3> <p class="mb-4">
777, 1 Bitas Bridge, Cabanatuan City, 3100 Nueva Ecija
</p> <div id="maps" class="mb-4 rounded-lg overflow-hidden"> <img src="/MapsSample.png" alt="google maps location" class="w-full h-64 object-cover"> </div> <a href="https://maps.app.goo.gl/Lk3BeDLY8yLHRVL76" target="_blank" class="inline-block text-butterscotch-primary font-semibold hover:underline transition-all">
→ View on Google Maps
</a> </div> </div> </div> </div>` })}`;
}, "D:/Ralph's Coding/Coding Files/capstone/src/pages/index.astro", void 0);

const $$file = "D:/Ralph's Coding/Coding Files/capstone/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
