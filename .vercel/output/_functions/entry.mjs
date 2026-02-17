import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BuRdZDMl.mjs';
import { manifest } from './manifest_BFXzKl44.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/signin.astro.mjs');
const _page2 = () => import('./pages/api/auth/signout.astro.mjs');
const _page3 = () => import('./pages/api/auth/signup.astro.mjs');
const _page4 = () => import('./pages/api/bookings/cancelbookings.astro.mjs');
const _page5 = () => import('./pages/api/bookings/confirmbookings.astro.mjs');
const _page6 = () => import('./pages/api/bookings/createbookings.astro.mjs');
const _page7 = () => import('./pages/api/bookings/getallbookings.astro.mjs');
const _page8 = () => import('./pages/api/bookings/getuserbookings.astro.mjs');
const _page9 = () => import('./pages/api/reviews/add.astro.mjs');
const _page10 = () => import('./pages/api/reviews/get.astro.mjs');
const _page11 = () => import('./pages/api/reviews/user.astro.mjs');
const _page12 = () => import('./pages/contact-us.astro.mjs');
const _page13 = () => import('./pages/dashboard.astro.mjs');
const _page14 = () => import('./pages/events_and_booking/events/booking.astro.mjs');
const _page15 = () => import('./pages/events_and_booking/events/_venueid_.astro.mjs');
const _page16 = () => import('./pages/events_and_booking/events.astro.mjs');
const _page17 = () => import('./pages/signin.astro.mjs');
const _page18 = () => import('./pages/signup.astro.mjs');
const _page19 = () => import('./pages/test/addreview.astro.mjs');
const _page20 = () => import('./pages/test/getreviews.astro.mjs');
const _page21 = () => import('./pages/test/getuserreview.astro.mjs');
const _page22 = () => import('./pages/test/testall.astro.mjs');
const _page23 = () => import('./pages/test/testcancel.astro.mjs');
const _page24 = () => import('./pages/test/testconfirm.astro.mjs');
const _page25 = () => import('./pages/test/testcreate.astro.mjs');
const _page26 = () => import('./pages/test/testuser.astro.mjs');
const _page27 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/signin.ts", _page1],
    ["src/pages/api/auth/signout.ts", _page2],
    ["src/pages/api/auth/signup.ts", _page3],
    ["src/pages/api/bookings/CancelBookings.ts", _page4],
    ["src/pages/api/bookings/ConfirmBookings.ts", _page5],
    ["src/pages/api/bookings/CreateBookings.ts", _page6],
    ["src/pages/api/bookings/GetAllBookings.ts", _page7],
    ["src/pages/api/bookings/GetUserBookings.ts", _page8],
    ["src/pages/api/reviews/add.ts", _page9],
    ["src/pages/api/reviews/get.ts", _page10],
    ["src/pages/api/reviews/user.ts", _page11],
    ["src/pages/contact-us.astro", _page12],
    ["src/pages/dashboard.astro", _page13],
    ["src/pages/events_and_booking/events/booking.astro", _page14],
    ["src/pages/events_and_booking/events/[venueId].astro", _page15],
    ["src/pages/events_and_booking/events.astro", _page16],
    ["src/pages/signin.astro", _page17],
    ["src/pages/signup.astro", _page18],
    ["src/pages/test/addreview.astro", _page19],
    ["src/pages/test/getreviews.astro", _page20],
    ["src/pages/test/getuserreview.astro", _page21],
    ["src/pages/test/testall.astro", _page22],
    ["src/pages/test/testcancel.astro", _page23],
    ["src/pages/test/testconfirm.astro", _page24],
    ["src/pages/test/testcreate.astro", _page25],
    ["src/pages/test/testuser.astro", _page26],
    ["src/pages/index.astro", _page27]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "23dbd6bb-98f9-405e-b1ab-8d2720570151",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
