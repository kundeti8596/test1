var OneTrustStub = function(e) {
    "use strict";
    var t, n, i, a, o, r, s, l, c, p, u, d, m, h, g, f, v, A, b, C, y, I, S, L, T, D, w, R, P, E, _, B, O, G, U, k, N, F, M, V, x, H, j, q, z, W, K, J, Y, Q, X, Z, $, ee, te, ne, ie, ae, oe, re, se, le, ce, pe, ue, de, me, he, ge, fe, ve, Ae, be, Ce, ye, Ie, Se, Le, Te, De = new function() {
        this.optanonCookieName = "OptanonConsent", this.optanonHtmlGroupData = [], this.optanonHostData = [], this.genVendorsData = [], this.vendorsServiceData = [], this.IABCookieValue = "", this.oneTrustIABCookieName = "eupubconsent", this.oneTrustIsIABCrossConsentEnableParam = "isIABGlobal", this.isStubReady = !0, this.geolocationCookiesParam = "geolocation", this.EUCOUNTRIES = ["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "GR", "ES", "FR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE", "GB", "HR", "LI", "NO", "IS"], this.stubFileName = "otSDKStub", this.DATAFILEATTRIBUTE = "data-domain-script", this.bannerScriptName = "otBannerSdk.js", this.mobileOnlineURL = [], this.isMigratedURL = !1, this.migratedCCTID = "[[OldCCTID]]", this.migratedDomainId = "[[NewDomainId]]", this.userLocation = {
            country: "",
            state: ""
        }
    };
    (n = t = t || {})[n.Unknown = 0] = "Unknown", n[n.BannerCloseButton = 1] = "BannerCloseButton", n[n.ConfirmChoiceButton = 2] = "ConfirmChoiceButton", n[n.AcceptAll = 3] = "AcceptAll", n[n.RejectAll = 4] = "RejectAll", n[n.BannerSaveSettings = 5] = "BannerSaveSettings", n[n.ContinueWithoutAcceptingButton = 6] = "ContinueWithoutAcceptingButton", (a = i = i || {})[a.Banner = 1] = "Banner", a[a.PC = 2] = "PC", a[a.API = 3] = "API", (r = o = o || {}).AcceptAll = "AcceptAll", r.RejectAll = "RejectAll", r.UpdateConsent = "UpdateConsent", (l = s = s || {})[l.Purpose = 1] = "Purpose", l[l.SpecialFeature = 2] = "SpecialFeature", (p = c = c || {}).Legal = "legal", p.UserFriendly = "user_friendly", (d = u = u || {}).Top = "top", d.Bottom = "bottom", (h = m = m || {})[h.Banner = 0] = "Banner", h[h.PrefCenterHome = 1] = "PrefCenterHome", h[h.VendorList = 2] = "VendorList", h[h.CookieList = 3] = "CookieList", (f = g = g || {})[f.RightArrow = 39] = "RightArrow", f[f.LeftArrow = 37] = "LeftArrow", (A = v = v || {}).AfterTitle = "AfterTitle", A.AfterDescription = "AfterDescription", A.AfterDPD = "AfterDPD", (C = b = b || {}).PlusMinus = "Plusminus", C.Caret = "Caret", C.NoAccordion = "NoAccordion", (I = y = y || {}).Consent = "Consent", I.LI = "LI", I.AddtlConsent = "AddtlConsent", (L = S = S || {}).Iab1Pub = "eupubconsent", L.Iab2Pub = "eupubconsent-v2", L.Iab1Eu = "euconsent", L.Iab2Eu = "euconsent-v2", (D = T = T || {})[D.Disabled = 0] = "Disabled", D[D.Consent = 1] = "Consent", D[D.LegInt = 2] = "LegInt", (R = w = w || {})[R["Banner - Allow All"] = 1] = "Banner - Allow All", R[R["Banner - Reject All"] = 2] = "Banner - Reject All", R[R["Banner - Close"] = 3] = "Banner - Close", R[R["Preference Center - Allow All"] = 4] = "Preference Center - Allow All", R[R["Preference Center - Reject All"] = 5] = "Preference Center - Reject All", R[R["Preference Center - Confirm"] = 6] = "Preference Center - Confirm", (E = P = P || {}).Active = "1", E.InActive = "0", (B = _ = _ || {}).Host = "Host", B.GenVendor = "GenVen", (G = O = O || {})[G.Host = 1] = "Host", G[G.GenVen = 2] = "GenVen", G[G.HostAndGenVen = 3] = "HostAndGenVen", (k = U = U || {})[k.minDays = 1] = "minDays", k[k.maxDays = 30] = "maxDays", k[k.maxYear = 31536e3] = "maxYear", k[k.maxSecToDays = 86400] = "maxSecToDays", (F = N = N || {})[F.RTL = 0] = "RTL", F[F.LTR = 1] = "LTR", (V = M = M || {})[V.GoogleVendor = 1] = "GoogleVendor", V[V.GeneralVendor = 2] = "GeneralVendor", (H = x = x || {})[H.Days = 1] = "Days", H[H.Weeks = 7] = "Weeks", H[H.Months = 30] = "Months", H[H.Years = 365] = "Years", (q = j = j || {}).Checkbox = "Checkbox", q.Toggle = "Toggle", (W = z = z || {}).SlideIn = "Slide_In", W.FadeIn = "Fade_In", W.RemoveAnimation = "Remove_Animation", (J = K = K || {}).Link = "Link", J.Icon = "Icon", (Q = Y = Y || {}).consent = "consent", Q.set = "set", (Z = X = X || {}).update = "update", Z.default = "default", Z.ads_data_redaction = "ads_data_redaction", (ee = $ = $ || {}).analytics_storage = "analytics_storage", ee.ad_storage = "ad_storage", ee.functionality_storage = "functionality_storage", ee.personalization_storage = "personalization_storage", ee.security_storage = "security_storage", ee.region = "region", ee.wait_for_update = "wait_for_update", (ne = te = te || {}).granted = "granted", ne.denied = "denied", (ae = ie = ie || {})[ae.HostList = 0] = "HostList", ae[ae.IabVendors = 1] = "IabVendors", ae[ae.VendorServices = 2] = "VendorServices", (re = oe = oe || {}).OBJECT_TO_LI = "ObjectToLI", re.LI_ACTIVE_IF_LEGAL_BASIS = "LIActiveIfLegalBasis", (le = se = se || {}).cookies = "cookies", le.vendors = "vendors", (pe = ce = ce || {}).GDPR = "GDPR", pe.IAB = "IAB", pe.CCPA = "CCPA", pe.IAB2 = "IAB2", pe.GENERIC = "GENERIC", pe.LGPD = "LGPD", pe.GENERIC_PROMPT = "GENERIC_PROMPT", pe.CPRA = "CPRA", pe.CDPA = "CDPA", pe.USNATIONAL = "USNATIONAL", pe.CUSTOM = "CUSTOM", (de = ue = ue || {}).Name = "OTGPPConsent", de[de.ChunkSize = 4e3] = "ChunkSize", de.ChunkCountParam = "GPPCookiesCount", de[de.ReconsentFrequencyDate = 365] = "ReconsentFrequencyDate", (he = me = me || {}).MspaCoveredTransaction = "IsMSPAEnabled", he.MspaOptOutOptionMode = "Opt Out", he.MspaServiceProviderMode = "Service Provider", (fe = ge = ge || {}).MspaCoveredTransaction = "MspaCoveredTransaction", fe.MspaOptOutOptionMode = "MspaOptOutOptionMode", fe.MspaServiceProviderMode = "MspaServiceProviderMode", (Ae = ve = ve || {}).CPRA = "uspcav1", Ae.CCPA = "uspcav1", Ae.CDPA = "uspvav1", (Ce = be = be || {})[Ce.CPRA = 8] = "CPRA", Ce[Ce.CCPA = 8] = "CCPA", Ce[Ce.CDPA = 9] = "CDPA", (Ie = ye = ye || {})[Ie.NotApplicable = 0] = "NotApplicable", Ie[Ie.Yes = 1] = "Yes", Ie[Ie.No = 2] = "No", (Le = Se = Se || {})[Le.CmpId = 28] = "CmpId", Le[Le.CmpVersion = 1] = "CmpVersion";
    var we, Re, Pe, Ee, _e = "geo",
        Be = "otpreview",
        Oe = (ue.Name, "PRODUCTION"),
        Ge = ((Te = {})[x.Days] = "PCenterVendorListLifespanDay", Te[x.Weeks] = "LfSpnWk", Te[x.Months] = "PCenterVendorListLifespanMonth", Te[x.Years] = "LfSpnYr", Ue.prototype.camelize = function(e) {
            return e.split("-").map(function(e, t) {
                return 0 === t ? e : e[0].toUpperCase() + e.slice(1)
            }).join("")
        }, Ue.prototype.strToObj = function(e) {
            for (var t = {}, n = e.split(";").map(function(e) {
                    return e.trim()
                }), i = 0, a = void 0; i < n.length; ++i)
                if (/:/.test(n[i])) {
                    if (!(a = n[i].split(/:(.+)/))[1]) return null;
                    t[this.camelize(a[0])] = a[1].trim()
                }
            return t
        }, Ue);

    function Ue() {
        var e = this;
        this.implementThePolyfill = function() {
            var a = e,
                o = Element.prototype.setAttribute;
            return Element.prototype.setAttribute = function(e, t) {
                if ("style" !== e.toLowerCase() && o.apply(this, [e, t]), "style" !== e.toLowerCase() || t || this.removeAttribute("style"), "style" === e.toLowerCase() && t) {
                    this.removeAttribute("style");
                    var n = a.strToObj(t);
                    for (var i in n) this.style[i] = n[i]
                }
            }, !0
        }
    }

    function ke(e, t, n) {
        void 0 === n && (n = !1);

        function i(e) {
            if (!e) return null;
            var t = e.trim();
            return ";" !== t.charAt(t.length - 1) && (t += ";"), t.trim()
        }
        var o = i(e.getAttribute("style")),
            r = i(t),
            a = "";
        a = n && o ? function() {
            for (var e = o.split(";").concat(r.split(";")).filter(function(e) {
                    return 0 !== e.length
                }), t = "", n = "", i = e.length - 1; 0 <= i; i--) {
                var a = e[i].substring(0, e[i].indexOf(":") + 1).trim();
                t.indexOf(a) < 0 && (t += a, n += e[i] + ";")
            }
            return n
        }() : r, e.setAttribute("style", a)
    }(Re = we = we || {})[Re.ACTIVE = 0] = "ACTIVE", Re[Re.ALWAYS_ACTIVE = 1] = "ALWAYS_ACTIVE", Re[Re.EXPIRED = 2] = "EXPIRED", Re[Re.NO_CONSENT = 3] = "NO_CONSENT", Re[Re.OPT_OUT = 4] = "OPT_OUT", Re[Re.PENDING = 5] = "PENDING", Re[Re.WITHDRAWN = 6] = "WITHDRAWN", (Ee = Pe = Pe || {}).ping = "ping", Ee.addEventListener = "addEventListener", Ee.removeEventListener = "removeEventListener", Ee.hasSection = "hasSection", Ee.getSection = "getSection", Ee.getField = "getField", Ee.getGPPData = "getGPPData";
    var Ne = new function() {
        var r = this;
        this.LOCATOR_NAME = "__gppLocator", this.win = window, this.init = function() {
            r.win.__gpp && "function" == typeof r.win.__gpp || (r.win.__gpp = r.executeGppApi, window.addEventListener("message", r.messageHandler, !1), r.addFrame(r.LOCATOR_NAME))
        }, this.removeGppApi = function() {
            delete r.win.__gpp;
            var e = document.querySelectorAll("iframe[name=" + r.LOCATOR_NAME + "]")[0];
            e && e.parentElement.removeChild(e)
        }, this.executeGppApi = function() {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            if (!t.length) return (null === (e = r.win) || void 0 === e ? void 0 : e.__gpp).queue || [];
            var i = t[0],
                a = 1 < t.length ? t[1] : null,
                o = 2 < t.length ? t[2] : null;
            switch (i) {
                case Pe.ping:
                    return r.getPingRequest();
                case Pe.addEventListener:
                    return r.addEventListener(a, o);
                case Pe.removeEventListener:
                    return r.removeEventListener(o);
                case Pe.hasSection:
                case Pe.getSection:
                case Pe.getField:
                case Pe.getGPPData:
                    return null;
                default:
                    return void r.addToQueue(i, a, o)
            }
        }, this.getPingRequest = function() {
            return {
                gppVersion: 1,
                cmpStatus: "stub",
                cmpDisplayStatus: "hidden",
                apiSupport: ["uspcav1", "uspvav1"],
                currentAPI: "",
                cmpId: 28
            }
        }, this.addFrame = function(e) {
            var t = r.win.document,
                n = Boolean(r.win.frames[e]);
            if (!n)
                if (t.body) {
                    var i = t.createElement("iframe");
                    i.style.cssText = "display:none", i.name = e, i.setAttribute("title", "GPP Locator"), t.body.appendChild(i)
                } else setTimeout(function() {
                    r.addFrame(e)
                }, 5);
            return !n
        }, this.addEventListener = function(e, t) {
            var n = r.win.__gpp;
            return n.events = n.events || [], null != n && n.lastId || (n.lastId = 0), n.lastId++, n.events.push({
                id: n.lastId,
                callback: e,
                parameter: t
            }), {
                eventName: "listenerRegistered",
                listenerId: n.lastId,
                data: !0
            }
        }, this.removeEventListener = function(t) {
            var n = !1,
                e = r.win.__gpp;
            return e.events = e.events || [], e.events = e.events.filter(function(e) {
                return e.id.toString() !== t.toString() || !(n = !0)
            }), {
                eventName: "listenerRemoved",
                listenerId: t,
                data: n
            }
        }, this.addToQueue = function(e, t, n) {
            var i = r.win.__gpp;
            i.queue = i.queue || [], i.queue.push([e, t, n])
        }, this.messageHandler = function(i) {
            var t, a = "string" == typeof i.data;
            try {
                t = a ? JSON.parse(i.data) : i.data
            } catch (e) {
                t = null
            }
            if (t && t.__gppCall) {
                var o = t.__gppCall;
                (0, r.win.__gpp)(o.command, function(e, t) {
                    var n = {
                        __gppReturn: {
                            returnValue: e,
                            success: t,
                            callId: o.callId
                        }
                    };
                    i.source.postMessage(a ? JSON.stringify(n) : n, i.source || "*")
                }, o.parameter)
            }
        }
    };
    Ne.init();
    var Fe = (Me.prototype.initConsentSDK = function() {
        this.initCustomEventPolyfill(), this.ensureHtmlGroupDataInitialised(), this.setStubScriptElement(), this.setOTDataLayer(), this.getParam(), this.fetchBannerSDKDependency(), this.captureNonce()
    }, Me.prototype.captureNonce = function() {
        this.nonce = De.stubScriptElement.nonce || De.stubScriptElement.getAttribute("nonce") || null
    }, Me.prototype.fetchBannerSDKDependency = function() {
        this.setDomainDataFileURL(), this.crossOrigin = De.stubScriptElement.getAttribute("crossorigin") || null, this.previewMode = "true" === De.stubScriptElement.getAttribute("data-preview-mode"), this.otFetch(De.bannerDataParentURL, this.getLocation.bind(this))
    }, Me.prototype.setDomainIfBulkDomainEnabled = function(e) {
        var t = e && e.TenantFeatures,
            n = window.location.hostname,
            i = e.Domain,
            a = e.BulkDomainCheckUrl;
        if (t && t.CookieV2BulkDomainManagement && n !== i && e.ScriptType === Oe) {
            var o = window.sessionStorage;
            if (o && o.getItem("bulkDomainMgmtEnabled")) this.handleBulkDomainMgmt({
                isValid: "true" === window.sessionStorage.getItem("bulkDomainMgmtEnabled")
            }, e);
            else {
                var r = {
                    location: De.storageBaseURL.replace(/^https?:\/\//, ""),
                    domainId: this.domainId,
                    url: n
                };
                this.otFetch(a, this.handleBulkDomainMgmt, !1, r, e)
            }
        }
    }, Me.prototype.getLocation = function(e) {
        if (this.setDomainIfBulkDomainEnabled(e), (e.TenantFeatures && e.TenantFeatures.CookieV2CSP || e.CookieV2CSPEnabled) && this.nonce && (this.setAttributePolyfillIsActive = !0, (new Ge).implementThePolyfill()), !e.RuleSet[0].Type) return this.iabTypeAdded = !1, window.__cmp = this.executeCmpApi, window.__tcfapi = this.executeTcfApi, this.intializeIabStub(), this.addBannerSDKScript(e);
        var t = window;
        if (t.OneTrust && t.OneTrust.geolocationResponse) {
            var n = t.OneTrust.geolocationResponse;
            this.setGeoLocation(n.countryCode, n.stateCode), this.addBannerSDKScript(e)
        } else {
            var i = this.readCookieParam(De.optanonCookieName, De.geolocationCookiesParam);
            if (i || e.SkipGeolocation) {
                var a = i.split(";")[0],
                    o = i.split(";")[1];
                this.setGeoLocation(a, o), this.addBannerSDKScript(e)
            } else this.getGeoLocation(e)
        }
    }, Me.prototype.handleBulkDomainMgmt = function(e, t) {
        window.sessionStorage && window.sessionStorage.setItem("bulkDomainMgmtEnabled", JSON.stringify(e.isValid)), e.isValid && (t.Domain = window.location.hostname)
    }, Me.prototype.getGeolocationURL = function(e) {
        e.TenantFeatures;
        var t = "" + De.stubScriptElement.getAttribute("src").split(De.stubFileName)[0] + e.Version;
        if (new RegExp("^file://", "i").test(t) && e.MobileSDK) {
            var n = "/" + e.GeolocationUrl.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/") + ".js";
            return De.storageBaseURL + n
        }
        return e.GeolocationUrl
    }, Me.prototype.geoLocationJsonCallback = function(e, t) {
        t && this.setGeoLocation(t.country, t.state), this.addBannerSDKScript(e)
    }, Me.prototype.getGeoLocation = function(e) {
        var t = this.getGeolocationURL(e);
        this.otFetch(t, this.geoLocationJsonCallback.bind(this, e), !0)
    }, Me.prototype.setOTDataLayer = function() {
        var e = "data-dLayer-ignore",
            t = De.stubScriptElement.hasAttribute(e),
            n = De.stubScriptElement.getAttribute(e),
            i = t && "true" === n || t && "" === n;
        this.otDataLayer = {
            ignore: i,
            name: De.stubScriptElement.getAttribute("data-dLayer-name") || "dataLayer"
        }
    }, Me.prototype.setGeoLocation = function(e, t) {
        void 0 === t && (t = ""), De.userLocation = {
            country: e,
            state: t
        }
    }, Me.prototype.otFetch = function(e, n, t, i, a) {
        void 0 === t && (t = !1), void 0 === i && (i = null);
        var o = window.sessionStorage && window.sessionStorage.getItem("otPreviewData");
        if (new RegExp("^file://", "i").test(e)) this.otFetchOfflineFile(e, n);
        else if (0 <= e.indexOf("/consent/") && this.previewMode && o) {
            var r = JSON.parse(o).domainJson;
            n(r)
        } else {
            De.mobileOnlineURL.push(e);
            var s = new XMLHttpRequest;
            if (s.onload = function(e) {
                    var t;
                    this && this.responseText ? t = this.responseText : e && e.target && (t = e.target.responseText), a ? n(JSON.parse(t), a) : n(JSON.parse(t))
                }, s.onerror = function() {
                    n()
                }, s.open("GET", e), t && s.setRequestHeader("accept", "application/json"), i)
                for (var l in i) s.setRequestHeader(l, i[l]);
            s.send()
        }
    }, Me.prototype.otFetchOfflineFile = function(e, t) {
        var n = (e = e.replace(".json", ".js")).split("/"),
            i = n[n.length - 1].split(".js")[0];
        this.jsonp(e, function() {
            t(window[i])
        })
    }, Me.prototype.jsonp = function(e, t) {
        var n = document.createElement("script");
        n.setAttribute("src", e), this.nonce && n.setAttribute("nonce", this.nonce), n.async = !0, n.type = "text/javascript", this.crossOrigin && n.setAttribute("crossorigin", this.crossOrigin), document.getElementsByTagName("head")[0].appendChild(n), new RegExp("^file://", "i").test(e) || De.mobileOnlineURL.push(e), t && (n.onload = n.onerror = function() {
            t()
        })
    }, Me.prototype.getRegionSet = function(e) {
        var t, n, i, a = De.userLocation,
            o = e.RuleSet.filter(function(e) {
                return !0 === e.Default
            });
        if (!a.country && !a.state) return o && 0 < o.length ? o[0] : null;
        for (var r = a.state.toLowerCase(), s = a.country.toLowerCase(), l = 0; l < e.RuleSet.length; l++)
            if (!0 === e.RuleSet[l].Global) i = e.RuleSet[l];
            else {
                var c = e.RuleSet[l].States;
                if (c[s] && 0 <= c[s].indexOf(r)) {
                    n = e.RuleSet[l];
                    break
                }
                0 <= e.RuleSet[l].Countries.indexOf(s) && (t = e.RuleSet[l])
            }
        return n || t || i
    }, Me.prototype.ensureHtmlGroupDataInitialised = function() {
        this.initializeIABData(), this.initializeGroupData(), this.initializeHostData(), this.initializeGenVenData()
    }, Me.prototype.initializeGroupData = function() {
        var e = this.readCookieParam(De.optanonCookieName, "groups");
        e && (De.optanonHtmlGroupData = this.deserialiseStringToArray(e))
    }, Me.prototype.initializeHostData = function() {
        var e = this.readCookieParam(De.optanonCookieName, "hosts");
        e && (De.optanonHostData = this.deserialiseStringToArray(e))
    }, Me.prototype.initializeGenVenData = function() {
        var e = this.readCookieParam(De.optanonCookieName, "genVendors");
        e && (De.genVendorsData = this.deserialiseStringToArray(e))
    }, Me.prototype.initializeIABData = function() {
        this.validateIABGDPRApplied(), this.validateIABGlobalScope()
    }, Me.prototype.validateIABGlobalScope = function() {
        var e = this.readCookieParam(De.optanonCookieName, De.oneTrustIsIABCrossConsentEnableParam);
        e ? "true" === e ? (De.hasIABGlobalScope = !0, De.isStubReady = !1) : (De.hasIABGlobalScope = !1, De.IABCookieValue = this.getCookie(De.oneTrustIABCookieName)) : De.isStubReady = !1
    }, Me.prototype.validateIABGDPRApplied = function() {
        var e = this.readCookieParam(De.optanonCookieName, De.geolocationCookiesParam).split(";")[0];
        e ? this.isBoolean(e) ? De.oneTrustIABgdprAppliesGlobally = "true" === e : De.oneTrustIABgdprAppliesGlobally = 0 <= De.EUCOUNTRIES.indexOf(e) : De.isStubReady = !1
    }, Me.prototype.isBoolean = function(e) {
        return "true" === e || "false" === e
    }, Me.prototype.readCookieParam = function(e, t) {
        var n, i, a, o, r = this.getCookie(e);
        if (r) {
            for (i = {}, a = r.split("&"), n = 0; n < a.length; n += 1) o = a[n].split("="), i[decodeURIComponent(o[0])] = decodeURIComponent(o[1]).replace(/\+/g, " ");
            return t && i[t] ? i[t] : t && !i[t] ? "" : i
        }
        return ""
    }, Me.prototype.getCookie = function(e) {
        if (this.isAmp) {
            var t = JSON.parse(window.localStorage.getItem(this.domainId)) || {};
            if (t) return t[e] || null
        }
        var n, i, a = e + "=",
            o = document.cookie.split(";");
        for (n = 0; n < o.length; n += 1) {
            for (i = o[n];
                " " == i.charAt(0);) i = i.substring(1, i.length);
            if (0 == i.indexOf(a)) return i.substring(a.length, i.length)
        }
        return null
    }, Me.prototype.updateGtmMacros = function() {
        var e, t = [],
            n = De.optanonHtmlGroupData.length;
        for (e = 0; e < n; e++) this.endsWith(De.optanonHtmlGroupData[e], ":1") && t.push(De.optanonHtmlGroupData[e].replace(":1", ""));
        for (n = De.optanonHostData.length, e = 0; e < n; e++) this.endsWith(De.optanonHostData[e], ":1") && t.push(De.optanonHostData[e].replace(":1", ""));
        for (n = De.genVendorsData.length, e = 0; e < n; e++) this.endsWith(De.genVendorsData[e], ":1") && t.push(De.genVendorsData[e].replace(":1", ""));
        for (n = De.vendorsServiceData.length, e = 0; e < n; e++) this.endsWith(De.vendorsServiceData[e], ":1") && t.push(De.vendorsServiceData[e].replace(":1", ""));
        var i = "," + this.serialiseArrayToString(t) + ",";
        window.OnetrustActiveGroups = i, window.OptanonActiveGroups = i;
        var a = window;
        this.otDataLayer.ignore || void 0 === a[this.otDataLayer.name] ? this.otDataLayer.ignore || (a[this.otDataLayer.name] = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: i
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: i
        }]) : a[this.otDataLayer.name].constructor === Array && (a[this.otDataLayer.name].push({
            OnetrustActiveGroups: i
        }), a[this.otDataLayer.name].push({
            OptanonActiveGroups: i
        }));
        var o, r = new CustomEvent("consent.onetrust", {
            detail: t
        });
        !this.otDataLayer.ignore && t.length && (a[this.otDataLayer.name].constructor === Array && a[this.otDataLayer.name].push({
            event: "OneTrustGroupsUpdated",
            OnetrustActiveGroups: i
        }), o = new CustomEvent("OneTrustGroupsUpdated", {
            detail: t
        })), setTimeout(function() {
            t.length && window.dispatchEvent(r), o && window.dispatchEvent(o)
        })
    }, Me.prototype.deserialiseStringToArray = function(e) {
        return e ? e.split(",") : []
    }, Me.prototype.endsWith = function(e, t) {
        return -1 !== e.indexOf(t, e.length - t.length)
    }, Me.prototype.serialiseArrayToString = function(e) {
        return e.toString()
    }, Me.prototype.setStubScriptElement = function() {
        De.stubScriptElement = document.querySelector("script[src*='" + De.stubFileName + "']");
        var e = De.stubScriptElement && 0 <= De.stubScriptElement.getAttribute("src").indexOf("did=");
        De.stubScriptElement && De.stubScriptElement.hasAttribute(De.DATAFILEATTRIBUTE) ? this.domainId = De.stubScriptElement.getAttribute(De.DATAFILEATTRIBUTE).trim() : e ? this.domainId = De.stubScriptElement.getAttribute("src").split("did=")[1] : De.stubScriptElement || (De.stubScriptElement = document.querySelector("script[src*='" + De.migratedCCTID + "']"), De.stubScriptElement && (De.isMigratedURL = !0, this.domainId = De.migratedDomainId.trim()))
    }, Me.prototype.setDomainDataFileURL = function() {
        var e = De.stubScriptElement.getAttribute("src"),
            t = -1 < e.indexOf("/consent");
        e && (De.isMigratedURL ? De.storageBaseURL = e.split("/consent/" + De.migratedCCTID)[0] : De.storageBaseURL = t ? e.split("/consent")[0] : e.split("/scripttemplates/" + De.stubFileName)[0]), this.storageBaseURL = De.storageBaseURL, this.isPreview && -1 === this.domainId.indexOf("test") ? this.domainId = this.domainId + "-test" : this.isPreview = !1, De.bannerBaseDataURL = De.storageBaseURL && De.storageBaseURL + "/consent/" + this.domainId, De.bannerDataParentURL = De.bannerBaseDataURL + "/" + this.domainId + ".json"
    }, Me.prototype.initCustomEventPolyfill = function() {
        if ("function" == typeof window.CustomEvent) return !1;

        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        }
        e.prototype = window.Event.prototype, window.CustomEvent = e
    }, Me.prototype.removeTcf = function() {
        delete window.__tcfapi;
        var e = document.querySelectorAll("iframe[name='__tcfapiLocator']")[0];
        e && e.parentElement.removeChild(e)
    }, Me.prototype.getParamForIE = function() {
        return {
            get: function(e) {
                var t = new RegExp("[?&]" + e + "=([^&#]*)").exec(window.location.search);
                return null === t ? null : decodeURI(t[1]) || ""
            }
        }
    }, Me.prototype.getParam = function() {
        window.document.documentMode || !window.URLSearchParams ? this.urlParams = this.getParamForIE() : this.urlParams = new URLSearchParams(window.location.search);
        var e = "true" === this.urlParams.get("otreset"),
            t = "true" === this.urlParams.get("otpreview");
        this.geoFromUrl = (this.urlParams.get("otgeo") || "").toLowerCase();
        var n = this.readCookieParam(Be, "expiry"),
            i = this.readCookieParam(Be, _e);
        this.isReset = e || n && new Date(n) < new Date, this.isPreview = !this.isReset && (t || n && new Date(n) > new Date), this.setGeoParam(this.geoFromUrl || i)
    }, Me.prototype.setGeoParam = function(e) {
        if (e) {
            var t = window;
            t.OneTrust || (t.OneTrust = {});
            var n = e.split(",");
            t.OneTrust.geolocationResponse = {
                countryCode: n[0],
                stateCode: n[1]
            }
        }
    }, Me);

    function Me() {
        var c = this;
        this.iabType = null, this.iabTypeAdded = !0, this.crossOrigin = null, this.isAmp = !1, this.domainId = "", this.isReset = !1, this.isPreview = !1, this.geoFromUrl = "", this.nonce = "", this.setAttributePolyfillIsActive = !1, this.storageBaseURL = "", this.charset = null, this.addBannerSDKScript = function(e) {
            var t = c.getRegionSet(e);
            t.GCEnable || (c.updateGtmMacros(), c.gtmUpdated = !0), c.iabTypeAdded && ("IAB" !== t.Type && "IAB2" !== t.Type || (c.iabType = t.Type, c.intializeIabStub()), "IAB2" !== t.Type && c.removeTcf()), t.IsGPPEnabled ? Ne.init() : Ne.removeGppApi();
            var n = De.stubScriptElement.cloneNode(!0),
                i = "";
            i = e.UseSDKRefactor ? (De.isMigratedURL && (n.src = De.storageBaseURL + "/scripttemplates/new/scripttemplates/" + De.stubFileName + ".js"), De.storageBaseURL + "/scripttemplates/new/scripttemplates/" + e.Version + "/" + De.bannerScriptName) : "5.11.0" === e.Version ? (De.isMigratedURL && (n.src = De.storageBaseURL + "/scripttemplates/old/scripttemplates/" + De.stubFileName + ".js"), De.storageBaseURL + "/scripttemplates/old/scripttemplates/5.11.0/" + De.bannerScriptName) : (De.isMigratedURL && (n.src = De.storageBaseURL + "/scripttemplates/" + De.stubFileName + ".js"), De.storageBaseURL + "/scripttemplates/" + e.Version + "/" + De.bannerScriptName);
            ["charset", "data-language", "data-document-language", "data-domain-script", "crossorigin", "data-ignore-ga"].forEach(function(e) {
                De.stubScriptElement.getAttribute(e) && n.setAttribute(e, De.stubScriptElement.getAttribute(e))
            }), c.charset = De.stubScriptElement.getAttribute("charset"), c.isAmp = !!De.stubScriptElement.getAttribute("amp"), window.otStubData = {
                bannerBaseDataURL: De.bannerBaseDataURL,
                crossOrigin: c.crossOrigin,
                domainData: e,
                domainId: c.domainId,
                geoFromUrl: c.geoFromUrl,
                isAmp: c.isAmp,
                isPreview: c.isPreview,
                isReset: c.isReset,
                mobileOnlineURL: De.mobileOnlineURL,
                nonce: c.nonce,
                otDataLayer: c.otDataLayer,
                regionRule: t,
                setAttributePolyfillIsActive: c.setAttributePolyfillIsActive,
                storageBaseURL: c.storageBaseURL,
                stubElement: n,
                urlParams: c.urlParams,
                userLocation: De.userLocation,
                gtmUpdated: c.gtmUpdated,
                previewMode: c.previewMode,
                charset: c.charset
            }, c.jsonp(i, null)
        }, this.intializeIabStub = function() {
            var e = window;
            c.iabTypeAdded ? ("IAB" === c.iabType ? void 0 === e.__cmp && (window.__cmp = c.executeCmpApi) : void 0 === e.__tcfapi && (window.__tcfapi = c.executeTcfApi), c.addIabFrame()) : c.addBackwardIabFrame(), e.receiveOTMessage = c.receiveIabMessage, (e.attachEvent || window.addEventListener)("message", e.receiveOTMessage, !1)
        }, this.addIabFrame = function() {
            var e = window,
                t = "IAB" === c.iabType ? "__cmpLocator" : "__tcfapiLocator";
            !e.frames[t] && (e.document.body ? c.addLocator(t, "CMP") : setTimeout(c.addIabFrame, 5))
        }, this.addBackwardIabFrame = function() {
            var e = window,
                t = "__cmpLocator";
            !e.frames[t] && (e.document.body ? c.addLocator(t, "CMP") : setTimeout(c.addIabFrame, 5));
            var n = "__tcfapiLocator";
            !e.frames[n] && (e.document.body ? c.addLocator(n, "TCF") : setTimeout(c.addIabFrame, 5))
        }, this.addLocator = function(e, t) {
            var n = window,
                i = n.document.createElement("iframe");
            ke(i, "display: none;", !0), i.name = e, i.setAttribute("title", t + " Locator"), n.document.body.appendChild(i)
        }, this.receiveIabMessage = function(i) {
            var a = "string" == typeof i.data,
                e = {};
            try {
                e = a ? JSON.parse(i.data) : i.data
            } catch (e) {}
            if (e.__cmpCall && "IAB" === c.iabType) {
                var o = e.__cmpCall.callId,
                    r = e.__cmpCall.command,
                    t = e.__cmpCall.parameter;
                c.executeCmpApi(r, t, function(e, t) {
                    var n = {
                        __cmpReturn: {
                            returnValue: e,
                            success: t,
                            callId: o,
                            command: r
                        }
                    };
                    i.source.postMessage(a ? JSON.stringify(n) : n, i.origin)
                })
            } else e.__cmpCall && "IAB2" === c.iabType && console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1");
            if (e.__tcfapiCall && "IAB2" === c.iabType) {
                var s = e.__tcfapiCall.callId,
                    l = e.__tcfapiCall.command,
                    n = (t = e.__tcfapiCall.parameter, e.__tcfapiCall.version);
                c.executeTcfApi(l, t, function(e, t) {
                    var n = {
                        __tcfapiReturn: {
                            returnValue: e,
                            success: t,
                            callId: s,
                            command: l
                        }
                    };
                    i && i.source && i.source.postMessage && i.source.postMessage(a ? JSON.stringify(n) : n, "*")
                }, n)
            } else e.__tcfapiCall && "IAB" === c.iabType && console.log("Expecting IAB TCF v1.1 vendor iFrame call; Received IAB TCF v2.0")
        }, this.executeCmpApi = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            c.iabType = "IAB";
            var n = e[0],
                i = e[1],
                a = e[2];
            if ("function" == typeof a && n)
                if (De.isStubReady && De.IABCookieValue) switch (n) {
                    case "ping":
                        c.getPingRequest(a, !0);
                        break;
                    case "getConsentData":
                        c.getConsentDataRequest(a);
                        break;
                    default:
                        c.addToQueue(n, i, a)
                } else c.addToQueue(n, i, a)
        }, this.executeTcfApi = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            if (c.iabType = "IAB2", !e.length) return window.__tcfapi.a || [];
            var n = e[0],
                i = e[1],
                a = e[2],
                o = e[3];
            "function" == typeof a && n && ("ping" === n ? c.getPingRequest(a) : c.addToQueue(n, i, a, o))
        }, this.addToQueue = function(e, t, n, i) {
            var a = window,
                o = "IAB" === c.iabType ? "__cmp" : "__tcfapi";
            a[o].a = a[o].a || [], a[o].a.push([e, t, n, i])
        }, this.getPingRequest = function(e, t) {
            if (void 0 === t && (t = !1), e) {
                var n = {},
                    i = !1;
                "IAB" === c.iabType ? (n = {
                    gdprAppliesGlobally: De.oneTrustIABgdprAppliesGlobally,
                    cmpLoaded: t
                }, i = !0) : "IAB2" === c.iabType && (n = {
                    gdprApplies: De.oneTrustIABgdprAppliesGlobally,
                    cmpLoaded: !1,
                    cmpStatus: "stub",
                    displayStatus: "stub",
                    apiVersion: "2.0",
                    cmpVersion: void 0,
                    cmpId: void 0,
                    gvlVersion: void 0,
                    tcfPolicyVersion: void 0
                }, i = !0), e(n, i)
            }
        }, this.getConsentDataRequest = function(e) {
            e && De.IABCookieValue && e({
                gdprApplies: De.oneTrustIABgdprAppliesGlobally,
                hasGlobalScope: De.hasIABGlobalScope,
                consentData: De.IABCookieValue
            }, !0)
        }, this.initConsentSDK()
    }
    var Ve = new Fe;
    return e.OtSDKStub = Fe, e.otSdkStub = Ve, e
}({});