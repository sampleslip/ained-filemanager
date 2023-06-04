import { ref as L, watch as Re, inject as P, openBlock as w, createElementBlock as C, createElementVNode as p, unref as x, normalizeClass as ct, createTextVNode as st, toDisplayString as E, createCommentVNode as Z, createVNode as Dt, TransitionGroup as Ao, withCtx as F, Fragment as lt, renderList as St, reactive as Le, onMounted as Et, onUpdated as Lo, withDirectives as Ct, vShow as Te, withModifiers as Wt, nextTick as Ve, isRef as ns, vModelSelect as Oo, customRef as Po, withKeys as oe, vModelText as ie, normalizeStyle as as, provide as Ut, createBlock as q, resolveDynamicComponent as No, renderSlot as Je } from "vue";
import ue from "plupload";
var is;
const Oe = (is = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : is.getAttribute("content"), Pe = (r, { method: t = "get", params: s = {}, json: o = !0, signal: n = null }) => {
  const a = { method: t };
  if (a.signal = n, t == "get")
    r += "?" + new URLSearchParams(s);
  else {
    a.headers = {}, Oe && (a.headers["X-CSRF-Token"] = Oe);
    let u = new FormData();
    for (const [m, l] of Object.entries(s))
      u.append(m, l);
    a.body = u;
  }
  return fetch(r, a).then((u) => u.ok ? o ? u.json() : u.text() : u.json().then(Promise.reject.bind(Promise)));
};
function jo(r) {
  return { all: r = r || /* @__PURE__ */ new Map(), on: function(t, s) {
    var o = r.get(t);
    o ? o.push(s) : r.set(t, [s]);
  }, off: function(t, s) {
    var o = r.get(t);
    o && (s ? o.splice(o.indexOf(s) >>> 0, 1) : r.set(t, []));
  }, emit: function(t, s) {
    var o = r.get(t);
    o && o.slice().map(function(n) {
      n(s);
    }), (o = r.get("*")) && o.slice().map(function(n) {
      n(t, s);
    });
  } };
}
function Qe(r) {
  let t = localStorage.getItem(r + "_storage");
  const s = L(JSON.parse(t));
  Re(s, o);
  function o() {
    s.value === null || s.value === "" ? localStorage.removeItem(r + "_storage") : localStorage.setItem(r + "_storage", JSON.stringify(s.value));
  }
  function n(m, l) {
    s.value = Object.assign({ ...s.value }, { [m]: l });
  }
  function a() {
    s.value = null;
  }
  return { getStore: (m, l = null) => s.value === null || s.value === "" ? l : s.value.hasOwnProperty(m) ? s.value[m] : l, setStore: n, clearStore: a };
}
const jr = L("");
function At() {
  function r(t) {
    jr.value = t;
  }
  return { apiUrl: jr, setApiUrl: r };
}
const Ro = { class: "flex justify-between items-center py-1 text-sm" }, Vo = {
  key: 0,
  class: "flex text-center"
}, Bo = ["aria-label"], zo = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-9 w-9 m-auto cursor-pointer stroke-gray-500 hover:stroke-indigo-500 hover:bg-indigo-200 p-2 rounded dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
  })
], -1), Ho = [
  zo
], Uo = ["aria-label"], Ko = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-9 w-9 m-auto cursor-pointer stroke-gray-500 hover:stroke-indigo-500 hover:bg-indigo-200 p-2 rounded dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
  })
], -1), Yo = [
  Ko
], Wo = ["aria-label"], Xo = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
}, null, -1), Zo = [
  Xo
], Fo = ["aria-label"], qo = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), Go = [
  qo
], Jo = ["aria-label"], Qo = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-9 w-9 m-auto cursor-pointer stroke-gray-500 hover:stroke-indigo-500 hover:bg-indigo-200 p-2 rounded dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
  })
], -1), ti = [
  Qo
], ei = ["aria-label"], ri = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), si = [
  ri
], oi = ["aria-label"], ii = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), ni = [
  ii
], ai = {
  key: 1,
  class: "flex text-center"
}, li = { class: "pl-2" }, ci = { class: "dark:bg-gray-700 text-base px-2 p-2 bg-gray-100 rounded" }, di = {
  key: 0,
  class: "animate-spin p-2 h-9 w-9 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, ui = /* @__PURE__ */ p("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), hi = /* @__PURE__ */ p("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), fi = [
  ui,
  hi
], pi = { class: "flex text-center items-center justify-end" }, gi = ["aria-label"], mi = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-9 w-9 p-2 m-auto cursor-pointer stroke-gray-500 hover:stroke-indigo-500 hover:bg-indigo-200 rounded dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, vi = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
}, bi = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
}, yi = ["aria-label"], Si = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, wi = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, _i = {
  name: "VFToolbar"
}, xi = /* @__PURE__ */ Object.assign(_i, {
  props: {
    data: Object
  },
  setup(r) {
    const t = P("emitter"), { getStore: s, setStore: o } = P("storage"), { t: n } = P("i18n"), a = L(s("viewport", "grid")), u = L([]), m = L(s("full-screen", !1)), l = L("");
    t.on("vf-search-query", ({ newQuery: S }) => {
      l.value = S;
    });
    const v = P("loadingState"), f = () => v.value, b = () => {
      m.value = !m.value, t.emit("vf-fullscreen-toggle");
    };
    return t.on("vf-nodes-selected", (S) => {
      u.value = S;
    }), t.on("vf-view-toggle", (S) => {
      o("viewport", S), a.value = S;
    }), (S, $) => (w(), C("div", Ro, [
      l.value.length ? (w(), C("div", ai, [
        p("div", li, [
          st(E(x(n)("Search results for")) + " ", 1),
          p("span", ci, E(l.value), 1)
        ]),
        f() ? (w(), C("svg", di, fi)) : Z("", !0)
      ])) : (w(), C("div", Vo, [
        p("div", {
          "aria-label": x(n)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: $[0] || ($[0] = (M) => x(t).emit("vf-modal-show", { type: "new-folder", items: u.value }))
        }, Ho, 8, Bo),
        p("div", {
          "aria-label": x(n)("New File"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: $[1] || ($[1] = (M) => x(t).emit("vf-modal-show", { type: "new-file", items: u.value }))
        }, Yo, 8, Uo),
        p("div", {
          "aria-label": x(n)("Rename"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: $[2] || ($[2] = (M) => u.value.length != 1 || x(t).emit("vf-modal-show", { type: "rename", items: u.value }))
        }, [
          (w(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([u.value.length == 1 ? "cursor-pointer stroke-gray-500 hover:stroke-indigo-500 hover:bg-indigo-200 rounded dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-9 w-9 m-auto p-2"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Zo, 2))
        ], 8, Wo),
        p("div", {
          "aria-label": x(n)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: $[3] || ($[3] = (M) => !u.value.length || x(t).emit("vf-modal-show", { type: "delete", items: u.value }))
        }, [
          (w(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([u.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-indigo-500 hover:bg-indigo-200 rounded dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-9 w-9 m-auto p-2"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Go, 2))
        ], 8, Fo),
        p("div", {
          "aria-label": x(n)("Upload"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: $[4] || ($[4] = (M) => x(t).emit("vf-modal-show", { type: "upload", items: u.value }))
        }, ti, 8, Jo),
        u.value.length == 1 && u.value[0].mime_type == "application/zip" ? (w(), C("div", {
          key: 0,
          "aria-label": x(n)("Unrchive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: $[5] || ($[5] = (M) => !u.value.length || x(t).emit("vf-modal-show", { type: "unarchive", items: u.value }))
        }, [
          (w(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([u.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-indigo-500 hover:bg-indigo-200 rounded dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-9 w-9 m-auto p-2"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, si, 2))
        ], 8, ei)) : (w(), C("div", {
          key: 1,
          "aria-label": x(n)("Archive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: $[6] || ($[6] = (M) => !u.value.length || x(t).emit("vf-modal-show", { type: "archive", items: u.value }))
        }, [
          (w(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([u.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-indigo-500 hover:bg-indigo-200 rounded dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-9 w-9 m-auto p-2"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, ni, 2))
        ], 8, oi))
      ])),
      p("div", pi, [
        p("div", {
          "aria-label": x(n)("Toggle Full Screen"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: b
        }, [
          (w(), C("svg", mi, [
            m.value ? (w(), C("path", vi)) : (w(), C("path", bi))
          ]))
        ], 8, gi),
        p("div", {
          "aria-label": x(n)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: $[7] || ($[7] = (M) => l.value.length || x(t).emit("vf-view-toggle", a.value == "list" ? "grid" : "list"))
        }, [
          (w(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([l.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer  stroke-gray-500 hover:stroke-indigo-500 hover:bg-indigo-200 rounded  dark:stroke-gray-400 dark:hover:stroke-gray-300", "h-9 w-9 p-2 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            a.value == "grid" ? (w(), C("path", Si)) : Z("", !0),
            a.value == "list" ? (w(), C("path", wi)) : Z("", !0)
          ], 2))
        ], 8, yi)
      ])
    ]));
  }
});
var ki = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Di(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ls = { exports: {} };
(function(r, t) {
  (function(s, o) {
    r.exports = o();
  })(ki, function() {
    function s(c, d) {
      var e = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (e != null) {
        var g, i, h, y, _ = [], D = !0, B = !1;
        try {
          if (h = (e = e.call(c)).next, d === 0) {
            if (Object(e) !== e)
              return;
            D = !1;
          } else
            for (; !(D = (g = h.call(e)).done) && (_.push(g.value), _.length !== d); D = !0)
              ;
        } catch (W) {
          B = !0, i = W;
        } finally {
          try {
            if (!D && e.return != null && (y = e.return(), Object(y) !== y))
              return;
          } finally {
            if (B)
              throw i;
          }
        }
        return _;
      }
    }
    function o(c, d) {
      var e = Object.keys(c);
      if (Object.getOwnPropertySymbols) {
        var g = Object.getOwnPropertySymbols(c);
        d && (g = g.filter(function(i) {
          return Object.getOwnPropertyDescriptor(c, i).enumerable;
        })), e.push.apply(e, g);
      }
      return e;
    }
    function n(c) {
      for (var d = 1; d < arguments.length; d++) {
        var e = arguments[d] != null ? arguments[d] : {};
        d % 2 ? o(Object(e), !0).forEach(function(g) {
          l(c, g, e[g]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(e)) : o(Object(e)).forEach(function(g) {
          Object.defineProperty(c, g, Object.getOwnPropertyDescriptor(e, g));
        });
      }
      return c;
    }
    function a(c, d) {
      if (!(c instanceof d))
        throw new TypeError("Cannot call a class as a function");
    }
    function u(c, d) {
      for (var e = 0; e < d.length; e++) {
        var g = d[e];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(c, R(g.key), g);
      }
    }
    function m(c, d, e) {
      return d && u(c.prototype, d), e && u(c, e), Object.defineProperty(c, "prototype", {
        writable: !1
      }), c;
    }
    function l(c, d, e) {
      return d = R(d), d in c ? Object.defineProperty(c, d, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : c[d] = e, c;
    }
    function v(c, d) {
      if (typeof d != "function" && d !== null)
        throw new TypeError("Super expression must either be null or a function");
      c.prototype = Object.create(d && d.prototype, {
        constructor: {
          value: c,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(c, "prototype", {
        writable: !1
      }), d && b(c, d);
    }
    function f(c) {
      return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, f(c);
    }
    function b(c, d) {
      return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(g, i) {
        return g.__proto__ = i, g;
      }, b(c, d);
    }
    function S() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function $(c, d, e) {
      return S() ? $ = Reflect.construct.bind() : $ = function(i, h, y) {
        var _ = [null];
        _.push.apply(_, h);
        var D = Function.bind.apply(i, _), B = new D();
        return y && b(B, y.prototype), B;
      }, $.apply(null, arguments);
    }
    function M(c) {
      return Function.toString.call(c).indexOf("[native code]") !== -1;
    }
    function I(c) {
      var d = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return I = function(g) {
        if (g === null || !M(g))
          return g;
        if (typeof g != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof d < "u") {
          if (d.has(g))
            return d.get(g);
          d.set(g, i);
        }
        function i() {
          return $(g, arguments, f(this).constructor);
        }
        return i.prototype = Object.create(g.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), b(i, g);
      }, I(c);
    }
    function T(c) {
      if (c === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return c;
    }
    function H(c, d) {
      if (d && (typeof d == "object" || typeof d == "function"))
        return d;
      if (d !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return T(c);
    }
    function V(c) {
      var d = S();
      return function() {
        var g = f(c), i;
        if (d) {
          var h = f(this).constructor;
          i = Reflect.construct(g, arguments, h);
        } else
          i = g.apply(this, arguments);
        return H(this, i);
      };
    }
    function j(c, d) {
      for (; !Object.prototype.hasOwnProperty.call(c, d) && (c = f(c), c !== null); )
        ;
      return c;
    }
    function z() {
      return typeof Reflect < "u" && Reflect.get ? z = Reflect.get.bind() : z = function(d, e, g) {
        var i = j(d, e);
        if (i) {
          var h = Object.getOwnPropertyDescriptor(i, e);
          return h.get ? h.get.call(arguments.length < 3 ? d : g) : h.value;
        }
      }, z.apply(this, arguments);
    }
    function X(c, d) {
      return G(c) || s(c, d) || et(c, d) || pt();
    }
    function k(c) {
      return N(c) || ot(c) || et(c) || vt();
    }
    function N(c) {
      if (Array.isArray(c))
        return dt(c);
    }
    function G(c) {
      if (Array.isArray(c))
        return c;
    }
    function ot(c) {
      if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null)
        return Array.from(c);
    }
    function et(c, d) {
      if (c) {
        if (typeof c == "string")
          return dt(c, d);
        var e = Object.prototype.toString.call(c).slice(8, -1);
        if (e === "Object" && c.constructor && (e = c.constructor.name), e === "Map" || e === "Set")
          return Array.from(c);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
          return dt(c, d);
      }
    }
    function dt(c, d) {
      (d == null || d > c.length) && (d = c.length);
      for (var e = 0, g = new Array(d); e < d; e++)
        g[e] = c[e];
      return g;
    }
    function vt() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function pt() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function gt(c, d) {
      var e = typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (!e) {
        if (Array.isArray(c) || (e = et(c)) || d && c && typeof c.length == "number") {
          e && (c = e);
          var g = 0, i = function() {
          };
          return {
            s: i,
            n: function() {
              return g >= c.length ? {
                done: !0
              } : {
                done: !1,
                value: c[g++]
              };
            },
            e: function(D) {
              throw D;
            },
            f: i
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var h = !0, y = !1, _;
      return {
        s: function() {
          e = e.call(c);
        },
        n: function() {
          var D = e.next();
          return h = D.done, D;
        },
        e: function(D) {
          y = !0, _ = D;
        },
        f: function() {
          try {
            !h && e.return != null && e.return();
          } finally {
            if (y)
              throw _;
          }
        }
      };
    }
    function A(c, d) {
      if (typeof c != "object" || c === null)
        return c;
      var e = c[Symbol.toPrimitive];
      if (e !== void 0) {
        var g = e.call(c, d || "default");
        if (typeof g != "object")
          return g;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (d === "string" ? String : Number)(c);
    }
    function R(c) {
      var d = A(c, "string");
      return typeof d == "symbol" ? d : String(d);
    }
    var O = function(d, e, g) {
      var i = d.x, h = d.y, y = g.x, _ = g.y, D = {
        "+": {
          x: i + y,
          y: h + _
        },
        "-": {
          x: i - y,
          y: h - _
        },
        "*": {
          x: i * y,
          y: h * _
        },
        "/": {
          x: i / y,
          y: h / _
        }
      };
      return D[e];
    }, tt = function(d) {
      return {
        x: d.left,
        y: d.top
      };
    }, U = function(d) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return {
        left: d.x,
        top: d.y,
        right: d.x,
        bottom: d.y,
        width: e,
        height: e
      };
    }, wt = function(d) {
      return {
        x: d,
        y: d
      };
    }, bt = function(c, d) {
      var e = d;
      window.addEventListener("resize", e), window.addEventListener("scroll", e);
      var g = new MutationObserver(e);
      c.forEach(function(h, y) {
        g.observe(h, {
          childList: y !== 0,
          attributes: !0
        });
      });
      var i = function() {
        return ho(g, e);
      };
      return {
        observer: g,
        callback: e,
        cleanup: i
      };
    }, xe = function(c) {
      var d = Ce(c);
      return d.x || d.y ? !0 : c instanceof Document ? c.body ? !!(c.body.scrollTop = 1) : !!(c.documentElement.scrollTop = 1) : !!(c.scrollTop = 1);
    }, ke = function() {
      var c = document.createElement("div");
      return c.style.position = "fixed", c.style.overflow = "hidden", c.style.pointerEvents = "none", c.style.zIndex = "999999999999999999", c;
    }, Ye = function(c) {
      var d = document.createElement("div");
      return d.style.position = "absolute", c || (d.style.background = "rgba(0, 175, 255, 0.2)", d.style.border = "1px solid rgba(0, 175, 255, 0.8)", d.style.display = "none", d.style.pointerEvents = "none"), d;
    }, De = function(c, d) {
      var e;
      return function() {
        for (var g = arguments.length, i = new Array(g), h = 0; h < g; h++)
          i[h] = arguments[h];
        var y = function() {
          e = null, c.apply(void 0, i);
        };
        clearTimeout(e), e = setTimeout(y, d);
      };
    }, We = function() {
      var c, d, e, g;
      return {
        y: ((c = document.body) === null || c === void 0 ? void 0 : c.scrollTop) || ((d = document.documentElement) === null || d === void 0 ? void 0 : d.scrollTop) || 0,
        x: ((e = document.body) === null || e === void 0 ? void 0 : e.scrollLeft) || ((g = document.documentElement) === null || g === void 0 ? void 0 : g.scrollLeft) || 0
      };
    }, Mr = function(c) {
      var d = function e(g) {
        var i, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = (i = g[h]) === null || i === void 0 ? void 0 : i.parentNode;
        return y ? (g.push(y), h++, e(g, h)) : g;
      };
      return d([c]);
    }, to = function(c, d) {
      if (c instanceof Document)
        return {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      var e = c.getBoundingClientRect();
      return {
        top: e.top,
        left: e.left,
        bottom: e.bottom,
        right: e.right,
        width: (c.clientWidth || e.width) * d,
        height: (c.clientHeight || e.height) * d
      };
    }, Tr = function(c, d) {
      var e = {
        top: Number.POSITIVE_INFINITY,
        left: Number.POSITIVE_INFINITY,
        bottom: Number.NEGATIVE_INFINITY,
        right: Number.NEGATIVE_INFINITY,
        width: Number.NEGATIVE_INFINITY,
        height: Number.NEGATIVE_INFINITY
      };
      return Nt(c).forEach(function(g) {
        var i = d.getRect(g);
        e.top = Math.min(e.top, i.top), e.left = Math.min(e.left, i.left), e.bottom = Math.max(e.bottom, i.bottom), e.right = Math.max(e.right, i.right);
      }), e.height = e.bottom - e.top, e.width = e.right - e.left, e;
    }, Ce = function(c) {
      return !c || c instanceof Document ? We() : {
        x: c.scrollLeft >= 0 ? c.scrollLeft : We().x,
        y: c.scrollTop >= 0 ? c.scrollTop : We().y
      };
    }, $r = function(c) {
      var d = c.elementRect, e = c.containerRect, g = c.tolerance, i = g === void 0 ? {
        x: 0,
        y: 0
      } : g, h = [];
      return d.top - i.y < e.top && h.push("top"), d.left - i.x < e.left && h.push("left"), d.bottom + i.y > e.bottom && h.push("bottom"), d.right + i.y > e.right && h.push("right"), /** @type {DSEdges} */
      h;
    }, eo = function(c) {
      var d = c.event;
      return {
        x: d.clientX,
        y: d.clientY
      };
    }, ro = function(c) {
      var d = c.scrollAmount, e = c.initialPointerPos, g = c.pointerPos, i = {};
      return g.x > e.x - d.x ? (i.left = e.x - d.x, i.width = g.x - e.x + d.x) : (i.left = g.x, i.width = e.x - g.x - d.x), g.y > e.y - d.y ? (i.top = e.y - d.y, i.height = g.y - e.y + d.y) : (i.top = g.y, i.height = e.y - g.y - d.y), i;
    }, Ir = function(d) {
      var e = {
        x: 0,
        y: 0
      }, g = window.getComputedStyle(d);
      if (!g.transform || g.transform === "none")
        return e;
      if (g.transform.indexOf("3d") >= 0) {
        var i = g.transform.trim().match(/matrix3d\((.*?)\)/);
        if (i && i.length) {
          var h, y = (h = i[1]) === null || h === void 0 ? void 0 : h.split(",");
          e.x = parseInt(y[12]) || 0, e.y = parseInt(y[13]) || 0;
        }
        return e;
      }
      var _ = g.transform.trim().match(/matrix\((.*?)\)/);
      if (_ && _.length) {
        var D, B = (D = _[1]) === null || D === void 0 ? void 0 : D.split(",");
        e.x = parseInt(B[4]) || 0, e.y = parseInt(B[5]) || 0;
      }
      return e;
    }, so = function(d) {
      var e = d.style.transform;
      if (!e || e.indexOf("translate") < 0)
        return Ir(d);
      var g = {
        x: 0,
        y: 0
      }, i = e.trim().match(/translate[3dD]*?\(.*?\)/);
      if (i) {
        var h, y = (h = i[0]) === null || h === void 0 ? void 0 : h.split("(");
        if (y) {
          var _, D = (_ = y[1]) === null || _ === void 0 ? void 0 : _.split(",");
          g.x = parseInt(D[0]) || 0, g.y = parseInt(D[1]) || 0;
        }
      }
      return !g.x && !g.x ? Ir(d) : g;
    }, oo = function(d) {
      var e = d.style, g = {
        x: parseInt(e.left) || 0,
        y: parseInt(e.top) || 0
      };
      if (!g.x && !g.x) {
        var i = window.getComputedStyle(d);
        return {
          x: parseInt(i.left) || 0,
          y: parseInt(i.top) || 0
        };
      }
      return g;
    }, io = function(c, d) {
      return d ? so(c) : oo(c);
    }, no = function(c) {
      var d = c.element, e = c.edges, g = c.elementRect, i = c.containerRect, h = c.elementPos, y = c.useTransform;
      e.includes("top") && le(d, {
        y: h.y + i.top - g.top,
        x: h.x
      }, y), e.includes("left") && le(d, {
        y: h.y,
        x: h.x + i.left - g.left
      }, y), e.includes("bottom") && le(d, {
        y: h.y + i.bottom - g.bottom,
        x: h.x
      }, y), e.includes("right") && le(d, {
        y: h.y,
        x: h.x + i.right - g.right
      }, y);
    }, Ar = function(c) {
      var d = c.computedStyle, e = c.node, g = d.position, i = g === "absolute" || g === "relative" || g === "fixed";
      !(e instanceof Document) && !i && (e.style.position = "relative");
    }, ao = function(c) {
      var d = c.shiftKey, e = c.keyboardDragSpeed, g = c.zoom, i = c.key, h = c.dragKeys, y = c.scrollDiff, _ = c.canScroll, D = c.scrollCallback, B = {
        x: 0,
        y: 0
      }, W = d ? e * 4 * g : e * g;
      return h.left.includes(i) && (B.x = y.x || -W, !d && !y.x && _ && D(["left"], e)), h.right.includes(i) && (B.x = y.x || W, !d && !y.x && _ && D(["right"], e)), h.up.includes(i) && (B.y = y.y || -W, !d && !y.y && _ && D(["top"], e)), h.down.includes(i) && (B.y = y.y || W, !d && !y.y && _ && D(["bottom"], e)), B;
    }, lo = function(c) {
      var d = c.element, e = c.force, g = c.multiSelectionToggle, i = c.SelectedSet, h = c.hoverClassName;
      d.classList.contains(h) && !e || (i.has(d) ? g && i.delete(d) : i.add(d), d.classList.add(h));
    }, co = function(c) {
      var d = c.element, e = c.force, g = c.SelectedSet, i = c.PrevSelectedSet, h = c.hoverClassName;
      if (!d.classList.contains(h) && !e)
        return !1;
      var y = g.has(d), _ = i.has(d);
      y && !_ ? g.delete(d) : !y && _ && g.add(d), d.classList.remove(h);
    }, ae = function(d, e, g) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(d, '" is not of type "').concat(e, '".'));
    }, Y = function(d, e, g, i) {
      if (e === void 0)
        return g ? l({}, d, i) : {};
      if (e === null)
        return l({}, d, null);
      var h = !0, y = !1, _ = typeof i == "string";
      _ && (h = typeof e == "string" || e instanceof String), _ && !h && (y = !0, ae(d, "string"));
      var D = !Number.isNaN(i) && typeof i == "number";
      D && (h = !Number.isNaN(e) && typeof e == "number"), D && !h && (y = !0, ae(d, "number"));
      var B = Object.prototype.toString.call(i) === "[object Object]";
      B && (h = Object.prototype.toString.call(e) === "[object Object]"), B && !h && (y = !0, ae(d, "object"));
      var W = typeof i == "boolean";
      W && (h = typeof e == "boolean"), W && !h && (y = !0, ae(d, "boolean"));
      var nt = Array.isArray(i);
      nt && (h = Array.isArray(e)), nt && !h && (y = !0, ae(d, "array"));
      var _t = y || g;
      return d === "dragKeys" && h ? l({}, d, Object.assign(i, e)) : d === "dragKeys" && !h ? _t ? l({}, d, i) : {} : (d === "dropZones" && h && new Set(e.map(function(xt) {
        return xt.id;
      })).size !== e.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), h ? l({}, d, e) : _t ? l({}, d, i) : {});
    }, uo = function(c, d) {
      return n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n({}, Y("area", c.area, d, document)), Y("selectables", c.selectables, d, null)), Y("autoScrollSpeed", c.autoScrollSpeed, d, 5)), Y("overflowTolerance", c.overflowTolerance, d, {
        x: 25,
        y: 25
      })), Y("zoom", c.zoom, d, 1)), Y("customStyles", c.customStyles, d, !1)), Y("multiSelectMode", c.multiSelectMode, d, !1)), Y("multiSelectToggling", c.multiSelectToggling, d, !0)), Y("multiSelectKeys", c.multiSelectKeys, d, ["Control", "Shift", "Meta"])), Y("selector", c.selector, d, null)), Y("selectionThreshold", c.selectionThreshold, d, 0)), Y("draggability", c.draggability, d, !0)), Y("immediateDrag", c.immediateDrag, d, !0)), Y("keyboardDrag", c.keyboardDrag, d, !0)), Y("dragKeys", c.dragKeys, d, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), Y("keyboardDragSpeed", c.keyboardDragSpeed, d, 10)), Y("useTransform", c.useTransform, d, !0)), Y("refreshMemoryRate", c.refreshMemoryRate, d, 80)), Y("dropZones", c.dropZones, d, [])), Y("dropInsideThreshold", c.dropInsideThreshold, d, 1)), Y("dropTargetThreshold", c.dropTargetThreshold, d, 0)), Y("usePointerEvents", c.usePointerEvents, d, !1)), Y("hoverClass", c.hoverClass, d, "ds-hover")), Y("selectableClass", c.selectableClass, d, "ds-selectable")), Y("selectedClass", c.selectedClass, d, "ds-selected")), Y("selectorClass", c.selectorClass, d, "ds-selector")), Y("selectorAreaClass", c.selectorAreaClass, d, "ds-selector-area")), Y("droppedTargetClass", c.droppedTargetClass, d, "ds-dropped-target")), Y("droppedInsideClass", c.droppedInsideClass, d, "ds-dropped-inside")), Y("droppableClass", c.droppableClass, d, "ds-droppable")), Y("dropZoneClass", c.dropZoneClass, d, "ds-dropzone")), Y("dropZoneReadyClass", c.dropZoneReadyClass, d, "ds-dropzone-ready")), Y("dropZoneTargetClass", c.dropZoneTargetClass, d, "ds-dropzone-target")), Y("dropZoneInsideClass", c.dropZoneInsideClass, d, "ds-dropzone-inside")), Y("dragAsBlock", c.dragAsBlock, d, !1));
    }, Gt = function(c, d) {
      var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, g = c;
      if (e > 0) {
        var i = (c.right - c.left) * e, h = (c.bottom - c.top) * e;
        g = {
          left: c.left + i,
          right: c.right - i,
          top: c.top + h,
          bottom: c.bottom - h
        };
      }
      return g.left < d.right && // 1.
      g.right > d.left && // 2.
      g.top < d.bottom && // 3.
      g.bottom > d.top;
    }, Lr = function(c) {
      var d = c.element, e = c.posDirection, g = c.containerRect, i = c.useTransform, h = io(d, i), y = O(h, "+", e);
      le(d, y, i);
      var _ = d.getBoundingClientRect(), D = $r({
        elementRect: _,
        containerRect: g
      });
      no({
        element: d,
        edges: D,
        elementRect: _,
        containerRect: g,
        elementPos: y,
        useTransform: i
      });
    }, ho = function(c, d) {
      window.removeEventListener("resize", d), window.removeEventListener("scroll", d), c.disconnect();
    }, fo = function(c, d, e) {
      if (d.length) {
        var g = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, i = c instanceof Document ? g || document.body : c, h = d.includes("top") && i.scrollTop > 0, y = d.includes("bottom") && i.scrollTop < i.scrollHeight, _ = d.includes("left") && i.scrollLeft > 0, D = d.includes("right") && i.scrollLeft < i.scrollWidth;
        h && (i.scrollTop -= 1 * e), y && (i.scrollTop += 1 * e), _ && (i.scrollLeft -= 1 * e), D && (i.scrollLeft += 1 * e);
      }
    }, le = function(c, d, e) {
      if (e) {
        var g = c.style.transform;
        c.style.transform = "translate3d(".concat(d.x, "px,").concat(d.y, "px,1px) ").concat(g.replace(/translate.*?\)/g, ""));
      } else
        c.style.left = "".concat(d.x, "px"), c.style.top = "".concat(d.y, "px");
      return c;
    }, po = function(c) {
      for (var d = c.subscribe, e = c.publish, g = c.Interaction, i = c.SelectedSet, h = c.DropZones, y = {
        "Selected:added": [{
          name: "elementselect"
        }],
        "Selected:removed": [{
          name: "elementunselect"
        }],
        "Area:scroll": [{
          name: "autoscroll"
        }],
        // scroll_directions, scroll_multiplier
        "Interaction:start": [{
          name: "dragstart"
        }],
        // event, isDraggingKeyboard
        "Interaction:update": [
          // event, isDraggingKeyboard
          {
            name: "dragmove",
            condition: function(nt) {
              return nt.event;
            }
          }
        ],
        "Interaction:end": [
          // event, isDraggingKeyboard
          {
            name: "callback",
            extraData: function() {
              var nt = h.getTarget();
              return n({}, nt ? {
                dropTarget: nt.toObject()
              } : {});
            }
          }
        ]
      }, _ = function() {
        var nt = X(B[D], 2), _t = nt[0], xt = nt[1];
        ["pre", !1].forEach(function(Mt) {
          return d(Mt ? "".concat(_t, ":").concat(Mt) : _t, function(it) {
            return xt.forEach(function(mt) {
              return (!mt.condition || mt.condition(it)) && e(Mt ? "".concat(Mt).concat(mt.name) : mt.name, n(n({
                items: i.elements,
                isDragging: g.isDragging
              }, it), mt.extraData ? mt.extraData(it) : {}));
            });
          });
        });
      }, D = 0, B = Object.entries(y); D < B.length; D++)
        _();
    }, Nt = function(c) {
      return c ? !Array.isArray(c) && (c instanceof HTMLElement || c instanceof SVGElement) ? [c] : k(new Set(k(c))) : [];
    }, Or = function(c, d) {
      c.style.left = "".concat(d.left, "px"), c.style.top = "".concat(d.top, "px"), c.style.width = "".concat(d.width, "px"), c.style.height = "".concat(d.height, "px");
    }, go = /* @__PURE__ */ function() {
      function c(d) {
        var e = this, g = d.DS;
        a(this, c), l(this, "DS", void 0), l(this, "_observers", void 0), l(this, "_node", void 0), l(this, "_parentNodes", void 0), l(this, "_computedStyle", void 0), l(this, "_computedBorder", void 0), l(this, "_rect", void 0), l(this, "setArea", function(i) {
          e.reset(), e._node = i, Ar({
            computedStyle: e.computedStyle,
            node: e._node
          }), setTimeout(function() {
            e.DS.PubSub.publish("Area:modified:pre", {
              item: e
            }), e.reset(), e.DS.PubSub.publish("Area:modified", {
              item: e
            });
          });
        }), l(this, "start", function() {
          e._observers = bt(e.parentNodes, De(function(i) {
            e.DS.PubSub.publish("Area:modified:pre", {
              event: i,
              item: e
            }), e.reset(), e.DS.PubSub.publish("Area:modified", {
              event: i,
              item: e
            });
          }, 60));
        }), l(this, "reset", function() {
          e._computedStyle = void 0, e._rect = void 0, e._computedBorder = void 0, e._parentNodes = void 0;
        }), l(this, "stop", function() {
          e._observers.cleanup(), e.reset();
        }), l(this, "scroll", function(i, h) {
          var y = {
            scroll_directions: i,
            scroll_multiplier: h
          };
          e.DS.PubSub.publish("Area:scroll:pre", y), fo(e._node, i, h), e.DS.PubSub.publish("Area:scroll", y);
        }), this.DS = g, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(i) {
          var h = i.settings;
          e.setArea(h.area);
        }), this.DS.PubSub.subscribe("Interaction:init", this.start), this.DS.PubSub.subscribe("Interaction:end", this.reset);
      }
      return m(c, [{
        key: "HTMLNode",
        get: (
          /// ///////////////////////////////////////////////////////////////////////////////////
          // Node Getters
          function() {
            return (
              /** @type {DSArea} */
              this._node
            );
          }
        )
        /**
         * The computed border from the element (caches result)
         * @type {{top:number,bottom:number,left:number,right:number}}
         */
      }, {
        key: "computedBorder",
        get: function() {
          return this._computedBorder ? this._computedBorder : {
            top: parseInt(this.computedStyle.borderTopWidth),
            bottom: parseInt(this.computedStyle.borderBottomWidth),
            left: parseInt(this.computedStyle.borderLeftWidth),
            right: parseInt(this.computedStyle.borderRightWidth)
          };
        }
        /**
         * The computed styles from the element (caches result)
         * @type {CSSStyleDeclaration}
         */
      }, {
        key: "computedStyle",
        get: function() {
          return this._computedStyle ? this._computedStyle : this.HTMLNode instanceof Document ? this._computedStyle = window.getComputedStyle(this.HTMLNode.body || this.HTMLNode.documentElement) : this._computedStyle = window.getComputedStyle(this.HTMLNode);
        }
        /**
         * The element rect (caches result) (without scrollbar or borders)
         * @type {DSBoundingRect}
         */
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = to(this.HTMLNode, this.DS.stores.SettingsStore.s.zoom);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Mr(this.HTMLNode);
        }
      }]), c;
    }(), mo = /* @__PURE__ */ function() {
      function c(d) {
        var e = this, g = d.DS;
        a(this, c), l(this, "_prevCursorPos", void 0), l(this, "_prevScrollPos", void 0), l(this, "_elements", []), l(this, "_dragKeys", void 0), l(this, "_dragKeysFlat", []), l(this, "_selectionRect", void 0), l(this, "assignDragkeys", function() {
          e._dragKeys = {
            up: e.DS.stores.SettingsStore.s.dragKeys.up.map(function(i) {
              return i.toLowerCase();
            }),
            down: e.DS.stores.SettingsStore.s.dragKeys.down.map(function(i) {
              return i.toLowerCase();
            }),
            left: e.DS.stores.SettingsStore.s.dragKeys.left.map(function(i) {
              return i.toLowerCase();
            }),
            right: e.DS.stores.SettingsStore.s.dragKeys.right.map(function(i) {
              return i.toLowerCase();
            })
          }, e._dragKeysFlat = [].concat(k(e._dragKeys.up), k(e._dragKeys.down), k(e._dragKeys.left), k(e._dragKeys.right));
        }), l(this, "keyboardDrag", function(i) {
          var h = i.event, y = i.key, _ = y.toLowerCase();
          if (!(!e.DS.stores.SettingsStore.s.keyboardDrag || !e._dragKeysFlat.includes(_) || !e.DS.SelectedSet.size || !e.DS.stores.SettingsStore.s.draggability || e.DS.continue)) {
            var D = {
              event: h,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            e.DS.publish(["Interaction:start:pre", "Interaction:start"], D), e._elements = e.DS.getSelection(), e.DS.stores.SettingsStore.s.dragAsBlock && (e._selectionRect = Tr(e._elements, e.DS.SelectableSet)), e.handleZIndex(!0);
            var B = ao({
              shiftKey: e.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: e.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: e.DS.stores.SettingsStore.s.zoom,
              key: _,
              scrollCallback: e.DS.Area.scroll,
              scrollDiff: e._scrollDiff,
              canScroll: e.DS.stores.ScrollStore.canScroll,
              dragKeys: e._dragKeys
            });
            e.DS.stores.SettingsStore.s.dragAsBlock && (B = e.limitDirection(B)), e._elements.forEach(function(W) {
              return Lr({
                element: W,
                posDirection: B,
                containerRect: e.DS.SelectorArea.rect,
                useTransform: e.DS.stores.SettingsStore.s.useTransform
              });
            }), e.DS.publish(["Interaction:update:pre", "Interaction:update"], D);
          }
        }), l(this, "keyboardEnd", function(i) {
          var h = i.event, y = i.key, _ = y.toLowerCase();
          if (!(!e.DS.stores.SettingsStore.s.keyboardDrag || !e._dragKeysFlat.includes(_) || !e.DS.SelectedSet.size || !e.DS.stores.SettingsStore.s.draggability)) {
            var D = {
              event: h,
              isDragging: e.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            e.DS.publish(["Interaction:end:pre", "Interaction:end"], D);
          }
        }), l(this, "start", function(i) {
          var h = i.isDragging, y = i.isDraggingKeyboard;
          !h || y || (e._prevCursorPos = null, e._prevScrollPos = null, e._elements = e.DS.getSelection(), e.DS.stores.SettingsStore.s.dragAsBlock && (e._selectionRect = Tr(e._elements, e.DS.SelectableSet)), e.handleZIndex(!0));
        }), l(this, "stop", function(i) {
          i != null && i.isKeyboard || (e._prevCursorPos = null, e._prevScrollPos = null, e.handleZIndex(!1), e._elements = []);
        }), l(this, "update", function(i) {
          var h = i.isDragging, y = i.isDraggingKeyboard;
          if (!(!h || !e._elements.length || y || e.DS.continue)) {
            var _ = O(e._cursorDiff, "+", e._scrollDiff);
            e.DS.stores.SettingsStore.s.dragAsBlock && (_ = e.limitDirection(_)), e._elements.forEach(function(D) {
              return Lr({
                element: D,
                posDirection: _,
                containerRect: e.DS.SelectorArea.rect,
                useTransform: e.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), l(this, "limitDirection", function(i) {
          var h = e.DS.SelectorArea.rect, y = e.DS.stores.ScrollStore.scrollAmount, _ = {
            top: h.top - e._selectionRect.top + y.y,
            left: h.left - e._selectionRect.left + y.x,
            bottom: h.bottom - e._selectionRect.bottom + y.y,
            right: h.right - e._selectionRect.right + y.x
          };
          return i.x === 0 && i.y === 0 || (i.y < 0 && (i.y = Math.max(i.y, _.top)), i.x < 0 && (i.x = Math.max(i.x, _.left)), i.y > 0 && (i.y = Math.min(i.y, _.bottom)), i.x > 0 && (i.x = Math.min(i.x, _.right)), e._selectionRect.top += i.y, e._selectionRect.bottom += i.y, e._selectionRect.left += i.x, e._selectionRect.right += i.x), i;
        }), l(this, "handleZIndex", function(i) {
          e._elements.forEach(function(h) {
            return h.style.zIndex = "".concat((parseInt(h.style.zIndex) || 0) + i ? 9999 : -9998);
          });
        }), this.DS = g, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return m(c, [{
        key: "_cursorDiff",
        get: function() {
          var e = this.DS.stores.PointerStore.currentVal, g = this._prevCursorPos ? O(e, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = e, g;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var e = this.DS.stores.ScrollStore.currentVal, g = this._prevScrollPos ? O(e, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = e, g;
        }
      }]), c;
    }(), vo = /* @__PURE__ */ function() {
      function c(d) {
        var e = this, g = d.DS, i = d.id, h = d.element, y = d.droppables;
        a(this, c), l(this, "id", void 0), l(this, "element", void 0), l(this, "_droppables", void 0), l(this, "_rect", void 0), l(this, "_observers", void 0), l(this, "_timeout", void 0), l(this, "_itemsDropped", []), l(this, "_itemsInside", void 0), l(this, "setReadyClasses", function(_) {
          if (!e.isDestroyed) {
            var D = e.droppables.filter(function(B) {
              return e.DS.SelectedSet.has(B);
            });
            D.length && (D.forEach(function(B) {
              B.classList[_]("".concat(e.Settings.droppableClass)), B.classList[_]("".concat(e.Settings.droppableClass, "-").concat(e.id));
            }), e.element.classList[_]("".concat(e.Settings.dropZoneReadyClass)));
          }
        }), l(this, "handleNoDrop", function() {
          var _;
          e.isDestroyed || (e.DS.SelectedSet.forEach(function(D) {
            D.classList.remove(e.Settings.droppedTargetClass), D.classList.remove("".concat(e.Settings.droppedTargetClass, "-").concat(e.id));
          }), e._itemsDropped = e._itemsDropped.filter(function(D) {
            return !e.DS.SelectedSet.has(D);
          }), (_ = e._itemsDropped) !== null && _ !== void 0 && _.length || e.element.classList.remove("".concat(e.Settings.dropZoneTargetClass)));
        }), l(this, "handleDrop", function() {
          var _, D, B;
          e.isDestroyed || (e._itemsDropped = k(new Set([].concat(k(e._itemsDropped), k((_ = e.droppables) === null || _ === void 0 ? void 0 : _.filter(function(W) {
            return e.DS.SelectedSet.has(W);
          }))))), (D = e._itemsDropped) === null || D === void 0 || D.forEach(function(W) {
            W.classList.add("".concat(e.Settings.droppedTargetClass)), W.classList.add("".concat(e.Settings.droppedTargetClass, "-").concat(e.id));
          }), (B = e._itemsDropped) !== null && B !== void 0 && B.length && e.element.classList.add("".concat(e.Settings.dropZoneTargetClass)));
        }), l(this, "handleItemsInsideClasses", function() {
          var _ = !1;
          e.droppables.forEach(function(D) {
            e.itemsInside.includes(D) ? (D.classList.add("".concat(e.Settings.droppedInsideClass)), D.classList.add("".concat(e.Settings.droppedInsideClass, "-").concat(e.id)), _ = !0) : (D.classList.remove("".concat(e.Settings.droppedInsideClass, "-").concat(e.id)), D.className.includes("".concat(e.Settings.droppedInsideClass, "-")) || D.classList.remove("".concat(e.Settings.droppedInsideClass)));
          }), _ ? e.element.classList.add("".concat(e.Settings.dropZoneInsideClass)) : e.element.classList.remove("".concat(e.Settings.dropZoneInsideClass));
        }), l(this, "start", function(_) {
          var D = _.isDragging;
          !D || e.isDestroyed || e.setReadyClasses("add");
        }), l(this, "stop", function(_) {
          var D = _.isDragging;
          !D || e.isDestroyed || (e.setReadyClasses("remove"), e.handleItemsInsideClasses());
        }), l(this, "toObject", function() {
          return {
            id: e.id,
            element: e.element,
            droppables: e.droppables,
            itemsDropped: e.itemsDropped,
            itemsInside: e.itemsInside
          };
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.id = i, this.element = h, y && (this.droppables = Nt(y)), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(_) {
          var D = _.settings;
          e.element && (e.element.classList.remove(D["dropZoneClass:pre"]), e.element.classList.add(D.dropZoneClass));
        }), this._observers = bt(this.parentNodes, De(function() {
          return e._rect = null;
        }, this.Settings.refreshMemoryRate)), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop);
      }
      return m(c, [{
        key: "destroy",
        value: function() {
          var e = this;
          this._observers.cleanup(), this.element.classList.remove("".concat(this.Settings.dropZoneClass)), this.element.classList.remove("".concat(this.Settings.dropZoneTargetClass)), this.element.classList.remove("".concat(this.Settings.dropZoneReadyClass)), this.droppables.forEach(function(g) {
            g.classList.remove("".concat(e.Settings.droppedTargetClass)), g.classList.remove("".concat(e.Settings.droppedTargetClass, "-").concat(e.id)), g.classList.remove("".concat(e.Settings.droppableClass)), g.classList.remove("".concat(e.Settings.droppableClass, "-").concat(e.id));
          }), this.DS.unsubscribe("Interaction:start", this.start), this.DS.unsubscribe("Interaction:end", this.stop), this.element = null, this.droppables = null, this.id = null, this._itemsDropped = null, this._itemsInside = null, this.isDestroyed = !0;
        }
        /**
         * @returns {DSDropZone}
         */
      }, {
        key: "rect",
        get: function() {
          return this.isDestroyed ? null : this._rect ? this._rect : this._rect = this.element.getBoundingClientRect();
        }
      }, {
        key: "itemsDropped",
        get: function() {
          return this.isDestroyed ? null : this._itemsDropped;
        }
      }, {
        key: "itemsInside",
        get: function() {
          var e = this;
          return this.isDestroyed ? null : this._itemsInside ? this._itemsInside : (this._itemsInside = this.droppables.flatMap(function(g) {
            return Gt(e.DS.SelectableSet.rects.get(g), e.rect, e.Settings.dropInsideThreshold) ? [g] : [];
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return e._itemsInside = null;
          }, this.Settings.refreshMemoryRate), this._itemsInside);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Mr(this.element);
        }
      }, {
        key: "droppables",
        get: function() {
          return this._droppables ? this._droppables : this.DS.SelectableSet.elements;
        },
        set: function(e) {
          this._droppables = e;
        }
      }]), c;
    }(), bo = /* @__PURE__ */ m(
      /**
       * Get the drop zone by the zone element
       * @type {Map<DSElement, DropZone>}
       * @private
       */
      /**
       * Get the drop zone by the zone id
       * @type {Map<string, DropZone>}
       * @private
       */
      /**
       * Get the drop zones by one zone item
       * @type {Map<DSElement,DropZone[]>}
       * @private
       */
      /**
       * Get the drop zones by one zone item
       * @type {DropZone[]}
       * @private
       */
      /**
       * @constructor Drag
       * @param {{DS:DragSelect}} obj
       * @ignore
       */
      function c(d) {
        var e = this, g = d.DS;
        a(this, c), l(this, "_zoneByElement", /* @__PURE__ */ new Map()), l(this, "_zoneById", /* @__PURE__ */ new Map()), l(this, "_zonesByDroppable", /* @__PURE__ */ new Map()), l(this, "_zones", void 0), l(this, "setDropZones", function(i) {
          var h = i.dropZones;
          h && (e._zones && e._zones.forEach(function(y) {
            return y.destroy();
          }), e._zones = h.map(function(y) {
            return new vo(n({
              DS: e.DS
            }, y));
          }), e._zones.forEach(function(y) {
            e._zoneByElement.set(y.element, y), e._zoneById.set(y.id, y), y.droppables.forEach(function(_) {
              var D = e._zonesByDroppable.get(_);
              if (!(D != null && D.length))
                return e._zonesByDroppable.set(_, [y]);
              e._zonesByDroppable.set(_, k(new Set([].concat(k(D), [y]))));
            });
          }));
        }), l(this, "_handleDrop", function(i) {
          e._zones.forEach(function(h) {
            h !== i && h.handleNoDrop();
          }), i && i.handleDrop();
        }), l(this, "_getZoneByElementsFromPoint", function(i, h) {
          for (var y = h.x, _ = h.y, D = 0, B = i.length; D < B; D++) {
            var W = e._zoneByElement.get(i[D]);
            if (W && Gt(W.rect, {
              left: y,
              right: y,
              top: _,
              bottom: _
            }, Math.min(e.Settings.dropTargetThreshold, 0.5)))
              return W;
          }
        }), l(this, "stop", function(i) {
          var h = i.isDragging;
          if (h) {
            var y = e.getTarget();
            e._handleDrop(y);
          }
        }), l(this, "getItemsDroppedById", function(i) {
          var h = e._zoneById.get(i);
          return h ? h.itemsDropped : console.warn("[DragSelect] No zone found (id: ".concat(i, ")"));
        }), l(this, "getItemsInsideById", function(i, h) {
          var y = e._zoneById.get(i);
          if (!y)
            return console.warn("[DragSelect] No zone found (id: ".concat(i, ")"));
          var _ = y.itemsInside;
          return h && y.handleItemsInsideClasses(), _;
        }), l(this, "getTarget", function(i) {
          var h;
          if ((h = e._zones) !== null && h !== void 0 && h.length) {
            var y = (i == null ? void 0 : i.x) || e.DS.stores.PointerStore.currentVal.x, _ = (i == null ? void 0 : i.y) || e.DS.stores.PointerStore.currentVal.y, D = document.elementsFromPoint(y, _);
            return e._getZoneByElementsFromPoint(
              /** @type {DSElements} */
              D,
              {
                x: y,
                y: _
              }
            );
          }
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:dropZones", function(i) {
          var h = i.settings;
          return e.setDropZones(h);
        }), this.setDropZones({
          dropZones: (
            /** @type {DSDropZone[]} */
            this.DS.stores.SettingsStore.s.dropZones
          )
        }), this.DS.subscribe("Interaction:end", this.stop);
      }
      /**
       * @param {Object} obj
       * @param {DSDropZone[]} [obj.dropZones]
       */
    ), yo = /* @__PURE__ */ function() {
      function c(d) {
        var e = this, g = d.DS;
        a(this, c), l(this, "isInteracting", void 0), l(this, "isDragging", void 0), l(this, "init", function() {
          return e.DS.publish("Interaction:init:pre", {});
        }), l(this, "_init", function() {
          e.stop(), e.Settings.usePointerEvents ? e.DS.Area.HTMLNode.addEventListener("pointerdown", e.start, {
            passive: !1
          }) : e.DS.Area.HTMLNode.addEventListener("mousedown", e.start), e.DS.Area.HTMLNode.addEventListener("touchstart", e.start, {
            passive: !1
          }), e.DS.publish("Interaction:init", {});
        }), l(this, "start", function(i) {
          return e.DS.publish("Interaction:start:pre", {
            event: i,
            isDragging: e.isDragging
          });
        }), l(this, "_start", function(i) {
          i.type === "touchstart" && i.preventDefault(), e._canInteract(i) && (e.isInteracting = !0, e.isDragging = e.isDragEvent(i), e.DS.publish("Interaction:start", {
            event: i,
            isDragging: e.isDragging
          }), e.Settings.usePointerEvents ? (document.addEventListener("pointerup", e.reset), document.addEventListener("pointercancel", e.reset)) : document.addEventListener("mouseup", e.reset), document.addEventListener("touchend", e.reset));
        }), l(this, "isDragEvent", function(i) {
          var h = (
            /** @type {Element} */
            i.target.closest(".".concat(e.Settings.selectableClass))
          );
          return !e.Settings.draggability || e.DS.stores.KeyStore.isMultiSelectKeyPressed(i) || !h ? !1 : (e.Settings.immediateDrag && (e.DS.SelectedSet.size ? e.DS.SelectedSet.has(h) || (e.DS.SelectedSet.clear(), e.DS.SelectedSet.add(
            /** @type {DSElement} */
            h
          )) : e.DS.SelectedSet.add(
            /** @type {DSElement} */
            h
          )), !!e.DS.SelectedSet.has(h));
        }), l(this, "onClick", function(i) {
          var h = i.event;
          if (e._canInteract(h) && !(h.detail > 0)) {
            var y = e.DS, _ = y.stores, D = _.PointerStore, B = _.KeyStore, W = y.SelectableSet, nt = y.SelectedSet;
            D.start(h);
            var _t = (
              /** @type {any} */
              h.target
            );
            W.has(_t) && (B.isMultiSelectKeyPressed(h) || nt.clear(), nt.toggle(_t), e.reset());
          }
        }), l(this, "stop", function() {
          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.DS.Area.HTMLNode;
          e.isInteracting = !1, e.isDragging = !1, e.Settings.usePointerEvents ? (i.removeEventListener("pointerdown", e.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("pointerup", e.reset), document.removeEventListener("pointercancel", e.reset)) : (i.removeEventListener("mousedown", e.start), document.removeEventListener("mouseup", e.reset)), i.removeEventListener("touchstart", e.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("touchend", e.reset);
        }), l(this, "update", function(i) {
          var h = i.event, y = i.scroll_directions, _ = i.scroll_multiplier;
          e.isInteracting && e.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: h,
            scroll_directions: y,
            scroll_multiplier: _,
            isDragging: e.isDragging
          });
        }), l(this, "reset", function(i) {
          return e.DS.publish("Interaction:end:pre", {
            event: i,
            isDragging: e.isDragging
          });
        }), l(this, "_reset", function(i) {
          var h = e.isDragging;
          e.stop(), e.init(), e.DS.publish("Interaction:end", {
            event: i,
            isDragging: h
          });
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:area", function(i) {
          var h = i.settings;
          e.stop(h["area:pre"]), e.init();
        }), this.DS.subscribe("PointerStore:updated", this.update), this.DS.subscribe("Selectable:click", this.onClick), this.DS.subscribe("Selectable:pointer", function(i) {
          var h = i.event;
          return e.start(h);
        }), this.DS.subscribe("Interaction:start:pre", function(i) {
          var h = i.event;
          return e._start(h);
        }), this.DS.subscribe("Interaction:init:pre", this._init), this.DS.subscribe("Interaction:end:pre", function(i) {
          var h = i.event;
          return e._reset(h);
        }), this.DS.subscribe("Area:scroll", this.update);
      }
      return m(c, [{
        key: "_canInteract",
        value: (
          /**
           * @param {DSEvent} event
           */
          function(e) {
            var g = (
              /** @type {MouseEvent} */
              e.clientX === 0 && /** @type {MouseEvent} */
              e.clientY === 0 && /** @type {MouseEvent} */
              e.detail === 0 && e.target
            );
            return (
              /** @type {MouseEvent} */
              !(e.button === 2 || // right-clicks
              this.isInteracting || // fix double-click issues
              e.target && !this.DS.SelectorArea.isInside(
                /** @type {DSElement} */
                e.target
              ) || // fix outside elements issue
              !g && !this.DS.SelectorArea.isClicked(e))
            );
          }
        )
        /**
         * @param {DSEvent} event
         */
      }]), c;
    }(), So = /* @__PURE__ */ m(
      function c(d) {
        var e = this, g = d.DS;
        a(this, c), l(this, "subscribers", {}), l(this, "subscribe", function(i, h) {
          return Array.isArray(e.subscribers[i]) || (e.subscribers[i] = []), e.subscribers[i].push(h), e.subscribers[i].length - 1;
        }), l(this, "unsubscribe", function(i, h, y) {
          y >= 0 ? e.subscribers[i].splice(y, 1) : h && (e.subscribers[i] = e.subscribers[i].filter(function(_) {
            return _ !== h;
          }));
        }), l(this, "publish", function(i, h) {
          Array.isArray(i) ? i.forEach(function(y) {
            return e._publish(y, h);
          }) : e._publish(i, h);
        }), l(this, "_publish", function(i, h) {
          var y = e.subscribers[i];
          Array.isArray(y) && (i.includes(":pre") ? e._handlePrePublish(y, h) : e._handlePublish(y, h));
        }), l(this, "_handlePublish", function(i, h) {
          for (var y = 0, _ = i.length; y < _; y++) {
            if (e.DS.stopped)
              return;
            i[y](h);
          }
        }), l(this, "_handlePrePublish", function(i, h) {
          for (var y = i.length; y--; ) {
            if (e.DS.stopped)
              return;
            i[y](h);
          }
        }), this.DS = g;
      }
      /**
       * Subscribe to an event
       * @memberof DragSelect#
       * @function subscribe
       * @param {DSCallbackNames} eventName
       * @param {DSCallback} callback
       * @returns {number} event id, can be used to unsubscribe more efficiently
       */
    ), wo = /* @__PURE__ */ function(c) {
      v(e, c);
      var d = V(e);
      function e(g) {
        var i, h = g.DS;
        return a(this, e), i = d.call(this), l(T(i), "_rects", void 0), l(T(i), "_timeout", void 0), l(T(i), "init", function() {
          return Nt(i.Settings.selectables).forEach(function(y) {
            return i.add(y);
          });
        }), l(T(i), "clear", function() {
          return i.forEach(function(y) {
            return i.delete(y);
          });
        }), l(T(i), "_onClick", function(y) {
          return i.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: y
          });
        }), l(T(i), "_onPointer", function(y) {
          return i.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: y
          });
        }), l(T(i), "addAll", function(y) {
          return y.forEach(function(_) {
            return i.add(_);
          });
        }), l(T(i), "deleteAll", function(y) {
          return y.forEach(function(_) {
            return i.delete(_);
          });
        }), l(T(i), "getRect", function(y) {
          return i._rects ? i.rects.get(y) : y.getBoundingClientRect();
        }), i.DS = h, i.Settings = h.stores.SettingsStore.s, i.DS.subscribe("Interaction:init", i.init), i.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          i.clear(), i.init();
        }), i.DS.subscribe("Settings:updated:selectableClass", function(y) {
          var _ = y.settings;
          i.forEach(function(D) {
            D.classList.remove(_["selectableClass:pre"]), D.classList.add(_.selectableClass);
          });
        }), i;
      }
      return m(e, [{
        key: "add",
        value: (
          /** 
           * @param {DSElement} element
           * @return {this}
           * */
          function(i) {
            if (z(f(e.prototype), "has", this).call(this, i))
              return this;
            var h = {
              items: this.elements,
              item: i
            };
            return this.DS.publish("Selectable:added:pre", h), i.classList.add(this.Settings.selectableClass), i.addEventListener("click", this._onClick), this.Settings.usePointerEvents ? i.addEventListener("pointerdown", this._onPointer, {
              // @ts-ignore
              passive: !1
            }) : i.addEventListener("mousedown", this._onPointer), i.addEventListener("touchstart", this._onPointer, {
              // @ts-ignore
              passive: !1
            }), this.Settings.draggability && !this.Settings.useTransform && Ar({
              computedStyle: window.getComputedStyle(i),
              node: i
            }), z(f(e.prototype), "add", this).call(this, i), this.DS.publish("Selectable:added", h), this;
          }
        )
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(i) {
          if (!z(f(e.prototype), "has", this).call(this, i))
            return !0;
          var h = {
            items: this.elements,
            item: i
          };
          return this.DS.publish("Selectable:removed:pre", h), i.classList.remove(this.Settings.selectableClass), i.classList.remove(this.Settings.hoverClass), i.removeEventListener("click", this._onClick), this.Settings.usePointerEvents ? i.removeEventListener("pointerdown", this._onPointer, {
            // @ts-ignore
            passive: !1
          }) : i.removeEventListener("mousedown", this._onPointer), i.removeEventListener("touchstart", this._onPointer, {
            // @ts-ignore
            passive: !1
          }), z(f(e.prototype), "delete", this).call(this, i), this.DS.publish("Selectable:removed", h), !0;
        }
      }, {
        key: "elements",
        get: (
          /** @return {DSElements} */
          function() {
            return Array.from(this.values());
          }
        )
      }, {
        key: "rects",
        get: function() {
          var i = this;
          return this._rects ? this._rects : (this._rects = /* @__PURE__ */ new Map(), this.forEach(function(h) {
            return i._rects.set(h, h.getBoundingClientRect());
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return i._rects = null;
          }, this.Settings.refreshMemoryRate), this._rects);
        }
      }]), e;
    }(/* @__PURE__ */ I(Set)), _o = /* @__PURE__ */ function(c) {
      v(e, c);
      var d = V(e);
      function e(g) {
        var i, h = g.DS;
        return a(this, e), i = d.call(this), l(T(i), "clear", function() {
          return i.forEach(function(y) {
            return i.delete(y);
          });
        }), l(T(i), "addAll", function(y) {
          return y.forEach(function(_) {
            return i.add(_);
          });
        }), l(T(i), "deleteAll", function(y) {
          return y.forEach(function(_) {
            return i.delete(_);
          });
        }), i.DS = h, i;
      }
      return m(e, [{
        key: "add",
        value: function(i) {
          if (z(f(e.prototype), "has", this).call(this, i))
            return this;
          var h = {
            items: this.elements,
            item: i
          };
          return this.DS.publish("Selected:added:pre", h), z(f(e.prototype), "add", this).call(this, i), i.classList.add(this.DS.stores.SettingsStore.s.selectedClass), i.style.zIndex = "".concat((parseInt(i.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", h), this;
        }
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(i) {
          if (!z(f(e.prototype), "has", this).call(this, i))
            return !0;
          var h = {
            items: this.elements,
            item: i
          };
          this.DS.publish("Selected:removed:pre", h);
          var y = z(f(e.prototype), "delete", this).call(this, i);
          return i.classList.remove(this.DS.stores.SettingsStore.s.selectedClass), i.style.zIndex = "".concat((parseInt(i.style.zIndex) || 0) - 1), this.DS.publish("Selected:removed", h), y;
        }
      }, {
        key: "toggle",
        value: (
          /**
           * Adds/Removes an element. If it is already selected = remove, if not = add.
           * @param {DSElement} element
           * @return {DSElement}
           */
          function(i) {
            return this.has(i) ? this.delete(i) : this.add(i), i;
          }
        )
        /** @param {DSElements} elements */
      }, {
        key: "elements",
        get: (
          /** @return {DSElements} */
          function() {
            return Array.from(this.values());
          }
        )
      }]), e;
    }(/* @__PURE__ */ I(Set)), xo = /* @__PURE__ */ function() {
      function c(d) {
        var e = this, g = d.DS;
        a(this, c), l(this, "_prevSelectedSet", void 0), l(this, "start", function(i) {
          var h = i.event, y = i.isDragging;
          y || (e._storePrevious(h), e._handleInsideSelection(!0, h));
        }), l(this, "update", function(i) {
          var h = i.isDragging;
          h || e.DS.continue || e._handleInsideSelection();
        }), l(this, "_handleInsideSelection", function(i, h) {
          var y = e.DS, _ = y.SelectableSet, D = y.SelectorArea, B = y.Selector, W = e.DS.stores.KeyStore.isMultiSelectKeyPressed(h) && e.Settings.multiSelectToggling, nt = e.Settings.selectionThreshold, _t = _.rects, xt = B.rect, Mt = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), mt = gt(_t), ce;
          try {
            for (mt.s(); !(ce = mt.n()).done; ) {
              var Ee = X(ce.value, 2), de = Ee[0], Me = Ee[1];
              D.isInside(de, Me) && (Gt(Me, xt, nt) ? Mt.set(de, Me) : it.set(de, Me));
            }
          } catch (Xe) {
            mt.e(Xe);
          } finally {
            mt.f();
          }
          if (!e.DS.continue) {
            var Nr = e.filterSelected({
              select: Mt,
              unselect: it,
              selectorRect: xt
            }), $o = Nr.select, Io = Nr.unselect;
            $o.forEach(function(Xe, Ze) {
              return lo({
                element: Ze,
                force: i,
                multiSelectionToggle: W,
                SelectedSet: e.DS.SelectedSet,
                hoverClassName: e.Settings.hoverClass
              });
            }), Io.forEach(function(Xe, Ze) {
              return co({
                element: Ze,
                force: i,
                SelectedSet: e.DS.SelectedSet,
                hoverClassName: e.Settings.hoverClass,
                PrevSelectedSet: e._prevSelectedSet
              });
            });
          }
        }), l(this, "filterSelected", function(i) {
          var h = i.select, y = i.unselect;
          return i.selectorRect, {
            select: h,
            unselect: y
          };
        }), this.DS = g, this.Settings = this.DS.stores.SettingsStore.s, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return m(c, [{
        key: "_storePrevious",
        value: function(e) {
          var g = this.DS, i = g.stores.KeyStore, h = g.SelectedSet;
          i.isMultiSelectKeyPressed(e) ? this._prevSelectedSet = new Set(h) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
        /** @param {{event:DSEvent,isDragging:boolean}} event */
      }]), c;
    }(), ko = /* @__PURE__ */ function() {
      function c(d) {
        var e = this, g = d.DS;
        a(this, c), l(this, "_rect", void 0), l(this, "attachSelector", function() {
          var i, h;
          e.HTMLNode && (i = e.DS.SelectorArea) !== null && i !== void 0 && i.HTMLNode && e.DS.SelectorArea.HTMLNode.removeChild(e.HTMLNode), e.HTMLNode = e.DS.stores.SettingsStore.s.selector || Ye(e.DS.stores.SettingsStore.s.customStyles), e.HTMLNode.classList.add(e.DS.stores.SettingsStore.s.selectorClass), e.HTMLNode && (h = e.DS.SelectorArea) !== null && h !== void 0 && h.HTMLNode && e.DS.SelectorArea.HTMLNode.appendChild(e.HTMLNode);
        }), l(this, "start", function(i) {
          var h = i.isDragging;
          if (!h) {
            var y = e.DS.stores.PointerStore, _ = y.initialValArea;
            Or(e.HTMLNode, U(_, 1)), e.HTMLNode.style.display = "block", e._rect = null;
          }
        }), l(this, "stop", function() {
          e.HTMLNode.style.width = "0", e.HTMLNode.style.height = "0", e.HTMLNode.style.display = "none";
        }), l(this, "update", function(i) {
          var h = i.isDragging;
          if (!(h || e.DS.continue)) {
            var y = e.DS.stores, _ = y.ScrollStore, D = y.PointerStore, B = ro({
              scrollAmount: _.scrollAmount,
              initialPointerPos: D.initialValArea,
              pointerPos: D.currentValArea
            });
            Or(e.HTMLNode, B), e._rect = null;
          }
        }), this.DS = g, this.DS.subscribe("Settings:updated:selectorClass", function(i) {
          var h = i.settings;
          e.HTMLNode.classList.remove(h["selectorClass:pre"]), e.HTMLNode.classList.add(h.selectorClass);
        }), this.DS.subscribe("Settings:updated:selector", this.attachSelector), this.DS.subscribe("Settings:updated:customStyles", this.attachSelector), this.attachSelector(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return m(c, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Do = /* @__PURE__ */ function() {
      function c(d) {
        var e = this, g = d.DS;
        a(this, c), l(this, "_scrollInterval", void 0), l(this, "_rect", void 0), l(this, "currentEdges", []), l(this, "start", function() {
          e.applyElements("append"), e.updatePos();
        }), l(this, "applyElements", function() {
          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", h = document.body ? "body" : "documentElement", y = "".concat(i, "Child");
          e.HTMLNode[y](e.DS.Selector.HTMLNode), document[h][y](e.HTMLNode);
        }), l(this, "updatePos", function() {
          e._rect = null;
          var i = e.DS.Area.rect, h = e.DS.Area.computedBorder, y = e.HTMLNode.style, _ = "".concat(i.top + h.top, "px"), D = "".concat(i.left + h.left, "px"), B = "".concat(i.width, "px"), W = "".concat(i.height, "px");
          y.top !== _ && (y.top = _), y.left !== D && (y.left = D), y.width !== B && (y.width = B), y.height !== W && (y.height = W);
        }), l(this, "stop", function(i) {
          e.stopAutoScroll(), i && e.applyElements("remove");
        }), l(this, "startAutoScroll", function() {
          e.currentEdges = [], e._scrollInterval = setInterval(function() {
            return e.handleAutoScroll();
          }, 16);
        }), l(this, "handleAutoScroll", function() {
          if (!e.DS.continue) {
            var i = e.DS, h = i.stores.PointerStore, y = i.Area;
            e.currentEdges = $r({
              elementRect: U(h.currentVal),
              containerRect: e.rect,
              tolerance: e.DS.stores.SettingsStore.s.overflowTolerance
            }), e.currentEdges.length && y.scroll(e.currentEdges, e.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), l(this, "stopAutoScroll", function() {
          e.currentEdges = [], clearInterval(e._scrollInterval);
        }), l(this, "isInside", function(i, h) {
          return e.DS.Area.HTMLNode.contains(i) && e.DS.stores.ScrollStore.canScroll ? !0 : Gt(e.rect, h || i.getBoundingClientRect());
        }), this.DS = g, this.HTMLNode = ke(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(i) {
          var h = i.settings;
          e.HTMLNode.classList.remove(h["selectorAreaClass:pre"]), e.HTMLNode.classList.add(h.selectorAreaClass);
        }), this.HTMLNode.classList.add(this.DS.stores.SettingsStore.s.selectorAreaClass), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Interaction:init", this.start), this.DS.subscribe("Interaction:start", this.startAutoScroll), this.DS.subscribe("Interaction:end", function() {
          e.updatePos(), e.stopAutoScroll();
        });
      }
      return m(c, [{
        key: "isClicked",
        value: (
          /**
           * checks if the click was triggered on the area.
           * @param {DSEvent} [event]
           * @returns {boolean}
           */
          function(e) {
            var g = this.DS.stores.PointerStore, i = e ? g.getPointerPosition(e) : g.initialVal;
            return Gt({
              left: i.x,
              top: i.y,
              right: i.x,
              bottom: i.y
            }, this.rect);
          }
        )
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Co = /* @__PURE__ */ function() {
      function c(d) {
        var e = this, g = d.DS;
        a(this, c), l(this, "_currentValues", /* @__PURE__ */ new Set()), l(this, "_keyMapping", {
          control: "ctrlKey",
          shift: "shiftKey",
          meta: "metaKey"
        }), l(this, "init", function() {
          document.addEventListener("keydown", e.keydown), document.addEventListener("keyup", e.keyup), window.addEventListener("blur", e.reset);
        }), l(this, "keydown", function(i) {
          var h = i.key.toLowerCase();
          e.DS.publish("KeyStore:down:pre", {
            event: i,
            key: h
          }), e._currentValues.add(h), e.DS.publish("KeyStore:down", {
            event: i,
            key: h
          });
        }), l(this, "keyup", function(i) {
          var h = i.key.toLowerCase();
          e.DS.publish("KeyStore:up:pre", {
            event: i,
            key: h
          }), e._currentValues.delete(h), e.DS.publish("KeyStore:up", {
            event: i,
            key: h
          });
        }), l(this, "stop", function() {
          document.removeEventListener("keydown", e.keydown), document.removeEventListener("keyup", e.reset), window.removeEventListener("blur", e.reset), e.reset();
        }), l(this, "reset", function() {
          return e._currentValues.clear();
        }), this.DS = g, this.DS.subscribe("Interaction:init", this.init);
      }
      return m(c, [{
        key: "isMultiSelectKeyPressed",
        value: (
          /** @param {KeyboardEvent|MouseEvent|PointerEvent|TouchEvent} [event] */
          function(e) {
            var g = this;
            if (this.DS.stores.SettingsStore.s.multiSelectMode)
              return !0;
            var i = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(h) {
              return h.toLocaleLowerCase();
            });
            return !!(this.currentValues.some(function(h) {
              return i.includes(h.toLocaleLowerCase());
            }) || e && i.some(function(h) {
              return e[g._keyMapping[h]];
            }));
          }
        )
      }, {
        key: "currentValues",
        get: function() {
          return Array.from(this._currentValues.values());
        }
      }]), c;
    }(), Eo = /* @__PURE__ */ function() {
      function c(d) {
        var e = this, g = d.DS;
        a(this, c), l(this, "_isMouseInteraction", !1), l(this, "_initialValArea", void 0), l(this, "_currentValArea", void 0), l(this, "_lastValArea", void 0), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_lastVal", void 0), l(this, "_lastTouch", void 0), l(this, "init", function() {
          e.Settings.usePointerEvents ? document.addEventListener("pointermove", e.update, {
            // @ts-ignore
            passive: !1
          }) : document.addEventListener("mousemove", e.update), document.addEventListener("touchmove", e.update, {
            // @ts-ignore
            passive: !1
          });
        }), l(this, "getPointerPosition", function(i) {
          return eo({
            event: e._normalizedEvent(i)
          });
        }), l(this, "update", function(i) {
          i && (e.DS.publish("PointerStore:updated:pre", {
            event: i
          }), e.currentVal = e.getPointerPosition(i), e._isMouseInteraction && e.DS.publish("PointerStore:updated", {
            event: i
          }));
        }), l(this, "stop", function() {
          e.Settings.usePointerEvents ? document.removeEventListener("pointermove", e.update, {
            // @ts-ignore
            passive: !1
          }) : document.removeEventListener("mousemove", e.update), document.removeEventListener("touchmove", e.update, {
            // @ts-ignore
            passive: !1
          }), setTimeout(function() {
            return e._isMouseInteraction = !1;
          }, 100);
        }), l(this, "reset", function(i) {
          i && (e.currentVal = e.lastVal = e.getPointerPosition(i), e.stop(), e.init());
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(i) {
          var h = i.event;
          return e.start(h);
        }), this.DS.subscribe("Interaction:end", function(i) {
          var h = i.event;
          return e.reset(h);
        });
      }
      return m(c, [{
        key: "start",
        value: (
          /** @param {DSEvent} [event] */
          function(e) {
            e && (this._isMouseInteraction = !0, this.currentVal = this.initialVal = this.getPointerPosition(e));
          }
        )
        /** @param {DSEvent} event */
      }, {
        key: "_normalizedEvent",
        value: (
          /**
           * @param {DSEvent} event
           * @return {MouseEvent|PointerEvent|Touch}
           * @private
           */
          function(e) {
            return "touches" in e && e.type !== "touchend" && (this._lastTouch = e), "touches" in e ? this._lastTouch.touches[0] : e;
          }
        )
        /** First recorded pointer position within the area */
      }, {
        key: "initialValArea",
        get: function() {
          return this._initialValArea ? this._initialValArea : {
            x: 0,
            y: 0
          };
        }
        /** Current pointer position within the area */
      }, {
        key: "currentValArea",
        get: function() {
          return this._currentValArea ? this._currentValArea : {
            x: 0,
            y: 0
          };
        }
        /** Last recorded pointer position within the area */
      }, {
        key: "lastValArea",
        get: function() {
          return this._lastValArea ? this._lastValArea : {
            x: 0,
            y: 0
          };
        }
        /** First recorded pointer position */
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        },
        set: function(e) {
          this._initialVal = e, this._initialValArea = e && O(e, "-", O(tt(this.DS.Area.rect), "+", tt(this.DS.Area.computedBorder)));
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal ? this._currentVal : {
            x: 0,
            y: 0
          };
        },
        set: function(e) {
          this._currentVal = e, this._currentValArea = e && O(e, "-", O(tt(this.DS.Area.rect), "+", tt(this.DS.Area.computedBorder)));
        }
      }, {
        key: "lastVal",
        get: function() {
          return this._lastVal ? this._lastVal : {
            x: 0,
            y: 0
          };
        },
        set: function(e) {
          this._lastVal = e, this._lastValArea = e && O(e, "-", O(tt(this.DS.Area.rect), "+", tt(this.DS.Area.computedBorder)));
        }
      }]), c;
    }(), Mo = /* @__PURE__ */ function() {
      function c(d) {
        var e = this, g = d.DS;
        a(this, c), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_canScroll", void 0), l(this, "init", function() {
          return e.DS.stores.SettingsStore.s.area.addEventListener("scroll", e.update);
        }), l(this, "start", function() {
          e._currentVal = e._initialVal = Ce(e.DS.stores.SettingsStore.s.area), e.DS.stores.SettingsStore.s.area.addEventListener("scroll", e.update);
        }), l(this, "update", function() {
          return e._currentVal = Ce(e.DS.stores.SettingsStore.s.area);
        }), l(this, "stop", function() {
          e.DS.stores.SettingsStore.s.area.removeEventListener("scroll", e.update), e._initialVal = {
            x: 0,
            y: 0
          }, e._canScroll = null;
        }), l(this, "reset", function() {
          e.stop(), e.start();
        }), this.DS = g, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function() {
          return e.start();
        }), this.DS.subscribe("Interaction:end", function() {
          return e.reset();
        });
      }
      return m(c, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = xe(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var e = O(this.currentVal, "-", this.initialVal), g = wt(this.DS.stores.SettingsStore.s.zoom), i = O(O(e, "*", g), "-", e);
          return {
            x: e.x + i.x,
            y: e.y + i.y
          };
        }
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal || (this._currentVal = Ce(this.DS.stores.SettingsStore.s.area)), this._currentVal;
        }
      }]), c;
    }(), To = /* @__PURE__ */ m(
      /**
       * @type {Settings}
       * @private
       * */
      /**
       * Holds the settings and their previous value `:pre`
       * @example {
       *    autoScrollSpeed: 3,
       *    'autoScrollSpeed:pre': 5
       * }
       * @type {Settings}
       * */
      /**
       * @class ScrollStore
       * @constructor ScrollStore
       * @param {{ DS:DragSelect, settings:Settings }} p
       * @ignore
       */
      function c(d) {
        var e = this, g = d.DS, i = d.settings;
        a(this, c), l(this, "_settings", {}), l(this, "s", {}), l(this, "update", function(h) {
          var y = h.settings, _ = h.init;
          return e.DS.publish("Settings:updated:pre", n({
            settings: y
          }, _ ? {
            init: _
          } : {}));
        }), l(this, "_update", function(h) {
          for (var y = h.settings, _ = h.init, D = uo(y, _), B = function() {
            var xt, Mt = X(nt[W], 2), it = Mt[0], mt = Mt[1];
            it in e._settings || Object.defineProperty(e.s, it, {
              get: function() {
                return e._settings[it];
              },
              set: function(de) {
                return e.update({
                  settings: l({}, it, de)
                });
              }
            }), e._settings["".concat(it, ":pre")] = e._settings[it], e._settings[it] = mt;
            var ce = {
              settings: (xt = {}, l(xt, it, e._settings[it]), l(xt, "".concat(it, ":pre"), e._settings["".concat(it, ":pre")]), xt)
            };
            e.DS.publish("Settings:updated", ce), e.DS.publish("Settings:updated:".concat(it), ce);
          }, W = 0, nt = Object.entries(D); W < nt.length; W++)
            B();
        }), this.DS = g, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
          settings: i,
          init: !0
        });
      }
      /** @param {{settings: Settings, init?: boolean}} props */
    ), Pr = /* @__PURE__ */ function() {
      function c(d) {
        var e = this;
        a(this, c), l(this, "continue", !1), l(this, "start", function() {
          e.stopped = !1, e.Interaction.init();
        }), l(this, "break", function() {
          return e.continue = !0;
        }), l(this, "setSettings", function(g) {
          return e.stores.SettingsStore.update({
            settings: g
          });
        }), l(this, "getSelection", function() {
          return e.SelectedSet.elements;
        }), l(this, "getSelectables", function() {
          return e.SelectableSet.elements;
        }), l(this, "getInitialCursorPosition", function() {
          return e.stores.PointerStore.initialVal;
        }), l(this, "getCurrentCursorPosition", function() {
          return e.stores.PointerStore.currentVal;
        }), l(this, "getPreviousCursorPosition", function() {
          return e.stores.PointerStore.lastVal;
        }), l(this, "getInitialCursorPositionArea", function() {
          return e.stores.PointerStore.initialValArea;
        }), l(this, "getCurrentCursorPositionArea", function() {
          return e.stores.PointerStore.currentValArea;
        }), l(this, "getPreviousCursorPositionArea", function() {
          return e.stores.PointerStore.lastValArea;
        }), l(this, "isMultiSelect", function(g) {
          return e.stores.KeyStore.isMultiSelectKeyPressed(g);
        }), l(this, "isDragging", function() {
          return e.Interaction.isDragging;
        }), l(this, "getZoneByCoordinates", function(g) {
          var i;
          return (i = e.DropZones.getTarget(g)) === null || i === void 0 ? void 0 : i.toObject();
        }), l(this, "getItemsDroppedByZoneId", function(g) {
          return e.DropZones.getItemsDroppedById(g);
        }), l(this, "getItemsInsideByZoneId", function(g, i) {
          return e.DropZones.getItemsInsideById(g, i);
        }), this.PubSub = new So({
          DS: this
        }), this.subscribe = this.PubSub.subscribe, this.unsubscribe = this.PubSub.unsubscribe, this.publish = this.PubSub.publish, this.stores = /** @type {{ SettingsStore:SettingsStore, PointerStore:PointerStore, ScrollStore:ScrollStore, KeyStore:KeyStore }} */
        {}, this.stores.SettingsStore = new To({
          DS: this,
          settings: d
        }), this.stores.PointerStore = new Eo({
          DS: this
        }), this.stores.ScrollStore = new Mo({
          DS: this
        }), this.stores.KeyStore = new Co({
          DS: this
        }), this.Area = new go({
          DS: this
        }), this.Selector = new ko({
          DS: this
        }), this.SelectorArea = new Do({
          DS: this
        }), this.SelectableSet = new wo({
          DS: this
        }), this.SelectedSet = new _o({
          DS: this
        }), this.Selection = new xo({
          DS: this
        }), this.Drag = new mo({
          DS: this
        }), this.DropZones = new bo({
          DS: this
        }), this.Interaction = new yo({
          DS: this
        }), po({
          subscribe: this.subscribe,
          publish: this.publish,
          SelectedSet: this.SelectedSet,
          Interaction: this.Interaction,
          DropZones: this.DropZones
        }), this.subscribe("Interaction:end", function() {
          return e.continue = !1;
        }), this.start();
      }
      return m(c, [{
        key: "stop",
        value: (
          /**
           * Complete function teardown
           * Will teardown/stop the whole functionality
           * @param {boolean} [remove] - if elements should be removed.
           * @param {boolean} [fromSelection] - if elements should also be added/removed to the selection.
           * @param {boolean} [withCallback] - if elements should also be added/removed to the selection.
           */
          function() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            i && this.publish("callback", {
              items: this.getSelection()
            }), this.Interaction.stop(), this.Area.stop(), this.Drag.stop(), this.Selector.stop(), this.SelectorArea.stop(e), this.stores.KeyStore.stop(), this.stores.PointerStore.stop(), this.stores.ScrollStore.stop(), e && this.SelectableSet.clear(), g && this.SelectedSet.clear(), this.stopped = !0;
          }
        )
        /**
         * Utility to override DragSelect internal functionality:
         * Break will skip the selection or dragging functionality (until after the callback) but let everything continue to run.
         * Useful utility to write your own functionality/move/dragNdrop based on DragSelect pointer positions.
         */
      }, {
        key: "addSelection",
        value: (
          /**
           * Adds several elements to the selection list also adds the specific classes and take into account all calculations.
           * Does not clear the selection, in contrary to .setSelection. Can add multiple elements at once
           * @param {DSInputElements} elements one or multiple elements
           * @param {boolean} [triggerCallback] - if callback should be called
           * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable elements
           * @return {DSElements} all selected elements
           */
          function(e) {
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return this.SelectedSet.addAll(Nt(e)), i || this.addSelectables(e), g && this.PubSub.publish("callback", {
              items: this.getSelection()
            }), this.getSelection();
          }
        )
        /**
         * Removes specific elements from the selection
         * Multiple elements can be given at once, in contrary to unselect
         * @param {DSInputElements} elements one or multiple elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [removeFromSelectables] - if element should be removed from the list of selectable elements
         * @return {DSElements} all selected elements
         */
      }, {
        key: "removeSelection",
        value: function(e) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Nt(e)), i && this.removeSelectables(e), g && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Toggles specific elements from the selection:
         * If element is not in selection it will be added, if it is already selected, it will be removed.
         * Multiple elements can be given at once.
         * @param {DSInputElements} elements one or multiple elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [removeFromSelectables] - if element should not be added/removed to the list of selectable elements accordingly
         * @return {DSElements} all selected elements
         */
      }, {
        key: "toggleSelection",
        value: function(e) {
          var g = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Nt(e).forEach(function(y) {
            return g.SelectedSet.has(y) ? g.removeSelection(e, i, h) : g.addSelection(e, i, h);
          }), i && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Sets the current selected elements and optionally run the callback
         * By default, adds new elements also to the list of selectables
         * @param {DSInputElements} elements – dom elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable elements
         * @return {DSElements}
         */
      }, {
        key: "setSelection",
        value: function(e) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(e, g, i), this.getSelection();
        }
        /**
         * Unselect / Deselect all current selected Nodes
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSElements} this.selected, should be empty
         */
      }, {
        key: "clearSelection",
        value: function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          return this.SelectedSet.clear(), e && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Add elements that can be selected. No node is added twice
         * @param {DSInputElements} elements dom element(s)
         * @param {boolean} [addToSelection] if elements should also be added to current selection
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSInputElements} the added element(s)
         */
      }, {
        key: "addSelectables",
        value: function(e, g, i) {
          var h = Nt(e);
          return this.SelectableSet.addAll(h), g && this.SelectedSet.addAll(h), i && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), e;
        }
        /**
         * Gets all nodes that can potentially be selected
         * @return {DSElements} this.selectables
         */
      }, {
        key: "setSelectables",
        value: (
          /**
           * Sets all elements that can be selected.
           * Removes all current selectables (& their respective classes).
           * Adds the new set to the selectables set, thus replacing the original set.
           * @param {DSInputElements} elements – dom element(s)
           * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
           * @param {boolean} [addToSelection] if elements should also be added to current selection
           * @return {DSInputElements} elements – the added element(s)
           */
          function(e) {
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(e, g), this.addSelectables(e, i);
          }
        )
        /**
         * Remove elements from the elements that can be selected.
         * @param {DSInputElements} elements – dom element(s)
         * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSInputElements} the removed element(s)
         */
      }, {
        key: "removeSelectables",
        value: function(e, g, i) {
          return this.SelectableSet.deleteAll(Nt(e)), g && this.removeSelection(e), i && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), e;
        }
        /** The starting/initial position of the cursor/selector @return {Vect2} */
      }]), c;
    }();
    return Pr.isCollision = Gt, Pr;
  });
})(ls);
var Ci = ls.exports;
const Ei = /* @__PURE__ */ Di(Ci), cs = (r, t, s, o, n) => (t = Math, s = t.log, o = 1024, n = s(r) / s(o) | 0, r / t.pow(o, n)).toFixed(0) + " " + (n ? "KMGTPEZY"[--n] + "iB" : "B"), ds = (r, t = null) => new Date(r * 1e3).toLocaleString(t ?? navigator.language ?? "en-US"), Mi = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Ti = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), $i = [
  Ti
], Ii = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Ai = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), Li = [
  Ai
], Oi = {
  name: "VFSortIcon"
}, $e = /* @__PURE__ */ Object.assign(Oi, {
  props: { direction: String },
  setup(r) {
    return (t, s) => (w(), C("div", null, [
      r.direction == "down" ? (w(), C("svg", Mi, $i)) : Z("", !0),
      r.direction == "up" ? (w(), C("svg", Ii, Li)) : Z("", !0)
    ]));
  }
}), Pi = ["onClick"], Ni = {
  name: "VFToast.vue"
}, ji = /* @__PURE__ */ Object.assign(Ni, {
  setup(r) {
    const t = P("emitter"), { getStore: s } = P("storage"), o = L(s("full-screen", !1)), n = (l) => l == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", a = L([]), u = (l) => {
      a.value.splice(l, 1);
    }, m = (l) => {
      let v = a.value.findIndex((f) => f.id === l);
      v !== -1 && u(v);
    };
    return t.on("vf-toast-clear", () => {
      a.value = [];
    }), t.on("vf-toast-push", (l) => {
      let v = (/* @__PURE__ */ new Date()).getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      l.id = v, a.value.push(l), setTimeout(() => {
        m(v);
      }, 5e3);
    }), (l, v) => (w(), C("div", {
      class: ct([o.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Dt(Ao, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: F(() => [
          (w(!0), C(lt, null, St(a.value, (f, b) => (w(), C("div", {
            onClick: (S) => u(b),
            key: f,
            class: ct([n(f.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-base sm:text-sm rounded cursor-pointer"])
          }, E(f.label), 11, Pi))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Ft = (r) => Object.entries(r).map((t) => t.map(encodeURIComponent).join("=")).join("&"), { apiUrl: Ri } = At(), tr = (r, t) => Ri.value + "?" + Ft({ q: "preview", adapter: r, path: t }), zt = typeof window < "u", us = zt && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), hs = zt && "IntersectionObserver" in window, fs = zt && "classList" in document.createElement("p"), ps = zt && window.devicePixelRatio > 1, Vi = {
  elements_selector: ".lazy",
  container: us || zt ? document : null,
  threshold: 300,
  thresholds: null,
  data_src: "src",
  data_srcset: "srcset",
  data_sizes: "sizes",
  data_bg: "bg",
  data_bg_hidpi: "bg-hidpi",
  data_bg_multi: "bg-multi",
  data_bg_multi_hidpi: "bg-multi-hidpi",
  data_bg_set: "bg-set",
  data_poster: "poster",
  class_applied: "applied",
  class_loading: "loading",
  class_loaded: "loaded",
  class_error: "error",
  class_entered: "entered",
  class_exited: "exited",
  unobserve_completed: !0,
  unobserve_entered: !1,
  cancel_on_exit: !0,
  callback_enter: null,
  callback_exit: null,
  callback_applied: null,
  callback_loading: null,
  callback_loaded: null,
  callback_error: null,
  callback_finish: null,
  callback_cancel: null,
  use_native: !1,
  restore_on_error: !1
}, gs = (r) => Object.assign({}, Vi, r), Rr = function(r, t) {
  let s;
  const o = "LazyLoad::Initialized", n = new r(t);
  try {
    s = new CustomEvent(o, { detail: { instance: n } });
  } catch {
    s = document.createEvent("CustomEvent"), s.initCustomEvent(o, !1, !1, { instance: n });
  }
  window.dispatchEvent(s);
}, Bi = (r, t) => {
  if (t)
    if (!t.length)
      Rr(r, t);
    else
      for (let s = 0, o; o = t[s]; s += 1)
        Rr(r, o);
}, Pt = "src", hr = "srcset", fr = "sizes", ms = "poster", Se = "llOriginalAttrs", vs = "data", pr = "loading", bs = "loaded", ys = "applied", zi = "entered", gr = "error", Ss = "native", ws = "data-", _s = "ll-status", ft = (r, t) => r.getAttribute(ws + t), Hi = (r, t, s) => {
  var o = ws + t;
  if (s === null) {
    r.removeAttribute(o);
    return;
  }
  r.setAttribute(o, s);
}, we = (r) => ft(r, _s), qt = (r, t) => Hi(r, _s, t), Be = (r) => qt(r, null), mr = (r) => we(r) === null, Ui = (r) => we(r) === pr, Ki = (r) => we(r) === gr, vr = (r) => we(r) === Ss, Yi = [pr, bs, ys, gr], Wi = (r) => Yi.indexOf(we(r)) >= 0, Ht = (r, t, s, o) => {
  if (r) {
    if (o !== void 0) {
      r(t, s, o);
      return;
    }
    if (s !== void 0) {
      r(t, s);
      return;
    }
    r(t);
  }
}, ne = (r, t) => {
  if (fs) {
    r.classList.add(t);
    return;
  }
  r.className += (r.className ? " " : "") + t;
}, Tt = (r, t) => {
  if (fs) {
    r.classList.remove(t);
    return;
  }
  r.className = r.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, Xi = (r) => {
  r.llTempImage = document.createElement("IMG");
}, Zi = (r) => {
  delete r.llTempImage;
}, xs = (r) => r.llTempImage, ze = (r, t) => {
  if (!t)
    return;
  const s = t._observer;
  s && s.unobserve(r);
}, Fi = (r) => {
  r.disconnect();
}, qi = (r, t, s) => {
  t.unobserve_entered && ze(r, s);
}, br = (r, t) => {
  r && (r.loadingCount += t);
}, Gi = (r) => {
  r && (r.toLoadCount -= 1);
}, ks = (r, t) => {
  r && (r.toLoadCount = t);
}, Ji = (r) => r.loadingCount > 0, Qi = (r) => r.toLoadCount > 0, Ds = (r) => {
  let t = [];
  for (let s = 0, o; o = r.children[s]; s += 1)
    o.tagName === "SOURCE" && t.push(o);
  return t;
}, yr = (r, t) => {
  const s = r.parentNode;
  if (!s || s.tagName !== "PICTURE")
    return;
  Ds(s).forEach(t);
}, Cs = (r, t) => {
  Ds(r).forEach(t);
}, He = [Pt], Es = [Pt, ms], ve = [Pt, hr, fr], Ms = [vs], Ue = (r) => !!r[Se], Ts = (r) => r[Se], $s = (r) => delete r[Se], se = (r, t) => {
  if (Ue(r))
    return;
  const s = {};
  t.forEach((o) => {
    s[o] = r.getAttribute(o);
  }), r[Se] = s;
}, tn = (r) => {
  Ue(r) || (r[Se] = { backgroundImage: r.style.backgroundImage });
}, en = (r, t, s) => {
  if (!s) {
    r.removeAttribute(t);
    return;
  }
  r.setAttribute(t, s);
}, Xt = (r, t) => {
  if (!Ue(r))
    return;
  const s = Ts(r);
  t.forEach((o) => {
    en(r, o, s[o]);
  });
}, rn = (r) => {
  if (!Ue(r))
    return;
  const t = Ts(r);
  r.style.backgroundImage = t.backgroundImage;
}, Is = (r, t, s) => {
  ne(r, t.class_applied), qt(r, ys), s && (t.unobserve_completed && ze(r, t), Ht(t.callback_applied, r, s));
}, As = (r, t, s) => {
  ne(r, t.class_loading), qt(r, pr), s && (br(s, 1), Ht(t.callback_loading, r, s));
}, Bt = (r, t, s) => {
  s && r.setAttribute(t, s);
}, Vr = (r, t) => {
  Bt(r, fr, ft(r, t.data_sizes)), Bt(r, hr, ft(r, t.data_srcset)), Bt(r, Pt, ft(r, t.data_src));
}, sn = (r, t) => {
  yr(r, (s) => {
    se(s, ve), Vr(s, t);
  }), se(r, ve), Vr(r, t);
}, on = (r, t) => {
  se(r, He), Bt(r, Pt, ft(r, t.data_src));
}, nn = (r, t) => {
  Cs(r, (s) => {
    se(s, He), Bt(s, Pt, ft(s, t.data_src));
  }), se(r, Es), Bt(r, ms, ft(r, t.data_poster)), Bt(r, Pt, ft(r, t.data_src)), r.load();
}, an = (r, t) => {
  se(r, Ms), Bt(r, vs, ft(r, t.data_src));
}, ln = (r, t, s) => {
  const o = ft(r, t.data_bg), n = ft(r, t.data_bg_hidpi), a = ps && n ? n : o;
  a && (r.style.backgroundImage = `url("${a}")`, xs(r).setAttribute(Pt, a), As(r, t, s));
}, cn = (r, t, s) => {
  const o = ft(r, t.data_bg_multi), n = ft(r, t.data_bg_multi_hidpi), a = ps && n ? n : o;
  a && (r.style.backgroundImage = a, Is(r, t, s));
}, dn = (r, t, s) => {
  const o = ft(r, t.data_bg_set);
  if (!o)
    return;
  const n = o.split("|");
  let a = n.map((u) => `image-set(${u})`);
  r.style.backgroundImage = a.join(), r.style.backgroundImage === "" && (a = n.map((u) => `-webkit-image-set(${u})`), r.style.backgroundImage = a.join()), Is(r, t, s);
}, Ls = {
  IMG: sn,
  IFRAME: on,
  VIDEO: nn,
  OBJECT: an
}, un = (r, t) => {
  const s = Ls[r.tagName];
  s && s(r, t);
}, hn = (r, t, s) => {
  const o = Ls[r.tagName];
  o && (o(r, t), As(r, t, s));
}, fn = ["IMG", "IFRAME", "VIDEO", "OBJECT"], pn = (r) => fn.indexOf(r.tagName) > -1, Os = (r, t) => {
  t && !Ji(t) && !Qi(t) && Ht(r.callback_finish, t);
}, Br = (r, t, s) => {
  r.addEventListener(t, s), r.llEvLisnrs[t] = s;
}, gn = (r, t, s) => {
  r.removeEventListener(t, s);
}, Sr = (r) => !!r.llEvLisnrs, mn = (r, t, s) => {
  Sr(r) || (r.llEvLisnrs = {});
  const o = r.tagName === "VIDEO" ? "loadeddata" : "load";
  Br(r, o, t), Br(r, "error", s);
}, er = (r) => {
  if (!Sr(r))
    return;
  const t = r.llEvLisnrs;
  for (let s in t) {
    const o = t[s];
    gn(r, s, o);
  }
  delete r.llEvLisnrs;
}, Ps = (r, t, s) => {
  Zi(r), br(s, -1), Gi(s), Tt(r, t.class_loading), t.unobserve_completed && ze(r, s);
}, vn = (r, t, s, o) => {
  const n = vr(t);
  Ps(t, s, o), ne(t, s.class_loaded), qt(t, bs), Ht(s.callback_loaded, t, o), n || Os(s, o);
}, bn = (r, t, s, o) => {
  const n = vr(t);
  Ps(t, s, o), ne(t, s.class_error), qt(t, gr), Ht(s.callback_error, t, o), s.restore_on_error && Xt(t, ve), n || Os(s, o);
}, wr = (r, t, s) => {
  const o = xs(r) || r;
  if (Sr(o))
    return;
  mn(o, (u) => {
    vn(u, r, t, s), er(o);
  }, (u) => {
    bn(u, r, t, s), er(o);
  });
}, yn = (r, t, s) => {
  Xi(r), wr(r, t, s), tn(r), ln(r, t, s), cn(r, t, s), dn(r, t, s);
}, Sn = (r, t, s) => {
  wr(r, t, s), hn(r, t, s);
}, _r = (r, t, s) => {
  pn(r) ? Sn(r, t, s) : yn(r, t, s);
}, wn = (r, t, s) => {
  r.setAttribute("loading", "lazy"), wr(r, t, s), un(r, t), qt(r, Ss);
}, zr = (r) => {
  r.removeAttribute(Pt), r.removeAttribute(hr), r.removeAttribute(fr);
}, _n = (r) => {
  yr(r, (t) => {
    zr(t);
  }), zr(r);
}, Ns = (r) => {
  yr(r, (t) => {
    Xt(t, ve);
  }), Xt(r, ve);
}, xn = (r) => {
  Cs(r, (t) => {
    Xt(t, He);
  }), Xt(r, Es), r.load();
}, kn = (r) => {
  Xt(r, He);
}, Dn = (r) => {
  Xt(r, Ms);
}, Cn = {
  IMG: Ns,
  IFRAME: kn,
  VIDEO: xn,
  OBJECT: Dn
}, En = (r) => {
  const t = Cn[r.tagName];
  if (!t) {
    rn(r);
    return;
  }
  t(r);
}, Mn = (r, t) => {
  mr(r) || vr(r) || (Tt(r, t.class_entered), Tt(r, t.class_exited), Tt(r, t.class_applied), Tt(r, t.class_loading), Tt(r, t.class_loaded), Tt(r, t.class_error));
}, Tn = (r, t) => {
  En(r), Mn(r, t), Be(r), $s(r);
}, $n = (r, t, s, o) => {
  s.cancel_on_exit && Ui(r) && r.tagName === "IMG" && (er(r), _n(r), Ns(r), Tt(r, s.class_loading), br(o, -1), Be(r), Ht(s.callback_cancel, r, t, o));
}, In = (r, t, s, o) => {
  const n = Wi(r);
  qt(r, zi), ne(r, s.class_entered), Tt(r, s.class_exited), qi(r, s, o), Ht(s.callback_enter, r, t, o), !n && _r(r, s, o);
}, An = (r, t, s, o) => {
  mr(r) || (ne(r, s.class_exited), $n(r, t, s, o), Ht(s.callback_exit, r, t, o));
}, Ln = ["IMG", "IFRAME", "VIDEO"], js = (r) => r.use_native && "loading" in HTMLImageElement.prototype, On = (r, t, s) => {
  r.forEach((o) => {
    Ln.indexOf(o.tagName) !== -1 && wn(o, t, s);
  }), ks(s, 0);
}, Pn = (r) => r.isIntersecting || r.intersectionRatio > 0, Nn = (r) => ({
  root: r.container === document ? null : r.container,
  rootMargin: r.thresholds || r.threshold + "px"
}), jn = (r, t, s) => {
  r.forEach(
    (o) => Pn(o) ? In(o.target, o, t, s) : An(o.target, o, t, s)
  );
}, Rn = (r, t) => {
  t.forEach((s) => {
    r.observe(s);
  });
}, Vn = (r, t) => {
  Fi(r), Rn(r, t);
}, Bn = (r, t) => {
  !hs || js(r) || (t._observer = new IntersectionObserver((s) => {
    jn(s, r, t);
  }, Nn(r)));
}, Rs = (r) => Array.prototype.slice.call(r), Ne = (r) => r.container.querySelectorAll(r.elements_selector), zn = (r) => Rs(r).filter(mr), Hn = (r) => Ki(r), Un = (r) => Rs(r).filter(Hn), Hr = (r, t) => zn(r || Ne(t)), Kn = (r, t) => {
  Un(Ne(r)).forEach((o) => {
    Tt(o, r.class_error), Be(o);
  }), t.update();
}, Yn = (r, t) => {
  zt && (t._onlineHandler = () => {
    Kn(r, t);
  }, window.addEventListener("online", t._onlineHandler));
}, Wn = (r) => {
  zt && window.removeEventListener("online", r._onlineHandler);
}, _e = function(r, t) {
  const s = gs(r);
  this._settings = s, this.loadingCount = 0, Bn(s, this), Yn(s, this), this.update(t);
};
_e.prototype = {
  update: function(r) {
    const t = this._settings, s = Hr(r, t);
    if (ks(this, s.length), us || !hs) {
      this.loadAll(s);
      return;
    }
    if (js(t)) {
      On(s, t, this);
      return;
    }
    Vn(this._observer, s);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), Wn(this), Ne(this._settings).forEach((r) => {
      $s(r);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(r) {
    const t = this._settings;
    Hr(r, t).forEach((o) => {
      ze(o, this), _r(o, t, this);
    });
  },
  restoreAll: function() {
    const r = this._settings;
    Ne(r).forEach((t) => {
      Tn(t, r);
    });
  }
};
_e.load = (r, t) => {
  const s = gs(t);
  _r(r, s);
};
_e.resetStatus = (r) => {
  Be(r);
};
zt && Bi(_e, window.lazyLoadOptions);
const Xn = { class: "relative flex-auto flex flex-col overflow-hidden" }, Zn = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-base select-none"
}, Fn = { class: "absolute" }, qn = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "absolute h-6 w-6 md:h-12 md:w-12 m-auto stroke-neutral-500 fill-white dark:fill-gray-700 dark:stroke-gray-600 z-10",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  })
], -1), Gn = { class: "text-neutral-700 dark:text-neutral-300 p-1 absolute text-center top-4 right-[-2rem] md:top-5 md:right-[-2.4rem] z-20 text-base" }, Jn = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], Qn = { class: "grid grid-cols-12 items-center" }, ta = { class: "flex col-span-7 items-center" }, ea = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-indigo-200 stroke-indigo-200 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ra = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), sa = [
  ra
], oa = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ia = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), na = [
  ia
], aa = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, la = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, ca = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], da = { class: "grid grid-cols-12 items-center" }, ua = { class: "flex col-span-7 items-center" }, ha = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-indigo-200 stroke-indigo-200 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, fa = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), pa = [
  fa
], ga = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ma = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), va = [
  ma
], ba = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, ya = { class: "col-span-2 text-center" }, Sa = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, wa = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], _a = { class: "relative" }, xa = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto fill-indigo-200 stroke-indigo-200 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ka = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Da = [
  ka
], Ca = ["data-src", "alt"], Ea = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ma = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Ta = [
  Ma
], $a = {
  key: 3,
  class: "absolute hidden md:block top-1/3 w-full text-center text-neutral-500 text-sm"
}, Ia = { class: "break-all" }, Aa = {
  name: "VFExplorer"
}, La = /* @__PURE__ */ Object.assign(Aa, {
  props: {
    view: String,
    data: Object,
    search: Object
  },
  setup(r) {
    const t = r, s = P("emitter"), { setStore: o, getStore: n } = P("storage"), a = P("adapter"), u = (A) => A == null ? void 0 : A.substring(0, 3), m = (A) => A.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), l = L(null), v = L(null), f = L(0), b = L(null), { t: S } = P("i18n"), $ = Math.floor(Math.random() * 2 ** 32), M = L(n("full-screen", !1)), I = new _e();
    s.on("vf-fullscreen-toggle", () => {
      l.value.style.height = null, M.value = !M.value, o("full-screen", M.value);
    });
    const T = L("");
    s.on("vf-search-query", ({ newQuery: A }) => {
      T.value = A, A ? s.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: t.data.adapter,
          path: t.data.dirname,
          filter: A
        },
        onSuccess: (R) => {
          R.files.length || s.emit("vf-toast-push", { label: S("No search result found.") });
        }
      }) : s.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: t.data.dirname } });
    });
    let H = null;
    const V = () => {
      H && clearTimeout(H);
    }, j = L(!0), z = (A) => {
      A.touches.length > 1 && (j.value ? (b.value.stop(), s.emit("vf-toast-push", { label: S("Drag&Drop: off") })) : (b.value.start(), s.emit("vf-toast-push", { label: S("Drag&Drop: on") }), s.emit("vf-explorer-update")), j.value = !j.value);
    }, X = (A) => {
      H = setTimeout(() => {
        const R = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: A.target.getBoundingClientRect().x,
          clientY: A.target.getBoundingClientRect().y
        });
        A.target.dispatchEvent(R);
      }, 500);
    }, k = (A) => {
      A.type == "dir" ? (s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: A.path } })) : s.emit("vf-modal-show", { type: "preview", adapter: t.data.adapter, item: A });
    }, N = Le({ active: !1, column: "", order: "" }), G = (A = !0) => {
      let R = [...t.data.files], O = N.column, tt = N.order == "asc" ? 1 : -1;
      if (!A)
        return R;
      const U = (wt, bt) => typeof wt == "string" && typeof bt == "string" ? wt.toLowerCase().localeCompare(bt.toLowerCase()) : wt < bt ? -1 : wt > bt ? 1 : 0;
      return N.active && (R = R.slice().sort((wt, bt) => U(wt[O], bt[O]) * tt)), R;
    }, ot = (A) => {
      N.active && N.column == A ? (N.active = N.order == "asc", N.column = A, N.order = "desc") : (N.active = !0, N.column = A, N.order = "asc");
    }, et = () => b.value.getSelection().map((A) => JSON.parse(A.dataset.item)), dt = (A, R) => {
      if (A.altKey || A.ctrlKey || A.metaKey)
        return A.preventDefault(), !1;
      A.dataTransfer.setDragImage(v.value, 0, 15), A.dataTransfer.effectAllowed = "all", A.dataTransfer.dropEffect = "copy", A.dataTransfer.setData("items", JSON.stringify(et()));
    }, vt = (A, R) => {
      A.preventDefault();
      let O = JSON.parse(A.dataTransfer.getData("items"));
      if (O.find((tt) => tt.storage != a.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", { type: "move", items: { from: O, to: R } });
    }, pt = (A, R) => {
      A.preventDefault(), !R || R.type !== "dir" || b.value.getSelection().find((O) => O == A.currentTarget) ? (A.dataTransfer.dropEffect = "none", A.dataTransfer.effectAllowed = "none") : A.dataTransfer.dropEffect = "copy";
    };
    return Et(() => {
      b.value = new Ei({
        area: l.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), s.on("vf-explorer-update", () => Ve(() => {
        b.value.clearSelection(), b.value.setSelectables(document.getElementsByClassName("vf-item-" + $));
      })), b.value.subscribe("predragstart", ({ event: A, isDragging: R }) => {
        if (R)
          f.value = b.value.getSelection().length, b.value.break();
        else {
          const O = A.target.offsetWidth - A.offsetX, tt = A.target.offsetHeight - A.offsetY;
          O < 15 && tt < 15 && (b.value.clearSelection(), b.value.break());
        }
      }), b.value.subscribe("predragmove", ({ isDragging: A }) => {
        A && b.value.break();
      }), b.value.subscribe("callback", ({ items: A, event: R, isDragging: O }) => {
        s.emit("vf-nodes-selected", et()), f.value = b.value.getSelection().length;
      });
    }), Lo(() => {
      b.value.Area.reset(), b.value.SelectorArea.updatePos(), I.update();
    }), Et(() => {
      Re(() => t.view, () => s.emit("vf-explorer-update"));
    }), (A, R) => (w(), C("div", Xn, [
      r.view == "list" || T.value.length ? (w(), C("div", Zn, [
        p("div", {
          onClick: R[0] || (R[0] = (O) => ot("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          st(E(x(S)("Name")) + " ", 1),
          Ct(Dt($e, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Te, N.active && N.column == "basename"]
          ])
        ]),
        T.value.length ? Z("", !0) : (w(), C("div", {
          key: 0,
          onClick: R[1] || (R[1] = (O) => ot("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          st(E(x(S)("Size")) + " ", 1),
          Ct(Dt($e, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Te, N.active && N.column == "file_size"]
          ])
        ])),
        T.value.length ? Z("", !0) : (w(), C("div", {
          key: 1,
          onClick: R[2] || (R[2] = (O) => ot("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          st(E(x(S)("Date")) + " ", 1),
          Ct(Dt($e, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Te, N.active && N.column == "last_modified"]
          ])
        ])),
        T.value.length ? (w(), C("div", {
          key: 2,
          onClick: R[3] || (R[3] = (O) => ot("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          st(E(x(S)("Filepath")) + " ", 1),
          Ct(Dt($e, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Te, N.active && N.column == "path"]
          ])
        ])) : Z("", !0)
      ])) : Z("", !0),
      p("div", Fn, [
        p("div", {
          ref_key: "dragImage",
          ref: v,
          class: "absolute -z-50 -top-96"
        }, [
          qn,
          p("div", Gn, E(f.value), 1)
        ], 512)
      ]),
      p("div", {
        onTouchstart: z,
        onContextmenu: R[10] || (R[10] = Wt((O) => x(s).emit("vf-contextmenu-show", { event: O, area: l.value, items: et() }), ["self", "prevent"])),
        class: ct([M.value ? "" : "resize-y", "h-full w-full text-base vf-selector-area min-h-[150px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: l
      }, [
        T.value.length ? (w(!0), C(lt, { key: 0 }, St(G(), (O, tt) => (w(), C("div", {
          onDblclick: (U) => k(O),
          onTouchstart: R[4] || (R[4] = (U) => X(U)),
          onTouchend: R[5] || (R[5] = (U) => V()),
          onContextmenu: Wt((U) => x(s).emit("vf-contextmenu-show", { event: U, area: l.value, items: et(), target: O }), ["prevent"]),
          class: ct(["vf-item-" + x($), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": tt
        }, [
          p("div", Qn, [
            p("div", ta, [
              O.type == "dir" ? (w(), C("svg", ea, sa)) : (w(), C("svg", oa, na)),
              p("span", aa, E(O.basename), 1)
            ]),
            p("div", la, E(O.path), 1)
          ])
        ], 42, Jn))), 256)) : Z("", !0),
        r.view == "list" && !T.value.length ? (w(!0), C(lt, { key: 1 }, St(G(), (O, tt) => (w(), C("div", {
          draggable: "true",
          onDblclick: (U) => k(O),
          onTouchstart: R[6] || (R[6] = (U) => X(U)),
          onTouchend: R[7] || (R[7] = (U) => V()),
          onContextmenu: Wt((U) => x(s).emit("vf-contextmenu-show", { event: U, area: l.value, items: et(), target: O }), ["prevent"]),
          onDragstart: (U) => dt(U),
          onDragover: (U) => pt(U, O),
          onDrop: (U) => vt(U, O),
          class: ct(["vf-item-" + x($), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": tt
        }, [
          p("div", da, [
            p("div", ua, [
              O.type == "dir" ? (w(), C("svg", ha, pa)) : (w(), C("svg", ga, va)),
              p("span", ba, E(O.basename), 1)
            ]),
            p("div", ya, E(O.file_size ? x(cs)(O.file_size) : ""), 1),
            p("div", Sa, E(x(ds)(O.last_modified)), 1)
          ])
        ], 42, ca))), 256)) : Z("", !0),
        r.view == "grid" && !T.value.length ? (w(!0), C(lt, { key: 2 }, St(G(!1), (O, tt) => (w(), C("div", {
          draggable: "true",
          onDblclick: (U) => k(O),
          onTouchstart: R[8] || (R[8] = (U) => X(U)),
          onTouchend: R[9] || (R[9] = (U) => V()),
          onContextmenu: Wt((U) => x(s).emit("vf-contextmenu-show", { event: U, area: l.value, items: et(), target: O }), ["prevent"]),
          onDragstart: (U) => dt(U),
          onDragover: (U) => pt(U, O),
          onDrop: (U) => vt(U, O),
          class: ct(["vf-item-" + x($), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": tt
        }, [
          p("div", null, [
            p("div", _a, [
              O.type == "dir" ? (w(), C("svg", xa, Da)) : (O.mime_type ?? "").startsWith("image") ? (w(), C("img", {
                key: 1,
                class: "lazy h-10 md:h-12 m-auto",
                "data-src": x(tr)(x(a).value, O.path),
                alt: O.basename
              }, null, 8, Ca)) : (w(), C("svg", Ea, Ta)),
              !(O.mime_type ?? "").startsWith("image") && O.type != "dir" ? (w(), C("div", $a, E(u(O.extension)), 1)) : Z("", !0)
            ]),
            p("span", Ia, E(m(O.basename)), 1)
          ])
        ], 42, wa))), 256)) : Z("", !0)
      ], 34),
      Dt(ji)
    ]));
  }
}), Oa = { class: "p-1 text-base flex justify-between select-none" }, Pa = { class: "flex leading-5 items-center" }, Na = ["aria-label"], ja = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
  })
], -1), Ra = [
  ja
], Va = ["value"], Ba = { class: "ml-3" }, za = { key: 0 }, Ha = { class: "ml-1" }, Ua = {
  name: "VFStatusbar"
}, Ka = /* @__PURE__ */ Object.assign(Ua, {
  props: {
    data: Object
  },
  setup(r) {
    const t = P("emitter"), { getStore: s, setStore: o } = P("storage"), n = L(0), a = P("adapter"), { t: u, changeLocale: m } = P("i18n");
    L(s("locale", ""));
    const l = () => {
      t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: a.value } }), o("adapter", a.value);
    };
    t.on("vf-nodes-selected", (f) => {
      n.value = f.length;
    });
    const v = L("");
    return t.on("vf-search-query", ({ newQuery: f }) => {
      v.value = f;
    }), (f, b) => (w(), C("div", Oa, [
      p("div", Pa, [
        p("div", {
          class: "mx-2",
          "aria-label": x(u)("Storage"),
          "data-microtip-position": "top-right",
          role: "tooltip"
        }, Ra, 8, Na),
        Ct(p("select", {
          "onUpdate:modelValue": b[0] || (b[0] = (S) => ns(a) ? a.value = S : null),
          onChange: l,
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8"
        }, [
          (w(!0), C(lt, null, St(r.data.storages, (S) => (w(), C("option", { value: S }, E(S), 9, Va))), 256))
        ], 544), [
          [Oo, x(a)]
        ]),
        p("div", Ba, [
          v.value.length ? (w(), C("span", za, E(r.data.files.length) + " items found. ", 1)) : Z("", !0),
          p("span", Ha, E(n.value > 0 ? n.value + " " + x(u)("item(s) selected.") : ""), 1)
        ])
      ])
    ]));
  }
}), Ya = (r, t = 0, s = !1) => {
  let o;
  return (...n) => {
    s && !o && r(...n), clearTimeout(o), o = setTimeout(() => {
      r(...n);
    }, t);
  };
}, Wa = (r, t, s) => {
  const o = L(r);
  return Po((a, u) => ({
    get() {
      return a(), o.value;
    },
    set: Ya(
      (m) => {
        o.value = m, u();
      },
      t,
      s
    )
  }));
}, Xa = { class: "flex p-2 bg-gray-100 dark:bg-gray-800 rounded dark:border-gray-700/50 items-center select-none text-base" }, Za = ["aria-label"], Fa = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), qa = [
  Fa
], Ga = ["aria-label"], Ja = /* @__PURE__ */ p("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), Qa = [
  Ja
], tl = ["aria-label"], el = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), rl = [
  el
], sl = ["onClick"], ol = /* @__PURE__ */ p("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), il = [
  ol
], nl = { class: "flex leading-5" }, al = /* @__PURE__ */ p("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), ll = ["title", "onClick"], cl = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, dl = /* @__PURE__ */ p("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), ul = /* @__PURE__ */ p("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), hl = [
  dl,
  ul
], fl = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, pl = /* @__PURE__ */ p("svg", {
  class: "h-6 w-6 p-1 m-auto stroke-gray-400 fill-gray-100 dark:stroke-gray-400 dark:fill-gray-400/20",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })
], -1), gl = /* @__PURE__ */ p("div", { class: "w-full" }, null, -1), ml = ["onKeydown", "placeholder"], vl = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), bl = [
  vl
], yl = {
  name: "VFBreadcrumb"
}, Sl = /* @__PURE__ */ Object.assign(yl, {
  props: {
    data: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), n = L(null), a = L([]), u = L(!1), m = L(null), { t: l } = P("i18n"), v = P("loadingState");
    s.on("vf-explorer-update", () => {
      let V = [], j = [];
      n.value = t.data.dirname ?? o.value + "://", n.value.length == 0 && (a.value = []), n.value.replace(o.value + "://", "").split("/").forEach(function(z) {
        V.push(z), V.join("/") != "" && j.push({
          basename: z,
          name: z,
          path: o.value + "://" + V.join("/"),
          type: "dir"
        });
      }), j.length > 4 && (j = j.slice(-5), j[0].name = ".."), a.value = j;
    });
    const f = () => {
      u.value = !1, S.value = "";
    };
    s.on("vf-search-exit", () => {
      f();
    });
    const b = () => {
      u.value = !0, Ve(() => m.value.focus());
    }, S = Wa("", 400), $ = () => v.value;
    Re(S, (V) => {
      s.emit("vf-toast-clear"), s.emit("vf-search-query", { newQuery: V });
    });
    const M = () => a.value.length && !u.value, I = (V) => {
      V.preventDefault();
      let j = JSON.parse(V.dataTransfer.getData("items"));
      if (j.find((z) => z.storage != o.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", {
        type: "move",
        items: { from: j, to: a.value[a.value.length - 2] ?? { path: o.value + "://" } }
      });
    }, T = (V) => {
      V.preventDefault(), M() ? V.dataTransfer.dropEffect = "copy" : (V.dataTransfer.dropEffect = "none", V.dataTransfer.effectAllowed = "none");
    }, H = () => {
      S.value == "" && f();
    };
    return (V, j) => (w(), C("div", Xa, [
      p("span", {
        "aria-label": x(l)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), C("svg", {
          onDragover: j[0] || (j[0] = (z) => T(z)),
          onDrop: j[1] || (j[1] = (z) => I(z)),
          onClick: j[2] || (j[2] = (z) => {
            var X;
            return !M() || x(s).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: ((X = a.value[a.value.length - 2]) == null ? void 0 : X.path) ?? x(o) + "://" } });
          }),
          class: ct(["h-6 w-6 p-0.5 rounded", M() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, qa, 34))
      ], 8, Za),
      $() ? (w(), C("span", {
        key: 1,
        "aria-label": x(l)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), C("svg", {
          onClick: j[4] || (j[4] = (z) => x(s).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, rl))
      ], 8, tl)) : (w(), C("span", {
        key: 0,
        "aria-label": x(l)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), C("svg", {
          onClick: j[3] || (j[3] = (z) => {
            x(s).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: r.data.dirname } });
          }),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Qa))
      ], 8, Ga)),
      u.value ? (w(), C("div", fl, [
        pl,
        gl,
        Ct(p("input", {
          ref_key: "searchInput",
          ref: m,
          onKeydown: oe(f, ["esc"]),
          onBlur: H,
          "onUpdate:modelValue": j[6] || (j[6] = (z) => ns(S) ? S.value = z : null),
          placeholder: x(l)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, ml), [
          [ie, x(S)]
        ]),
        (w(), C("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: f,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, bl))
      ])) : (w(), C("div", {
        key: 2,
        class: "group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: Wt(b, ["self"])
      }, [
        (w(), C("svg", {
          onClick: j[5] || (j[5] = (z) => x(s).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, il)),
        p("div", nl, [
          (w(!0), C(lt, null, St(a.value, (z, X) => (w(), C("div", { key: X }, [
            al,
            p("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: z.basename,
              onClick: (k) => x(s).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: z.path } })
            }, E(z.name), 9, ll)
          ]))), 128))
        ]),
        $() ? (w(), C("svg", cl, hl)) : Z("", !0)
      ], 8, sl))
    ]));
  }
}), wl = ["onClick"], _l = /* @__PURE__ */ p("span", { class: "px-1" }, null, -1), xl = {
  name: "VFContextMenu"
}, kl = /* @__PURE__ */ Object.assign(xl, {
  props: {
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter"), o = L(null), { apiUrl: n } = At(), a = Le({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), u = L([]);
    s.on("vf-context-selected", (S) => {
      u.value = S;
    });
    const { t: m } = P("i18n"), l = {
      newfolder: {
        title: () => m("New Folder"),
        action: () => {
          s.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => m("Delete"),
        action: () => {
          s.emit("vf-modal-show", { type: "delete", items: u });
        }
      },
      refresh: {
        title: () => m("Refresh"),
        action: () => {
          s.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: t.current.dirname } });
        }
      },
      preview: {
        title: () => m("Preview"),
        action: () => {
          s.emit("vf-modal-show", { type: "preview", adapter: t.current.adapter, item: u.value[0] });
        }
      },
      open: {
        title: () => m("Open"),
        action: () => {
          s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: u.value[0].path } });
        }
      },
      openDir: {
        title: () => m("Open containing folder"),
        action: () => {
          s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: u.value[0].dir } });
        }
      },
      download: {
        title: () => m("Download"),
        action: () => {
          const S = n.value + "?" + Ft({ q: "download", adapter: t.current.adapter, path: u.value[0].path });
          s.emit("vf-download", S);
        }
      },
      archive: {
        title: () => m("Archive"),
        action: () => {
          s.emit("vf-modal-show", { type: "archive", items: u });
        }
      },
      unarchive: {
        title: () => m("Unarchive"),
        action: () => {
          s.emit("vf-modal-show", { type: "unarchive", items: u });
        }
      },
      rename: {
        title: () => m("Rename"),
        action: () => {
          s.emit("vf-modal-show", { type: "rename", items: u });
        }
      }
    }, v = (S) => {
      s.emit("vf-contextmenu-hide"), S.action();
    }, f = L("");
    s.on("vf-search-query", ({ newQuery: S }) => {
      f.value = S;
    }), s.on("vf-contextmenu-show", ({ event: S, area: $, items: M, target: I = null }) => {
      if (a.items = [], f.value)
        if (I)
          a.items.push(l.openDir), s.emit("vf-context-selected", [I]);
        else
          return;
      else
        !I && !f.value ? (a.items.push(l.refresh), a.items.push(l.newfolder), s.emit("vf-context-selected", [])) : M.length > 1 && M.some((T) => T.path === I.path) ? (a.items.push(l.refresh), a.items.push(l.archive), a.items.push(l.delete), s.emit("vf-context-selected", M)) : (I.type == "dir" ? a.items.push(l.open) : (a.items.push(l.preview), a.items.push(l.download)), a.items.push(l.rename), I.mime_type == "application/zip" ? a.items.push(l.unarchive) : a.items.push(l.archive), a.items.push(l.delete), s.emit("vf-context-selected", [I]));
      b(S, $);
    }), s.on("vf-contextmenu-hide", () => {
      a.active = !1;
    });
    const b = (S, $) => {
      a.active = !0, Ve(() => {
        let M = $.getBoundingClientRect(), I = S.pageX, T = S.pageY, H = o.value.offsetHeight, V = o.value.offsetWidth;
        I = M.right - S.pageX + window.scrollX < V ? I - V : I, T = M.bottom - S.pageY + window.scrollY < H ? T - H : T, a.positions = {
          left: I + "px",
          top: T + "px"
        };
      });
    };
    return (S, $) => a.active ? (w(), C("ul", {
      key: 0,
      class: "z-30 absolute text-base dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-2 rounded bg-white shadow-lg select-none",
      ref_key: "contextmenu",
      ref: o,
      style: as(a.positions)
    }, [
      (w(!0), C(lt, null, St(a.items, (M) => (w(), C("li", {
        class: "px-2 py-1.5 cursor-pointer bg-transparent hover:bg-gray-100 hover:text-indigo-500 dark:hover:bg-gray-700",
        key: M.title,
        onClick: (I) => v(M)
      }, [
        _l,
        p("span", null, E(M.title()), 1)
      ], 8, wl))), 128))
    ], 4)) : Z("", !0);
  }
}), Dl = (r, t) => {
  const s = r[t];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((o, n) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(n.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
async function Cl(r) {
  const t = await Dl(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en-7468722e.js"), "../locales/fa.json": () => import("./fa-edcf6a05.js"), "../locales/he.json": () => import("./he-3e4155f0.js"), "../locales/ru.json": () => import("./ru-98cf54ad.js"), "../locales/tr.json": () => import("./tr-1ee5cec3.js") }), `../locales/${r}.json`);
  return JSON.parse(t.default);
}
function El(r, t, s) {
  const { getStore: o, setStore: n } = Qe(r), a = L({}), u = (v) => {
    Cl(v).then((f) => {
      a.value = f, n("locale", v), n("translations", f), s.emit("vf-toast-push", { label: "The language is set to " + v });
    }).catch((f) => {
      s.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), u("en");
    });
  };
  o("locale") ? a.value = o("translations") : u(t);
  const m = (v, ...f) => f.length ? m(v = v.replace("%s", f.shift()), ...f) : v;
  function l(v, ...f) {
    return a.value.hasOwnProperty(v) ? m(a.value[v], ...f) : m(v, ...f);
  }
  return { t: l, changeLocale: u };
}
const Ml = { class: "vuefinder" }, Tl = /* @__PURE__ */ p("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), $l = {
  name: "VueFinder"
}, Il = /* @__PURE__ */ Object.assign($l, {
  props: {
    url: {
      type: [String]
    },
    id: {
      type: String,
      default: "vf"
    },
    dark: {
      type: Boolean,
      default: !1
    },
    locale: {
      type: String,
      default: "en"
    },
    maxHeight: {
      type: String,
      default: "600px"
    },
    maxFileSize: {
      type: String,
      default: "10mb"
    },
    postData: {
      type: Object,
      default: {}
    }
  },
  setup(r) {
    const t = r, s = jo(), { setStore: o, getStore: n } = Qe(t.id), a = L(n("adapter"));
    Ut("emitter", s), Ut("storage", Qe(t.id)), Ut("postData", t.postData), Ut("adapter", a), Ut("maxFileSize", t.maxFileSize);
    const u = El(t.id, t.locale, s);
    Ut("i18n", u);
    const { apiUrl: m, setApiUrl: l } = At();
    l(t.url);
    const v = Le({ adapter: a.value, storages: [], dirname: ".", files: [] }), f = L(n("viewport", "grid")), b = L(n("darkMode", t.dark));
    s.on("vf-darkMode-toggle", () => {
      b.value = !b.value, o("darkMode", b.value);
    });
    const S = L(!1);
    Ut("loadingState", S);
    const $ = L(n("full-screen", !1));
    s.on("vf-fullscreen-toggle", () => {
      $.value = !$.value, o("full-screen", $.value);
    }), s.on("vf-view-toggle", (H) => {
      f.value = H;
    });
    const M = Le({
      active: !1,
      type: "delete",
      data: {}
    });
    s.on("vf-modal-close", () => {
      M.active = !1;
    }), s.on("vf-modal-show", (H) => {
      M.active = !0, M.type = H.type, M.data = H;
    });
    const I = (H) => {
      Object.assign(v, H), s.emit("vf-nodes-selected", {}), s.emit("vf-explorer-update");
    };
    let T;
    return s.on("vf-fetch-abort", () => {
      T.abort(), S.value = !1;
    }), s.on("vf-fetch", ({ params: H, onSuccess: V = null, onError: j = null }) => {
      ["index", "search"].includes(H.q) && (T && T.abort(), S.value = !0), T = new AbortController();
      const z = T.signal;
      Pe(m.value, { params: H, signal: z }).then((X) => {
        a.value = X.adapter, ["index", "search"].includes(H.q) && (S.value = !1), s.emit("vf-modal-close"), I(X), V(X);
      }).catch((X) => {
        j && j(X);
      }).finally(() => {
      });
    }), s.on("vf-download", (H) => {
      document.getElementById("download_frame").src = H, s.emit("vf-modal-close");
    }), Et(() => {
      s.emit("vf-fetch", { params: { q: "index", adapter: a.value } });
    }), (H, V) => (w(), C("div", Ml, [
      p("div", {
        class: ct(b.value ? "dark" : "")
      }, [
        p("div", {
          class: ct([$.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 min-w-min select-none"]),
          style: as($.value ? "" : "max-height: " + r.maxHeight),
          onMousedown: V[0] || (V[0] = (j) => x(s).emit("vf-contextmenu-hide")),
          onTouchstart: V[1] || (V[1] = (j) => x(s).emit("vf-contextmenu-hide"))
        }, [
          Dt(xi, { data: v }, null, 8, ["data"]),
          Dt(Sl, { data: v }, null, 8, ["data"]),
          Dt(La, {
            view: f.value,
            data: v
          }, null, 8, ["view", "data"]),
          Dt(Ka, { data: v }, null, 8, ["data"])
        ], 38),
        M.active ? (w(), q(No("v-f-modal-" + M.type), {
          key: 0,
          selection: M.data,
          current: v
        }, null, 8, ["selection", "current"])) : Z("", !0),
        Dt(kl, { current: v }, null, 8, ["current"]),
        Tl
      ], 2)
    ]));
  }
}), Al = /* @__PURE__ */ p("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity" }, null, -1), Ll = { class: "fixed z-10 inset-0 overflow-hidden" }, Ol = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, Pl = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Nl = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Lt = {
  __name: "ModalLayout",
  setup(r) {
    const t = P("emitter");
    return Et(() => {
      const s = document.querySelector(".v-f-modal input");
      s && s.focus();
    }), (s, o) => (w(), C("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: o[1] || (o[1] = oe((n) => x(t).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      Al,
      p("div", Ll, [
        p("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: o[0] || (o[0] = Wt((n) => x(t).emit("vf-modal-close"), ["self"]))
        }, [
          p("div", Ol, [
            p("div", Pl, [
              Je(s.$slots, "default")
            ]),
            p("div", Nl, [
              Je(s.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, jl = ["aria-label"], Rl = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Vl = [
  Rl
], Bl = {
  name: "Message"
}, Ot = /* @__PURE__ */ Object.assign(Bl, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(r, { emit: t }) {
    var m;
    const { t: s } = P("i18n"), o = L(!1), n = L(null), a = L((m = n.value) == null ? void 0 : m.strMessage);
    Re(a, () => o.value = !1);
    const u = () => {
      t("hidden"), o.value = !0;
    };
    return (l, v) => (w(), C("div", null, [
      o.value ? Z("", !0) : (w(), C("div", {
        key: 0,
        ref_key: "strMessage",
        ref: n,
        class: ct(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Je(l.$slots, "default"),
        p("div", {
          class: "ml-auto cursor-pointer",
          onClick: u,
          "aria-label": x(s)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, Vl, 8, jl)
      ], 2))
    ]));
  }
}), zl = { class: "sm:flex sm:items-start" }, Hl = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })
  ])
], -1), Ul = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Kl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Yl = { class: "mt-2" }, Wl = { class: "text-sm text-gray-500" }, Xl = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Zl = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-indigo-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Fl = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ql = [
  Fl
], Gl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Jl = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Ql = [
  Jl
], tc = { class: "ml-1.5" }, ec = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, rc = {
  name: "VFModalDelete"
}, sc = /* @__PURE__ */ Object.assign(rc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: n } = P("i18n"), a = L(t.selection.items), u = L(""), m = () => {
      a.value.length && s.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: o.value,
          path: t.current.dirname,
          items: JSON.stringify(a.value.map(({ path: l, type: v }) => ({ path: l, type: v })))
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: n("Files deleted.") });
        },
        onError: (l) => {
          u.value = n(l.message);
        }
      });
    };
    return (l, v) => (w(), q(Lt, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Yes, Delete!")), 1),
        p("button", {
          type: "button",
          onClick: v[1] || (v[1] = (f) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Cancel")), 1),
        p("div", ec, E(x(n)("This action cannot be undone.")), 1)
      ]),
      default: F(() => [
        p("div", zl, [
          Hl,
          p("div", Ul, [
            p("h3", Kl, E(x(n)("Delete files")), 1),
            p("div", Yl, [
              p("p", Wl, E(x(n)("Are you sure you want to delete these files?")), 1),
              (w(!0), C(lt, null, St(a.value, (f) => (w(), C("p", Xl, [
                f.type == "dir" ? (w(), C("svg", Zl, ql)) : (w(), C("svg", Gl, Ql)),
                p("span", tc, E(f.basename), 1)
              ]))), 256)),
              u.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: v[0] || (v[0] = (f) => u.value = ""),
                error: ""
              }, {
                default: F(() => [
                  st(E(u.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), oc = { class: "sm:flex sm:items-start" }, ic = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-200 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-indigo-500 dark:stroke-indigo-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ])
], -1), nc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, ac = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, lc = { class: "mt-2" }, cc = { class: "text-sm text-gray-500" }, dc = {
  name: "VFModalMessage"
}, uc = /* @__PURE__ */ Object.assign(dc, {
  props: {
    selection: Object
  },
  setup(r) {
    const t = P("emitter"), { t: s } = P("i18n");
    return (o, n) => (w(), q(Lt, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: n[0] || (n[0] = (a) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(s)("Close")), 1)
      ]),
      default: F(() => {
        var a, u;
        return [
          p("div", oc, [
            ic,
            p("div", nc, [
              p("h3", ac, E(((a = r.selection) == null ? void 0 : a.title) ?? "Title"), 1),
              p("div", lc, [
                p("p", cc, E(((u = r.selection) == null ? void 0 : u.message) ?? "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), hc = { class: "sm:flex sm:items-start" }, fc = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-200 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-indigo-500 dark:stroke-indigo-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
    })
  ])
], -1), pc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, gc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, mc = { class: "mt-2" }, vc = { class: "text-sm text-gray-500" }, bc = ["onKeyup", "placeholder"], yc = {
  name: "VFModalNewFolder"
}, Sc = /* @__PURE__ */ Object.assign(yc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: n } = P("i18n"), a = L(""), u = L(""), m = () => {
      a.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: o.value,
          path: t.current.dirname,
          name: a.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: n("%s is created.", a.value) });
        },
        onError: (l) => {
          u.value = n(l.message);
        }
      });
    };
    return (l, v) => (w(), q(Lt, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Create")), 1),
        p("button", {
          type: "button",
          onClick: v[2] || (v[2] = (f) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", hc, [
          fc,
          p("div", pc, [
            p("h3", gc, E(x(n)("New Folder")), 1),
            p("div", mc, [
              p("p", vc, E(x(n)("Create a new folder")), 1),
              Ct(p("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (f) => a.value = f),
                onKeyup: oe(m, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(n)("Folder Name"),
                type: "text"
              }, null, 40, bc), [
                [ie, a.value]
              ]),
              u.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: v[1] || (v[1] = (f) => u.value = ""),
                error: ""
              }, {
                default: F(() => [
                  st(E(u.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), wc = { class: "sm:flex sm:items-start" }, _c = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-200 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-indigo-500 dark:stroke-indigo-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })
  ])
], -1), xc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, kc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Dc = { class: "mt-2" }, Cc = { class: "text-sm text-gray-500" }, Ec = ["onKeyup", "placeholder"], Mc = {
  name: "VFModalNewFile"
}, Tc = /* @__PURE__ */ Object.assign(Mc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: n } = P("i18n"), a = L(""), u = L(""), m = () => {
      a.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: o.value,
          path: t.current.dirname,
          name: a.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: n("%s is created.", a.value) });
        },
        onError: (l) => {
          u.value = n(l.message);
        }
      });
    };
    return (l, v) => (w(), q(Lt, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Create")), 1),
        p("button", {
          type: "button",
          onClick: v[2] || (v[2] = (f) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", wc, [
          _c,
          p("div", xc, [
            p("h3", kc, E(x(n)("New File")), 1),
            p("div", Dc, [
              p("p", Cc, E(x(n)("Create a new file")), 1),
              Ct(p("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (f) => a.value = f),
                onKeyup: oe(m, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(n)("File Name"),
                type: "text"
              }, null, 40, Ec), [
                [ie, a.value]
              ]),
              u.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: v[1] || (v[1] = (f) => u.value = ""),
                error: ""
              }, {
                default: F(() => [
                  st(E(u.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), $c = { class: "flex" }, Ic = ["aria-label"], Ac = { class: "ml-auto mb-2" }, Lc = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, Oc = { key: 1 }, Pc = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, o = L(""), n = L(""), a = L(null), u = L(!1), { apiUrl: m } = At(), l = L(""), v = L(!1), { t: f } = P("i18n");
    Et(() => {
      Pe(m.value, {
        params: { q: "preview", adapter: s.selection.adapter, path: s.selection.item.path },
        json: !1
      }).then((M) => {
        o.value = M, t("load");
      });
    });
    const b = () => {
      u.value = !u.value, n.value = o.value, u.value == !0 && Ve(() => {
        a.value.focus();
      });
    }, S = P("postData"), $ = () => {
      l.value = "", v.value = !1, Pe(m.value, {
        method: "POST",
        params: Object.assign(S, {
          q: "save",
          adapter: s.selection.adapter,
          path: s.selection.item.path,
          content: n.value
        }),
        json: !1
      }).then((M) => {
        l.value = f("Updated."), o.value = M, t("load"), u.value = !u.value;
      }).catch((M) => {
        l.value = f(M.message), v.value = !0;
      });
    };
    return (M, I) => (w(), C(lt, null, [
      p("div", $c, [
        p("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, Ic),
        p("div", Ac, [
          u.value ? (w(), C("button", {
            key: 0,
            onClick: $,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(f)("Save")), 1)) : Z("", !0),
          p("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: I[0] || (I[0] = (T) => b())
          }, E(u.value ? x(f)("Cancel") : x(f)("Edit")), 1)
        ])
      ]),
      p("div", null, [
        u.value ? (w(), C("div", Oc, [
          Ct(p("textarea", {
            ref_key: "editInput",
            ref: a,
            "onUpdate:modelValue": I[1] || (I[1] = (T) => n.value = T),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [ie, n.value]
          ])
        ])) : (w(), C("pre", Lc, E(o.value), 1)),
        l.value.length ? (w(), q(Ot, {
          key: 2,
          onHidden: I[2] || (I[2] = (T) => l.value = ""),
          error: v.value
        }, {
          default: F(() => [
            st(E(l.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : Z("", !0)
      ])
    ], 64));
  }
};
/*!
 * Cropper.js v1.5.13
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-11-20T05:30:46.114Z
 */
function Ur(r, t) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    t && (o = o.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), s.push.apply(s, o);
  }
  return s;
}
function Vs(r) {
  for (var t = 1; t < arguments.length; t++) {
    var s = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ur(Object(s), !0).forEach(function(o) {
      Rc(r, o, s[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : Ur(Object(s)).forEach(function(o) {
      Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(s, o));
    });
  }
  return r;
}
function rr(r) {
  "@babel/helpers - typeof";
  return rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rr(r);
}
function Nc(r, t) {
  if (!(r instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kr(r, t) {
  for (var s = 0; s < t.length; s++) {
    var o = t[s];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, o.key, o);
  }
}
function jc(r, t, s) {
  return t && Kr(r.prototype, t), s && Kr(r, s), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Rc(r, t, s) {
  return t in r ? Object.defineProperty(r, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = s, r;
}
function Bs(r) {
  return Vc(r) || Bc(r) || zc(r) || Hc();
}
function Vc(r) {
  if (Array.isArray(r))
    return sr(r);
}
function Bc(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function zc(r, t) {
  if (r) {
    if (typeof r == "string")
      return sr(r, t);
    var s = Object.prototype.toString.call(r).slice(8, -1);
    if (s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set")
      return Array.from(r);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return sr(r, t);
  }
}
function sr(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var s = 0, o = new Array(t); s < t; s++)
    o[s] = r[s];
  return o;
}
function Hc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ke = typeof window < "u" && typeof window.document < "u", It = Ke ? window : {}, xr = Ke && It.document.documentElement ? "ontouchstart" in It.document.documentElement : !1, kr = Ke ? "PointerEvent" in It : !1, J = "cropper", Dr = "all", zs = "crop", Hs = "move", Us = "zoom", Kt = "e", Yt = "w", Jt = "s", jt = "n", he = "ne", fe = "nw", pe = "se", ge = "sw", or = "".concat(J, "-crop"), Yr = "".concat(J, "-disabled"), ht = "".concat(J, "-hidden"), Wr = "".concat(J, "-hide"), Uc = "".concat(J, "-invisible"), je = "".concat(J, "-modal"), ir = "".concat(J, "-move"), be = "".concat(J, "Action"), Ie = "".concat(J, "Preview"), Cr = "crop", Ks = "move", Ys = "none", nr = "crop", ar = "cropend", lr = "cropmove", cr = "cropstart", Xr = "dblclick", Kc = xr ? "touchstart" : "mousedown", Yc = xr ? "touchmove" : "mousemove", Wc = xr ? "touchend touchcancel" : "mouseup", Zr = kr ? "pointerdown" : Kc, Fr = kr ? "pointermove" : Yc, qr = kr ? "pointerup pointercancel" : Wc, Gr = "ready", Jr = "resize", Qr = "wheel", dr = "zoom", ts = "image/jpeg", Xc = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Zc = /^data:/, Fc = /^data:image\/jpeg;base64,/, qc = /^img|canvas$/i, Ws = 200, Xs = 100, es = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: Cr,
  // 'crop', 'move' or 'none'
  // Define the initial aspect ratio of the crop box
  initialAspectRatio: NaN,
  // Define the aspect ratio of the crop box
  aspectRatio: NaN,
  // An object with the previous cropping result data
  data: null,
  // A selector for adding extra containers to preview
  preview: "",
  // Re-render the cropper when resize the window
  responsive: !0,
  // Restore the cropped area after resize the window
  restore: !0,
  // Check if the current image is a cross-origin image
  checkCrossOrigin: !0,
  // Check the current image's Exif Orientation information
  checkOrientation: !0,
  // Show the black modal
  modal: !0,
  // Show the dashed lines for guiding
  guides: !0,
  // Show the center indicator for guiding
  center: !0,
  // Show the white modal to highlight the crop box
  highlight: !0,
  // Show the grid background
  background: !0,
  // Enable to crop the image automatically when initialize
  autoCrop: !0,
  // Define the percentage of automatic cropping area when initializes
  autoCropArea: 0.8,
  // Enable to move the image
  movable: !0,
  // Enable to rotate the image
  rotatable: !0,
  // Enable to scale the image
  scalable: !0,
  // Enable to zoom the image
  zoomable: !0,
  // Enable to zoom the image by dragging touch
  zoomOnTouch: !0,
  // Enable to zoom the image by wheeling mouse
  zoomOnWheel: !0,
  // Define zoom ratio when zoom the image by wheeling mouse
  wheelZoomRatio: 0.1,
  // Enable to move the crop box
  cropBoxMovable: !0,
  // Enable to resize the crop box
  cropBoxResizable: !0,
  // Toggle drag mode between "crop" and "move" when click twice on the cropper
  toggleDragModeOnDblclick: !0,
  // Size limitation
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: Ws,
  minContainerHeight: Xs,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, Gc = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Jc = Number.isNaN || It.isNaN;
function K(r) {
  return typeof r == "number" && !Jc(r);
}
var rs = function(t) {
  return t > 0 && t < 1 / 0;
};
function Fe(r) {
  return typeof r > "u";
}
function Zt(r) {
  return rr(r) === "object" && r !== null;
}
var Qc = Object.prototype.hasOwnProperty;
function Qt(r) {
  if (!Zt(r))
    return !1;
  try {
    var t = r.constructor, s = t.prototype;
    return t && s && Qc.call(s, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function ut(r) {
  return typeof r == "function";
}
var td = Array.prototype.slice;
function Zs(r) {
  return Array.from ? Array.from(r) : td.call(r);
}
function rt(r, t) {
  return r && ut(t) && (Array.isArray(r) || K(r.length) ? Zs(r).forEach(function(s, o) {
    t.call(r, s, o, r);
  }) : Zt(r) && Object.keys(r).forEach(function(s) {
    t.call(r, r[s], s, r);
  })), r;
}
var Q = Object.assign || function(t) {
  for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), n = 1; n < s; n++)
    o[n - 1] = arguments[n];
  return Zt(t) && o.length > 0 && o.forEach(function(a) {
    Zt(a) && Object.keys(a).forEach(function(u) {
      t[u] = a[u];
    });
  }), t;
}, ed = /\.\d*(?:0|9){12}\d*$/;
function ee(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return ed.test(r) ? Math.round(r * t) / t : r;
}
var rd = /^width|height|left|top|marginLeft|marginTop$/;
function Rt(r, t) {
  var s = r.style;
  rt(t, function(o, n) {
    rd.test(n) && K(o) && (o = "".concat(o, "px")), s[n] = o;
  });
}
function sd(r, t) {
  return r.classList ? r.classList.contains(t) : r.className.indexOf(t) > -1;
}
function at(r, t) {
  if (t) {
    if (K(r.length)) {
      rt(r, function(o) {
        at(o, t);
      });
      return;
    }
    if (r.classList) {
      r.classList.add(t);
      return;
    }
    var s = r.className.trim();
    s ? s.indexOf(t) < 0 && (r.className = "".concat(s, " ").concat(t)) : r.className = t;
  }
}
function $t(r, t) {
  if (t) {
    if (K(r.length)) {
      rt(r, function(s) {
        $t(s, t);
      });
      return;
    }
    if (r.classList) {
      r.classList.remove(t);
      return;
    }
    r.className.indexOf(t) >= 0 && (r.className = r.className.replace(t, ""));
  }
}
function te(r, t, s) {
  if (t) {
    if (K(r.length)) {
      rt(r, function(o) {
        te(o, t, s);
      });
      return;
    }
    s ? at(r, t) : $t(r, t);
  }
}
var od = /([a-z\d])([A-Z])/g;
function Er(r) {
  return r.replace(od, "$1-$2").toLowerCase();
}
function ur(r, t) {
  return Zt(r[t]) ? r[t] : r.dataset ? r.dataset[t] : r.getAttribute("data-".concat(Er(t)));
}
function ye(r, t, s) {
  Zt(s) ? r[t] = s : r.dataset ? r.dataset[t] = s : r.setAttribute("data-".concat(Er(t)), s);
}
function id(r, t) {
  if (Zt(r[t]))
    try {
      delete r[t];
    } catch {
      r[t] = void 0;
    }
  else if (r.dataset)
    try {
      delete r.dataset[t];
    } catch {
      r.dataset[t] = void 0;
    }
  else
    r.removeAttribute("data-".concat(Er(t)));
}
var Fs = /\s\s*/, qs = function() {
  var r = !1;
  if (Ke) {
    var t = !1, s = function() {
    }, o = Object.defineProperty({}, "once", {
      get: function() {
        return r = !0, t;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function(a) {
        t = a;
      }
    });
    It.addEventListener("test", s, o), It.removeEventListener("test", s, o);
  }
  return r;
}();
function kt(r, t, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = s;
  t.trim().split(Fs).forEach(function(a) {
    if (!qs) {
      var u = r.listeners;
      u && u[a] && u[a][s] && (n = u[a][s], delete u[a][s], Object.keys(u[a]).length === 0 && delete u[a], Object.keys(u).length === 0 && delete r.listeners);
    }
    r.removeEventListener(a, n, o);
  });
}
function yt(r, t, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = s;
  t.trim().split(Fs).forEach(function(a) {
    if (o.once && !qs) {
      var u = r.listeners, m = u === void 0 ? {} : u;
      n = function() {
        delete m[a][s], r.removeEventListener(a, n, o);
        for (var v = arguments.length, f = new Array(v), b = 0; b < v; b++)
          f[b] = arguments[b];
        s.apply(r, f);
      }, m[a] || (m[a] = {}), m[a][s] && r.removeEventListener(a, m[a][s], o), m[a][s] = n, r.listeners = m;
    }
    r.addEventListener(a, n, o);
  });
}
function re(r, t, s) {
  var o;
  return ut(Event) && ut(CustomEvent) ? o = new CustomEvent(t, {
    detail: s,
    bubbles: !0,
    cancelable: !0
  }) : (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, !0, !0, s)), r.dispatchEvent(o);
}
function Gs(r) {
  var t = r.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var qe = It.location, nd = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function ss(r) {
  var t = r.match(nd);
  return t !== null && (t[1] !== qe.protocol || t[2] !== qe.hostname || t[3] !== qe.port);
}
function os(r) {
  var t = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + t;
}
function me(r) {
  var t = r.rotate, s = r.scaleX, o = r.scaleY, n = r.translateX, a = r.translateY, u = [];
  K(n) && n !== 0 && u.push("translateX(".concat(n, "px)")), K(a) && a !== 0 && u.push("translateY(".concat(a, "px)")), K(t) && t !== 0 && u.push("rotate(".concat(t, "deg)")), K(s) && s !== 1 && u.push("scaleX(".concat(s, ")")), K(o) && o !== 1 && u.push("scaleY(".concat(o, ")"));
  var m = u.length ? u.join(" ") : "none";
  return {
    WebkitTransform: m,
    msTransform: m,
    transform: m
  };
}
function ad(r) {
  var t = Vs({}, r), s = 0;
  return rt(r, function(o, n) {
    delete t[n], rt(t, function(a) {
      var u = Math.abs(o.startX - a.startX), m = Math.abs(o.startY - a.startY), l = Math.abs(o.endX - a.endX), v = Math.abs(o.endY - a.endY), f = Math.sqrt(u * u + m * m), b = Math.sqrt(l * l + v * v), S = (b - f) / f;
      Math.abs(S) > Math.abs(s) && (s = S);
    });
  }), s;
}
function Ae(r, t) {
  var s = r.pageX, o = r.pageY, n = {
    endX: s,
    endY: o
  };
  return t ? n : Vs({
    startX: s,
    startY: o
  }, n);
}
function ld(r) {
  var t = 0, s = 0, o = 0;
  return rt(r, function(n) {
    var a = n.startX, u = n.startY;
    t += a, s += u, o += 1;
  }), t /= o, s /= o, {
    pageX: t,
    pageY: s
  };
}
function Vt(r) {
  var t = r.aspectRatio, s = r.height, o = r.width, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", a = rs(o), u = rs(s);
  if (a && u) {
    var m = s * t;
    n === "contain" && m > o || n === "cover" && m < o ? s = o / t : o = s * t;
  } else
    a ? s = o / t : u && (o = s * t);
  return {
    width: o,
    height: s
  };
}
function cd(r) {
  var t = r.width, s = r.height, o = r.degree;
  if (o = Math.abs(o) % 180, o === 90)
    return {
      width: s,
      height: t
    };
  var n = o % 90 * Math.PI / 180, a = Math.sin(n), u = Math.cos(n), m = t * u + s * a, l = t * a + s * u;
  return o > 90 ? {
    width: l,
    height: m
  } : {
    width: m,
    height: l
  };
}
function dd(r, t, s, o) {
  var n = t.aspectRatio, a = t.naturalWidth, u = t.naturalHeight, m = t.rotate, l = m === void 0 ? 0 : m, v = t.scaleX, f = v === void 0 ? 1 : v, b = t.scaleY, S = b === void 0 ? 1 : b, $ = s.aspectRatio, M = s.naturalWidth, I = s.naturalHeight, T = o.fillColor, H = T === void 0 ? "transparent" : T, V = o.imageSmoothingEnabled, j = V === void 0 ? !0 : V, z = o.imageSmoothingQuality, X = z === void 0 ? "low" : z, k = o.maxWidth, N = k === void 0 ? 1 / 0 : k, G = o.maxHeight, ot = G === void 0 ? 1 / 0 : G, et = o.minWidth, dt = et === void 0 ? 0 : et, vt = o.minHeight, pt = vt === void 0 ? 0 : vt, gt = document.createElement("canvas"), A = gt.getContext("2d"), R = Vt({
    aspectRatio: $,
    width: N,
    height: ot
  }), O = Vt({
    aspectRatio: $,
    width: dt,
    height: pt
  }, "cover"), tt = Math.min(R.width, Math.max(O.width, M)), U = Math.min(R.height, Math.max(O.height, I)), wt = Vt({
    aspectRatio: n,
    width: N,
    height: ot
  }), bt = Vt({
    aspectRatio: n,
    width: dt,
    height: pt
  }, "cover"), xe = Math.min(wt.width, Math.max(bt.width, a)), ke = Math.min(wt.height, Math.max(bt.height, u)), Ye = [-xe / 2, -ke / 2, xe, ke];
  return gt.width = ee(tt), gt.height = ee(U), A.fillStyle = H, A.fillRect(0, 0, tt, U), A.save(), A.translate(tt / 2, U / 2), A.rotate(l * Math.PI / 180), A.scale(f, S), A.imageSmoothingEnabled = j, A.imageSmoothingQuality = X, A.drawImage.apply(A, [r].concat(Bs(Ye.map(function(De) {
    return Math.floor(ee(De));
  })))), A.restore(), gt;
}
var Js = String.fromCharCode;
function ud(r, t, s) {
  var o = "";
  s += t;
  for (var n = t; n < s; n += 1)
    o += Js(r.getUint8(n));
  return o;
}
var hd = /^data:.*,/;
function fd(r) {
  var t = r.replace(hd, ""), s = atob(t), o = new ArrayBuffer(s.length), n = new Uint8Array(o);
  return rt(n, function(a, u) {
    n[u] = s.charCodeAt(u);
  }), o;
}
function pd(r, t) {
  for (var s = [], o = 8192, n = new Uint8Array(r); n.length > 0; )
    s.push(Js.apply(null, Zs(n.subarray(0, o)))), n = n.subarray(o);
  return "data:".concat(t, ";base64,").concat(btoa(s.join("")));
}
function gd(r) {
  var t = new DataView(r), s;
  try {
    var o, n, a;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var u = t.byteLength, m = 2; m + 1 < u; ) {
        if (t.getUint8(m) === 255 && t.getUint8(m + 1) === 225) {
          n = m;
          break;
        }
        m += 1;
      }
    if (n) {
      var l = n + 4, v = n + 10;
      if (ud(t, l, 4) === "Exif") {
        var f = t.getUint16(v);
        if (o = f === 18761, (o || f === 19789) && t.getUint16(v + 2, o) === 42) {
          var b = t.getUint32(v + 4, o);
          b >= 8 && (a = v + b);
        }
      }
    }
    if (a) {
      var S = t.getUint16(a, o), $, M;
      for (M = 0; M < S; M += 1)
        if ($ = a + M * 12 + 2, t.getUint16($, o) === 274) {
          $ += 8, s = t.getUint16($, o), t.setUint16($, 1, o);
          break;
        }
    }
  } catch {
    s = 1;
  }
  return s;
}
function md(r) {
  var t = 0, s = 1, o = 1;
  switch (r) {
    case 2:
      s = -1;
      break;
    case 3:
      t = -180;
      break;
    case 4:
      o = -1;
      break;
    case 5:
      t = 90, o = -1;
      break;
    case 6:
      t = 90;
      break;
    case 7:
      t = 90, s = -1;
      break;
    case 8:
      t = -90;
      break;
  }
  return {
    rotate: t,
    scaleX: s,
    scaleY: o
  };
}
var vd = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, s = this.options, o = this.container, n = this.cropper, a = Number(s.minContainerWidth), u = Number(s.minContainerHeight);
    at(n, ht), $t(t, ht);
    var m = {
      width: Math.max(o.offsetWidth, a >= 0 ? a : Ws),
      height: Math.max(o.offsetHeight, u >= 0 ? u : Xs)
    };
    this.containerData = m, Rt(n, {
      width: m.width,
      height: m.height
    }), at(t, ht), $t(n, ht);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var t = this.containerData, s = this.imageData, o = this.options.viewMode, n = Math.abs(s.rotate) % 180 === 90, a = n ? s.naturalHeight : s.naturalWidth, u = n ? s.naturalWidth : s.naturalHeight, m = a / u, l = t.width, v = t.height;
    t.height * m > t.width ? o === 3 ? l = t.height * m : v = t.width / m : o === 3 ? v = t.width / m : l = t.height * m;
    var f = {
      aspectRatio: m,
      naturalWidth: a,
      naturalHeight: u,
      width: l,
      height: v
    };
    this.canvasData = f, this.limited = o === 1 || o === 2, this.limitCanvas(!0, !0), f.width = Math.min(Math.max(f.width, f.minWidth), f.maxWidth), f.height = Math.min(Math.max(f.height, f.minHeight), f.maxHeight), f.left = (t.width - f.width) / 2, f.top = (t.height - f.height) / 2, f.oldLeft = f.left, f.oldTop = f.top, this.initialCanvasData = Q({}, f);
  },
  limitCanvas: function(t, s) {
    var o = this.options, n = this.containerData, a = this.canvasData, u = this.cropBoxData, m = o.viewMode, l = a.aspectRatio, v = this.cropped && u;
    if (t) {
      var f = Number(o.minCanvasWidth) || 0, b = Number(o.minCanvasHeight) || 0;
      m > 1 ? (f = Math.max(f, n.width), b = Math.max(b, n.height), m === 3 && (b * l > f ? f = b * l : b = f / l)) : m > 0 && (f ? f = Math.max(f, v ? u.width : 0) : b ? b = Math.max(b, v ? u.height : 0) : v && (f = u.width, b = u.height, b * l > f ? f = b * l : b = f / l));
      var S = Vt({
        aspectRatio: l,
        width: f,
        height: b
      });
      f = S.width, b = S.height, a.minWidth = f, a.minHeight = b, a.maxWidth = 1 / 0, a.maxHeight = 1 / 0;
    }
    if (s)
      if (m > (v ? 0 : 1)) {
        var $ = n.width - a.width, M = n.height - a.height;
        a.minLeft = Math.min(0, $), a.minTop = Math.min(0, M), a.maxLeft = Math.max(0, $), a.maxTop = Math.max(0, M), v && this.limited && (a.minLeft = Math.min(u.left, u.left + (u.width - a.width)), a.minTop = Math.min(u.top, u.top + (u.height - a.height)), a.maxLeft = u.left, a.maxTop = u.top, m === 2 && (a.width >= n.width && (a.minLeft = Math.min(0, $), a.maxLeft = Math.max(0, $)), a.height >= n.height && (a.minTop = Math.min(0, M), a.maxTop = Math.max(0, M))));
      } else
        a.minLeft = -a.width, a.minTop = -a.height, a.maxLeft = n.width, a.maxTop = n.height;
  },
  renderCanvas: function(t, s) {
    var o = this.canvasData, n = this.imageData;
    if (s) {
      var a = cd({
        width: n.naturalWidth * Math.abs(n.scaleX || 1),
        height: n.naturalHeight * Math.abs(n.scaleY || 1),
        degree: n.rotate || 0
      }), u = a.width, m = a.height, l = o.width * (u / o.naturalWidth), v = o.height * (m / o.naturalHeight);
      o.left -= (l - o.width) / 2, o.top -= (v - o.height) / 2, o.width = l, o.height = v, o.aspectRatio = u / m, o.naturalWidth = u, o.naturalHeight = m, this.limitCanvas(!0, !1);
    }
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCanvas(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, Rt(this.canvas, Q({
      width: o.width,
      height: o.height
    }, me({
      translateX: o.left,
      translateY: o.top
    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(t) {
    var s = this.canvasData, o = this.imageData, n = o.naturalWidth * (s.width / s.naturalWidth), a = o.naturalHeight * (s.height / s.naturalHeight);
    Q(o, {
      width: n,
      height: a,
      left: (s.width - n) / 2,
      top: (s.height - a) / 2
    }), Rt(this.image, Q({
      width: o.width,
      height: o.height
    }, me(Q({
      translateX: o.left,
      translateY: o.top
    }, o)))), t && this.output();
  },
  initCropBox: function() {
    var t = this.options, s = this.canvasData, o = t.aspectRatio || t.initialAspectRatio, n = Number(t.autoCropArea) || 0.8, a = {
      width: s.width,
      height: s.height
    };
    o && (s.height * o > s.width ? a.height = a.width / o : a.width = a.height * o), this.cropBoxData = a, this.limitCropBox(!0, !0), a.width = Math.min(Math.max(a.width, a.minWidth), a.maxWidth), a.height = Math.min(Math.max(a.height, a.minHeight), a.maxHeight), a.width = Math.max(a.minWidth, a.width * n), a.height = Math.max(a.minHeight, a.height * n), a.left = s.left + (s.width - a.width) / 2, a.top = s.top + (s.height - a.height) / 2, a.oldLeft = a.left, a.oldTop = a.top, this.initialCropBoxData = Q({}, a);
  },
  limitCropBox: function(t, s) {
    var o = this.options, n = this.containerData, a = this.canvasData, u = this.cropBoxData, m = this.limited, l = o.aspectRatio;
    if (t) {
      var v = Number(o.minCropBoxWidth) || 0, f = Number(o.minCropBoxHeight) || 0, b = m ? Math.min(n.width, a.width, a.width + a.left, n.width - a.left) : n.width, S = m ? Math.min(n.height, a.height, a.height + a.top, n.height - a.top) : n.height;
      v = Math.min(v, n.width), f = Math.min(f, n.height), l && (v && f ? f * l > v ? f = v / l : v = f * l : v ? f = v / l : f && (v = f * l), S * l > b ? S = b / l : b = S * l), u.minWidth = Math.min(v, b), u.minHeight = Math.min(f, S), u.maxWidth = b, u.maxHeight = S;
    }
    s && (m ? (u.minLeft = Math.max(0, a.left), u.minTop = Math.max(0, a.top), u.maxLeft = Math.min(n.width, a.left + a.width) - u.width, u.maxTop = Math.min(n.height, a.top + a.height) - u.height) : (u.minLeft = 0, u.minTop = 0, u.maxLeft = n.width - u.width, u.maxTop = n.height - u.height));
  },
  renderCropBox: function() {
    var t = this.options, s = this.containerData, o = this.cropBoxData;
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCropBox(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, t.movable && t.cropBoxMovable && ye(this.face, be, o.width >= s.width && o.height >= s.height ? Hs : Dr), Rt(this.cropBox, Q({
      width: o.width,
      height: o.height
    }, me({
      translateX: o.left,
      translateY: o.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), re(this.element, nr, this.getData());
  }
}, bd = {
  initPreview: function() {
    var t = this.element, s = this.crossOrigin, o = this.options.preview, n = s ? this.crossOriginUrl : this.url, a = t.alt || "The image to preview", u = document.createElement("img");
    if (s && (u.crossOrigin = s), u.src = n, u.alt = a, this.viewBox.appendChild(u), this.viewBoxImage = u, !!o) {
      var m = o;
      typeof o == "string" ? m = t.ownerDocument.querySelectorAll(o) : o.querySelector && (m = [o]), this.previews = m, rt(m, function(l) {
        var v = document.createElement("img");
        ye(l, Ie, {
          width: l.offsetWidth,
          height: l.offsetHeight,
          html: l.innerHTML
        }), s && (v.crossOrigin = s), v.src = n, v.alt = a, v.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', l.innerHTML = "", l.appendChild(v);
      });
    }
  },
  resetPreview: function() {
    rt(this.previews, function(t) {
      var s = ur(t, Ie);
      Rt(t, {
        width: s.width,
        height: s.height
      }), t.innerHTML = s.html, id(t, Ie);
    });
  },
  preview: function() {
    var t = this.imageData, s = this.canvasData, o = this.cropBoxData, n = o.width, a = o.height, u = t.width, m = t.height, l = o.left - s.left - t.left, v = o.top - s.top - t.top;
    !this.cropped || this.disabled || (Rt(this.viewBoxImage, Q({
      width: u,
      height: m
    }, me(Q({
      translateX: -l,
      translateY: -v
    }, t)))), rt(this.previews, function(f) {
      var b = ur(f, Ie), S = b.width, $ = b.height, M = S, I = $, T = 1;
      n && (T = S / n, I = a * T), a && I > $ && (T = $ / a, M = n * T, I = $), Rt(f, {
        width: M,
        height: I
      }), Rt(f.getElementsByTagName("img")[0], Q({
        width: u * T,
        height: m * T
      }, me(Q({
        translateX: -l * T,
        translateY: -v * T
      }, t))));
    }));
  }
}, yd = {
  bind: function() {
    var t = this.element, s = this.options, o = this.cropper;
    ut(s.cropstart) && yt(t, cr, s.cropstart), ut(s.cropmove) && yt(t, lr, s.cropmove), ut(s.cropend) && yt(t, ar, s.cropend), ut(s.crop) && yt(t, nr, s.crop), ut(s.zoom) && yt(t, dr, s.zoom), yt(o, Zr, this.onCropStart = this.cropStart.bind(this)), s.zoomable && s.zoomOnWheel && yt(o, Qr, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && yt(o, Xr, this.onDblclick = this.dblclick.bind(this)), yt(t.ownerDocument, Fr, this.onCropMove = this.cropMove.bind(this)), yt(t.ownerDocument, qr, this.onCropEnd = this.cropEnd.bind(this)), s.responsive && yt(window, Jr, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, s = this.options, o = this.cropper;
    ut(s.cropstart) && kt(t, cr, s.cropstart), ut(s.cropmove) && kt(t, lr, s.cropmove), ut(s.cropend) && kt(t, ar, s.cropend), ut(s.crop) && kt(t, nr, s.crop), ut(s.zoom) && kt(t, dr, s.zoom), kt(o, Zr, this.onCropStart), s.zoomable && s.zoomOnWheel && kt(o, Qr, this.onWheel, {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && kt(o, Xr, this.onDblclick), kt(t.ownerDocument, Fr, this.onCropMove), kt(t.ownerDocument, qr, this.onCropEnd), s.responsive && kt(window, Jr, this.onResize);
  }
}, Sd = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, s = this.container, o = this.containerData, n = s.offsetWidth / o.width, a = s.offsetHeight / o.height, u = Math.abs(n - 1) > Math.abs(a - 1) ? n : a;
      if (u !== 1) {
        var m, l;
        t.restore && (m = this.getCanvasData(), l = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(rt(m, function(v, f) {
          m[f] = v * u;
        })), this.setCropBoxData(rt(l, function(v, f) {
          l[f] = v * u;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Ys || this.setDragMode(sd(this.dragBox, or) ? Ks : Cr);
  },
  wheel: function(t) {
    var s = this, o = Number(this.options.wheelZoomRatio) || 0.1, n = 1;
    this.disabled || (t.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      s.wheeling = !1;
    }, 50), t.deltaY ? n = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? n = -t.wheelDelta / 120 : t.detail && (n = t.detail > 0 ? 1 : -1), this.zoom(-n * o, t)));
  },
  cropStart: function(t) {
    var s = t.buttons, o = t.button;
    if (!(this.disabled || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && // No primary button (Usually the left button)
    (K(s) && s !== 1 || K(o) && o !== 0 || t.ctrlKey))) {
      var n = this.options, a = this.pointers, u;
      t.changedTouches ? rt(t.changedTouches, function(m) {
        a[m.identifier] = Ae(m);
      }) : a[t.pointerId || 0] = Ae(t), Object.keys(a).length > 1 && n.zoomable && n.zoomOnTouch ? u = Us : u = ur(t.target, be), Xc.test(u) && re(this.element, cr, {
        originalEvent: t,
        action: u
      }) !== !1 && (t.preventDefault(), this.action = u, this.cropping = !1, u === zs && (this.cropping = !0, at(this.dragBox, je)));
    }
  },
  cropMove: function(t) {
    var s = this.action;
    if (!(this.disabled || !s)) {
      var o = this.pointers;
      t.preventDefault(), re(this.element, lr, {
        originalEvent: t,
        action: s
      }) !== !1 && (t.changedTouches ? rt(t.changedTouches, function(n) {
        Q(o[n.identifier] || {}, Ae(n, !0));
      }) : Q(o[t.pointerId || 0] || {}, Ae(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var s = this.action, o = this.pointers;
      t.changedTouches ? rt(t.changedTouches, function(n) {
        delete o[n.identifier];
      }) : delete o[t.pointerId || 0], s && (t.preventDefault(), Object.keys(o).length || (this.action = ""), this.cropping && (this.cropping = !1, te(this.dragBox, je, this.cropped && this.options.modal)), re(this.element, ar, {
        originalEvent: t,
        action: s
      }));
    }
  }
}, wd = {
  change: function(t) {
    var s = this.options, o = this.canvasData, n = this.containerData, a = this.cropBoxData, u = this.pointers, m = this.action, l = s.aspectRatio, v = a.left, f = a.top, b = a.width, S = a.height, $ = v + b, M = f + S, I = 0, T = 0, H = n.width, V = n.height, j = !0, z;
    !l && t.shiftKey && (l = b && S ? b / S : 1), this.limited && (I = a.minLeft, T = a.minTop, H = I + Math.min(n.width, o.width, o.left + o.width), V = T + Math.min(n.height, o.height, o.top + o.height));
    var X = u[Object.keys(u)[0]], k = {
      x: X.endX - X.startX,
      y: X.endY - X.startY
    }, N = function(ot) {
      switch (ot) {
        case Kt:
          $ + k.x > H && (k.x = H - $);
          break;
        case Yt:
          v + k.x < I && (k.x = I - v);
          break;
        case jt:
          f + k.y < T && (k.y = T - f);
          break;
        case Jt:
          M + k.y > V && (k.y = V - M);
          break;
      }
    };
    switch (m) {
      case Dr:
        v += k.x, f += k.y;
        break;
      case Kt:
        if (k.x >= 0 && ($ >= H || l && (f <= T || M >= V))) {
          j = !1;
          break;
        }
        N(Kt), b += k.x, b < 0 && (m = Yt, b = -b, v -= b), l && (S = b / l, f += (a.height - S) / 2);
        break;
      case jt:
        if (k.y <= 0 && (f <= T || l && (v <= I || $ >= H))) {
          j = !1;
          break;
        }
        N(jt), S -= k.y, f += k.y, S < 0 && (m = Jt, S = -S, f -= S), l && (b = S * l, v += (a.width - b) / 2);
        break;
      case Yt:
        if (k.x <= 0 && (v <= I || l && (f <= T || M >= V))) {
          j = !1;
          break;
        }
        N(Yt), b -= k.x, v += k.x, b < 0 && (m = Kt, b = -b, v -= b), l && (S = b / l, f += (a.height - S) / 2);
        break;
      case Jt:
        if (k.y >= 0 && (M >= V || l && (v <= I || $ >= H))) {
          j = !1;
          break;
        }
        N(Jt), S += k.y, S < 0 && (m = jt, S = -S, f -= S), l && (b = S * l, v += (a.width - b) / 2);
        break;
      case he:
        if (l) {
          if (k.y <= 0 && (f <= T || $ >= H)) {
            j = !1;
            break;
          }
          N(jt), S -= k.y, f += k.y, b = S * l;
        } else
          N(jt), N(Kt), k.x >= 0 ? $ < H ? b += k.x : k.y <= 0 && f <= T && (j = !1) : b += k.x, k.y <= 0 ? f > T && (S -= k.y, f += k.y) : (S -= k.y, f += k.y);
        b < 0 && S < 0 ? (m = ge, S = -S, b = -b, f -= S, v -= b) : b < 0 ? (m = fe, b = -b, v -= b) : S < 0 && (m = pe, S = -S, f -= S);
        break;
      case fe:
        if (l) {
          if (k.y <= 0 && (f <= T || v <= I)) {
            j = !1;
            break;
          }
          N(jt), S -= k.y, f += k.y, b = S * l, v += a.width - b;
        } else
          N(jt), N(Yt), k.x <= 0 ? v > I ? (b -= k.x, v += k.x) : k.y <= 0 && f <= T && (j = !1) : (b -= k.x, v += k.x), k.y <= 0 ? f > T && (S -= k.y, f += k.y) : (S -= k.y, f += k.y);
        b < 0 && S < 0 ? (m = pe, S = -S, b = -b, f -= S, v -= b) : b < 0 ? (m = he, b = -b, v -= b) : S < 0 && (m = ge, S = -S, f -= S);
        break;
      case ge:
        if (l) {
          if (k.x <= 0 && (v <= I || M >= V)) {
            j = !1;
            break;
          }
          N(Yt), b -= k.x, v += k.x, S = b / l;
        } else
          N(Jt), N(Yt), k.x <= 0 ? v > I ? (b -= k.x, v += k.x) : k.y >= 0 && M >= V && (j = !1) : (b -= k.x, v += k.x), k.y >= 0 ? M < V && (S += k.y) : S += k.y;
        b < 0 && S < 0 ? (m = he, S = -S, b = -b, f -= S, v -= b) : b < 0 ? (m = pe, b = -b, v -= b) : S < 0 && (m = fe, S = -S, f -= S);
        break;
      case pe:
        if (l) {
          if (k.x >= 0 && ($ >= H || M >= V)) {
            j = !1;
            break;
          }
          N(Kt), b += k.x, S = b / l;
        } else
          N(Jt), N(Kt), k.x >= 0 ? $ < H ? b += k.x : k.y >= 0 && M >= V && (j = !1) : b += k.x, k.y >= 0 ? M < V && (S += k.y) : S += k.y;
        b < 0 && S < 0 ? (m = fe, S = -S, b = -b, f -= S, v -= b) : b < 0 ? (m = ge, b = -b, v -= b) : S < 0 && (m = he, S = -S, f -= S);
        break;
      case Hs:
        this.move(k.x, k.y), j = !1;
        break;
      case Us:
        this.zoom(ad(u), t), j = !1;
        break;
      case zs:
        if (!k.x || !k.y) {
          j = !1;
          break;
        }
        z = Gs(this.cropper), v = X.startX - z.left, f = X.startY - z.top, b = a.minWidth, S = a.minHeight, k.x > 0 ? m = k.y > 0 ? pe : he : k.x < 0 && (v -= b, m = k.y > 0 ? ge : fe), k.y < 0 && (f -= S), this.cropped || ($t(this.cropBox, ht), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    j && (a.width = b, a.height = S, a.left = v, a.top = f, this.action = m, this.renderCropBox()), rt(u, function(G) {
      G.startX = G.endX, G.startY = G.endY;
    });
  }
}, _d = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && at(this.dragBox, je), $t(this.cropBox, ht), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  // Reset the image and crop box to their initial states
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = Q({}, this.initialImageData), this.canvasData = Q({}, this.initialCanvasData), this.cropBoxData = Q({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  // Clear the crop box
  clear: function() {
    return this.cropped && !this.disabled && (Q(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), $t(this.dragBox, je), at(this.cropBox, ht)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && t && (this.isImg && (this.element.src = t), s ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, rt(this.previews, function(o) {
      o.getElementsByTagName("img")[0].src = t;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, $t(this.cropper, Yr)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, at(this.cropper, Yr)), this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function() {
    var t = this.element;
    return t[J] ? (t[J] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this) : this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, o = this.canvasData, n = o.left, a = o.top;
    return this.moveTo(Fe(t) ? t : n + Number(t), Fe(s) ? s : a + Number(s));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, o = this.canvasData, n = !1;
    return t = Number(t), s = Number(s), this.ready && !this.disabled && this.options.movable && (K(t) && (o.left = t, n = !0), K(s) && (o.top = s, n = !0), n && this.renderCanvas(!0)), this;
  },
  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function(t, s) {
    var o = this.canvasData;
    return t = Number(t), t < 0 ? t = 1 / (1 - t) : t = 1 + t, this.zoomTo(o.width * t / o.naturalWidth, null, s);
  },
  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function(t, s, o) {
    var n = this.options, a = this.canvasData, u = a.width, m = a.height, l = a.naturalWidth, v = a.naturalHeight;
    if (t = Number(t), t >= 0 && this.ready && !this.disabled && n.zoomable) {
      var f = l * t, b = v * t;
      if (re(this.element, dr, {
        ratio: t,
        oldRatio: u / l,
        originalEvent: o
      }) === !1)
        return this;
      if (o) {
        var S = this.pointers, $ = Gs(this.cropper), M = S && Object.keys(S).length ? ld(S) : {
          pageX: o.pageX,
          pageY: o.pageY
        };
        a.left -= (f - u) * ((M.pageX - $.left - a.left) / u), a.top -= (b - m) * ((M.pageY - $.top - a.top) / m);
      } else
        Qt(s) && K(s.x) && K(s.y) ? (a.left -= (f - u) * ((s.x - a.left) / u), a.top -= (b - m) * ((s.y - a.top) / m)) : (a.left -= (f - u) / 2, a.top -= (b - m) / 2);
      a.width = f, a.height = b, this.renderCanvas(!0);
    }
    return this;
  },
  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function(t) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(t));
  },
  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function(t) {
    return t = Number(t), K(t) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function(t) {
    var s = this.imageData.scaleY;
    return this.scale(t, K(s) ? s : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function(t) {
    var s = this.imageData.scaleX;
    return this.scale(K(s) ? s : 1, t);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, o = this.imageData, n = !1;
    return t = Number(t), s = Number(s), this.ready && !this.disabled && this.options.scalable && (K(t) && (o.scaleX = t, n = !0), K(s) && (o.scaleY = s, n = !0), n && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, s = this.options, o = this.imageData, n = this.canvasData, a = this.cropBoxData, u;
    if (this.ready && this.cropped) {
      u = {
        x: a.left - n.left,
        y: a.top - n.top,
        width: a.width,
        height: a.height
      };
      var m = o.width / o.naturalWidth;
      if (rt(u, function(f, b) {
        u[b] = f / m;
      }), t) {
        var l = Math.round(u.y + u.height), v = Math.round(u.x + u.width);
        u.x = Math.round(u.x), u.y = Math.round(u.y), u.width = v - u.x, u.height = l - u.y;
      }
    } else
      u = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    return s.rotatable && (u.rotate = o.rotate || 0), s.scalable && (u.scaleX = o.scaleX || 1, u.scaleY = o.scaleY || 1), u;
  },
  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function(t) {
    var s = this.options, o = this.imageData, n = this.canvasData, a = {};
    if (this.ready && !this.disabled && Qt(t)) {
      var u = !1;
      s.rotatable && K(t.rotate) && t.rotate !== o.rotate && (o.rotate = t.rotate, u = !0), s.scalable && (K(t.scaleX) && t.scaleX !== o.scaleX && (o.scaleX = t.scaleX, u = !0), K(t.scaleY) && t.scaleY !== o.scaleY && (o.scaleY = t.scaleY, u = !0)), u && this.renderCanvas(!0, !0);
      var m = o.width / o.naturalWidth;
      K(t.x) && (a.left = t.x * m + n.left), K(t.y) && (a.top = t.y * m + n.top), K(t.width) && (a.width = t.width * m), K(t.height) && (a.height = t.height * m), this.setCropBoxData(a);
    }
    return this;
  },
  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function() {
    return this.ready ? Q({}, this.containerData) : {};
  },
  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function() {
    return this.sized ? Q({}, this.imageData) : {};
  },
  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function() {
    var t = this.canvasData, s = {};
    return this.ready && rt(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(o) {
      s[o] = t[o];
    }), s;
  },
  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function(t) {
    var s = this.canvasData, o = s.aspectRatio;
    return this.ready && !this.disabled && Qt(t) && (K(t.left) && (s.left = t.left), K(t.top) && (s.top = t.top), K(t.width) ? (s.width = t.width, s.height = t.width / o) : K(t.height) && (s.height = t.height, s.width = t.height * o), this.renderCanvas(!0)), this;
  },
  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function() {
    var t = this.cropBoxData, s;
    return this.ready && this.cropped && (s = {
      left: t.left,
      top: t.top,
      width: t.width,
      height: t.height
    }), s || {};
  },
  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function(t) {
    var s = this.cropBoxData, o = this.options.aspectRatio, n, a;
    return this.ready && this.cropped && !this.disabled && Qt(t) && (K(t.left) && (s.left = t.left), K(t.top) && (s.top = t.top), K(t.width) && t.width !== s.width && (n = !0, s.width = t.width), K(t.height) && t.height !== s.height && (a = !0, s.height = t.height), o && (n ? s.height = s.width / o : a && (s.width = s.height * o)), this.renderCropBox()), this;
  },
  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var s = this.canvasData, o = dd(this.image, this.imageData, s, t);
    if (!this.cropped)
      return o;
    var n = this.getData(), a = n.x, u = n.y, m = n.width, l = n.height, v = o.width / Math.floor(s.naturalWidth);
    v !== 1 && (a *= v, u *= v, m *= v, l *= v);
    var f = m / l, b = Vt({
      aspectRatio: f,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), S = Vt({
      aspectRatio: f,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), $ = Vt({
      aspectRatio: f,
      width: t.width || (v !== 1 ? o.width : m),
      height: t.height || (v !== 1 ? o.height : l)
    }), M = $.width, I = $.height;
    M = Math.min(b.width, Math.max(S.width, M)), I = Math.min(b.height, Math.max(S.height, I));
    var T = document.createElement("canvas"), H = T.getContext("2d");
    T.width = ee(M), T.height = ee(I), H.fillStyle = t.fillColor || "transparent", H.fillRect(0, 0, M, I);
    var V = t.imageSmoothingEnabled, j = V === void 0 ? !0 : V, z = t.imageSmoothingQuality;
    H.imageSmoothingEnabled = j, z && (H.imageSmoothingQuality = z);
    var X = o.width, k = o.height, N = a, G = u, ot, et, dt, vt, pt, gt;
    N <= -m || N > X ? (N = 0, ot = 0, dt = 0, pt = 0) : N <= 0 ? (dt = -N, N = 0, ot = Math.min(X, m + N), pt = ot) : N <= X && (dt = 0, ot = Math.min(m, X - N), pt = ot), ot <= 0 || G <= -l || G > k ? (G = 0, et = 0, vt = 0, gt = 0) : G <= 0 ? (vt = -G, G = 0, et = Math.min(k, l + G), gt = et) : G <= k && (vt = 0, et = Math.min(l, k - G), gt = et);
    var A = [N, G, ot, et];
    if (pt > 0 && gt > 0) {
      var R = M / m;
      A.push(dt * R, vt * R, pt * R, gt * R);
    }
    return H.drawImage.apply(H, [o].concat(Bs(A.map(function(O) {
      return Math.floor(ee(O));
    })))), T;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function(t) {
    var s = this.options;
    return !this.disabled && !Fe(t) && (s.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function(t) {
    var s = this.options, o = this.dragBox, n = this.face;
    if (this.ready && !this.disabled) {
      var a = t === Cr, u = s.movable && t === Ks;
      t = a || u ? t : Ys, s.dragMode = t, ye(o, be, t), te(o, or, a), te(o, ir, u), s.cropBoxMovable || (ye(n, be, t), te(n, or, a), te(n, ir, u));
    }
    return this;
  }
}, xd = It.Cropper, Qs = /* @__PURE__ */ function() {
  function r(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Nc(this, r), !t || !qc.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = Q({}, es, Qt(s) && s), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return jc(r, [{
    key: "init",
    value: function() {
      var s = this.element, o = s.tagName.toLowerCase(), n;
      if (!s[J]) {
        if (s[J] = this, o === "img") {
          if (this.isImg = !0, n = s.getAttribute("src") || "", this.originalUrl = n, !n)
            return;
          n = s.src;
        } else
          o === "canvas" && window.HTMLCanvasElement && (n = s.toDataURL());
        this.load(n);
      }
    }
  }, {
    key: "load",
    value: function(s) {
      var o = this;
      if (s) {
        this.url = s, this.imageData = {};
        var n = this.element, a = this.options;
        if (!a.rotatable && !a.scalable && (a.checkOrientation = !1), !a.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (Zc.test(s)) {
          Fc.test(s) ? this.read(fd(s)) : this.clone();
          return;
        }
        var u = new XMLHttpRequest(), m = this.clone.bind(this);
        this.reloading = !0, this.xhr = u, u.onabort = m, u.onerror = m, u.ontimeout = m, u.onprogress = function() {
          u.getResponseHeader("content-type") !== ts && u.abort();
        }, u.onload = function() {
          o.read(u.response);
        }, u.onloadend = function() {
          o.reloading = !1, o.xhr = null;
        }, a.checkCrossOrigin && ss(s) && n.crossOrigin && (s = os(s)), u.open("GET", s, !0), u.responseType = "arraybuffer", u.withCredentials = n.crossOrigin === "use-credentials", u.send();
      }
    }
  }, {
    key: "read",
    value: function(s) {
      var o = this.options, n = this.imageData, a = gd(s), u = 0, m = 1, l = 1;
      if (a > 1) {
        this.url = pd(s, ts);
        var v = md(a);
        u = v.rotate, m = v.scaleX, l = v.scaleY;
      }
      o.rotatable && (n.rotate = u), o.scalable && (n.scaleX = m, n.scaleY = l), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var s = this.element, o = this.url, n = s.crossOrigin, a = o;
      this.options.checkCrossOrigin && ss(o) && (n || (n = "anonymous"), a = os(o)), this.crossOrigin = n, this.crossOriginUrl = a;
      var u = document.createElement("img");
      n && (u.crossOrigin = n), u.src = a || o, u.alt = s.alt || "The image to crop", this.image = u, u.onload = this.start.bind(this), u.onerror = this.stop.bind(this), at(u, Wr), s.parentNode.insertBefore(u, s.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var s = this, o = this.image;
      o.onload = null, o.onerror = null, this.sizing = !0;
      var n = It.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(It.navigator.userAgent), a = function(v, f) {
        Q(s.imageData, {
          naturalWidth: v,
          naturalHeight: f,
          aspectRatio: v / f
        }), s.initialImageData = Q({}, s.imageData), s.sizing = !1, s.sized = !0, s.build();
      };
      if (o.naturalWidth && !n) {
        a(o.naturalWidth, o.naturalHeight);
        return;
      }
      var u = document.createElement("img"), m = document.body || document.documentElement;
      this.sizingImage = u, u.onload = function() {
        a(u.width, u.height), n || m.removeChild(u);
      }, u.src = o.src, n || (u.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", m.appendChild(u));
    }
  }, {
    key: "stop",
    value: function() {
      var s = this.image;
      s.onload = null, s.onerror = null, s.parentNode.removeChild(s), this.image = null;
    }
  }, {
    key: "build",
    value: function() {
      if (!(!this.sized || this.ready)) {
        var s = this.element, o = this.options, n = this.image, a = s.parentNode, u = document.createElement("div");
        u.innerHTML = Gc;
        var m = u.querySelector(".".concat(J, "-container")), l = m.querySelector(".".concat(J, "-canvas")), v = m.querySelector(".".concat(J, "-drag-box")), f = m.querySelector(".".concat(J, "-crop-box")), b = f.querySelector(".".concat(J, "-face"));
        this.container = a, this.cropper = m, this.canvas = l, this.dragBox = v, this.cropBox = f, this.viewBox = m.querySelector(".".concat(J, "-view-box")), this.face = b, l.appendChild(n), at(s, ht), a.insertBefore(m, s.nextSibling), $t(n, Wr), this.initPreview(), this.bind(), o.initialAspectRatio = Math.max(0, o.initialAspectRatio) || NaN, o.aspectRatio = Math.max(0, o.aspectRatio) || NaN, o.viewMode = Math.max(0, Math.min(3, Math.round(o.viewMode))) || 0, at(f, ht), o.guides || at(f.getElementsByClassName("".concat(J, "-dashed")), ht), o.center || at(f.getElementsByClassName("".concat(J, "-center")), ht), o.background && at(m, "".concat(J, "-bg")), o.highlight || at(b, Uc), o.cropBoxMovable && (at(b, ir), ye(b, be, Dr)), o.cropBoxResizable || (at(f.getElementsByClassName("".concat(J, "-line")), ht), at(f.getElementsByClassName("".concat(J, "-point")), ht)), this.render(), this.ready = !0, this.setDragMode(o.dragMode), o.autoCrop && this.crop(), this.setData(o.data), ut(o.ready) && yt(s, Gr, o.ready, {
          once: !0
        }), re(s, Gr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var s = this.cropper.parentNode;
        s && s.removeChild(this.cropper), $t(this.element, ht);
      }
    }
  }, {
    key: "uncreate",
    value: function() {
      this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
    }
    /**
     * Get the no conflict cropper class.
     * @returns {Cropper} The cropper class.
     */
  }], [{
    key: "noConflict",
    value: function() {
      return window.Cropper = xd, r;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(s) {
      Q(es, Qt(s) && s);
    }
  }]), r;
}();
Q(Qs.prototype, vd, bd, yd, Sd, wd, _d);
const kd = { class: "flex" }, Dd = ["aria-label"], Cd = { class: "ml-auto mb-2" }, Ed = { class: "w-full flex justify-center" }, Md = ["src"], Td = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, { t: o } = P("i18n"), { apiUrl: n } = At(), a = L(null), u = L(null), m = L(!1), l = L(""), v = L(!1), f = () => {
      m.value = !m.value, m.value ? u.value = new Qs(a.value, {
        crop($) {
        }
      }) : u.value.destroy();
    }, b = P("postData"), S = () => {
      u.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        ($) => {
          l.value = "", v.value = !1, Pe(n.value, {
            method: "POST",
            params: Object.assign(b, {
              q: "upload",
              adapter: s.selection.adapter,
              path: s.selection.item.path,
              file: $
            }),
            name: s.selection.item.basename,
            json: !1
          }).then((M) => {
            l.value = o("Updated."), a.value.src = tr(s.selection.adapter, s.selection.item.path), f(), t("load");
          }).catch((M) => {
            l.value = o(M.message), v.value = !0;
          });
        }
      );
    };
    return Et(() => {
      t("load");
    }), ($, M) => (w(), C(lt, null, [
      p("div", kd, [
        p("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, Dd),
        p("div", Cd, [
          m.value ? (w(), C("button", {
            key: 0,
            onClick: S,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(o)("Crop")), 1)) : Z("", !0),
          p("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: M[0] || (M[0] = (I) => f())
          }, E(m.value ? x(o)("Cancel") : x(o)("Edit")), 1)
        ])
      ]),
      p("div", Ed, [
        p("img", {
          ref_key: "image",
          ref: a,
          class: "max-w-[50vh] max-h-[50vh]",
          src: x(tr)(s.selection.adapter, s.selection.item.path),
          alt: ""
        }, null, 8, Md)
      ]),
      l.value.length ? (w(), q(Ot, {
        key: 0,
        onHidden: M[1] || (M[1] = (I) => l.value = ""),
        error: v.value
      }, {
        default: F(() => [
          st(E(l.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : Z("", !0)
    ], 64));
  }
}, $d = { class: "flex" }, Id = ["aria-label"], Ad = /* @__PURE__ */ p("div", null, null, -1), Ld = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    return Et(() => {
      t("load");
    }), (s, o) => (w(), C(lt, null, [
      p("div", $d, [
        p("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, Id)
      ]),
      Ad
    ], 64));
  }
}, Od = ["aria-label"], Pd = {
  class: "w-full",
  preload: "",
  controls: ""
}, Nd = ["src"], jd = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, { apiUrl: o } = At(), n = () => o.value + "?" + Ft({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return Et(() => {
      t("load");
    }), (a, u) => (w(), C(lt, null, [
      p("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Od),
      p("div", null, [
        p("video", Pd, [
          p("source", {
            src: n(),
            type: "video/mp4"
          }, null, 8, Nd),
          st(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, Rd = ["aria-label"], Vd = {
  class: "w-full",
  controls: ""
}, Bd = ["src"], zd = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, { apiUrl: o } = At(), n = () => o.value + "?" + Ft({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return Et(() => {
      t("load");
    }), (a, u) => (w(), C(lt, null, [
      p("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Rd),
      p("div", null, [
        p("audio", Vd, [
          p("source", {
            src: n(),
            type: "audio/mpeg"
          }, null, 8, Bd),
          st(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, Hd = ["aria-label"], Ud = ["data"], Kd = ["src"], Yd = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, { apiUrl: o } = At(), n = () => o.value + "?" + Ft({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return Et(() => {
      t("load");
    }), (a, u) => (w(), C(lt, null, [
      p("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Hd),
      p("div", null, [
        p("object", {
          class: "h-[60vh]",
          data: n(),
          type: "application/pdf",
          width: "100%",
          height: "100%"
        }, [
          p("iframe", {
            class: "border-0",
            src: n(),
            width: "100%",
            height: "100%"
          }, `\r
          <p>\r
            Your browser does not support PDFs.\r
            <a href="https://example.com/test.pdf">Download the PDF</a>\r
            .\r
          </p>\r
        `, 8, Kd)
        ], 8, Ud)
      ])
    ], 64));
  }
}, Wd = { class: "sm:flex sm:items-start" }, Xd = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, Zd = { class: "text-gray-700 dark:text-gray-200 text-sm" }, Fd = {
  key: 0,
  class: "flex leading-5"
}, qd = /* @__PURE__ */ p("svg", {
  class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ p("circle", {
    class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }),
  /* @__PURE__ */ p("path", {
    class: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })
], -1), Gd = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, Jd = { class: "font-bold pl-2" }, Qd = { class: "font-bold pl-2" }, tu = {
  name: "VFModalPreview"
}, eu = /* @__PURE__ */ Object.assign(tu, {
  props: {
    selection: Object
  },
  setup(r) {
    const t = r, { apiUrl: s } = At(), o = P("emitter"), { t: n } = P("i18n"), a = L(!1), u = (v) => a.value = v, m = (v) => (t.selection.item.mime_type ?? "").startsWith(v), l = () => {
      const v = s.value + "?" + Ft({ q: "download", adapter: t.selection.adapter, path: t.selection.item.path });
      o.emit("vf-download", v);
    };
    return (v, f) => (w(), q(Lt, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: f[6] || (f[6] = (b) => x(o).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Close")), 1),
        p("button", {
          type: "button",
          onClick: f[7] || (f[7] = (b) => l()),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Download")), 1)
      ]),
      default: F(() => [
        p("div", Wd, [
          p("div", Xd, [
            p("div", null, [
              m("text") ? (w(), q(Pc, {
                key: 0,
                selection: r.selection,
                onLoad: f[0] || (f[0] = (b) => u(!0))
              }, null, 8, ["selection"])) : m("image") ? (w(), q(Td, {
                key: 1,
                selection: r.selection,
                onLoad: f[1] || (f[1] = (b) => u(!0))
              }, null, 8, ["selection"])) : m("video") ? (w(), q(jd, {
                key: 2,
                selection: r.selection,
                onLoad: f[2] || (f[2] = (b) => u(!0))
              }, null, 8, ["selection"])) : m("audio") ? (w(), q(zd, {
                key: 3,
                selection: r.selection,
                onLoad: f[3] || (f[3] = (b) => u(!0))
              }, null, 8, ["selection"])) : m("application/pdf") ? (w(), q(Yd, {
                key: 4,
                selection: r.selection,
                onLoad: f[4] || (f[4] = (b) => u(!0))
              }, null, 8, ["selection"])) : (w(), q(Ld, {
                key: 5,
                selection: r.selection,
                onLoad: f[5] || (f[5] = (b) => u(!0))
              }, null, 8, ["selection"]))
            ]),
            p("div", Zd, [
              a.value == !1 ? (w(), C("div", Fd, [
                qd,
                p("span", null, E(x(n)("Loading")), 1)
              ])) : Z("", !0)
            ])
          ])
        ]),
        p("div", Gd, [
          p("div", null, [
            p("span", Jd, E(x(n)("File Size")) + ": ", 1),
            st(E(x(cs)(r.selection.item.file_size)), 1)
          ]),
          p("div", null, [
            p("span", Qd, E(x(n)("Last Modified")) + ": ", 1),
            st(" " + E(x(ds)(r.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ru = { class: "sm:flex sm:items-start" }, su = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-200 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-indigo-500 dark:stroke-indigo-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    })
  ])
], -1), ou = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, iu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, nu = { class: "mt-2" }, au = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, lu = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-indigo-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, cu = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), du = [
  cu
], uu = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, hu = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), fu = [
  hu
], pu = { class: "ml-1.5" }, gu = ["onKeyup"], mu = {
  name: "VFModalRename"
}, vu = /* @__PURE__ */ Object.assign(mu, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: n } = P("i18n"), a = L(t.selection.items[0]), u = L(t.selection.items[0].basename), m = L(""), l = () => {
      u.value != "" && s.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: o.value,
          path: t.current.dirname,
          item: a.value.path,
          name: u.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: n("%s is renamed.", u.value) });
        },
        onError: (v) => {
          m.value = n(v.message);
        }
      });
    };
    return (v, f) => (w(), q(Lt, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: l,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Rename")), 1),
        p("button", {
          type: "button",
          onClick: f[2] || (f[2] = (b) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", ru, [
          su,
          p("div", ou, [
            p("h3", iu, E(x(n)("Rename")), 1),
            p("div", nu, [
              p("p", au, [
                a.value.type == "dir" ? (w(), C("svg", lu, du)) : (w(), C("svg", uu, fu)),
                p("span", pu, E(a.value.basename), 1)
              ]),
              Ct(p("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (b) => u.value = b),
                onKeyup: oe(l, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, gu), [
                [ie, u.value]
              ]),
              m.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: f[1] || (f[1] = (b) => m.value = ""),
                error: ""
              }, {
                default: F(() => [
                  st(E(m.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), bu = { class: "sm:flex sm:items-start" }, yu = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-200 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-indigo-500 dark:stroke-indigo-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    })
  ])
], -1), Su = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, wu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, _u = { class: "mt-2" }, xu = { class: "text-gray-500 mb-1" }, ku = ["id"], Du = {
  key: 0,
  class: "py-2"
}, Cu = ["disabled", "onClick"], Eu = {
  name: "VFModalUpload"
}, Mu = /* @__PURE__ */ Object.assign(Eu, {
  props: {
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter"), { apiUrl: o } = At(), { t: n } = P("i18n"), a = P("maxFileSize"), u = L(null), m = L(null), l = L(null), v = L([]), f = L(""), b = L(!0), S = () => {
      f.value = "", u.value.start();
    }, $ = P("postData");
    return Et(() => {
      u.value = new ue.Uploader({
        runtimes: "html5",
        browse_button: l.value,
        container: m.value,
        max_file_size: a,
        multiple_queues: !0,
        file_data_name: "file",
        url: o.value + "?" + Ft(Object.assign($, { q: "upload", adapter: t.current.adapter, path: t.current.dirname })),
        // filters : [
        // 	{title : "Image files", extensions : "jpg,gif,png,jpeg"},
        // 	{title : "Zip files", extensions : "zip"}
        // ],
        headers: {
          ...Oe && { "X-CSRF-Token": Oe }
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function(M, I) {
            b.value = !1, ue.each(I, function(T) {
              v.value.push({
                id: T.id,
                name: T.name,
                size: ue.formatSize(T.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(M, I) {
            v.value[v.value.findIndex((T) => T.id == I.id)].percent = I.percent + "%";
          },
          UploadComplete: function() {
            b.value = !0, s.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: t.current.dirname } });
          },
          Error: function(M, I) {
            u.value.stop(), I.code == ue.HTTP_ERROR ? f.value = n(JSON.parse(I.response).message) : I.code == ue.FILE_SIZE_ERROR ? f.value = n("The selected file exceeds the maximum file size. You cannot upload files greater than %s", [a]) : f.value = n(I.message);
          }
        }
      }), u.value.init();
    }), (M, I) => (w(), q(Lt, null, {
      buttons: F(() => [
        p("button", {
          disabled: b.value,
          onClick: Wt(S, ["prevent"]),
          type: "button",
          class: ct([b.value ? "bg-indigo-200 hover:bg-indigo-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500", "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"])
        }, E(x(n)("Upload")), 11, Cu),
        p("button", {
          type: "button",
          onClick: I[1] || (I[1] = (T) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", bu, [
          yu,
          p("div", Su, [
            p("h3", wu, E(x(n)("Upload files")), 1),
            p("div", _u, [
              p("div", xu, [
                (w(!0), C(lt, null, St(v.value, (T) => (w(), C("div", null, [
                  p("div", {
                    id: T.id
                  }, [
                    st(E(T.name) + " ( " + E(T.size) + ") ", 1),
                    p("b", null, E(T.percent), 1)
                  ], 8, ku)
                ]))), 256)),
                v.value.length ? Z("", !0) : (w(), C("div", Du, E(x(n)("No files selected!")), 1))
              ]),
              p("div", {
                class: "text-gray-500",
                ref_key: "container",
                ref: m
              }, [
                p("button", {
                  ref_key: "pickFiles",
                  ref: l,
                  type: "button",
                  class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                }, E(x(n)("Select Files")), 513)
              ], 512),
              f.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: I[0] || (I[0] = (T) => f.value = ""),
                error: ""
              }, {
                default: F(() => [
                  st(E(f.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Tu = { class: "sm:flex sm:items-start" }, $u = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-200 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-indigo-500 dark:stroke-indigo-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), Iu = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Au = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Lu = { class: "mt-2" }, Ou = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Pu = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-indigo-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Nu = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ju = [
  Nu
], Ru = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Vu = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Bu = [
  Vu
], zu = { class: "ml-1.5" }, Hu = ["onKeyup", "placeholder"], Uu = {
  name: "VFModalArchive"
}, Ku = /* @__PURE__ */ Object.assign(Uu, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: n } = P("i18n"), a = L(""), u = L(""), m = L(t.selection.items), l = () => {
      m.value.length && s.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: o.value,
          path: t.current.dirname,
          items: JSON.stringify(m.value.map(({ path: v, type: f }) => ({ path: v, type: f }))),
          name: a.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: n("The file(s) archived.") });
        },
        onError: (v) => {
          u.value = n(v.message);
        }
      });
    };
    return (v, f) => (w(), q(Lt, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: l,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Archive")), 1),
        p("button", {
          type: "button",
          onClick: f[2] || (f[2] = (b) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", Tu, [
          $u,
          p("div", Iu, [
            p("h3", Au, E(x(n)("Archive the files")), 1),
            p("div", Lu, [
              (w(!0), C(lt, null, St(m.value, (b) => (w(), C("p", Ou, [
                b.type == "dir" ? (w(), C("svg", Pu, ju)) : (w(), C("svg", Ru, Bu)),
                p("span", zu, E(b.basename), 1)
              ]))), 256)),
              Ct(p("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (b) => a.value = b),
                onKeyup: oe(l, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(n)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, Hu), [
                [ie, a.value]
              ]),
              u.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: f[1] || (f[1] = (b) => u.value = ""),
                error: ""
              }, {
                default: F(() => [
                  st(E(u.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Yu = { class: "sm:flex sm:items-start" }, Wu = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-200 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-indigo-500 dark:stroke-indigo-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), Xu = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Zu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Fu = { class: "mt-2" }, qu = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Gu = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-indigo-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ju = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Qu = [
  Ju
], th = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, eh = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), rh = [
  eh
], sh = { class: "ml-1.5" }, oh = { class: "my-1 text-sm text-gray-500" }, ih = {
  name: "VFModalUnarchive"
}, nh = /* @__PURE__ */ Object.assign(ih, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: n } = P("i18n");
    L("");
    const a = L(t.selection.items[0]), u = L(""), m = L([]), l = () => {
      s.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: o.value,
          path: t.current.dirname,
          item: a.value.path
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: n("The file unarchived.") });
        },
        onError: (v) => {
          u.value = n(v.message);
        }
      });
    };
    return (v, f) => (w(), q(Lt, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: l,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Unarchive")), 1),
        p("button", {
          type: "button",
          onClick: f[1] || (f[1] = (b) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", Yu, [
          Wu,
          p("div", Xu, [
            p("h3", Zu, E(x(n)("Unarchive")), 1),
            p("div", Fu, [
              (w(!0), C(lt, null, St(m.value, (b) => (w(), C("p", qu, [
                b.type == "dir" ? (w(), C("svg", Gu, Qu)) : (w(), C("svg", th, rh)),
                p("span", sh, E(b.basename), 1)
              ]))), 256)),
              p("p", oh, E(x(n)("The archive will be unarchived at")) + " (" + E(r.current.dirname) + ")", 1),
              u.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: f[0] || (f[0] = (b) => u.value = ""),
                error: ""
              }, {
                default: F(() => [
                  st(E(u.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ah = { class: "sm:flex sm:items-start" }, lh = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ])
], -1), ch = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, dh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, uh = { class: "mt-2" }, hh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, fh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-indigo-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ph = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), gh = [
  ph
], mh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, vh = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), bh = [
  vh
], yh = { class: "ml-1.5" }, Sh = { class: "text-sm text-gray-500 pb-1 pt-3" }, wh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, _h = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-indigo-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  })
], -1), xh = { class: "ml-1.5 overflow-auto" }, kh = {
  name: "VFModalMove"
}, Dh = /* @__PURE__ */ Object.assign(kh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter"), { t: o } = P("i18n");
    P("storage");
    const n = P("adapter"), a = L(t.selection.items.from), u = L(""), m = () => {
      a.value.length && s.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: n.value,
          path: t.current.dirname,
          items: JSON.stringify(a.value.map(({ path: l, type: v }) => ({ path: l, type: v }))),
          item: t.selection.items.to.path
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: o("Files moved.", t.selection.items.to.name) });
        },
        onError: (l) => {
          u.value = o(l.message);
        }
      });
    };
    return (l, v) => (w(), q(Lt, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Yes, Move!")), 1),
        p("button", {
          type: "button",
          onClick: v[1] || (v[1] = (f) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", ah, [
          lh,
          p("div", ch, [
            p("h3", dh, E(x(o)("Move files")), 1),
            p("div", uh, [
              (w(!0), C(lt, null, St(a.value, (f) => (w(), C("p", hh, [
                f.type == "dir" ? (w(), C("svg", fh, gh)) : (w(), C("svg", mh, bh)),
                p("span", yh, E(f.path), 1)
              ]))), 256)),
              p("p", Sh, E(x(o)("Are you sure you want to move these files?")), 1),
              p("p", wh, [
                _h,
                p("span", xh, E(r.selection.items.to.path), 1)
              ]),
              u.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: v[0] || (v[0] = (f) => u.value = ""),
                error: ""
              }, {
                default: F(() => [
                  st(E(u.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalArchive: Ku,
  ModalDelete: sc,
  ModalMessage: uc,
  ModalMove: Dh,
  ModalNewFile: Tc,
  ModalNewFolder: Sc,
  ModalPreview: eu,
  ModalRename: vu,
  ModalUnarchive: nh,
  ModalUpload: Mu
}, Symbol.toStringTag, { value: "Module" })), Ge = {
  VueFinder: Il,
  ...Ch
};
const Th = {
  install(r) {
    for (const t in Ge)
      if (Ge.hasOwnProperty(t)) {
        const s = Ge[t];
        r.component(s.name, s);
      }
  }
};
export {
  Th as default
};
