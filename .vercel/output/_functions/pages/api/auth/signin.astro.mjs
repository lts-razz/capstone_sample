import { s as signIn } from '../../../chunks/auth_s5LPF5aQ.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, cookies, redirect }) => {
  try {
    const form = await request.formData();
    const email = form.get("email")?.toString().trim();
    const password = form.get("password")?.toString();
    if (!email || !password) {
      return new Response("Missing email or password", { status: 400 });
    }
    const { data, error } = await signIn(email, password);
    const session = data?.session;
    if (error || !session) {
      return new Response(error?.message ?? "Invalid credentials", {
        status: 401
      });
    }
    const cookieOptions = {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true
    };
    cookies.set("sb-access-token", session.access_token, cookieOptions);
    cookies.set("sb-refresh-token", session.refresh_token, cookieOptions);
    return redirect("/dashboard");
  } catch (err) {
    console.error(
      "Signin failed:",
      err instanceof Error ? err.message : err
    );
    return new Response("Unexpected server error", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
