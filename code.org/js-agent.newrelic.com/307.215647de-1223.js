"use strict";
(window.webpackChunkNRBA = window.webpackChunkNRBA || []).push([
    [307], {
        6368: (t, e, r) => {
            r.d(e, {
                e: () => i
            });
            var s = r(2374),
                n = {};

            function i(t) {
                if (t in n) return n[t];
                if (0 === (t || "").indexOf("data:")) return {
                    protocol: "data"
                };
                let e;
                var r = s._A ? .location,
                    i = {};
                if (s.il) e = document.createElement("a"), e.href = t;
                else try {
                    e = new URL(t, r.href)
                } catch (t) {
                    return i
                }
                i.port = e.port;
                var o = e.href.split("://");
                !i.port && o[1] && (i.port = o[1].split("/")[0].split("@").pop().split(":")[1]), i.port && "0" !== i.port || (i.port = "https" === o[0] ? "443" : "80"), i.hostname = e.hostname || r.hostname, i.pathname = e.pathname, i.protocol = o[0], "/" !== i.pathname.charAt(0) && (i.pathname = "/" + i.pathname);
                var a = !e.protocol || ":" === e.protocol || e.protocol === r.protocol,
                    h = e.hostname === r.hostname && e.port === r.port;
                return i.sameOrigin = a && (!e.hostname || h), "/" === i.pathname && (n[t] = i), i
            }
        },
        6588: (t, e, r) => {
            function s(t, e, r) {
                var s = 0;
                for (void 0 === r && (r = t[0], s = 1); s < t.length; s++) r = e(r, t[s]);
                return r
            }
            r.d(e, {
                u: () => s
            })
        },
        6408: (t, e, r) => {
            r.d(e, {
                W: () => n
            });
            var s = r(2374);

            function n() {
                return "function" == typeof s._A ? .PerformanceObserver
            }
        },
        1307: (t, e, r) => {
            r.r(e), r.d(e, {
                Aggregate: () => H
            });
            var s = r(4045),
                n = r(3066),
                i = r(8343),
                o = r(7022),
                a = r(6588),
                h = r(2438),
                u = r(6368),
                c = r(6408),
                l = r(8683),
                f = r.n(l),
                m = r(6562),
                d = r(6625),
                g = r(2053),
                p = r(5330),
                v = r(2628),
                T = r(4329);

            function E(t, e) {
                N(t, e), e.add(t)
            }

            function w(t, e, r) {
                N(t, e), e.set(t, r)
            }

            function N(t, e) {
                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function y(t, e, r) {
                return function(t, e, r) {
                    if (e.set) e.set.call(t, r);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = r
                    }
                }(t, b(t, e, "set"), r), r
            }

            function A(t, e) {
                return function(t, e) {
                    if (e.get) return e.get.call(t);
                    return e.value
                }(t, b(t, e, "get"))
            }

            function b(t, e, r) {
                if (!e.has(t)) throw new TypeError("attempted to " + r + " private field on non-instance");
                return e.get(t)
            }

            function S(t, e, r) {
                if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return r
            }
            var R, O, _, k = new WeakMap,
                x = new WeakMap,
                C = new WeakMap,
                I = new WeakMap,
                M = new WeakSet,
                F = new WeakSet;
            class P {
                constructor() {
                    E(this, F), E(this, M), w(this, k, {
                        writable: !0,
                        value: void 0
                    }), w(this, x, {
                        writable: !0,
                        value: !0
                    }), w(this, C, {
                        writable: !0,
                        value: []
                    }), w(this, I, {
                        writable: !0,
                        value: setTimeout((() => S(this, F, D).call(this)), 5e3)
                    })
                }
                settle(t) {
                    !1 !== A(this, k) && !1 !== A(this, x) && (void 0 === A(this, k) ? A(this, C).push(t) : t())
                }
                decide(t) {
                    y(this, k, t), !1 === t && S(this, F, D).call(this), !0 === t && S(this, M, X).call(this)
                }
            }

            function X() {
                A(this, C).forEach((t => t())), y(this, C, []), clearTimeout(A(this, I))
            }

            function D() {
                y(this, x, !1), y(this, C, [])
            }
            class H extends p.m {
                constructor(t, e) {
                    var r;
                    super(t, e, v.FEATURE_NAME), r = this;
                    const a = (0, m.OP)(t),
                        h = new P;
                    n.y0 && a.xhrWrappable && (this.ptid = "", this.ignoredEvents = {
                        global: {
                            mouseup: !0,
                            mousedown: !0
                        },
                        window: {
                            load: !0,
                            pagehide: !0
                        },
                        xhrOriginMissing: {
                            ignoreAll: !0
                        }
                    }, this.toAggregate = {
                        typing: [1e3, 2e3],
                        scrolling: [100, 1e3],
                        mousing: [1e3, 2e3],
                        touching: [1e3, 2e3]
                    }, this.rename = {
                        typing: {
                            keydown: !0,
                            keyup: !0,
                            keypress: !0
                        },
                        mousing: {
                            mousemove: !0,
                            mouseenter: !0,
                            mouseleave: !0,
                            mouseover: !0,
                            mouseout: !0
                        },
                        scrolling: {
                            scroll: !0
                        },
                        touching: {
                            touchstart: !0,
                            touchmove: !0,
                            touchend: !0,
                            touchcancel: !0,
                            touchenter: !0,
                            touchleave: !0
                        }
                    }, this.trace = {}, this.nodeCount = 0, this.sentTrace = null, this.harvestTimeSeconds = (0, m.Mt)(t, "session_trace.harvestTimeSeconds") || 10, this.maxNodesPerHarvest = (0, m.Mt)(t, "session_trace.maxNodesPerHarvest") || 1e3, this.laststart = 0, (0, d.v)(t), (0, s.X)("feat-stn", (() => {
                        this.storeTiming(window.performance.timing);
                        var t = new i.o("resources", {
                            onFinished: function(e) {
                                e.sent && e.responseText && !this.ptid && (this.ptid = e.responseText, (0, m.OP)(this.agentIdentifier).ptid = this.ptid, t.startTimer(this.harvestTimeSeconds));
                                e.sent && e.retry && this.sentTrace && ((0, o.D)(this.sentTrace, ((t, e) => {
                                    this.mergeSTNs(t, e)
                                })), this.sentTrace = null)
                            }.bind(this),
                            retryDelay: this.harvestTimeSeconds
                        }, this);
                        t.harvest.on("resources", function(e) {
                            if ((0, g.zO)() > 9e5) return t.stopTimer(), void(this.trace = {});
                            if (this.ptid && this.nodeCount <= 30) return;
                            return this.takeSTNs(e.retry)
                        }.bind(this)), t.runHarvest({
                            needResponse: !0
                        }), h.decide(!0)
                    }), this.featureName, this.ee), (0, s.X)("block-stn", (() => {
                        h.decide(!1)
                    }), this.featureName, this.ee), (0, s.X)("bst", (function() {
                        for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                        return h.settle((() => r.storeEvent(...e)))
                    }), this.featureName, this.ee), (0, s.X)("bstTimer", (function() {
                        for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                        return h.settle((() => r.storeTimer(...e)))
                    }), this.featureName, this.ee), (0, s.X)("bstResource", (function() {
                        for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                        return h.settle((() => r.storeResources(...e)))
                    }), this.featureName, this.ee), (0, s.X)("bstHist", (function() {
                        for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                        return h.settle((() => r.storeHist(...e)))
                    }), this.featureName, this.ee), (0, s.X)("bstXhrAgg", (function() {
                        for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                        return h.settle((() => r.storeXhrAgg(...e)))
                    }), this.featureName, this.ee), (0, s.X)("bstApi", (function() {
                        for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                        return h.settle((() => r.storeSTN(...e)))
                    }), this.featureName, this.ee), (0, s.X)("errorAgg", (function() {
                        for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                        return h.settle((() => r.storeErrorAgg(...e)))
                    }), this.featureName, this.ee), (0, s.X)("pvtAdded", (function() {
                        for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) e[s] = arguments[s];
                        return h.settle((() => r.processPVT(...e)))
                    }), this.featureName, this.ee), (0, T.L)(this.agentIdentifier, this.featureName))
                }
                processPVT(t, e, r) {
                    var s = {};
                    s[t] = e, this.storeTiming(s, !0), this.hasFID(t, r) && this.storeEvent({
                        type: "fid",
                        target: "document"
                    }, "document", e, e + r.fid)
                }
                storeTiming(t, e) {
                    var r, s, n, i = Date.now();
                    for (r in t) "number" == typeof(s = t[r]) && s > 0 && s < i && (n = e ? t[r] : t[r] - (0, m.OP)(this.agentIdentifier).offset, this.storeSTN({
                        n: r,
                        s: n,
                        e: n,
                        o: "document",
                        t: "timing"
                    }))
                }
                storeTimer(t, e, r, s) {
                    var n = "timer";
                    "requestAnimationFrame" === s && (n = s);
                    var i = {
                        n: s,
                        s: e,
                        e: r,
                        o: "window",
                        t: n
                    };
                    this.storeSTN(i)
                }
                storeEvent(t, e, r, s) {
                    if (this.shouldIgnoreEvent(t, e)) return !1;
                    var n = {
                        n: this.evtName(t.type),
                        s: r,
                        e: s,
                        t: "event"
                    };
                    try {
                        n.o = this.evtOrigin(t.target, e)
                    } catch (t) {
                        n.o = this.evtOrigin(null, e)
                    }
                    this.storeSTN(n)
                }
                evtName(t) {
                    var e = t;
                    return (0, o.D)(this.rename, (function(r, s) {
                        t in s && (e = r)
                    })), e
                }
                evtOrigin(t, e) {
                    var r = "unknown";
                    if (t && t instanceof XMLHttpRequest) {
                        var s = this.ee.context(t).params;
                        if (!(s && s.status && s.method && s.host && s.pathname)) return "xhrOriginMissing";
                        r = s.status + " " + s.method + ": " + s.host + s.pathname
                    } else t && "string" == typeof t.tagName && (r = t.tagName.toLowerCase(), t.id && (r += "#" + t.id), t.className && (r += "." + f()(t.classList).join(".")));
                    return "unknown" === r && ("string" == typeof e ? r = e : e === document ? r = "document" : e === window ? r = "window" : e instanceof FileReader && (r = "FileReader")), r
                }
                storeHist(t, e, r) {
                    var s = {
                        n: "history.pushState",
                        s: r,
                        e: r,
                        o: t,
                        t: e
                    };
                    this.storeSTN(s)
                }
                storeResources(t) {
                    t && 0 !== t.length && (t.forEach((t => {
                        var e = (0, u.e)(t.name),
                            r = {
                                n: t.initiatorType,
                                s: 0 | t.fetchStart,
                                e: 0 | t.responseEnd,
                                o: e.protocol + "://" + e.hostname + ":" + e.port + e.pathname,
                                t: t.entryType
                            };
                        r.s <= this.laststart || this.storeSTN(r)
                    })), this.laststart = 0 | t[t.length - 1].fetchStart)
                }
                storeErrorAgg(t, e, r, s) {
                    if ("err" === t) {
                        var n = {
                            n: "error",
                            s: s.time,
                            e: s.time,
                            o: r.message,
                            t: r.stackHash
                        };
                        this.storeSTN(n)
                    }
                }
                storeXhrAgg(t, e, r, s) {
                    if ("xhr" === t) {
                        var n = {
                            n: "Ajax",
                            s: s.time,
                            e: s.time + s.duration,
                            o: r.status + " " + r.method + ": " + r.host + r.pathname,
                            t: "ajax"
                        };
                        this.storeSTN(n)
                    }
                }
                storeSTN(t) {
                    if (!(this.nodeCount >= this.maxNodesPerHarvest)) {
                        var e = this.trace[t.n];
                        e || (e = this.trace[t.n] = []), e.push(t), this.nodeCount++
                    }
                }
                mergeSTNs(t, e) {
                    if (!(this.nodeCount >= this.maxNodesPerHarvest)) {
                        var r = this.trace[t];
                        r || (r = this.trace[t] = []), this.trace[t] = e.concat(r), this.nodeCount += e.length
                    }
                }
                takeSTNs(t) {
                    (0, c.W)() || this.storeResources(window.performance.getEntriesByType("resource"));
                    var e = (0, a.u)((0, o.D)(this.trace, ((t, e) => t in this.toAggregate ? (0, a.u)((0, o.D)((0, a.u)(e.sort(this.byStart), this.smearEvtsByOrigin(t), {}), this.val), this.flatten, []) : e)), this.flatten, []);
                    if (0 === e.length) return {};
                    t && (this.sentTrace = this.trace), this.trace = {}, this.nodeCount = 0;
                    var r = {
                        qs: {
                            st: "" + (0, m.OP)(this.agentIdentifier).offset
                        },
                        body: {
                            res: e
                        }
                    };
                    if (!this.ptid) {
                        const {
                            userAttributes: t,
                            atts: e,
                            jsAttributes: n
                        } = (0, m.C5)(this.agentIdentifier);
                        r.qs.ua = t, r.qs.at = e;
                        var s = (0, h.P)(n);
                        r.qs.ja = "{}" === s ? null : s
                    }
                    return r
                }
                byStart(t, e) {
                    return t.s - e.s
                }
                smearEvtsByOrigin(t) {
                    var e = this.toAggregate[t][0],
                        r = this.toAggregate[t][1],
                        s = {};
                    return (n, i) => {
                        var o = n[i.o];
                        o || (o = n[i.o] = []);
                        var a = s[i.o];
                        return "scrolling" !== t || this.trivial(i) ? a && i.s - a.s < r && a.e > i.s - e ? a.e = i.e : (s[i.o] = i, o.push(i)) : (s[i.o] = null, i.n = "scroll", o.push(i)), n
                    }
                }
                val(t, e) {
                    return e
                }
                flatten(t, e) {
                    return t.concat(e)
                }
                hasFID(t, e) {
                    return "fi" === t && !!e && "number" == typeof e.fid
                }
                trivial(t) {
                    return !!(t && "number" == typeof t.e && "number" == typeof t.s && t.e - t.s < 4)
                }
                shouldIgnoreEvent(t, e) {
                    var r = this.evtOrigin(t.target, e);
                    return t.type in this.ignoredEvents.global || (!(!this.ignoredEvents[r] || !this.ignoredEvents[r].ignoreAll) || !(!this.ignoredEvents[r] || !(t.type in this.ignoredEvents[r])))
                }
            }
            R = H, O = "featureName", _ = v.FEATURE_NAME, O in R ? Object.defineProperty(R, O, {
                value: _,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : R[O] = _
        },
        2628: (t, e, r) => {
            r.r(e), r.d(e, {
                ADD_EVENT_LISTENER: () => o,
                BST_RESOURCE: () => u,
                BST_TIMER: () => g,
                END: () => f,
                FEATURE_NAME: () => n,
                FN_END: () => d,
                FN_START: () => m,
                ORIG_EVENT: () => v,
                PUSH_STATE: () => p,
                REMOVE_EVENT_LISTENER: () => a,
                RESOURCE: () => c,
                RESOURCE_TIMING_BUFFER_FULL: () => h,
                START: () => l,
                learResourceTimings: () => i
            });
            var s = r(6562);
            const n = r(2325).D.sessionTrace,
                i = "learResourceTimings",
                o = "addEventListener",
                a = "removeEventListener",
                h = "resourcetimingbufferfull",
                u = "bstResource",
                c = "resource",
                l = "-start",
                f = "-end",
                m = "fn" + l,
                d = "fn" + f,
                g = "bstTimer",
                p = "pushState",
                v = s.Yu.EV
        }
    }
]);