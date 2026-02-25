function Gf(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, l);
                    i && Object.defineProperty(e, l, i.get ? i : {
                        enumerable: !0,
                        get: () => r[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity), l.referrerpolicy && (i.referrerPolicy = l.referrerpolicy), l.crossorigin === "use-credentials" ? i.credentials = "include" : l.crossorigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
})();
var Xf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function nc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Lr = {},
    Jf = {
        get exports() {
            return Lr
        },
        set exports(e) {
            Lr = e
        }
    },
    mi = {},
    m = {},
    qf = {
        get exports() {
            return m
        },
        set exports(e) {
            m = e
        }
    },
    B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr = Symbol.for("react.element"),
    Zf = Symbol.for("react.portal"),
    ep = Symbol.for("react.fragment"),
    tp = Symbol.for("react.strict_mode"),
    np = Symbol.for("react.profiler"),
    rp = Symbol.for("react.provider"),
    lp = Symbol.for("react.context"),
    ip = Symbol.for("react.forward_ref"),
    op = Symbol.for("react.suspense"),
    ap = Symbol.for("react.memo"),
    sp = Symbol.for("react.lazy"),
    $s = Symbol.iterator;

function up(e) {
    return e === null || typeof e != "object" ? null : (e = $s && e[$s] || e["@@iterator"], typeof e == "function" ? e : null)
}
var rc = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    lc = Object.assign,
    ic = {};

function Xn(e, t, n) {
    this.props = e, this.context = t, this.refs = ic, this.updater = n || rc
}
Xn.prototype.isReactComponent = {};
Xn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Xn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function oc() {}
oc.prototype = Xn.prototype;

function Pa(e, t, n) {
    this.props = e, this.context = t, this.refs = ic, this.updater = n || rc
}
var _a = Pa.prototype = new oc;
_a.constructor = Pa;
lc(_a, Xn.prototype);
_a.isPureReactComponent = !0;
var Ts = Array.isArray,
    ac = Object.prototype.hasOwnProperty,
    $a = {
        current: null
    },
    sc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function uc(e, t, n) {
    var r, l = {},
        i = null,
        o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) ac.call(t, r) && !sc.hasOwnProperty(r) && (l[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) l.children = n;
    else if (1 < a) {
        for (var s = Array(a), c = 0; c < a; c++) s[c] = arguments[c + 2];
        l.children = s
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) l[r] === void 0 && (l[r] = a[r]);
    return {
        $$typeof: Jr,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: $a.current
    }
}

function cp(e, t) {
    return {
        $$typeof: Jr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Ta(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Jr
}

function dp(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Ls = /\/+/g;

function Di(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? dp("" + e.key) : t.toString(36)
}

function Cl(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Jr:
                case Zf:
                    o = !0
            }
    }
    if (o) return o = e, l = l(o), e = r === "" ? "." + Di(o, 0) : r, Ts(l) ? (n = "", e != null && (n = e.replace(Ls, "$&/") + "/"), Cl(l, t, n, "", function(c) {
        return c
    })) : l != null && (Ta(l) && (l = cp(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Ls, "$&/") + "/") + e)), t.push(l)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", Ts(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var s = r + Di(i, a);
            o += Cl(i, t, n, s, l)
        } else if (s = up(e), typeof s == "function")
            for (e = s.call(e), a = 0; !(i = e.next()).done;) i = i.value, s = r + Di(i, a++), o += Cl(i, t, n, s, l);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function ol(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return Cl(e, r, "", "", function(i) {
        return t.call(n, i, l++)
    }), r
}

