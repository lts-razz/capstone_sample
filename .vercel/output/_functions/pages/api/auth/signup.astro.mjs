import { b as signUp } from '../../../chunks/auth_s5LPF5aQ.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  try {
    const body = await request.json();
    const { email, password, firstName, lastName } = body;
    if (!email || !password) {
      return new Response("Email and password are required", {
        status: 400
      });
    }
    const { error } = await signUp(email, password, firstName, lastName);
    if (error) {
      console.error("Supabase signup failed:", error.message);
      return new Response(error.message, { status: 500 });
    }
    return redirect("/signin");
  } catch (err) {
    console.error("Invalid request body:", err);
    return new Response("Invalid request body", { status: 400 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
