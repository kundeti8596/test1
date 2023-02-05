"use strict";
(window.webpackChunkNRBA = window.webpackChunkNRBA || []).push([
    [823], {
        6210: (t, e, n) => {
            n.d(e, {
                W: () => a,
                e: () => r
            });
            var r = {};

            function a(t, e) {
                r[t] = e
            }
        },
        4890: (t, e, n) => {
            n.d(e, {
                uB: () => i,
                wu: () => a,
                zJ: () => r
            });
            var r = [];

            function a(t, e) {
                var n = t.navigationStart;
                return e.of = n, o(n, n, e, "n"), o(t.unloadEventStart, n, e, "u"), o(t.redirectStart, n, e, "r"), o(t.unloadEventEnd, n, e, "ue"), o(t.redirectEnd, n, e, "re"), o(t.fetchStart, n, e, "f"), o(t.domainLookupStart, n, e, "dn"), o(t.domainLookupEnd, n, e, "dne"), o(t.connectStart, n, e, "c"), o(t.secureConnectionStart, n, e, "s"), o(t.connectEnd, n, e, "ce"), o(t.requestStart, n, e, "rq"), o(t.responseStart, n, e, "rp"), o(t.responseEnd, n, e, "rpe"), o(t.domLoading, n, e, "dl"), o(t.domInteractive, n, e, "di"), o(t.domContentLoadedEventStart, n, e, "ds"), o(t.domContentLoadedEventEnd, n, e, "de"), o(t.domComplete, n, e, "dc"), o(t.loadEventStart, n, e, "l"), o(t.loadEventEnd, n, e, "le"), e
            }

            function i(t, e) {
                return o(t.type, 0, e, "ty"), o(t.redirectCount, 0, e, "rc"), e
            }

            function o(t, e, n, a) {
                var i;
                "number" == typeof t && t > 0 && (i = Math.round(t - e), n[a] = i), r.push(i)
            }
        },
        4823: (t, e, n) => {
            n.r(e), n.d(e, {
                Aggregate: () => h
            });
            var r = n(8283),
                a = n(7022),
                i = n(532),
                o = n(4890),
                u = n(2438),
                s = n(6210),
                d = n(5673),
                p = n(6562),
                c = n(8343),
                m = n(5330),
                f = n(2484),
                g = n(2374);
            class h extends m.m {
                constructor(t, e) {
                    super(t, e, f.t), g.il && this.sendRum()
                }
                getScheme() {
                    return !1 === (0, p.Mt)(this.agentIdentifier, "ssl") ? "http" : "https"
                }
                sendRum() {
                    const t = (0, p.C5)(this.agentIdentifier);
                    if (!t.beacon) return;
                    t.queueTime && this.aggregator.store("measures", "qt", {
                        value: t.queueTime
                    }), t.applicationTime && this.aggregator.store("measures", "ap", {
                        value: t.applicationTime
                    }), (0, r.L)(this.aggregator, "be", "starttime", "firstbyte"), (0, r.L)(this.aggregator, "fe", "firstbyte", "onload"), (0, r.L)(this.aggregator, "dc", "firstbyte", "domContent");
                    const e = (0, p.OP)(this.agentIdentifier);
                    var n = this.aggregator.get("measures"),
                        m = (0, a.D)(n, (function(t, e) {
                            return "&" + t + "=" + e.params.value
                        })).join(""),
                        f = [new c.o("page_view_event", {}, this).harvest.baseQueryString()];
                    if (f.push(m), f.push((0, i.wu)("tt", t.ttGuid)), f.push((0, i.wu)("us", t.user)), f.push((0, i.wu)("ac", t.account)), f.push((0, i.wu)("pr", t.product)), f.push((0, i.wu)("af", Object.keys(e.features).join(","))), window.performance && void 0 !== window.performance.timing) {
                        var g = {
                            timing: (0, o.wu)(window.performance.timing, {}),
                            navigation: (0, o.uB)(window.performance.navigation, {})
                        };
                        f.push((0, i.wu)("perf", (0, u.P)(g)))
                    }
                    if (window.performance && window.performance.getEntriesByType) {
                        var h = window.performance.getEntriesByType("paint");
                        h && h.length > 0 && h.forEach((function(t) {
                            !t.startTime || t.startTime <= 0 || ("first-paint" === t.name ? f.push((0, i.wu)("fp", String(Math.floor(t.startTime)))) : "first-contentful-paint" === t.name && f.push((0, i.wu)("fcp", String(Math.floor(t.startTime)))), (0, s.W)(t.name, Math.floor(t.startTime)))
                        }))
                    }
                    f.push((0, i.wu)("xx", t.extra)), f.push((0, i.wu)("ua", t.userAttributes)), f.push((0, i.wu)("at", t.atts));
                    var w = (0, u.P)(t.jsAttributes);
                    f.push((0, i.wu)("ja", "{}" === w ? null : w));
                    var l = (0, i.nI)(f, e.maxBytes);
                    d.T.jsonp(this.getScheme() + "://" + t.beacon + "/1/" + t.licenseKey + l, "NREUM.setToken")
                }
            }
            var w, l, v;
            w = h, l = "featureName", v = f.t, l in w ? Object.defineProperty(w, l, {
                value: v,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : w[l] = v
        }
    }
]);