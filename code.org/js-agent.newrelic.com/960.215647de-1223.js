"use strict";
(window.webpackChunkNRBA = window.webpackChunkNRBA || []).push([
    [960], {
        4231: (t, e, n) => {
            n.d(e, {
                R: () => i,
                z: () => a
            });
            var r = [];

            function a(t) {
                if (0 === r.length) return !0;
                if (void 0 === t.hostname) return !1;
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    if ("*" === n.hostname) return !1;
                    if (s(n.hostname, t.hostname) && o(n.pathname, t.pathname)) return !1
                }
                return !0
            }

            function i(t) {
                if (r = [], t && t.length)
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        0 === n.indexOf("http://") ? n = n.substring(7) : 0 === n.indexOf("https://") && (n = n.substring(8));
                        var a = n.indexOf("/");
                        a > 0 ? r.push({
                            hostname: n.substring(0, a),
                            pathname: n.substring(a)
                        }) : r.push({
                            hostname: n,
                            pathname: ""
                        })
                    }
            }

            function s(t, e) {
                return !(t.length > e.length) && e.indexOf(t) === e.length - t.length
            }

            function o(t, e) {
                return 0 === t.indexOf("/") && (t = t.substring(1)), 0 === e.indexOf("/") && (e = e.substring(1)), "" === t || t === e
            }
        },
        7826: (t, e, n) => {
            n.d(e, {
                AG: () => o,
                FX: () => h,
                n1: () => d,
                uR: () => u
            });
            var r = n(7022),
                a = n(2438),
                i = n(9226),
                s = Object.prototype.hasOwnProperty;

            function o(t, e, n) {
                return t || 0 === t || "" === t ? e(t) + (n ? "," : "") : "!"
            }

            function u(t, e) {
                return e ? Math.floor(t).toString(36) : void 0 === t || 0 === t ? "" : Math.floor(t).toString(36)
            }

            function h(t) {
                var e = Object.hasOwnProperty("create") ? Object.create(null) : {},
                    n = 0;
                return function(r) {
                    if (void 0 === r || "" === r) return "";
                    var a = new i.RR({
                        agentIdentifier: t
                    });
                    r = String(r), a.shouldObfuscate() && (r = a.obfuscateString(r));
                    return s.call(e, r) ? u(e[r], !0) : (e[r] = n++, function(t) {
                        return "'" + t.replace(c, "\\$1")
                    }(r))
                }
            }

            function d(t, e) {
                var n = [];
                return (0, r.D)(t, (function(t, r) {
                    if (!(n.length >= 64)) {
                        var i, s = 5;
                        switch (t = e(t), typeof r) {
                            case "object":
                                r ? i = e((0, a.P)(r)) : s = 9;
                                break;
                            case "number":
                                s = 6, i = r % 1 ? r : r + ".";
                                break;
                            case "boolean":
                                s = r ? 7 : 8;
                                break;
                            case "undefined":
                                s = 9;
                                break;
                            default:
                                i = e(r)
                        }
                        n.push([s, t + (i ? "," + i : "")])
                    }
                })), n
            }
            var c = /([,\\;])/g
        },
        960: (t, e, n) => {
            n.r(e), n.d(e, {
                Aggregate: () => v
            });
            var r, a, i, s = n(4045),
                o = n(2438),
                u = n(7826),
                h = n(9252),
                d = n(6562),
                c = n(8343),
                f = n(4231),
                l = n(5330),
                p = n(8675),
                g = n(4329),
                m = n(2325);
            class v extends l.m {
                constructor(t, e) {
                    super(t, e, p.t);
                    let n, r = [],
                        a = {},
                        i = [];
                    const l = this.ee,
                        v = (0, d.Mt)(t, "ajax.harvestTimeSeconds") || 10,
                        b = (0, d.Mt)(t, "ajax.maxPayloadSize") || 1e6;

                    function x(n, i, s, u, c) {
                        var p;
                        if (i.time = s, p = n.cat ? (0, o.P)([n.status, n.cat]) : (0, o.P)([n.status, n.host, n.pathname]), (0, h.p)("bstXhrAgg", ["xhr", p, n, i], void 0, m.D.sessionTrace, l), e.store("xhr", p, n, i), R())
                            if ((0, f.z)(n)) {
                                var g = this,
                                    v = {
                                        method: n.method,
                                        status: n.status,
                                        domain: n.host,
                                        path: n.pathname,
                                        requestSize: i.txSize,
                                        responseSize: i.rxSize,
                                        type: c,
                                        startTime: s,
                                        endTime: u,
                                        callbackDuration: i.cbTime
                                    };
                                if (g.dt && (v.spanId = g.dt.spanId, v.traceId = g.dt.traceId, v.spanTimestamp = g.dt.timestamp), this.spaNode) {
                                    var b = this.spaNode.interaction.id;
                                    a[b] = a[b] || [], a[b].push(v)
                                } else r.push(v)
                            } else n.hostname === (0, d.C5)(t).errorBeacon ? (0, h.p)("record-supportability", ["Ajax/Events/Excluded/Agent"], void 0, m.D.metrics, l) : (0, h.p)("record-supportability", ["Ajax/Events/Excluded/App"], void 0, m.D.metrics, l)
                    }

                    function S(t) {
                        if (t = t || {}, 0 === r.length) return null;
                        for (var e = y(r, t.maxPayloadSize || b), n = [], a = 0; a < e.length; a++) n.push({
                            body: {
                                e: e[a]
                            }
                        });
                        return t.retry && (i = r.slice()), r = [], n
                    }

                    function y(t, e, n) {
                        n = n || 1;
                        for (var r = [], a = function(t, e) {
                                e = e || t.length;
                                for (var n = [], r = 0, a = t.length; r < a; r += e) n.push(new j(t.slice(r, r + e)));
                                return n
                            }(t, t.length / n), i = !1, s = 0; s < a.length; s++) {
                            var o = a[s];
                            if (o.tooBig(e)) {
                                if (1 !== o.events.length) {
                                    i = !0;
                                    break
                                }
                            } else r.push(o.payload)
                        }
                        return i ? y(t, e, ++n) : r
                    }

                    function j(e) {
                        this.addString = (0, u.FX)(t), this.events = e, this.payload = "bel.7;";
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n],
                                a = [(0, u.uR)(r.startTime), (0, u.uR)(r.endTime - r.startTime), (0, u.uR)(0), (0, u.uR)(0), this.addString(r.method), (0, u.uR)(r.status), this.addString(r.domain), this.addString(r.path), (0, u.uR)(r.requestSize), (0, u.uR)(r.responseSize), "fetch" === r.type ? 1 : "", this.addString(0), (0, u.AG)(r.spanId, this.addString, !0) + (0, u.AG)(r.traceId, this.addString, !0) + (0, u.AG)(r.spanTimestamp, u.uR, !1)],
                                i = "2,",
                                s = (0, u.n1)((0, d.C5)(t).jsAttributes || {}, this.addString);
                            a.unshift((0, u.uR)(s.length)), i += a.join(","), s && s.length > 0 && (i += ";" + s.join(";")), n + 1 < e.length && (i += ";"), this.payload += i
                        }
                        this.tooBig = function(t) {
                            return t = t || b, 2 * this.payload.length > t
                        }
                    }

                    function R() {
                        return !1 !== (0, d.Mt)(t, "ajax.enabled")
                    }
                    this.storeXhr = x, this.prepareHarvest = S, this.getStoredEvents = function() {
                        return {
                            ajaxEvents: r,
                            spaAjaxEvents: a
                        }
                    }, l.on("interactionSaved", (t => {
                        a[t.id] && delete a[t.id]
                    })), l.on("interactionDiscarded", (t => {
                        a[t.id] && R() && (a[t.id].forEach((function(t) {
                            r.push(t)
                        })), delete a[t.id])
                    })), R() && (0, f.R)((0, d.Mt)(t, "ajax.deny_list")), (0, s.X)("xhr", x, this.featureName, this.ee), R() && (n = new c.o("events", {
                        onFinished: function(t) {
                            t.retry && i.length > 0 && R() && (r = r.concat(i), i = [])
                        },
                        getPayload: S
                    }, this), l.on(`drain-${this.featureName}`, (() => {
                        this.blocked || n.startTimer(v)
                    }))), (0, g.L)(this.agentIdentifier, this.featureName)
                }
            }
            r = v, a = "featureName", i = p.t, a in r ? Object.defineProperty(r, a, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : r[a] = i
        },
        8675: (t, e, n) => {
            n.d(e, {
                t: () => r
            });
            const r = n(2325).D.ajax
        }
    }
]);