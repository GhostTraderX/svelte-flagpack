var yt = Object.defineProperty;
var Ue = (e) => {
  throw TypeError(e);
};
var St = (e, t, n) => t in e ? yt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var D = (e, t, n) => St(e, typeof t != "symbol" ? t + "" : t, n), Te = (e, t, n) => t.has(e) || Ue("Cannot " + n);
var v = (e, t, n) => (Te(e, t, "read from private field"), n ? n.call(e) : t.get(e)), z = (e, t, n) => t.has(e) ? Ue("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), W = (e, t, n, r) => (Te(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), B = (e, t, n) => (Te(e, t, "access private method"), n);
var Ge;
typeof window < "u" && ((Ge = window.__svelte ?? (window.__svelte = {})).v ?? (Ge.v = /* @__PURE__ */ new Set())).add("5");
const kt = 2, Se = Symbol(), Tt = "http://www.w3.org/1999/xhtml", Ne = !1;
var At = Array.prototype.indexOf, Nt = Object.getOwnPropertyDescriptors, Rt = Object.getPrototypeOf;
function Ct(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ke() {
  var e, t, n = new Promise((r, l) => {
    e = r, t = l;
  });
  return { promise: n, resolve: e, reject: t };
}
const b = 2, pe = 4, Ie = 8, We = 1 << 24, ie = 16, ce = 32, fe = 64, Ze = 128, k = 512, m = 1024, y = 2048, P = 4096, Q = 8192, O = 16384, Je = 32768, Be = 65536, Qe = 1 << 18, Oe = 1 << 19, zt = 1 << 20, H = 32768, Re = 1 << 21, Xe = 1 << 22, M = 1 << 23, Ft = Symbol(""), Z = new class extends Error {
  constructor() {
    super(...arguments);
    D(this, "name", "StaleReactionError");
    D(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Dt() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function It() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function $e(e) {
  return e === this.v;
}
let Ot = !1, F = null;
function he(e) {
  F = e;
}
function Mt(e, t = !1, n) {
  F = {
    p: F,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Lt(e) {
  var t = (
    /** @type {ComponentContext} */
    F
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      sn(r);
  }
  return t.i = !0, F = t.p, /** @type {T} */
  {};
}
function Pt() {
  return !0;
}
let J = [];
function Ut() {
  var e = J;
  J = [], Ct(e);
}
function Bt(e) {
  if (J.length === 0) {
    var t = J;
    queueMicrotask(() => {
      t === J && Ut();
    });
  }
  J.push(e);
}
function jt(e) {
  var t = h;
  if (t === null)
    return u.f |= M, e;
  if ((t.f & Je) === 0) {
    if ((t.f & Ze) === 0)
      throw e;
    t.b.error(e);
  } else
    ge(e, t);
}
function ge(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ze) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e;
}
const qt = -7169;
function x(e, t) {
  e.f = e.f & qt | t;
}
function Me(e) {
  (e.f & k) !== 0 || e.deps === null ? x(e, m) : x(e, P);
}
function et(e) {
  if (e !== null)
    for (const t of e)
      (t.f & b) === 0 || (t.f & H) === 0 || (t.f ^= H, et(
        /** @type {Derived} */
        t.deps
      ));
}
function Yt(e, t, n) {
  (e.f & y) !== 0 ? t.add(e) : (e.f & P) !== 0 && n.add(e), et(e.deps), x(e, m);
}
const _e = /* @__PURE__ */ new Set();
let _ = null, g = null, C = [], Le = null, Ce = !1;
var X, $, q, Y, ue, ee, te, A, ze, Fe, tt, nt;
const ye = class ye {
  constructor() {
    z(this, A);
    D(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    D(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    D(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    z(this, X, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    z(this, $, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    z(this, q, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    z(this, Y, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    z(this, ue, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    z(this, ee, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    z(this, te, /* @__PURE__ */ new Set());
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    D(this, "skipped_effects", /* @__PURE__ */ new Set());
    D(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || v(this, Y) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var l;
    C = [], this.apply();
    var n = [], r = [];
    for (const s of t)
      B(this, A, ze).call(this, s, n, r);
    this.is_fork || B(this, A, tt).call(this), this.is_deferred() ? (B(this, A, Fe).call(this, r), B(this, A, Fe).call(this, n)) : (_ = null, je(r), je(n), (l = v(this, ue)) == null || l.resolve()), g = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== Se && !this.previous.has(t) && this.previous.set(t, n), (t.f & M) === 0 && (this.current.set(t, t.v), g == null || g.set(t, t.v));
  }
  activate() {
    _ = this, this.apply();
  }
  deactivate() {
    _ === this && (_ = null, g = null);
  }
  flush() {
    if (this.activate(), C.length > 0) {
      if (Vt(), _ !== null && _ !== this)
        return;
    } else v(this, q) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of v(this, $)) t(this);
    v(this, $).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    W(this, q, v(this, q) + 1), t && W(this, Y, v(this, Y) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    W(this, q, v(this, q) - 1), t && W(this, Y, v(this, Y) - 1), this.revive();
  }
  revive() {
    for (const t of v(this, ee))
      v(this, te).delete(t), x(t, y), ne(t);
    for (const t of v(this, te))
      x(t, P), ne(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    v(this, X).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    v(this, $).add(t);
  }
  settled() {
    return (v(this, ue) ?? W(this, ue, Ke())).promise;
  }
  static ensure() {
    if (_ === null) {
      const t = _ = new ye();
      _e.add(_), ye.enqueue(() => {
        _ === t && t.flush();
      });
    }
    return _;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Bt(t);
  }
  apply() {
  }
};
X = new WeakMap(), $ = new WeakMap(), q = new WeakMap(), Y = new WeakMap(), ue = new WeakMap(), ee = new WeakMap(), te = new WeakMap(), A = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
ze = function(t, n, r) {
  t.f ^= m;
  for (var l = t.first, s = null; l !== null; ) {
    var i = l.f, o = (i & (ce | fe)) !== 0, f = o && (i & m) !== 0, a = f || (i & Q) !== 0 || this.skipped_effects.has(l);
    if (!a && l.fn !== null) {
      o ? l.f ^= m : s !== null && (i & (pe | Ie | We)) !== 0 ? s.b.defer_effect(l) : (i & pe) !== 0 ? n.push(l) : ve(l) && ((i & ie) !== 0 && v(this, ee).add(l), ae(l));
      var c = l.first;
      if (c !== null) {
        l = c;
        continue;
      }
    }
    var d = l.parent;
    for (l = l.next; l === null && d !== null; )
      d === s && (s = null), l = d.next, d = d.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Fe = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Yt(t[n], v(this, ee), v(this, te));
}, tt = function() {
  if (v(this, Y) === 0) {
    for (const t of v(this, X)) t();
    v(this, X).clear();
  }
  v(this, q) === 0 && B(this, A, nt).call(this);
}, nt = function() {
  var l;
  if (_e.size > 1) {
    this.previous.clear();
    var t = g, n = !0;
    for (const s of _e) {
      if (s === this) {
        n = !1;
        continue;
      }
      const i = [];
      for (const [f, a] of this.current) {
        if (s.current.has(f))
          if (n && a !== s.current.get(f))
            s.current.set(f, a);
          else
            continue;
        i.push(f);
      }
      if (i.length === 0)
        continue;
      const o = [...s.current.keys()].filter((f) => !this.current.has(f));
      if (o.length > 0) {
        var r = C;
        C = [];
        const f = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
        for (const c of i)
          rt(c, o, f, a);
        if (C.length > 0) {
          _ = s, s.apply();
          for (const c of C)
            B(l = s, A, ze).call(l, c, [], []);
          s.deactivate();
        }
        C = r;
      }
    }
    _ = null, g = t;
  }
  this.committed = !0, _e.delete(this);
};
let be = ye;
function Vt() {
  var e = V;
  Ce = !0;
  var t = null;
  try {
    var n = 0;
    for (me(!0); C.length > 0; ) {
      var r = be.ensure();
      if (n++ > 1e3) {
        var l, s;
        Ht();
      }
      r.process(C), L.clear();
    }
  } finally {
    Ce = !1, me(e), Le = null;
  }
}
function Ht() {
  try {
    It();
  } catch (e) {
    ge(e, Le);
  }
}
let R = null;
function je(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (O | Q)) === 0 && ve(r) && (R = /* @__PURE__ */ new Set(), ae(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? pt(r) : r.fn = null), (R == null ? void 0 : R.size) > 0)) {
        L.clear();
        for (const l of R) {
          if ((l.f & (O | Q)) !== 0) continue;
          const s = [l];
          let i = l.parent;
          for (; i !== null; )
            R.has(i) && (R.delete(i), s.push(i)), i = i.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const f = s[o];
            (f.f & (O | Q)) === 0 && ae(f);
          }
        }
        R.clear();
      }
    }
    R = null;
  }
}
function rt(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const l of e.reactions) {
      const s = l.f;
      (s & b) !== 0 ? rt(
        /** @type {Derived} */
        l,
        t,
        n,
        r
      ) : (s & (Xe | ie)) !== 0 && (s & y) === 0 && lt(l, t, r) && (x(l, y), ne(
        /** @type {Effect} */
        l
      ));
    }
}
function lt(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const l of e.deps) {
      if (t.includes(l))
        return !0;
      if ((l.f & b) !== 0 && lt(
        /** @type {Derived} */
        l,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          l,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function ne(e) {
  for (var t = Le = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Ce && t === h && (n & ie) !== 0 && (n & Qe) === 0)
      return;
    if ((n & (fe | ce)) !== 0) {
      if ((n & m) === 0) return;
      t.f ^= m;
    }
  }
  C.push(t);
}
function Gt(e, t, n, r) {
  const l = st;
  if (n.length === 0 && e.length === 0) {
    r(t.map(l));
    return;
  }
  var s = _, i = (
    /** @type {Effect} */
    h
  ), o = Kt();
  function f() {
    Promise.all(n.map((a) => /* @__PURE__ */ Wt(a))).then((a) => {
      o();
      try {
        r([...t.map(l), ...a]);
      } catch (c) {
        (i.f & O) === 0 && ge(c, i);
      }
      s == null || s.deactivate(), we();
    }).catch((a) => {
      ge(a, i);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    o();
    try {
      return f();
    } finally {
      s == null || s.deactivate(), we();
    }
  }) : f();
}
function Kt() {
  var e = h, t = u, n = F, r = _;
  return function(s = !0) {
    se(e), le(t), he(n), s && (r == null || r.activate());
  };
}
function we() {
  se(null), le(null), he(null);
}
// @__NO_SIDE_EFFECTS__
function st(e) {
  var t = b | y, n = u !== null && (u.f & b) !== 0 ? (
    /** @type {Derived} */
    u
  ) : null;
  return h !== null && (h.f |= Oe), {
    ctx: F,
    deps: null,
    effects: null,
    equals: $e,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Se
    ),
    wv: 0,
    parent: n ?? h,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Wt(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    h
  );
  r === null && Dt();
  var l = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Jt(
    /** @type {V} */
    Se
  ), o = !u, f = /* @__PURE__ */ new Map();
  return on(() => {
    var U;
    var a = Ke();
    s = a.promise;
    try {
      Promise.resolve(e()).then(a.resolve, a.reject).then(() => {
        c === _ && c.committed && c.deactivate(), we();
      });
    } catch (N) {
      a.reject(N), we();
    }
    var c = (
      /** @type {Batch} */
      _
    );
    if (o) {
      var d = l.is_rendered();
      l.update_pending_count(1), c.increment(d), (U = f.get(c)) == null || U.reject(Z), f.delete(c), f.set(c, a);
    }
    const p = (N, G = void 0) => {
      if (c.activate(), G)
        G !== Z && (i.f |= M, qe(i, G));
      else {
        (i.f & M) !== 0 && (i.f ^= M), qe(i, N);
        for (const [K, Et] of f) {
          if (f.delete(K), K === c) break;
          Et.reject(Z);
        }
      }
      o && (l.update_pending_count(-1), c.decrement(d));
    };
    a.promise.then(p, (N) => p(null, N || "unknown"));
  }), ln(() => {
    for (const a of f.values())
      a.reject(Z);
  }), new Promise((a) => {
    function c(d) {
      function p() {
        d === s ? a(i) : c(s);
      }
      d.then(p, p);
    }
    c(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Ae(e) {
  const t = /* @__PURE__ */ st(e);
  return dn(t), t;
}
function it(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ke(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Zt(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & b) === 0)
      return (t.f & O) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Pe(e) {
  var t, n = h;
  se(Zt(e));
  try {
    e.f &= ~H, it(e), t = wt(e);
  } finally {
    se(n);
  }
  return t;
}
function ft(e) {
  var t = Pe(e);
  if (!e.equals(t) && (e.wv = gt(), (!(_ != null && _.is_fork) || e.deps === null) && (e.v = t, e.deps === null))) {
    x(e, m);
    return;
  }
  re || (g !== null ? (dt() || _ != null && _.is_fork) && g.set(e, t) : Me(e));
}
let De = /* @__PURE__ */ new Set();
const L = /* @__PURE__ */ new Map();
let ot = !1;
function Jt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: $e,
    rv: 0,
    wv: 0
  };
  return n;
}
function qe(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    re ? L.set(e, t) : L.set(e, n), e.v = t;
    var r = be.ensure();
    if (r.capture(e, n), (e.f & b) !== 0) {
      const l = (
        /** @type {Derived} */
        e
      );
      (e.f & y) !== 0 && Pe(l), Me(l);
    }
    e.wv = gt(), at(e, y), h !== null && (h.f & m) !== 0 && (h.f & (ce | fe)) === 0 && (S === null ? vn([e]) : S.push(e)), !r.is_fork && De.size > 0 && !ot && Qt();
  }
  return t;
}
function Qt() {
  ot = !1;
  var e = V;
  me(!0);
  const t = Array.from(De);
  try {
    for (const n of t)
      (n.f & m) !== 0 && x(n, P), ve(n) && ae(n);
  } finally {
    me(e);
  }
  De.clear();
}
function at(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, l = 0; l < r; l++) {
      var s = n[l], i = s.f, o = (i & y) === 0;
      if (o && x(s, t), (i & b) !== 0) {
        var f = (
          /** @type {Derived} */
          s
        );
        g == null || g.delete(f), (i & H) === 0 && (i & k && (s.f |= H), at(f, P));
      } else o && ((i & ie) !== 0 && R !== null && R.add(
        /** @type {Effect} */
        s
      ), ne(
        /** @type {Effect} */
        s
      ));
    }
}
var Xt, $t, en;
// @__NO_SIDE_EFFECTS__
function ut(e) {
  return (
    /** @type {TemplateNode | null} */
    $t.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
  return (
    /** @type {TemplateNode | null} */
    en.call(e)
  );
}
function nn(e, t) {
  return /* @__PURE__ */ ut(e);
}
function ct(e) {
  var t = u, n = h;
  le(null), se(null);
  try {
    return e();
  } finally {
    le(t), se(n);
  }
}
function rn(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function de(e, t, n) {
  var r = h;
  r !== null && (r.f & Q) !== 0 && (e |= Q);
  var l = {
    ctx: F,
    deps: null,
    nodes: null,
    f: e | y | k,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      ae(l), l.f |= Je;
    } catch (o) {
      throw ke(l), o;
    }
  else t !== null && ne(l);
  var s = l;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & Oe) === 0 && (s = s.first, (e & ie) !== 0 && (e & Be) !== 0 && s !== null && (s.f |= Be)), s !== null && (s.parent = r, r !== null && rn(s, r), u !== null && (u.f & b) !== 0 && (e & fe) === 0)) {
    var i = (
      /** @type {Derived} */
      u
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return l;
}
function dt() {
  return u !== null && !j;
}
function ln(e) {
  const t = de(Ie, null, !1);
  return x(t, m), t.teardown = e, t;
}
function sn(e) {
  return de(pe | zt, e, !1);
}
function fn(e) {
  return de(pe, e, !1);
}
function on(e) {
  return de(Xe | Oe, e, !0);
}
function an(e, t = [], n = [], r = []) {
  Gt(r, t, n, (l) => {
    de(Ie, () => e(...l.map(oe)), !0);
  });
}
function vt(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = re, r = u;
    Ye(!0), le(null);
    try {
      t.call(null);
    } finally {
      Ye(n), le(r);
    }
  }
}
function _t(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const l = n.ac;
    l !== null && ct(() => {
      l.abort(Z);
    });
    var r = n.next;
    (n.f & fe) !== 0 ? n.parent = null : ke(n, t), n = r;
  }
}
function un(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & ce) === 0 && ke(t), t = n;
  }
}
function ke(e, t = !0) {
  var n = !1;
  (t || (e.f & Qe) !== 0) && e.nodes !== null && e.nodes.end !== null && (cn(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), _t(e, t && !n), Ee(e, 0), x(e, O);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  vt(e);
  var l = e.parent;
  l !== null && l.first !== null && pt(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function cn(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ tn(e);
    e.remove(), e = n;
  }
}
function pt(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
let V = !1;
function me(e) {
  V = e;
}
let re = !1;
function Ye(e) {
  re = e;
}
let u = null, j = !1;
function le(e) {
  u = e;
}
let h = null;
function se(e) {
  h = e;
}
let T = null;
function dn(e) {
  u !== null && (T === null ? T = [e] : T.push(e));
}
let w = null, E = 0, S = null;
function vn(e) {
  S = e;
}
let ht = 1, xe = 0;
function gt() {
  return ++ht;
}
function ve(e) {
  var t = e.f;
  if ((t & y) !== 0)
    return !0;
  if (t & b && (e.f &= ~H), (t & P) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, l = 0; l < r; l++) {
      var s = n[l];
      if (ve(
        /** @type {Derived} */
        s
      ) && ft(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & k) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    g === null && x(e, m);
  }
  return !1;
}
function bt(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(T != null && T.includes(e)))
    for (var l = 0; l < r.length; l++) {
      var s = r[l];
      (s.f & b) !== 0 ? bt(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? x(s, y) : (s.f & m) !== 0 && x(s, P), ne(
        /** @type {Effect} */
        s
      ));
    }
}
function wt(e) {
  var U;
  var t = w, n = E, r = S, l = u, s = T, i = F, o = j, f = e.f;
  w = /** @type {null | Value[]} */
  null, E = 0, S = null, u = (f & (ce | fe)) === 0 ? e : null, T = null, he(e.ctx), j = !1, ++xe, e.ac !== null && (ct(() => {
    e.ac.abort(Z);
  }), e.ac = null);
  try {
    e.f |= Re;
    var a = (
      /** @type {Function} */
      e.fn
    ), c = a(), d = e.deps;
    if (w !== null) {
      var p;
      if (Ee(e, E), d !== null && E > 0)
        for (d.length = E + w.length, p = 0; p < w.length; p++)
          d[E + p] = w[p];
      else
        e.deps = d = w;
      if (dt() && (e.f & k) !== 0)
        for (p = E; p < d.length; p++)
          ((U = d[p]).reactions ?? (U.reactions = [])).push(e);
    } else d !== null && E < d.length && (Ee(e, E), d.length = E);
    if (Pt() && S !== null && !j && d !== null && (e.f & (b | P | y)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      S.length; p++)
        bt(
          S[p],
          /** @type {Effect} */
          e
        );
    return l !== null && l !== e && (xe++, S !== null && (r === null ? r = S : r.push(.../** @type {Source[]} */
    S))), (e.f & M) !== 0 && (e.f ^= M), c;
  } catch (N) {
    return jt(N);
  } finally {
    e.f ^= Re, w = t, E = n, S = r, u = l, T = s, he(i), j = o;
  }
}
function _n(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = At.call(n, e);
    if (r !== -1) {
      var l = n.length - 1;
      l === 0 ? n = t.reactions = null : (n[r] = n[l], n.pop());
    }
  }
  if (n === null && (t.f & b) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (w === null || !w.includes(t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & k) !== 0 && (s.f ^= k, s.f &= ~H), Me(s), it(s), Ee(s, 0);
  }
}
function Ee(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      _n(e, n[r]);
}
function ae(e) {
  var t = e.f;
  if ((t & O) === 0) {
    x(e, m);
    var n = h, r = V;
    h = e, V = !0;
    try {
      (t & (ie | We)) !== 0 ? un(e) : _t(e), vt(e);
      var l = wt(e);
      e.teardown = typeof l == "function" ? l : null, e.wv = ht;
      var s;
      Ne && Ot && (e.f & y) !== 0 && e.deps;
    } finally {
      V = r, h = n;
    }
  }
}
function oe(e) {
  var t = e.f, n = (t & b) !== 0;
  if (u !== null && !j) {
    var r = h !== null && (h.f & O) !== 0;
    if (!r && !(T != null && T.includes(e))) {
      var l = u.deps;
      if ((u.f & Re) !== 0)
        e.rv < xe && (e.rv = xe, w === null && l !== null && l[E] === e ? E++ : w === null ? w = [e] : w.includes(e) || w.push(e));
      else {
        (u.deps ?? (u.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [u] : s.includes(u) || s.push(u);
      }
    }
  }
  if (re && L.has(e))
    return L.get(e);
  if (n) {
    var i = (
      /** @type {Derived} */
      e
    );
    if (re) {
      var o = i.v;
      return ((i.f & m) === 0 && i.reactions !== null || xt(i)) && (o = Pe(i)), L.set(i, o), o;
    }
    var f = (i.f & k) === 0 && !j && u !== null && (V || (u.f & k) !== 0), a = i.deps === null;
    ve(i) && (f && (i.f |= k), ft(i)), f && !a && mt(i);
  }
  if (g != null && g.has(e))
    return g.get(e);
  if ((e.f & M) !== 0)
    throw e.v;
  return e.v;
}
function mt(e) {
  if (e.deps !== null) {
    e.f |= k;
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & b) !== 0 && (t.f & k) === 0 && mt(
        /** @type {Derived} */
        t
      );
  }
}
function xt(e) {
  if (e.v === Se) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (L.has(t) || (t.f & b) !== 0 && xt(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function pn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function hn(e, t) {
  var n = (
    /** @type {Effect} */
    h
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function gn(e, t) {
  var n = (t & kt) !== 0, r, l = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = pn(l ? e : "<!>" + e), r = /** @type {TemplateNode} */
    /* @__PURE__ */ ut(r));
    var s = (
      /** @type {TemplateNode} */
      n || Xt ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return hn(s, s), s;
  };
}
function bn(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function wn(e, t) {
  fn(() => {
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const l = document.createElement("style");
      l.id = t.hash, l.textContent = t.code, r.appendChild(l);
    }
  });
}
function mn(e, t, n) {
  var r = e == null ? "" : "" + e;
  return r = r ? r + " " + t : t, r === "" ? null : r;
}
function xn(e, t, n, r, l, s) {
  var i = e.__className;
  if (i !== n || i === void 0) {
    var o = mn(n, r);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = n;
  }
  return s;
}
const En = Symbol("is custom element"), yn = Symbol("is html");
function Ve(e, t, n, r) {
  var l = Sn(e);
  l[t] !== (l[t] = n) && (t === "loading" && (e[Ft] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && kn(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Sn(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [En]: e.nodeName.includes("-"),
      [yn]: e.namespaceURI === Tt
    })
  );
}
var He = /* @__PURE__ */ new Map();
function kn(e) {
  var t = e.getAttribute("is") || e.nodeName, n = He.get(t);
  if (n) return n;
  He.set(t, n = []);
  for (var r, l = e, s = Element.prototype; s !== l; ) {
    r = Nt(l);
    for (var i in r)
      r[i].set && n.push(i);
    l = Rt(l);
  }
  return n;
}
function I(e, t, n, r) {
  var l = (
    /** @type {V} */
    r
  ), s = !0, i = () => (s && (s = !1, l = /** @type {V} */
  r), l), o;
  o = /** @type {V} */
  e[t], o === void 0 && r !== void 0 && (o = i());
  var f;
  return f = () => {
    var a = (
      /** @type {V} */
      e[t]
    );
    return a === void 0 ? i() : (s = !0, a);
  }, f;
}
var Tn = /* @__PURE__ */ gn('<div><img class="svelte-1odgcft"/></div>');
const An = {
  hash: "svelte-1odgcft",
  code: `.flag.svelte-1odgcft {display:inline-block;overflow:hidden;position:relative;box-sizing:border-box;align-items:center;}.flag.svelte-1odgcft img:where(.svelte-1odgcft) {display:block;width:100%;height:100%;object-fit:cover;}.flag.size-s.svelte-1odgcft {width:16px;height:12px;}.flag.size-s.drop-shadow.svelte-1odgcft {box-shadow:0 0 1px 0.5px rgba(0, 0, 0, 0.1);}.flag.size-s.border-radius.svelte-1odgcft {border-radius:1px;}.flag.size-s.border-radius.border.svelte-1odgcft::before {border-radius:1px;}.flag.size-m.svelte-1odgcft {width:20px;height:15px;}.flag.size-m.drop-shadow.svelte-1odgcft {box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.1);}.flag.size-m.border-radius.svelte-1odgcft {border-radius:1.5px;}.flag.size-m.border-radius.border.svelte-1odgcft::before {border-radius:1.5px;}.flag.size-l.svelte-1odgcft {width:32px;height:24px;}.flag.size-l.drop-shadow.svelte-1odgcft {box-shadow:0 2px 3px 0 rgba(0, 0, 0, 0.1);}.flag.size-l.border-radius.svelte-1odgcft {border-radius:2px;}.flag.size-l.border-radius.border.svelte-1odgcft::before {border-radius:2px;}.flag.border.svelte-1odgcft::before {content:'';width:100%;height:100%;position:absolute;display:block;mix-blend-mode:overlay;box-sizing:border-box;border:1px solid rgba(0, 0, 0, 0.5);}.flag.top-down.svelte-1odgcft::before {content:'';width:100%;height:100%;position:absolute;display:block;mix-blend-mode:overlay;box-sizing:border-box;background-image:linear-gradient(0deg, rgba(0, 0, 0, 0.3) 2%, rgba(255, 255, 255, 0.7) 100%);}.flag.real-linear.svelte-1odgcft::before {content:'';width:100%;height:100%;position:absolute;display:block;mix-blend-mode:overlay;box-sizing:border-box;background-image:linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(39, 39, 39, 0.22) 11%,
      rgba(255, 255, 255, 0.3) 27%,
      rgba(0, 0, 0, 0.24) 41%,
      rgba(0, 0, 0, 0.55) 52%,
      rgba(255, 255, 255, 0.26) 63%,
      rgba(0, 0, 0, 0.27) 74%,
      rgba(255, 255, 255, 0.3) 100%
    );}.flag.real-circular.svelte-1odgcft::before {content:'';width:100%;height:100%;position:absolute;display:block;mix-blend-mode:overlay;box-sizing:border-box;background:radial-gradient(
          50% 36%,
          rgba(255, 255, 255, 0.3) 0%,
          rgba(0, 0, 0, 0.24) 11%,
          rgba(0, 0, 0, 0.55) 17%,
          rgba(255, 255, 255, 0.26) 22%,
          rgba(0, 0, 0, 0.17) 27%,
          rgba(255, 255, 255, 0.28) 31%,
          rgba(255, 255, 255, 0) 37%
        )
        center calc(50% - 8px) / 600% 600%,
      radial-gradient(
          50% 123%,
          rgba(255, 255, 255, 0.3) 25%,
          rgba(0, 0, 0, 0.24) 48%,
          rgba(0, 0, 0, 0.55) 61%,
          rgba(255, 255, 255, 0.26) 72%,
          rgba(0, 0, 0, 0.17) 80%,
          rgba(255, 255, 255, 0.28) 88%,
          rgba(255, 255, 255, 0.3) 100%
        )
        center calc(50% - 8px) / 600% 600%;}`
};
function Cn(e, t) {
  Mt(t, !0), wn(e, An);
  let n = I(t, "code", 3, "NL"), r = I(t, "size", 3, "m"), l = I(t, "gradient", 3, ""), s = I(t, "hasBorder", 3, !0), i = I(t, "hasDropShadow", 3, !1), o = I(t, "hasBorderRadius", 3, !0), f = I(t, "class", 3, ""), a = I(t, "flagsBaseUrl", 3, "https://cdn.jsdelivr.net/npm/flagpack-core@2.0.0/svg");
  const c = (K) => K.toLowerCase(), d = /* @__PURE__ */ Ae(() => c(l())), p = /* @__PURE__ */ Ae(() => c(r())), U = /* @__PURE__ */ Ae(() => `${a()}/${oe(p)}/${n()}.svg`);
  var N = Tn(), G = nn(N);
  an(
    (K) => {
      xn(N, 1, K, "svelte-1odgcft"), Ve(G, "src", oe(U)), Ve(G, "alt", `Flag of ${n()}`);
    },
    [
      () => `flag ${oe(d)} size-${oe(p)} ${s() ? "border" : ""} ${i() ? "drop-shadow" : ""} ${o() ? "border-radius" : ""} ${f() ? f().replace(/\s\s+/g, " ").trim() : ""}`
    ]
  ), bn(e, N), Lt();
}
export {
  Cn as Flag,
  Cn as default
};
