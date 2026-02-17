import { e as createComponent, f as createAstro, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bg41pT7u.mjs';
import 'piccolore';
import { $ as $$ShowButton } from '../chunks/showButton_B0dYKnTm.mjs';
import { $ as $$Layout } from '../chunks/Layout_DnTnltzz.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Signin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const { cookies, redirect } = Astro2;
  const hasSession = cookies.get("sb-access-token") && cookies.get("sb-refresh-token");
  if (hasSession) {
    return redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full h-[69vh] flex justify-center items-center"> <div id="formBox" class="w-[50%] h-auto ring-2 rounded-xl"> <div id="formHeader" class="border-b w-full h-auto px-6 py-3 flex justify-between"> <h1 class="text-[2em] font-bold">Log in existing account</h1> <a href="/" class="flex justify-center items-center text-[1.2em] rounded-2xl py-1 px-5 ring-1 bg-red-400 hover:bg-red-500">Back</a> </div> <form action="/api/auth/signin" method="post" class="px-5 py-10"> <div class="w-full h-auto grid grid-cols-12 grid-rows-2 items-center gap-5"> <label for="email" class="col-start-1 col-span-2 text-[1.2em] font-bold">Email</label> <input id="email" name="email" type="email" required class="p-2 indent-4 rounded ring w-auto col-start-3 -col-end-4"> <label for="password" class="col-start-1 col-span-2 text-[1.2em] font-bold">Password</label> <input id="password" name="password" type="password" required class="p-2 indent-4 rounded ring w-auto col-start-3 -col-end-4">${renderComponent($$result2, "ShowButton", $$ShowButton, {})} </div> <div class="mt-10 w-full h-auto flex justify-center items-center"> <button type="submit" class="max-w-[20ch] text-[2em] text-white font-bold rounded-2xl py-2 px-5 bg-blue-400 hover:bg-blue-500 hover:cursor-pointer">Log in</button> </div> </form> <p class="mt-5 flex justify-end py-2 px-5 gap-2">
New here?
<a href="/signup" class="text-blue-500 hover:text-blue-800 hover:pointer-cursor underline">Create an account</a> </p> </div> </div> ` })} ${renderScript($$result, "D:/Ralph's Coding/Coding Files/capstone/src/pages/signin.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Ralph's Coding/Coding Files/capstone/src/pages/signin.astro", void 0);

const $$file = "D:/Ralph's Coding/Coding Files/capstone/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
