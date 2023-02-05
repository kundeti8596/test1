"use strict";
(window.webpackChunkNRBA = window.webpackChunkNRBA || []).push([
    [785], {
        7826: (e, t, i) => {
            i.d(t, {
                AG: () => l,
                FX: () => c,
                n1: () => o,
                uR: () => h
            });
            var s = i(7022),
                n = i(2438),
                r = i(9226),
                a = Object.prototype.hasOwnProperty;

            function l(e, t, i) {
                return e || 0 === e || "" === e ? t(e) + (i ? "," : "") : "!"
            }

            function h(e, t) {
                return t ? Math.floor(e).toString(36) : void 0 === e || 0 === e ? "" : Math.floor(e).toString(36)
            }

            function c(e) {
                var t = Object.hasOwnProperty("create") ? Object.create(null) : {},
                    i = 0;
                return function(s) {
                    if (void 0 === s || "" === s) return "";
                    var n = new r.RR({
                        agentIdentifier: e
                    });
                    s = String(s), n.shouldObfuscate() && (s = n.obfuscateString(s));
                    return a.call(t, s) ? h(t[s], !0) : (t[s] = i++, function(e) {
                        return "'" + e.replace(d, "\\$1")
                    }(s))
                }
            }

            function o(e, t) {
                var i = [];
                return (0, s.D)(e, (function(e, s) {
                    if (!(i.length >= 64)) {
                        var r, a = 5;
                        switch (e = t(e), typeof s) {
                            case "object":
                                s ? r = t((0, n.P)(s)) : a = 9;
                                break;
                            case "number":
                                a = 6, r = s % 1 ? s : s + ".";
                                break;
                            case "boolean":
                                a = s ? 7 : 8;
                                break;
                            case "undefined":
                                a = 9;
                                break;
                            default:
                                r = t(s)
                        }
                        i.push([a, e + (r ? "," + r : "")])
                    }
                })), i
            }
            var d = /([,\\;])/g
        },
        8785: (e, t, i) => {
            i.r(t), i.d(t, {
                Aggregate: () => S
            });
            var s, n, r, a = i(7826),
                l = (i(2053), i(7022)),
                h = i(8343),
                c = i(4045),
                o = i(4917),
                d = i(9252),
                u = i(6562),
                p = i(5330),
                m = i(6382),
                g = i(4329),
                f = i(2325),
                v = i(2374);
            class S extends p.m {
                constructor(e, t) {
                    var i;
                    if (super(e, t, m.t), i = this, v.il) {
                        this.timings = [], this.timingsSent = [], this.lcpRecorded = !1, this.lcp = null, this.clsSupported = !1, this.cls = 0, this.clsSession = {
                            value: 0,
                            firstEntryTime: 0,
                            lastEntryTime: 0
                        }, this.curSessEndRecorded = !1;
                        try {
                            this.clsSupported = PerformanceObserver.supportedEntryTypes.includes("layout-shift")
                        } catch (e) {}
                        var s = (0, u.Mt)(this.agentIdentifier, "page_view_timing.maxLCPTimeSeconds") || 60,
                            n = (0, u.Mt)(this.agentIdentifier, "page_view_timing.initialHarvestSeconds") || 10,
                            r = (0, u.Mt)(this.agentIdentifier, "page_view_timing.harvestTimeSeconds") || 30;
                        this.scheduler = new h.o("events", {
                            onFinished: function() {
                                return i.onHarvestFinished(...arguments)
                            },
                            getPayload: function() {
                                return i.prepareHarvest(...arguments)
                            },
                            onUnload: () => this.recordLcp()
                        }, this), (0, c.X)("timing", (function() {
                            return i.processTiming(...arguments)
                        }), this.featureName, this.ee), (0, c.X)("lcp", (function() {
                            return i.updateLatestLcp(...arguments)
                        }), this.featureName, this.ee), (0, c.X)("cls", (function() {
                            return i.updateClsScore(...arguments)
                        }), this.featureName, this.ee), (0, c.X)("docHidden", (e => this.endCurrentSession(e)), this.featureName, this.ee), (0, c.X)("winPagehide", (e => this.recordPageUnload(e)), this.featureName, this.ee), setTimeout((() => {
                            this.recordLcp(), this.lcpRecorded = !0
                        }), 1e3 * s), this.ee.on(`drain-${this.featureName}`, (() => {
                            this.blocked || this.scheduler.startTimer(r, n)
                        })), (0, g.L)(this.agentIdentifier, this.featureName)
                    }
                }
                recordLcp() {
                    if (!this.lcpRecorded && null !== this.lcp) {
                        var e = this.lcp[0],
                            t = this.lcp[1],
                            i = this.lcp[2],
                            s = {
                                size: e.size,
                                eid: e.id
                            };
                        i && (i["net-type"] && (s["net-type"] = i["net-type"]), i["net-etype"] && (s["net-etype"] = i["net-etype"]), i["net-rtt"] && (s["net-rtt"] = i["net-rtt"]), i["net-dlink"] && (s["net-dlink"] = i["net-dlink"])), e.url && (s.elUrl = (0, o.f)(e.url)), e.element && e.element.tagName && (s.elTag = e.element.tagName), (t > 0 || this.clsSupported) && (s.cls = t), this.addTiming("lcp", Math.floor(e.startTime), s, !1), this.lcpRecorded = !0
                    }
                }
                updateLatestLcp(e, t) {
                    if (this.lcp && this.lcp[0].size >= e.size) return;
                    this.lcp = [e, this.cls, t]
                }
                updateClsScore(e) {
                    (e.startTime - this.clsSession.lastEntryTime > 1e3 || e.startTime - this.clsSession.firstEntryTime > 5e3) && (this.clsSession = {
                        value: 0,
                        firstEntryTime: e.startTime,
                        lastEntryTime: e.startTime
                    }), this.clsSession.value += e.value, this.clsSession.lastEntryTime = Math.max(this.clsSession.lastEntryTime, e.startTime), this.cls < this.clsSession.value && (this.cls = this.clsSession.value)
                }
                endCurrentSession(e) {
                    this.curSessEndRecorded || (this.addTiming("pageHide", e, null, !0), this.curSessEndRecorded = !0)
                }
                recordPageUnload(e) {
                    this.addTiming("unload", e, null, !0), this.endCurrentSession(e)
                }
                addTiming(e, t, i, s) {
                    this.blocked || (i = i || {}, (this.cls > 0 || this.clsSupported) && s && (i.cls = this.cls), this.timings.push({
                        name: e,
                        value: t,
                        attrs: i
                    }), (0, d.p)("pvtAdded", [e, t, i], void 0, f.D.sessionTrace, this.ee))
                }
                processTiming(e, t, i) {
                    var s = this;
                    "fi" === e && setTimeout((function() {
                        return s.recordLcp(...arguments)
                    }), 0), this.addTiming(e, t, i, !0)
                }
                onHarvestFinished(e) {
                    if (e.retry && this.timingsSent.length > 0) {
                        for (var t = 0; t < this.timingsSent.length; t++) this.timings.push(this.timingsSent[t]);
                        this.timingsSent = []
                    }
                }
                appendGlobalCustomAttributes(e) {
                    var t = e.attrs || {},
                        i = (0, u.C5)(this.agentIdentifier).jsAttributes || {},
                        s = ["size", "eid", "cls", "type", "fid", "elTag", "elUrl", "net-type", "net-etype", "net-rtt", "net-dlink"];
                    (0, l.D)(i, (function(e, i) {
                        s.indexOf(e) < 0 && (t[e] = i)
                    }))
                }
                prepareHarvest(e) {
                    if (0 !== this.timings.length) {
                        var t = this.getPayload(this.timings);
                        if (e.retry)
                            for (var i = 0; i < this.timings.length; i++) this.timingsSent.push(this.timings[i]);
                        return this.timings = [], {
                            body: {
                                e: t
                            }
                        }
                    }
                }
                getPayload(e) {
                    for (var t = (0, a.FX)(this.agentIdentifier), i = "bel.6;", s = 0; s < e.length; s++) {
                        var n = e[s];
                        i += "e,", i += t(n.name) + ",", i += (0, a.AG)(n.value, a.uR, !1) + ",", this.appendGlobalCustomAttributes(n);
                        var r = (0, a.n1)(n.attrs, t);
                        r && r.length > 0 && (i += (0, a.uR)(r.length) + ";" + r.join(";")), s + 1 < e.length && (i += ";")
                    }
                    return i
                }
            }
            s = S, n = "featureName", r = m.t, n in s ? Object.defineProperty(s, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : s[n] = r
        }
    }
]);