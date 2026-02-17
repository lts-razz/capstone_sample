import { a as signOut } from '../../../chunks/auth_s5LPF5aQ.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ cookies, redirect }) => {
  let errorMessage;
  try {
    const { error } = await signOut();
    if (error) {
      console.error("Supabase signout error:", error.message);
      errorMessage = error.message;
    }
  } catch (err) {
    console.error("Unexpected signout failure:", err);
    errorMessage = err instanceof Error ? err.message : String(err);
  }
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });
  if (errorMessage) {
    console.warn("User redirected to /signin despite signout issues.");
  }
  return redirect("/signin");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
