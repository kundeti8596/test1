"use strict";
(window.webpackChunkNRBA = window.webpackChunkNRBA || []).push([
    [325], {
        4325: (e, t, r) => {
            r.r(t), r.d(t, {
                Aggregate: () => d
            });
            var s, i, a, o = r(6562),
                n = r(4045),
                c = r(8343),
                h = r(5330),
                u = r(6034),
                g = r(4329);
            class d extends h.m {
                constructor(e, t) {
                    var r;
                    super(e, t, u.t), r = this, (0, n.X)("storeMetric", (function() {
                        return r.storeMetric(...arguments)
                    }), this.featureName, this.ee), (0, n.X)("storeEventMetrics", (function() {
                        return r.storeEventMetrics(...arguments)
                    }), this.featureName, this.ee);
                    var s = (0, o.Mt)(this.agentIdentifier, "metrics.harvestTimeSeconds") || 30,
                        i = new c.o("jserrors", {}, this);
                    i.harvest.on("jserrors", (() => ({
                        body: this.aggregator.take(["cm", "sm"])
                    }))), this.ee.on(`drain-${this.featureName}`, (() => {
                        this.blocked || i.startTimer(s)
                    })), (0, n.X)("block-err", (() => {
                        this.blocked = !0, i.stopTimer()
                    }), this.featureName, this.ee), (0, g.L)(this.agentIdentifier, this.featureName)
                }
                storeMetric(e, t, r, s) {
                    this.blocked || this.aggregator.storeMetric(e, t, r, s)
                }
                storeEventMetrics(e, t, r, s) {
                    this.blocked || this.aggregator.store(e, t, r, s)
                }
            }
            s = d, i = "featureName", a = u.t, i in s ? Object.defineProperty(s, i, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : s[i] = a
        }
    }
]);