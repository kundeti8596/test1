"use strict";
(window.webpackChunkNRBA = window.webpackChunkNRBA || []).push([
    [817], {
        6817: (e, t, i) => {
            i.r(t), i.d(t, {
                Aggregate: () => g
            });
            var n, r, s, a = i(7022),
                h = i(2438),
                o = i(4045),
                c = i(8343),
                d = i(4917),
                u = i(6562),
                v = i(5330),
                f = i(6486),
                m = i(4329),
                l = i(2374);
            class g extends v.m {
                constructor(e, t) {
                    var i;
                    super(e, t, f.t), i = this, this.eventsPerMinute = 240, this.harvestTimeSeconds = (0, u.Mt)(this.agentIdentifier, "page_action.harvestTimeSeconds") || (0, u.Mt)(this.agentIdentifier, "ins.harvestTimeSeconds") || 30, this.eventsPerHarvest = this.eventsPerMinute * this.harvestTimeSeconds / 60, this.referrerUrl, this.currentEvents, this.events = [], this.att = (0, u.C5)(this.agentIdentifier).jsAttributes, l.il && document.referrer && (this.referrerUrl = (0, d.f)(document.referrer)), (0, o.X)("api-addPageAction", (function() {
                        return i.addPageAction(...arguments)
                    }), this.featureName, this.ee);
                    var n = new c.o("ins", {
                        onFinished: function() {
                            return i.onHarvestFinished(...arguments)
                        }
                    }, this);
                    n.harvest.on("ins", (function() {
                        return i.onHarvestStarted(...arguments)
                    })), this.ee.on(`drain-${this.featureName}`, (() => {
                        this.blocked || n.startTimer(this.harvestTimeSeconds, 0)
                    })), (0, o.X)("block-ins", (() => {
                        this.blocked = !0, n.stopTimer()
                    }), this.featureName, this.ee), (0, m.L)(this.agentIdentifier, this.featureName)
                }
                onHarvestStarted(e) {
                    const {
                        userAttributes: t,
                        atts: i
                    } = (0, u.C5)(this.agentIdentifier);
                    var n = {
                        qs: {
                            ua: t,
                            at: i
                        },
                        body: {
                            ins: this.events
                        }
                    };
                    return e.retry && (this.currentEvents = this.events), this.events = [], n
                }
                onHarvestFinished(e) {
                    e && e.sent && e.retry && this.currentEvents && (this.events = this.events.concat(this.currentEvents), this.currentEvents = null)
                }
                addPageAction(e, t, i) {
                    if (!(this.events.length >= this.eventsPerHarvest || this.blocked)) {
                        var n, r, s = {};
                        l.il && window.document.documentElement && (n = window.document.documentElement.clientWidth, r = window.document.documentElement.clientHeight);
                        var o = {
                            timestamp: e + (0, u.OP)(this.agentIdentifier).offset,
                            timeSinceLoad: e / 1e3,
                            browserWidth: n,
                            browserHeight: r,
                            referrerUrl: this.referrerUrl,
                            currentUrl: (0, d.f)("" + location),
                            pageUrl: (0, d.f)((0, u.OP)(this.agentIdentifier).origin),
                            eventType: "PageAction"
                        };
                        (0, a.D)(o, c), (0, a.D)((0, u.C5)(this.agentIdentifier).jsAttributes, c), i && "object" == typeof i && (0, a.D)(i, c), s.actionName = t || "", this.events.push(s)
                    }

                    function c(e, t) {
                        s[e] = t && "object" == typeof t ? (0, h.P)(t) : t
                    }
                }
            }
            n = g, r = "featureName", s = f.t, r in n ? Object.defineProperty(n, r, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[r] = s
        },
        6486: (e, t, i) => {
            i.d(t, {
                t: () => n
            });
            const n = i(2325).D.pageAction
        }
    }
]);