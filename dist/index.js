var yt = Object.defineProperty;
var Ue = (e) => {
  throw TypeError(e);
};
var St = (e, t, n) => t in e ? yt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var I = (e, t, n) => St(e, typeof t != "symbol" ? t + "" : t, n), ke = (e, t, n) => t.has(e) || Ue("Cannot " + n);
var v = (e, t, n) => (ke(e, t, "read from private field"), n ? n.call(e) : t.get(e)), F = (e, t, n) => t.has(e) ? Ue("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), K = (e, t, n, r) => (ke(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), j = (e, t, n) => (ke(e, t, "access private method"), n);
var Ge;
typeof window < "u" && ((Ge = window.__svelte ?? (window.__svelte = {})).v ?? (Ge.v = /* @__PURE__ */ new Set())).add("5");
const kt = 2, ye = Symbol(), Tt = "http://www.w3.org/1999/xhtml", Ae = !1;
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
const b = 2, _e = 4, De = 8, We = 1 << 24, se = 16, ue = 32, ie = 64, Ze = 128, k = 512, m = 1024, y = 2048, P = 4096, J = 8192, O = 16384, Je = 32768, je = 65536, Qe = 1 << 18, Ie = 1 << 19, zt = 1 << 20, G = 32768, Ne = 1 << 21, Xe = 1 << 22, M = 1 << 23, Ft = Symbol(""), W = new class extends Error {
  constructor() {
    super(...arguments);
    I(this, "name", "StaleReactionError");
    I(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
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
let Ot = !1, D = null;
function pe(e) {
  D = e;
}
function Mt(e, t = !1, n) {
  D = {
    p: D,
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
    D
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      sn(r);
  }
  return t.i = !0, D = t.p, /** @type {T} */
  {};
}
function Pt() {
  return !0;
}
let Z = [];
function Ut() {
  var e = Z;
  Z = [], Ct(e);
}
function jt(e) {
  if (Z.length === 0) {
    var t = Z;
    queueMicrotask(() => {
      t === Z && Ut();
    });
  }
  Z.push(e);
}
function qt(e) {
  var t = h;
  if (t === null)
    return u.f |= M, e;
  if ((t.f & Je) === 0) {
    if ((t.f & Ze) === 0)
      throw e;
    t.b.error(e);
  } else
    he(e, t);
}
function he(e, t) {
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
const Bt = -7169;
function x(e, t) {
  e.f = e.f & Bt | t;
}
function Oe(e) {
  (e.f & k) !== 0 || e.deps === null ? x(e, m) : x(e, P);
}
function et(e) {
  if (e !== null)
    for (const t of e)
      (t.f & b) === 0 || (t.f & G) === 0 || (t.f ^= G, et(
        /** @type {Derived} */
        t.deps
      ));
}
function Yt(e, t, n) {
  (e.f & y) !== 0 ? t.add(e) : (e.f & P) !== 0 && n.add(e), et(e.deps), x(e, m);
}
const ve = /* @__PURE__ */ new Set();
let _ = null, g = null, C = [], Me = null, Re = !1;
var Q, X, Y, V, ae, $, ee, A, Ce, ze, tt, nt;
const Ee = class Ee {
  constructor() {
    F(this, A);
    I(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    I(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    I(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    F(this, Q, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    F(this, X, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    F(this, Y, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    F(this, V, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    F(this, ae, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    F(this, $, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    F(this, ee, /* @__PURE__ */ new Set());
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    I(this, "skipped_effects", /* @__PURE__ */ new Set());
    I(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || v(this, V) > 0;
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
      j(this, A, Ce).call(this, s, n, r);
    this.is_fork || j(this, A, tt).call(this), this.is_deferred() ? (j(this, A, ze).call(this, r), j(this, A, ze).call(this, n)) : (_ = null, qe(r), qe(n), (l = v(this, ae)) == null || l.resolve()), g = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== ye && !this.previous.has(t) && this.previous.set(t, n), (t.f & M) === 0 && (this.current.set(t, t.v), g == null || g.set(t, t.v));
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
    } else v(this, Y) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of v(this, X)) t(this);
    v(this, X).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    K(this, Y, v(this, Y) + 1), t && K(this, V, v(this, V) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    K(this, Y, v(this, Y) - 1), t && K(this, V, v(this, V) - 1), this.revive();
  }
  revive() {
    for (const t of v(this, $))
      v(this, ee).delete(t), x(t, y), te(t);
    for (const t of v(this, ee))
      x(t, P), te(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    v(this, Q).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    v(this, X).add(t);
  }
  settled() {
    return (v(this, ae) ?? K(this, ae, Ke())).promise;
  }
  static ensure() {
    if (_ === null) {
      const t = _ = new Ee();
      ve.add(_), Ee.enqueue(() => {
        _ === t && t.flush();
      });
    }
    return _;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    jt(t);
  }
  apply() {
  }
};
Q = new WeakMap(), X = new WeakMap(), Y = new WeakMap(), V = new WeakMap(), ae = new WeakMap(), $ = new WeakMap(), ee = new WeakMap(), A = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ce = function(t, n, r) {
  t.f ^= m;
  for (var l = t.first, s = null; l !== null; ) {
    var i = l.f, o = (i & (ue | ie)) !== 0, f = o && (i & m) !== 0, a = f || (i & J) !== 0 || this.skipped_effects.has(l);
    if (!a && l.fn !== null) {
      o ? l.f ^= m : s !== null && (i & (_e | De | We)) !== 0 ? s.b.defer_effect(l) : (i & _e) !== 0 ? n.push(l) : de(l) && ((i & se) !== 0 && v(this, $).add(l), oe(l));
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
ze = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Yt(t[n], v(this, $), v(this, ee));
}, tt = function() {
  if (v(this, V) === 0) {
    for (const t of v(this, Q)) t();
    v(this, Q).clear();
  }
  v(this, Y) === 0 && j(this, A, nt).call(this);
}, nt = function() {
  var l;
  if (ve.size > 1) {
    this.previous.clear();
    var t = g, n = !0;
    for (const s of ve) {
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
            j(l = s, A, Ce).call(l, c, [], []);
          s.deactivate();
        }
        C = r;
      }
    }
    _ = null, g = t;
  }
  this.committed = !0, ve.delete(this);
};
let ge = Ee;
function Vt() {
  var e = H;
  Re = !0;
  var t = null;
  try {
    var n = 0;
    for (we(!0); C.length > 0; ) {
      var r = ge.ensure();
      if (n++ > 1e3) {
        var l, s;
        Ht();
      }
      r.process(C), L.clear();
    }
  } finally {
    Re = !1, we(e), Me = null;
  }
}
function Ht() {
  try {
    It();
  } catch (e) {
    he(e, Me);
  }
}
let N = null;
function qe(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (O | J)) === 0 && de(r) && (N = /* @__PURE__ */ new Set(), oe(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? pt(r) : r.fn = null), (N == null ? void 0 : N.size) > 0)) {
        L.clear();
        for (const l of N) {
          if ((l.f & (O | J)) !== 0) continue;
          const s = [l];
          let i = l.parent;
          for (; i !== null; )
            N.has(i) && (N.delete(i), s.push(i)), i = i.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const f = s[o];
            (f.f & (O | J)) === 0 && oe(f);
          }
        }
        N.clear();
      }
    }
    N = null;
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
      ) : (s & (Xe | se)) !== 0 && (s & y) === 0 && lt(l, t, r) && (x(l, y), te(
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
function te(e) {
  for (var t = Me = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Re && t === h && (n & se) !== 0 && (n & Qe) === 0)
      return;
    if ((n & (ie | ue)) !== 0) {
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
        (i.f & O) === 0 && he(c, i);
      }
      s == null || s.deactivate(), be();
    }).catch((a) => {
      he(a, i);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    o();
    try {
      return f();
    } finally {
      s == null || s.deactivate(), be();
    }
  }) : f();
}
function Kt() {
  var e = h, t = u, n = D, r = _;
  return function(s = !0) {
    le(e), re(t), pe(n), s && (r == null || r.activate());
  };
}
function be() {
  le(null), re(null), pe(null);
}
// @__NO_SIDE_EFFECTS__
function st(e) {
  var t = b | y, n = u !== null && (u.f & b) !== 0 ? (
    /** @type {Derived} */
    u
  ) : null;
  return h !== null && (h.f |= Ie), {
    ctx: D,
    deps: null,
    effects: null,
    equals: $e,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ye
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
    ye
  ), o = !u, f = /* @__PURE__ */ new Map();
  return on(() => {
    var z;
    var a = Ke();
    s = a.promise;
    try {
      Promise.resolve(e()).then(a.resolve, a.reject).then(() => {
        c === _ && c.committed && c.deactivate(), be();
      });
    } catch (R) {
      a.reject(R), be();
    }
    var c = (
      /** @type {Batch} */
      _
    );
    if (o) {
      var d = l.is_rendered();
      l.update_pending_count(1), c.increment(d), (z = f.get(c)) == null || z.reject(W), f.delete(c), f.set(c, a);
    }
    const p = (R, U = void 0) => {
      if (c.activate(), U)
        U !== W && (i.f |= M, Be(i, U));
      else {
        (i.f & M) !== 0 && (i.f ^= M), Be(i, R);
        for (const [Pe, Et] of f) {
          if (f.delete(Pe), Pe === c) break;
          Et.reject(W);
        }
      }
      o && (l.update_pending_count(-1), c.decrement(d));
    };
    a.promise.then(p, (R) => p(null, R || "unknown"));
  }), ln(() => {
    for (const a of f.values())
      a.reject(W);
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
function Te(e) {
  const t = /* @__PURE__ */ st(e);
  return dn(t), t;
}
function it(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Se(
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
function Le(e) {
  var t, n = h;
  le(Zt(e));
  try {
    e.f &= ~G, it(e), t = wt(e);
  } finally {
    le(n);
  }
  return t;
}
function ft(e) {
  var t = Le(e);
  if (!e.equals(t) && (e.wv = gt(), (!(_ != null && _.is_fork) || e.deps === null) && (e.v = t, e.deps === null))) {
    x(e, m);
    return;
  }
  ne || (g !== null ? (dt() || _ != null && _.is_fork) && g.set(e, t) : Oe(e));
}
let Fe = /* @__PURE__ */ new Set();
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
function Be(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    ne ? L.set(e, t) : L.set(e, n), e.v = t;
    var r = ge.ensure();
    if (r.capture(e, n), (e.f & b) !== 0) {
      const l = (
        /** @type {Derived} */
        e
      );
      (e.f & y) !== 0 && Le(l), Oe(l);
    }
    e.wv = gt(), at(e, y), h !== null && (h.f & m) !== 0 && (h.f & (ue | ie)) === 0 && (S === null ? vn([e]) : S.push(e)), !r.is_fork && Fe.size > 0 && !ot && Qt();
  }
  return t;
}
function Qt() {
  ot = !1;
  var e = H;
  we(!0);
  const t = Array.from(Fe);
  try {
    for (const n of t)
      (n.f & m) !== 0 && x(n, P), de(n) && oe(n);
  } finally {
    we(e);
  }
  Fe.clear();
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
        g == null || g.delete(f), (i & G) === 0 && (i & k && (s.f |= G), at(f, P));
      } else o && ((i & se) !== 0 && N !== null && N.add(
        /** @type {Effect} */
        s
      ), te(
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
  re(null), le(null);
  try {
    return e();
  } finally {
    re(t), le(n);
  }
}
function rn(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ce(e, t, n) {
  var r = h;
  r !== null && (r.f & J) !== 0 && (e |= J);
  var l = {
    ctx: D,
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
      oe(l), l.f |= Je;
    } catch (o) {
      throw Se(l), o;
    }
  else t !== null && te(l);
  var s = l;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & Ie) === 0 && (s = s.first, (e & se) !== 0 && (e & je) !== 0 && s !== null && (s.f |= je)), s !== null && (s.parent = r, r !== null && rn(s, r), u !== null && (u.f & b) !== 0 && (e & ie) === 0)) {
    var i = (
      /** @type {Derived} */
      u
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return l;
}
function dt() {
  return u !== null && !B;
}
function ln(e) {
  const t = ce(De, null, !1);
  return x(t, m), t.teardown = e, t;
}
function sn(e) {
  return ce(_e | zt, e, !1);
}
function fn(e) {
  return ce(_e, e, !1);
}
function on(e) {
  return ce(Xe | Ie, e, !0);
}
function an(e, t = [], n = [], r = []) {
  Gt(r, t, n, (l) => {
    ce(De, () => e(...l.map(fe)), !0);
  });
}
function vt(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = ne, r = u;
    Ye(!0), re(null);
    try {
      t.call(null);
    } finally {
      Ye(n), re(r);
    }
  }
}
function _t(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const l = n.ac;
    l !== null && ct(() => {
      l.abort(W);
    });
    var r = n.next;
    (n.f & ie) !== 0 ? n.parent = null : Se(n, t), n = r;
  }
}
function un(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & ue) === 0 && Se(t), t = n;
  }
}
function Se(e, t = !0) {
  var n = !1;
  (t || (e.f & Qe) !== 0) && e.nodes !== null && e.nodes.end !== null && (cn(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), _t(e, t && !n), xe(e, 0), x(e, O);
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
let H = !1;
function we(e) {
  H = e;
}
let ne = !1;
function Ye(e) {
  ne = e;
}
let u = null, B = !1;
function re(e) {
  u = e;
}
let h = null;
function le(e) {
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
let ht = 1, me = 0;
function gt() {
  return ++ht;
}
function de(e) {
  var t = e.f;
  if ((t & y) !== 0)
    return !0;
  if (t & b && (e.f &= ~G), (t & P) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, l = 0; l < r; l++) {
      var s = n[l];
      if (de(
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
      ) : t === s && (n ? x(s, y) : (s.f & m) !== 0 && x(s, P), te(
        /** @type {Effect} */
        s
      ));
    }
}
function wt(e) {
  var z;
  var t = w, n = E, r = S, l = u, s = T, i = D, o = B, f = e.f;
  w = /** @type {null | Value[]} */
  null, E = 0, S = null, u = (f & (ue | ie)) === 0 ? e : null, T = null, pe(e.ctx), B = !1, ++me, e.ac !== null && (ct(() => {
    e.ac.abort(W);
  }), e.ac = null);
  try {
    e.f |= Ne;
    var a = (
      /** @type {Function} */
      e.fn
    ), c = a(), d = e.deps;
    if (w !== null) {
      var p;
      if (xe(e, E), d !== null && E > 0)
        for (d.length = E + w.length, p = 0; p < w.length; p++)
          d[E + p] = w[p];
      else
        e.deps = d = w;
      if (dt() && (e.f & k) !== 0)
        for (p = E; p < d.length; p++)
          ((z = d[p]).reactions ?? (z.reactions = [])).push(e);
    } else d !== null && E < d.length && (xe(e, E), d.length = E);
    if (Pt() && S !== null && !B && d !== null && (e.f & (b | P | y)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      S.length; p++)
        bt(
          S[p],
          /** @type {Effect} */
          e
        );
    return l !== null && l !== e && (me++, S !== null && (r === null ? r = S : r.push(.../** @type {Source[]} */
    S))), (e.f & M) !== 0 && (e.f ^= M), c;
  } catch (R) {
    return qt(R);
  } finally {
    e.f ^= Ne, w = t, E = n, S = r, u = l, T = s, pe(i), B = o;
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
    (s.f & k) !== 0 && (s.f ^= k, s.f &= ~G), Oe(s), it(s), xe(s, 0);
  }
}
function xe(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      _n(e, n[r]);
}
function oe(e) {
  var t = e.f;
  if ((t & O) === 0) {
    x(e, m);
    var n = h, r = H;
    h = e, H = !0;
    try {
      (t & (se | We)) !== 0 ? un(e) : _t(e), vt(e);
      var l = wt(e);
      e.teardown = typeof l == "function" ? l : null, e.wv = ht;
      var s;
      Ae && Ot && (e.f & y) !== 0 && e.deps;
    } finally {
      H = r, h = n;
    }
  }
}
function fe(e) {
  var t = e.f, n = (t & b) !== 0;
  if (u !== null && !B) {
    var r = h !== null && (h.f & O) !== 0;
    if (!r && !(T != null && T.includes(e))) {
      var l = u.deps;
      if ((u.f & Ne) !== 0)
        e.rv < me && (e.rv = me, w === null && l !== null && l[E] === e ? E++ : w === null ? w = [e] : w.includes(e) || w.push(e));
      else {
        (u.deps ?? (u.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [u] : s.includes(u) || s.push(u);
      }
    }
  }
  if (ne && L.has(e))
    return L.get(e);
  if (n) {
    var i = (
      /** @type {Derived} */
      e
    );
    if (ne) {
      var o = i.v;
      return ((i.f & m) === 0 && i.reactions !== null || xt(i)) && (o = Le(i)), L.set(i, o), o;
    }
    var f = (i.f & k) === 0 && !B && u !== null && (H || (u.f & k) !== 0), a = i.deps === null;
    de(i) && (f && (i.f |= k), ft(i)), f && !a && mt(i);
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
  if (e.v === ye) return !0;
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
function q(e, t, n, r) {
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
  let n = q(t, "code", 3, "NL"), r = q(t, "size", 3, "m"), l = q(t, "gradient", 3, ""), s = q(t, "hasBorder", 3, !0), i = q(t, "hasDropShadow", 3, !1), o = q(t, "hasBorderRadius", 3, !0), f = q(t, "class", 3, "");
  const a = (U) => U.toLowerCase(), c = /* @__PURE__ */ Te(() => a(l())), d = /* @__PURE__ */ Te(() => a(r())), p = /* @__PURE__ */ Te(() => `/node_modules/svelte-flagpack/dist/flags/${fe(d)}/${n()}.svg`);
  var z = Tn(), R = nn(z);
  an(
    (U) => {
      xn(z, 1, U, "svelte-1odgcft"), Ve(R, "src", fe(p)), Ve(R, "alt", `Flag of ${n()}`);
    },
    [
      () => `flag ${fe(c)} size-${fe(d)} ${s() ? "border" : ""} ${i() ? "drop-shadow" : ""} ${o() ? "border-radius" : ""} ${f() ? f().replace(/\s\s+/g, " ").trim() : ""}`
    ]
  ), bn(e, z), Lt();
}
export {
  Cn as Flag,
  Cn as default
};
