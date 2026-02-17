import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bg41pT7u.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DnTnltzz.mjs';
import { $ as $$ShowButton } from '../chunks/showButton_B0dYKnTm.mjs';
export { renderers } from '../renderers.mjs';

const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Register" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full h-[69vh] flex justify-center items-center"> <div id="formBox" class="w-[50%] h-auto ring-2 rounded-xl"> <div id="formHeader" class="border-b w-full h-auto px-6 py-3 flex justify-between"> <h1 class="text-[2em] font-bold">Sign up for a new account</h1> <a href="/" class="flex justify-center items-center text-[1.2em] rounded-2xl py-1 px-5 ring-1 bg-red-400 hover:bg-red-500">Back</a> </div> <form id="register-form" novalidate class="px-5 py-10"> <div class="w-full h-auto grid grid-cols-12 grid-rows-4 items-center gap-5"> <label for="firstName" class="col-start-1 col-span-2 text-[1.2em] font-bold">
First Name:
</label> <input type="text" name="firstName" id="firstName" required class="p-2 indent-4 rounded ring w-auto col-start-3 -col-end-4"> <label for="lastName" class="col-start-1 col-span-2 text-[1.2em] font-bold">
Last Name:
</label> <input type="text" name="lastName" id="lastName" required class="p-2 indent-4 rounded ring w-auto col-start-3 -col-end-4"> <label for="email" class="col-start-1 col-span-2 text-[1.2em] font-bold">
Email:
</label> <input type="email" name="email" id="email" required class="p-2 indent-4 rounded ring w-auto col-start-3 -col-end-4"> <label for="password" class="col-start-1 col-span-2 text-[1.2em] font-bold">
Password:
</label> <input type="password" name="password" id="password" required class="p-2 indent-4 rounded ring w-auto col-start-3 -col-end-4">${renderComponent($$result2, "ShowButton", $$ShowButton, {})} </div> <div class="mt-10
            w-full
            h-auto
            flex
            justify-center
            items-center"> <button type="submit" class="max-w-[20ch] text-[2em] text-white font-bold rounded-2xl py-2 px-5 bg-amber-400 hover:bg-amber-500 hover:cursor-pointer">REGISTER</button> </div> </form> <p class="mt-2 flex justify-end py-2 px-5 gap-2">
Already have an account?
<a href="/signin" class="text-blue-500 hover:text-blue-800 hover:pointer-cursor underline">Sign in</a> </p> </div> </div> ` })} ${renderScript($$result, "D:/Ralph's Coding/Coding Files/capstone/src/pages/signup.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Ralph's Coding/Coding Files/capstone/src/pages/signup.astro", void 0);

const $$file = "D:/Ralph's Coding/Coding Files/capstone/src/pages/signup.astro";
const $$url = "/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