function fp(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ze = {
        current: null
    },
    Pl = {
        transition: null
    },
    pp = {
        ReactCurrentDispatcher: ze,
        ReactCurrentBatchConfig: Pl,
        ReactCurrentOwner: $a
    };
B.Children = {
    map: ol,
    forEach: function(e, t, n) {
        ol(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ol(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return ol(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Ta(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
B.Component = Xn;
B.Fragment = ep;
B.Profiler = np;
B.PureComponent = Pa;
B.StrictMode = tp;
B.Suspense = op;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pp;
B.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = lc({}, e.props),
        l = e.key,
        i = e.ref,
        o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, o = $a.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (s in t) ac.call(t, s) && !sc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
        a = Array(s);
        for (var c = 0; c < s; c++) a[c] = arguments[c + 2];
        r.children = a
    }
    return {
        $$typeof: Jr,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: o
    }
};
B.createContext = function(e) {
    return e = {
        $$typeof: lp,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: rp,
        _context: e
    }, e.Consumer = e
};
B.createElement = uc;
B.createFactory = function(e) {
    var t = uc.bind(null, e);
    return t.type = e, t
};
B.createRef = function() {
    return {
        current: null
    }
};
B.forwardRef = function(e) {
    return {
        $$typeof: ip,
        render: e
    }
};
B.isValidElement = Ta;
B.lazy = function(e) {
    return {
        $$typeof: sp,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: fp
    }
};
B.memo = function(e, t) {
    return {
        $$typeof: ap,
        type: e,
        compare: t === void 0 ? null : t
    }
};
B.startTransition = function(e) {
    var t = Pl.transition;
    Pl.transition = {};
    try {
        e()
    } finally {
        Pl.transition = t
    }
};
B.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
B.useCallback = function(e, t) {
    return ze.current.useCallback(e, t)
};
B.useContext = function(e) {
    return ze.current.useContext(e)
};
B.useDebugValue = function() {};
B.useDeferredValue = function(e) {
    return ze.current.useDeferredValue(e)
};
B.useEffect = function(e, t) {
    return ze.current.useEffect(e, t)
};
B.useId = function() {
    return ze.current.useId()
};
B.useImperativeHandle = function(e, t, n) {
    return ze.current.useImperativeHandle(e, t, n)
};
B.useInsertionEffect = function(e, t) {
    return ze.current.useInsertionEffect(e, t)
};
B.useLayoutEffect = function(e, t) {
    return ze.current.useLayoutEffect(e, t)
};
B.useMemo = function(e, t) {
    return ze.current.useMemo(e, t)
};
B.useReducer = function(e, t, n) {
    return ze.current.useReducer(e, t, n)
};
B.useRef = function(e) {
    return ze.current.useRef(e)
};
B.useState = function(e) {
    return ze.current.useState(e)
};
B.useSyncExternalStore = function(e, t, n) {
    return ze.current.useSyncExternalStore(e, t, n)
};
B.useTransition = function() {
    return ze.current.useTransition()
};
B.version = "18.2.0";
(function(e) {
    e.exports = B
})(qf);
const U = nc(m),
    Bn = Gf({
        __proto__: null,
        default: U
    }, [m]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mp = m,
    hp = Symbol.for("react.element"),
    vp = Symbol.for("react.fragment"),
    gp = Object.prototype.hasOwnProperty,
    yp = mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    wp = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function cc(e, t, n) {
    var r, l = {},
        i = null,
        o = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) gp.call(t, r) && !wp.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: hp,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: yp.current
    }
}
mi.Fragment = vp;
mi.jsx = cc;
mi.jsxs = cc;
(function(e) {
    e.exports = mi
})(Jf);
const La = Lr.Fragment,
    u = Lr.jsx,
    C = Lr.jsxs;
var wo = {},
    Ul = {},
    xp = {
        get exports() {
            return Ul
        },
        set exports(e) {
            Ul = e
        }
    },
    Ke = {},
    xo = {},
    kp = {
        get exports() {
            return xo
        },
        set exports(e) {
            xo = e
        }
    },
    dc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(_, R) {
        var D = _.length;
        _.push(R);
        e: for (; 0 < D;) {
            var H = D - 1 >>> 1,
                Y = _[H];
            if (0 < l(Y, R)) _[H] = R, _[D] = Y, D = H;
            else break e
        }
    }

    function n(_) {
        return _.length === 0 ? null : _[0]
    }

    function r(_) {
        if (_.length === 0) return null;
        var R = _[0],
            D = _.pop();
        if (D !== R) {
            _[0] = D;
            e: for (var H = 0, Y = _.length, we = Y >>> 1; H < we;) {
                var ie = 2 * (H + 1) - 1,
                    Ne = _[ie],
                    de = ie + 1,
                    X = _[de];
                if (0 > l(Ne, D)) de < Y && 0 > l(X, Ne) ? (_[H] = X, _[de] = D, H = de) : (_[H] = Ne, _[ie] = D, H = ie);
                else if (de < Y && 0 > l(X, D)) _[H] = X, _[de] = D, H = de;
                else break e
            }
        }
        return R
    }

    function l(_, R) {
        var D = _.sortIndex - R.sortIndex;
        return D !== 0 ? D : _.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date,
            a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var s = [],
        c = [],
        d = 1,
        p = null,
        v = 3,
        y = !1,
        w = !1,
        x = !1,
        S = typeof setTimeout == "function" ? setTimeout : null,
        h = typeof clearTimeout == "function" ? clearTimeout : null,
        f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(_) {
        for (var R = n(c); R !== null;) {
            if (R.callback === null) r(c);
            else if (R.startTime <= _) r(c), R.sortIndex = R.expirationTime, t(s, R);
            else break;
            R = n(c)
        }
    }

    function k(_) {
        if (x = !1, g(_), !w)
            if (n(s) !== null) w = !0, ce(P);
            else {
                var R = n(c);
                R !== null && Ee(k, R.startTime - _)
            }
    }

    function P(_, R) {
        w = !1, x && (x = !1, h(N), N = -1), y = !0;
        var D = v;
        try {
            for (g(R), p = n(s); p !== null && (!(p.expirationTime > R) || _ && !M());) {
                var H = p.callback;
                if (typeof H == "function") {
                    p.callback = null, v = p.priorityLevel;
                    var Y = H(p.expirationTime <= R);
                    R = e.unstable_now(), typeof Y == "function" ? p.callback = Y : p === n(s) && r(s), g(R)
                } else r(s);
                p = n(s)
            }
            if (p !== null) var we = !0;
            else {
                var ie = n(c);
                ie !== null && Ee(k, ie.startTime - R), we = !1
            }
            return we
        } finally {
            p = null, v = D, y = !1
        }
    }
    var $ = !1,
        L = null,
        N = -1,
        A = 5,
        j = -1;

    function M() {
        return !(e.unstable_now() - j < A)
    }

    function T() {
        if (L !== null) {
            var _ = e.unstable_now();
            j = _;
            var R = !0;
            try {
                R = L(!0, _)
            } finally {
                R ? I() : ($ = !1, L = null)
            }
        } else $ = !1
    }
    var I;
    if (typeof f == "function") I = function() {
        f(T)
    };
    else if (typeof MessageChannel < "u") {
        var F = new MessageChannel,
            K = F.port2;
        F.port1.onmessage = T, I = function() {
            K.postMessage(null)
        }
    } else I = function() {
        S(T, 0)
    };

    function ce(_) {
        L = _, $ || ($ = !0, I())
    }

    function Ee(_, R) {
        N = S(function() {
            _(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
        _.callback = null
    }, e.unstable_continueExecution = function() {
        w || y || (w = !0, ce(P))
    }, e.unstable_forceFrameRate = function(_) {
        0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < _ ? Math.floor(1e3 / _) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return v
    }, e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }, e.unstable_next = function(_) {
        switch (v) {
            case 1:
            case 2:
            case 3:
                var R = 3;
                break;
            default:
                R = v
        }
        var D = v;
        v = R;
        try {
            return _()
        } finally {
            v = D
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(_, R) {
        switch (_) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                _ = 3
        }
        var D = v;
        v = _;
        try {
            return R()
        } finally {
            v = D
        }
    }, e.unstable_scheduleCallback = function(_, R, D) {
        var H = e.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? H + D : H) : D = H, _) {
            case 1:
                var Y = -1;
                break;
            case 2:
                Y = 250;
                break;
            case 5:
                Y = 1073741823;
                break;
            case 4:
                Y = 1e4;
                break;
            default:
                Y = 5e3
        }
        return Y = D + Y, _ = {
            id: d++,
            callback: R,
            priorityLevel: _,
            startTime: D,
            expirationTime: Y,
            sortIndex: -1
        }, D > H ? (_.sortIndex = D, t(c, _), n(s) === null && _ === n(c) && (x ? (h(N), N = -1) : x = !0, Ee(k, D - H))) : (_.sortIndex = Y, t(s, _), w || y || (w = !0, ce(P))), _
    }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function(_) {
        var R = v;
        return function() {
            var D = v;
            v = R;
            try {
                return _.apply(this, arguments)
            } finally {
                v = D
            }
        }
    }
})(dc);
(function(e) {
    e.exports = dc
})(kp);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fc = m,
    Qe = xo;

function E(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var pc = new Set,
    Or = {};

function kn(e, t) {
    Wn(e, t), Wn(e + "Capture", t)
}

function Wn(e, t) {
    for (Or[e] = t, e = 0; e < t.length; e++) pc.add(t[e])
}
var $t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    ko = Object.prototype.hasOwnProperty,
    Sp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Os = {},
    Ms = {};

function Ep(e) {
    return ko.call(Ms, e) ? !0 : ko.call(Os, e) ? !1 : Sp.test(e) ? Ms[e] = !0 : (Os[e] = !0, !1)
}

function Np(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Cp(e, t, n, r) {
    if (t === null || typeof t > "u" || Np(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Re(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Se[e] = new Re(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Se[t] = new Re(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Se[e] = new Re(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Se[e] = new Re(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Se[e] = new Re(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Se[e] = new Re(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    Se[e] = new Re(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Se[e] = new Re(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    Se[e] = new Re(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Oa = /[\-:]([a-z])/g;

function Ma(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Oa, Ma);
    Se[t] = new Re(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Oa, Ma);
    Se[t] = new Re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Oa, Ma);
    Se[t] = new Re(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Se[e] = new Re(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Se.xlinkHref = new Re("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Se[e] = new Re(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function za(e, t, n, r) {
    var l = Se.hasOwnProperty(t) ? Se[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Cp(t, n, l, r) && (n = null), r || l === null ? Ep(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Mt = fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    al = Symbol.for("react.element"),
    Nn = Symbol.for("react.portal"),
    Cn = Symbol.for("react.fragment"),
    Ra = Symbol.for("react.strict_mode"),
    So = Symbol.for("react.profiler"),
    mc = Symbol.for("react.provider"),
    hc = Symbol.for("react.context"),
    ja = Symbol.for("react.forward_ref"),
    Eo = Symbol.for("react.suspense"),
    No = Symbol.for("react.suspense_list"),
    Fa = Symbol.for("react.memo"),
    jt = Symbol.for("react.lazy"),
    vc = Symbol.for("react.offscreen"),
    zs = Symbol.iterator;

function ir(e) {
    return e === null || typeof e != "object" ? null : (e = zs && e[zs] || e["@@iterator"], typeof e == "function" ? e : null)
}
var le = Object.assign,
    Ii;

function hr(e) {
    if (Ii === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ii = t && t[1] || ""
    }
    return `
` + Ii + e
}
var Ui = !1;

function Ai(e, t) {
    if (!e || Ui) return "";
    Ui = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var l = c.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, a = i.length - 1; 1 <= o && 0 <= a && l[o] !== i[a];) a--;
            for (; 1 <= o && 0 <= a; o--, a--)
                if (l[o] !== i[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--, a--, 0 > a || l[o] !== i[a]) {
                                var s = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                            }
                    while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        Ui = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? hr(e) : ""
}

function Pp(e) {
    switch (e.tag) {
        case 5:
            return hr(e.type);
        case 16:
            return hr("Lazy");
        case 13:
            return hr("Suspense");
        case 19:
            return hr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Ai(e.type, !1), e;
        case 11:
            return e = Ai(e.type.render, !1), e;
        case 1:
            return e = Ai(e.type, !0), e;
        default:
            return ""
    }
}

function Co(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Cn:
            return "Fragment";
        case Nn:
            return "Portal";
        case So:
            return "Profiler";
        case Ra:
            return "StrictMode";
        case Eo:
            return "Suspense";
        case No:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case hc:
            return (e.displayName || "Context") + ".Consumer";
        case mc:
            return (e._context.displayName || "Context") + ".Provider";
        case ja:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Fa:
            return t = e.displayName || null, t !== null ? t : Co(e.type) || "Memo";
        case jt:
            t = e._payload, e = e._init;
            try {
                return Co(e(t))
            } catch {}
    }
    return null
}

function _p(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Co(t);
        case 8:
            return t === Ra ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Zt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function gc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function $p(e) {
    var t = gc(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o, i.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function sl(e) {
    e._valueTracker || (e._valueTracker = $p(e))
}

function yc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = gc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Al(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Po(e, t) {
    var n = t.checked;
    return le({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function Rs(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Zt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function wc(e, t) {
    t = t.checked, t != null && za(e, "checked", t, !1)
}

function _o(e, t) {
    wc(e, t);
    var n = Zt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? $o(e, t.type, n) : t.hasOwnProperty("defaultValue") && $o(e, t.type, Zt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function js(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function $o(e, t, n) {
    (t !== "number" || Al(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var vr = Array.isArray;

function Fn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Zt(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function To(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
    return le({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Fs(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(E(92));
            if (vr(n)) {
                if (1 < n.length) throw Error(E(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Zt(n)
    }
}

function xc(e, t) {
    var n = Zt(t.value),
        r = Zt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Ds(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function kc(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Lo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? kc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ul, Sc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (ul = ul || document.createElement("div"), ul.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ul.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Mr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var kr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Tp = ["Webkit", "ms", "Moz", "O"];
Object.keys(kr).forEach(function(e) {
    Tp.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), kr[t] = kr[e]
    })
});

function Ec(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || kr.hasOwnProperty(e) && kr[e] ? ("" + t).trim() : t + "px"
}

function Nc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = Ec(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var Lp = le({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Oo(e, t) {
    if (t) {
        if (Lp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(E(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(E(62))
    }
}

function Mo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var zo = null;

function Da(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Ro = null,
    Dn = null,
    In = null;

function Is(e) {
    if (e = el(e)) {
        if (typeof Ro != "function") throw Error(E(280));
        var t = e.stateNode;
        t && (t = wi(t), Ro(e.stateNode, e.type, t))
    }
}

function Cc(e) {
    Dn ? In ? In.push(e) : In = [e] : Dn = e
}

function Pc() {
    if (Dn) {
        var e = Dn,
            t = In;
        if (In = Dn = null, Is(e), t)
            for (e = 0; e < t.length; e++) Is(t[e])
    }
}

function _c(e, t) {
    return e(t)
}

function $c() {}
var Hi = !1;

function Tc(e, t, n) {
    if (Hi) return e(t, n);
    Hi = !0;
    try {
        return _c(e, t, n)
    } finally {
        Hi = !1, (Dn !== null || In !== null) && ($c(), Pc())
    }
}

function zr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = wi(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(E(231, t, typeof n));
    return n
}
var jo = !1;
if ($t) try {
    var or = {};
    Object.defineProperty(or, "passive", {
        get: function() {
            jo = !0
        }
    }), window.addEventListener("test", or, or), window.removeEventListener("test", or, or)
} catch {
    jo = !1
}

function Op(e, t, n, r, l, i, o, a, s) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (d) {
        this.onError(d)
    }
}
var Sr = !1,
    Hl = null,
    Bl = !1,
    Fo = null,
    Mp = {
        onError: function(e) {
            Sr = !0, Hl = e
        }
    };

function zp(e, t, n, r, l, i, o, a, s) {
    Sr = !1, Hl = null, Op.apply(Mp, arguments)
}

function Rp(e, t, n, r, l, i, o, a, s) {
    if (zp.apply(this, arguments), Sr) {
        if (Sr) {
            var c = Hl;
            Sr = !1, Hl = null
        } else throw Error(E(198));
        Bl || (Bl = !0, Fo = c)
    }
}

function Sn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Lc(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Us(e) {
    if (Sn(e) !== e) throw Error(E(188))
}

function jp(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Sn(e), t === null) throw Error(E(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i;) {
                if (i === n) return Us(l), e;
                if (i === r) return Us(l), t;
                i = i.sibling
            }
            throw Error(E(188))
        }
        if (n.return !== r.return) n = l, r = i;
        else {
            for (var o = !1, a = l.child; a;) {
                if (a === n) {
                    o = !0, n = l, r = i;
                    break
                }
                if (a === r) {
                    o = !0, r = l, n = i;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = i.child; a;) {
                    if (a === n) {
                        o = !0, n = i, r = l;
                        break
                    }
                    if (a === r) {
                        o = !0, r = i, n = l;
                        break
                    }
                    a = a.sibling
                }
                if (!o) throw Error(E(189))
            }
        }
        if (n.alternate !== r) throw Error(E(190))
    }
    if (n.tag !== 3) throw Error(E(188));
    return n.stateNode.current === n ? e : t
}

function Oc(e) {
    return e = jp(e), e !== null ? Mc(e) : null
}

function Mc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Mc(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var zc = Qe.unstable_scheduleCallback,
    As = Qe.unstable_cancelCallback,
    Fp = Qe.unstable_shouldYield,
    Dp = Qe.unstable_requestPaint,
    ue = Qe.unstable_now,
    Ip = Qe.unstable_getCurrentPriorityLevel,
    Ia = Qe.unstable_ImmediatePriority,
    Rc = Qe.unstable_UserBlockingPriority,
    Wl = Qe.unstable_NormalPriority,
    Up = Qe.unstable_LowPriority,
    jc = Qe.unstable_IdlePriority,
    hi = null,
    gt = null;

function Ap(e) {
    if (gt && typeof gt.onCommitFiberRoot == "function") try {
        gt.onCommitFiberRoot(hi, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var st = Math.clz32 ? Math.clz32 : Wp,
    Hp = Math.log,
    Bp = Math.LN2;

function Wp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Hp(e) / Bp | 0) | 0
}
var cl = 64,
    dl = 4194304;

function gr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function bl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        i = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var a = o & ~l;
        a !== 0 ? r = gr(a) : (i &= o, i !== 0 && (r = gr(i)))
    } else o = n & ~l, o !== 0 ? r = gr(o) : i !== 0 && (r = gr(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - st(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function bp(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Vp(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var o = 31 - st(i),
            a = 1 << o,
            s = l[o];
        s === -1 ? (!(a & n) || a & r) && (l[o] = bp(a, t)) : s <= t && (e.expiredLanes |= a), i &= ~a
    }
}

function Do(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Fc() {
    var e = cl;
    return cl <<= 1, !(cl & 4194240) && (cl = 64), e
}

function Bi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function qr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - st(t), e[t] = n
}

function Qp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - st(n),
            i = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i
    }
}

function Ua(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - st(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var V = 0;

function Dc(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ic, Aa, Uc, Ac, Hc, Io = !1,
    fl = [],
    Wt = null,
    bt = null,
    Vt = null,
    Rr = new Map,
    jr = new Map,
    Dt = [],
    Kp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Hs(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Wt = null;
            break;
        case "dragenter":
        case "dragleave":
            bt = null;
            break;
        case "mouseover":
        case "mouseout":
            Vt = null;
            break;
        case "pointerover":
        case "pointerout":
            Rr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            jr.delete(t.pointerId)
    }
}

function ar(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    }, t !== null && (t = el(t), t !== null && Aa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function Yp(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return Wt = ar(Wt, e, t, n, r, l), !0;
        case "dragenter":
            return bt = ar(bt, e, t, n, r, l), !0;
        case "mouseover":
            return Vt = ar(Vt, e, t, n, r, l), !0;
        case "pointerover":
            var i = l.pointerId;
            return Rr.set(i, ar(Rr.get(i) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return i = l.pointerId, jr.set(i, ar(jr.get(i) || null, e, t, n, r, l)), !0
    }
    return !1
}

function Bc(e) {
    var t = un(e.target);
    if (t !== null) {
        var n = Sn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Lc(n), t !== null) {
                    e.blockedOn = t, Hc(e.priority, function() {
                        Uc(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function _l(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Uo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            zo = r, n.target.dispatchEvent(r), zo = null
        } else return t = el(n), t !== null && Aa(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Bs(e, t, n) {
    _l(e) && n.delete(t)
}

function Gp() {
    Io = !1, Wt !== null && _l(Wt) && (Wt = null), bt !== null && _l(bt) && (bt = null), Vt !== null && _l(Vt) && (Vt = null), Rr.forEach(Bs), jr.forEach(Bs)
}

function sr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Io || (Io = !0, Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, Gp)))
}

function Fr(e) {
    function t(l) {
        return sr(l, e)
    }
    if (0 < fl.length) {
        sr(fl[0], e);
        for (var n = 1; n < fl.length; n++) {
            var r = fl[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Wt !== null && sr(Wt, e), bt !== null && sr(bt, e), Vt !== null && sr(Vt, e), Rr.forEach(t), jr.forEach(t), n = 0; n < Dt.length; n++) r = Dt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Dt.length && (n = Dt[0], n.blockedOn === null);) Bc(n), n.blockedOn === null && Dt.shift()
}
var Un = Mt.ReactCurrentBatchConfig,
    Vl = !0;

function Xp(e, t, n, r) {
    var l = V,
        i = Un.transition;
    Un.transition = null;
    try {
        V = 1, Ha(e, t, n, r)
    } finally {
        V = l, Un.transition = i
    }
}

function Jp(e, t, n, r) {
    var l = V,
        i = Un.transition;
    Un.transition = null;
    try {
        V = 4, Ha(e, t, n, r)
    } finally {
        V = l, Un.transition = i
    }
}

function Ha(e, t, n, r) {
    if (Vl) {
        var l = Uo(e, t, n, r);
        if (l === null) qi(e, t, r, Ql, n), Hs(e, r);
        else if (Yp(l, e, t, n, r)) r.stopPropagation();
        else if (Hs(e, r), t & 4 && -1 < Kp.indexOf(e)) {
            for (; l !== null;) {
                var i = el(l);
                if (i !== null && Ic(i), i = Uo(e, t, n, r), i === null && qi(e, t, r, Ql, n), i === l) break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else qi(e, t, r, null, n)
    }
}
var Ql = null;

function Uo(e, t, n, r) {
    if (Ql = null, e = Da(r), e = un(e), e !== null)
        if (t = Sn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Lc(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Ql = e, null
}

function Wc(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Ip()) {
                case Ia:
                    return 1;
                case Rc:
                    return 4;
                case Wl:
                case Up:
                    return 16;
                case jc:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var At = null,
    Ba = null,
    $l = null;

function bc() {
    if ($l) return $l;
    var e, t = Ba,
        n = t.length,
        r, l = "value" in At ? At.value : At.textContent,
        i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return $l = l.slice(e, 1 < r ? 1 - r : void 0)
}

function Tl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function pl() {
    return !0
}

function Ws() {
    return !1
}

function Ye(e) {
    function t(n, r, l, i, o) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? pl : Ws, this.isPropagationStopped = Ws, this
    }
    return le(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = pl)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = pl)
        },
        persist: function() {},
        isPersistent: pl
    }), t
}
var Jn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Wa = Ye(Jn),
    Zr = le({}, Jn, {
        view: 0,
        detail: 0
    }),
    qp = Ye(Zr),
    Wi, bi, ur, vi = le({}, Zr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ba,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== ur && (ur && e.type === "mousemove" ? (Wi = e.screenX - ur.screenX, bi = e.screenY - ur.screenY) : bi = Wi = 0, ur = e), Wi)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : bi
        }
    }),
    bs = Ye(vi),
    Zp = le({}, vi, {
        dataTransfer: 0
    }),
    em = Ye(Zp),
    tm = le({}, Zr, {
        relatedTarget: 0
    }),
    Vi = Ye(tm),
    nm = le({}, Jn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    rm = Ye(nm),
    lm = le({}, Jn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    im = Ye(lm),
    om = le({}, Jn, {
        data: 0
    }),
    Vs = Ye(om),
    am = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    sm = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    um = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function cm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = um[e]) ? !!t[e] : !1
}

function ba() {
    return cm
}
var dm = le({}, Zr, {
        key: function(e) {
            if (e.key) {
                var t = am[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Tl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sm[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ba,
        charCode: function(e) {
            return e.type === "keypress" ? Tl(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Tl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    fm = Ye(dm),
    pm = le({}, vi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Qs = Ye(pm),
    mm = le({}, Zr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ba
    }),
    hm = Ye(mm),
    vm = le({}, Jn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    gm = Ye(vm),
    ym = le({}, vi, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    wm = Ye(ym),
    xm = [9, 13, 27, 32],
    Va = $t && "CompositionEvent" in window,
    Er = null;
$t && "documentMode" in document && (Er = document.documentMode);
var km = $t && "TextEvent" in window && !Er,
    Vc = $t && (!Va || Er && 8 < Er && 11 >= Er),
    Ks = String.fromCharCode(32),
    Ys = !1;

function Qc(e, t) {
    switch (e) {
        case "keyup":
            return xm.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Kc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Pn = !1;

function Sm(e, t) {
    switch (e) {
        case "compositionend":
            return Kc(t);
        case "keypress":
            return t.which !== 32 ? null : (Ys = !0, Ks);
        case "textInput":
            return e = t.data, e === Ks && Ys ? null : e;
        default:
            return null
    }
}

function Em(e, t) {
    if (Pn) return e === "compositionend" || !Va && Qc(e, t) ? (e = bc(), $l = Ba = At = null, Pn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Vc && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Nm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Gs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Nm[e.type] : t === "textarea"
}

function Yc(e, t, n, r) {
    Cc(r), t = Kl(t, "onChange"), 0 < t.length && (n = new Wa("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Nr = null,
    Dr = null;

function Cm(e) {
    id(e, 0)
}

function gi(e) {
    var t = Tn(e);
    if (yc(t)) return e
}

function Pm(e, t) {
    if (e === "change") return t
}
var Gc = !1;
if ($t) {
    var Qi;
    if ($t) {
        var Ki = "oninput" in document;
        if (!Ki) {
            var Xs = document.createElement("div");
            Xs.setAttribute("oninput", "return;"), Ki = typeof Xs.oninput == "function"
        }
        Qi = Ki
    } else Qi = !1;
    Gc = Qi && (!document.documentMode || 9 < document.documentMode)
}

function Js() {
    Nr && (Nr.detachEvent("onpropertychange", Xc), Dr = Nr = null)
}

function Xc(e) {
    if (e.propertyName === "value" && gi(Dr)) {
        var t = [];
        Yc(t, Dr, e, Da(e)), Tc(Cm, t)
    }
}

function _m(e, t, n) {
    e === "focusin" ? (Js(), Nr = t, Dr = n, Nr.attachEvent("onpropertychange", Xc)) : e === "focusout" && Js()
}

function $m(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return gi(Dr)
}

function Tm(e, t) {
    if (e === "click") return gi(t)
}

function Lm(e, t) {
    if (e === "input" || e === "change") return gi(t)
}

function Om(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var ct = typeof Object.is == "function" ? Object.is : Om;

function Ir(e, t) {
    if (ct(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!ko.call(t, l) || !ct(e[l], t[l])) return !1
    }
    return !0
}

function qs(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Zs(e, t) {
    var n = qs(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = qs(n)
    }
}

function Jc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Jc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function qc() {
    for (var e = window, t = Al(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Al(e.document)
    }
    return t
}

function Qa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Mm(e) {
    var t = qc(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Jc(n.ownerDocument.documentElement, n)) {
        if (r !== null && Qa(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Zs(n, i);
                var o = Zs(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var zm = $t && "documentMode" in document && 11 >= document.documentMode,
    _n = null,
    Ao = null,
    Cr = null,
    Ho = !1;

function eu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ho || _n == null || _n !== Al(r) || (r = _n, "selectionStart" in r && Qa(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Cr && Ir(Cr, r) || (Cr = r, r = Kl(Ao, "onSelect"), 0 < r.length && (t = new Wa("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = _n)))
}

function ml(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var $n = {
        animationend: ml("Animation", "AnimationEnd"),
        animationiteration: ml("Animation", "AnimationIteration"),
        animationstart: ml("Animation", "AnimationStart"),
        transitionend: ml("Transition", "TransitionEnd")
    },
    Yi = {},
    Zc = {};
$t && (Zc = document.createElement("div").style, "AnimationEvent" in window || (delete $n.animationend.animation, delete $n.animationiteration.animation, delete $n.animationstart.animation), "TransitionEvent" in window || delete $n.transitionend.transition);

function yi(e) {
    if (Yi[e]) return Yi[e];
    if (!$n[e]) return e;
    var t = $n[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Zc) return Yi[e] = t[n];
    return e
}
var ed = yi("animationend"),
    td = yi("animationiteration"),
    nd = yi("animationstart"),
    rd = yi("transitionend"),
    ld = new Map,
    tu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function tn(e, t) {
    ld.set(e, t), kn(t, [e])
}
for (var Gi = 0; Gi < tu.length; Gi++) {
    var Xi = tu[Gi],
        Rm = Xi.toLowerCase(),
        jm = Xi[0].toUpperCase() + Xi.slice(1);
    tn(Rm, "on" + jm)
}
tn(ed, "onAnimationEnd");
tn(td, "onAnimationIteration");
tn(nd, "onAnimationStart");
tn("dblclick", "onDoubleClick");
tn("focusin", "onFocus");
tn("focusout", "onBlur");
tn(rd, "onTransitionEnd");
Wn("onMouseEnter", ["mouseout", "mouseover"]);
Wn("onMouseLeave", ["mouseout", "mouseover"]);
Wn("onPointerEnter", ["pointerout", "pointerover"]);
Wn("onPointerLeave", ["pointerout", "pointerover"]);
kn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
kn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
kn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
kn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
kn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var yr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Fm = new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));

function nu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Rp(r, t, void 0, e), e.currentTarget = null
}

function id(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o],
                        s = a.instance,
                        c = a.currentTarget;
                    if (a = a.listener, s !== i && l.isPropagationStopped()) break e;
                    nu(l, a, c), i = s
                } else
                    for (o = 0; o < r.length; o++) {
                        if (a = r[o], s = a.instance, c = a.currentTarget, a = a.listener, s !== i && l.isPropagationStopped()) break e;
                        nu(l, a, c), i = s
                    }
        }
    }
    if (Bl) throw e = Fo, Bl = !1, Fo = null, e
}

function J(e, t) {
    var n = t[Qo];
    n === void 0 && (n = t[Qo] = new Set);
    var r = e + "__bubble";
    n.has(r) || (od(t, e, 2, !1), n.add(r))
}

function Ji(e, t, n) {
    var r = 0;
    t && (r |= 4), od(n, e, r, t)
}
var hl = "_reactListening" + Math.random().toString(36).slice(2);

function Ur(e) {
    if (!e[hl]) {
        e[hl] = !0, pc.forEach(function(n) {
            n !== "selectionchange" && (Fm.has(n) || Ji(n, !1, e), Ji(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[hl] || (t[hl] = !0, Ji("selectionchange", !1, t))
    }
}

function od(e, t, n, r) {
    switch (Wc(t)) {
        case 1:
            var l = Xp;
            break;
        case 4:
            l = Jp;
            break;
        default:
            l = Ha
    }
    n = l.bind(null, t, n, e), l = void 0, !jo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function qi(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var a = r.stateNode.containerInfo;
            if (a === l || a.nodeType === 8 && a.parentNode === l) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var s = o.tag;
                    if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
                    o = o.return
                }
            for (; a !== null;) {
                if (o = un(a), o === null) return;
                if (s = o.tag, s === 5 || s === 6) {
                    r = i = o;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    Tc(function() {
        var c = i,
            d = Da(n),
            p = [];
        e: {
            var v = ld.get(e);
            if (v !== void 0) {
                var y = Wa,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (Tl(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = fm;
                        break;
                    case "focusin":
                        w = "focus", y = Vi;
                        break;
                    case "focusout":
                        w = "blur", y = Vi;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = Vi;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = bs;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = em;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = hm;
                        break;
                    case ed:
                    case td:
                    case nd:
                        y = rm;
                        break;
                    case rd:
                        y = gm;
                        break;
                    case "scroll":
                        y = qp;
                        break;
                    case "wheel":
                        y = wm;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = im;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = Qs
                }
                var x = (t & 4) !== 0,
                    S = !x && e === "scroll",
                    h = x ? v !== null ? v + "Capture" : null : v;
                x = [];
                for (var f = c, g; f !== null;) {
                    g = f;
                    var k = g.stateNode;
                    if (g.tag === 5 && k !== null && (g = k, h !== null && (k = zr(f, h), k != null && x.push(Ar(f, k, g)))), S) break;
                    f = f.return
                }
                0 < x.length && (v = new y(v, w, null, n, d), p.push({
                    event: v,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (v = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", v && n !== zo && (w = n.relatedTarget || n.fromElement) && (un(w) || w[Tt])) break e;
                if ((y || v) && (v = d.window === d ? d : (v = d.ownerDocument) ? v.defaultView || v.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = c, w = w ? un(w) : null, w !== null && (S = Sn(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = c), y !== w)) {
                    if (x = bs, k = "onMouseLeave", h = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (x = Qs, k = "onPointerLeave", h = "onPointerEnter", f = "pointer"), S = y == null ? v : Tn(y), g = w == null ? v : Tn(w), v = new x(k, f + "leave", y, n, d), v.target = S, v.relatedTarget = g, k = null, un(d) === c && (x = new x(h, f + "enter", w, n, d), x.target = g, x.relatedTarget = S, k = x), S = k, y && w) t: {
                        for (x = y, h = w, f = 0, g = x; g; g = En(g)) f++;
                        for (g = 0, k = h; k; k = En(k)) g++;
                        for (; 0 < f - g;) x = En(x),
                        f--;
                        for (; 0 < g - f;) h = En(h),
                        g--;
                        for (; f--;) {
                            if (x === h || h !== null && x === h.alternate) break t;
                            x = En(x), h = En(h)
                        }
                        x = null
                    }
                    else x = null;
                    y !== null && ru(p, v, y, x, !1), w !== null && S !== null && ru(p, S, w, x, !0)
                }
            }
            e: {
                if (v = c ? Tn(c) : window, y = v.nodeName && v.nodeName.toLowerCase(), y === "select" || y === "input" && v.type === "file") var P = Pm;
                else if (Gs(v))
                    if (Gc) P = Lm;
                    else {
                        P = $m;
                        var $ = _m
                    }
                else(y = v.nodeName) && y.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (P = Tm);
                if (P && (P = P(e, c))) {
                    Yc(p, P, n, d);
                    break e
                }
                $ && $(e, v, c),
                e === "focusout" && ($ = v._wrapperState) && $.controlled && v.type === "number" && $o(v, "number", v.value)
            }
            switch ($ = c ? Tn(c) : window, e) {
                case "focusin":
                    (Gs($) || $.contentEditable === "true") && (_n = $, Ao = c, Cr = null);
                    break;
                case "focusout":
                    Cr = Ao = _n = null;
                    break;
                case "mousedown":
                    Ho = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ho = !1, eu(p, n, d);
                    break;
                case "selectionchange":
                    if (zm) break;
                case "keydown":
                case "keyup":
                    eu(p, n, d)
            }
            var L;
            if (Va) e: {
                switch (e) {
                    case "compositionstart":
                        var N = "onCompositionStart";
                        break e;
                    case "compositionend":
                        N = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        N = "onCompositionUpdate";
                        break e
                }
                N = void 0
            }
            else Pn ? Qc(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");N && (Vc && n.locale !== "ko" && (Pn || N !== "onCompositionStart" ? N === "onCompositionEnd" && Pn && (L = bc()) : (At = d, Ba = "value" in At ? At.value : At.textContent, Pn = !0)), $ = Kl(c, N), 0 < $.length && (N = new Vs(N, e, null, n, d), p.push({
                event: N,
                listeners: $
            }), L ? N.data = L : (L = Kc(n), L !== null && (N.data = L)))),
            (L = km ? Sm(e, n) : Em(e, n)) && (c = Kl(c, "onBeforeInput"), 0 < c.length && (d = new Vs("onBeforeInput", "beforeinput", null, n, d), p.push({
                event: d,
                listeners: c
            }), d.data = L))
        }
        id(p, t)
    })
}

function Ar(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Kl(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            i = l.stateNode;
        l.tag === 5 && i !== null && (l = i, i = zr(e, n), i != null && r.unshift(Ar(e, i, l)), i = zr(e, t), i != null && r.push(Ar(e, i, l))), e = e.return
    }
    return r
}

function En(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function ru(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r;) {
        var a = n,
            s = a.alternate,
            c = a.stateNode;
        if (s !== null && s === r) break;
        a.tag === 5 && c !== null && (a = c, l ? (s = zr(n, i), s != null && o.unshift(Ar(n, s, a))) : l || (s = zr(n, i), s != null && o.push(Ar(n, s, a)))), n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Dm = /\r\n?/g,
    Im = /\u0000|\uFFFD/g;

function lu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Dm, `
`).replace(Im, "")
}

function vl(e, t, n) {
    if (t = lu(t), lu(e) !== t && n) throw Error(E(425))
}

function Yl() {}
var Bo = null,
    Wo = null;

function bo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Vo = typeof setTimeout == "function" ? setTimeout : void 0,
    Um = typeof clearTimeout == "function" ? clearTimeout : void 0,
    iu = typeof Promise == "function" ? Promise : void 0,
    Am = typeof queueMicrotask == "function" ? queueMicrotask : typeof iu < "u" ? function(e) {
        return iu.resolve(null).then(e).catch(Hm)
    } : Vo;

function Hm(e) {
    setTimeout(function() {
        throw e
    })
}

function Zi(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), Fr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Fr(t)
}

function Qt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function ou(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var qn = Math.random().toString(36).slice(2),
    ht = "__reactFiber$" + qn,
    Hr = "__reactProps$" + qn,
    Tt = "__reactContainer$" + qn,
    Qo = "__reactEvents$" + qn,
    Bm = "__reactListeners$" + qn,
    Wm = "__reactHandles$" + qn;

function un(e) {
    var t = e[ht];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Tt] || n[ht]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = ou(e); e !== null;) {
                    if (n = e[ht]) return n;
                    e = ou(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function el(e) {
    return e = e[ht] || e[Tt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Tn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(E(33))
}

function wi(e) {
    return e[Hr] || null
}
var Ko = [],
    Ln = -1;

function nn(e) {
    return {
        current: e
    }
}

function q(e) {
    0 > Ln || (e.current = Ko[Ln], Ko[Ln] = null, Ln--)
}

function G(e, t) {
    Ln++, Ko[Ln] = e.current, e.current = t
}
var en = {},
    Te = nn(en),
    Ue = nn(!1),
    vn = en;

function bn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return en;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function Ae(e) {
    return e = e.childContextTypes, e != null
}

function Gl() {
    q(Ue), q(Te)
}

function au(e, t, n) {
    if (Te.current !== en) throw Error(E(168));
    G(Te, t), G(Ue, n)
}

function ad(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(E(108, _p(e) || "Unknown", l));
    return le({}, n, r)
}

function Xl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || en, vn = Te.current, G(Te, e), G(Ue, Ue.current), !0
}

function su(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(E(169));
    n ? (e = ad(e, t, vn), r.__reactInternalMemoizedMergedChildContext = e, q(Ue), q(Te), G(Te, e)) : q(Ue), G(Ue, n)
}
var kt = null,
    xi = !1,
    eo = !1;

function sd(e) {
    kt === null ? kt = [e] : kt.push(e)
}

function bm(e) {
    xi = !0, sd(e)
}

function rn() {
    if (!eo && kt !== null) {
        eo = !0;
        var e = 0,
            t = V;
        try {
            var n = kt;
            for (V = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            kt = null, xi = !1
        } catch (l) {
            throw kt !== null && (kt = kt.slice(e + 1)), zc(Ia, rn), l
        } finally {
            V = t, eo = !1
        }
    }
    return null
}
var On = [],
    Mn = 0,
    Jl = null,
    ql = 0,
    Je = [],
    qe = 0,
    gn = null,
    St = 1,
    Et = "";

function on(e, t) {
    On[Mn++] = ql, On[Mn++] = Jl, Jl = e, ql = t
}

function ud(e, t, n) {
    Je[qe++] = St, Je[qe++] = Et, Je[qe++] = gn, gn = e;
    var r = St;
    e = Et;
    var l = 32 - st(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - st(t) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, St = 1 << 32 - st(t) + l | n << l | r, Et = i + e
    } else St = 1 << i | n << l | r, Et = e
}

function Ka(e) {
    e.return !== null && (on(e, 1), ud(e, 1, 0))
}

function Ya(e) {
    for (; e === Jl;) Jl = On[--Mn], On[Mn] = null, ql = On[--Mn], On[Mn] = null;
    for (; e === gn;) gn = Je[--qe], Je[qe] = null, Et = Je[--qe], Je[qe] = null, St = Je[--qe], Je[qe] = null
}
var Ve = null,
    be = null,
    Z = !1,
    at = null;

function cd(e, t) {
    var n = Ze(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function uu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ve = e, be = Qt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ve = e, be = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = gn !== null ? {
                id: St,
                overflow: Et
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ve = e, be = null, !0) : !1;
        default:
            return !1
    }
}

function Yo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Go(e) {
    if (Z) {
        var t = be;
        if (t) {
            var n = t;
            if (!uu(e, t)) {
                if (Yo(e)) throw Error(E(418));
                t = Qt(n.nextSibling);
                var r = Ve;
                t && uu(e, t) ? cd(r, n) : (e.flags = e.flags & -4097 | 2, Z = !1, Ve = e)
            }
        } else {
            if (Yo(e)) throw Error(E(418));
            e.flags = e.flags & -4097 | 2, Z = !1, Ve = e
        }
    }
}

function cu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ve = e
}

function gl(e) {
    if (e !== Ve) return !1;
    if (!Z) return cu(e), Z = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !bo(e.type, e.memoizedProps)), t && (t = be)) {
        if (Yo(e)) throw dd(), Error(E(418));
        for (; t;) cd(e, t), t = Qt(t.nextSibling)
    }
    if (cu(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            be = Qt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            be = null
        }
    } else be = Ve ? Qt(e.stateNode.nextSibling) : null;
    return !0
}

function dd() {
    for (var e = be; e;) e = Qt(e.nextSibling)
}

function Vn() {
    be = Ve = null, Z = !1
}

function Ga(e) {
    at === null ? at = [e] : at.push(e)
}
var Vm = Mt.ReactCurrentBatchConfig;

function it(e, t) {
    if (e && e.defaultProps) {
        t = le({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Zl = nn(null),
    ei = null,
    zn = null,
    Xa = null;

function Ja() {
    Xa = zn = ei = null
}

function qa(e) {
    var t = Zl.current;
    q(Zl), e._currentValue = t
}

function Xo(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function An(e, t) {
    ei = e, Xa = zn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0), e.firstContext = null)
}

function tt(e) {
    var t = e._currentValue;
    if (Xa !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, zn === null) {
            if (ei === null) throw Error(E(308));
            zn = e, ei.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else zn = zn.next = e;
    return t
}
var cn = null;

function Za(e) {
    cn === null ? cn = [e] : cn.push(e)
}

function fd(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Za(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Lt(e, r)
}

function Lt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Ft = !1;

function es(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function pd(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Ct(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Kt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, W & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Lt(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, Za(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Lt(e, n)
}

function Ll(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Ua(e, n)
    }
}

function du(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o, n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function ti(e, t, n, r) {
    var l = e.updateQueue;
    Ft = !1;
    var i = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        a = l.shared.pending;
    if (a !== null) {
        l.shared.pending = null;
        var s = a,
            c = s.next;
        s.next = null, o === null ? i = c : o.next = c, o = s;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, a = d.lastBaseUpdate, a !== o && (a === null ? d.firstBaseUpdate = c : a.next = c, d.lastBaseUpdate = s))
    }
    if (i !== null) {
        var p = l.baseState;
        o = 0, d = c = s = null, a = i;
        do {
            var v = a.lane,
                y = a.eventTime;
            if ((r & v) === v) {
                d !== null && (d = d.next = {
                    eventTime: y,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var w = e,
                        x = a;
                    switch (v = t, y = n, x.tag) {
                        case 1:
                            if (w = x.payload, typeof w == "function") {
                                p = w.call(y, p, v);
                                break e
                            }
                            p = w;
                            break e;
                        case 3:
                            w.flags = w.flags & -65537 | 128;
                        case 0:
                            if (w = x.payload, v = typeof w == "function" ? w.call(y, p, v) : w, v == null) break e;
                            p = le({}, p, v);
                            break e;
                        case 2:
                            Ft = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [a] : v.push(a))
            } else y = {
                eventTime: y,
                lane: v,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, d === null ? (c = d = y, s = p) : d = d.next = y, o |= v;
            if (a = a.next, a === null) {
                if (a = l.shared.pending, a === null) break;
                v = a, a = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null
            }
        } while (1);
        if (d === null && (s = p), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = d, t = l.shared.interleaved, t !== null) {
            l = t;
            do o |= l.lane, l = l.next; while (l !== t)
        } else i === null && (l.shared.lanes = 0);
        wn |= o, e.lanes = o, e.memoizedState = p
    }
}

function fu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(E(191, l));
                l.call(r)
            }
        }
}
var md = new fc.Component().refs;

function Jo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : le({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ki = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Sn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Oe(),
            l = Gt(e),
            i = Ct(r, l);
        i.payload = t, n != null && (i.callback = n), t = Kt(e, i, l), t !== null && (ut(t, e, l, r), Ll(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Oe(),
            l = Gt(e),
            i = Ct(r, l);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Kt(e, i, l), t !== null && (ut(t, e, l, r), Ll(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Oe(),
            r = Gt(e),
            l = Ct(n, r);
        l.tag = 2, t != null && (l.callback = t), t = Kt(e, l, r), t !== null && (ut(t, e, r, n), Ll(t, e, r))
    }
};

function pu(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Ir(n, r) || !Ir(l, i) : !0
}

function hd(e, t, n) {
    var r = !1,
        l = en,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = tt(i) : (l = Ae(t) ? vn : Te.current, r = t.contextTypes, i = (r = r != null) ? bn(e, l) : en), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ki, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function mu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ki.enqueueReplaceState(t, t.state, null)
}

function qo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = md, es(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = tt(i) : (i = Ae(t) ? vn : Te.current, l.context = bn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Jo(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ki.enqueueReplaceState(l, l.state, null), ti(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function cr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(E(309));
                var r = n.stateNode
            }
            if (!r) throw Error(E(147, e));
            var l = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var a = l.refs;
                a === md && (a = l.refs = {}), o === null ? delete a[i] : a[i] = o
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(E(284));
        if (!n._owner) throw Error(E(290, e))
    }
    return e
}

function yl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function hu(e) {
    var t = e._init;
    return t(e._payload)
}

function vd(e) {
    function t(h, f) {
        if (e) {
            var g = h.deletions;
            g === null ? (h.deletions = [f], h.flags |= 16) : g.push(f)
        }
    }

    function n(h, f) {
        if (!e) return null;
        for (; f !== null;) t(h, f), f = f.sibling;
        return null
    }

    function r(h, f) {
        for (h = new Map; f !== null;) f.key !== null ? h.set(f.key, f) : h.set(f.index, f), f = f.sibling;
        return h
    }

    function l(h, f) {
        return h = Xt(h, f), h.index = 0, h.sibling = null, h
    }

    function i(h, f, g) {
        return h.index = g, e ? (g = h.alternate, g !== null ? (g = g.index, g < f ? (h.flags |= 2, f) : g) : (h.flags |= 2, f)) : (h.flags |= 1048576, f)
    }

    function o(h) {
        return e && h.alternate === null && (h.flags |= 2), h
    }

    function a(h, f, g, k) {
        return f === null || f.tag !== 6 ? (f = ao(g, h.mode, k), f.return = h, f) : (f = l(f, g), f.return = h, f)
    }

    function s(h, f, g, k) {
        var P = g.type;
        return P === Cn ? d(h, f, g.props.children, k, g.key) : f !== null && (f.elementType === P || typeof P == "object" && P !== null && P.$$typeof === jt && hu(P) === f.type) ? (k = l(f, g.props), k.ref = cr(h, f, g), k.return = h, k) : (k = Fl(g.type, g.key, g.props, null, h.mode, k), k.ref = cr(h, f, g), k.return = h, k)
    }

    function c(h, f, g, k) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== g.containerInfo || f.stateNode.implementation !== g.implementation ? (f = so(g, h.mode, k), f.return = h, f) : (f = l(f, g.children || []), f.return = h, f)
    }

    function d(h, f, g, k, P) {
        return f === null || f.tag !== 7 ? (f = mn(g, h.mode, k, P), f.return = h, f) : (f = l(f, g), f.return = h, f)
    }

    function p(h, f, g) {
        if (typeof f == "string" && f !== "" || typeof f == "number") return f = ao("" + f, h.mode, g), f.return = h, f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case al:
                    return g = Fl(f.type, f.key, f.props, null, h.mode, g), g.ref = cr(h, null, f), g.return = h, g;
                case Nn:
                    return f = so(f, h.mode, g), f.return = h, f;
                case jt:
                    var k = f._init;
                    return p(h, k(f._payload), g)
            }
            if (vr(f) || ir(f)) return f = mn(f, h.mode, g, null), f.return = h, f;
            yl(h, f)
        }
        return null
    }

    function v(h, f, g, k) {
        var P = f !== null ? f.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return P !== null ? null : a(h, f, "" + g, k);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case al:
                    return g.key === P ? s(h, f, g, k) : null;
                case Nn:
                    return g.key === P ? c(h, f, g, k) : null;
                case jt:
                    return P = g._init, v(h, f, P(g._payload), k)
            }
            if (vr(g) || ir(g)) return P !== null ? null : d(h, f, g, k, null);
            yl(h, g)
        }
        return null
    }

    function y(h, f, g, k, P) {
        if (typeof k == "string" && k !== "" || typeof k == "number") return h = h.get(g) || null, a(f, h, "" + k, P);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case al:
                    return h = h.get(k.key === null ? g : k.key) || null, s(f, h, k, P);
                case Nn:
                    return h = h.get(k.key === null ? g : k.key) || null, c(f, h, k, P);
                case jt:
                    var $ = k._init;
                    return y(h, f, g, $(k._payload), P)
            }
            if (vr(k) || ir(k)) return h = h.get(g) || null, d(f, h, k, P, null);
            yl(f, k)
        }
        return null
    }

    function w(h, f, g, k) {
        for (var P = null, $ = null, L = f, N = f = 0, A = null; L !== null && N < g.length; N++) {
            L.index > N ? (A = L, L = null) : A = L.sibling;
            var j = v(h, L, g[N], k);
            if (j === null) {
                L === null && (L = A);
                break
            }
            e && L && j.alternate === null && t(h, L), f = i(j, f, N), $ === null ? P = j : $.sibling = j, $ = j, L = A
        }
        if (N === g.length) return n(h, L), Z && on(h, N), P;
        if (L === null) {
            for (; N < g.length; N++) L = p(h, g[N], k), L !== null && (f = i(L, f, N), $ === null ? P = L : $.sibling = L, $ = L);
            return Z && on(h, N), P
        }
        for (L = r(h, L); N < g.length; N++) A = y(L, h, N, g[N], k), A !== null && (e && A.alternate !== null && L.delete(A.key === null ? N : A.key), f = i(A, f, N), $ === null ? P = A : $.sibling = A, $ = A);
        return e && L.forEach(function(M) {
            return t(h, M)
        }), Z && on(h, N), P
    }

    function x(h, f, g, k) {
        var P = ir(g);
        if (typeof P != "function") throw Error(E(150));
        if (g = P.call(g), g == null) throw Error(E(151));
        for (var $ = P = null, L = f, N = f = 0, A = null, j = g.next(); L !== null && !j.done; N++, j = g.next()) {
            L.index > N ? (A = L, L = null) : A = L.sibling;
            var M = v(h, L, j.value, k);
            if (M === null) {
                L === null && (L = A);
                break
            }
            e && L && M.alternate === null && t(h, L), f = i(M, f, N), $ === null ? P = M : $.sibling = M, $ = M, L = A
        }
        if (j.done) return n(h, L), Z && on(h, N), P;
        if (L === null) {
            for (; !j.done; N++, j = g.next()) j = p(h, j.value, k), j !== null && (f = i(j, f, N), $ === null ? P = j : $.sibling = j, $ = j);
            return Z && on(h, N), P
        }
        for (L = r(h, L); !j.done; N++, j = g.next()) j = y(L, h, N, j.value, k), j !== null && (e && j.alternate !== null && L.delete(j.key === null ? N : j.key), f = i(j, f, N), $ === null ? P = j : $.sibling = j, $ = j);
        return e && L.forEach(function(T) {
            return t(h, T)
        }), Z && on(h, N), P
    }

    function S(h, f, g, k) {
        if (typeof g == "object" && g !== null && g.type === Cn && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case al:
                    e: {
                        for (var P = g.key, $ = f; $ !== null;) {
                            if ($.key === P) {
                                if (P = g.type, P === Cn) {
                                    if ($.tag === 7) {
                                        n(h, $.sibling), f = l($, g.props.children), f.return = h, h = f;
                                        break e
                                    }
                                } else if ($.elementType === P || typeof P == "object" && P !== null && P.$$typeof === jt && hu(P) === $.type) {
                                    n(h, $.sibling), f = l($, g.props), f.ref = cr(h, $, g), f.return = h, h = f;
                                    break e
                                }
                                n(h, $);
                                break
                            } else t(h, $);
                            $ = $.sibling
                        }
                        g.type === Cn ? (f = mn(g.props.children, h.mode, k, g.key), f.return = h, h = f) : (k = Fl(g.type, g.key, g.props, null, h.mode, k), k.ref = cr(h, f, g), k.return = h, h = k)
                    }
                    return o(h);
                case Nn:
                    e: {
                        for ($ = g.key; f !== null;) {
                            if (f.key === $)
                                if (f.tag === 4 && f.stateNode.containerInfo === g.containerInfo && f.stateNode.implementation === g.implementation) {
                                    n(h, f.sibling), f = l(f, g.children || []), f.return = h, h = f;
                                    break e
                                } else {
                                    n(h, f);
                                    break
                                }
                            else t(h, f);
                            f = f.sibling
                        }
                        f = so(g, h.mode, k),
                        f.return = h,
                        h = f
                    }
                    return o(h);
                case jt:
                    return $ = g._init, S(h, f, $(g._payload), k)
            }
            if (vr(g)) return w(h, f, g, k);
            if (ir(g)) return x(h, f, g, k);
            yl(h, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, f !== null && f.tag === 6 ? (n(h, f.sibling), f = l(f, g), f.return = h, h = f) : (n(h, f), f = ao(g, h.mode, k), f.return = h, h = f), o(h)) : n(h, f)
    }
    return S
}
var Qn = vd(!0),
    gd = vd(!1),
    tl = {},
    yt = nn(tl),
    Br = nn(tl),
    Wr = nn(tl);

function dn(e) {
    if (e === tl) throw Error(E(174));
    return e
}

function ts(e, t) {
    switch (G(Wr, t), G(Br, e), G(yt, tl), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Lo(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Lo(t, e)
    }
    q(yt), G(yt, t)
}

function Kn() {
    q(yt), q(Br), q(Wr)
}

function yd(e) {
    dn(Wr.current);
    var t = dn(yt.current),
        n = Lo(t, e.type);
    t !== n && (G(Br, e), G(yt, n))
}

function ns(e) {
    Br.current === e && (q(yt), q(Br))
}
var ne = nn(0);

function ni(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var to = [];

function rs() {
    for (var e = 0; e < to.length; e++) to[e]._workInProgressVersionPrimary = null;
    to.length = 0
}
var Ol = Mt.ReactCurrentDispatcher,
    no = Mt.ReactCurrentBatchConfig,
    yn = 0,
    re = null,
    pe = null,
    ge = null,
    ri = !1,
    Pr = !1,
    br = 0,
    Qm = 0;

function Ce() {
    throw Error(E(321))
}

function ls(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!ct(e[n], t[n])) return !1;
    return !0
}

function is(e, t, n, r, l, i) {
    if (yn = i, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ol.current = e === null || e.memoizedState === null ? Xm : Jm, e = n(r, l), Pr) {
        i = 0;
        do {
            if (Pr = !1, br = 0, 25 <= i) throw Error(E(301));
            i += 1, ge = pe = null, t.updateQueue = null, Ol.current = qm, e = n(r, l)
        } while (Pr)
    }
    if (Ol.current = li, t = pe !== null && pe.next !== null, yn = 0, ge = pe = re = null, ri = !1, t) throw Error(E(300));
    return e
}

function os() {
    var e = br !== 0;
    return br = 0, e
}

function mt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ge === null ? re.memoizedState = ge = e : ge = ge.next = e, ge
}

function nt() {
    if (pe === null) {
        var e = re.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = pe.next;
    var t = ge === null ? re.memoizedState : ge.next;
    if (t !== null) ge = t, pe = e;
    else {
        if (e === null) throw Error(E(310));
        pe = e, e = {
            memoizedState: pe.memoizedState,
            baseState: pe.baseState,
            baseQueue: pe.baseQueue,
            queue: pe.queue,
            next: null
        }, ge === null ? re.memoizedState = ge = e : ge = ge.next = e
    }
    return ge
}

function Vr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function ro(e) {
    var t = nt(),
        n = t.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = pe,
        l = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next, i.next = o
        }
        r.baseQueue = l = i, n.pending = null
    }
    if (l !== null) {
        i = l.next, r = r.baseState;
        var a = o = null,
            s = null,
            c = i;
        do {
            var d = c.lane;
            if ((yn & d) === d) s !== null && (s = s.next = {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var p = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                s === null ? (a = s = p, o = r) : s = s.next = p, re.lanes |= d, wn |= d
            }
            c = c.next
        } while (c !== null && c !== i);
        s === null ? o = r : s.next = a, ct(r, t.memoizedState) || (Ie = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do i = l.lane, re.lanes |= i, wn |= i, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function lo(e) {
    var t = nt(),
        n = t.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do i = e(i, o.action), o = o.next; while (o !== l);
        ct(i, t.memoizedState) || (Ie = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function wd() {}

function xd(e, t) {
    var n = re,
        r = nt(),
        l = t(),
        i = !ct(r.memoizedState, l);
    if (i && (r.memoizedState = l, Ie = !0), r = r.queue, as(Ed.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ge !== null && ge.memoizedState.tag & 1) {
        if (n.flags |= 2048, Qr(9, Sd.bind(null, n, r, l, t), void 0, null), ye === null) throw Error(E(349));
        yn & 30 || kd(n, t, l)
    }
    return l
}

function kd(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = re.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Sd(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Nd(t) && Cd(e)
}

function Ed(e, t, n) {
    return n(function() {
        Nd(t) && Cd(e)
    })
}

function Nd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !ct(e, n)
    } catch {
        return !0
    }
}

function Cd(e) {
    var t = Lt(e, 1);
    t !== null && ut(t, e, 1, -1)
}

function vu(e) {
    var t = mt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Gm.bind(null, re, e), [t.memoizedState, e]
}

function Qr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = re.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Pd() {
    return nt().memoizedState
}

function Ml(e, t, n, r) {
    var l = mt();
    re.flags |= e, l.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r)
}

function Si(e, t, n, r) {
    var l = nt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (pe !== null) {
        var o = pe.memoizedState;
        if (i = o.destroy, r !== null && ls(r, o.deps)) {
            l.memoizedState = Qr(t, n, i, r);
            return
        }
    }
    re.flags |= e, l.memoizedState = Qr(1 | t, n, i, r)
}

function gu(e, t) {
    return Ml(8390656, 8, e, t)
}

function as(e, t) {
    return Si(2048, 8, e, t)
}

function _d(e, t) {
    return Si(4, 2, e, t)
}

function $d(e, t) {
    return Si(4, 4, e, t)
}

function Td(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Ld(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Si(4, 4, Td.bind(null, t, e), n)
}

function ss() {}

function Od(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ls(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Md(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ls(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function zd(e, t, n) {
    return yn & 21 ? (ct(n, t) || (n = Fc(), re.lanes |= n, wn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ie = !0), e.memoizedState = n)
}

function Km(e, t) {
    var n = V;
    V = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = no.transition;
    no.transition = {};
    try {
        e(!1), t()
    } finally {
        V = n, no.transition = r
    }
}

function Rd() {
    return nt().memoizedState
}

function Ym(e, t, n) {
    var r = Gt(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, jd(e)) Fd(t, n);
    else if (n = fd(e, t, n, r), n !== null) {
        var l = Oe();
        ut(n, e, r, l), Dd(n, t, r)
    }
}

function Gm(e, t, n) {
    var r = Gt(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (jd(e)) Fd(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var o = t.lastRenderedState,
                a = i(o, n);
            if (l.hasEagerState = !0, l.eagerState = a, ct(a, o)) {
                var s = t.interleaved;
                s === null ? (l.next = l, Za(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = fd(e, t, l, r), n !== null && (l = Oe(), ut(n, e, r, l), Dd(n, t, r))
    }
}

function jd(e) {
    var t = e.alternate;
    return e === re || t !== null && t === re
}

function Fd(e, t) {
    Pr = ri = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Dd(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Ua(e, n)
    }
}
var li = {
        readContext: tt,
        useCallback: Ce,
        useContext: Ce,
        useEffect: Ce,
        useImperativeHandle: Ce,
        useInsertionEffect: Ce,
        useLayoutEffect: Ce,
        useMemo: Ce,
        useReducer: Ce,
        useRef: Ce,
        useState: Ce,
        useDebugValue: Ce,
        useDeferredValue: Ce,
        useTransition: Ce,
        useMutableSource: Ce,
        useSyncExternalStore: Ce,
        useId: Ce,
        unstable_isNewReconciler: !1
    },
    Xm = {
        readContext: tt,
        useCallback: function(e, t) {
            return mt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: tt,
        useEffect: gu,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Ml(4194308, 4, Td.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Ml(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Ml(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = mt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = mt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Ym.bind(null, re, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = mt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: vu,
        useDebugValue: ss,
        useDeferredValue: function(e) {
            return mt().memoizedState = e
        },
        useTransition: function() {
            var e = vu(!1),
                t = e[0];
            return e = Km.bind(null, e[1]), mt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = re,
                l = mt();
            if (Z) {
                if (n === void 0) throw Error(E(407));
                n = n()
            } else {
                if (n = t(), ye === null) throw Error(E(349));
                yn & 30 || kd(r, t, n)
            }
            l.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return l.queue = i, gu(Ed.bind(null, r, i, e), [e]), r.flags |= 2048, Qr(9, Sd.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = mt(),
                t = ye.identifierPrefix;
            if (Z) {
                var n = Et,
                    r = St;
                n = (r & ~(1 << 32 - st(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = br++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Qm++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Jm = {
        readContext: tt,
        useCallback: Od,
        useContext: tt,
        useEffect: as,
        useImperativeHandle: Ld,
        useInsertionEffect: _d,
        useLayoutEffect: $d,
        useMemo: Md,
        useReducer: ro,
        useRef: Pd,
        useState: function() {
            return ro(Vr)
        },
        useDebugValue: ss,
        useDeferredValue: function(e) {
            var t = nt();
            return zd(t, pe.memoizedState, e)
        },
        useTransition: function() {
            var e = ro(Vr)[0],
                t = nt().memoizedState;
            return [e, t]
        },
        useMutableSource: wd,
        useSyncExternalStore: xd,
        useId: Rd,
        unstable_isNewReconciler: !1
    },
    qm = {
        readContext: tt,
        useCallback: Od,
        useContext: tt,
        useEffect: as,
        useImperativeHandle: Ld,
        useInsertionEffect: _d,
        useLayoutEffect: $d,
        useMemo: Md,
        useReducer: lo,
        useRef: Pd,
        useState: function() {
            return lo(Vr)
        },
        useDebugValue: ss,
        useDeferredValue: function(e) {
            var t = nt();
            return pe === null ? t.memoizedState = e : zd(t, pe.memoizedState, e)
        },
        useTransition: function() {
            var e = lo(Vr)[0],
                t = nt().memoizedState;
            return [e, t]
        },
        useMutableSource: wd,
        useSyncExternalStore: xd,
        useId: Rd,
        unstable_isNewReconciler: !1
    };

function Yn(e, t) {
    try {
        var n = "",
            r = t;
        do n += Pp(r), r = r.return; while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function io(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function Zo(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Zm = typeof WeakMap == "function" ? WeakMap : Map;

function Id(e, t, n) {
    n = Ct(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        oi || (oi = !0, ua = r), Zo(e, t)
    }, n
}

function Ud(e, t, n) {
    n = Ct(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            Zo(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Zo(e, t), typeof r != "function" && (Yt === null ? Yt = new Set([this]) : Yt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function yu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Zm;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = ph.bind(null, e, t, n), t.then(e, e))
}

function wu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function xu(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ct(-1, 1), t.tag = 2, Kt(n, t, 1))), n.lanes |= 1), e)
}
var eh = Mt.ReactCurrentOwner,
    Ie = !1;

function Le(e, t, n, r) {
    t.child = e === null ? gd(t, null, n, r) : Qn(t, e.child, n, r)
}

function ku(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return An(t, l), r = is(e, t, n, r, i, l), n = os(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ot(e, t, l)) : (Z && n && Ka(t), t.flags |= 1, Le(e, t, r, l), t.child)
}

function Su(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !vs(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ad(e, t, i, r, l)) : (e = Fl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & l)) {
        var o = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Ir, n(o, r) && e.ref === t.ref) return Ot(e, t, l)
    }
    return t.flags |= 1, e = Xt(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function Ad(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Ir(i, r) && e.ref === t.ref)
            if (Ie = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Ie = !0);
            else return t.lanes = e.lanes, Ot(e, t, l)
    }
    return ea(e, t, n, r, l)
}

function Hd(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, G(jn, Be), Be |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, G(jn, Be), Be |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, G(jn, Be), Be |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, G(jn, Be), Be |= r;
    return Le(e, t, l, n), t.child
}

function Bd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function ea(e, t, n, r, l) {
    var i = Ae(n) ? vn : Te.current;
    return i = bn(t, i), An(t, l), n = is(e, t, n, r, i, l), r = os(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ot(e, t, l)) : (Z && r && Ka(t), t.flags |= 1, Le(e, t, n, l), t.child)
}

function Eu(e, t, n, r, l) {
    if (Ae(n)) {
        var i = !0;
        Xl(t)
    } else i = !1;
    if (An(t, l), t.stateNode === null) zl(e, t), hd(t, n, r), qo(t, n, r, l), r = !0;
    else if (e === null) {
        var o = t.stateNode,
            a = t.memoizedProps;
        o.props = a;
        var s = o.context,
            c = n.contextType;
        typeof c == "object" && c !== null ? c = tt(c) : (c = Ae(n) ? vn : Te.current, c = bn(t, c));
        var d = n.getDerivedStateFromProps,
            p = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        p || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || s !== c) && mu(t, o, r, c), Ft = !1;
        var v = t.memoizedState;
        o.state = v, ti(t, r, o, l), s = t.memoizedState, a !== r || v !== s || Ue.current || Ft ? (typeof d == "function" && (Jo(t, n, d, r), s = t.memoizedState), (a = Ft || pu(t, n, a, r, v, s, c)) ? (p || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = c, r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, pd(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : it(t.type, a), o.props = c, p = t.pendingProps, v = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = tt(s) : (s = Ae(n) ? vn : Te.current, s = bn(t, s));
        var y = n.getDerivedStateFromProps;
        (d = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== p || v !== s) && mu(t, o, r, s), Ft = !1, v = t.memoizedState, o.state = v, ti(t, r, o, l);
        var w = t.memoizedState;
        a !== p || v !== w || Ue.current || Ft ? (typeof y == "function" && (Jo(t, n, y, r), w = t.memoizedState), (c = Ft || pu(t, n, c, r, v, w, s) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), o.props = r, o.state = w, o.context = s, r = c) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return ta(e, t, n, r, i, l)
}

function ta(e, t, n, r, l, i) {
    Bd(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && su(t, n, !1), Ot(e, t, i);
    r = t.stateNode, eh.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Qn(t, e.child, null, i), t.child = Qn(t, null, a, i)) : Le(e, t, a, i), t.memoizedState = r.state, l && su(t, n, !0), t.child
}

function Wd(e) {
    var t = e.stateNode;
    t.pendingContext ? au(e, t.pendingContext, t.pendingContext !== t.context) : t.context && au(e, t.context, !1), ts(e, t.containerInfo)
}

function Nu(e, t, n, r, l) {
    return Vn(), Ga(l), t.flags |= 256, Le(e, t, n, r), t.child
}
var na = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function ra(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function bd(e, t, n) {
    var r = t.pendingProps,
        l = ne.current,
        i = !1,
        o = (t.flags & 128) !== 0,
        a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), G(ne, l & 1), e === null) return Go(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Ci(o, r, 0, null), e = mn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ra(n), t.memoizedState = na, e) : us(t, o));
    if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return th(e, t, o, r, a, l, n);
    if (i) {
        i = r.fallback, o = t.mode, l = e.child, a = l.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Xt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? i = Xt(a, i) : (i = mn(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? ra(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = na, r
    }
    return i = e.child, e = i.sibling, r = Xt(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function us(e, t) {
    return t = Ci({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function wl(e, t, n, r) {
    return r !== null && Ga(r), Qn(t, e.child, null, n), e = us(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function th(e, t, n, r, l, i, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = io(Error(E(422))), wl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Ci({
        mode: "visible",
        children: r.children
    }, l, 0, null), i = mn(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Qn(t, e.child, null, o), t.child.memoizedState = ra(o), t.memoizedState = na, i);
    if (!(t.mode & 1)) return wl(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
        return r = a, i = Error(E(419)), r = io(i, r, void 0), wl(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0, Ie || a) {
        if (r = ye, r !== null) {
            switch (o & -o) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Lt(e, l), ut(r, e, l, -1))
        }
        return hs(), r = io(Error(E(421))), wl(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = mh.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, be = Qt(l.nextSibling), Ve = t, Z = !0, at = null, e !== null && (Je[qe++] = St, Je[qe++] = Et, Je[qe++] = gn, St = e.id, Et = e.overflow, gn = t), t = us(t, r.children), t.flags |= 4096, t)
}

function Cu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Xo(e.return, t, n)
}

function oo(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l)
}

function Vd(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        i = r.tail;
    if (Le(e, t, r.children, n), r = ne.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Cu(e, n, t);
            else if (e.tag === 19) Cu(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (G(ne, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && ni(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), oo(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && ni(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            oo(t, !0, n, null, i);
            break;
        case "together":
            oo(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function zl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Ot(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), wn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(E(153));
    if (t.child !== null) {
        for (e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Xt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function nh(e, t, n) {
    switch (t.tag) {
        case 3:
            Wd(t), Vn();
            break;
        case 5:
            yd(t);
            break;
        case 1:
            Ae(t.type) && Xl(t);
            break;
        case 4:
            ts(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            G(Zl, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (G(ne, ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? bd(e, t, n) : (G(ne, ne.current & 1), e = Ot(e, t, n), e !== null ? e.sibling : null);
            G(ne, ne.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Vd(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), G(ne, ne.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Hd(e, t, n)
    }
    return Ot(e, t, n)
}
var Qd, la, Kd, Yd;
Qd = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
la = function() {};
Kd = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, dn(yt.current);
        var i = null;
        switch (n) {
            case "input":
                l = Po(e, l), r = Po(e, r), i = [];
                break;
            case "select":
                l = le({}, l, {
                    value: void 0
                }), r = le({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                l = To(e, l), r = To(e, r), i = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yl)
        }
        Oo(n, r);
        var o;
        n = null;
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === "style") {
                    var a = l[c];
                    for (o in a) a.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Or.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
        for (c in r) {
            var s = r[c];
            if (a = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== a && (s != null || a != null))
                if (c === "style")
                    if (a) {
                        for (o in a) !a.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in s) s.hasOwnProperty(o) && a[o] !== s[o] && (n || (n = {}), n[o] = s[o])
                    } else n || (i || (i = []), i.push(c, n)), n = s;
            else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, a = a ? a.__html : void 0, s != null && a !== s && (i = i || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Or.hasOwnProperty(c) ? (s != null && c === "onScroll" && J("scroll", e), i || a === s || (i = [])) : (i = i || []).push(c, s))
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4)
    }
};
Yd = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function dr(e, t) {
    if (!Z) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function rh(e, t, n) {
    var r = t.pendingProps;
    switch (Ya(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Pe(t), null;
        case 1:
            return Ae(t.type) && Gl(), Pe(t), null;
        case 3:
            return r = t.stateNode, Kn(), q(Ue), q(Te), rs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (gl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, at !== null && (fa(at), at = null))), la(e, t), Pe(t), null;
        case 5:
            ns(t);
            var l = dn(Wr.current);
            if (n = t.type, e !== null && t.stateNode != null) Kd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(E(166));
                    return Pe(t), null
                }
                if (e = dn(yt.current), gl(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[ht] = t, r[Hr] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            J("cancel", r), J("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            J("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < yr.length; l++) J(yr[l], r);
                            break;
                        case "source":
                            J("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            J("error", r), J("load", r);
                            break;
                        case "details":
                            J("toggle", r);
                            break;
                        case "input":
                            Rs(r, i), J("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, J("invalid", r);
                            break;
                        case "textarea":
                            Fs(r, i), J("invalid", r)
                    }
                    Oo(n, i), l = null;
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var a = i[o];
                            o === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && vl(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && vl(r.textContent, a, e), l = ["children", "" + a]) : Or.hasOwnProperty(o) && a != null && o === "onScroll" && J("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            sl(r), js(r, i, !0);
                            break;
                        case "textarea":
                            sl(r), Ds(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Yl)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = kc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[ht] = t, e[Hr] = r, Qd(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = Mo(n, r), n) {
                            case "dialog":
                                J("cancel", e), J("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                J("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < yr.length; l++) J(yr[l], e);
                                l = r;
                                break;
                            case "source":
                                J("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                J("error", e), J("load", e), l = r;
                                break;
                            case "details":
                                J("toggle", e), l = r;
                                break;
                            case "input":
                                Rs(e, r), l = Po(e, r), J("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = le({}, r, {
                                    value: void 0
                                }), J("invalid", e);
                                break;
                            case "textarea":
                                Fs(e, r), l = To(e, r), J("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        Oo(n, l),
                        a = l;
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var s = a[i];
                                i === "style" ? Nc(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Sc(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Mr(e, s) : typeof s == "number" && Mr(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Or.hasOwnProperty(i) ? s != null && i === "onScroll" && J("scroll", e) : s != null && za(e, i, s, o))
                            }
                        switch (n) {
                            case "input":
                                sl(e), js(e, r, !1);
                                break;
                            case "textarea":
                                sl(e), Ds(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Zt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? Fn(e, !!r.multiple, i, !1) : r.defaultValue != null && Fn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Yl)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Pe(t), null;
        case 6:
            if (e && t.stateNode != null) Yd(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
                if (n = dn(Wr.current), dn(yt.current), gl(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[ht] = t, (i = r.nodeValue !== n) && (e = Ve, e !== null)) switch (e.tag) {
                        case 3:
                            vl(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && vl(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ht] = t, t.stateNode = r
            }
            return Pe(t), null;
        case 13:
            if (q(ne), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Z && be !== null && t.mode & 1 && !(t.flags & 128)) dd(), Vn(), t.flags |= 98560, i = !1;
                else if (i = gl(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(E(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(E(317));
                        i[ht] = t
                    } else Vn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Pe(t), i = !1
                } else at !== null && (fa(at), at = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ne.current & 1 ? me === 0 && (me = 3) : hs())), t.updateQueue !== null && (t.flags |= 4), Pe(t), null);
        case 4:
            return Kn(), la(e, t), e === null && Ur(t.stateNode.containerInfo), Pe(t), null;
        case 10:
            return qa(t.type._context), Pe(t), null;
        case 17:
            return Ae(t.type) && Gl(), Pe(t), null;
        case 19:
            if (q(ne), i = t.memoizedState, i === null) return Pe(t), null;
            if (r = (t.flags & 128) !== 0, o = i.rendering, o === null)
                if (r) dr(i, !1);
                else {
                    if (me !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = ni(e), o !== null) {
                                for (t.flags |= 128, dr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return G(ne, ne.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && ue() > Gn && (t.flags |= 128, r = !0, dr(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = ni(o), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), dr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !Z) return Pe(t), null
                    } else 2 * ue() - i.renderingStartTime > Gn && n !== 1073741824 && (t.flags |= 128, r = !0, dr(i, !1), t.lanes = 4194304);
                i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ue(), t.sibling = null, n = ne.current, G(ne, r ? n & 1 | 2 : n & 1), t) : (Pe(t), null);
        case 22:
        case 23:
            return ms(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Be & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(E(156, t.tag))
}

function lh(e, t) {
    switch (Ya(t), t.tag) {
        case 1:
            return Ae(t.type) && Gl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Kn(), q(Ue), q(Te), rs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return ns(t), null;
        case 13:
            if (q(ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(E(340));
                Vn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return q(ne), null;
        case 4:
            return Kn(), null;
        case 10:
            return qa(t.type._context), null;
        case 22:
        case 23:
            return ms(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var xl = !1,
    _e = !1,
    ih = typeof WeakSet == "function" ? WeakSet : Set,
    z = null;

function Rn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            oe(e, t, r)
        } else n.current = null
}

function ia(e, t, n) {
    try {
        n()
    } catch (r) {
        oe(e, t, r)
    }
}
var Pu = !1;

function oh(e, t) {
    if (Bo = Vl, e = qc(), Qa(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    a = -1,
                    s = -1,
                    c = 0,
                    d = 0,
                    p = e,
                    v = null;
                t: for (;;) {
                    for (var y; p !== n || l !== 0 && p.nodeType !== 3 || (a = o + l), p !== i || r !== 0 && p.nodeType !== 3 || (s = o + r), p.nodeType === 3 && (o += p.nodeValue.length), (y = p.firstChild) !== null;) v = p, p = y;
                    for (;;) {
                        if (p === e) break t;
                        if (v === n && ++c === l && (a = o), v === i && ++d === r && (s = o), (y = p.nextSibling) !== null) break;
                        p = v, v = p.parentNode
                    }
                    p = y
                }
                n = a === -1 || s === -1 ? null : {
                    start: a,
                    end: s
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Wo = {
            focusedElem: e,
            selectionRange: n
        }, Vl = !1, z = t; z !== null;)
        if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
        else
            for (; z !== null;) {
                t = z;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var x = w.memoizedProps,
                                    S = w.memoizedState,
                                    h = t.stateNode,
                                    f = h.getSnapshotBeforeUpdate(t.elementType === t.type ? x : it(t.type, x), S);
                                h.__reactInternalSnapshotBeforeUpdate = f
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(E(163))
                    }
                } catch (k) {
                    oe(t, t.return, k)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, z = e;
                    break
                }
                z = t.return
            }
    return w = Pu, Pu = !1, w
}

function _r(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0, i !== void 0 && ia(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}

function Ei(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function oa(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Gd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Gd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ht], delete t[Hr], delete t[Qo], delete t[Bm], delete t[Wm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Xd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function _u(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Xd(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function aa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yl));
    else if (r !== 4 && (e = e.child, e !== null))
        for (aa(e, t, n), e = e.sibling; e !== null;) aa(e, t, n), e = e.sibling
}

function sa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (sa(e, t, n), e = e.sibling; e !== null;) sa(e, t, n), e = e.sibling
}
var xe = null,
    ot = !1;

function Rt(e, t, n) {
    for (n = n.child; n !== null;) Jd(e, t, n), n = n.sibling
}

function Jd(e, t, n) {
    if (gt && typeof gt.onCommitFiberUnmount == "function") try {
        gt.onCommitFiberUnmount(hi, n)
    } catch {}
    switch (n.tag) {
        case 5:
            _e || Rn(n, t);
        case 6:
            var r = xe,
                l = ot;
            xe = null, Rt(e, t, n), xe = r, ot = l, xe !== null && (ot ? (e = xe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : xe.removeChild(n.stateNode));
            break;
        case 18:
            xe !== null && (ot ? (e = xe, n = n.stateNode, e.nodeType === 8 ? Zi(e.parentNode, n) : e.nodeType === 1 && Zi(e, n), Fr(e)) : Zi(xe, n.stateNode));
            break;
        case 4:
            r = xe, l = ot, xe = n.stateNode.containerInfo, ot = !0, Rt(e, t, n), xe = r, ot = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!_e && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var i = l,
                        o = i.destroy;
                    i = i.tag, o !== void 0 && (i & 2 || i & 4) && ia(n, t, o), l = l.next
                } while (l !== r)
            }
            Rt(e, t, n);
            break;
        case 1:
            if (!_e && (Rn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                oe(n, t, a)
            }
            Rt(e, t, n);
            break;
        case 21:
            Rt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (_e = (r = _e) || n.memoizedState !== null, Rt(e, t, n), _e = r) : Rt(e, t, n);
            break;
        default:
            Rt(e, t, n)
    }
}

function $u(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new ih), t.forEach(function(r) {
            var l = hh.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function lt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e,
                    o = t,
                    a = o;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            xe = a.stateNode, ot = !1;
                            break e;
                        case 3:
                            xe = a.stateNode.containerInfo, ot = !0;
                            break e;
                        case 4:
                            xe = a.stateNode.containerInfo, ot = !0;
                            break e
                    }
                    a = a.return
                }
                if (xe === null) throw Error(E(160));
                Jd(i, o, l), xe = null, ot = !1;
                var s = l.alternate;
                s !== null && (s.return = null), l.return = null
            } catch (c) {
                oe(l, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) qd(t, e), t = t.sibling
}

function qd(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (lt(t, e), pt(e), r & 4) {
                try {
                    _r(3, e, e.return), Ei(3, e)
                } catch (x) {
                    oe(e, e.return, x)
                }
                try {
                    _r(5, e, e.return)
                } catch (x) {
                    oe(e, e.return, x)
                }
            }
            break;
        case 1:
            lt(t, e), pt(e), r & 512 && n !== null && Rn(n, n.return);
            break;
        case 5:
            if (lt(t, e), pt(e), r & 512 && n !== null && Rn(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    Mr(l, "")
                } catch (x) {
                    oe(e, e.return, x)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var i = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    s = e.updateQueue;
                if (e.updateQueue = null, s !== null) try {
                    a === "input" && i.type === "radio" && i.name != null && wc(l, i), Mo(a, o);
                    var c = Mo(a, i);
                    for (o = 0; o < s.length; o += 2) {
                        var d = s[o],
                            p = s[o + 1];
                        d === "style" ? Nc(l, p) : d === "dangerouslySetInnerHTML" ? Sc(l, p) : d === "children" ? Mr(l, p) : za(l, d, p, c)
                    }
                    switch (a) {
                        case "input":
                            _o(l, i);
                            break;
                        case "textarea":
                            xc(l, i);
                            break;
                        case "select":
                            var v = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!i.multiple;
                            var y = i.value;
                            y != null ? Fn(l, !!i.multiple, y, !1) : v !== !!i.multiple && (i.defaultValue != null ? Fn(l, !!i.multiple, i.defaultValue, !0) : Fn(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[Hr] = i
                } catch (x) {
                    oe(e, e.return, x)
                }
            }
            break;
        case 6:
            if (lt(t, e), pt(e), r & 4) {
                if (e.stateNode === null) throw Error(E(162));
                l = e.stateNode, i = e.memoizedProps;
                try {
                    l.nodeValue = i
                } catch (x) {
                    oe(e, e.return, x)
                }
            }
            break;
        case 3:
            if (lt(t, e), pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Fr(t.containerInfo)
            } catch (x) {
                oe(e, e.return, x)
            }
            break;
        case 4:
            lt(t, e), pt(e);
            break;
        case 13:
            lt(t, e), pt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (fs = ue())), r & 4 && $u(e);
            break;
        case 22:
            if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (_e = (c = _e) || d, lt(t, e), _e = c) : lt(t, e), pt(e), r & 8192) {
                if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !d && e.mode & 1)
                    for (z = e, d = e.child; d !== null;) {
                        for (p = z = d; z !== null;) {
                            switch (v = z, y = v.child, v.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    _r(4, v, v.return);
                                    break;
                                case 1:
                                    Rn(v, v.return);
                                    var w = v.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        r = v, n = v.return;
                                        try {
                                            t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
                                        } catch (x) {
                                            oe(r, n, x)
                                        }
                                    }
                                    break;
                                case 5:
                                    Rn(v, v.return);
                                    break;
                                case 22:
                                    if (v.memoizedState !== null) {
                                        Lu(p);
                                        continue
                                    }
                            }
                            y !== null ? (y.return = v, z = y) : Lu(p)
                        }
                        d = d.sibling
                    }
                e: for (d = null, p = e;;) {
                    if (p.tag === 5) {
                        if (d === null) {
                            d = p;
                            try {
                                l = p.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = p.stateNode, s = p.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, a.style.display = Ec("display", o))
                            } catch (x) {
                                oe(e, e.return, x)
                            }
                        }
                    } else if (p.tag === 6) {
                        if (d === null) try {
                            p.stateNode.nodeValue = c ? "" : p.memoizedProps
                        } catch (x) {
                            oe(e, e.return, x)
                        }
                    } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                        p.child.return = p, p = p.child;
                        continue
                    }
                    if (p === e) break e;
                    for (; p.sibling === null;) {
                        if (p.return === null || p.return === e) break e;
                        d === p && (d = null), p = p.return
                    }
                    d === p && (d = null), p.sibling.return = p.return, p = p.sibling
                }
            }
            break;
        case 19:
            lt(t, e), pt(e), r & 4 && $u(e);
            break;
        case 21:
            break;
        default:
            lt(t, e), pt(e)
    }
}

function pt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Xd(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(E(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Mr(l, ""), r.flags &= -33);
                    var i = _u(e);
                    sa(e, i, l);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        a = _u(e);
                    aa(e, a, o);
                    break;
                default:
                    throw Error(E(161))
            }
        }
        catch (s) {
            oe(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function ah(e, t, n) {
    z = e, Zd(e)
}

function Zd(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null;) {
        var l = z,
            i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || xl;
            if (!o) {
                var a = l.alternate,
                    s = a !== null && a.memoizedState !== null || _e;
                a = xl;
                var c = _e;
                if (xl = o, (_e = s) && !c)
                    for (z = l; z !== null;) o = z, s = o.child, o.tag === 22 && o.memoizedState !== null ? Ou(l) : s !== null ? (s.return = o, z = s) : Ou(l);
                for (; i !== null;) z = i, Zd(i), i = i.sibling;
                z = l, xl = a, _e = c
            }
            Tu(e)
        } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, z = i) : Tu(e)
    }
}

function Tu(e) {
    for (; z !== null;) {
        var t = z;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        _e || Ei(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !_e)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && fu(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            fu(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var s = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    s.autoFocus && n.focus();
                                    break;
                                case "img":
                                    s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var p = d.dehydrated;
                                    p !== null && Fr(p)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(E(163))
                }
                _e || t.flags & 512 && oa(t)
            } catch (v) {
                oe(t, t.return, v)
            }
        }
        if (t === e) {
            z = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, z = n;
            break
        }
        z = t.return
    }
}

function Lu(e) {
    for (; z !== null;) {
        var t = z;
        if (t === e) {
            z = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, z = n;
            break
        }
        z = t.return
    }
}

function Ou(e) {
    for (; z !== null;) {
        var t = z;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Ei(4, t)
                    } catch (s) {
                        oe(t, n, s)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (s) {
                            oe(t, l, s)
                        }
                    }
                    var i = t.return;
                    try {
                        oa(t)
                    } catch (s) {
                        oe(t, i, s)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        oa(t)
                    } catch (s) {
                        oe(t, o, s)
                    }
            }
        } catch (s) {
            oe(t, t.return, s)
        }
        if (t === e) {
            z = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, z = a;
            break
        }
        z = t.return
    }
}
var sh = Math.ceil,
    ii = Mt.ReactCurrentDispatcher,
    cs = Mt.ReactCurrentOwner,
    et = Mt.ReactCurrentBatchConfig,
    W = 0,
    ye = null,
    fe = null,
    ke = 0,
    Be = 0,
    jn = nn(0),
    me = 0,
    Kr = null,
    wn = 0,
    Ni = 0,
    ds = 0,
    $r = null,
    De = null,
    fs = 0,
    Gn = 1 / 0,
    xt = null,
    oi = !1,
    ua = null,
    Yt = null,
    kl = !1,
    Ht = null,
    ai = 0,
    Tr = 0,
    ca = null,
    Rl = -1,
    jl = 0;

function Oe() {
    return W & 6 ? ue() : Rl !== -1 ? Rl : Rl = ue()
}

function Gt(e) {
    return e.mode & 1 ? W & 2 && ke !== 0 ? ke & -ke : Vm.transition !== null ? (jl === 0 && (jl = Fc()), jl) : (e = V, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Wc(e.type)), e) : 1
}

function ut(e, t, n, r) {
    if (50 < Tr) throw Tr = 0, ca = null, Error(E(185));
    qr(e, n, r), (!(W & 2) || e !== ye) && (e === ye && (!(W & 2) && (Ni |= n), me === 4 && It(e, ke)), He(e, r), n === 1 && W === 0 && !(t.mode & 1) && (Gn = ue() + 500, xi && rn()))
}

function He(e, t) {
    var n = e.callbackNode;
    Vp(e, t);
    var r = bl(e, e === ye ? ke : 0);
    if (r === 0) n !== null && As(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && As(n), t === 1) e.tag === 0 ? bm(Mu.bind(null, e)) : sd(Mu.bind(null, e)), Am(function() {
            !(W & 6) && rn()
        }), n = null;
        else {
            switch (Dc(r)) {
                case 1:
                    n = Ia;
                    break;
                case 4:
                    n = Rc;
                    break;
                case 16:
                    n = Wl;
                    break;
                case 536870912:
                    n = jc;
                    break;
                default:
                    n = Wl
            }
            n = sf(n, ef.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function ef(e, t) {
    if (Rl = -1, jl = 0, W & 6) throw Error(E(327));
    var n = e.callbackNode;
    if (Hn() && e.callbackNode !== n) return null;
    var r = bl(e, e === ye ? ke : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = si(e, r);
    else {
        t = r;
        var l = W;
        W |= 2;
        var i = nf();
        (ye !== e || ke !== t) && (xt = null, Gn = ue() + 500, pn(e, t));
        do try {
            dh();
            break
        } catch (a) {
            tf(e, a)
        }
        while (1);
        Ja(), ii.current = i, W = l, fe !== null ? t = 0 : (ye = null, ke = 0, t = me)
    }
    if (t !== 0) {
        if (t === 2 && (l = Do(e), l !== 0 && (r = l, t = da(e, l))), t === 1) throw n = Kr, pn(e, 0), It(e, r), He(e, ue()), n;
        if (t === 6) It(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !uh(l) && (t = si(e, r), t === 2 && (i = Do(e), i !== 0 && (r = i, t = da(e, i))), t === 1)) throw n = Kr, pn(e, 0), It(e, r), He(e, ue()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(E(345));
                case 2:
                    an(e, De, xt);
                    break;
                case 3:
                    if (It(e, r), (r & 130023424) === r && (t = fs + 500 - ue(), 10 < t)) {
                        if (bl(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            Oe(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = Vo(an.bind(null, e, De, xt), t);
                        break
                    }
                    an(e, De, xt);
                    break;
                case 4:
                    if (It(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var o = 31 - st(r);
                        i = 1 << o, o = t[o], o > l && (l = o), r &= ~i
                    }
                    if (r = l, r = ue() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * sh(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Vo(an.bind(null, e, De, xt), r);
                        break
                    }
                    an(e, De, xt);
                    break;
                case 5:
                    an(e, De, xt);
                    break;
                default:
                    throw Error(E(329))
            }
        }
    }
    return He(e, ue()), e.callbackNode === n ? ef.bind(null, e) : null
}

function da(e, t) {
    var n = $r;
    return e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256), e = si(e, t), e !== 2 && (t = De, De = n, t !== null && fa(t)), e
}

function fa(e) {
    De === null ? De = e : De.push.apply(De, e)
}

function uh(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!ct(i(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function It(e, t) {
    for (t &= ~ds, t &= ~Ni, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - st(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Mu(e) {
    if (W & 6) throw Error(E(327));
    Hn();
    var t = bl(e, 0);
    if (!(t & 1)) return He(e, ue()), null;
    var n = si(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Do(e);
        r !== 0 && (t = r, n = da(e, r))
    }
    if (n === 1) throw n = Kr, pn(e, 0), It(e, t), He(e, ue()), n;
    if (n === 6) throw Error(E(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, an(e, De, xt), He(e, ue()), null
}

function ps(e, t) {
    var n = W;
    W |= 1;
    try {
        return e(t)
    } finally {
        W = n, W === 0 && (Gn = ue() + 500, xi && rn())
    }
}

function xn(e) {
    Ht !== null && Ht.tag === 0 && !(W & 6) && Hn();
    var t = W;
    W |= 1;
    var n = et.transition,
        r = V;
    try {
        if (et.transition = null, V = 1, e) return e()
    } finally {
        V = r, et.transition = n, W = t, !(W & 6) && rn()
    }
}

function ms() {
    Be = jn.current, q(jn)
}

function pn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Um(n)), fe !== null)
        for (n = fe.return; n !== null;) {
            var r = n;
            switch (Ya(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Gl();
                    break;
                case 3:
                    Kn(), q(Ue), q(Te), rs();
                    break;
                case 5:
                    ns(r);
                    break;
                case 4:
                    Kn();
                    break;
                case 13:
                    q(ne);
                    break;
                case 19:
                    q(ne);
                    break;
                case 10:
                    qa(r.type._context);
                    break;
                case 22:
                case 23:
                    ms()
            }
            n = n.return
        }
    if (ye = e, fe = e = Xt(e.current, null), ke = Be = t, me = 0, Kr = null, ds = Ni = wn = 0, De = $r = null, cn !== null) {
        for (t = 0; t < cn.length; t++)
            if (n = cn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l, r.next = o
                }
                n.pending = r
            }
        cn = null
    }
    return e
}

function tf(e, t) {
    do {
        var n = fe;
        try {
            if (Ja(), Ol.current = li, ri) {
                for (var r = re.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                ri = !1
            }
            if (yn = 0, ge = pe = re = null, Pr = !1, br = 0, cs.current = null, n === null || n.return === null) {
                me = 1, Kr = t, fe = null;
                break
            }
            e: {
                var i = e,
                    o = n.return,
                    a = n,
                    s = t;
                if (t = ke, a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                    var c = s,
                        d = a,
                        p = d.tag;
                    if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var v = d.alternate;
                        v ? (d.updateQueue = v.updateQueue, d.memoizedState = v.memoizedState, d.lanes = v.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var y = wu(o);
                    if (y !== null) {
                        y.flags &= -257, xu(y, o, a, i, t), y.mode & 1 && yu(i, c, t), t = y, s = c;
                        var w = t.updateQueue;
                        if (w === null) {
                            var x = new Set;
                            x.add(s), t.updateQueue = x
                        } else w.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            yu(i, c, t), hs();
                            break e
                        }
                        s = Error(E(426))
                    }
                } else if (Z && a.mode & 1) {
                    var S = wu(o);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256), xu(S, o, a, i, t), Ga(Yn(s, a));
                        break e
                    }
                }
                i = s = Yn(s, a),
                me !== 4 && (me = 2),
                $r === null ? $r = [i] : $r.push(i),
                i = o;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var h = Id(i, s, t);
                            du(i, h);
                            break e;
                        case 1:
                            a = s;
                            var f = i.type,
                                g = i.stateNode;
                            if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Yt === null || !Yt.has(g)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var k = Ud(i, a, t);
                                du(i, k);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            lf(n)
        } catch (P) {
            t = P, fe === n && n !== null && (fe = n = n.return);
            continue
        }
        break
    } while (1)
}

function nf() {
    var e = ii.current;
    return ii.current = li, e === null ? li : e
}

function hs() {
    (me === 0 || me === 3 || me === 2) && (me = 4), ye === null || !(wn & 268435455) && !(Ni & 268435455) || It(ye, ke)
}

function si(e, t) {
    var n = W;
    W |= 2;
    var r = nf();
    (ye !== e || ke !== t) && (xt = null, pn(e, t));
    do try {
        ch();
        break
    } catch (l) {
        tf(e, l)
    }
    while (1);
    if (Ja(), W = n, ii.current = r, fe !== null) throw Error(E(261));
    return ye = null, ke = 0, me
}

function ch() {
    for (; fe !== null;) rf(fe)
}

function dh() {
    for (; fe !== null && !Fp();) rf(fe)
}

function rf(e) {
    var t = af(e.alternate, e, Be);
    e.memoizedProps = e.pendingProps, t === null ? lf(e) : fe = t, cs.current = null
}

function lf(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = lh(n, t), n !== null) {
                n.flags &= 32767, fe = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                me = 6, fe = null;
                return
            }
        } else if (n = rh(n, t, Be), n !== null) {
            fe = n;
            return
        }
        if (t = t.sibling, t !== null) {
            fe = t;
            return
        }
        fe = t = e
    } while (t !== null);
    me === 0 && (me = 5)
}

function an(e, t, n) {
    var r = V,
        l = et.transition;
    try {
        et.transition = null, V = 1, fh(e, t, n, r)
    } finally {
        et.transition = l, V = r
    }
    return null
}

function fh(e, t, n, r) {
    do Hn(); while (Ht !== null);
    if (W & 6) throw Error(E(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Qp(e, i), e === ye && (fe = ye = null, ke = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || kl || (kl = !0, sf(Wl, function() {
            return Hn(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = et.transition, et.transition = null;
        var o = V;
        V = 1;
        var a = W;
        W |= 4, cs.current = null, oh(e, n), qd(n, e), Mm(Wo), Vl = !!Bo, Wo = Bo = null, e.current = n, ah(n), Dp(), W = a, V = o, et.transition = i
    } else e.current = n;
    if (kl && (kl = !1, Ht = e, ai = l), i = e.pendingLanes, i === 0 && (Yt = null), Ap(n.stateNode), He(e, ue()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (oi) throw oi = !1, e = ua, ua = null, e;
    return ai & 1 && e.tag !== 0 && Hn(), i = e.pendingLanes, i & 1 ? e === ca ? Tr++ : (Tr = 0, ca = e) : Tr = 0, rn(), null
}

function Hn() {
    if (Ht !== null) {
        var e = Dc(ai),
            t = et.transition,
            n = V;
        try {
            if (et.transition = null, V = 16 > e ? 16 : e, Ht === null) var r = !1;
            else {
                if (e = Ht, Ht = null, ai = 0, W & 6) throw Error(E(331));
                var l = W;
                for (W |= 4, z = e.current; z !== null;) {
                    var i = z,
                        o = i.child;
                    if (z.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var s = 0; s < a.length; s++) {
                                var c = a[s];
                                for (z = c; z !== null;) {
                                    var d = z;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            _r(8, d, i)
                                    }
                                    var p = d.child;
                                    if (p !== null) p.return = d, z = p;
                                    else
                                        for (; z !== null;) {
                                            d = z;
                                            var v = d.sibling,
                                                y = d.return;
                                            if (Gd(d), d === c) {
                                                z = null;
                                                break
                                            }
                                            if (v !== null) {
                                                v.return = y, z = v;
                                                break
                                            }
                                            z = y
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var x = w.child;
                                if (x !== null) {
                                    w.child = null;
                                    do {
                                        var S = x.sibling;
                                        x.sibling = null, x = S
                                    } while (x !== null)
                                }
                            }
                            z = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null) o.return = i, z = o;
                    else e: for (; z !== null;) {
                        if (i = z, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                _r(9, i, i.return)
                        }
                        var h = i.sibling;
                        if (h !== null) {
                            h.return = i.return, z = h;
                            break e
                        }
                        z = i.return
                    }
                }
                var f = e.current;
                for (z = f; z !== null;) {
                    o = z;
                    var g = o.child;
                    if (o.subtreeFlags & 2064 && g !== null) g.return = o, z = g;
                    else e: for (o = f; z !== null;) {
                        if (a = z, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ei(9, a)
                            }
                        } catch (P) {
                            oe(a, a.return, P)
                        }
                        if (a === o) {
                            z = null;
                            break e
                        }
                        var k = a.sibling;
                        if (k !== null) {
                            k.return = a.return, z = k;
                            break e
                        }
                        z = a.return
                    }
                }
                if (W = l, rn(), gt && typeof gt.onPostCommitFiberRoot == "function") try {
                    gt.onPostCommitFiberRoot(hi, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            V = n, et.transition = t
        }
    }
    return !1
}

function zu(e, t, n) {
    t = Yn(n, t), t = Id(e, t, 1), e = Kt(e, t, 1), t = Oe(), e !== null && (qr(e, 1, t), He(e, t))
}

function oe(e, t, n) {
    if (e.tag === 3) zu(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                zu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Yt === null || !Yt.has(r))) {
                    e = Yn(n, e), e = Ud(t, e, 1), t = Kt(t, e, 1), e = Oe(), t !== null && (qr(t, 1, e), He(t, e));
                    break
                }
            }
            t = t.return
        }
}

function ph(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Oe(), e.pingedLanes |= e.suspendedLanes & n, ye === e && (ke & n) === n && (me === 4 || me === 3 && (ke & 130023424) === ke && 500 > ue() - fs ? pn(e, 0) : ds |= n), He(e, t)
}

function of (e, t) {
    t === 0 && (e.mode & 1 ? (t = dl, dl <<= 1, !(dl & 130023424) && (dl = 4194304)) : t = 1);
    var n = Oe();
    e = Lt(e, t), e !== null && (qr(e, t, n), He(e, n))
}

function mh(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), of (e, n)
}

function hh(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(E(314))
    }
    r !== null && r.delete(t), of (e, n)
}
var af;
af = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ue.current) Ie = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Ie = !1, nh(e, t, n);
            Ie = !!(e.flags & 131072)
        }
    else Ie = !1, Z && t.flags & 1048576 && ud(t, ql, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            zl(e, t), e = t.pendingProps;
            var l = bn(t, Te.current);
            An(t, n), l = is(null, t, r, e, l, n);
            var i = os();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ae(r) ? (i = !0, Xl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, es(t), l.updater = ki, t.stateNode = l, l._reactInternals = t, qo(t, r, e, n), t = ta(null, t, r, !0, i, n)) : (t.tag = 0, Z && i && Ka(t), Le(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (zl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = gh(r), e = it(r, e), l) {
                    case 0:
                        t = ea(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Eu(null, t, r, e, n);
                        break e;
                    case 11:
                        t = ku(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Su(null, t, r, it(r.type, e), n);
                        break e
                }
                throw Error(E(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : it(r, l), ea(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : it(r, l), Eu(e, t, r, l, n);
        case 3:
            e: {
                if (Wd(t), e === null) throw Error(E(387));r = t.pendingProps,
                i = t.memoizedState,
                l = i.element,
                pd(e, t),
                ti(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        l = Yn(Error(E(423)), t), t = Nu(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = Yn(Error(E(424)), t), t = Nu(e, t, r, n, l);
                    break e
                } else
                    for (be = Qt(t.stateNode.containerInfo.firstChild), Ve = t, Z = !0, at = null, n = gd(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Vn(), r === l) {
                        t = Ot(e, t, n);
                        break e
                    }
                    Le(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return yd(t), e === null && Go(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, bo(r, l) ? o = null : i !== null && bo(r, i) && (t.flags |= 32), Bd(e, t), Le(e, t, o, n), t.child;
        case 6:
            return e === null && Go(t), null;
        case 13:
            return bd(e, t, n);
        case 4:
            return ts(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Qn(t, null, r, n) : Le(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : it(r, l), ku(e, t, r, l, n);
        case 7:
            return Le(e, t, t.pendingProps, n), t.child;
        case 8:
            return Le(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Le(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, G(Zl, r._currentValue), r._currentValue = o, i !== null)
                    if (ct(i.value, o)) {
                        if (i.children === l.children && !Ue.current) {
                            t = Ot(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var a = i.dependencies;
                            if (a !== null) {
                                o = i.child;
                                for (var s = a.firstContext; s !== null;) {
                                    if (s.context === r) {
                                        if (i.tag === 1) {
                                            s = Ct(-1, n & -n), s.tag = 2;
                                            var c = i.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var d = c.pending;
                                                d === null ? s.next = s : (s.next = d.next, d.next = s), c.pending = s
                                            }
                                        }
                                        i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Xo(i.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    s = s.next
                                }
                            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (o = i.return, o === null) throw Error(E(341));
                                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Xo(o, n, t), o = i.sibling
                            } else o = i.child;
                            if (o !== null) o.return = i;
                            else
                                for (o = i; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (i = o.sibling, i !== null) {
                                        i.return = o.return, o = i;
                                        break
                                    }
                                    o = o.return
                                }
                            i = o
                        }
                Le(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, An(t, n), l = tt(l), r = r(l), t.flags |= 1, Le(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = it(r, t.pendingProps), l = it(r.type, l), Su(e, t, r, l, n);
        case 15:
            return Ad(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : it(r, l), zl(e, t), t.tag = 1, Ae(r) ? (e = !0, Xl(t)) : e = !1, An(t, n), hd(t, r, l), qo(t, r, l, n), ta(null, t, r, !0, e, n);
        case 19:
            return Vd(e, t, n);
        case 22:
            return Hd(e, t, n)
    }
    throw Error(E(156, t.tag))
};

function sf(e, t) {
    return zc(e, t)
}

function vh(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ze(e, t, n, r) {
    return new vh(e, t, n, r)
}

function vs(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function gh(e) {
    if (typeof e == "function") return vs(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === ja) return 11;
        if (e === Fa) return 14
    }
    return 2
}

function Xt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Fl(e, t, n, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") vs(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case Cn:
            return mn(n.children, l, i, t);
        case Ra:
            o = 8, l |= 8;
            break;
        case So:
            return e = Ze(12, n, t, l | 2), e.elementType = So, e.lanes = i, e;
        case Eo:
            return e = Ze(13, n, t, l), e.elementType = Eo, e.lanes = i, e;
        case No:
            return e = Ze(19, n, t, l), e.elementType = No, e.lanes = i, e;
        case vc:
            return Ci(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case mc:
                    o = 10;
                    break e;
                case hc:
                    o = 9;
                    break e;
                case ja:
                    o = 11;
                    break e;
                case Fa:
                    o = 14;
                    break e;
                case jt:
                    o = 16, r = null;
                    break e
            }
            throw Error(E(130, e == null ? e : typeof e, ""))
    }
    return t = Ze(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t
}

function mn(e, t, n, r) {
    return e = Ze(7, e, r, t), e.lanes = n, e
}

function Ci(e, t, n, r) {
    return e = Ze(22, e, r, t), e.elementType = vc, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function ao(e, t, n) {
    return e = Ze(6, e, null, t), e.lanes = n, e
}

function so(e, t, n) {
    return t = Ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function yh(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Bi(0), this.expirationTimes = Bi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bi(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function gs(e, t, n, r, l, i, o, a, s) {
    return e = new yh(e, t, n, a, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ze(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, es(i), e
}

function wh(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Nn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function uf(e) {
    if (!e) return en;
    e = e._reactInternals;
    e: {
        if (Sn(e) !== e || e.tag !== 1) throw Error(E(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ae(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(E(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ae(n)) return ad(e, n, t)
    }
    return t
}

function cf(e, t, n, r, l, i, o, a, s) {
    return e = gs(n, r, !0, e, l, i, o, a, s), e.context = uf(null), n = e.current, r = Oe(), l = Gt(n), i = Ct(r, l), i.callback = t ? ? null, Kt(n, i, l), e.current.lanes = l, qr(e, l, r), He(e, r), e
}

function Pi(e, t, n, r) {
    var l = t.current,
        i = Oe(),
        o = Gt(l);
    return n = uf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ct(i, o), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Kt(l, t, o), e !== null && (ut(e, l, o, i), Ll(e, l, o)), o
}

function ui(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Ru(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function ys(e, t) {
    Ru(e, t), (e = e.alternate) && Ru(e, t)
}

function xh() {
    return null
}
var df = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function ws(e) {
    this._internalRoot = e
}
_i.prototype.render = ws.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(E(409));
    Pi(e, t, null, null)
};
_i.prototype.unmount = ws.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        xn(function() {
            Pi(null, e, null, null)
        }), t[Tt] = null
    }
};

function _i(e) {
    this._internalRoot = e
}
_i.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Ac();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
        Dt.splice(n, 0, e), n === 0 && Bc(e)
    }
};

function xs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function $i(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function ju() {}

function kh(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var c = ui(o);
                i.call(c)
            }
        }
        var o = cf(t, r, e, 0, null, !1, !1, "", ju);
        return e._reactRootContainer = o, e[Tt] = o.current, Ur(e.nodeType === 8 ? e.parentNode : e), xn(), o
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var c = ui(s);
            a.call(c)
        }
    }
    var s = gs(e, 0, !1, null, null, !1, !1, "", ju);
    return e._reactRootContainer = s, e[Tt] = s.current, Ur(e.nodeType === 8 ? e.parentNode : e), xn(function() {
        Pi(t, s, n, r)
    }), s
}

function Ti(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var a = l;
            l = function() {
                var s = ui(o);
                a.call(s)
            }
        }
        Pi(t, o, e, l)
    } else o = kh(n, t, e, l, r);
    return ui(o)
}
Ic = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = gr(t.pendingLanes);
                n !== 0 && (Ua(t, n | 1), He(t, ue()), !(W & 6) && (Gn = ue() + 500, rn()))
            }
            break;
        case 13:
            xn(function() {
                var r = Lt(e, 1);
                if (r !== null) {
                    var l = Oe();
                    ut(r, e, 1, l)
                }
            }), ys(e, 1)
    }
};
Aa = function(e) {
    if (e.tag === 13) {
        var t = Lt(e, 134217728);
        if (t !== null) {
            var n = Oe();
            ut(t, e, 134217728, n)
        }
        ys(e, 134217728)
    }
};
Uc = function(e) {
    if (e.tag === 13) {
        var t = Gt(e),
            n = Lt(e, t);
        if (n !== null) {
            var r = Oe();
            ut(n, e, t, r)
        }
        ys(e, t)
    }
};
Ac = function() {
    return V
};
Hc = function(e, t) {
    var n = V;
    try {
        return V = e, t()
    } finally {
        V = n
    }
};
Ro = function(e, t, n) {
    switch (t) {
        case "input":
            if (_o(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = wi(r);
                        if (!l) throw Error(E(90));
                        yc(r), _o(r, l)
                    }
                }
            }
            break;
        case "textarea":
            xc(e, n);
            break;
        case "select":
            t = n.value, t != null && Fn(e, !!n.multiple, t, !1)
    }
};
_c = ps;
$c = xn;
var Sh = {
        usingClientEntryPoint: !1,
        Events: [el, Tn, wi, Cc, Pc, ps]
    },
    fr = {
        findFiberByHostInstance: un,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    Eh = {
        bundleType: fr.bundleType,
        version: fr.version,
        rendererPackageName: fr.rendererPackageName,
        rendererConfig: fr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Mt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Oc(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: fr.findFiberByHostInstance || xh,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Sl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Sl.isDisabled && Sl.supportsFiber) try {
        hi = Sl.inject(Eh), gt = Sl
    } catch {}
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sh;
Ke.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!xs(t)) throw Error(E(200));
    return wh(e, t, null, n)
};
Ke.createRoot = function(e, t) {
    if (!xs(e)) throw Error(E(299));
    var n = !1,
        r = "",
        l = df;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = gs(e, 1, !1, null, null, n, !1, r, l), e[Tt] = t.current, Ur(e.nodeType === 8 ? e.parentNode : e), new ws(t)
};
Ke.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
    return e = Oc(t), e = e === null ? null : e.stateNode, e
};
Ke.flushSync = function(e) {
    return xn(e)
};
Ke.hydrate = function(e, t, n) {
    if (!$i(t)) throw Error(E(200));
    return Ti(null, e, t, !0, n)
};
Ke.hydrateRoot = function(e, t, n) {
    if (!xs(e)) throw Error(E(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        i = "",
        o = df;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = cf(t, null, e, 1, n ? ? null, l, !1, i, o), e[Tt] = t.current, Ur(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new _i(t)
};
Ke.render = function(e, t, n) {
    if (!$i(t)) throw Error(E(200));
    return Ti(null, e, t, !1, n)
};
Ke.unmountComponentAtNode = function(e) {
    if (!$i(e)) throw Error(E(40));
    return e._reactRootContainer ? (xn(function() {
        Ti(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Tt] = null
        })
    }), !0) : !1
};
Ke.unstable_batchedUpdates = ps;
Ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!$i(n)) throw Error(E(200));
    if (e == null || e._reactInternals === void 0) throw Error(E(38));
    return Ti(e, t, n, !1, r)
};
Ke.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
        } catch (n) {
            console.error(n)
        }
    }
    t(), e.exports = Ke
})(xp);
var Fu = Ul;
wo.createRoot = Fu.createRoot, wo.hydrateRoot = Fu.hydrateRoot;
const O = {
        boxWidth: "xl:max-w-[1280px] w-full",
        heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
        paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
        flexCenter: "flex justify-center items-center",
        flexStart: "flex justify-center items-start",
        paddingX: "sm:px-16 px-6",
        paddingY: "sm:py-16 py-6",
        padding: "sm:px-16 px-6 sm:py-12 py-4",
        marginX: "sm:mx-16 mx-6",
        marginY: "sm:my-16 my-6"
    },
    Me = {
        section: `flex md:flex-row flex-col ${O.paddingY}`,
        sectionReverse: `flex md:flex-row flex-col-reverse ${O.paddingY}`,
        sectionImgReverse: `flex-1 flex ${O.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
        sectionImg: `flex-1 flex ${O.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
        sectionInfo: `flex-1 ${O.flexStart} flex-col`
    },
    Nh = "/assets/phclient1-9d603c1f.png",
    Ch = "/assets/hwtclient2-a1228c06.png",
    Ph = "/assets/shclient3-ccb11fab.png",
    _h = "/assets/gzclient4-f0431826.png",
    ff = "/assets/logo-f9157655.png",
    $h = "/assets/arrow-up-012ff21b.svg",
    Th = "/assets/Discount-194bce21.svg",
    Lh = "/assets/facebook-b1172216.svg",
    Oh = "/assets/instagram-a54e883a.svg",
    Mh = "/assets/linkedin-3be30c66.svg",
    zh = "/assets/graphicdesign-d719c062.png";
var pf = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    Du = U.createContext && U.createContext(pf),
    Jt = globalThis && globalThis.__assign || function() {
        return Jt = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l])
            }
            return e
        }, Jt.apply(this, arguments)
    },
    Rh = globalThis && globalThis.__rest || function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) t.indexOf(r[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[l]) && (n[r[l]] = e[r[l]]);
        return n
    };

function mf(e) {
    return e && e.map(function(t, n) {
        return U.createElement(t.tag, Jt({
            key: n
        }, t.attr), mf(t.child))
    })
}

function wt(e) {
    return function(t) {
        return U.createElement(jh, Jt({
            attr: Jt({}, e.attr)
        }, t), mf(e.child))
    }
}

function jh(e) {
    var t = function(n) {
        var r = e.attr,
            l = e.size,
            i = e.title,
            o = Rh(e, ["attr", "size", "title"]),
            a = l || n.size || "1em",
            s;
        return n.className && (s = n.className), e.className && (s = (s ? s + " " : "") + e.className), U.createElement("svg", Jt({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, o, {
            className: s,
            style: Jt(Jt({
                color: e.color || n.color
            }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg"
        }), i && U.createElement("title", null, i), e.children)
    };
    return Du !== void 0 ? U.createElement(Du.Consumer, null, function(n) {
        return t(n)
    }) : t(pf)
}

function Fh(e) {
    return wt({
        tag: "svg",
        attr: {
            viewBox: "0 0 1024 1024"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
            }
        }]
    })(e)
}

function Dh(e) {
    return wt({
        tag: "svg",
        attr: {
            viewBox: "0 0 1024 1024"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"
            }
        }]
    })(e)
}

function Ih(e) {
    return wt({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M22 8.98V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1 0 1.48.65 2.79 1.67 3.71L12 11 4 6v2l8 5 5.3-3.32c.54.2 1.1.32 1.7.32 1.13 0 2.16-.39 3-1.02zM16 5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"
            }
        }]
    })(e)
}

function Uh(e) {
    return wt({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M16.24 11.51l1.57-1.57-3.75-3.75-1.57 1.57-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13L3 17.25V21h3.75l4.76-4.76 4.13 4.13c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-4.13-4.13zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.45 1.45-1.89 1.9zm7.88 7.89l-4.13-4.13 1.9-1.9 1.45 1.45-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
            }
        }]
    })(e)
}

function Ah(e) {
    return wt({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.89-8.9c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.44-.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6.56-2.62 2.85-2.62 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 3.02 2.96V19h1.75v-1.24c.52-.09 3.02-.59 3.02-3.22.01-1.39-.6-2.61-3-3.44z"
            }
        }]
    })(e)
}

function Hh(e) {
    return wt({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 3.19l7 3.11V11c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"
            }
        }]
    })(e)
}

function Bh(e) {
    return wt({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"
            }
        }]
    })(e)
}

function Wh(e) {
    return wt({
        tag: "svg",
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
            }
        }]
    })(e)
}
const bh = "/assets/tool1-7cd28d79.png",
    Vh = "/assets/tool2-94cf195c.png",
    Qh = "/assets/tool3-466edd0a.png",
    Kh = "/assets/tool4-2afe1efd.png",
    Yh = "/assets/tool5-7d5637e3.png",
    Gh = "/assets/tool6-c61daa4d.png",
    Xh = "/assets/tool7-30e12512.png",
    Jh = "/assets/tool8-2fe958bb.png",
    El = [{
        id: "home",
        title: "Home"
    }, {
        id: "features",
        title: "Services"
    }, {
        id: "/privacypolicy",
        title: "Privacy Policy"
    }, {
        id: "/contactus",
        title: "Contact Us"
    }, {
        id: "portfolio",
        title: "Download Portfolio"
    }],
    hf = [{
        id: "feature-1",
        Icon: Fh,
        title: "Social Media Marketing",
        link: "#details",
        content: "Get ready to maximize your reach with our Social Media Marketing Services!"
    }, {
        id: "feature-2",
        Icon: Uh,
        title: "Graphic Designing Services",
        link: "#graphicdesign",
        content: "Our team of designers will take your vision and turn it into a visual masterpiece."
    }, {
        id: "feature-3",
        Icon: Ah,
        title: "Paid Advertising (PPC)",
        link: "#ppc",
        content: "Get a higher ROI with our highly targeted and data-driven PPC advertising strategies."
    }, {
        id: "feature-4",
        Icon: Wh,
        title: "Web Design & Development",
        link: "/contactus",
        content: "Let us help you create a website that's not only visually appealing, but also highly functional and user-friendly."
    }],
    qh = [{
        id: "stats-1",
        title: "Impressions Generated",
        value: "2M+"
    }, {
        id: "stats-2",
        title: "Passionate employees",
        value: "30+"
    }, {
        id: "stats-3",
        title: "satisfied Clients",
        value: "70+"
    }],
    Iu = [{
        id: "social-media-1",
        icon: Oh,
        link: "https://www.instagram.com/rapidhype.pk/"
    }, {
        id: "social-media-2",
        icon: Lh,
        link: "https://www.facebook.com/rapidhype"
    }, {
        id: "social-media-4",
        icon: Mh,
        link: "https://www.linkedin.com/company/rapid-hype"
    }],
    Zh = [{
        id: "client-1",
        logo: Nh
    }, {
        id: "client-2",
        logo: Ch
    }, {
        id: "client-3",
        logo: Ph
    }, {
        id: "client-4",
        logo: _h
    }],
    e0 = [{
        id: "tool-1",
        logo: bh
    }, {
        id: "tool-2",
        logo: Vh
    }, {
        id: "tool-3",
        logo: Qh
    }, {
        id: "tool-4",
        logo: Kh
    }, {
        id: "tool-5",
        logo: Yh
    }, {
        id: "tool-6",
        logo: Gh
    }, {
        id: "tool-7",
        logo: Xh
    }, {
        id: "tool-8",
        logo: Jh
    }];
/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Yr() {
    return Yr = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Yr.apply(this, arguments)
}
var Bt;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Bt || (Bt = {}));
const Uu = "popstate";

function t0(e) {
    e === void 0 && (e = {});

    function t(r, l) {
        let {
            pathname: i,
            search: o,
            hash: a
        } = r.location;
        return pa("", {
            pathname: i,
            search: o,
            hash: a
        }, l.state && l.state.usr || null, l.state && l.state.key || "default")
    }

    function n(r, l) {
        return typeof l == "string" ? l : Gr(l)
    }
    return r0(t, n, null, e)
}

function he(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function n0() {
    return Math.random().toString(36).substr(2, 8)
}

function Au(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function pa(e, t, n, r) {
    return n === void 0 && (n = null), Yr({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Zn(t) : t, {
        state: n,
        key: t && t.key || r || n0()
    })
}

function Gr(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Zn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function r0(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: l = document.defaultView,
        v5Compat: i = !1
    } = r, o = l.history, a = Bt.Pop, s = null, c = d();
    c == null && (c = 0, o.replaceState(Yr({}, o.state, {
        idx: c
    }), ""));

    function d() {
        return (o.state || {
            idx: null
        }).idx
    }

    function p() {
        a = Bt.Pop;
        let S = d(),
            h = S == null ? null : S - c;
        c = S, s && s({
            action: a,
            location: x.location,
            delta: h
        })
    }

    function v(S, h) {
        a = Bt.Push;
        let f = pa(x.location, S, h);
        n && n(f, S), c = d() + 1;
        let g = Au(f, c),
            k = x.createHref(f);
        try {
            o.pushState(g, "", k)
        } catch {
            l.location.assign(k)
        }
        i && s && s({
            action: a,
            location: x.location,
            delta: 1
        })
    }

    function y(S, h) {
        a = Bt.Replace;
        let f = pa(x.location, S, h);
        n && n(f, S), c = d();
        let g = Au(f, c),
            k = x.createHref(f);
        o.replaceState(g, "", k), i && s && s({
            action: a,
            location: x.location,
            delta: 0
        })
    }

    function w(S) {
        let h = l.location.origin !== "null" ? l.location.origin : l.location.href,
            f = typeof S == "string" ? S : Gr(S);
        return he(h, "No window.location.(origin|href) available to create URL for href: " + f), new URL(f, h)
    }
    let x = {
        get action() {
            return a
        },
        get location() {
            return e(l, o)
        },
        listen(S) {
            if (s) throw new Error("A history only accepts one active listener");
            return l.addEventListener(Uu, p), s = S, () => {
                l.removeEventListener(Uu, p), s = null
            }
        },
        createHref(S) {
            return t(l, S)
        },
        createURL: w,
        encodeLocation(S) {
            let h = w(S);
            return {
                pathname: h.pathname,
                search: h.search,
                hash: h.hash
            }
        },
        push: v,
        replace: y,
        go(S) {
            return o.go(S)
        }
    };
    return x
}
var Hu;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(Hu || (Hu = {}));

function l0(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? Zn(t) : t,
        l = yf(r.pathname || "/", n);
    if (l == null) return null;
    let i = vf(e);
    i0(i);
    let o = null;
    for (let a = 0; o == null && a < i.length; ++a) o = m0(i[a], g0(l));
    return o
}

function vf(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let l = (i, o, a) => {
        let s = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i
        };
        s.relativePath.startsWith("/") && (he(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), s.relativePath = s.relativePath.slice(r.length));
        let c = qt([r, s.relativePath]),
            d = n.concat(s);
        i.children && i.children.length > 0 && (he(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')), vf(i.children, t, d, c)), !(i.path == null && !i.index) && t.push({
            path: c,
            score: f0(c, i.index),
            routesMeta: d
        })
    };
    return e.forEach((i, o) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?"))) l(i, o);
        else
            for (let s of gf(i.path)) l(i, o, s)
    }), t
}

function gf(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, l = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (r.length === 0) return l ? [i, ""] : [i];
    let o = gf(r.join("/")),
        a = [];
    return a.push(...o.map(s => s === "" ? i : [i, s].join("/"))), l && a.push(...o), a.map(s => e.startsWith("/") && s === "" ? "/" : s)
}

function i0(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : p0(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const o0 = /^:\w+$/,
    a0 = 3,
    s0 = 2,
    u0 = 1,
    c0 = 10,
    d0 = -2,
    Bu = e => e === "*";

function f0(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(Bu) && (r += d0), t && (r += s0), n.filter(l => !Bu(l)).reduce((l, i) => l + (o0.test(i) ? a0 : i === "" ? u0 : c0), r)
}

function p0(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function m0(e, t) {
    let {
        routesMeta: n
    } = e, r = {}, l = "/", i = [];
    for (let o = 0; o < n.length; ++o) {
        let a = n[o],
            s = o === n.length - 1,
            c = l === "/" ? t : t.slice(l.length) || "/",
            d = h0({
                path: a.relativePath,
                caseSensitive: a.caseSensitive,
                end: s
            }, c);
        if (!d) return null;
        Object.assign(r, d.params);
        let p = a.route;
        i.push({
            params: r,
            pathname: qt([l, d.pathname]),
            pathnameBase: k0(qt([l, d.pathnameBase])),
            route: p
        }), d.pathnameBase !== "/" && (l = qt([l, d.pathnameBase]))
    }
    return i
}

function h0(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = v0(e.path, e.caseSensitive, e.end), l = t.match(n);
    if (!l) return null;
    let i = l[0],
        o = i.replace(/(.)\/+$/, "$1"),
        a = l.slice(1);
    return {
        params: r.reduce((c, d, p) => {
            if (d === "*") {
                let v = a[p] || "";
                o = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1")
            }
            return c[d] = y0(a[p] || "", d), c
        }, {}),
        pathname: i,
        pathnameBase: o,
        pattern: e
    }
}

function v0(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), ks(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (o, a) => (r.push(a), "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push("*"), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), r]
}

function g0(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return ks(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function y0(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return ks(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e
    }
}

function yf(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function ks(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function w0(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: l = ""
    } = typeof e == "string" ? Zn(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : x0(n, t) : t,
        search: S0(r),
        hash: E0(l)
    }
}

function x0(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(l => {
        l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l)
    }), n.length > 1 ? n.join("/") : "/"
}

function uo(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function wf(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function xf(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string" ? l = Zn(e) : (l = Yr({}, e), he(!l.pathname || !l.pathname.includes("?"), uo("?", "pathname", "search", l)), he(!l.pathname || !l.pathname.includes("#"), uo("#", "pathname", "hash", l)), he(!l.search || !l.search.includes("#"), uo("#", "search", "hash", l)));
    let i = e === "" || l.pathname === "",
        o = i ? "/" : l.pathname,
        a;
    if (r || o == null) a = n;
    else {
        let p = t.length - 1;
        if (o.startsWith("..")) {
            let v = o.split("/");
            for (; v[0] === "..";) v.shift(), p -= 1;
            l.pathname = v.join("/")
        }
        a = p >= 0 ? t[p] : "/"
    }
    let s = w0(l, a),
        c = o && o !== "/" && o.endsWith("/"),
        d = (i || o === ".") && n.endsWith("/");
    return !s.pathname.endsWith("/") && (c || d) && (s.pathname += "/"), s
}
const qt = e => e.join("/").replace(/\/\/+/g, "/"),
    k0 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    S0 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    E0 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function N0(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const C0 = ["post", "put", "patch", "delete"];
[...C0];
/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ma() {
    return ma = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ma.apply(this, arguments)
}

function P0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
const _0 = typeof Object.is == "function" ? Object.is : P0,
    {
        useState: $0,
        useEffect: T0,
        useLayoutEffect: L0,
        useDebugValue: O0
    } = Bn;

function M0(e, t, n) {
    const r = t(),
        [{
            inst: l
        }, i] = $0({
            inst: {
                value: r,
                getSnapshot: t
            }
        });
    return L0(() => {
        l.value = r, l.getSnapshot = t, co(l) && i({
            inst: l
        })
    }, [e, r, t]), T0(() => (co(l) && i({
        inst: l
    }), e(() => {
        co(l) && i({
            inst: l
        })
    })), [e]), O0(r), r
}

function co(e) {
    const t = e.getSnapshot,
        n = e.value;
    try {
        const r = t();
        return !_0(n, r)
    } catch {
        return !0
    }
}

function z0(e, t, n) {
    return t()
}
const R0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    j0 = !R0,
    F0 = j0 ? z0 : M0;
"useSyncExternalStore" in Bn && (e => e.useSyncExternalStore)(Bn);
const kf = m.createContext(null),
    Sf = m.createContext(null),
    Li = m.createContext(null),
    Oi = m.createContext(null),
    er = m.createContext({
        outlet: null,
        matches: []
    }),
    Ef = m.createContext(null);

function D0(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t;
    nl() || he(!1);
    let {
        basename: r,
        navigator: l
    } = m.useContext(Li), {
        hash: i,
        pathname: o,
        search: a
    } = Cf(e, {
        relative: n
    }), s = o;
    return r !== "/" && (s = o === "/" ? r : qt([r, o])), l.createHref({
        pathname: s,
        search: a,
        hash: i
    })
}

function nl() {
    return m.useContext(Oi) != null
}

function tr() {
    return nl() || he(!1), m.useContext(Oi).location
}

function Nf() {
    nl() || he(!1);
    let {
        basename: e,
        navigator: t
    } = m.useContext(Li), {
        matches: n
    } = m.useContext(er), {
        pathname: r
    } = tr(), l = JSON.stringify(wf(n).map(a => a.pathnameBase)), i = m.useRef(!1);
    return m.useEffect(() => {
        i.current = !0
    }), m.useCallback(function(a, s) {
        if (s === void 0 && (s = {}), !i.current) return;
        if (typeof a == "number") {
            t.go(a);
            return
        }
        let c = xf(a, JSON.parse(l), r, s.relative === "path");
        e !== "/" && (c.pathname = c.pathname === "/" ? e : qt([e, c.pathname])), (s.replace ? t.replace : t.push)(c, s.state, s)
    }, [e, t, l, r])
}

function Cf(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        matches: r
    } = m.useContext(er), {
        pathname: l
    } = tr(), i = JSON.stringify(wf(r).map(o => o.pathnameBase));
    return m.useMemo(() => xf(e, JSON.parse(i), l, n === "path"), [e, i, l, n])
}

function I0(e, t) {
    nl() || he(!1);
    let {
        navigator: n
    } = m.useContext(Li), r = m.useContext(Sf), {
        matches: l
    } = m.useContext(er), i = l[l.length - 1], o = i ? i.params : {};
    i && i.pathname;
    let a = i ? i.pathnameBase : "/";
    i && i.route;
    let s = tr(),
        c;
    if (t) {
        var d;
        let x = typeof t == "string" ? Zn(t) : t;
        a === "/" || (d = x.pathname) != null && d.startsWith(a) || he(!1), c = x
    } else c = s;
    let p = c.pathname || "/",
        v = a === "/" ? p : p.slice(a.length) || "/",
        y = l0(e, {
            pathname: v
        }),
        w = B0(y && y.map(x => Object.assign({}, x, {
            params: Object.assign({}, o, x.params),
            pathname: qt([a, n.encodeLocation ? n.encodeLocation(x.pathname).pathname : x.pathname]),
            pathnameBase: x.pathnameBase === "/" ? a : qt([a, n.encodeLocation ? n.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
        })), l, r || void 0);
    return t && w ? m.createElement(Oi.Provider, {
        value: {
            location: ma({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Bt.Pop
        }
    }, w) : w
}

function U0() {
    let e = Q0(),
        t = N0(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        l = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        },
        i = null;
    return m.createElement(m.Fragment, null, m.createElement("h2", null, "Unexpected Application Error!"), m.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? m.createElement("pre", {
        style: l
    }, n) : null, i)
}
class A0 extends m.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location ? {
            error: t.error,
            location: t.location
        } : {
            error: t.error || n.error,
            location: n.location
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error ? m.createElement(er.Provider, {
            value: this.props.routeContext
        }, m.createElement(Ef.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function H0(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, l = m.useContext(kf);
    return l && l.static && l.staticContext && n.route.errorElement && (l.staticContext._deepestRenderedBoundaryId = n.route.id), m.createElement(er.Provider, {
        value: t
    }, r)
}

function B0(e, t, n) {
    if (t === void 0 && (t = []), e == null)
        if (n != null && n.errors) e = n.matches;
        else return null;
    let r = e,
        l = n == null ? void 0 : n.errors;
    if (l != null) {
        let i = r.findIndex(o => o.route.id && (l == null ? void 0 : l[o.route.id]));
        i >= 0 || he(!1), r = r.slice(0, Math.min(r.length, i + 1))
    }
    return r.reduceRight((i, o, a) => {
        let s = o.route.id ? l == null ? void 0 : l[o.route.id] : null,
            c = n ? o.route.errorElement || m.createElement(U0, null) : null,
            d = t.concat(r.slice(0, a + 1)),
            p = () => m.createElement(H0, {
                match: o,
                routeContext: {
                    outlet: i,
                    matches: d
                }
            }, s ? c : o.route.element !== void 0 ? o.route.element : i);
        return n && (o.route.errorElement || a === 0) ? m.createElement(A0, {
            location: n.location,
            component: c,
            error: s,
            children: p(),
            routeContext: {
                outlet: null,
                matches: d
            }
        }) : p()
    }, null)
}
var Wu;
(function(e) {
    e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator"
})(Wu || (Wu = {}));
var ci;
(function(e) {
    e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator"
})(ci || (ci = {}));

function W0(e) {
    let t = m.useContext(Sf);
    return t || he(!1), t
}

function b0(e) {
    let t = m.useContext(er);
    return t || he(!1), t
}

function V0(e) {
    let t = b0(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || he(!1), n.route.id
}

function Q0() {
    var e;
    let t = m.useContext(Ef),
        n = W0(ci.UseRouteError),
        r = V0(ci.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r])
}

function wr(e) {
    he(!1)
}

function K0(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: l = Bt.Pop,
        navigator: i,
        static: o = !1
    } = e;
    nl() && he(!1);
    let a = t.replace(/^\/*/, "/"),
        s = m.useMemo(() => ({
            basename: a,
            navigator: i,
            static: o
        }), [a, i, o]);
    typeof r == "string" && (r = Zn(r));
    let {
        pathname: c = "/",
        search: d = "",
        hash: p = "",
        state: v = null,
        key: y = "default"
    } = r, w = m.useMemo(() => {
        let x = yf(c, a);
        return x == null ? null : {
            pathname: x,
            search: d,
            hash: p,
            state: v,
            key: y
        }
    }, [a, c, d, p, v, y]);
    return w == null ? null : m.createElement(Li.Provider, {
        value: s
    }, m.createElement(Oi.Provider, {
        children: n,
        value: {
            location: w,
            navigationType: l
        }
    }))
}

function Y0(e) {
    let {
        children: t,
        location: n
    } = e, r = m.useContext(kf), l = r && !t ? r.router.routes : ha(t);
    return I0(l, n)
}
var bu;
(function(e) {
    e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
})(bu || (bu = {}));
new Promise(() => {});

function ha(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return m.Children.forEach(e, (r, l) => {
        if (!m.isValidElement(r)) return;
        if (r.type === m.Fragment) {
            n.push.apply(n, ha(r.props.children, t));
            return
        }
        r.type !== wr && he(!1), !r.props.index || !r.props.children || he(!1);
        let i = [...t, l],
            o = {
                id: r.props.id || i.join("-"),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                hasErrorBoundary: r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle
            };
        r.props.children && (o.children = ha(r.props.children, i)), n.push(o)
    }), n
}
/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function va() {
    return va = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, va.apply(this, arguments)
}

function G0(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        l, i;
    for (i = 0; i < r.length; i++) l = r[i], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
    return n
}

function X0(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function J0(e, t) {
    return e.button === 0 && (!t || t === "_self") && !X0(e)
}
const q0 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];

function Z0(e) {
    let {
        basename: t,
        children: n,
        window: r
    } = e, l = m.useRef();
    l.current == null && (l.current = t0({
        window: r,
        v5Compat: !0
    }));
    let i = l.current,
        [o, a] = m.useState({
            action: i.action,
            location: i.location
        });
    return m.useLayoutEffect(() => i.listen(a), [i]), m.createElement(K0, {
        basename: t,
        children: n,
        location: o.location,
        navigationType: o.action,
        navigator: i
    })
}
const ev = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    vt = m.forwardRef(function(t, n) {
        let {
            onClick: r,
            relative: l,
            reloadDocument: i,
            replace: o,
            state: a,
            target: s,
            to: c,
            preventScrollReset: d
        } = t, p = G0(t, q0), v = typeof c == "string" ? c : Gr(c), y = /^[a-z+]+:\/\//i.test(v) || v.startsWith("//"), w = v, x = !1;
        if (ev && y) {
            let g = new URL(window.location.href),
                k = v.startsWith("//") ? new URL(g.protocol + v) : new URL(v);
            k.origin === g.origin ? w = k.pathname + k.search + k.hash : x = !0
        }
        let S = D0(w, {
                relative: l
            }),
            h = tv(w, {
                replace: o,
                state: a,
                target: s,
                preventScrollReset: d,
                relative: l
            });

        function f(g) {
            r && r(g), g.defaultPrevented || h(g)
        }
        return m.createElement("a", va({}, p, {
            href: y ? v : S,
            onClick: x || i ? r : f,
            ref: n,
            target: s
        }))
    });
var Vu;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"
})(Vu || (Vu = {}));
var Qu;
(function(e) {
    e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Qu || (Qu = {}));

function tv(e, t) {
    let {
        target: n,
        replace: r,
        state: l,
        preventScrollReset: i,
        relative: o
    } = t === void 0 ? {} : t, a = Nf(), s = tr(), c = Cf(e, {
        relative: o
    });
    return m.useCallback(d => {
        if (J0(d, n)) {
            d.preventDefault();
            let p = r !== void 0 ? r : Gr(s) === Gr(c);
            a(e, {
                replace: p,
                state: l,
                preventScrollReset: i,
                relative: o
            })
        }
    }, [s, a, c, r, l, n, e, i, o])
}
const nv = ({
        setOpen: e
    }) => {
        const [t, n] = m.useState("Home"), [r, l] = m.useState(!1), {
            pathname: i
        } = tr(), o = (a, s) => i === "/contactus" || i === "/privacypolicy" ? s !== "/privacypolicy" & s !== "/contactus" & s !== "portfolio" ? u(vt, {
            to: "/",
            onClick: () => {
                l(!r)
            },
            children: u("div", {
                className: "transition hover:scale-110 hover:text-[#a322de]",
                children: a
            })
        }) : s === "portfolio" ? u("div", {
            className: "transition hover:scale-110 hover:text-[#a322de]",
            onClick: () => {
                l(!r), e(!0)
            },
            children: a
        }) : u(vt, {
            to: s,
            onClick: () => {
                l(!r)
            },
            children: u("div", {
                className: "transition hover:scale-110 hover:text-[#a322de]",
                children: a
            })
        }) : s !== "/privacypolicy" && s !== "/contactus" && s !== "portfolio" ? u("a", {
            href: `#${s}`,
            onClick: () => {
                l(!r)
            },
            children: u("div", {
                className: "transition hover:scale-110 hover:text-[#a322de]",
                children: a
            })
        }) : s === "portfolio" ? u("div", {
            className: "transition hover:scale-110 hover:text-[#a322de]",
            onClick: () => {
                l(!r), e(!0)
            },
            children: a
        }) : u(vt, {
            to: s,
            onClick: () => {
                l(!r)
            },
            children: u("div", {
                className: "transition hover:scale-110 hover:text-[#a322de]",
                children: a
            })
        });
        return C("nav", {
            className: "w-full flex py-6 justify-between items-center navbar",
            children: [u(vt, {
                to: "/",
                children: u("img", {
                    "data-aos": "fade-down",
                    src: ff,
                    alt: "rapidhype",
                    className: "w-[140px] h-[50px] object-contain"
                })
            }), u("ul", {
                "data-aos": "fade-down",
                className: "list-none sm:flex hidden justify-end items-center flex-1",
                children: El.map((a, s) => u("li", {
                    className: `font-poppins font-normal cursor-pointer text-[16px] ${t===a.title?"text-white":"text-dimWhite"} ${s===El.length-1?"mr-0":"mr-10"}`,
                    onClick: () => a.id === "portfolio" ? {} : n(a.title),
                    children: o(a.title, a.id)
                }, a.id))
            }), C("div", {
                className: "sm:hidden flex flex-1 justify-end items-center",
                children: [u("input", {
                    checked: r,
                    type: "checkbox",
                    id: "checkbox",
                    onChange: () => l(!r)
                }), C("label", {
                    "data-aos": "fade-down",
                    htmlFor: "checkbox",
                    className: "toggle",
                    children: [u("div", {
                        className: "bars",
                        id: "bar1"
                    }), u("div", {
                        className: "bars",
                        id: "bar2"
                    }), u("div", {
                        className: "bars",
                        id: "bar3"
                    })]
                }), u("div", {
                    className: `${r?"flex":"hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`,
                    children: u("ul", {
                        className: "list-none flex justify-end items-start flex-1 flex-col",
                        children: El.map((a, s) => u("li", {
                            className: `font-poppins font-medium cursor-pointer text-[16px] ${t===a.title?"text-white":"text-dimWhite"} ${s===El.length-1?"mb-0":"mb-4"}`,
                            onClick: () => a.id === "portfolio" ? {} : n(a.title),
                            children: o(a.title, a.id)
                        }, a.id))
                    })
                })]
            })]
        })
    },
    rv = "/assets/team-edaa25a9.png";
var ga = {},
    lv = {
        get exports() {
            return ga
        },
        set exports(e) {
            ga = e
        }
    };
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    })(Xf, function() {
        return function(n) {
            function r(i) {
                if (l[i]) return l[i].exports;
                var o = l[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return n[i].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports
            }
            var l = {};
            return r.m = n, r.c = l, r.p = "dist/", r(0)
        }([function(n, r, l) {
            function i(F) {
                return F && F.__esModule ? F : {
                    default: F
                }
            }
            var o = Object.assign || function(F) {
                    for (var K = 1; K < arguments.length; K++) {
                        var ce = arguments[K];
                        for (var Ee in ce) Object.prototype.hasOwnProperty.call(ce, Ee) && (F[Ee] = ce[Ee])
                    }
                    return F
                },
                a = l(1),
                s = (i(a), l(6)),
                c = i(s),
                d = l(7),
                p = i(d),
                v = l(8),
                y = i(v),
                w = l(9),
                x = i(w),
                S = l(10),
                h = i(S),
                f = l(11),
                g = i(f),
                k = l(14),
                P = i(k),
                $ = [],
                L = !1,
                N = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1
                },
                A = function() {
                    var F = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                    if (F && (L = !0), L) return $ = (0, g.default)($, N), (0, h.default)($, N.once), $
                },
                j = function() {
                    $ = (0, P.default)(), A()
                },
                M = function() {
                    $.forEach(function(F, K) {
                        F.node.removeAttribute("data-aos"), F.node.removeAttribute("data-aos-easing"), F.node.removeAttribute("data-aos-duration"), F.node.removeAttribute("data-aos-delay")
                    })
                },
                T = function(F) {
                    return F === !0 || F === "mobile" && x.default.mobile() || F === "phone" && x.default.phone() || F === "tablet" && x.default.tablet() || typeof F == "function" && F() === !0
                },
                I = function(F) {
                    N = o(N, F), $ = (0, P.default)();
                    var K = document.all && !window.atob;
                    return T(N.disable) || K ? M() : (N.disableMutationObserver || y.default.isSupported() || (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `), N.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", N.easing), document.querySelector("body").setAttribute("data-aos-duration", N.duration), document.querySelector("body").setAttribute("data-aos-delay", N.delay), N.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? A(!0) : N.startEvent === "load" ? window.addEventListener(N.startEvent, function() {
                        A(!0)
                    }) : document.addEventListener(N.startEvent, function() {
                        A(!0)
                    }), window.addEventListener("resize", (0, p.default)(A, N.debounceDelay, !0)), window.addEventListener("orientationchange", (0, p.default)(A, N.debounceDelay, !0)), window.addEventListener("scroll", (0, c.default)(function() {
                        (0, h.default)($, N.once)
                    }, N.throttleDelay)), N.disableMutationObserver || y.default.ready("[data-aos]", j), $)
                };
            n.exports = {
                init: I,
                refresh: A,
                refreshHard: j
            }
        }, function(n, r) {}, , , , , function(n, r) {
            (function(l) {
                function i(T, I, F) {
                    function K(Q) {
                        var Fe = ie,
                            zt = Ne;
                        return ie = Ne = void 0, ve = Q, X = T.apply(zt, Fe)
                    }

                    function ce(Q) {
                        return ve = Q, ae = setTimeout(R, I), se ? K(Q) : X
                    }

                    function Ee(Q) {
                        var Fe = Q - b,
                            zt = Q - ve,
                            _s = I - Fe;
                        return je ? j(_s, de - zt) : _s
                    }

                    function _(Q) {
                        var Fe = Q - b,
                            zt = Q - ve;
                        return b === void 0 || Fe >= I || Fe < 0 || je && zt >= de
                    }

                    function R() {
                        var Q = M();
                        return _(Q) ? D(Q) : void(ae = setTimeout(R, Ee(Q)))
                    }

                    function D(Q) {
                        return ae = void 0, te && ie ? K(Q) : (ie = Ne = void 0, X)
                    }

                    function H() {
                        ae !== void 0 && clearTimeout(ae), ve = 0, ie = b = Ne = ae = void 0
                    }

                    function Y() {
                        return ae === void 0 ? X : D(M())
                    }

                    function we() {
                        var Q = M(),
                            Fe = _(Q);
                        if (ie = arguments, Ne = this, b = Q, Fe) {
                            if (ae === void 0) return ce(b);
                            if (je) return ae = setTimeout(R, I), K(b)
                        }
                        return ae === void 0 && (ae = setTimeout(R, I)), X
                    }
                    var ie, Ne, de, X, ae, b, ve = 0,
                        se = !1,
                        je = !1,
                        te = !0;
                    if (typeof T != "function") throw new TypeError(v);
                    return I = d(I) || 0, a(F) && (se = !!F.leading, je = "maxWait" in F, de = je ? A(d(F.maxWait) || 0, I) : de, te = "trailing" in F ? !!F.trailing : te), we.cancel = H, we.flush = Y, we
                }

                function o(T, I, F) {
                    var K = !0,
                        ce = !0;
                    if (typeof T != "function") throw new TypeError(v);
                    return a(F) && (K = "leading" in F ? !!F.leading : K, ce = "trailing" in F ? !!F.trailing : ce), i(T, I, {
                        leading: K,
                        maxWait: I,
                        trailing: ce
                    })
                }

                function a(T) {
                    var I = typeof T > "u" ? "undefined" : p(T);
                    return !!T && (I == "object" || I == "function")
                }

                function s(T) {
                    return !!T && (typeof T > "u" ? "undefined" : p(T)) == "object"
                }

                function c(T) {
                    return (typeof T > "u" ? "undefined" : p(T)) == "symbol" || s(T) && N.call(T) == w
                }

                function d(T) {
                    if (typeof T == "number") return T;
                    if (c(T)) return y;
                    if (a(T)) {
                        var I = typeof T.valueOf == "function" ? T.valueOf() : T;
                        T = a(I) ? I + "" : I
                    }
                    if (typeof T != "string") return T === 0 ? T : +T;
                    T = T.replace(x, "");
                    var F = h.test(T);
                    return F || f.test(T) ? g(T.slice(2), F ? 2 : 8) : S.test(T) ? y : +T
                }
                var p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(T) {
                        return typeof T
                    } : function(T) {
                        return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T
                    },
                    v = "Expected a function",
                    y = NaN,
                    w = "[object Symbol]",
                    x = /^\s+|\s+$/g,
                    S = /^[-+]0x[0-9a-f]+$/i,
                    h = /^0b[01]+$/i,
                    f = /^0o[0-7]+$/i,
                    g = parseInt,
                    k = (typeof l > "u" ? "undefined" : p(l)) == "object" && l && l.Object === Object && l,
                    P = (typeof self > "u" ? "undefined" : p(self)) == "object" && self && self.Object === Object && self,
                    $ = k || P || Function("return this")(),
                    L = Object.prototype,
                    N = L.toString,
                    A = Math.max,
                    j = Math.min,
                    M = function() {
                        return $.Date.now()
                    };
                n.exports = o
            }).call(r, function() {
                return this
            }())
        }, function(n, r) {
            (function(l) {
                function i(M, T, I) {
                    function F(te) {
                        var Q = we,
                            Fe = ie;
                        return we = ie = void 0, b = te, de = M.apply(Fe, Q)
                    }

                    function K(te) {
                        return b = te, X = setTimeout(_, T), ve ? F(te) : de
                    }

                    function ce(te) {
                        var Q = te - ae,
                            Fe = te - b,
                            zt = T - Q;
                        return se ? A(zt, Ne - Fe) : zt
                    }

                    function Ee(te) {
                        var Q = te - ae,
                            Fe = te - b;
                        return ae === void 0 || Q >= T || Q < 0 || se && Fe >= Ne
                    }

                    function _() {
                        var te = j();
                        return Ee(te) ? R(te) : void(X = setTimeout(_, ce(te)))
                    }

                    function R(te) {
                        return X = void 0, je && we ? F(te) : (we = ie = void 0, de)
                    }

                    function D() {
                        X !== void 0 && clearTimeout(X), b = 0, we = ae = ie = X = void 0
                    }

                    function H() {
                        return X === void 0 ? de : R(j())
                    }

                    function Y() {
                        var te = j(),
                            Q = Ee(te);
                        if (we = arguments, ie = this, ae = te, Q) {
                            if (X === void 0) return K(ae);
                            if (se) return X = setTimeout(_, T), F(ae)
                        }
                        return X === void 0 && (X = setTimeout(_, T)), de
                    }
                    var we, ie, Ne, de, X, ae, b = 0,
                        ve = !1,
                        se = !1,
                        je = !0;
                    if (typeof M != "function") throw new TypeError(p);
                    return T = c(T) || 0, o(I) && (ve = !!I.leading, se = "maxWait" in I, Ne = se ? N(c(I.maxWait) || 0, T) : Ne, je = "trailing" in I ? !!I.trailing : je), Y.cancel = D, Y.flush = H, Y
                }

                function o(M) {
                    var T = typeof M > "u" ? "undefined" : d(M);
                    return !!M && (T == "object" || T == "function")
                }

                function a(M) {
                    return !!M && (typeof M > "u" ? "undefined" : d(M)) == "object"
                }

                function s(M) {
                    return (typeof M > "u" ? "undefined" : d(M)) == "symbol" || a(M) && L.call(M) == y
                }

                function c(M) {
                    if (typeof M == "number") return M;
                    if (s(M)) return v;
                    if (o(M)) {
                        var T = typeof M.valueOf == "function" ? M.valueOf() : M;
                        M = o(T) ? T + "" : T
                    }
                    if (typeof M != "string") return M === 0 ? M : +M;
                    M = M.replace(w, "");
                    var I = S.test(M);
                    return I || h.test(M) ? f(M.slice(2), I ? 2 : 8) : x.test(M) ? v : +M
                }
                var d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(M) {
                        return typeof M
                    } : function(M) {
                        return M && typeof Symbol == "function" && M.constructor === Symbol && M !== Symbol.prototype ? "symbol" : typeof M
                    },
                    p = "Expected a function",
                    v = NaN,
                    y = "[object Symbol]",
                    w = /^\s+|\s+$/g,
                    x = /^[-+]0x[0-9a-f]+$/i,
                    S = /^0b[01]+$/i,
                    h = /^0o[0-7]+$/i,
                    f = parseInt,
                    g = (typeof l > "u" ? "undefined" : d(l)) == "object" && l && l.Object === Object && l,
                    k = (typeof self > "u" ? "undefined" : d(self)) == "object" && self && self.Object === Object && self,
                    P = g || k || Function("return this")(),
                    $ = Object.prototype,
                    L = $.toString,
                    N = Math.max,
                    A = Math.min,
                    j = function() {
                        return P.Date.now()
                    };
                n.exports = i
            }).call(r, function() {
                return this
            }())
        }, function(n, r) {
            function l(d) {
                var p = void 0,
                    v = void 0;
                for (p = 0; p < d.length; p += 1)
                    if (v = d[p], v.dataset && v.dataset.aos || v.children && l(v.children)) return !0;
                return !1
            }

            function i() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }

            function o() {
                return !!i()
            }

            function a(d, p) {
                var v = window.document,
                    y = i(),
                    w = new y(s);
                c = p, w.observe(v.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }

            function s(d) {
                d && d.forEach(function(p) {
                    var v = Array.prototype.slice.call(p.addedNodes),
                        y = Array.prototype.slice.call(p.removedNodes),
                        w = v.concat(y);
                    if (l(w)) return c()
                })
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var c = function() {};
            r.default = {
                isSupported: o,
                ready: a
            }
        }, function(n, r) {
            function l(v, y) {
                if (!(v instanceof y)) throw new TypeError("Cannot call a class as a function")
            }

            function i() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = function() {
                    function v(y, w) {
                        for (var x = 0; x < w.length; x++) {
                            var S = w[x];
                            S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(y, S.key, S)
                        }
                    }
                    return function(y, w, x) {
                        return w && v(y.prototype, w), x && v(y, x), y
                    }
                }(),
                a = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                c = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                d = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                p = function() {
                    function v() {
                        l(this, v)
                    }
                    return o(v, [{
                        key: "phone",
                        value: function() {
                            var y = i();
                            return !(!a.test(y) && !s.test(y.substr(0, 4)))
                        }
                    }, {
                        key: "mobile",
                        value: function() {
                            var y = i();
                            return !(!c.test(y) && !d.test(y.substr(0, 4)))
                        }
                    }, {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone()
                        }
                    }]), v
                }();
            r.default = new p
        }, function(n, r) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var l = function(o, a, s) {
                    var c = o.node.getAttribute("data-aos-once");
                    a > o.position ? o.node.classList.add("aos-animate") : typeof c < "u" && (c === "false" || !s && c !== "true") && o.node.classList.remove("aos-animate")
                },
                i = function(o, a) {
                    var s = window.pageYOffset,
                        c = window.innerHeight;
                    o.forEach(function(d, p) {
                        l(d, c + s, a)
                    })
                };
            r.default = i
        }, function(n, r, l) {
            function i(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = l(12),
                a = i(o),
                s = function(c, d) {
                    return c.forEach(function(p, v) {
                        p.node.classList.add("aos-init"), p.position = (0, a.default)(p.node, d.offset)
                    }), c
                };
            r.default = s
        }, function(n, r, l) {
            function i(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = l(13),
                a = i(o),
                s = function(c, d) {
                    var p = 0,
                        v = 0,
                        y = window.innerHeight,
                        w = {
                            offset: c.getAttribute("data-aos-offset"),
                            anchor: c.getAttribute("data-aos-anchor"),
                            anchorPlacement: c.getAttribute("data-aos-anchor-placement")
                        };
                    switch (w.offset && !isNaN(w.offset) && (v = parseInt(w.offset)), w.anchor && document.querySelectorAll(w.anchor) && (c = document.querySelectorAll(w.anchor)[0]), p = (0, a.default)(c).top, w.anchorPlacement) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            p += c.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            p += c.offsetHeight;
                            break;
                        case "top-center":
                            p += y / 2;
                            break;
                        case "bottom-center":
                            p += y / 2 + c.offsetHeight;
                            break;
                        case "center-center":
                            p += y / 2 + c.offsetHeight / 2;
                            break;
                        case "top-top":
                            p += y;
                            break;
                        case "bottom-top":
                            p += c.offsetHeight + y;
                            break;
                        case "center-top":
                            p += c.offsetHeight / 2 + y
                    }
                    return w.anchorPlacement || w.offset || isNaN(d) || (v = d), p + v
                };
            r.default = s
        }, function(n, r) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var l = function(i) {
                for (var o = 0, a = 0; i && !isNaN(i.offsetLeft) && !isNaN(i.offsetTop);) o += i.offsetLeft - (i.tagName != "BODY" ? i.scrollLeft : 0), a += i.offsetTop - (i.tagName != "BODY" ? i.scrollTop : 0), i = i.offsetParent;
                return {
                    top: a,
                    left: o
                }
            };
            r.default = l
        }, function(n, r) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var l = function(i) {
                return i = i || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(i, function(o) {
                    return {
                        node: o
                    }
                })
            };
            r.default = l
        }])
    })
})(lv);
const Ge = nc(ga),
    Mi = ({
        styles: e,
        fade: t
    }) => (m.useEffect(() => {
        Ge.init({
            duration: 2e3
        })
    }, []), u(vt, {
        to: "/contactus",
        "data-aos": t || "",
        children: u("button", {
            type: "button",
            className: `py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${e} transition hover:scale-105`,
            children: "Get Started"
        })
    })),
    iv = () => (m.useEffect(() => {
        Ge.init({
            duration: 2e3
        })
    }, []), C("section", {
        id: "details",
        className: `${Me.sectionReverse} `,
        children: [C("div", {
            className: `${Me.sectionImgReverse}`,
            children: [u("img", {
                "data-aos": "flip-right",
                src: rv,
                alt: "billing",
                className: "w-[100%] h-[100%] relative z-[5]"
            }), u("div", {
                className: "absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"
            }), u("div", {
                className: "absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient"
            })]
        }), C("div", {
            "data-aos": "fade-left",
            className: `${Me.sectionInfo}`,
            children: [C("h2", {
                className: O.heading2,
                children: ["Our ", u("span", {
                    className: "text-gradient",
                    children: "Social Media Marketing"
                }), " ", "Services:"]
            }), C("p", {
                className: `${O.paragraph} max-w-[570px] mt-5 marker:text-secondary`,
                children: [u("li", {
                    className: "list-disc",
                    children: "Creation, Optimization & Branding of Social Media Accounts."
                }), u("li", {
                    className: "list-disc",
                    children: "Monthly Social Media Content Calendar."
                }), u("li", {
                    className: "list-disc",
                    children: "Graphics Designing & Content Creation."
                }), u("li", {
                    className: "list-disc",
                    children: "Social Media PPC Advertising."
                }), u("li", {
                    className: "list-disc",
                    children: "Budget Optimisation."
                }), u("li", {
                    className: "list-disc",
                    children: "Posts Sharing & Hash Tagging."
                }), u("li", {
                    className: "list-disc",
                    children: "Social Media Customer Support Queries."
                }), u("li", {
                    className: "list-disc",
                    children: "Ad Spending and KPI Reports."
                })]
            }), u(Mi, {
                styles: "mt-10 hidden sm:block"
            })]
        })]
    })),
    Ku = ({
        Icon: e,
        title: t,
        content: n,
        index: r
    }) => C("div", {
        className: `flex flex-row p-6 rounded-[20px] ${r!==hf.length-1?"mb-6":"mb-0"} feature-card`,
        children: [u("div", {
            className: `w-[64px] h-[64px] rounded-full ${O.flexCenter} bg-dimBlue`,
            children: u(e, {
                alt: "star",
                className: "w-[50%] h-[50%] object-contain text-secondary"
            })
        }), C("div", {
            className: "flex-1 flex flex-col ml-3",
            children: [u("h4", {
                className: "font-poppins font-semibold text-gradient text-[18px] leading-[23.4px] mb-1",
                children: t
            }), u("p", {
                className: "font-poppins font-normal text-dimWhite text-[16px] leading-[24px]",
                children: n
            })]
        })]
    }),
    ov = () => (m.useEffect(() => {
        Ge.init({
            duration: 2e3
        })
    }, []), C("section", {
        id: "features",
        className: Me.section,
        children: [C("div", {
            "data-aos": "fade-right",
            className: Me.sectionInfo,
            children: [C("h2", {
                className: O.heading2,
                children: ["You do the business, ", u("br", {
                    className: "sm:block hidden"
                }), " we’ll handle the", u("span", {
                    className: "text-gradient",
                    children: " hype!"
                })]
            }), u("p", {
                className: `${O.paragraph} max-w-[500px] mt-5`,
                children: "Our experienced team of digital marketers will provide a comprehensive suite of Digital Marketing Solutions including Social Media Marketing, Email Marketing, PPC Campaigns, Graphic Designing, Content Marketing, SEO, Web Development, and more."
            }), u(Mi, {
                styles: "mt-10"
            })]
        }), u("div", {
            className: `${Me.sectionImg} flex-col`,
            children: hf.map((e, t) => e.link === "/contactus" ? u(vt, {
                to: "/contactus",
                "data-aos": "fade-right",
                children: u(Ku, { ...e,
                    index: t
                }, e.id)
            }, e.id) : u("a", {
                href: e.link,
                "data-aos": t % 2 === 0 ? "fade-left" : "fade-right",
                children: u(Ku, { ...e,
                    index: t
                }, e.id)
            }, e.id))
        })]
    }));
const av = () => {
        const e = Nf();
        return m.useEffect(() => {
            Ge.init({
                duration: 2e3
            })
        }, []), C("div", {
            className: "mt-4",
            children: [u("div", {
                className: "box-button relative"
            }), u("div", {
                className: "gradient-border-button joinnow-button absolute font-poppins",
                style: {
                    marginTop: "-71px",
                    marginLeft: "6px"
                },
                children: u("div", {
                    onClick: () => e("/contactus"),
                    children: "Get Started"
                })
            })]
        })
    },
    sv = () => (m.useEffect(() => {
        Ge.init({
            duration: 2e3
        })
    }, []), C("section", {
        className: `${O.flexCenter} ${O.marginY} ${O.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`,
        children: [C("div", {
            className: "flex-1 flex flex-col",
            children: [u("h2", {
                "data-aos": "fade-right",
                className: `${O.heading2} text-gradient`,
                children: "Ready, Set, Promote!"
            }), u("p", {
                "data-aos": "fade-right",
                className: `${O.paragraph} max-w-[470px] mt-5`,
                children: "Get in touch with us today and let us take your digital marketing to the next level!"
            })]
        }), u("div", {
            "data-aos": "fade-left",
            className: `${O.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`,
            children: u(av, {})
        })]
    })),
    uv = () => (m.useEffect(() => {
        Ge.init({
            duration: 2e3
        })
    }, []), u("section", {
        "data-aos": "fade-up",
        className: `${O.flexCenter} flex-row flex-wrap sm:mb-6 mb-6`,
        children: qh.map(e => C("div", {
            className: "flex-1  flex justify-start items-center flex-row m-3",
            children: [u("h4", {
                className: "font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white ss:w-auto w-28",
                children: e.value
            }), u("p", {
                className: "font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3",
                children: e.title
            })]
        }, e.id))
    })),
    cv = () => u("section", {
        className: `${O.flexCenter} ${O.paddingY} sm:py-6 flex-col`,
        children: C("div", {
            className: "w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]",
            children: [u("p", {
                className: "font-poppins font-normal text-center text-[18px] leading-[27px] text-white",
                children: "Copyright Ⓒ 2023 Rapid Hype. All Rights Reserved."
            }), u("div", {
                className: "flex flex-row md:mt-0 mt-6",
                children: Iu.map((e, t) => u("img", {
                    src: e.icon,
                    alt: e.id,
                    className: `w-[21px] h-[21px] object-contain cursor-pointer ${t!==Iu.length-1?"mr-6":"mr-0"} transition hover:scale-125`,
                    onClick: () => window.open(e.link)
                }, e.id))
            })]
        })
    }),
    dv = () => (m.useEffect(() => {
        Ge.init({
            duration: 2e3
        })
    }, []), C("section", {
        id: "tools",
        className: `${O.paddingY} ${O.flexCenter} sm:py-6 flex-col relative `,
        children: [u("div", {
            className: "absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40"
        }), C("div", {
            className: "w-full flex justify-between items-center md:flex-row flex-col sm:mb-6 mb-6 relative z-[1]",
            children: [C("h2", {
                "data-aos": "fade-right",
                className: `${O.heading2} md:text-center`,
                children: [u("span", {
                    className: "text-gradient",
                    children: "Marketing"
                }), " Tools that We have", " ", u("span", {
                    className: "text-gradient",
                    children: "Expertise"
                }), " in"]
            }), u("div", {
                className: `${O.flexCenter}`,
                children: u("div", {
                    className: `${O.flexCenter} flex-wrap w-full`,
                    children: e0.map((e, t) => u("div", {
                        "data-aos": t % 2 === 0 ? "fade-left" : "fade-right",
                        className: `flex-1 ${O.flexCenter} sm:min-w-[250px] min-w-[120px] m-5 sm:my-5 sm:mx-0`,
                        children: u("img", {
                            src: e.logo,
                            alt: "tool_logo",
                            className: "sm:w-[250px] w-[192px] object-contain "
                        })
                    }, e.id))
                })
            })]
        })]
    })),
    fv = "/assets/herosample-1a9dfd8b.png";
const Yu = () => (m.useEffect(() => {
    Ge.init({
        duration: 2e3
    })
}, []), C("div", {
    "data-aos": "fade-up",
    className: "mt-4",
    children: [u("div", {
        className: "box relative z-10"
    }), u("div", {
        className: "gradient-border1 joinnow-div absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20",
        children: C(vt, {
            to: "/contactus",
            className: `${O.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full group`,
            children: [C("div", {
                className: `${O.flexStart} flex-row transition-all group-hover:scale-125`,
                children: [u("p", {
                    className: "font-poppins font-medium text-[18px] leading-[23.4px]",
                    children: u("span", {
                        className: "text-gradient",
                        children: "Get"
                    })
                }), u("img", {
                    src: $h,
                    alt: "arrow-up",
                    className: "w-[23px] h-[23px] object-contain"
                })]
            }), u("p", {
                className: "font-poppins font-medium text-[18px] leading-[23.4px] transition-all group-hover:scale-125",
                children: u("span", {
                    className: "text-gradient",
                    children: "Started"
                })
            })]
        })
    })]
}));
const pv = () => (m.useEffect(() => {
    Ge.init({
        duration: 2e3
    })
}, []), C("section", {
    id: "home",
    className: `flex md:flex-row flex-col ${O.paddingY}`,
    children: [C("div", {
        className: `flex-1 ${O.flexStart} flex-col xl:px-0 sm:px-16 px-6`,
        children: [C("div", {
            "data-aos": "fade-right",
            className: "flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2",
            children: [u("img", {
                src: Th,
                alt: "discount",
                className: "w-[32px] h-[32px]"
            }), C("p", {
                className: `${O.paragraph} ml-2`,
                children: [u("span", {
                    className: "text-white",
                    children: "10%"
                }), " Discount on", " ", u("span", {
                    className: "text-white",
                    children: "First"
                }), " Order"]
            })]
        }), C("div", {
            "data-aos": "fade-left",
            className: "flex flex-row justify-between items-center w-full",
            children: [C("h1", {
                className: "flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]",
                children: ["Get Ready To", u("br", {
                    className: "sm:block"
                }), " ", u("span", {
                    className: "text-gradient influence",
                    children: "Go Viral."
                }), " "]
            }), u("div", {
                className: "ss:flex hidden md:mr-4 mr-0",
                children: u(Yu, {})
            })]
        }), u("h1", {
            className: "font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"
        }), C("p", {
            "data-aos": "fade-right",
            className: `${O.paragraph} max-w-[470px] mt-5`,
            children: [u("span", {
                className: "text-gradient",
                children: "Rapid Hype"
            }), " is a one-stop shop for all your Digital Marketing needs. Our team of experts will help you get your message out and ensure your brand is seen!"]
        })]
    }), C("div", {
        className: `flex-1 flex ${O.flexCenter} md:my-0 my-10 relative`,
        children: [u("img", {
            "data-aos": "fade-left",
            src: fv,
            alt: "billing",
            className: "w-[100%] h-[100%] relative z-[5]"
        }), u("div", {
            className: "absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"
        }), u("div", {
            className: "absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40"
        }), u("div", {
            className: "absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"
        })]
    }), u("div", {
        className: `ss:hidden ${O.flexCenter}`,
        children: u(Yu, {})
    })]
}));

function mv(e) {
    return wt({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "desc",
            attr: {},
            child: []
        }, {
            tag: "path",
            attr: {
                stroke: "none",
                d: "M0 0h24v24H0z",
                fill: "none"
            }
        }, {
            tag: "path",
            attr: {
                d: "M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"
            }
        }]
    })(e)
}

function hv(e) {
    return wt({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "polyline",
            attr: {
                points: "23 7 23 1 17 1"
            }
        }, {
            tag: "line",
            attr: {
                x1: "16",
                y1: "8",
                x2: "23",
                y2: "1"
            }
        }, {
            tag: "path",
            attr: {
                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            }
        }]
    })(e)
}
const vv = () => (m.useEffect(() => {
    Ge.init({
        duration: 2e3
    })
}, []), C("div", {
    className: "flex flex-col mt-10 p-5",
    children: [C("div", {
        className: "flex flex-col sm:flex-row justify-start",
        children: [u("img", {
            "data-aos": "fade-up",
            src: ff,
            alt: "hoobank",
            className: "w-[210px] h-[75px] object-contain"
        }), u("p", {
            "data-aos": "fade-up",
            className: `${O.paragraph} text-justify mt-5 sm:mt-0  mx-auto max-w-3xl sm:px-5`,
            children: "Rapid Hype is a dynamic digital marketing agency that specializes in creating customized marketing strategies to help businesses achieve their goals."
        })]
    }), C("div", {
        className: "flex flex-col sm:flex-row sm:justify-between text-white mt-10 ",
        children: [C(vt, {
            to: "/contactus",
            className: "flex flex-row items-center cursor-pointer hover:text-secondary",
            children: [u("div", {
                "data-aos": "fade-left",
                children: u(mv, {
                    className: "text-3xl"
                })
            }), u("p", {
                "data-aos": "fade-right",
                className: "font-poppins font-normal text-[18px] leading-[30.8px] ml-4",
                children: "Contact Us"
            })]
        }), C("a", {
            className: "flex flex-row items-center cursor-pointer hover:text-secondary mt-5 sm:mt-0",
            href: "tel:+923072114006",
            children: [u("div", {
                "data-aos": "fade-left",
                children: u(hv, {
                    className: "text-3xl"
                })
            }), u("p", {
                "data-aos": "fade-right",
                className: "font-poppins font-normal text-[18px] leading-[30.8px] ml-4",
                children: "+923072114006"
            })]
        }), C("div", {
            className: "flex flex-row items-center cursor-pointer hover:text-secondary mt-5 sm:mt-0",
            onClick: () => window.open("mailto:hello@rapidhype.com"),
            children: [u("div", {
                "data-aos": "fade-left",
                children: u(Dh, {
                    className: "text-3xl"
                })
            }), u("p", {
                "data-aos": "fade-right",
                className: "font-poppins font-normal text-[18px] leading-[30.8px] ml-4",
                children: "hello@rapidhype.pk"
            })]
        }), C(vt, {
            to: "/privacypolicy",
            className: "flex flex-row items-center cursor-pointer hover:text-secondary mt-5 sm:mt-0",
            children: [u("div", {
                "data-aos": "fade-left",
                children: u(Hh, {
                    className: "text-3xl"
                })
            }), u("p", {
                "data-aos": "fade-right",
                className: "font-poppins font-normal text-[18px] leading-[30.8px] ml-4 ",
                children: "Privacy Policy"
            })]
        })]
    })]
}));

function gv() {
    return u("div", {
        className: "overflow-x-auto",
        children: u("marquee", {
            behavior: "alternate",
            direction: "left",
            scrollamount: "5",
            children: u("div", {
                className: "flex flex-nowrap gap-1",
                children: Zh.map(e => u("div", {
                    className: "bg-gray-400/5 p-8 sm:p-10 flex-shrink-0",
                    children: u("img", {
                        className: "max-h-12 w-full object-contain",
                        src: e.logo,
                        alt: "client_logo",
                        width: 158,
                        height: 48
                    })
                }, e.id))
            })
        })
    })
}
const yv = () => (m.useEffect(() => {
        Ge.init({
            duration: 2e3
        })
    }, []), C("section", {
        id: "graphicdesign",
        className: Me.section,
        children: [C("div", {
            "data-aos": "fade-left",
            className: Me.sectionInfo,
            children: [C("h2", {
                className: O.heading2,
                children: ["Our ", u("span", {
                    className: "text-gradient",
                    children: "Graphic Designing"
                }), " Services:"]
            }), C("p", {
                className: `${O.paragraph} max-w-[470px] mt-5 marker:text-secondary`,
                children: [u("li", {
                    className: "list-disc",
                    children: "Branding Design."
                }), u("li", {
                    className: "list-disc",
                    children: "Social Media Design."
                }), u("li", {
                    className: "list-disc",
                    children: "UI/UX Design."
                }), u("li", {
                    className: "list-disc",
                    children: "Infographic Design."
                }), u("li", {
                    className: "list-disc",
                    children: "Packaging Design."
                }), u("li", {
                    className: "list-disc",
                    children: "Print Design."
                }), u("li", {
                    className: "list-disc",
                    children: "Illustration."
                }), u("li", {
                    className: "list-disc",
                    children: "Animation. "
                })]
            }), u(Mi, {
                styles: "mt-10 hidden sm:block"
            })]
        }), u("div", {
            className: Me.sectionImg,
            children: u("img", {
                "data-aos": "flip-left",
                src: zh,
                alt: "billing",
                className: "w-[100%] h-[100%]"
            })
        })]
    })),
    wv = "/assets/PPC-c21511a6.png",
    xv = () => (m.useEffect(() => {
        Ge.init({
            duration: 2e3
        })
    }, []), C("section", {
        id: "ppc",
        className: `${Me.sectionReverse} `,
        children: [C("div", {
            className: `${Me.sectionImgReverse}`,
            children: [u("img", {
                "data-aos": "flip-right",
                src: wv,
                alt: "billing",
                className: "w-[100%] h-[100%] relative z-[5]"
            }), u("div", {
                className: "absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40"
            })]
        }), C("div", {
            "data-aos": "fade-left",
            className: `${Me.sectionInfo}`,
            children: [C("h2", {
                className: O.heading2,
                children: ["Our ", u("span", {
                    className: "text-gradient",
                    children: "PPC"
                }), " Services:"]
            }), C("p", {
                className: `${O.paragraph} max-w-[500px] mt-5 marker:text-secondary`,
                children: [u("li", {
                    className: "list-disc",
                    children: "Strategy Development. "
                }), u("li", {
                    className: "list-disc",
                    children: "Campaign Setup."
                }), u("li", {
                    className: "list-disc",
                    children: "Ad Copy and Design."
                }), u("li", {
                    className: "list-disc",
                    children: "Keyword Research."
                }), u("li", {
                    className: "list-disc",
                    children: "Budget Optimisation."
                }), u("li", {
                    className: "list-disc",
                    children: "Bid Management."
                }), u("li", {
                    className: "list-disc",
                    children: "Landing Page Optimization."
                }), u("li", {
                    className: "list-disc",
                    children: "A/B Testing."
                }), u("li", {
                    className: "list-disc",
                    children: "Reporting and Analysis."
                })]
            }), u(Mi, {
                styles: "mt-10 hidden sm:block"
            })]
        })]
    })),
    Gu = () => C(La, {
        children: [u("div", {
            className: `bg-primary ${O.flexStart}`,
            children: u("div", {
                className: `${O.boxWidth}`,
                children: u(pv, {})
            })
        }), u("div", {
            className: `bg-primary ${O.paddingX} ${O.flexCenter}`,
            children: C("div", {
                className: `${O.boxWidth}`,
                children: [u(uv, {}), u(ov, {}), u(dv, {}), u(iv, {}), u(yv, {}), u(xv, {}), u(gv, {}), u(sv, {})]
            })
        })]
    }),
    Xr = {
        _origin: "https://api.emailjs.com"
    },
    kv = (e, t = "https://api.emailjs.com") => {
        Xr._userID = e, Xr._origin = t
    },
    Pf = (e, t, n) => {
        if (!e) throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
        if (!t) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
        if (!n) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
        return !0
    };
class Xu {
    constructor(t) {
        this.status = t ? t.status : 0, this.text = t ? t.responseText : "Network Error"
    }
}
const _f = (e, t, n = {}) => new Promise((r, l) => {
        const i = new XMLHttpRequest;
        i.addEventListener("load", ({
            target: o
        }) => {
            const a = new Xu(o);
            a.status === 200 || a.text === "OK" ? r(a) : l(a)
        }), i.addEventListener("error", ({
            target: o
        }) => {
            l(new Xu(o))
        }), i.open("POST", Xr._origin + e, !0), Object.keys(n).forEach(o => {
            i.setRequestHeader(o, n[o])
        }), i.send(t)
    }),
    Sv = (e, t, n, r) => {
        const l = r || Xr._userID;
        return Pf(l, e, t), _f("/api/v1.0/email/send", JSON.stringify({
            lib_version: "3.10.0",
            user_id: l,
            service_id: e,
            template_id: t,
            template_params: n
        }), {
            "Content-type": "application/json"
        })
    },
    Ev = e => {
        let t;
        if (typeof e == "string" ? t = document.querySelector(e) : t = e, !t || t.nodeName !== "FORM") throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
        return t
    },
    Nv = (e, t, n, r) => {
        const l = r || Xr._userID,
            i = Ev(n);
        Pf(l, e, t);
        const o = new FormData(i);
        return o.append("lib_version", "3.10.0"), o.append("service_id", e), o.append("template_id", t), o.append("user_id", l), _f("/api/v1.0/email/send-form", o)
    },
    $f = {
        init: kv,
        send: Sv,
        sendForm: Nv
    },
    Cv = "/assets/contact-2b438e9b.png";
const Tf = () => u("div", {
        children: C("svg", {
            className: "loader mx-auto",
            viewBox: "0 0 128 128",
            width: "128px",
            height: "128px",
            xmlns: "http://www.w3.org/2000/svg",
            children: [C("defs", {
                children: [C("linearGradient", {
                    id: "grad1",
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [u("stop", {
                        offset: "0%",
                        "stop-color": "#000"
                    }), u("stop", {
                        offset: "40%",
                        "stop-color": "#fff"
                    }), u("stop", {
                        offset: "100%",
                        "stop-color": "#fff"
                    })]
                }), C("linearGradient", {
                    id: "grad2",
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [u("stop", {
                        offset: "0%",
                        "stop-color": "#000"
                    }), u("stop", {
                        offset: "60%",
                        "stop-color": "#000"
                    }), u("stop", {
                        offset: "100%",
                        "stop-color": "#fff"
                    })]
                }), u("mask", {
                    id: "mask1",
                    children: u("rect", {
                        x: "0",
                        y: "0",
                        width: "128",
                        height: "128",
                        fill: "url(#grad1)"
                    })
                }), u("mask", {
                    id: "mask2",
                    children: u("rect", {
                        x: "0",
                        y: "0",
                        width: "128",
                        height: "128",
                        fill: "url(#grad2)"
                    })
                })]
            }), C("g", {
                fill: "none",
                "stroke-linecap": "round",
                "stroke-width": "16",
                children: [u("circle", {
                    className: "loader_ring",
                    r: "56",
                    cx: "64",
                    cy: "64",
                    stroke: "#ddd"
                }), C("g", {
                    stroke: "hsl(223,90%,50%)",
                    children: [u("path", {
                        className: "loader_worm1",
                        d: "M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64",
                        stroke: "hsl(343,90%,50%)",
                        "stroke-dasharray": "43.98 307.87"
                    }), u("g", {
                        transform: "translate(42,42)",
                        children: u("g", {
                            className: "loader_worm2",
                            transform: "translate(-42,0)",
                            children: u("path", {
                                className: "loader_worm2-1",
                                d: "M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14",
                                "stroke-dasharray": "43.98 175.92"
                            })
                        })
                    })]
                }), C("g", {
                    stroke: "hsl(283,90%,50%)",
                    mask: "url(#mask1)",
                    children: [u("path", {
                        className: "loader_worm1",
                        d: "M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64",
                        "stroke-dasharray": "43.98 307.87"
                    }), u("g", {
                        transform: "translate(42,42)",
                        children: u("g", {
                            className: "loader_worm2",
                            transform: "translate(-42,0)",
                            children: u("path", {
                                className: "loader_worm2-1",
                                d: "M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14",
                                "stroke-dasharray": "43.98 175.92"
                            })
                        })
                    })]
                }), C("g", {
                    stroke: "hsl(343,90%,50%)",
                    mask: "url(#mask2)",
                    children: [u("path", {
                        className: "loader_worm1",
                        d: "M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64",
                        "stroke-dasharray": "43.98 307.87"
                    }), u("g", {
                        transform: "translate(42,42)",
                        children: u("g", {
                            className: "loader_worm2",
                            transform: "translate(-42,0)",
                            children: u("path", {
                                className: "loader_worm2-1",
                                d: "M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14",
                                "stroke-dasharray": "43.98 175.92"
                            })
                        })
                    })]
                })]
            })]
        })
    }),
    Pv = () => {
        const e = m.useRef(),
            [t, n] = m.useState(!1),
            [r, l] = m.useState(!1),
            [i, o] = m.useState(!1),
            a = c => {
                c.preventDefault(), n(!0), $f.sendForm("service_hfa58hp", "template_u0nvmp1", e.current, "ryEYZeG1Z3PPkC221").then(d => {
                    l(!0), o(!0), n(!1)
                }, d => {
                    l(!0), o(!1), n(!1)
                })
            },
            s = () => {
                if (t) return u(Tf, {});
                if (!t && !r) return u("button", {
                    className: "flex justify-center w-56 py-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] mt-5 md:mx-auto",
                    type: "submit",
                    children: t ? u("div", {
                        className: "loader"
                    }) : "Submit"
                });
                if (!t && r) return i ? C("label", {
                    className: `${O.paragraph} mt-3`,
                    children: [u("span", {
                        className: "text-green-500",
                        children: "Message sent successfully"
                    }), " ", u("br", {}), " We will contact you shortly"]
                }) : C("label", {
                    className: `${O.paragraph} mt-3`,
                    children: [u("span", {
                        className: "text-red-500",
                        children: "Server Busy"
                    }), " ", u("br", {}), " Please contact us at ", u("b", {
                        children: "hello@rapidhype.pk"
                    })]
                })
            };
        return u("div", {
            className: `bg-primary ${O.paddingX} ${O.flexCenter}`,
            children: u("div", {
                className: `${O.boxWidth}`,
                children: C("section", {
                    id: "contactus",
                    className: `${Me.sectionReverse} `,
                    children: [C("div", {
                        className: `${Me.sectionImgReverse}`,
                        children: [u("img", {
                            src: Cv,
                            alt: "billing",
                            className: "w-[100%] h-[100%] relative z-[5]"
                        }), u("div", {
                            className: "absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"
                        }), u("div", {
                            className: "absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient"
                        })]
                    }), C("div", {
                        className: `${Me.sectionInfo}`,
                        children: [u("h1", {
                            className: `${O.heading2} text-gradient`,
                            children: "Contact Us"
                        }), C("form", {
                            ref: e,
                            onSubmit: a,
                            className: "text-white flex flex-col w-full ",
                            children: [u("label", {
                                className: `${O.paragraph}`,
                                children: "Full Name"
                            }), u("input", {
                                type: "text",
                                name: "user_name",
                                placeholder: "John Doe",
                                className: "mt-1 rounded-lg bg-primary border-secondary focus:border-secondary focus:ring-secondary",
                                required: !0
                            }), u("label", {
                                className: `${O.paragraph} mt-3`,
                                children: "Email"
                            }), u("input", {
                                className: "mt-1 rounded-lg bg-primary border-secondary focus:border-secondary focus:ring-secondary",
                                type: "email",
                                name: "user_email",
                                placeholder: "JohnDoe@gmail.com",
                                required: !0
                            }), u("label", {
                                className: `${O.paragraph} mt-3`,
                                children: "Phone Number"
                            }), u("input", {
                                className: "mt-1 rounded-lg bg-primary border-secondary focus:border-secondary focus:ring-secondary",
                                type: "text",
                                name: "user_number",
                                placeholder: "+923001234567",
                                required: !0
                            }), u("label", {
                                className: `${O.paragraph} mt-3`,
                                children: "Message"
                            }), u("textarea", {
                                className: "mt-1 rounded-lg bg-primary border-secondary focus:border-secondary focus:ring-secondary",
                                name: "message",
                                placeholder: "This is a Message.",
                                required: !0
                            }), s()]
                        })]
                    })]
                })
            })
        })
    },
    _v = () => C("section", {
        className: `bg-primary ${O.paddingX} ${O.flexCenter} `,
        children: [u("div", {
            className: `${O.boxWidth} max-w-5xl xl:max-w-5xl`,
            children: u("div", {
                className: `${O.flexCenter} ${O.marginY} ${O.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`,
                children: C("div", {
                    className: "flex-1 flex flex-col",
                    children: [u("h1", {
                        className: O.heading2,
                        children: "Privacy Policy"
                    }), C("div", {
                        className: "flex flex-col text-white text-justify gap-5",
                        children: [u("p", {
                            children: "This Privacy Policy governs the manner in which Rapid Hype collects, uses, maintains, and discloses information collected from users of the http://www.rapidhype.pk website. This privacy policy applies to the Site and all products and services offered by Rapid Hype."
                        }), u("p", {
                            children: u("b", {
                                children: "Personal identification information"
                            })
                        }), u("p", {
                            children: "We may collect personal identification information from Users in a variety of ways, including, but not limited to when Users visit our site, register on the site, and in connection with other activities, services, features, or resources we make available on our Site. Users may be asked for, as appropriate, their name, email address, mailing address, phone number, and credit card information. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personal identification information, except that it may prevent them from engaging in certain Site related activities."
                        }), u("p", {
                            children: u("b", {
                                children: "Non-personal identification information"
                            })
                        }), C("p", {
                            children: ["We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer, and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar entities.", " "]
                        })]
                    })]
                })
            })
        }), u("div", {
            className: "absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient pointer-events-none"
        }), u("div", {
            className: "absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40 pointer-events-none"
        }), u("div", {
            className: "absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient pointer-events-none"
        })]
    }),
    $v = () => C(La, {
        children: [u("div", {
            className: "fixed z-30 bottom-4 right-3 sm:hidden",
            children: u(vt, {
                to: "whatsapp://send?phone=+923072114006&text=Hi!",
                children: u(Bh, {
                    className: "text-7xl text-green-700"
                })
            })
        }), C("div", {
            className: "fixed z-30 bottom-12 right-3 hidden sm:block cursor-pointer transition hover:scale-105",
            onClick: () => window.open("mailto:hello@rapidhype.com"),
            children: [u(Ih, {
                className: "text-7xl text-[#a322de]"
            }), u("p", {
                className: `${O.paragraph} text-sm text-white`,
                children: "Chat Now"
            })]
        })]
    });
var Tv = Object.defineProperty,
    Lv = (e, t, n) => t in e ? Tv(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    fo = (e, t, n) => (Lv(e, typeof t != "symbol" ? t + "" : t, n), n);
let Ov = class {
        constructor() {
            fo(this, "current", this.detect()), fo(this, "handoffState", "pending"), fo(this, "currentId", 0)
        }
        set(t) {
            this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t)
        }
        reset() {
            this.set(this.detect())
        }
        nextId() {
            return ++this.currentId
        }
        get isServer() {
            return this.current === "server"
        }
        get isClient() {
            return this.current === "client"
        }
        detect() {
            return typeof window > "u" || typeof document > "u" ? "server" : "client"
        }
        handoff() {
            this.handoffState === "pending" && (this.handoffState = "complete")
        }
        get isHandoffComplete() {
            return this.handoffState === "complete"
        }
    },
    Pt = new Ov,
    dt = (e, t) => {
        Pt.isServer ? m.useEffect(e, t) : m.useLayoutEffect(e, t)
    };

function _t(e) {
    let t = m.useRef(e);
    return dt(() => {
        t.current = e
    }, [e]), t
}

function zi(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout(() => {
        throw t
    }))
}

function nr() {
    let e = [],
        t = {
            addEventListener(n, r, l, i) {
                return n.addEventListener(r, l, i), t.add(() => n.removeEventListener(r, l, i))
            },
            requestAnimationFrame(...n) {
                let r = requestAnimationFrame(...n);
                return t.add(() => cancelAnimationFrame(r))
            },
            nextFrame(...n) {
                return t.requestAnimationFrame(() => t.requestAnimationFrame(...n))
            },
            setTimeout(...n) {
                let r = setTimeout(...n);
                return t.add(() => clearTimeout(r))
            },
            microTask(...n) {
                let r = {
                    current: !0
                };
                return zi(() => {
                    r.current && n[0]()
                }), t.add(() => {
                    r.current = !1
                })
            },
            style(n, r, l) {
                let i = n.style.getPropertyValue(r);
                return Object.assign(n.style, {
                    [r]: l
                }), this.add(() => {
                    Object.assign(n.style, {
                        [r]: i
                    })
                })
            },
            group(n) {
                let r = nr();
                return n(r), this.add(() => r.dispose())
            },
            add(n) {
                return e.push(n), () => {
                    let r = e.indexOf(n);
                    if (r >= 0)
                        for (let l of e.splice(r, 1)) l()
                }
            },
            dispose() {
                for (let n of e.splice(0)) n()
            }
        };
    return t
}

function Ss() {
    let [e] = m.useState(nr);
    return m.useEffect(() => () => e.dispose(), [e]), e
}
let ee = function(e) {
    let t = _t(e);
    return U.useCallback((...n) => t.current(...n), [t])
};

function rr() {
    let [e, t] = m.useState(Pt.isHandoffComplete);
    return e && Pt.isHandoffComplete === !1 && t(!1), m.useEffect(() => {
        e !== !0 && t(!0)
    }, [e]), m.useEffect(() => Pt.handoff(), []), e
}
var Ju;
let lr = (Ju = U.useId) != null ? Ju : function() {
    let e = rr(),
        [t, n] = U.useState(e ? () => Pt.nextId() : null);
    return dt(() => {
        t === null && n(Pt.nextId())
    }, [t]), t != null ? "" + t : void 0
};

function $e(e, t, ...n) {
    if (e in t) {
        let l = t[e];
        return typeof l == "function" ? l(...n) : l
    }
    let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, $e), r
}

function Lf(e) {
    return Pt.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
}
let ya = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
var sn = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(sn || {}),
    Of = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Of || {}),
    Mv = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Mv || {});

function zv(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(ya)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)))
}
var Mf = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Mf || {});

function Rv(e, t = 0) {
    var n;
    return e === ((n = Lf(e)) == null ? void 0 : n.body) ? !1 : $e(t, {
        [0]() {
            return e.matches(ya)
        },
        [1]() {
            let r = e;
            for (; r !== null;) {
                if (r.matches(ya)) return !0;
                r = r.parentElement
            }
            return !1
        }
    })
}
var jv = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(jv || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", e => {
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0), document.addEventListener("click", e => {
    e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0));

function hn(e) {
    e == null || e.focus({
        preventScroll: !0
    })
}
let Fv = ["textarea", "input"].join(",");

function Dv(e) {
    var t, n;
    return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Fv)) != null ? n : !1
}

function Iv(e, t = n => n) {
    return e.slice().sort((n, r) => {
        let l = t(n),
            i = t(r);
        if (l === null || i === null) return 0;
        let o = l.compareDocumentPosition(i);
        return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    })
}

function Dl(e, t, {
    sorted: n = !0,
    relativeTo: r = null,
    skipElements: l = []
} = {}) {
    let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
        o = Array.isArray(e) ? n ? Iv(e) : e : zv(e);
    l.length > 0 && o.length > 1 && (o = o.filter(y => !l.includes(y))), r = r ? ? i.activeElement;
    let a = (() => {
            if (t & 5) return 1;
            if (t & 10) return -1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        s = (() => {
            if (t & 1) return 0;
            if (t & 2) return Math.max(0, o.indexOf(r)) - 1;
            if (t & 4) return Math.max(0, o.indexOf(r)) + 1;
            if (t & 8) return o.length - 1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        c = t & 32 ? {
            preventScroll: !0
        } : {},
        d = 0,
        p = o.length,
        v;
    do {
        if (d >= p || d + p <= 0) return 0;
        let y = s + d;
        if (t & 16) y = (y + p) % p;
        else {
            if (y < 0) return 3;
            if (y >= p) return 1
        }
        v = o[y], v == null || v.focus(c), d += a
    } while (v !== i.activeElement);
    return t & 6 && Dv(v) && v.select(), 2
}

function qu(e, t, n) {
    let r = _t(t);
    m.useEffect(() => {
        function l(i) {
            r.current(i)
        }
        return document.addEventListener(e, l, n), () => document.removeEventListener(e, l, n)
    }, [e, n])
}

function zf(e, t, n) {
    let r = _t(t);
    m.useEffect(() => {
        function l(i) {
            r.current(i)
        }
        return window.addEventListener(e, l, n), () => window.removeEventListener(e, l, n)
    }, [e, n])
}

function Uv(e, t, n = !0) {
    let r = m.useRef(!1);
    m.useEffect(() => {
        requestAnimationFrame(() => {
            r.current = n
        })
    }, [n]);

    function l(o, a) {
        if (!r.current || o.defaultPrevented) return;
        let s = a(o);
        if (s === null || !s.getRootNode().contains(s)) return;
        let c = function d(p) {
            return typeof p == "function" ? d(p()) : Array.isArray(p) || p instanceof Set ? p : [p]
        }(e);
        for (let d of c) {
            if (d === null) continue;
            let p = d instanceof HTMLElement ? d : d.current;
            if (p != null && p.contains(s) || o.composed && o.composedPath().includes(p)) return
        }
        return !Rv(s, Mf.Loose) && s.tabIndex !== -1 && o.preventDefault(), t(o, s)
    }
    let i = m.useRef(null);
    qu("mousedown", o => {
        var a, s;
        r.current && (i.current = ((s = (a = o.composedPath) == null ? void 0 : a.call(o)) == null ? void 0 : s[0]) || o.target)
    }, !0), qu("click", o => {
        i.current && (l(o, () => i.current), i.current = null)
    }, !0), zf("blur", o => l(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
}
let Rf = Symbol();

function Av(e, t = !0) {
    return Object.assign(e, {
        [Rf]: t
    })
}

function ft(...e) {
    let t = m.useRef(e);
    m.useEffect(() => {
        t.current = e
    }, [e]);
    let n = ee(r => {
        for (let l of t.current) l != null && (typeof l == "function" ? l(r) : l.current = r)
    });
    return e.every(r => r == null || (r == null ? void 0 : r[Rf])) ? void 0 : n
}

function wa(...e) {
    return e.filter(Boolean).join(" ")
}
var di = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(di || {}),
    Nt = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Nt || {});

function rt({
    ourProps: e,
    theirProps: t,
    slot: n,
    defaultTag: r,
    features: l,
    visible: i = !0,
    name: o
}) {
    let a = jf(t, e);
    if (i) return Nl(a, n, r, o);
    let s = l ? ? 0;
    if (s & 2) {
        let {
            static: c = !1,
            ...d
        } = a;
        if (c) return Nl(d, n, r, o)
    }
    if (s & 1) {
        let {
            unmount: c = !0,
            ...d
        } = a;
        return $e(c ? 0 : 1, {
            [0]() {
                return null
            },
            [1]() {
                return Nl({ ...d,
                    hidden: !0,
                    style: {
                        display: "none"
                    }
                }, n, r, o)
            }
        })
    }
    return Nl(a, n, r, o)
}

function Nl(e, t = {}, n, r) {
    let {
        as: l = n,
        children: i,
        refName: o = "ref",
        ...a
    } = po(e, ["unmount", "static"]), s = e.ref !== void 0 ? {
        [o]: e.ref
    } : {}, c = typeof i == "function" ? i(t) : i;
    "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t));
    let d = {};
    if (t) {
        let p = !1,
            v = [];
        for (let [y, w] of Object.entries(t)) typeof w == "boolean" && (p = !0), w === !0 && v.push(y);
        p && (d["data-headlessui-state"] = v.join(" "))
    }
    if (l === m.Fragment && Object.keys(Zu(a)).length > 0) {
        if (!m.isValidElement(c) || Array.isArray(c) && c.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(a).map(w => `  - ${w}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(w => `  - ${w}`).join(`
`)].join(`
`));
        let p = c.props,
            v = typeof(p == null ? void 0 : p.className) == "function" ? (...w) => wa(p == null ? void 0 : p.className(...w), a.className) : wa(p == null ? void 0 : p.className, a.className),
            y = v ? {
                className: v
            } : {};
        return m.cloneElement(c, Object.assign({}, jf(c.props, Zu(po(a, ["ref"]))), d, s, Hv(c.ref, s.ref), y))
    }
    return m.createElement(l, Object.assign({}, po(a, ["ref"]), l !== m.Fragment && s, l !== m.Fragment && d), c)
}

function Hv(...e) {
    return {
        ref: e.every(t => t == null) ? void 0 : t => {
            for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t)
        }
    }
}

function jf(...e) {
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let t = {},
        n = {};
    for (let r of e)
        for (let l in r) l.startsWith("on") && typeof r[l] == "function" ? (n[l] != null || (n[l] = []), n[l].push(r[l])) : t[l] = r[l];
    if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(r => [r, void 0])));
    for (let r in n) Object.assign(t, {
        [r](l, ...i) {
            let o = n[r];
            for (let a of o) {
                if ((l instanceof Event || (l == null ? void 0 : l.nativeEvent) instanceof Event) && l.defaultPrevented) return;
                a(l, ...i)
            }
        }
    });
    return t
}

function Xe(e) {
    var t;
    return Object.assign(m.forwardRef(e), {
        displayName: (t = e.displayName) != null ? t : e.name
    })
}

function Zu(e) {
    let t = Object.assign({}, e);
    for (let n in t) t[n] === void 0 && delete t[n];
    return t
}

function po(e, t = []) {
    let n = Object.assign({}, e);
    for (let r of t) r in n && delete n[r];
    return n
}

function Bv(e) {
    let t = e.parentElement,
        n = null;
    for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
    let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
    return r && Wv(n) ? !1 : r
}

function Wv(e) {
    if (!e) return !1;
    let t = e.previousElementSibling;
    for (; t !== null;) {
        if (t instanceof HTMLLegendElement) return !1;
        t = t.previousElementSibling
    }
    return !0
}
let bv = "div";
var fi = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(fi || {});

function Vv(e, t) {
    let {
        features: n = 1,
        ...r
    } = e, l = {
        ref: t,
        "aria-hidden": (n & 2) === 2 ? !0 : void 0,
        style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...(n & 4) === 4 && (n & 2) !== 2 && {
                display: "none"
            }
        }
    };
    return rt({
        ourProps: l,
        theirProps: r,
        slot: {},
        defaultTag: bv,
        name: "Hidden"
    })
}
let xa = Xe(Vv),
    Es = m.createContext(null);
Es.displayName = "OpenClosedContext";
var We = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(We || {});

function Ns() {
    return m.useContext(Es)
}

function Qv({
    value: e,
    children: t
}) {
    return U.createElement(Es.Provider, {
        value: e
    }, t)
}
var Ff = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Ff || {});

function Cs(e, t) {
    let n = m.useRef([]),
        r = ee(e);
    m.useEffect(() => {
        let l = [...n.current];
        for (let [i, o] of t.entries())
            if (n.current[i] !== o) {
                let a = r(t, l);
                return n.current = t, a
            }
    }, [r, ...t])
}

function Kv() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}
var xr = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(xr || {});

function Yv() {
    let e = m.useRef(0);
    return zf("keydown", t => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0)
    }, !0), e
}

function rl() {
    let e = m.useRef(!1);
    return dt(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function ll(...e) {
    return m.useMemo(() => Lf(...e), [...e])
}

function Df(e, t, n, r) {
    let l = _t(n);
    m.useEffect(() => {
        e = e ? ? window;

        function i(o) {
            l.current(o)
        }
        return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r)
    }, [e, t, r])
}

function Gv(e) {
    function t() {
        document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t))
    }
    typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t())
}

function If(e) {
    let t = ee(e),
        n = m.useRef(!1);
    m.useEffect(() => (n.current = !1, () => {
        n.current = !0, zi(() => {
            n.current && t()
        })
    }), [t])
}

function Uf(e) {
    if (!e) return new Set;
    if (typeof e == "function") return new Set(e());
    let t = new Set;
    for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
    return t
}
let Xv = "div";
var Af = (e => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Af || {});

function Jv(e, t) {
    let n = m.useRef(null),
        r = ft(n, t),
        {
            initialFocus: l,
            containers: i,
            features: o = 30,
            ...a
        } = e;
    rr() || (o = 1);
    let s = ll(n);
    e1({
        ownerDocument: s
    }, Boolean(o & 16));
    let c = t1({
        ownerDocument: s,
        container: n,
        initialFocus: l
    }, Boolean(o & 2));
    n1({
        ownerDocument: s,
        container: n,
        containers: i,
        previousActiveElement: c
    }, Boolean(o & 8));
    let d = Yv(),
        p = ee(x => {
            let S = n.current;
            S && (h => h())(() => {
                $e(d.current, {
                    [xr.Forwards]: () => {
                        Dl(S, sn.First, {
                            skipElements: [x.relatedTarget]
                        })
                    },
                    [xr.Backwards]: () => {
                        Dl(S, sn.Last, {
                            skipElements: [x.relatedTarget]
                        })
                    }
                })
            })
        }),
        v = Ss(),
        y = m.useRef(!1),
        w = {
            ref: r,
            onKeyDown(x) {
                x.key == "Tab" && (y.current = !0, v.requestAnimationFrame(() => {
                    y.current = !1
                }))
            },
            onBlur(x) {
                let S = Uf(i);
                n.current instanceof HTMLElement && S.add(n.current);
                let h = x.relatedTarget;
                h instanceof HTMLElement && h.dataset.headlessuiFocusGuard !== "true" && (Hf(S, h) || (y.current ? Dl(n.current, $e(d.current, {
                    [xr.Forwards]: () => sn.Next,
                    [xr.Backwards]: () => sn.Previous
                }) | sn.WrapAround, {
                    relativeTo: x.target
                }) : x.target instanceof HTMLElement && hn(x.target)))
            }
        };
    return U.createElement(U.Fragment, null, Boolean(o & 4) && U.createElement(xa, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: fi.Focusable
    }), rt({
        ourProps: w,
        theirProps: a,
        defaultTag: Xv,
        name: "FocusTrap"
    }), Boolean(o & 4) && U.createElement(xa, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: fi.Focusable
    }))
}
let qv = Xe(Jv),
    pr = Object.assign(qv, {
        features: Af
    }),
    Ut = [];
Gv(() => {
    function e(t) {
        t.target instanceof HTMLElement && t.target !== document.body && Ut[0] !== t.target && (Ut.unshift(t.target), Ut = Ut.filter(n => n != null && n.isConnected), Ut.splice(10))
    }
    window.addEventListener("click", e, {
        capture: !0
    }), window.addEventListener("mousedown", e, {
        capture: !0
    }), window.addEventListener("focus", e, {
        capture: !0
    }), document.body.addEventListener("click", e, {
        capture: !0
    }), document.body.addEventListener("mousedown", e, {
        capture: !0
    }), document.body.addEventListener("focus", e, {
        capture: !0
    })
});

function Zv(e = !0) {
    let t = m.useRef(Ut.slice());
    return Cs(([n], [r]) => {
        r === !0 && n === !1 && zi(() => {
            t.current.splice(0)
        }), r === !1 && n === !0 && (t.current = Ut.slice())
    }, [e, Ut, t]), ee(() => {
        var n;
        return (n = t.current.find(r => r != null && r.isConnected)) != null ? n : null
    })
}

function e1({
    ownerDocument: e
}, t) {
    let n = Zv(t);
    Cs(() => {
        t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && hn(n())
    }, [t]), If(() => {
        t && hn(n())
    })
}

function t1({
    ownerDocument: e,
    container: t,
    initialFocus: n
}, r) {
    let l = m.useRef(null),
        i = rl();
    return Cs(() => {
        if (!r) return;
        let o = t.current;
        o && zi(() => {
            if (!i.current) return;
            let a = e == null ? void 0 : e.activeElement;
            if (n != null && n.current) {
                if ((n == null ? void 0 : n.current) === a) {
                    l.current = a;
                    return
                }
            } else if (o.contains(a)) {
                l.current = a;
                return
            }
            n != null && n.current ? hn(n.current) : Dl(o, sn.First) === Of.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.current = e == null ? void 0 : e.activeElement
        })
    }, [r]), l
}

function n1({
    ownerDocument: e,
    container: t,
    containers: n,
    previousActiveElement: r
}, l) {
    let i = rl();
    Df(e == null ? void 0 : e.defaultView, "focus", o => {
        if (!l || !i.current) return;
        let a = Uf(n);
        t.current instanceof HTMLElement && a.add(t.current);
        let s = r.current;
        if (!s) return;
        let c = o.target;
        c && c instanceof HTMLElement ? Hf(a, c) ? (r.current = c, hn(c)) : (o.preventDefault(), o.stopPropagation(), hn(s)) : hn(r.current)
    }, !0)
}

function Hf(e, t) {
    for (let n of e)
        if (n.contains(t)) return !0;
    return !1
}
let Bf = m.createContext(!1);

function r1() {
    return m.useContext(Bf)
}

function ka(e) {
    return U.createElement(Bf.Provider, {
        value: e.force
    }, e.children)
}

function l1(e) {
    let t = r1(),
        n = m.useContext(Wf),
        r = ll(e),
        [l, i] = m.useState(() => {
            if (!t && n !== null || Pt.isServer) return null;
            let o = r == null ? void 0 : r.getElementById("headlessui-portal-root");
            if (o) return o;
            if (r === null) return null;
            let a = r.createElement("div");
            return a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a)
        });
    return m.useEffect(() => {
        l !== null && (r != null && r.body.contains(l) || r == null || r.body.appendChild(l))
    }, [l, r]), m.useEffect(() => {
        t || n !== null && i(n.current)
    }, [n, i, t]), l
}
let i1 = m.Fragment;

function o1(e, t) {
    let n = e,
        r = m.useRef(null),
        l = ft(Av(d => {
            r.current = d
        }), t),
        i = ll(r),
        o = l1(r),
        [a] = m.useState(() => {
            var d;
            return Pt.isServer ? null : (d = i == null ? void 0 : i.createElement("div")) != null ? d : null
        }),
        s = m.useContext(Sa),
        c = rr();
    return dt(() => {
        !o || !a || o.contains(a) || (a.setAttribute("data-headlessui-portal", ""), o.appendChild(a))
    }, [o, a]), dt(() => {
        if (a && s) return s.register(a)
    }, [s, a]), If(() => {
        var d;
        !o || !a || (a instanceof Node && o.contains(a) && o.removeChild(a), o.childNodes.length <= 0 && ((d = o.parentElement) == null || d.removeChild(o)))
    }), c ? !o || !a ? null : Ul.createPortal(rt({
        ourProps: {
            ref: l
        },
        theirProps: n,
        defaultTag: i1,
        name: "Portal"
    }), a) : null
}
let a1 = m.Fragment,
    Wf = m.createContext(null);

function s1(e, t) {
    let {
        target: n,
        ...r
    } = e, l = {
        ref: ft(t)
    };
    return U.createElement(Wf.Provider, {
        value: n
    }, rt({
        ourProps: l,
        theirProps: r,
        defaultTag: a1,
        name: "Popover.Group"
    }))
}
let Sa = m.createContext(null);

function u1() {
    let e = m.useContext(Sa),
        t = m.useRef([]),
        n = ee(i => (t.current.push(i), e && e.register(i), () => r(i))),
        r = ee(i => {
            let o = t.current.indexOf(i);
            o !== -1 && t.current.splice(o, 1), e && e.unregister(i)
        }),
        l = m.useMemo(() => ({
            register: n,
            unregister: r,
            portals: t
        }), [n, r, t]);
    return [t, m.useMemo(() => function({
        children: i
    }) {
        return U.createElement(Sa.Provider, {
            value: l
        }, i)
    }, [l])]
}
let c1 = Xe(o1),
    d1 = Xe(s1),
    Ea = Object.assign(c1, {
        Group: d1
    }),
    bf = m.createContext(null);

function Vf() {
    let e = m.useContext(bf);
    if (e === null) {
        let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(t, Vf), t
    }
    return e
}

function f1() {
    let [e, t] = m.useState([]);
    return [e.length > 0 ? e.join(" ") : void 0, m.useMemo(() => function(n) {
        let r = ee(i => (t(o => [...o, i]), () => t(o => {
                let a = o.slice(),
                    s = a.indexOf(i);
                return s !== -1 && a.splice(s, 1), a
            }))),
            l = m.useMemo(() => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props
            }), [r, n.slot, n.name, n.props]);
        return U.createElement(bf.Provider, {
            value: l
        }, n.children)
    }, [t])]
}
let p1 = "p";

function m1(e, t) {
    let n = lr(),
        {
            id: r = `headlessui-description-${n}`,
            ...l
        } = e,
        i = Vf(),
        o = ft(t);
    dt(() => i.register(r), [r, i.register]);
    let a = {
        ref: o,
        ...i.props,
        id: r
    };
    return rt({
        ourProps: a,
        theirProps: l,
        slot: i.slot || {},
        defaultTag: p1,
        name: i.name || "Description"
    })
}
let h1 = Xe(m1),
    v1 = Object.assign(h1, {}),
    Ps = m.createContext(() => {});
Ps.displayName = "StackContext";
var Na = (e => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Na || {});

function g1() {
    return m.useContext(Ps)
}

function y1({
    children: e,
    onUpdate: t,
    type: n,
    element: r,
    enabled: l
}) {
    let i = g1(),
        o = ee((...a) => {
            t == null || t(...a), i(...a)
        });
    return dt(() => {
        let a = l === void 0 || l === !0;
        return a && o(0, n, r), () => {
            a && o(1, n, r)
        }
    }, [o, n, r, l]), U.createElement(Ps.Provider, {
        value: o
    }, e)
}

function w1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
const x1 = typeof Object.is == "function" ? Object.is : w1,
    {
        useState: k1,
        useEffect: S1,
        useLayoutEffect: E1,
        useDebugValue: N1
    } = Bn;

function C1(e, t, n) {
    const r = t(),
        [{
            inst: l
        }, i] = k1({
            inst: {
                value: r,
                getSnapshot: t
            }
        });
    return E1(() => {
        l.value = r, l.getSnapshot = t, mo(l) && i({
            inst: l
        })
    }, [e, r, t]), S1(() => (mo(l) && i({
        inst: l
    }), e(() => {
        mo(l) && i({
            inst: l
        })
    })), [e]), N1(r), r
}

function mo(e) {
    const t = e.getSnapshot,
        n = e.value;
    try {
        const r = t();
        return !x1(n, r)
    } catch {
        return !0
    }
}

function P1(e, t, n) {
    return t()
}
const _1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    $1 = !_1,
    T1 = $1 ? P1 : C1,
    L1 = "useSyncExternalStore" in Bn ? (e => e.useSyncExternalStore)(Bn) : T1;

function O1(e) {
    return L1(e.subscribe, e.getSnapshot, e.getSnapshot)
}

function M1(e, t) {
    let n = e(),
        r = new Set;
    return {
        getSnapshot() {
            return n
        },
        subscribe(l) {
            return r.add(l), () => r.delete(l)
        },
        dispatch(l, ...i) {
            let o = t[l].call(n, ...i);
            o && (n = o, r.forEach(a => a()))
        }
    }
}

function z1() {
    let e;
    return {
        before({
            doc: t
        }) {
            var n;
            let r = t.documentElement;
            e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth
        },
        after({
            doc: t,
            d: n
        }) {
            let r = t.documentElement,
                l = r.clientWidth - r.offsetWidth,
                i = e - l;
            n.style(r, "paddingRight", `${i}px`)
        }
    }
}

function R1() {
    if (!Kv()) return {};
    let e;
    return {
        before() {
            e = window.pageYOffset
        },
        after({
            doc: t,
            d: n,
            meta: r
        }) {
            function l(o) {
                return r.containers.flatMap(a => a()).some(a => a.contains(o))
            }
            n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
            let i = null;
            n.addEventListener(t, "click", o => {
                if (o.target instanceof HTMLElement) try {
                    let a = o.target.closest("a");
                    if (!a) return;
                    let {
                        hash: s
                    } = new URL(a.href), c = t.querySelector(s);
                    c && !l(c) && (i = c)
                } catch {}
            }, !0), n.addEventListener(t, "touchmove", o => {
                o.target instanceof HTMLElement && !l(o.target) && o.preventDefault()
            }, {
                passive: !1
            }), n.add(() => {
                window.scrollTo(0, window.pageYOffset + e), i && i.isConnected && (i.scrollIntoView({
                    block: "nearest"
                }), i = null)
            })
        }
    }
}

function j1() {
    return {
        before({
            doc: e,
            d: t
        }) {
            t.style(e.documentElement, "overflow", "hidden")
        }
    }
}

function F1(e) {
    let t = {};
    for (let n of e) Object.assign(t, n(t));
    return t
}
let fn = M1(() => new Map, {
    PUSH(e, t) {
        var n;
        let r = (n = this.get(e)) != null ? n : {
            doc: e,
            count: 0,
            d: nr(),
            meta: new Set
        };
        return r.count++, r.meta.add(t), this.set(e, r), this
    },
    POP(e, t) {
        let n = this.get(e);
        return n && (n.count--, n.meta.delete(t)), this
    },
    SCROLL_PREVENT({
        doc: e,
        d: t,
        meta: n
    }) {
        let r = {
                doc: e,
                d: t,
                meta: F1(n)
            },
            l = [R1(), z1(), j1()];
        l.forEach(({
            before: i
        }) => i == null ? void 0 : i(r)), l.forEach(({
            after: i
        }) => i == null ? void 0 : i(r))
    },
    SCROLL_ALLOW({
        d: e
    }) {
        e.dispose()
    },
    TEARDOWN({
        doc: e
    }) {
        this.delete(e)
    }
});
fn.subscribe(() => {
    let e = fn.getSnapshot(),
        t = new Map;
    for (let [n] of e) t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
        let r = t.get(n.doc) === "hidden",
            l = n.count !== 0;
        (l && !r || !l && r) && fn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && fn.dispatch("TEARDOWN", n)
    }
});

function D1(e, t, n) {
    let r = O1(fn),
        l = e ? r.get(e) : void 0,
        i = l ? l.count > 0 : !1;
    return dt(() => {
        if (!(!e || !t)) return fn.dispatch("PUSH", e, n), () => fn.dispatch("POP", e, n)
    }, [t, e]), i
}
let ho = new Map,
    mr = new Map;

function ec(e, t = !0) {
    dt(() => {
        var n;
        if (!t) return;
        let r = typeof e == "function" ? e() : e.current;
        if (!r) return;

        function l() {
            var o;
            if (!r) return;
            let a = (o = mr.get(r)) != null ? o : 1;
            if (a === 1 ? mr.delete(r) : mr.set(r, a - 1), a !== 1) return;
            let s = ho.get(r);
            s && (s["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", s["aria-hidden"]), r.inert = s.inert, ho.delete(r))
        }
        let i = (n = mr.get(r)) != null ? n : 0;
        return mr.set(r, i + 1), i !== 0 || (ho.set(r, {
            "aria-hidden": r.getAttribute("aria-hidden"),
            inert: r.inert
        }), r.setAttribute("aria-hidden", "true"), r.inert = !0), l
    }, [e, t])
}

function I1({
    defaultContainers: e = [],
    portals: t
} = {}) {
    let n = m.useRef(null),
        r = ll(n),
        l = ee(() => {
            var i;
            let o = [];
            for (let a of e) a !== null && (a instanceof HTMLElement ? o.push(a) : "current" in a && a.current instanceof HTMLElement && o.push(a.current));
            if (t != null && t.current)
                for (let a of t.current) o.push(a);
            for (let a of (i = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? i : []) a !== document.body && a !== document.head && a instanceof HTMLElement && a.id !== "headlessui-portal-root" && (a.contains(n.current) || o.some(s => a.contains(s)) || o.push(a));
            return o
        });
    return {
        resolveContainers: l,
        contains: ee(i => l().some(o => o.contains(i))),
        mainTreeNodeRef: n,
        MainTreeNode: m.useMemo(() => function() {
            return U.createElement(xa, {
                features: fi.Hidden,
                ref: n
            })
        }, [n])
    }
}
var U1 = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(U1 || {}),
    A1 = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(A1 || {});
let H1 = {
        [0](e, t) {
            return e.titleId === t.id ? e : { ...e,
                titleId: t.id
            }
        }
    },
    pi = m.createContext(null);
pi.displayName = "DialogContext";

function il(e) {
    let t = m.useContext(pi);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, il), n
    }
    return t
}

function B1(e, t, n = () => [document.body]) {
    D1(e, t, r => {
        var l;
        return {
            containers: [...(l = r.containers) != null ? l : [], n]
        }
    })
}

function W1(e, t) {
    return $e(t.type, H1, e, t)
}
let b1 = "div",
    V1 = di.RenderStrategy | di.Static;

function Q1(e, t) {
    var n;
    let r = lr(),
        {
            id: l = `headlessui-dialog-${r}`,
            open: i,
            onClose: o,
            initialFocus: a,
            __demoMode: s = !1,
            ...c
        } = e,
        [d, p] = m.useState(0),
        v = Ns();
    i === void 0 && v !== null && (i = (v & We.Open) === We.Open);
    let y = m.useRef(null),
        w = ft(y, t),
        x = ll(y),
        S = e.hasOwnProperty("open") || v !== null,
        h = e.hasOwnProperty("onClose");
    if (!S && !h) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
    if (!S) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
    if (!h) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
    if (typeof i != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`);
    if (typeof o != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);
    let f = i ? 0 : 1,
        [g, k] = m.useReducer(W1, {
            titleId: null,
            descriptionId: null,
            panelRef: m.createRef()
        }),
        P = ee(() => o(!1)),
        $ = ee(b => k({
            type: 0,
            id: b
        })),
        L = rr() ? s ? !1 : f === 0 : !1,
        N = d > 1,
        A = m.useContext(pi) !== null,
        [j, M] = u1(),
        {
            resolveContainers: T,
            mainTreeNodeRef: I,
            MainTreeNode: F
        } = I1({
            portals: j,
            defaultContainers: [(n = g.panelRef.current) != null ? n : y.current]
        }),
        K = N ? "parent" : "leaf",
        ce = v !== null ? (v & We.Closing) === We.Closing : !1,
        Ee = (() => A || ce ? !1 : L)(),
        _ = m.useCallback(() => {
            var b, ve;
            return (ve = Array.from((b = x == null ? void 0 : x.querySelectorAll("body > *")) != null ? b : []).find(se => se.id === "headlessui-portal-root" ? !1 : se.contains(I.current) && se instanceof HTMLElement)) != null ? ve : null
        }, [I]);
    ec(_, Ee);
    let R = (() => N ? !0 : L)(),
        D = m.useCallback(() => {
            var b, ve;
            return (ve = Array.from((b = x == null ? void 0 : x.querySelectorAll("[data-headlessui-portal]")) != null ? b : []).find(se => se.contains(I.current) && se instanceof HTMLElement)) != null ? ve : null
        }, [I]);
    ec(D, R);
    let H = (() => !(!L || N))();
    Uv(T, P, H);
    let Y = (() => !(N || f !== 0))();
    Df(x == null ? void 0 : x.defaultView, "keydown", b => {
        Y && (b.defaultPrevented || b.key === Ff.Escape && (b.preventDefault(), b.stopPropagation(), P()))
    });
    let we = (() => !(ce || f !== 0 || A))();
    B1(x, we, T), m.useEffect(() => {
        if (f !== 0 || !y.current) return;
        let b = new ResizeObserver(ve => {
            for (let se of ve) {
                let je = se.target.getBoundingClientRect();
                je.x === 0 && je.y === 0 && je.width === 0 && je.height === 0 && P()
            }
        });
        return b.observe(y.current), () => b.disconnect()
    }, [f, y, P]);
    let [ie, Ne] = f1(), de = m.useMemo(() => [{
        dialogState: f,
        close: P,
        setTitleId: $
    }, g], [f, g, P, $]), X = m.useMemo(() => ({
        open: f === 0
    }), [f]), ae = {
        ref: w,
        id: l,
        role: "dialog",
        "aria-modal": f === 0 ? !0 : void 0,
        "aria-labelledby": g.titleId,
        "aria-describedby": ie
    };
    return U.createElement(y1, {
        type: "Dialog",
        enabled: f === 0,
        element: y,
        onUpdate: ee((b, ve) => {
            ve === "Dialog" && $e(b, {
                [Na.Add]: () => p(se => se + 1),
                [Na.Remove]: () => p(se => se - 1)
            })
        })
    }, U.createElement(ka, {
        force: !0
    }, U.createElement(Ea, null, U.createElement(pi.Provider, {
        value: de
    }, U.createElement(Ea.Group, {
        target: y
    }, U.createElement(ka, {
        force: !1
    }, U.createElement(Ne, {
        slot: X,
        name: "Dialog.Description"
    }, U.createElement(pr, {
        initialFocus: a,
        containers: T,
        features: L ? $e(K, {
            parent: pr.features.RestoreFocus,
            leaf: pr.features.All & ~pr.features.FocusLock
        }) : pr.features.None
    }, U.createElement(M, null, rt({
        ourProps: ae,
        theirProps: c,
        slot: X,
        defaultTag: b1,
        features: V1,
        visible: f === 0,
        name: "Dialog"
    }))))))))), U.createElement(F, null))
}
let K1 = "div";

function Y1(e, t) {
    let n = lr(),
        {
            id: r = `headlessui-dialog-overlay-${n}`,
            ...l
        } = e,
        [{
            dialogState: i,
            close: o
        }] = il("Dialog.Overlay"),
        a = ft(t),
        s = ee(d => {
            if (d.target === d.currentTarget) {
                if (Bv(d.currentTarget)) return d.preventDefault();
                d.preventDefault(), d.stopPropagation(), o()
            }
        }),
        c = m.useMemo(() => ({
            open: i === 0
        }), [i]);
    return rt({
        ourProps: {
            ref: a,
            id: r,
            "aria-hidden": !0,
            onClick: s
        },
        theirProps: l,
        slot: c,
        defaultTag: K1,
        name: "Dialog.Overlay"
    })
}
let G1 = "div";

function X1(e, t) {
    let n = lr(),
        {
            id: r = `headlessui-dialog-backdrop-${n}`,
            ...l
        } = e,
        [{
            dialogState: i
        }, o] = il("Dialog.Backdrop"),
        a = ft(t);
    m.useEffect(() => {
        if (o.panelRef.current === null) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
    }, [o.panelRef]);
    let s = m.useMemo(() => ({
        open: i === 0
    }), [i]);
    return U.createElement(ka, {
        force: !0
    }, U.createElement(Ea, null, rt({
        ourProps: {
            ref: a,
            id: r,
            "aria-hidden": !0
        },
        theirProps: l,
        slot: s,
        defaultTag: G1,
        name: "Dialog.Backdrop"
    })))
}
let J1 = "div";

function q1(e, t) {
    let n = lr(),
        {
            id: r = `headlessui-dialog-panel-${n}`,
            ...l
        } = e,
        [{
            dialogState: i
        }, o] = il("Dialog.Panel"),
        a = ft(t, o.panelRef),
        s = m.useMemo(() => ({
            open: i === 0
        }), [i]),
        c = ee(d => {
            d.stopPropagation()
        });
    return rt({
        ourProps: {
            ref: a,
            id: r,
            onClick: c
        },
        theirProps: l,
        slot: s,
        defaultTag: J1,
        name: "Dialog.Panel"
    })
}
let Z1 = "h2";

function eg(e, t) {
    let n = lr(),
        {
            id: r = `headlessui-dialog-title-${n}`,
            ...l
        } = e,
        [{
            dialogState: i,
            setTitleId: o
        }] = il("Dialog.Title"),
        a = ft(t);
    m.useEffect(() => (o(r), () => o(null)), [r, o]);
    let s = m.useMemo(() => ({
        open: i === 0
    }), [i]);
    return rt({
        ourProps: {
            ref: a,
            id: r
        },
        theirProps: l,
        slot: s,
        defaultTag: Z1,
        name: "Dialog.Title"
    })
}
let tg = Xe(Q1),
    ng = Xe(X1),
    rg = Xe(q1),
    lg = Xe(Y1),
    ig = Xe(eg),
    vo = Object.assign(tg, {
        Backdrop: ng,
        Panel: rg,
        Overlay: lg,
        Title: ig,
        Description: v1
    });

function og(e = 0) {
    let [t, n] = m.useState(e), r = rl(), l = m.useCallback(s => {
        r.current && n(c => c | s)
    }, [t, r]), i = m.useCallback(s => Boolean(t & s), [t]), o = m.useCallback(s => {
        r.current && n(c => c & ~s)
    }, [n, r]), a = m.useCallback(s => {
        r.current && n(c => c ^ s)
    }, [n]);
    return {
        flags: t,
        addFlag: l,
        hasFlag: i,
        removeFlag: o,
        toggleFlag: a
    }
}

function ag(e) {
    let t = {
        called: !1
    };
    return (...n) => {
        if (!t.called) return t.called = !0, e(...n)
    }
}

function go(e, ...t) {
    e && t.length > 0 && e.classList.add(...t)
}

function yo(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t)
}

function sg(e, t) {
    let n = nr();
    if (!e) return n.dispose;
    let {
        transitionDuration: r,
        transitionDelay: l
    } = getComputedStyle(e), [i, o] = [r, l].map(s => {
        let [c = 0] = s.split(",").filter(Boolean).map(d => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, p) => p - d);
        return c
    }), a = i + o;
    if (a !== 0) {
        n.group(c => {
            c.setTimeout(() => {
                t(), c.dispose()
            }, a), c.addEventListener(e, "transitionrun", d => {
                d.target === d.currentTarget && c.dispose()
            })
        });
        let s = n.addEventListener(e, "transitionend", c => {
            c.target === c.currentTarget && (t(), s())
        })
    } else t();
    return n.add(() => t()), n.dispose
}

function ug(e, t, n, r) {
    let l = n ? "enter" : "leave",
        i = nr(),
        o = r !== void 0 ? ag(r) : () => {};
    l === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
    let a = $e(l, {
            enter: () => t.enter,
            leave: () => t.leave
        }),
        s = $e(l, {
            enter: () => t.enterTo,
            leave: () => t.leaveTo
        }),
        c = $e(l, {
            enter: () => t.enterFrom,
            leave: () => t.leaveFrom
        });
    return yo(e, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), go(e, ...a, ...c), i.nextFrame(() => {
        yo(e, ...c), go(e, ...s), sg(e, () => (yo(e, ...a), go(e, ...t.entered), o()))
    }), i.dispose
}

function cg({
    container: e,
    direction: t,
    classes: n,
    onStart: r,
    onStop: l
}) {
    let i = rl(),
        o = Ss(),
        a = _t(t);
    dt(() => {
        let s = nr();
        o.add(s.dispose);
        let c = e.current;
        if (c && a.current !== "idle" && i.current) return s.dispose(), r.current(a.current), s.add(ug(c, n.current, a.current === "enter", () => {
            s.dispose(), l.current(a.current)
        })), s.dispose
    }, [t])
}

function ln(e = "") {
    return e.split(" ").filter(t => t.trim().length > 1)
}
let Ri = m.createContext(null);
Ri.displayName = "TransitionContext";
var dg = (e => (e.Visible = "visible", e.Hidden = "hidden", e))(dg || {});

function fg() {
    let e = m.useContext(Ri);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}

function pg() {
    let e = m.useContext(ji);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}
let ji = m.createContext(null);
ji.displayName = "NestingContext";

function Fi(e) {
    return "children" in e ? Fi(e.children) : e.current.filter(({
        el: t
    }) => t.current !== null).filter(({
        state: t
    }) => t === "visible").length > 0
}

function Qf(e, t) {
    let n = _t(e),
        r = m.useRef([]),
        l = rl(),
        i = Ss(),
        o = ee((y, w = Nt.Hidden) => {
            let x = r.current.findIndex(({
                el: S
            }) => S === y);
            x !== -1 && ($e(w, {
                [Nt.Unmount]() {
                    r.current.splice(x, 1)
                },
                [Nt.Hidden]() {
                    r.current[x].state = "hidden"
                }
            }), i.microTask(() => {
                var S;
                !Fi(r) && l.current && ((S = n.current) == null || S.call(n))
            }))
        }),
        a = ee(y => {
            let w = r.current.find(({
                el: x
            }) => x === y);
            return w ? w.state !== "visible" && (w.state = "visible") : r.current.push({
                el: y,
                state: "visible"
            }), () => o(y, Nt.Unmount)
        }),
        s = m.useRef([]),
        c = m.useRef(Promise.resolve()),
        d = m.useRef({
            enter: [],
            leave: [],
            idle: []
        }),
        p = ee((y, w, x) => {
            s.current.splice(0), t && (t.chains.current[w] = t.chains.current[w].filter(([S]) => S !== y)), t == null || t.chains.current[w].push([y, new Promise(S => {
                s.current.push(S)
            })]), t == null || t.chains.current[w].push([y, new Promise(S => {
                Promise.all(d.current[w].map(([h, f]) => f)).then(() => S())
            })]), w === "enter" ? c.current = c.current.then(() => t == null ? void 0 : t.wait.current).then(() => x(w)) : x(w)
        }),
        v = ee((y, w, x) => {
            Promise.all(d.current[w].splice(0).map(([S, h]) => h)).then(() => {
                var S;
                (S = s.current.shift()) == null || S()
            }).then(() => x(w))
        });
    return m.useMemo(() => ({
        children: r,
        register: a,
        unregister: o,
        onStart: p,
        onStop: v,
        wait: c,
        chains: d
    }), [a, o, r, p, v, d, c])
}

function mg() {}
let hg = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

function tc(e) {
    var t;
    let n = {};
    for (let r of hg) n[r] = (t = e[r]) != null ? t : mg;
    return n
}

function vg(e) {
    let t = m.useRef(tc(e));
    return m.useEffect(() => {
        t.current = tc(e)
    }, [e]), t
}
let gg = "div",
    Kf = di.RenderStrategy;

function yg(e, t) {
    let {
        beforeEnter: n,
        afterEnter: r,
        beforeLeave: l,
        afterLeave: i,
        enter: o,
        enterFrom: a,
        enterTo: s,
        entered: c,
        leave: d,
        leaveFrom: p,
        leaveTo: v,
        ...y
    } = e, w = m.useRef(null), x = ft(w, t), S = y.unmount ? Nt.Unmount : Nt.Hidden, {
        show: h,
        appear: f,
        initial: g
    } = fg(), [k, P] = m.useState(h ? "visible" : "hidden"), $ = pg(), {
        register: L,
        unregister: N
    } = $, A = m.useRef(null);
    m.useEffect(() => L(w), [L, w]), m.useEffect(() => {
        if (S === Nt.Hidden && w.current) {
            if (h && k !== "visible") {
                P("visible");
                return
            }
            return $e(k, {
                hidden: () => N(w),
                visible: () => L(w)
            })
        }
    }, [k, w, L, N, h, S]);
    let j = _t({
            enter: ln(o),
            enterFrom: ln(a),
            enterTo: ln(s),
            entered: ln(c),
            leave: ln(d),
            leaveFrom: ln(p),
            leaveTo: ln(v)
        }),
        M = vg({
            beforeEnter: n,
            afterEnter: r,
            beforeLeave: l,
            afterLeave: i
        }),
        T = rr();
    m.useEffect(() => {
        if (T && k === "visible" && w.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
    }, [w, k, T]);
    let I = g && !f,
        F = (() => !T || I || A.current === h ? "idle" : h ? "enter" : "leave")(),
        K = og(0),
        ce = ee(H => $e(H, {
            enter: () => {
                K.addFlag(We.Opening), M.current.beforeEnter()
            },
            leave: () => {
                K.addFlag(We.Closing), M.current.beforeLeave()
            },
            idle: () => {}
        })),
        Ee = ee(H => $e(H, {
            enter: () => {
                K.removeFlag(We.Opening), M.current.afterEnter()
            },
            leave: () => {
                K.removeFlag(We.Closing), M.current.afterLeave()
            },
            idle: () => {}
        })),
        _ = Qf(() => {
            P("hidden"), N(w)
        }, $);
    cg({
        container: w,
        classes: j,
        direction: F,
        onStart: _t(H => {
            _.onStart(w, H, ce)
        }),
        onStop: _t(H => {
            _.onStop(w, H, Ee), H === "leave" && !Fi(_) && (P("hidden"), N(w))
        })
    }), m.useEffect(() => {
        I && (S === Nt.Hidden ? A.current = null : A.current = h)
    }, [h, I, k]);
    let R = y,
        D = {
            ref: x
        };
    return f && h && g && (R = { ...R,
        className: wa(y.className, ...j.current.enter, ...j.current.enterFrom)
    }), U.createElement(ji.Provider, {
        value: _
    }, U.createElement(Qv, {
        value: $e(k, {
            visible: We.Open,
            hidden: We.Closed
        }) | K.flags
    }, rt({
        ourProps: D,
        theirProps: R,
        defaultTag: gg,
        features: Kf,
        visible: k === "visible",
        name: "Transition.Child"
    })))
}

function wg(e, t) {
    let {
        show: n,
        appear: r = !1,
        unmount: l,
        ...i
    } = e, o = m.useRef(null), a = ft(o, t);
    rr();
    let s = Ns();
    if (n === void 0 && s !== null && (n = (s & We.Open) === We.Open), ![!0, !1].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
    let [c, d] = m.useState(n ? "visible" : "hidden"), p = Qf(() => {
        d("hidden")
    }), [v, y] = m.useState(!0), w = m.useRef([n]);
    dt(() => {
        v !== !1 && w.current[w.current.length - 1] !== n && (w.current.push(n), y(!1))
    }, [w, n]);
    let x = m.useMemo(() => ({
        show: n,
        appear: r,
        initial: v
    }), [n, r, v]);
    m.useEffect(() => {
        if (n) d("visible");
        else if (!Fi(p)) d("hidden");
        else {
            let g = o.current;
            if (!g) return;
            let k = g.getBoundingClientRect();
            k.x === 0 && k.y === 0 && k.width === 0 && k.height === 0 && d("hidden")
        }
    }, [n, p]);
    let S = {
            unmount: l
        },
        h = ee(() => {
            var g;
            v && y(!1), (g = e.beforeEnter) == null || g.call(e)
        }),
        f = ee(() => {
            var g;
            v && y(!1), (g = e.beforeLeave) == null || g.call(e)
        });
    return U.createElement(ji.Provider, {
        value: p
    }, U.createElement(Ri.Provider, {
        value: x
    }, rt({
        ourProps: { ...S,
            as: m.Fragment,
            children: U.createElement(Yf, {
                ref: a,
                ...S,
                ...i,
                beforeEnter: h,
                beforeLeave: f
            })
        },
        theirProps: {},
        defaultTag: m.Fragment,
        features: Kf,
        visible: c === "visible",
        name: "Transition"
    })))
}

function xg(e, t) {
    let n = m.useContext(Ri) !== null,
        r = Ns() !== null;
    return U.createElement(U.Fragment, null, !n && r ? U.createElement(Ca, {
        ref: t,
        ...e
    }) : U.createElement(Yf, {
        ref: t,
        ...e
    }))
}
let Ca = Xe(wg),
    Yf = Xe(yg),
    kg = Xe(xg),
    Il = Object.assign(Ca, {
        Child: kg,
        Root: Ca
    });

function Sg({
    title: e,
    titleId: t,
    ...n
}, r) {
    return m.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: r,
        "aria-labelledby": t
    }, n), e ? m.createElement("title", {
        id: t
    }, e) : null, m.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }))
}
const Eg = m.forwardRef(Sg),
    Ng = Eg;

function Cg({
    title: e,
    titleId: t,
    ...n
}, r) {
    return m.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: r,
        "aria-labelledby": t
    }, n), e ? m.createElement("title", {
        id: t
    }, e) : null, m.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }))
}
const Pg = m.forwardRef(Cg),
    _g = Pg;

function $g({
    title: e,
    titleId: t,
    ...n
}, r) {
    return m.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: r,
        "aria-labelledby": t
    }, n), e ? m.createElement("title", {
        id: t
    }, e) : null, m.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18L18 6M6 6l12 12"
    }))
}
const Tg = m.forwardRef($g),
    Lg = Tg;
const Og = () => u("div", {
    className: "animated-bg w-full h-full",
    children: C("div", {
        className: "stars",
        children: [u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        }), u("div", {
            className: "star"
        })]
    })
});
const Mg = () => u("div", {
        className: "absolute -bottom-10 left-0 w-full flex justify-center scale-75 transform translate-y-0 transition-all duration-[3000ms] hover:translate-y-[-95px] hover:translate-x-[50px] hover:rotate-45",
        children: C("div", {
            className: "con",
            children: [u("div", {
                className: "headS"
            }), u("div", {
                className: "bodyS"
            }), u("div", {
                className: "windowS",
                children: u("img", {
                    className: "imgS img-girl",
                    src: "http://content.mycutegraphics.com/graphics/space/little-girl-astronaut.png"
                })
            }), u("div", {
                className: "wing wing-l"
            }), u("div", {
                className: "wing wing-r"
            }), u("div", {
                className: "bottomS"
            }), u("div", {
                className: "fireS"
            })]
        })
    }),
    zg = ({
        setNotification: e,
        open: t,
        setOpen: n,
        setShow: r
    }) => {
        const l = m.useRef(),
            [i, o] = m.useState(!1),
            [a, s] = m.useState(!1),
            [c, d] = m.useState(!1),
            [p, v] = m.useState(!1),
            y = x => {
                v(!0), x.preventDefault(), o(!0), $f.sendForm("service_hfa58hp", "template_7rxxijc", l.current, "ryEYZeG1Z3PPkC221").then(S => {
                    s(!0), d(!0), o(!1)
                }, S => {
                    s(!0), d(!1), o(!1), v(!1)
                })
            },
            w = () => {
                if (i) return u(Tf, {});
                if (!i && !a) return u("button", {
                    className: "flex justify-center w-full py-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] mt-5 mx-auto",
                    type: "submit",
                    children: i ? u("div", {
                        className: "loader"
                    }) : "Download"
                });
                if (!i && a && c) return ""
            };
        return m.useEffect(() => {
            i || a && (c ? (o(!1), s(!1), d(!1), e({
                success: !0,
                message: "Thank you for downloading the portfolio."
            }), window.location.href = "https://drive.google.com/uc?export=download&id=1JxMXt3JIon9rtUZrvnj7f_UnNlvViir0", n(!1), v(!1), r(!0)) : (o(!1), s(!1), d(!1), e({
                success: !1,
                message: C("span", {
                    children: ["Please contact us at ", u("b", {
                        children: "hello@rapidhype.pk"
                    })]
                })
            }), n(!1), v(!1), r(!0)))
        }, [i, a, c, n, e, r]), u(Il.Root, {
            show: t,
            children: C(vo, {
                as: "div",
                className: "relative z-40",
                onClose: n,
                children: [u(Il.Child, {
                    as: m.Fragment,
                    enter: "ease-in-out duration-500",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in-out duration-500",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: u("div", {
                        className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    })
                }), u("div", {
                    className: "fixed inset-0 overflow-hidden",
                    children: u("div", {
                        className: "absolute inset-0 overflow-hidden",
                        children: u("div", {
                            className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                            children: u(Il.Child, {
                                as: m.Fragment,
                                enter: "transform transition ease-in-out duration-500 sm:duration-700",
                                enterFrom: "translate-x-full",
                                enterTo: "translate-x-0",
                                leave: "transform transition ease-in-out duration-500 sm:duration-700",
                                leaveFrom: "translate-x-0",
                                leaveTo: "translate-x-full",
                                children: u(vo.Panel, {
                                    className: "pointer-events-auto w-screen max-w-md",
                                    children: C("div", {
                                        className: "flex h-full flex-col overflow-hidden bg-primary pb-6 shadow-xl",
                                        children: [u("div", {
                                            className: "px-4 sm:px-6 z-20",
                                            children: C("div", {
                                                className: "flex items-start items-center justify-between",
                                                children: [u(vo.Title, {
                                                    className: `${O.heading2} text-gradient drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]`,
                                                    children: "Portfolio"
                                                }), u("div", {
                                                    className: "ml-3 flex h-7 items-center",
                                                    children: C("button", {
                                                        type: "button",
                                                        className: "rounded-md bg-secondary text-primary hover:text-white focus:outline-none ",
                                                        onClick: () => n(!1),
                                                        children: [u("span", {
                                                            className: "sr-only",
                                                            children: "Close panel"
                                                        }), u(Lg, {
                                                            className: "h-6 w-6",
                                                            "aria-hidden": "true"
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), u("hr", {
                                            className: "border-secondary z-20"
                                        }), C("div", {
                                            className: "relative mt-6 flex-1 px-4 sm:px-6 z-20",
                                            children: [u("div", {
                                                className: "absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"
                                            }), u("div", {
                                                className: "absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient"
                                            }), C("form", {
                                                ref: l,
                                                onSubmit: y,
                                                className: "text-white flex flex-col w-full ",
                                                children: [u("label", {
                                                    className: `${O.paragraph} mt-3 text-white font-bold `,
                                                    children: "Email"
                                                }), u("input", {
                                                    className: "mt-1 rounded-lg bg-primary border-secondary focus:border-secondary focus:ring-secondary",
                                                    type: "email",
                                                    name: "user_email",
                                                    placeholder: "JohnDoe@gmail.com",
                                                    required: !0
                                                }), u("label", {
                                                    className: `${O.paragraph} mt-3 text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]`,
                                                    children: "Message"
                                                }), u("textarea", {
                                                    className: "mt-1 rounded-lg bg-primary border-secondary focus:border-secondary focus:ring-secondary",
                                                    name: "message",
                                                    placeholder: "Optional Message.",
                                                    required: !0
                                                }), w()]
                                            })]
                                        }), u(Og, {}), u("div", {
                                            className: `absolute bottom-0 left-0 w-full ${p?"transform transition-all duration-[3s] translate-y-[-100vh] hover:rotate-45":""}`,
                                            children: u(Mg, {})
                                        })]
                                    })
                                })
                            })
                        })
                    })
                })]
            })
        })
    };

function Rg({
    title: e,
    titleId: t,
    ...n
}, r) {
    return m.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        ref: r,
        "aria-labelledby": t
    }, n), e ? m.createElement("title", {
        id: t
    }, e) : null, m.createElement("path", {
        d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
    }))
}
const jg = m.forwardRef(Rg),
    Fg = jg,
    Dg = ({
        notification: e,
        show: t,
        setShow: n
    }) => {
        m.useEffect(() => {
            let l;
            return t && (l = setTimeout(() => {
                n(!1)
            }, 1e4)), () => {
                clearTimeout(l)
            }
        }, [t, n]);
        const r = () => {
            n(!1)
        };
        return u(La, {
            children: u("div", {
                "aria-live": "assertive",
                className: "pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50",
                children: u("div", {
                    className: "flex w-full flex-col items-center space-y-4 sm:items-end",
                    children: u(Il, {
                        show: t,
                        as: m.Fragment,
                        enter: "transform ease-out duration-300 transition",
                        enterFrom: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
                        enterTo: "translate-y-0 opacity-100 sm:translate-x-0",
                        leave: "transition ease-in duration-100",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: u("div", {
                            className: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-primary shadow-lg ring-1 ring-black ring-opacity-5",
                            children: u("div", {
                                className: "p-4",
                                children: C("div", {
                                    className: "flex items-start",
                                    children: [u("div", {
                                        className: "flex-shrink-0",
                                        children: e != null && e.success ? u(Ng, {
                                            className: "h-6 w-6 text-green-400",
                                            "aria-hidden": "true"
                                        }) : u(_g, {
                                            className: "h-6 w-6 text-red-400",
                                            "aria-hidden": "true"
                                        })
                                    }), C("div", {
                                        className: "ml-3 w-0 flex-1 mt-[-4px]",
                                        children: [u("p", {
                                            className: "text-sm font-medium text-gradient",
                                            children: u("b", {
                                                children: e != null && e.success ? "Successfully Downloaded" : "Server Busy"
                                            })
                                        }), u("p", {
                                            className: "mt-1 text-sm text-white",
                                            children: e == null ? void 0 : e.message
                                        })]
                                    }), u("div", {
                                        className: "ml-4 flex flex-shrink-0",
                                        children: C("button", {
                                            type: "button",
                                            className: "inline-flex rounded-md bg-secondary text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                                            onClick: r,
                                            children: [u("span", {
                                                className: "sr-only",
                                                children: "Close"
                                            }), u(Fg, {
                                                className: "h-5 w-5",
                                                "aria-hidden": "true"
                                            })]
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })
            })
        })
    },
    Ig = ({
        children: e
    }) => {
        const t = tr();
        return m.useLayoutEffect(() => {
            document.documentElement.scrollTo(0, 0)
        }, [t.pathname]), e
    },
    Ug = () => {
        const [e, t] = m.useState({
            success: !0,
            message: "Thank you for downloading the portfolio."
        }), [n, r] = m.useState(!1), [l, i] = m.useState(!1);
        return m.useEffect(() => {
            Ge.init({
                duration: 2e3
            })
        }, []), C(Z0, {
            children: [C("div", {
                className: "bg-primary w-full overflow-hidden",
                children: [u("div", {
                    className: `${O.paddingX} ${O.flexCenter}`,
                    children: u("div", {
                        className: `${O.boxWidth}`,
                        children: u(nv, {
                            setOpen: r
                        })
                    })
                }), u(zg, {
                    setNotification: t,
                    open: n,
                    setOpen: r,
                    setShow: i
                }), u(Ig, {
                    children: C(Y0, {
                        children: [u(wr, {
                            path: "/",
                            element: u(Gu, {})
                        }), u(wr, {
                            path: "/contactus",
                            element: u(Pv, {})
                        }), u(wr, {
                            path: "/privacypolicy",
                            element: u(_v, {})
                        }), u(wr, {
                            path: "*",
                            element: u(Gu, {})
                        })]
                    })
                }), u("div", {
                    className: `bg-primary ${O.paddingX} ${O.flexCenter}`,
                    children: C("div", {
                        className: `${O.boxWidth}`,
                        children: [u(vv, {}), u(cv, {})]
                    })
                }), u($v, {})]
            }), u(Dg, {
                notification: e,
                setNotification: t,
                show: l,
                setShow: i
            })]
        })
    };
wo.createRoot(document.getElementById("root")).render(u(U.StrictMode, {
    children: u(Ug, {})
}));