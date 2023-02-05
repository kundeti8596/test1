// Copyright 2012 Google Inc. All rights reserved.
(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');
(function() {

    var data = {
        "resource": {
            "version": "30",

            "macros": [{
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-37745279-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoTitle",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoStatus",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoPercent",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 7], 8, 16], ";switch(a){case \"start\":return\"Play\";case \"pause\":return\"Pause\";case \"seek\":return\"Seeking\";case \"progress\":return+", ["escape", ["macro", 8], 8, 16], "+\"% Watched\";case \"complete\":return\"100% Watched\"}})();"]
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "URL",
                "vtp_component": "IS_OUTBOUND",
                "vtp_affiliatedDomains": "https:\/\/www.csedweek.org\/"
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoProvider",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoDuration",
                "vtp_dataLayerVersion": 1
            }],
            "tags": [{
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "educate-pl-2018",
                "vtp_eventLabel": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 4
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "courses-teacher",
                "vtp_eventLabel": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 5
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "homepage",
                "vtp_eventLabel": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 6
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "regional-partner-search",
                "vtp_eventLabel": ["template", "click - ", ["macro", 4]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 7
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "regional-partner-search",
                "vtp_eventLabel": ["template", "view - ", ["macro", 4]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 8
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "middle-high",
                "vtp_eventLabel": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 9
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "pd-mini-contact",
                "vtp_eventLabel": ["template", "view - ", ["macro", 4]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 10
            }, {
                "function": "__paused",
                "vtp_originalTagType": "gclidw",
                "tag_id": 11
            }, {
                "function": "__paused",
                "vtp_originalTagType": "awct",
                "tag_id": 12
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "youtubeStatus",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": ["macro", 6],
                "vtp_eventLabel": ["macro", 7],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 13
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "youtubeProgress",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": ["macro", 6],
                "vtp_eventLabel": ["macro", 8],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 14
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "homepage",
                "vtp_eventLabel": "go-beyond-announcement",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 15
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "homepage",
                "vtp_eventLabel": "teacher-apps-open-announcement-2020",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 16
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "courses",
                "vtp_eventLabel": "teacher-apps-open-announcement-2020",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 17
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "privacy link clicks",
                "vtp_eventLabel": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 50
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "beyond",
                "vtp_eventLabel": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 52
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "careers-with-cs",
                "vtp_eventLabel": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 54
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "csjourneys",
                "vtp_eventLabel": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 56
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "athome",
                "vtp_eventLabel": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 58
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "csleaders",
                "vtp_eventLabel": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 62
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "8381446_12",
                "tag_id": 63
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "8381446_16",
                "tag_id": 64
            }, {
                "function": "__cl",
                "tag_id": 65
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "8381446_19",
                "tag_id": 66
            }, {
                "function": "__cl",
                "tag_id": 67
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": ".professional_learning_information",
                "vtp_firingFrequency": "ONCE_PER_ELEMENT",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "8381446_22",
                "tag_id": 68
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "8381446_23",
                "tag_id": 69
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "8381446_26",
                "tag_id": 70
            }, {
                "function": "__fsl",
                "vtp_waitForTags": true,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "8381446_27",
                "tag_id": 71
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": ".regional-partner-mini-contact-form",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "8381446_29",
                "tag_id": 72
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": ".regional-partner-mini-contact-thanks",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "8381446_30",
                "tag_id": 73
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": ".regional-partner-mini-contact-form",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "8381446_32",
                "tag_id": 74
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": ".regional-partner-mini-contact-thanks",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "8381446_33",
                "tag_id": 75
            }, {
                "function": "__ytl",
                "vtp_progressThresholdsPercent": "10, 25, 50, 75",
                "vtp_captureComplete": true,
                "vtp_captureStart": true,
                "vtp_fixMissingApi": true,
                "vtp_triggerStartOption": "DOM_READY",
                "vtp_radioButtonGroup1": "PERCENTAGE",
                "vtp_capturePause": true,
                "vtp_captureProgress": true,
                "vtp_uniqueTriggerId": "8381446_37",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 76
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "8381446_39",
                "tag_id": 77
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "8381446_43",
                "tag_id": 78
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "8381446_45",
                "tag_id": 79
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "8381446_49",
                "tag_id": 80
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "8381446_51",
                "tag_id": 81
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "8381446_53",
                "tag_id": 82
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "8381446_55",
                "tag_id": 83
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "8381446_57",
                "tag_id": 84
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "8381446_60",
                "tag_id": 85
            }],
            "predicates": [{
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "pl-2018-link"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.linkClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_12($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "linktag"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_16($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "clicktag"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "\/courses"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.click"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_19($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 5],
                "arg1": "\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "professional_learning_link"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_23($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "\/educate\/professional-learning\/program-information"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.elementVisibility"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_22($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_26($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.formSubmit"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_27($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "\/educate\/professional-learning"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_29($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_30($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "\/pd\/application\/teacher"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_32($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_33($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.video"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_37($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 4],
                "arg1": "go-beyond-learn-more-button"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_39($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 4],
                "arg1": "teacher-apps-open-2020-sign-up"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "studio.code.org\/home"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_43($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "studio.code.org\/courses"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_45($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_49($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_51($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_53($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_55($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_57($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)8381446_60($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "\/educate\/professional-learning-2018"
            }, {
                "function": "_eq",
                "arg0": ["macro", 5],
                "arg1": "\/educate\/professional-learning\/middle-high"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.dom"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "\/manage_students"
            }, {
                "function": "_cn",
                "arg0": ["macro", 4],
                "arg1": "uitest-privacy-link"
            }, {
                "function": "_sw",
                "arg0": ["macro", 5],
                "arg1": "\/beyond"
            }, {
                "function": "_sw",
                "arg0": ["macro", 5],
                "arg1": "\/careers-with-cs"
            }, {
                "function": "_sw",
                "arg0": ["macro", 5],
                "arg1": "\/csjourneys"
            }, {
                "function": "_sw",
                "arg0": ["macro", 5],
                "arg1": "\/athome"
            }, {
                "function": "_sw",
                "arg0": ["macro", 5],
                "arg1": "\/prize"
            }],
            "rules": [
                [
                    ["if", 0, 1, 2],
                    ["add", 0]
                ],
                [
                    ["if", 1, 3, 4],
                    ["add", 1]
                ],
                [
                    ["if", 5, 6, 7],
                    ["add", 1]
                ],
                [
                    ["if", 1, 3, 8],
                    ["add", 2]
                ],
                [
                    ["if", 5, 7, 9],
                    ["add", 2]
                ],
                [
                    ["if", 1, 10, 11],
                    ["add", 3]
                ],
                [
                    ["if", 12, 13, 14],
                    ["add", 4]
                ],
                [
                    ["if", 1, 3, 15],
                    ["add", 5]
                ],
                [
                    ["if", 3, 16, 17],
                    ["add", 5]
                ],
                [
                    ["if", 13, 18, 19],
                    ["add", 6]
                ],
                [
                    ["if", 13, 18, 20],
                    ["add", 6]
                ],
                [
                    ["if", 13, 21, 22],
                    ["add", 6]
                ],
                [
                    ["if", 13, 21, 23],
                    ["add", 6]
                ],
                [
                    ["if", 24],
                    ["add", 7, 8, 22, 24, 25, 29, 30, 31, 32, 34, 35, 36]
                ],
                [
                    ["if", 25, 26],
                    ["add", 9, 10]
                ],
                [
                    ["if", 1, 27, 28],
                    ["add", 11]
                ],
                [
                    ["if", 1, 29, 30, 31],
                    ["add", 12]
                ],
                [
                    ["if", 1, 29, 32, 33],
                    ["add", 13]
                ],
                [
                    ["if", 1, 34],
                    ["add", 14]
                ],
                [
                    ["if", 1, 3, 35],
                    ["add", 15]
                ],
                [
                    ["if", 1, 3, 36],
                    ["add", 16]
                ],
                [
                    ["if", 1, 3, 37],
                    ["add", 17]
                ],
                [
                    ["if", 1, 3, 38],
                    ["add", 18]
                ],
                [
                    ["if", 1, 3, 39],
                    ["add", 19]
                ],
                [
                    ["if", 24, 40],
                    ["add", 20]
                ],
                [
                    ["if", 6, 24],
                    ["add", 21]
                ],
                [
                    ["if", 9, 24],
                    ["add", 23]
                ],
                [
                    ["if", 12, 24],
                    ["add", 26]
                ],
                [
                    ["if", 24, 41],
                    ["add", 27, 28]
                ],
                [
                    ["if", 42],
                    ["add", 33]
                ],
                [
                    ["if", 24, 43, 44],
                    ["add", 37]
                ],
                [
                    ["if", 24, 45],
                    ["add", 38]
                ],
                [
                    ["if", 24, 46],
                    ["add", 39]
                ],
                [
                    ["if", 24, 47],
                    ["add", 40]
                ],
                [
                    ["if", 24, 48],
                    ["add", 41]
                ],
                [
                    ["if", 24, 49],
                    ["add", 42]
                ]
            ]
        },
        "runtime": []





    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa, ba = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ca = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ea;
    if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = {
                    a: !0
                },
                ja = {};
            try {
                ja.__proto__ = ia;
                ha = ja.a;
                break a
            } catch (a) {}
            ha = !1
        }
        ea = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ka = ea,
        la = function(a, b) {
            a.prototype = ca(b.prototype);
            a.prototype.constructor = a;
            if (ka) ka(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Vk = b.prototype
        },
        ma = this || self,
        na = function(a) {
            return a
        };
    var oa = function() {},
        pa = function(a) {
            return "function" === typeof a
        },
        h = function(a) {
            return "string" === typeof a
        },
        qa = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        ra = Array.isArray,
        sa = function(a, b) {
            if (a && ra(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        ta = function(a, b) {
            if (!qa(a) || !qa(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        va = function(a, b) {
            for (var c = new ua, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        l = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        ya = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Aa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ba = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Ca = function(a) {
            var b = [];
            if (ra(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Da = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ea = function() {
            return new Date(Date.now())
        },
        Fa = function() {
            return Ea().getTime()
        },
        ua = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    ua.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    ua.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ga = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ha = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Ia = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ja = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ka = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        La = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Ma = /^\w{1,9}$/,
        Oa = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            l(a, function(d, e) {
                Ma.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Qa = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };

    function Ra() {
        for (var a = Sa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Ta() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Sa, Ua;

    function Va(a) {
        Sa = Sa || Ta();
        Ua = Ua || Ra();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | k >> 6,
                q = k & 63;
            e || (q = 64, d || (p = 64));
            b.push(Sa[m], Sa[n], Sa[p], Sa[q])
        }
        return b.join("")
    }

    function Wa(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Ua[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Sa = Sa || Ta();
        Ua = Ua || Ra();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != k && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    };
    var Xa = {},
        Ya = function(a, b) {
            Xa[a] = Xa[a] || [];
            Xa[a][b] = !0
        },
        Za = function() {
            delete Xa.GA4_EVENT
        },
        $a = function(a) {
            var b = Xa[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return Va(c.join("")).replace(/\.+$/, "")
        };
    var ab = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var bb, cb = function() {
        if (void 0 === bb) {
            var a = null,
                b = ma.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: na,
                        createScript: na,
                        createScriptURL: na
                    })
                } catch (c) {
                    ma.console && ma.console.error(c.message)
                }
                bb = a
            } else bb = a
        }
        return bb
    };
    var eb = function(a, b) {
        this.h = b === db ? a : ""
    };
    eb.prototype.toString = function() {
        return this.h + ""
    };
    var db = {};
    var fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function gb() {
        var a = ma.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    function hb(a) {
        return -1 != gb().indexOf(a)
    };

    function ib() {
        return hb("Firefox") || hb("FxiOS")
    }

    function jb() {
        return (hb("Chrome") || hb("CriOS")) && !hb("Edge") || hb("Silk")
    };
    var kb = {},
        lb = function(a, b) {
            this.h = b === kb ? a : ""
        };
    lb.prototype.toString = function() {
        return this.h.toString()
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function mb(a, b) {
        if (void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("");
            if ("style" === a.tagName.toLowerCase()) throw Error("");
        }
        a.innerHTML = b instanceof lb && b.constructor === lb ? b.h : "type_error:SafeHtml"
    };

    function nb(a) {
        var b = a = ob(a),
            c = cb(),
            d = c ? c.createHTML(b) : b;
        return new lb(d, kb)
    }

    function ob(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var pb = {},
        A = window,
        D = document,
        qb = navigator,
        rb = D.currentScript && D.currentScript.src,
        sb = function(a, b) {
            var c = A[a];
            A[a] = void 0 === c ? b : c;
            return A[a]
        },
        tb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        ub = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        vb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function wb(a, b, c) {
        b && l(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var xb = function(a, b, c, d, e) {
            var f = D.createElement("script");
            wb(f, d, ub);
            f.type = "text/javascript";
            f.async = !0;
            var g, k = ob(a),
                m = cb(),
                n = m ? m.createScriptURL(k) : k;
            g = new eb(n, db);
            f.src = g instanceof eb && g.constructor === eb ? g.h : "type_error:TrustedResourceUrl";
            var p, q, t, u = null == (t = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : t.call(q, "script[nonce]");
            (p = u ? u.nonce || u.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            tb(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var r = D.getElementsByTagName("script")[0] || D.body || D.head;
                r.parentNode.insertBefore(f, r)
            }
            return f
        },
        yb = function() {
            if (rb) {
                var a = rb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        zb = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                k = !1;
            g || (g = D.createElement("iframe"), k = !0);
            wb(g, c, vb);
            d && l(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (k) {
                var m = D.body && D.body.lastChild || D.body ||
                    D.head;
                m.parentNode.insertBefore(g, m)
            }
            tb(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        Ab = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a
        },
        Bb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Cb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        F = function(a) {
            A.setTimeout(a, 0)
        },
        Db = function(a, b) {
            return a && b && a.attributes &&
                a.attributes[b] ? a.attributes[b].value : null
        },
        Eb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Fb = function(a) {
            var b = D.createElement("div");
            mb(b, nb("A<div>" + a + "</div>"));
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        Gb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Hb = function(a) {
            var b;
            try {
                b = qb.sendBeacon && qb.sendBeacon(a)
            } catch (c) {
                Ya("TAGGING", 15)
            }
            b || Ab(a)
        },
        Ib = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Jb = function() {
            var a = A.performance;
            if (a && pa(a.now)) return a.now()
        },
        Kb = function() {
            return A.performance || void 0
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Lb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Mb = function(a) {
            if (null == a) return String(a);
            var b = Lb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Nb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Ob = function(a) {
            if (!a || "object" != Mb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Nb(a, "constructor") && !Nb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Nb(a, b)
        },
        G = function(a, b) {
            var c = b || ("array" == Mb(a) ? [] : {}),
                d;
            for (d in a)
                if (Nb(a, d)) {
                    var e = a[d];
                    "array" == Mb(e) ? ("array" != Mb(c[d]) && (c[d] = []), c[d] = G(e, c[d])) : Ob(e) ? (Ob(c[d]) || (c[d] = {}), c[d] = G(e, c[d])) : c[d] = e
                }
            return c
        };
    var Pb = function(a) {
        if (void 0 === a || ra(a) || Ob(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var Qb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Yh: a("consent"),
            Qf: a("convert_case_to"),
            Rf: a("convert_false_to"),
            Sf: a("convert_null_to"),
            Tf: a("convert_true_to"),
            Uf: a("convert_undefined_to"),
            Gk: a("debug_mode_metadata"),
            Na: a("function"),
            Xe: a("instance_name"),
            Pi: a("live_only"),
            Qi: a("malware_disabled"),
            Ri: a("metadata"),
            Ui: a("original_activity_id"),
            Kk: a("original_vendor_template_id"),
            Jk: a("once_on_load"),
            Ti: a("once_per_event"),
            Vg: a("once_per_load"),
            Mk: a("priority_override"),
            Nk: a("respected_consent_types"),
            Zg: a("setup_tags"),
            ob: a("tag_id"),
            fh: a("teardown_tags")
        }
    }();
    var Rb = [],
        Sb = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\v": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        Tb = function(a) {
            return Sb[a]
        },
        Ub = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var Yb = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        Zb = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\v": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        },
        ac = function(a) {
            return Zb[a]
        };
    Rb[8] = function(a) {
        if (null == a) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Yb, ac) + "'"
        }
    };
    var ic = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        jc = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\v": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        kc = function(a) {
            return jc[a]
        };
    Rb[16] = function(a) {
        return a
    };
    var mc;
    var nc = [],
        oc = [],
        pc = [],
        qc = [],
        rc = [],
        sc = {},
        tc, uc, wc = function() {
            var a = vc;
            uc = uc || a
        },
        xc, yc = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = sc[c],
                f = {},
                g;
            for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.kh && d.kh(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]);
            e && d && d.jh && (f.vtp_gtmCachedValues = d.jh);
            if (b) {
                if (null == b.name) {
                    var k;
                    a: {
                        var m = b.index;
                        if (null == m) k = "";
                        else {
                            var n;
                            switch (b.type) {
                                case 2:
                                    n = nc[m];
                                    break;
                                case 1:
                                    n = qc[m];
                                    break;
                                default:
                                    k = "";
                                    break a
                            }
                            var p = n && n[Qb.Xe];
                            k = p ? String(p) : ""
                        }
                    }
                    b.name = k
                }
                e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
            }
            return void 0 !== e ? e(f) : mc(c, f, b)
        },
        Ac = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = zc(a[e], b, c));
            return d
        },
        zc = function(a, b, c) {
            if (ra(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(zc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = nc[f];
                        if (!g || b.sf(g)) return;
                        c[f] = !0;
                        var k =
                            String(g[Qb.Xe]);
                        try {
                            var m = Ac(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = yc(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: k
                            });
                            xc && (d = xc.kj(d, m))
                        } catch (x) {
                            b.yh && b.yh(x, Number(f), k), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[zc(a[n], b, c)] = zc(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var t = zc(a[q], b, c);
                            uc && (p = p || t === uc.Sd);
                            d.push(t)
                        }
                        return uc && p ? uc.mj(d) : d.join("");
                    case "escape":
                        d = zc(a[1], b, c);
                        if (uc && ra(a[1]) && "macro" ===
                            a[1][0] && uc.Kj(a)) return uc.dk(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) Rb[a[u]] && (d = Rb[a[u]](d));
                        return d;
                    case "tag":
                        var r = a[1];
                        if (!qc[r]) throw Error("Unable to resolve tag reference " + r + ".");
                        return d = {
                            qh: a[2],
                            index: r
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] = a[1];
                        var w = Bc(v, b, c),
                            y = !!a[4];
                        return y || 2 !== w ? y !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Bc = function(a, b, c) {
            try {
                return tc(Ac(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Ec = function(a) {
            function b(t) {
                for (var u = 0; u < t.length; u++) d[t[u]] = !0
            }
            for (var c = [], d = [], e = Cc(a), f = 0; f < oc.length; f++) {
                var g = oc[f],
                    k = Dc(g, e);
                if (k) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === k && b(g.block || []);
            }
            for (var p = [], q = 0; q < qc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Dc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var k = b(f[g]);
                if (2 === k) return null;
                if (1 === k) return !1
            }
            return !0
        },
        Cc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Bc(pc[c], a));
                return b[c]
            }
        };
    var Fc = {
        kj: function(a, b) {
            b[Qb.Qf] && "string" === typeof a && (a = 1 == b[Qb.Qf] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Qb.Sf) && null === a && (a = b[Qb.Sf]);
            b.hasOwnProperty(Qb.Uf) && void 0 === a && (a = b[Qb.Uf]);
            b.hasOwnProperty(Qb.Tf) && !0 === a && (a = b[Qb.Tf]);
            b.hasOwnProperty(Qb.Rf) && !1 === a && (a = b[Qb.Rf]);
            return a
        }
    };
    var bd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function cd(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
    };
    var ed = function(a) {
            return dd ? D.querySelectorAll(a) : null
        },
        fd = function(a, b) {
            if (!dd) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!D.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        jd = !1;
    if (D.querySelectorAll) try {
        var kd = D.querySelectorAll(":root");
        kd && 1 == kd.length && kd[0] == D.documentElement && (jd = !0)
    } catch (a) {}
    var dd = jd;
    var J = function(a) {
        Ya("GTM", a)
    };
    var N = {
            g: {
                H: "ad_storage",
                O: "analytics_storage",
                Kf: "region",
                Lf: "consent_updated",
                Mf: "wait_for_update",
                ci: "app_remove",
                di: "app_store_refund",
                ei: "app_store_subscription_cancel",
                fi: "app_store_subscription_convert",
                gi: "app_store_subscription_renew",
                Vf: "add_payment_info",
                Wf: "add_shipping_info",
                nc: "add_to_cart",
                oc: "remove_from_cart",
                Xf: "view_cart",
                Kb: "begin_checkout",
                qc: "select_item",
                tb: "view_item_list",
                Lb: "select_promotion",
                ub: "view_promotion",
                Aa: "purchase",
                sc: "refund",
                Ba: "view_item",
                Yf: "add_to_wishlist",
                hi: "first_open",
                ii: "first_visit",
                xa: "gtag.config",
                Ca: "gtag.get",
                ji: "in_app_purchase",
                uc: "page_view",
                ki: "session_start",
                we: "user_engagement",
                Mb: "gclid",
                fa: "ads_data_redaction",
                X: "allow_ad_personalization_signals",
                xe: "allow_custom_scripts",
                li: "allow_display_features",
                od: "allow_enhanced_conversions",
                vb: "allow_google_signals",
                ya: "allow_interest_groups",
                pd: "auid",
                mi: "auto_detection_enabled",
                wb: "aw_remarketing",
                ye: "aw_remarketing_only",
                qd: "discount",
                rd: "aw_feed_country",
                sd: "aw_feed_language",
                ba: "items",
                ud: "aw_merchant_id",
                Zf: "aw_basket_type",
                vd: "campaign_content",
                wd: "campaign_id",
                xd: "campaign_medium",
                yd: "campaign_name",
                vc: "campaign",
                zd: "campaign_source",
                Ad: "campaign_term",
                fb: "client_id",
                ni: "content_group",
                oi: "content_type",
                Da: "conversion_cookie_prefix",
                wc: "conversion_id",
                na: "conversion_linker",
                xc: "conversion_api",
                hb: "cookie_domain",
                Ia: "cookie_expires",
                ib: "cookie_flags",
                yc: "cookie_name",
                ze: "cookie_path",
                Sa: "cookie_prefix",
                Nb: "cookie_update",
                zc: "country",
                la: "currency",
                Bd: "customer_lifetime_value",
                Ac: "custom_map",
                ri: "debug_mode",
                Z: "developer_id",
                si: "disable_merchant_reported_purchases",
                ui: "dc_custom_params",
                vi: "dc_natural_search",
                Ae: "dynamic_event_settings",
                wi: "affiliation",
                ag: "checkout_option",
                cg: "checkout_step",
                xi: "coupon",
                Be: "item_list_name",
                Ce: "list_name",
                yi: "promotions",
                Cd: "shipping",
                dg: "tax",
                Dd: "engagement_time_msec",
                Bc: "enhanced_client_id",
                Cc: "enhanced_conversions",
                eg: "enhanced_conversions_automatic_settings",
                Ed: "estimated_delivery_date",
                De: "euid_logged_in_state",
                Ob: "event_callback",
                Pb: "event_developer_id_string",
                fg: "event",
                Fd: "event_settings",
                Gd: "event_timeout",
                zi: "experiments",
                Ee: "firebase_id",
                Hd: "first_party_collection",
                Id: "_x_20",
                xb: "_x_19",
                gg: "fledge",
                hg: "flight_error_code",
                ig: "flight_error_message",
                jg: "gac_gclid",
                Jd: "gac_wbraid",
                kg: "gac_wbraid_multiple_conversions",
                Fe: "ga_restrict_domain",
                Ge: "ga_temp_client_id",
                lg: "gdpr_applies",
                mg: "geo_granularity",
                jb: "value_callback",
                Ta: "value_key",
                Hk: "google_ono",
                Ua: "google_signals",
                Dc: "google_tld",
                Kd: "groups",
                ng: "gsa_experiment_id",
                og: "iframe_state",
                Ld: "ignore_referrer",
                He: "internal_traffic_results",
                Md: "is_legacy_loaded",
                pg: "is_passthrough",
                Ja: "language",
                Ie: "legacy_developer_id_string",
                oa: "linker",
                Rb: "accept_incoming",
                yb: "decorate_forms",
                N: "domains",
                Sb: "url_position",
                qg: "method",
                Ec: "new_customer",
                rg: "non_interaction",
                Ai: "optimize_id",
                Nd: "page_path",
                La: "page_referrer",
                Tb: "page_title",
                sg: "passengers",
                ug: "phone_conversion_callback",
                Bi: "phone_conversion_country_code",
                vg: "phone_conversion_css_class",
                Ci: "phone_conversion_ids",
                wg: "phone_conversion_number",
                xg: "phone_conversion_options",
                yg: "quantity",
                Fc: "redact_device_info",
                Je: "redact_enhanced_user_id",
                Di: "redact_ga_client_id",
                Ei: "redact_user_id",
                Od: "referral_exclusion_definition",
                zb: "restricted_data_processing",
                Fi: "retoken",
                zg: "screen_name",
                Ab: "screen_resolution",
                Gi: "search_term",
                Ea: "send_page_view",
                Bb: "send_to",
                Gc: "session_duration",
                Pd: "session_engaged",
                Ke: "session_engaged_time",
                kb: "session_id",
                Qd: "session_number",
                Hc: "delivery_postal_code",
                Bg: "temporary_client_id",
                Hi: "tracking_id",
                Le: "traffic_type",
                Ma: "transaction_id",
                qa: "transport_url",
                Cg: "trip_type",
                Ic: "update",
                lb: "url_passthrough",
                Me: "_user_agent_architecture",
                Ne: "_user_agent_bitness",
                Oe: "_user_agent_full_version_list",
                Pe: "_user_agent_mobile",
                Qe: "_user_agent_model",
                Re: "_user_agent_platform",
                Se: "_user_agent_platform_version",
                Dg: "_user_agent_wait",
                Te: "_user_agent_wow64",
                ma: "user_data",
                Eg: "user_data_auto_latency",
                Fg: "user_data_auto_meta",
                Gg: "user_data_auto_multi",
                Hg: "user_data_auto_selectors",
                Ig: "user_data_auto_status",
                Jg: "user_data_mode",
                Ue: "user_data_settings",
                ra: "user_id",
                Fa: "user_properties",
                Kg: "us_privacy_string",
                ja: "value",
                Rd: "wbraid",
                Lg: "wbraid_multiple_conversions",
                Rg: "_host_name",
                Sg: "_in_page_command",
                Tg: "_is_passthrough_cid",
                Ug: "non_personalized_ads",
                Nc: "_sst_parameters",
                Ra: "conversion_label",
                Ka: "page_location",
                Qb: "global_developer_id_string",
                Ag: "tc_privacy_string"
            }
        },
        Id = {},
        Jd = Object.freeze((Id[N.g.X] = 1, Id[N.g.od] = 1, Id[N.g.vb] = 1, Id[N.g.ba] = 1, Id[N.g.hb] = 1, Id[N.g.Ia] = 1, Id[N.g.ib] = 1, Id[N.g.yc] = 1, Id[N.g.ze] = 1, Id[N.g.Sa] = 1, Id[N.g.Nb] = 1, Id[N.g.Ac] = 1, Id[N.g.Z] =
            1, Id[N.g.Ae] = 1, Id[N.g.Ob] = 1, Id[N.g.Fd] = 1, Id[N.g.Gd] = 1, Id[N.g.Hd] = 1, Id[N.g.Fe] = 1, Id[N.g.Ua] = 1, Id[N.g.Dc] = 1, Id[N.g.Kd] = 1, Id[N.g.He] = 1, Id[N.g.Md] = 1, Id[N.g.oa] = 1, Id[N.g.Je] = 1, Id[N.g.Od] = 1, Id[N.g.zb] = 1, Id[N.g.Ea] = 1, Id[N.g.Bb] = 1, Id[N.g.Gc] = 1, Id[N.g.Ke] = 1, Id[N.g.Hc] = 1, Id[N.g.qa] = 1, Id[N.g.Ic] = 1, Id[N.g.Ue] = 1, Id[N.g.Fa] = 1, Id[N.g.Nc] = 1, Id));
    Object.freeze([N.g.Ka, N.g.La, N.g.Tb, N.g.Ja, N.g.zg, N.g.ra, N.g.Ee, N.g.ni]);
    var Kd = {},
        Ld = Object.freeze((Kd[N.g.ci] = 1, Kd[N.g.di] = 1, Kd[N.g.ei] = 1, Kd[N.g.fi] = 1, Kd[N.g.gi] = 1, Kd[N.g.hi] = 1, Kd[N.g.ii] = 1, Kd[N.g.ji] = 1, Kd[N.g.ki] = 1, Kd[N.g.we] = 1, Kd)),
        Md = {},
        Nd = Object.freeze((Md[N.g.Vf] = 1, Md[N.g.Wf] = 1, Md[N.g.nc] = 1, Md[N.g.oc] = 1, Md[N.g.Xf] = 1, Md[N.g.Kb] = 1, Md[N.g.qc] = 1, Md[N.g.tb] = 1, Md[N.g.Lb] = 1, Md[N.g.ub] = 1, Md[N.g.Aa] = 1, Md[N.g.sc] = 1, Md[N.g.Ba] = 1, Md[N.g.Yf] = 1, Md)),
        Od = Object.freeze([N.g.X, N.g.vb, N.g.Nb]),
        Pd = Object.freeze([].concat(Od)),
        Qd = Object.freeze([N.g.Ia, N.g.Gd, N.g.Gc, N.g.Ke, N.g.Dd]),
        Rd = Object.freeze([].concat(Qd)),
        Td = {},
        Ud = (Td[N.g.H] = "1", Td[N.g.O] = "2", Td),
        Vd = {},
        Wd = Object.freeze((Vd[N.g.X] = 1, Vd[N.g.od] = 1, Vd[N.g.ya] = 1, Vd[N.g.wb] = 1, Vd[N.g.ye] = 1, Vd[N.g.qd] = 1, Vd[N.g.rd] = 1, Vd[N.g.sd] = 1, Vd[N.g.ba] = 1, Vd[N.g.ud] = 1, Vd[N.g.Da] = 1, Vd[N.g.na] = 1, Vd[N.g.hb] = 1, Vd[N.g.Ia] = 1, Vd[N.g.ib] = 1, Vd[N.g.Sa] = 1, Vd[N.g.la] = 1, Vd[N.g.Bd] = 1, Vd[N.g.Z] = 1, Vd[N.g.si] = 1, Vd[N.g.Cc] = 1, Vd[N.g.Ed] = 1, Vd[N.g.Ee] = 1, Vd[N.g.Hd] = 1, Vd[N.g.Md] = 1, Vd[N.g.Ja] = 1, Vd[N.g.Ec] = 1, Vd[N.g.Ka] = 1, Vd[N.g.La] = 1, Vd[N.g.ug] = 1, Vd[N.g.vg] = 1, Vd[N.g.wg] =
            1, Vd[N.g.xg] = 1, Vd[N.g.zb] = 1, Vd[N.g.Ea] = 1, Vd[N.g.Bb] = 1, Vd[N.g.Hc] = 1, Vd[N.g.Ma] = 1, Vd[N.g.qa] = 1, Vd[N.g.Ic] = 1, Vd[N.g.lb] = 1, Vd[N.g.ma] = 1, Vd[N.g.ra] = 1, Vd[N.g.ja] = 1, Vd));
    Object.freeze(N.g);
    var Xd = {},
        Yd = A.google_tag_manager = A.google_tag_manager || {},
        Zd = Math.random();
    Xd.Wb = "3210";
    Xd.Mc = Number("0") || 0;
    Xd.ca = "dataLayer";
    Xd.ai = "ChAIgKH4ngYQn7vXx8rQ7KUEEiQAplBrUBkhfBfVSlT7zqcDeUUf/aqjMGJqZhITNZTE6JCV6yAaAvRq";
    var $d = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        ae = {
            __paused: !0,
            __tg: !0
        },
        be;
    for (be in $d) $d.hasOwnProperty(be) && (ae[be] = !0);
    var ce = Ba(""),
        de, ee = !1;
    de = ee;
    var fe, ge = !1;
    fe = ge;
    var he, ie = !1;
    he = ie;
    var je, ke = !1;
    je = ke;
    Xd.nd = "www.googletagmanager.com";
    var le = "" + Xd.nd + (de ? "/gtag/js" : "/gtm.js"),
        me = null,
        ne = null,
        oe = {},
        pe = {},
        qe = {},
        re = function() {
            var a = Yd.sequence || 1;
            Yd.sequence = a + 1;
            return a
        };
    Xd.Zh = "";
    var se = "";
    Xd.Wd = se;
    var te = new ua,
        ue = {},
        ve = {},
        ye = {
            name: Xd.ca,
            set: function(a, b) {
                G(La(a, b), ue);
                we()
            },
            get: function(a) {
                return xe(a, 2)
            },
            reset: function() {
                te = new ua;
                ue = {};
                we()
            }
        },
        xe = function(a, b) {
            return 2 != b ? te.get(a) : ze(a)
        },
        ze = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = ue, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Ae = function(a, b) {
            ve.hasOwnProperty(a) || (te.set(a, b), G(La(a, b), ue), we())
        },
        we = function(a) {
            l(ve, function(b, c) {
                te.set(b, c);
                G(La(b), ue);
                G(La(b,
                    c), ue);
                a && delete ve[b]
            })
        },
        Be = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? ze(a) : te.get(a);
            "array" === Mb(d) || "object" === Mb(d) ? c = G(d) : c = d;
            return c
        };
    var Ce, De = !1,
        Ee = function(a) {
            if (!De) {
                De = !0;
                Ce = Ce || {}
            }
            return Ce[a]
        };
    var Fe = function() {
            var a = A.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        Ge = function(a) {
            if (D.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !A.getComputedStyle) return !0;
            var c = A.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var k = g.indexOf("opacity(");
                    0 <= k && (g = g.substring(k + 8, g.indexOf(")", k)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = A.getComputedStyle(d, null))
            }
            return !1
        };
    var He = function() {
            var a = D.body,
                b = D.documentElement || a && a.parentElement,
                c, d;
            if (D.compatMode && "BackCompat" !== D.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else {
                var e = function(f, g) {
                    return f && g ? Math.min(f, g) : Math.max(f, g)
                };
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
            }
            return {
                width: d,
                height: c
            }
        },
        Ie = function(a) {
            var b = He(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
                d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        };
    var Je = [],
        Ke = !(!A.IntersectionObserver || !A.IntersectionObserverEntry),
        Le = function(a, b, c) {
            for (var d = new A.IntersectionObserver(a, {
                    threshold: c
                }), e = 0; e < b.length; e++) d.observe(b[e]);
            for (var f = 0; f < Je.length; f++)
                if (!Je[f]) return Je[f] = d, f;
            return Je.push(d) - 1
        },
        Me = function(a, b, c) {
            function d(k, m) {
                var n = {
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    },
                    p = {
                        boundingClientRect: k.getBoundingClientRect(),
                        intersectionRatio: m,
                        intersectionRect: n,
                        isIntersecting: 0 < m,
                        rootBounds: n,
                        target: k,
                        time: Fa()
                    };
                F(function() {
                    return a(p)
                })
            }
            for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
            c.sort(function(k, m) {
                return k - m
            });
            return function() {
                for (var k = 0; k < b.length; k++) {
                    var m = Ie(b[k]);
                    if (m > e[k])
                        for (; f[k] < c.length - 1 && m >= c[f[k] + 1];) d(b[k], m), f[k]++;
                    else if (m < e[k])
                        for (; 0 <= f[k] && m <= c[f[k]];) d(b[k], m), f[k]--;
                    e[k] = m
                }
            }
        },
        Ne = function(a, b, c) {
            for (var d = 0; d < c.length; d++) 1 < c[d] ? c[d] = 1 : 0 > c[d] && (c[d] = 0);
            if (Ke) {
                var e = !1;
                F(function() {
                    e ||
                        Me(a, b, c)()
                });
                return Le(function(f) {
                    e = !0;
                    for (var g = {
                            hc: 0
                        }; g.hc < f.length; g = {
                            hc: g.hc
                        }, g.hc++) F(function(k) {
                        return function() {
                            return a(f[k.hc])
                        }
                    }(g))
                }, b, c)
            }
            return A.setInterval(Me(a, b, c), 1E3)
        },
        Oe = function(a) {
            Ke ? 0 <= a && a < Je.length && Je[a] && (Je[a].disconnect(), Je[a] = void 0) : A.clearInterval(a)
        };
    var Pe = /:[0-9]+$/,
        Qe = /^\d+\.fls\.doubleclick\.net$/,
        Re = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        We = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = Ue(a.protocol) || Ue(A.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : A.location.port) || ("http" === a.protocol ? 80 : "https" ===
                a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || A.location.hostname).replace(Pe, "").toLowerCase());
            return Ve(a, b, c, d, e)
        },
        Ve = function(a, b, c, d, e) {
            var f, g = Ue(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = Xe(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(Pe, "").toLowerCase();
                    if (c) {
                        var k = /^www\d*\./.exec(f);
                        k && k[0] && (f = f.substr(k[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname ||
                        a.hostname || Ya("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = Re(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        Ue = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        Xe = function(a) {
            var b = "";
            if (a &&
                a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        Ye = function(a) {
            var b = D.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Ya("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(Pe, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        Ze = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = Ye(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                k = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === k[0] && (k = k.substring(1));
            g = c(g);
            k = c(k);
            "" !== g && (g = "?" + g);
            "" !== k && (k = "#" + k);
            var m = "" + f + g + k;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        },
        $e = function(a) {
            var b = Ye(A.location.href),
                c = We(b, "host", !1);
            if (c && c.match(Qe)) {
                var d = We(b, "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var af = {};
    var zf = {
        mh: "IN",
        jk: "IN-TG"
    };
    var Af = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Bf = function(a) {
        Bf[" "](a);
        return a
    };
    Bf[" "] = function() {};
    var Df = function() {
        var a = Cf,
            b = "qf";
        if (a.qf && a.hasOwnProperty(b)) return a.qf;
        var c = new a;
        return a.qf = c
    };
    var Cf = function() {
        var a = {};
        this.h = function() {
            var b = Af.h,
                c = Af.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.m = function() {
            a[Af.h] = !0
        }
    };
    var Ef = [];

    function Ff() {
        var a = sb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Gf,
            update: Hf,
            addListener: If,
            notifyListeners: Jf,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function Gf(a, b, c, d, e, f) {
        var g = Ff();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var k = g.entries,
                m = k[a] || {},
                n = m.region,
                p = c && h(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    t = {
                        region: p,
                        initial: "granted" === b,
                        update: m.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== m.initial) k[a] = t;
                q && A.setTimeout(function() {
                    k[a] === t && t.quiet && (t.quiet = !1, Kf(a), Jf(), Ya("TAGGING",
                        2))
                }, f)
            }
        }
    }

    function Hf(a, b) {
        var c = Ff();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Lf(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Lf(c, a);
            f.quiet ? (f.quiet = !1, Kf(a)) : g !== d && Kf(a)
        }
    }

    function If(a, b) {
        Ef.push({
            ef: a,
            uj: b
        })
    }

    function Kf(a) {
        for (var b = 0; b < Ef.length; ++b) {
            var c = Ef[b];
            ra(c.ef) && -1 !== c.ef.indexOf(a) && (c.Dh = !0)
        }
    }

    function Jf(a, b) {
        for (var c = 0; c < Ef.length; ++c) {
            var d = Ef[c];
            if (d.Dh) {
                d.Dh = !1;
                try {
                    d.uj({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function Lf(a, b) {
        var c = a.entries[b] || {};
        return void 0 !== c.update ? c.update : c.initial
    }
    var Mf = function(a) {
            var b = Ff();
            b.accessedAny = !0;
            return Lf(b, a)
        },
        Nf = function(a) {
            var b = Ff();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        Of = function(a) {
            var b = Ff();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Pf = function() {
            if (!Df().h()) return !1;
            var a = Ff();
            a.accessedAny = !0;
            return a.active
        },
        Qf = function() {
            var a = Ff();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Rf = function(a, b) {
            Ff().addListener(a, b)
        },
        Sf = function(a, b) {
            Ff().notifyListeners(a, b)
        },
        Tf = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Of(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Rf(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Uf = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var k = d[g];
                    !1 === Mf(k) || e[k] || (f.push(k), e[k] = !0)
                }
                return f
            }
            var d = h(b) ? [b] : b,
                e = {};
            c().length !== d.length && Rf(d, function(f) {
                var g = c();
                0 < g.length && (f.ef = g, a(f))
            })
        };

    function Vf() {}

    function Wf() {};

    function Xf(a) {
        for (var b = [], c = 0; c < Yf.length; c++) {
            var d = a(Yf[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Yf = [N.g.H, N.g.O],
        Zf = function(a) {
            var b = a[N.g.Kf];
            b && J(40);
            var c = a[N.g.Mf];
            c && J(41);
            for (var d = ra(b) ? b : [b], e = {
                    ic: 0
                }; e.ic < d.length; e = {
                    ic: e.ic
                }, ++e.ic) l(a, function(f) {
                return function(g, k) {
                    if (g !== N.g.Kf && g !== N.g.Mf) {
                        var m = d[f.ic],
                            n = zf.mh,
                            p = zf.jk;
                        Ff().set(g, k, m, n, p, c)
                    }
                }
            }(e))
        },
        $f = function(a, b) {
            l(a, function(c, d) {
                Ff().update(c, d)
            });
            Sf(b.eventId, b.priorityId)
        },
        ag = function(a) {
            var b = Mf(a);
            return void 0 != b ? b : !0
        },
        bg = function() {
            return "G1" + Xf(Mf)
        },
        cg = function(a, b) {
            Uf(a, b)
        },
        dg = function(a, b) {
            Tf(a, b)
        };
    var eg = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var fg = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                k = g[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var gg = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        hg = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function ig(a) {
        return "null" !== a.origin
    };
    var lg = function(a, b, c, d) {
            return jg(d) ? fg(a, String(b || kg()), c) : []
        },
        og = function(a, b, c, d, e) {
            if (jg(e)) {
                var f = mg(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = ng(f, function(g) {
                        return g.be
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = ng(f, function(g) {
                        return g.ad
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function pg(a, b, c, d) {
        var e = kg(),
            f = window;
        ig(f) && (f.document.cookie = a);
        var g = kg();
        return e != g || void 0 != c && 0 <= lg(b, g, !1, d).indexOf(c)
    }
    var tg = function(a, b, c) {
            function d(u, r, v) {
                if (null == v) return delete g[r], u;
                g[r] = v;
                return u + "; " + r + "=" + v
            }

            function e(u, r) {
                if (null == r) return delete g[r], u;
                g[r] = !0;
                return u + "; " + r
            }
            if (!jg(c.Ya)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = qg(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var k;
            c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
            f = d(f, "expires", k);
            f = d(f, "max-age", c.Sk);
            f = d(f, "samesite",
                c.Tk);
            c.Uk && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = rg(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        t = d(f, "domain", q);
                    t = e(t, c.flags);
                    if (!sg(q, c.path) && pg(t, a, b, c.Ya)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return sg(m, c.path) ? 1 : pg(f, a, b, c.Ya) ? 0 : 1
        },
        ug = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return tg(a, b, c)
        };

    function ng(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                m = b(k);
            m === c ? d.push(k) : void 0 === f || m < f ? (e = [k], f = m) : m === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function mg(a, b, c) {
        for (var d = [], e = lg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    be: 1 * m[0] || 1,
                    ad: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var qg = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        vg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        wg = /(^|\.)doubleclick\.net$/i,
        sg = function(a, b) {
            return wg.test(window.document.location.hostname) || "/" === b && vg.test(a)
        },
        kg = function() {
            return ig(window) ? window.document.cookie : ""
        },
        rg = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            wg.test(e) || vg.test(e) || a.push("none");
            return a
        },
        jg = function(a) {
            if (!Df().h() || !a || !Pf()) return !0;
            if (!Of(a)) return !1;
            var b = Mf(a);
            return null == b ? !0 : !!b
        };
    var xg = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ eg(a) & 2147483647) : String(b)
        },
        Fg = function(a) {
            return [xg(a), Math.round(Fa() / 1E3)].join(".")
        },
        Ig = function(a, b, c, d, e) {
            var f = Gg(b);
            return og(a, f, Hg(c), d, e)
        },
        Jg = function(a, b, c, d) {
            var e = "" + Gg(c),
                f = Hg(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Gg = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Hg = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };

    function Kg(a, b, c, d) {
        var e, f = Number(null != a.qb ? a.qb : void 0);
        0 !== f && (e = new Date((b || Fa()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Ya: d
        }
    };
    var Lg;
    var Pg = function() {
            var a = Mg,
                b = Ng,
                c = Og(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Bb(D, "mousedown", d);
                Bb(D, "keyup", d);
                Bb(D, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Qg = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Og().decorators.push(f)
        },
        Rg = function(a, b, c) {
            for (var d = Og().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    k;
                if (k = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== D.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    k = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        k = !0;
                        break a
                    }
                    k = !1
                }
                if (k) {
                    var t = g.placement;
                    void 0 == t && (t = g.fragment ? 2 : 1);
                    t === b && Ia(e, g.callback())
                }
            }
            return e
        };

    function Og() {
        var a = sb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Sg = /(.*?)\*(.*?)\*(.*)/,
        Tg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Ug = /^(?:www\.|m\.|amp\.)+/,
        Vg = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Wg(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Yg = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Va(String(d))))
            }
        var e = b.join("*");
        return ["1", Xg(e), e].join("*")
    };

    function Xg(a, b) {
        var c = [qb.userAgent, (new Date).getTimezoneOffset(), qb.userLanguage || qb.language, Math.floor(Fa() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Lg)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, k = 0; 8 > k; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Lg = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Lg[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function Zg() {
        return function(a) {
            var b = Ye(A.location.href),
                c = b.search.replace("?", ""),
                d = Re(c, "_gl", !0) || "";
            a.query = $g(d) || {};
            var e = We(b, "fragment").match(Wg("_gl"));
            a.fragment = $g(e && e[3] || "") || {}
        }
    }

    function ah(a, b) {
        var c = Wg(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var bh = function(a, b) {
            b || (b = "_gl");
            var c = Vg.exec(a);
            if (!c) return "";
            var d = c[1],
                e = ah(b, (c[2] || "").slice(1)),
                f = ah(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        ch = function(a) {
            var b = Zg(),
                c = Og();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ia(d, e.query), a && Ia(d, e.fragment));
            return d
        },
        $g = function(a) {
            try {
                var b = dh(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = Wa(d[e + 1]);
                        c[f] = g
                    }
                    Ya("TAGGING", 6);
                    return c
                }
            } catch (k) {
                Ya("TAGGING",
                    8)
            }
        };

    function dh(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Sg.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var k = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Xg(k, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return k;
                Ya("TAGGING", 7)
            }
        }
    }

    function eh(a, b, c, d) {
        function e(p) {
            p = ah(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Vg.exec(c);
        if (!f) return "";
        var g = f[1],
            k = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : k = "?" + e(k.substring(1));
        return "" + g + k + m
    }

    function fh(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Rg(b, 1, c),
            e = Rg(b, 2, c),
            f = Rg(b, 3, c);
        if (Ja(d)) {
            var g = Yg(d);
            c ? gh("_gl", g, a) : hh("_gl", g, a, !1)
        }
        if (!c && Ja(e)) {
            var k = Yg(e);
            hh("_gl", k, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        hh(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        gh(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && eh(n, p, q)
            }
    }

    function hh(a, b, c, d) {
        if (c.href) {
            var e = eh(a, b, c.href, void 0 === d ? !1 : d);
            fb.test(e) && (c.href = e)
        }
    }

    function gh(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var k = e[g];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = D.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = eh(a, b, c.action);
                fb.test(n) && (c.action = n)
            }
        }
    }

    function Mg(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || fh(e, e.hostname)
            }
        } catch (g) {}
    }

    function Ng(a) {
        try {
            if (a.action) {
                var b = We(Ye(a.action), "host");
                fh(a, b)
            }
        } catch (c) {}
    }
    var ih = function(a, b, c, d) {
            Pg();
            Qg(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        jh = function(a, b) {
            Pg();
            Qg(a, [Ve(A.location, "host", !0)], b, !0, !0)
        },
        kh = function() {
            var a = D.location.hostname,
                b = Tg.exec(D.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var k = a.replace(Ug, ""),
                m = e.replace(Ug, ""),
                n;
            if (!(n = k === m)) {
                var p = "." + m;
                n = k.substring(k.length - p.length,
                    k.length) === p
            }
            return n
        },
        lh = function(a, b) {
            return !1 === a ? !1 : a || b || kh()
        };
    var mh = {};
    var nh = ["1"],
        oh = {},
        ph = {},
        th = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = qh(a.prefix);
            if (!oh[c] && !rh(c, a.path, a.domain)) {
                if (void 0 == mh.enable_auid_fl_iframe ? 0 : mh.enable_auid_fl_iframe) {
                    var d = $e("auiddc");
                    if (d) {
                        Ya("TAGGING", 17);
                        oh[c] = d;
                        return
                    }
                }
                if (b) {
                    var e = qh(a.prefix),
                        f = Fg();
                    if (0 === sh(e, f, a)) {
                        var g = sb("google_tag_data", {});
                        g._gcl_au || (g._gcl_au = f)
                    }
                    rh(c, a.path, a.domain)
                }
            }
        };

    function sh(a, b, c, d) {
        var e = Jg(b, "1", c.domain, c.path),
            f = Kg(c, d);
        f.Ya = "ad_storage";
        return ug(a, e, f)
    }

    function rh(a, b, c) {
        var d = Ig(a, b, c, nh, "ad_storage");
        if (!d) return !1;
        uh(a, d);
        return !0
    }

    function uh(a, b) {
        var c = b.split(".");
        5 === c.length ? (oh[a] = c.slice(0, 2).join("."), ph[a] = {
            id: c.slice(2, 4).join("."),
            wh: Number(c[4]) || 0
        }) : 3 === c.length ? ph[a] = {
            id: c.slice(0, 2).join("."),
            wh: Number(c[2]) || 0
        } : oh[a] = b
    }

    function qh(a) {
        return (a || "_gcl") + "_au"
    }

    function vh(a) {
        Pf() || a();
        Tf(function() {
            Mf("ad_storage") && a();
            Uf(a, "ad_storage")
        }, ["ad_storage"])
    }

    function wh(a) {
        var b = ch(!0),
            c = qh(a.prefix);
        vh(function() {
            var d = b[c];
            if (d) {
                uh(c, d);
                var e = 1E3 * Number(oh[c].split(".")[1]);
                if (e) {
                    Ya("TAGGING", 16);
                    var f = Kg(a, e);
                    f.Ya = "ad_storage";
                    var g = Jg(d, "1", a.domain, a.path);
                    ug(c, g, f)
                }
            }
        })
    }

    function xh(a, b, c, d) {
        d = d || {};
        var e = function() {
            var f = qh(d.prefix),
                g = {},
                k = Ig(f, d.path, d.domain, nh, "ad_storage");
            if (!k) return g;
            g[f] = k;
            return g
        };
        vh(function() {
            ih(e, a, b, c)
        })
    };
    var Q = [];
    Q[7] = !0;
    Q[9] = !0;
    Q[27] = !0;
    Q[11] = !0;
    Q[13] = !0;
    Q[15] = !0;
    Q[25] = !0;
    Q[36] = !0;
    Q[38] = !0;
    Q[43] = !0;
    Q[45] = !0;
    a: {
        for (var yh, zh, Ah = 0; yh === zh;)
            if (yh = Math.floor(2 * Math.random()), zh = Math.floor(2 * Math.random()), Ah++, 20 < Ah) break a;yh ? Q[46] = !0 : Q[47] = !0
    }
    Q[52] = !0;
    Q[57] = !0;
    Q[58] = !0;
    Q[60] = !0;
    Q[65] = !0;

    Q[68] = !0;
    Q[72] = !0;

    var R = function(a) {
        return !!Q[a]
    };
    var Bh = function() {
        Yd.dedupe_gclid || (Yd.dedupe_gclid = "" + Fg());
        return Yd.dedupe_gclid
    };
    var Ch = function() {
        var a = !1;
        return a
    };
    var S = {
            D: "GTM-TZZBRK5",
            Qa: "8381446"
        },
        Dh = {
            Bh: "GTM-TZZBRK5",
            Ch: "GTM-TZZBRK5"
        };
    S.Ye = Ba("");
    var Eh = function() {
            return Dh.Bh ? Dh.Bh.split("|") : [S.D]
        },
        Fh = function() {
            return Dh.Ch ? Dh.Ch.split("|") : []
        },
        Gh = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {}
        },
        Ih = function() {
            for (var a = Hh(), b = Eh(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                !d || qa(d) ? a.container[b[c]] = {
                    state: 2
                } : d.state = 2
            }
            for (var e = Fh(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && J(93);
                g ? g.state = 2 : a.destination[e[f]] = {
                    state: 2
                }
            }
            a.canonical[S.Qa] = 2
        },
        Jh = function(a) {
            return !!Hh().container[a]
        },
        Kh = function() {
            var a =
                Hh().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b)) {
                    var c = a[b];
                    if (qa(c)) {
                        if (1 === c) return !0
                    } else if (1 === c.state) return !0
                }
            return !1
        },
        Lh = function() {
            var a = {};
            l(Hh().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        };

    function Hh() {
        var a = Yd.tidr;
        a || (a = new Gh, Yd.tidr = a);
        return a
    }
    var Mh = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            GT: "t",
            HA: "h",
            MC: "m",
            GTM: "g",
            OPT: "o"
        },
        Nh = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        Oh = function(a) {
            var b = S.D.split("-"),
                c = b[0].toUpperCase();
            if (R(45)) {
                var d = {};
                d.nj = S.D;
                d.nk = Xd.Mc;
                d.rk = Xd.Wb;
                d.Tj = S.Ye ? 2 : 1;
                de ? (d.ne = Nh[c], d.ne || (d.ne = 0)) : d.ne = je ? 13 : 10;
                he ? d.wf = 1 : Ch() ? d.wf = 2 : d.wf = 3;
                var e;
                var f = d.ne,
                    g = d.wf;
                void 0 === f ? e = "" : (g || (g = 0), e = "" + cd(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f << 2 | g]);
                var k = d.Ok,
                    m = 4 + e + (k ? "" + cd(2,
                        1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [k] : ""),
                    n, p = d.rk;
                n = p && bd.test(p) ? "" + cd(3, 2) + p : "";
                var q, t = d.nk;
                q = t ? "" + cd(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [t] : "";
                var u;
                var r = d.nj;
                if (r && a) {
                    var v = r.split("-"),
                        w = v[0].toUpperCase();
                    if ("GTM" !== w && "OPT" !== w) u = "";
                    else {
                        var y = v[1];
                        u = "" + cd(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + y.length] + (d.Tj || 0) + y
                    }
                } else u = "";
                return m + n + q + u
            }
            var x = Mh[c] || "i",
                B = a && "GTM" === c ? b[1] : "OPT" ===
                c ? b[1] : "",
                z = "w";
            de && (z = Ch() ? "s" : "o");
            fe ? ("w" === z && (z = "x"), "o" === z && (z = "q")) : he ? ("w" === z && (z = "y"), "o" === z && (z = "r")) : je && (z = "z");
            return "2" + z + x + (4 === Xd.Wb.length ? Xd.Wb.slice(1) : Xd.Wb) + B
        };

    function Ph(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Qh = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function Rh() {
        return hb("iPhone") && !hb("iPod") && !hb("iPad")
    }

    function Sh() {
        Rh() || hb("iPad") || hb("iPod")
    };
    hb("Opera");
    hb("Trident") || hb("MSIE");
    hb("Edge");
    !hb("Gecko") || -1 != gb().toLowerCase().indexOf("webkit") && !hb("Edge") || hb("Trident") || hb("MSIE") || hb("Edge"); - 1 != gb().toLowerCase().indexOf("webkit") && !hb("Edge") && hb("Mobile");
    hb("Macintosh");
    hb("Windows");
    hb("Linux") || hb("CrOS");
    var Th = ma.navigator || null;
    Th && (Th.appVersion || "").indexOf("X11");
    hb("Android");
    Rh();
    hb("iPad");
    hb("iPod");
    Sh();
    gb().toLowerCase().indexOf("kaios");
    var Uh = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var k = a.charCodeAt(e + f);
                    if (!k || 61 == k || 38 == k || 35 == k) return e
                }
                e += f + 1
            }
            return -1
        },
        Vh = /#|$/,
        Wh = function(a, b) {
            var c = a.search(Vh),
                d = Uh(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        Xh = /[?&]($|#)/,
        Yh = function(a, b, c) {
            for (var d, e = a.search(Vh), f = 0, g, k = []; 0 <= (g = Uh(a, f, b, e));) k.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            k.push(a.slice(f));
            d = k.join("").replace(Xh, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, t = d.indexOf("#");
                0 > t && (t = d.length);
                var u = d.indexOf("?"),
                    r;
                0 > u || u > t ? (u = t, r = "") : r = d.substring(u + 1, t);
                q = [d.slice(0, u), r, d.slice(t)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var Zh = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };

    function $h(a) {
        if (!a || !D.head) return null;
        var b = ai("META");
        D.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var bi = function() {
            if (A.top == A) return 0;
            var a = A.location.ancestorOrigins;
            if (a) return a[a.length - 1] == A.location.origin ? 1 : 2;
            var b;
            var c = A.top;
            try {
                var d;
                if (d = !!c && null != c.location.href) b: {
                    try {
                        Bf(c.foo);
                        d = !0;
                        break b
                    } catch (e) {}
                    d = !1
                }
                b = d
            } catch (e) {
                b = !1
            }
            return b ? 1 : 2
        },
        ai = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function ci(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = ai("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        k = ab(g, e);
                    0 <= k && Array.prototype.splice.call(g, k, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            Qh(e, "load", f);
            Qh(e, "error", f)
        }
        d && (e.attributionsrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var ei = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            Zh(a, function(d, e) {
                d && (c += "&" + e + "=" + encodeURIComponent(d))
            });
            di(c, b)
        },
        di = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", e.headers = {
                    "Attribution-Reporting-Eligible": "event-source"
                });
                c.fetch(a, e)
            } else ci(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var fi = function() {};
    var gi = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        hi = function(a, b) {
            b = void 0 === b ? {} : b;
            this.m = a;
            this.h = null;
            this.M = {};
            this.sb = 0;
            var c;
            this.V = null != (c = b.Ak) ? c : 500;
            var d;
            this.I = null != (d = b.Pk) ? d : !1;
            this.B = null
        };
    la(hi, fi);
    hi.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.I
            },
            d = hg(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.V && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.V));
        var f = function(g, k) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = gi(c), c.internalBlockOnErrors = b.I, k && 0 === c.internalErrorState || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            ii(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    hi.prototype.removeEventListener = function(a) {
        a && a.listenerId && ii(this, "removeEventListener", null, a.listenerId)
    };
    var ki = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var k = c;
            2 === c ? (k = 0, 2 === g && (k = 1)) : 3 === c && (k = 1, 1 === g && (k = 0));
            var m;
            if (0 === k)
                if (a.purpose && a.vendor) {
                    var n = ji(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && ji(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === k ? a.purpose && a.vendor ? ji(a.purpose.legitimateInterests,
                b) && ji(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        ji = function(a, b) {
            return !(!a || !a[b])
        },
        ii = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.m.__tcfapi) {
                var e = a.m.__tcfapi;
                e(b, 2, c, d)
            } else if (li(a)) {
                mi(a);
                var f = ++a.sb;
                a.M[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        li = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.m, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (k) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (k) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        mi = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.M[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Qh(a.m, "message", a.B))
        },
        ni = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = gi(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (ei({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var oi = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        pi = Ph('', 500);

    function qi() {
        var a = Yd.tcf || {};
        return Yd.tcf = a
    }
    var ui = function() {
        var a = qi(),
            b = new hi(A, {
                Ak: -1
            });
        if (!0 === A.gtag_enable_tcf_support && !a.active && ("function" === typeof A.__tcfapi || "function" === typeof b.m.__tcfapi || null != li(b))) {
            a.active = !0;
            a.ie = {};
            ri();
            a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState) si(a), ti(a);
                    else {
                        var d;
                        a.gdprApplies = c.gdprApplies;
                        if (!1 === c.gdprApplies) {
                            var e = {},
                                f;
                            for (f in oi) oi.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" ===
                            c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var g = {},
                                k;
                            for (k in oi)
                                if (oi.hasOwnProperty(k))
                                    if ("1" === k) {
                                        var m, n = c,
                                            p = !0;
                                        p = void 0 === p ? !1 : p;
                                        m = ni(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : ki(n, "1", 0) : !1;
                                        g["1"] = m
                                    } else g[k] = ki(c, k, oi[k]);
                            d = g
                        }
                        d && (a.tcString = c.tcString || "tcempty", a.ie = d, ti(a))
                    }
                })
            } catch (c) {
                si(a), ti(a)
            }
        }
    };

    function si(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function ri() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = pi, a);
        Zf(b)
    }

    function ti(a) {
        var b = {},
            c = (b.ad_storage = a.ie["1"] ? "granted" : "denied", b);
        $f(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: vi()
        })
    }
    var vi = function() {
            var a = qi();
            return a.active ? a.tcString || "" : ""
        },
        wi = function() {
            var a = qi();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        xi = function(a) {
            if (!oi.hasOwnProperty(String(a))) return !0;
            var b = qi();
            return b.active && b.ie ? !!b.ie[String(a)] : !0
        };
    var yi = function(a) {
        var b = String(a[Qb.Na] || "").replace(/_/g, "");
        0 === b.indexOf("cvt") && (b = "cvt");
        return b
    };
    var zi = ["L", "S", "Y"],
        Ai = ["S", "E"],
        Bi = {
            sampleRate: "0.005000",
            Uh: "",
            Th: Number("5"),
            Sh: Number("")
        },
        Ci = 0 <= D.location.search.indexOf("?gtm_latency=") || 0 <= D.location.search.indexOf("&gtm_latency="),
        Di;
    if (!(Di = Ci)) {
        var Ei = Math.random(),
            Fi = Bi.sampleRate;
        Di = Ei < Fi
    }
    var Gi = Di,
        Hi = "https://www.googletagmanager.com/a?id=" + S.D + "&cv=30",
        Ii = {
            label: S.D + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        };

    function Ji() {
        return [Hi, "&v=3&t=t", "&pid=" + ta(), "&rv=" + Xd.Wb].join("")
    }
    var Ki = Ji();

    function Li() {
        Ki = Ji()
    }
    var Mi = {},
        Ni = "",
        Oi = "",
        Pi = "",
        Qi = "",
        Ri = [],
        Si = "",
        Ti = {},
        Ui = !1,
        Vi = {},
        Wi = {},
        Xi = {},
        Yi = "",
        Zi = void 0,
        $i = {},
        aj = {},
        bj = void 0,
        cj = 5;
    0 < Bi.Th && (cj = Bi.Th);
    var dj = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Lj: function() {
                    return c < a ? !1 : Fa() - d[c % a] < b
                },
                kk: function() {
                    var f = c++ % a;
                    d[f] = Fa()
                }
            }
        }(cj, 1E3),
        ej = 1E3,
        fj = "";

    function gj(a) {
        var b = Zi;
        if (void 0 === b) return "";
        var c = $a("GTM"),
            d = $a("TAGGING"),
            e = $a("HEALTH"),
            f = Ki,
            g = Mi[b] ? "" : "&es=1",
            k = $i[b],
            m = hj(b),
            n = ij(),
            p = Ni,
            q = Oi,
            t = Yi,
            u = jj(a),
            r = Pi,
            v = Qi,
            w;
        return [f, g, k, m, c ? "&u=" + c : "", d ? "&ut=" + d : "", e ? "&h=" + e : "", n, p, q, t, u, r, v, w, Si ? "&dl=" + encodeURIComponent(Si) : "", 0 < Ri.length ? "&tdp=" + Ri.join(".") : "", Xd.Mc ?
            "&x=" + Xd.Mc : "", "&z=0"
        ].join("")
    }

    function lj() {
        bj && (A.clearTimeout(bj), bj = void 0);
        if (void 0 !== Zi && (!Mi[Zi] || Ni || Oi))
            if (aj[Zi] || dj.Lj() || 0 >= ej--) J(1), aj[Zi] = !0;
            else {
                dj.kk();
                var a = gj(!0);
                Ab(a);
                if (Qi || Si && 0 < Ri.length) {
                    var b = a.replace("/a?", "/td?");
                    Ab(b)
                }
                Mi[Zi] = !0;
                Si = Qi = Pi = Yi = Oi = Ni = "";
                Ri = []
            }
    }

    function mj() {
        bj || (bj = A.setTimeout(lj, 500))
    }

    function nj(a) {
        return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
    }

    function Fj() {
        2022 <= gj().length && lj()
    }

    function ij() {
        return "&tc=" + qc.filter(function(a) {
            return a
        }).length
    }
    var Hj = function(a, b) {
            if (Gi && !aj[a] && Zi !== a) {
                lj();
                Zi = a;
                Pi = Ni = "";
                $i[a] = "&e=" + nj(b) + "&eid=" + a;
                mj();
            }
        },
        Ij = function(a, b, c, d) {
            if (Gi && b) {
                var e = yi(b),
                    f = c + e;
                if (!aj[a]) {
                    a !== Zi && (lj(), Zi = a);
                    Ni = Ni ? Ni + "." + f : "&tr=" + f;
                    var g = b["function"];
                    if (!g) throw Error("Error: No function name given for function call.");
                    var k = (sc[g] ? "1" : "2") + e;
                    Pi = Pi ? Pi + "." + k : "&ti=" + k;
                    mj();
                    Fj()
                }
            }
        },
        Jj = function(a, b, c) {
            if (Gi && a && a[Qb.ob]) {
                var d = b + "." + a[Qb.ob];
                Xi[d] = c;
                "html" == yi(a) && fj == d && (Ni += ":" + Math.floor(c))
            }
        };

    function jj(a) {}

    function hj(a) {}
    var Qj = function(a, b, c) {
            if (Gi && void 0 !== a && !aj[a]) {
                a !== Zi && (lj(), Zi = a);
                var d = c + b;
                Oi = Oi ? Oi + "." + d : "&epr=" + d;
                mj();
                Fj()
            }
        },
        Rj = function(a, b, c) {},
        kj = void 0;
    ib();
    Rh() || hb("iPod");
    hb("iPad");
    !hb("Android") || jb() || ib() || hb("Opera") || hb("Silk");
    jb();
    !hb("Safari") || jb() || hb("Coast") || hb("Opera") || hb("Edge") || hb("Edg/") || hb("OPR") || ib() || hb("Silk") || hb("Android") || Sh();
    var Sj = {},
        Tj = null,
        Uj = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!Tj) {
                Tj = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = g.concat(k[m].split(""));
                    Sj[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === Tj[q] && (Tj[q] = p)
                    }
                }
            }
            for (var t = Sj[f], u = Array(Math.floor(b.length / 3)), r = t[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var y = b[v],
                    x = b[v + 1],
                    B = b[v + 2],
                    z = t[y >> 2],
                    C = t[(y & 3) << 4 | x >> 4],
                    H = t[(x & 15) << 2 | B >> 6],
                    I = t[B & 63];
                u[w++] = "" + z + C + H + I
            }
            var E = 0,
                K = r;
            switch (b.length - v) {
                case 2:
                    E = b[v + 1], K = t[(E & 15) << 2] || r;
                case 1:
                    var M = b[v];
                    u[w] = "" + t[M >> 2] + t[(M & 3) << 4 | E >> 4] + K + r
            }
            return u.join("")
        };
    var Vj = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Wj() {
        var a;
        return null != (a = A.google_tag_data) ? a : A.google_tag_data = {}
    }

    function Xj() {
        var a = A.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function Yj() {
        var a, b;
        return null != (b = null == (a = A.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function Zj() {
        var a, b;
        return "function" === typeof(null == (a = A.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function ak() {
        if (!Zj()) return null;
        var a = Wj();
        if (a.uach_promise) return a.uach_promise;
        var b = A.navigator.userAgentData.getHighEntropyValues(Vj).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    };
    var gk = function(a) {
        for (var b = [], c = D.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Hf: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    };

    function hk(a, b) {
        var c = gk(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Hf] || (d[c[e].Hf] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    aa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Hf].push(g)
            }
        }
        return d
    };
    var ik = /^\w+$/,
        jk = /^[\w-]+$/,
        kk = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        lk = function() {
            if (!Df().h() || !Pf()) return !0;
            var a = Mf("ad_storage");
            return null == a ? !0 : !!a
        },
        mk = function(a, b) {
            Of("ad_storage") ? lk() ? a() : Uf(a, "ad_storage") : b ? Ya("TAGGING", 3) : Tf(function() {
                mk(a, !0)
            }, ["ad_storage"])
        },
        ok = function(a) {
            return nk(a).map(function(b) {
                return b.aa
            })
        },
        nk = function(a) {
            var b = [];
            if (!ig(A) || !D.cookie) return b;
            var c = lg(a, D.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    hd: d.hd
                }, e++) {
                var f = pk(c[e]);
                if (null != f) {
                    var g = f,
                        k = g.version;
                    d.hd = g.aa;
                    var m = g.timestamp,
                        n = g.labels,
                        p = sa(b, function(q) {
                            return function(t) {
                                return t.aa === q.hd
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = qk(p.labels, n || [])) : b.push({
                        version: k,
                        aa: d.hd,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, t) {
                return t.timestamp - q.timestamp
            });
            return rk(b)
        };

    function qk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function sk(a) {
        return a && "string" == typeof a && a.match(ik) ? a : "_gcl"
    }
    var uk = function() {
            var a = Ye(A.location.href),
                b = We(a, "query", !1, void 0, "gclid"),
                c = We(a, "query", !1, void 0, "gclsrc"),
                d = We(a, "query", !1, void 0, "wbraid"),
                e = We(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || Re(f, "gclid");
                c = c || Re(f, "gclsrc");
                d = d || Re(f, "wbraid")
            }
            return tk(b, c, e, d)
        },
        tk = function(a, b, c, d) {
            var e = {},
                f = function(g, k) {
                    e[k] || (e[k] = []);
                    e[k].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && jk.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(jk)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        wk = function(a) {
            var b = uk();
            mk(function() {
                vk(b, !1, a)
            })
        };

    function vk(a, b, c, d, e) {
        function f(w, y) {
            var x = xk(w, g);
            x && (ug(x, y, k), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = sk(c.prefix);
        d = d || Fa();
        var k = Kg(c, d, !0);
        k.Ya = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var y = ["GCL", n, w];
                0 < e.length && y.push(e.join("."));
                return y.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                t = xk("gb", g),
                u = !1;
            if (!b)
                for (var r = nk(t), v = 0; v < r.length; v++) r[v].aa === q && r[v].labels &&
                    0 < r[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }
    var zk = function(a, b) {
            var c = ch(!0);
            mk(function() {
                for (var d = sk(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== kk[f]) {
                        var g = xk(f, d),
                            k = c[g];
                        if (k) {
                            var m = Math.min(yk(k), Fa()),
                                n;
                            b: {
                                var p = m;
                                if (ig(A))
                                    for (var q = lg(g, D.cookie, void 0, "ad_storage"), t = 0; t < q.length; ++t)
                                        if (yk(q[t]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var u = Kg(b, m, !0);
                                u.Ya = "ad_storage";
                                ug(g, k, u)
                            }
                        }
                    }
                }
                vk(tk(c.gclid, c.gclsrc), !1, b)
            })
        },
        xk = function(a, b) {
            var c = kk[a];
            if (void 0 !== c) return b + c
        },
        yk = function(a) {
            return 0 !== Ak(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function pk(a) {
        var b = Ak(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            aa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function Ak(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !jk.test(a[2]) ? [] : a
    }
    var Bk = function(a, b, c, d, e) {
            if (ra(b) && ig(A)) {
                var f = sk(e),
                    g = function() {
                        for (var k = {}, m = 0; m < a.length; ++m) {
                            var n = xk(a[m], f);
                            if (n) {
                                var p = lg(n, D.cookie, void 0, "ad_storage");
                                p.length && (k[n] = p.sort()[p.length - 1])
                            }
                        }
                        return k
                    };
                mk(function() {
                    ih(g, b, c, d)
                })
            }
        },
        rk = function(a) {
            return a.filter(function(b) {
                return jk.test(b.aa)
            })
        },
        Ck = function(a, b) {
            if (ig(A)) {
                for (var c = sk(b.prefix), d = {}, e = 0; e < a.length; e++) kk[a[e]] && (d[a[e]] = kk[a[e]]);
                mk(function() {
                    l(d, function(f, g) {
                        var k = lg(c + g, D.cookie, void 0, "ad_storage");
                        k.sort(function(u,
                            r) {
                            return yk(r) - yk(u)
                        });
                        if (k.length) {
                            var m = k[0],
                                n = yk(m),
                                p = 0 !== Ak(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                t;
                            t = 0 !== Ak(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [t];
                            vk(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function Dk(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Ek = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (Pf()) {
                var c = uk();
                if (Dk(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    jh(function() {
                        return d
                    }, 3);
                    jh(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        Fk = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!lk()) return e;
            var f = nk(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var k = f[0],
                    m = f[0].timestamp,
                    n = [k.version, Math.round(m /
                        1E3), k.aa].concat(k.labels || [], [b]).join("."),
                    p = Kg(c, m, !0);
                p.Ya = "ad_storage";
                ug(a, n, p)
            }
            return e
        };

    function Gk(a, b) {
        var c = sk(b),
            d = xk(a, c);
        if (!d) return 0;
        for (var e = nk(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Hk(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var Ik = function(a) {
        var b = Math.max(Gk("aw", a), Hk(lk() ? hk() : {}));
        return Math.max(Gk("gb", a), Hk(lk() ? hk("_gac_gb", !0) : {})) > b
    };
    var Nk = /[A-Z]+/,
        Ok = /\s/,
        Pk = function(a) {
            if (h(a)) {
                a = Da(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Nk.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || Ok.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return {
                            id: a,
                            prefix: c,
                            T: c + "-" + d[0],
                            K: d
                        }
                    }
                }
            }
        },
        Rk = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Pk(a[c]);
                d && (b[d.id] = d)
            }
            Qk(b);
            var e = [];
            l(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function Qk(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.K[1] && b.push(d.T)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Sk = function(a, b, c, d) {
        var e = yb(),
            f;
        if (1 === e) a: {
            var g = le;g = g.toLowerCase();
            for (var k = "https://" + g, m = "http://" + g, n = 1, p = D.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var t = p[q].src;
                if (t) {
                    t = t.toLowerCase();
                    if (0 === t.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === t.indexOf(k) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != A.location.protocol ? a : b) + c
    };
    var Uk = function(a, b, c) {
            if (A[a.functionName]) return b.yf && F(b.yf), A[a.functionName];
            var d = Tk();
            A[a.functionName] = d;
            if (a.Yd)
                for (var e = 0; e < a.Yd.length; e++) A[a.Yd[e]] = A[a.Yd[e]] || Tk();
            a.fe && void 0 === A[a.fe] && (A[a.fe] = c);
            xb(Sk("https://", "http://", a.Gf), b.yf, b.Xj);
            return d
        },
        Tk = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Vk = {
            functionName: "_googWcmImpl",
            fe: "_googWcmAk",
            Gf: "www.gstatic.com/wcm/loader.js"
        },
        Wk = {
            functionName: "_gaPhoneImpl",
            fe: "ga_wpid",
            Gf: "www.gstatic.com/gaphone/loader.js"
        },
        Xk = {
            Xh: "",
            Wi: "5"
        },
        Yk = {
            functionName: "_googCallTrackingImpl",
            Yd: [Wk.functionName, Vk.functionName],
            Gf: "www.gstatic.com/call-tracking/call-tracking_" + (Xk.Xh || Xk.Wi) + ".js"
        },
        Zk = {},
        $k = function(a, b, c, d) {
            J(22);
            if (c) {
                d = d || {};
                var e = Uk(Vk, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.Xa && (f.autoreplace = c);
                e(2, d.Xa, f, c, 0, Ea(), d.options)
            }
        },
        al = function(a, b, c, d) {
            J(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Ea()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    Zk[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.K.length ? (e.adData = {
                            ak: g.K[0],
                            cl: g.K[1]
                        }, Zk[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.T
                        }, Zk[g.id] = !0))
                }(e.gaData || e.adData) && Uk(Yk, d)(d.Xa, e, d.options)
            }
        },
        bl = function() {
            var a = !1;
            return a
        },
        cl = function(a, b) {
            if (a)
                if (Ch()) {} else {
                    if (h(a)) {
                        var c =
                            Pk(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = P(b, N.g.Ci);
                    if (f && ra(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var k = Pk(f[g]);
                            k && (d.push(k), (a.id === k.id || a.id === a.T && a.T === k.T) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var m = P(b, N.g.wg),
                            n;
                        if (m) {
                            ra(m) ? n = m : n = [m];
                            var p = P(b, N.g.ug),
                                q = P(b, N.g.vg),
                                t = P(b, N.g.xg),
                                u = P(b, N.g.Bi),
                                r = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var w = 0; w < n.length; w++)
                                if (w < v)
                                    if (d) al(d, n[w], u, {
                                        Xa: r,
                                        options: t
                                    });
                                    else if ("AW" === a.prefix && a.K[1]) bl() ? al([a], n[w], u || "US", {
                                Xa: r,
                                options: t
                            }) : $k(a.K[0], a.K[1], n[w], {
                                Xa: r,
                                options: t
                            });
                            else if ("UA" === a.prefix)
                                if (bl()) al([a], n[w], u || "US", {
                                    Xa: r
                                });
                                else {
                                    var y = a.T,
                                        x = n[w],
                                        B = {
                                            Xa: r
                                        };
                                    J(23);
                                    if (x) {
                                        B = B || {};
                                        var z = Uk(Wk, B, y),
                                            C = {};
                                        void 0 !== B.Xa ? C.receiver = B.Xa : C.replace = x;
                                        C.ga_wpid = y;
                                        C.destination = x;
                                        z(2, Ea(), C)
                                    }
                                }
                        }
                    }
                }
        };
    var dl = function(a, b, c) {
            this.target = a;
            this.eventName = b;
            this.h = c;
            this.m = {};
            this.metadata = G(c.eventMetadata || {});
            this.J = !1
        },
        el = function(a, b, c) {
            var d = P(a.h, b);
            void 0 !== d ? a.m[b] = d : void 0 !== c && (a.m[b] = c)
        },
        fl = function(a, b, c) {
            var d = Ee(a.target.T);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };

    function gl(a) {
        return {
            getDestinationId: function() {
                return a.target.T
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                return void(a.eventName = b)
            },
            getHitData: function(b) {
                return a.m[b]
            },
            setHitData: function(b, c) {
                return void(a.m[b] = c)
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.m[b] && (a.m[b] = c)
            },
            copyToHitData: function(b, c) {
                el(a, b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                return void(a.metadata[b] = c)
            },
            abort: function() {
                return void(a.J = !0)
            },
            getProcessedEvent: function() {
                return a
            },
            getFromEventContext: function(b) {
                return P(a.h, b)
            }
        }
    };
    var xl = function(a, b, c, d, e, f, g, k, m, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.M = d;
            this.m = e;
            this.I = f;
            this.V = g;
            this.B = k;
            this.eventMetadata = m;
            this.R = n;
            this.P = p;
            this.F = q
        },
        P = function(a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.M[b]) return a.M[b];
            if (void 0 !== a.m[b]) return a.m[b];
            Gi && yl(a, a.I[b], a.V[b]) && (J(71), J(79));
            return void 0 !== a.I[b] ? a.I[b] : void 0 !== a.B[b] ? a.B[b] : c
        },
        zl = function(a) {
            function b(g) {
                for (var k = Object.keys(g), m = 0; m < k.length; ++m) c[k[m]] = 1
            }
            var c = {};
            b(a.h);
            b(a.M);
            b(a.m);
            b(a.I);
            if (Gi)
                for (var d = Object.keys(a.V), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        J(71);
                        J(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        Al = function(a, b, c) {
            function d(m) {
                Ob(m) && l(m, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.B[b]), d(a.I[b]), d(a.m[b]), d(a.M[b]));
            c && 2 !== c || d(a.h[b]);
            if (Gi) {
                var g = f,
                    k = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.B[b]), d(a.V[b]), d(a.m[b]), d(a.M[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== g || yl(a, e, k)) J(71), J(81);
                f = g;
                e = k
            }
            return f ? e : void 0
        },
        Bl = function(a) {
            var b = [N.g.vc, N.g.vd, N.g.wd, N.g.xd, N.g.yd, N.g.zd, N.g.Ad],
                c = {},
                d = !1,
                e = function(k) {
                    for (var m = 0; m < b.length; m++) void 0 !== k[b[m]] && (c[b[m]] = k[b[m]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.M) || e(a.m)) return c;
            e(a.I);
            if (Gi) {
                var f = c,
                    g = d;
                c = {};
                d = !1;
                e(a.V);
                yl(a, c, f) && (J(71), J(82));
                c = f;
                d = g
            }
            if (d) return c;
            e(a.B);
            return c
        },
        yl = function(a, b, c) {
            if (!Gi) return !1;
            try {
                if (b === c) return !1;
                var d = Mb(b);
                if (d !== Mb(c) || !(Ob(b) && Ob(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e = 0; e < b.length; e++)
                        if (yl(a,
                                b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b)
                        if (!c.hasOwnProperty(g) || yl(a, b[g], c[g])) return !0
                }
            } catch (k) {
                J(72)
            }
            return !1
        },
        Cl = function(a, b) {
            this.Ki = a;
            this.Li = b;
            this.I = {};
            this.Pg = {};
            this.h = {};
            this.M = {};
            this.m = {};
            this.Kc = {};
            this.B = {};
            this.mc = function() {};
            this.sb = function() {};
            this.V = !1
        },
        Dl = function(a, b) {
            a.I = b;
            return a
        },
        El = function(a, b) {
            a.Pg = b;
            return a
        },
        Fl = function(a, b) {
            a.h = b;
            return a
        },
        Gl = function(a, b) {
            a.M = b;
            return a
        },
        Hl = function(a, b) {
            a.m = b;
            return a
        },
        Il = function(a,
            b) {
            a.Kc = b;
            return a
        },
        Jl = function(a, b) {
            a.B = b || {};
            return a
        },
        Kl = function(a, b) {
            a.mc = b;
            return a
        },
        Ll = function(a, b) {
            a.sb = b;
            return a
        },
        Ml = function(a) {
            a.V = !0;
            return a
        },
        Nl = function(a) {
            return new xl(a.Ki, a.Li, a.I, a.Pg, a.h, a.M, a.m, a.Kc, a.B, a.mc, a.sb, a.V)
        };

    function Sl() {
        return "attribution-reporting"
    }

    function Tl(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var Ul = !1;

    function Vl() {
        if (Tl("join-ad-interest-group") && pa(qb.joinAdInterestGroup)) return !0;
        Ul || ($h('A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Ul = !0);
        return Tl("join-ad-interest-group") && pa(qb.joinAdInterestGroup)
    }

    function Wl(a, b) {
        var c = void 0;
        try {
            c = D.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Fa() - d) {
                Ya("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= D.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                Ya("TAGGING", 10);
                return
            }
        } catch (e) {}
        zb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Fa()
        }, c)
    }

    function Xl() {
        return R(60) ? "https://td.doubleclick.net" : "https://googleads.g.doubleclick.net"
    };
    var Yl = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        Zl = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        $l = /^\d+\.fls\.doubleclick\.net$/,
        am = /;gac=([^;?]+)/,
        bm = /;gacgb=([^;?]+)/,
        cm = /;gclaw=([^;?]+)/,
        dm = /;gclgb=([^;?]+)/;

    function em(a, b) {
        if ($l.test(D.location.host)) {
            var c = D.location.href.match(b);
            return c && 2 == c.length && c[1].match(Yl) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], k = 0; k < g.length; k++) f.push(g[k].aa);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var fm = function(a, b, c) {
        var d = lk() ? hk("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var k = Fk("_gac_gb_" + g, a, b, c);
            f = f || 0 !== k.length && k.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + k.join(","))
        }
        return {
            xj: f ? e.join(";") : "",
            wj: em(d, bm)
        }
    };

    function gm(a, b, c) {
        if ($l.test(D.location.host)) {
            var d = D.location.href.match(c);
            if (d && 2 == d.length && d[1].match(Zl)) return [{
                aa: d[1]
            }]
        } else return nk((a || "_gcl") + b);
        return []
    }
    var hm = function(a) {
            return gm(a, "_aw", cm).map(function(b) {
                return b.aa
            }).join(".")
        },
        im = function(a) {
            return gm(a, "_gb", dm).map(function(b) {
                return b.aa
            }).join(".")
        },
        jm = function(a, b) {
            var c = Fk((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var km = function() {
        if (pa(A.__uspapi)) {
            var a = "";
            try {
                A.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var Vm = {
        C: {
            Jf: "ads_conversion_hit",
            Fk: "container_execute_start",
            Of: "container_setup_end",
            kc: "container_setup_start",
            Nf: "container_execute_end",
            Pf: "container_yield_end",
            ue: "container_yield_start",
            Mg: "event_execute_end",
            Ng: "event_setup_end",
            Jc: "event_setup_start",
            Og: "ga4_conversion_hit",
            Vb: "page_load",
            Lk: "pageview",
            nb: "snippet_load",
            ah: "tag_callback_error",
            bh: "tag_callback_failure",
            dh: "tag_callback_success",
            eh: "tag_execute_end",
            Xb: "tag_execute_start"
        }
    };
    var Wm = !1,
        Xm = "L S Y E TC HTC".split(" "),
        Ym = ["S", "E"],
        Zm = ["TS", "TE"];
    var wn = function(a, b, c, d, e, f) {
            var g = {};
            return g
        },
        xn = function(a) {
            var b = !1;
            return b
        },
        yn = function(a, b) {},
        zn = function() {
            var a = {};
            return a
        },
        pn = function() {
            var a = {};
            return a
        },
        An = function() {},
        Bn = function(a, b, c) {},
        Cn = function(a) {
            Kb() && Kb().mark(S.D + "_" + a + "_start")
        },
        Dn = function(a) {
            if (Kb()) {
                var b = Kb(),
                    c = S.D + "_" +
                    a + "_start",
                    d = S.D + "_" + a + "_duration";
                b.measure(d, c);
                var e = Kb().getEntriesByName(d)[0];
                b.clearMarks(c);
                b.clearMeasures(d);
                var f = Yd._p || {};
                void 0 === f[a] && (f[a] = e.duration, Yd._p = f);
                return e.duration
            }
        },
        En = function() {
            var a = wn("PAGEVIEW");
            if (gn(a.Va, "mark")[0]) {
                var b = Kb();
                b.clearMarks(a.Va);
                b.clearMeasures("GTM-" + Vm.C.Vb + ":to:PAGEVIEW")
            }
            var c = wn(Vm.C.Vb);
            xn(a) && yn(a, c)
        };
    var Fn = function(a, b) {
        var c, d = A.GooglebQhCsO;
        d || (d = {}, A.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var Gn = function(a, b) {
        var c = Wh(a, "fmt");
        if (b) {
            var d = Wh(a, "random"),
                e = Wh(a, "label") || "";
            if (!d) return !1;
            var f = Uj(decodeURIComponent(e.replace(/\+/g, " ")) + ":" + decodeURIComponent(d.replace(/\+/g, " ")));
            if (!Fn(f, b)) return !1
        }
        c && 4 != c && (a = Yh(a, "rfmt", c));
        var g = Yh(a, "fmt", 4);
        xb(g, function() {
            A.google_noFurtherRedirects && b && b.call && (A.google_noFurtherRedirects = null, b())
        }, void 0, void 0, D.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Wn = function() {
            this.h = {}
        },
        Xn = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        Yn = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        $n = function(a, b, c, d) {};

    function bo(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Ye("" + c + b).href
        }
    }

    function co() {
        return !!Xd.Wd && "SGTM_TOKEN" !== Xd.Wd.split("@@").join("")
    };
    var fo = function(a, b, c, d) {
            if (!eo() && !Jh(a)) {
                var e = c ? "/gtag/js" : "/gtm.js",
                    f = "?id=" + encodeURIComponent(a) + "&l=" + Xd.ca,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c");
                var k = co();
                k && (f += "&sign=" + Xd.Wd);
                var m = fe || he ? bo(b, e + f) : void 0;
                if (!m) {
                    var n = Xd.nd + e;
                    k && rb && g && (n = rb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    m = Sk("https://", "http://", n + f)
                }
                Hh().container[a] = {
                    state: 1,
                    context: d
                };
                xb(m)
            }
        },
        go = function(a, b, c) {
            var d;
            if (d = !eo()) {
                var e = Hh().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (Kh()) Hh().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c
                }, J(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Xd.ca + "&cx=c";
                    co() && (f += "&sign=" + Xd.Wd);
                    var g = fe || he ? bo(b, f) : void 0;
                    g || (g = Sk("https://", "http://", Xd.nd + f));
                    Hh().destination[a] = {
                        state: 1,
                        context: c
                    };
                    xb(g)
                }
        };

    function eo() {
        if (Ch()) {
            return !0
        }
        return !1
    };
    var ho = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        io = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        jo = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        ko = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        no = function(a) {
            var b = xe("gtm.allowlist") || xe("gtm.whitelist");
            b && J(9);
            de && (b = ["google", "gtagfl", "lcl", "zone"]);
            lo() && (de ?
                J(116) : J(117), mo && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
            var c = b && Ka(Ca(b), io),
                d = xe("gtm.blocklist") || xe("gtm.blacklist");
            d || (d = xe("tagTypeBlacklist")) && J(3);
            d ? J(8) : d = [];
            lo() && (d = Ca(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ca(d).indexOf("google") && J(2);
            var e = d && Ka(Ca(d), jo),
                f = {};
            return function(g) {
                var k = g && g[Qb.Na];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== f[k]) return f[k];
                var m = pe[k] || [],
                    n = a(k, m);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(k))
                            if (m && 0 < m.length)
                                for (var q = 0; q < m.length; q++) {
                                    if (0 > c.indexOf(m[q])) {
                                        J(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var t = !1;
                if (d) {
                    var u = 0 <= e.indexOf(k);
                    if (u) t = u;
                    else {
                        var r = va(e, m || []);
                        r && J(10);
                        t = r
                    }
                }
                var v = !n || t;
                v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = va(e, ko));
                return f[k] = v
            }
        },
        mo = !1;
    var lo = function() {
        return ho.test(A.location && A.location.hostname)
    };
    var oo = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        po = {},
        qo = Object.freeze((po[N.g.Ea] = !0, po)),
        ro = 0 <= D.location.search.indexOf("?gtm_diagnostics=") || 0 <= D.location.search.indexOf("&gtm_diagnostics="),
        to = function(a, b, c) {
            if (Gi && "config" === a && !(1 < Pk(b).K.length)) {
                var d, e = sb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = G(c.I);
                G(c.h, f);
                var g = [],
                    k;
                for (k in d) {
                    var m = so(d[k], f);
                    m.length && (ro && console.log(m), g.push(k))
                }
                if (g.length) {
                    if (g.length) {
                        var n = b + "*" + g.join(".");
                        Qi = Qi ? Qi + "!" + n : "&tdc=" + n
                    }
                    Ya("TAGGING",
                        oo[D.readyState] || 14)
                }
                d[b] = f
            }
        };

    function uo(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function so(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, t) {
                var u = t[q];
                return void 0 === u ? qo[q] : u
            },
            f;
        for (f in uo(a, b)) {
            var g = (d ? d + "." : "") + f,
                k = e(f, a),
                m = e(f, b),
                n = "object" === Mb(k) || "array" === Mb(k),
                p = "object" === Mb(m) || "array" === Mb(m);
            if (n && p) so(k, m, c, g);
            else if (n || p || k !== m) c[g] = !0
        }
        return Object.keys(c)
    };
    var vo = !1,
        wo = 0,
        xo = [];

    function yo(a) {
        if (!vo) {
            var b = D.createEventObject,
                c = "complete" == D.readyState,
                d = "interactive" == D.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                vo = !0;
                for (var e = 0; e < xo.length; e++) F(xo[e])
            }
            xo.push = function() {
                for (var f = 0; f < arguments.length; f++) F(arguments[f]);
                return 0
            }
        }
    }

    function zo() {
        if (!vo && 140 > wo) {
            wo++;
            try {
                D.documentElement.doScroll("left"), yo()
            } catch (a) {
                A.setTimeout(zo, 50)
            }
        }
    }
    var Ao = function(a) {
        vo ? a() : xo.push(a)
    };
    var Bo = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: S.D
        }
    };
    var Do = function(a, b) {
            this.h = !1;
            this.I = [];
            this.M = {
                tags: []
            };
            this.V = !1;
            this.m = this.B = 0;
            Co(this, a, b)
        },
        Eo = function(a, b, c, d) {
            if (ae.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Ob(d) && (e = G(d, e));
            e.id = c;
            e.status = "timeout";
            return a.M.tags.push(e) - 1
        },
        Fo = function(a, b, c, d) {
            var e = a.M.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Go = function(a) {
            if (!a.h) {
                for (var b = a.I, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.I.length = 0
            }
        },
        Co = function(a, b, c) {
            void 0 !== b && Ho(a, b);
            c && A.setTimeout(function() {
                return Go(a)
            }, Number(c))
        },
        Ho =
        function(a, b) {
            var c = Ha(function() {
                return F(function() {
                    b(S.D, a.M)
                })
            });
            a.h ? c() : a.I.push(c)
        },
        Io = function(a) {
            a.B++;
            return Ha(function() {
                a.m++;
                a.V && a.m >= a.B && Go(a)
            })
        },
        Jo = function(a) {
            a.V = !0;
            a.m >= a.B && Go(a)
        };
    var Ko = {},
        Lo = function() {
            return A.GoogleAnalyticsObject && A[A.GoogleAnalyticsObject]
        },
        Mo = !1;
    var No = function(a) {
            A.GoogleAnalyticsObject || (A.GoogleAnalyticsObject = a || "ga");
            var b = A.GoogleAnalyticsObject;
            if (A[b]) A.hasOwnProperty(b);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Ea());
                A[b] = c
            }
            return A[b]
        },
        Oo = function(a) {
            if (Pf()) {
                var b = Lo();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function Po() {
        return A.GoogleAnalyticsObject || "ga"
    }
    var Qo = function(a) {},
        Ro = function(a, b) {
            return function() {
                var c = Lo(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            k = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };

    function Wo(a, b, c, d) {
        var e = qc[a],
            f = Xo(a, b, c, d);
        if (!f) return null;
        var g = zc(e[Qb.Zg], c, []);
        if (g && g.length) {
            var k = g[0];
            f = Wo(k.index, {
                R: f,
                P: 1 === k.qh ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Xo(a, b, c, d) {
        function e() {
            if (f[Qb.Qi]) k();
            else {
                var w = Ac(f, c, []),
                    y = w[Qb.Yh];
                if (null != y)
                    for (var x = 0; x < y.length; x++)
                        if (!ag(y[x])) {
                            k();
                            return
                        }
                var B = Eo(c.Cb, String(f[Qb.Na]), Number(f[Qb.ob]), w[Qb.Ri]),
                    z = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!z) {
                        z = !0;
                        var E = Fa() - I;
                        Ij(c.id, qc[a], "5", E);
                        Fo(c.Cb, B, "success", E);
                        R(70) && Bn(c, f, Vm.C.dh);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!z) {
                        z = !0;
                        var E = Fa() - I;
                        Ij(c.id, qc[a], "6", E);
                        Fo(c.Cb, B, "failure", E);
                        R(70) && Bn(c, f, Vm.C.bh);
                        k()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Ij(c.id, f, "1");
                var C = function() {
                    var E = Fa() - I;
                    Ij(c.id, f, "7", E);
                    Fo(c.Cb, B, "exception", E);
                    R(70) && Bn(c, f, Vm.C.ah);
                    z || (z = !0, k())
                };
                if (R(70)) {
                    var H = wn(Vm.C.Xb, S.D, c.id, Number(f[Qb.ob]), c.name, yi(f));
                    xn(H)
                }
                var I = Fa();
                try {
                    yc(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (E) {
                    C(E)
                }
                R(70) && Bn(c, f, Vm.C.eh)
            }
        }
        var f = qc[a],
            g = b.R,
            k = b.P,
            m = b.terminate;
        if (c.sf(f)) return null;
        var n = zc(f[Qb.fh], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Wo(p.index, {
                    R: g,
                    P: k,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            k = 2 === p.qh ? m : q
        }
        if (f[Qb.Vg] || f[Qb.Ti]) {
            var t = f[Qb.Vg] ? rc : c.yk,
                u = g,
                r = k;
            if (!t[a]) {
                e = Ha(e);
                var v = Yo(a, t, e);
                g = v.R;
                k = v.P
            }
            return function() {
                t[a](u, r)
            }
        }
        return e
    }

    function Yo(a, b, c) {
        var d = [],
            e = [];
        b[a] = Zo(d, e, c);
        return {
            R: function() {
                b[a] = pp;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            P: function() {
                b[a] = Dp;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Zo(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function pp(a) {
        a()
    }

    function Dp(a, b) {
        b()
    };
    var Fp = function(a, b) {
            return 1 === arguments.length ? Ep("config", a) : Ep("config", a, b)
        },
        Gp = function(a, b, c) {
            c = c || {};
            c[N.g.Bb] = a;
            return Ep("event", b, c)
        };

    function Ep(a) {
        return arguments
    }
    var Hp = function() {
        this.h = [];
        this.m = []
    };
    Hp.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.m.length; f++) try {
            this.m[f](e)
        } catch (g) {}
    };
    Hp.prototype.listen = function(a) {
        this.m.push(a)
    };
    Hp.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    Hp.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var Jp = function(a, b, c) {
            Ip().enqueue(a, b, c)
        },
        Lp = function() {
            var a = Kp;
            Ip().listen(a)
        };

    function Ip() {
        var a = Yd.mb;
        a || (a = new Hp, Yd.mb = a);
        return a
    }
    var Tp = function(a) {
            var b = Yd.zones;
            return b ? b.getIsAllowedFn(Eh(), a) : function() {
                return !0
            }
        },
        Up = function(a) {
            var b = Yd.zones;
            return b ? b.isActive(Eh(), a) : !0
        };
    var Xp = function(a, b) {
        for (var c = [], d = 0; d < qc.length; d++)
            if (a[d]) {
                var e = qc[d];
                var f = Io(b.Cb);
                try {
                    var g = Wo(d, {
                        R: f,
                        P: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = c,
                            m = k.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = sc[p];
                        m.call(k, {
                            Mh: n,
                            Eh: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else Vp(d, b), f()
                } catch (u) {
                    f()
                }
            }
        c.sort(Wp);
        for (var t = 0; t < c.length; t++) c[t].execute();
        return 0 < c.length
    };

    function Wp(a, b) {
        var c, d = b.Eh,
            e = a.Eh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Mh,
                k = b.Mh;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }

    function Vp(a, b) {
        if (Gi) {
            var c = function(d) {
                var e = b.sf(qc[d]) ? "3" : "4",
                    f = zc(qc[d][Qb.Zg], b, []);
                f && f.length && c(f[0].index);
                Ij(b.id, qc[d], e);
                var g = zc(qc[d][Qb.fh], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var $p = !1,
        Yp;
    var eq = function(a) {
        var b = Fa(),
            c = a["gtm.uniqueEventId"],
            d = a["gtm.priorityId"],
            e = a.event;
        if (R(70)) {
            var f = wn(Vm.C.Jc, S.D, c, void 0, e);
            xn(f)
        }
        if ("gtm.js" === e) {
            if ($p) return !1;
            $p = !0;
        }
        var m, n = !1;
        if (Up(c)) m = Tp(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
            n = !0;
            m = Tp(Number.MAX_SAFE_INTEGER)
        }
        Hj(c,
            e);
        var p = a.eventCallback,
            q = a.eventTimeout,
            t = {
                id: c,
                priorityId: d,
                name: e,
                sf: no(m),
                yk: [],
                yh: function() {
                    J(6);
                    Ya("HEALTH", 0)
                },
                jh: aq(),
                kh: bq(c),
                Cb: new Do(function() {
                    if (R(70)) {
                        var x = wn(Vm.C.Mg, S.D, c, void 0, e);
                        if (xn(x)) {
                            var B = wn(Vm.C.Jc, S.D, c, void 0, e);
                            yn(x, B)
                        }
                        if ("gtm.load" === e) {
                            var z = wn(Vm.C.Nf, S.D);
                            if (xn(z)) {
                                var C = wn(Vm.C.kc, S.D);
                                yn(z, C)
                            }
                            An();
                        }
                    }
                    p && p.apply(p, [].slice.call(arguments, 0))
                }, q)
            },
            u = Ec(t);
        n && (u = cq(u));
        if (R(70)) {
            var r = wn(Vm.C.Ng, S.D, c, void 0, e);
            if (xn(r)) {
                var v = wn(Vm.C.Jc, S.D, c, void 0, e);
                yn(r, v)
            }
        }
        var w = Xp(u, t),
            y = !1;
        Jo(t.Cb);
        "gtm.js" !== e && "gtm.sync" !== e || Qo(S.D);
        return dq(u, w) || y
    };

    function bq(a) {
        return function(b) {
            Gi && (Pb(b) || Rj(a, "input", b))
        }
    }

    function aq() {
        var a = {};
        a.event = Be("event", 1);
        a.ecommerce = Be("ecommerce", 1);
        a.gtm = Be("gtm");
        a.eventModel = Be("eventModel");
        return a
    }

    function cq(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(qc[c][Qb.Na]);
                if ($d[d] || void 0 !== qc[c][Qb.Ui] || qe[d]) b[c] = !0;
                R(58) || 0 !== qc[c][Qb.Na].indexOf("__ccd") && 0 !== qc[c][Qb.Na].indexOf("__ogt") && "__set_product_settings" !== qc[c][Qb.Na] || (b[c] = !0)
            }
        return b
    }

    function dq(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && qc[c] && !ae[String(qc[c][Qb.Na])]) return !0;
        return !1
    }
    var gq = function(a, b, c, d) {
            fq.push("event", [b, a], c, d)
        },
        hq = function(a, b, c, d) {
            fq.push("get", [a, b], c, d)
        },
        iq = function() {
            this.status = 1;
            this.I = {};
            this.h = {};
            this.M = {};
            this.V = null;
            this.B = {};
            this.m = !1
        },
        jq = function(a, b, c, d) {
            var e = Fa();
            this.type = a;
            this.m = e;
            this.W = b || "";
            this.h = c;
            this.messageContext = d
        },
        kq = function() {
            this.m = {};
            this.B = {};
            this.h = []
        },
        lq = function(a, b) {
            var c = Pk(b);
            return a.m[c.T] = a.m[c.T] || new iq
        },
        mq = function(a, b, c, d) {
            if (d.W) {
                var e = lq(a, d.W),
                    f = e.V;
                if (f) {
                    var g = G(c),
                        k = G(e.I[d.W]),
                        m = G(e.B),
                        n = G(e.h),
                        p = G(a.B),
                        q = {};
                    if (Gi) try {
                        q = G(ue)
                    } catch (v) {
                        J(72)
                    }
                    var t = Pk(d.W).prefix,
                        u = function(v) {
                            Qj(d.messageContext.eventId, t, v);
                            var w = g[N.g.Ob];
                            w && F(w)
                        },
                        r = Nl(Ll(Kl(Jl(Hl(Gl(Il(Fl(El(Dl(new Cl(d.messageContext.eventId, d.messageContext.priorityId), g), k), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (u) {
                                var v = u;
                                u = void 0;
                                v("2")
                            }
                        }), function() {
                            if (u) {
                                var v = u;
                                u = void 0;
                                v("3")
                            }
                        }));
                    try {
                        Qj(d.messageContext.eventId, t, "1"), to(d.type, d.W, r), f(d.W, b, d.m, r)
                    } catch (v) {
                        Qj(d.messageContext.eventId, t, "4")
                    }
                }
            }
        };
    kq.prototype.register = function(a, b, c) {
        var d = lq(this, a);
        3 !== d.status && (d.V = b, d.status = 3, c && (G(d.h, c), d.h = c), this.flush())
    };
    kq.prototype.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!Pk(c)) return;
            if (c) {
                var e = Pk(c);
                e && 1 === lq(this, c).status && (lq(this, c).status = 2, this.push("require", [{}], e.T, {}))
            }
            lq(this, c).m && (d.deferrable = !1)
        }
        this.h.push(new jq(a, c, b, d));
        d.deferrable || this.flush()
    };
    kq.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0];
            if (f.messageContext.deferrable) !f.W || lq(this, f.W).m ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = lq(this, f.W);
                        if (3 !== g.status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        l(f.h[0], function(t, u) {
                            G(La(t, u), b.B)
                        });
                        break;
                    case "config":
                        g = lq(this, f.W);
                        e.ab = {};
                        l(f.h[0], function(t) {
                            return function(u, r) {
                                G(La(u, r), t.ab)
                            }
                        }(e));
                        var k = !!e.ab[N.g.Ic];
                        delete e.ab[N.g.Ic];
                        var m = Pk(f.W),
                            n = m.T === m.id;
                        k || (n ? g.B = {} : g.I[f.W] = {});
                        g.m && k || mq(this, N.g.xa, e.ab, f);
                        g.m = !0;
                        n ? G(e.ab, g.B) : (G(e.ab, g.I[f.W]), J(70));
                        d = !0;
                        break;
                    case "event":
                        g = lq(this, f.W);
                        e.gd = {};
                        l(f.h[0], function(t) {
                            return function(u, r) {
                                G(La(u, r), t.gd)
                            }
                        }(e));
                        mq(this, f.h[1], e.gd, f);
                        break;
                    case "get":
                        g = lq(this, f.W);
                        var p = {},
                            q = (p[N.g.Ta] = f.h[0], p[N.g.jb] = f.h[1], p);
                        mq(this, N.g.Ca, q, f)
                }
                this.h.shift();
                nq(this, f)
            }
            e = {
                ab: e.ab,
                gd: e.gd
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var nq = function(a, b) {
            if ("require" !== b.type)
                if (b.W)
                    for (var c = lq(a, b.W).M[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.m)
                        if (a.m.hasOwnProperty(e)) {
                            var f = a.m[e];
                            if (f && f.M)
                                for (var g = f.M[b.type] || [], k = 0; k < g.length; k++) g[k]()
                        }
        },
        oq = function(a, b) {
            var c = fq,
                d = G(b);
            G(lq(c, a).h, d);
            lq(c, a).h = d
        },
        fq = new kq;
    var pq = {},
        qq = {},
        rq = function(a) {
            for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
                    md: d.md,
                    jd: d.jd
                }, e++) {
                var f = a[e];
                if (0 <= f.indexOf("-")) d.md = Pk(f), d.md && (sa(Fh(), function(p) {
                    return function(q) {
                        return p.md.T === q
                    }
                }(d)) ? b.push(f) : c.push(f));
                else {
                    var g = pq[f] || [];
                    d.jd = {};
                    g.forEach(function(p) {
                        return function(q) {
                            return p.jd[q] = !0
                        }
                    }(d));
                    for (var k = Eh(), m = 0; m < k.length; m++)
                        if (d.jd[k[m]]) {
                            b = b.concat(Fh());
                            break
                        }
                    var n = qq[f] || [];
                    n.length && (b = b.concat(n))
                }
            }
            return {
                Uj: b,
                Wj: c
            }
        },
        sq = function(a) {
            l(pq, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        tq = function(a) {
            l(qq, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var uq = "HA GF G UA AW DC MC".split(" "),
        vq = !1,
        wq = !1;

    function xq(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: re()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var yq = {
            config: function(a, b) {
                var c = xq(a, b);
                if (!(2 > a.length) && h(a[1])) {
                    var d = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !Ob(a[2]) || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = Pk(a[1]);
                    if (e) {
                        Hj(c.eventId, "gtag.config");
                        var f = e.T,
                            g = e.id !== f;
                        if (g ? -1 === Fh().indexOf(f) : -1 === Eh().indexOf(f)) {
                            if (!R(61) || !d[N.g.Md]) {
                                var k = d[N.g.qa] || fq.B[N.g.qa];
                                g ? go(f, k, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                }) : fo(f, k, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (ce && !g && !d[N.g.Ic]) {
                                var m = wq;
                                wq = !0;
                                if (m) return
                            }
                            vq || J(43);
                            if (!b.noTargetGroup)
                                if (g) {
                                    tq(e.id);
                                    var n = e.id,
                                        p = d[N.g.Kd] || "default";
                                    p = String(p).split(",");
                                    for (var q = 0; q < p.length; q++) {
                                        var t = qq[p[q]] || [];
                                        qq[p[q]] = t;
                                        0 > t.indexOf(n) && t.push(n)
                                    }
                                } else {
                                    sq(e.id);
                                    var u = e.id,
                                        r = d[N.g.Kd] || "default";
                                    r = r.toString().split(",");
                                    for (var v = 0; v < r.length; v++) {
                                        var w = pq[r[v]] || [];
                                        pq[r[v]] = w;
                                        0 > w.indexOf(u) && w.push(u)
                                    }
                                }
                            delete d[N.g.Kd];
                            var y = b.eventMetadata || {};
                            y.hasOwnProperty("is_external_event") || (y.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata =
                                y;
                            delete d[N.g.Ob];
                            for (var x = g ? [e.id] : Fh(), B = 0; B < x.length; B++) {
                                var z = G(b);
                                fq.push("config", [d], x[B], z)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    J(39);
                    var c = xq(a, b),
                        d = a[1];
                    "default" === d ? Zf(a[2]) : "update" === d && $f(a[2], c)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && h(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!Ob(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = G(e), e[N.g.Ob] && (g.eventCallback = e[N.g.Ob]), e[N.g.Gd] && (g.eventTimeout = e[N.g.Gd]));
                    var k = xq(a, b),
                        m = k.eventId,
                        n = k.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        t = q && q[N.g.Bb];
                    void 0 === t && (t = xe(N.g.Bb, 2), void 0 === t && (t = "default"));
                    if (h(t) || ra(t)) {
                        var u = t.toString().replace(/\s+/g, "").split(","),
                            r = rq(u),
                            v = r.Uj,
                            w = r.Wj;
                        if (w.length)
                            for (var y = q && q[N.g.qa] || fq.B[N.g.qa], x = 0; x < w.length; x++) {
                                var B = Pk(w[x]);
                                B && go(B.T, y, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = Rk(v)
                    } else p = void 0;
                    var z = p;
                    if (z) {
                        Hj(m,
                            c);
                        for (var C = [], H = 0; H < z.length; H++) {
                            var I = z[H],
                                E = G(b);
                            if (-1 !== uq.indexOf(I.prefix)) {
                                var K = G(d),
                                    M = E.eventMetadata || {};
                                M.hasOwnProperty("is_external_event") || (M.is_external_event = !E.fromContainerExecution);
                                E.eventMetadata = M;
                                delete K[N.g.Ob];
                                gq(c, K, I.id, E)
                            }
                            C.push(I.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < z.length ? g.eventModel[N.g.Bb] = C.join() : delete g.eventModel[N.g.Bb];
                        vq || J(43);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                J(53);
                if (4 === a.length && h(a[1]) && h(a[2]) && pa(a[3])) {
                    var c = Pk(a[1]),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        vq || J(43);
                        var f = fq.B[N.g.qa];
                        if (!sa(Fh(), function(k) {
                                return c.T === k
                            })) go(c.T, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== uq.indexOf(c.prefix)) {
                            xq(a, b);
                            var g = {};
                            Vf(G((g[N.g.Ta] = d, g[N.g.jb] = e, g)));
                            hq(d, function(k) {
                                F(function() {
                                    return e(k)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    vq = !0;
                    var c = xq(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && Ob(a[1]) ? c = G(a[1]) : 3 == a.length && h(a[1]) && (c = {}, Ob(a[2]) || ra(a[2]) ? c[a[1]] = G(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = xq(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    G(c);
                    var g = G(c);
                    fq.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    R(30) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        zq = {
            policy: !0
        };
    var Aq = function(a) {
            var b = A[Xd.ca].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        Bq = function(a) {
            var b = A[Xd.ca],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Cq = !1,
        Dq = [];

    function Eq() {
        if (!Cq) {
            Cq = !0;
            for (var a = 0; a < Dq.length; a++) F(Dq[a])
        }
    }
    var Fq = function(a) {
        Cq ? F(a) : Dq.push(a)
    };
    var Wq = function(a) {
        if (Vq(a)) return a;
        this.h = a
    };
    Wq.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var Vq = function(a) {
        return !a || "object" !== Mb(a) || Ob(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Wq.prototype.getUntrustedMessageValue = Wq.prototype.getUntrustedMessageValue;
    var Xq = 0,
        Yq = {},
        Zq = [],
        $q = [],
        ar = !1,
        br = !1;

    function cr(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var dr = function(a) {
            return A[Xd.ca].push(a)
        },
        er = function(a, b) {
            var c = Yd[Xd.ca],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = A.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (A.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function fr(a, b) {
        var c = a._clear || b.overwriteModelFields;
        l(a, function(e, f) {
            "_clear" !== e && (c && Ae(e), Ae(e, f))
        });
        me || (me = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = re(), a["gtm.uniqueEventId"] = d, Ae("gtm.uniqueEventId", d));
        return eq(a)
    }

    function gr(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (ya(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function hr() {
        var a;
        if ($q.length) a = $q.shift();
        else if (Zq.length) a = Zq.shift();
        else return;
        var b;
        var c = a;
        if (ar || !gr(c.message)) b = c;
        else {
            ar = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = re());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                k = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Zq.unshift(k, c);
            if (Gi && S.D) {
                var m;
                if (S.Ye) {
                    var n = S.D,
                        p = Hh().destination[n];
                    m = p && p.context
                } else {
                    var q = S.D,
                        t = Hh().container[q];
                    m = t && t.context
                }
                var u = m,
                    r, v = Ye(A.location.href);
                r = v.hostname + v.pathname;
                var w = u && u.fromContainerExecution,
                    y = u && u.source,
                    x = S.D,
                    B = S.Qa,
                    z = S.Ye;
                Si || (Si = r);
                Ri.push(x + ";" + B + ";" + (w ? 1 : 0) + ";" + (y || 0) + ";" + (z ? 1 : 0))
            }
            b = f
        }
        return b
    }

    function ir() {
        for (var a = !1, b; !br && (b = hr());) {
            br = !0;
            delete ue.eventModel;
            we();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) br = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < f.length; g++) {
                        var k = f[g],
                            m = xe(k, 1);
                        if (ra(m) || Ob(m)) m = G(m);
                        ve[k] = m
                    }
                try {
                    if (pa(d)) try {
                        d.call(ye)
                    } catch (C) {} else if (ra(d)) {
                        var n =
                            d;
                        if (h(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                t = n.slice(1),
                                u = xe(p.join("."), 2);
                            if (null != u) try {
                                u[q].apply(u, t)
                            } catch (C) {}
                        }
                    } else {
                        var r = void 0,
                            v = !1;
                        if (ya(d)) {
                            a: {
                                if (d.length && h(d[0])) {
                                    var w = yq[d[0]];
                                    if (w && (!e.fromContainerExecution || !zq[d[0]])) {
                                        r = w(d, e);
                                        break a
                                    }
                                }
                                r = void 0
                            }(v = r && "set" === d[0] && !!r.event) && J(101)
                        }
                        else r = d;
                        if (r) {
                            var y = fr(r, e);
                            a = y || a;
                            v && y && J(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && we(!0);
                    var x = d["gtm.uniqueEventId"];
                    if ("number" === typeof x) {
                        for (var B = Yq[String(x)] || [], z = 0; z < B.length; z++) $q.push(jr(B[z]));
                        B.length && $q.sort(cr);
                        delete Yq[String(x)];
                        x > Xq && (Xq = x)
                    }
                    br = !1
                }
            }
        }
        return !a
    }

    function kr() {
        if (R(70) && lr()) {
            var b = wn(Vm.C.ue, S.D),
                c = wn(Vm.C.Pf, S.D);
            xn(c) && yn(c, b)
        }
        var d = ir();
        try {
            Aq(S.D)
        } catch (e) {}
        return d
    }

    function Kp(a) {
        if (Xq < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Yq[b] = Yq[b] || [];
            Yq[b].push(a)
        } else $q.push(jr(a)), $q.sort(cr), F(function() {
            br || ir()
        })
    }

    function jr(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var mr = function() {
            function a(g) {
                var k = {};
                if (Vq(g)) {
                    var m = g;
                    g = Vq(m) ? m.getUntrustedMessageValue() : void 0;
                    k.fromContainerExecution = !0
                }
                return {
                    message: g,
                    messageContext: k
                }
            }
            var b = sb(Xd.ca, []),
                c = Yd[Xd.ca] = Yd[Xd.ca] || {};
            !0 === c.pruned && J(83);
            Yq = Ip().get();
            Lp();
            Ao(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var g = {};
                    b.push((g.event = "gtm.dom", g))
                }
            });
            Fq(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var g = {};
                    b.push((g.event = "gtm.load", g))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var g;
                if (0 < Yd.SANDBOXED_JS_SEMAPHORE) {
                    g = [];
                    for (var k = 0; k < arguments.length; k++) g[k] = new Wq(arguments[k])
                } else g = [].slice.call(arguments, 0);
                var m = g.map(function(t) {
                    return a(t)
                });
                Zq.push.apply(Zq, m);
                var n = d.apply(b, g),
                    p = Math.max(100, Number("1000") || 300);
                if (this.length > p)
                    for (J(4), c.pruned = !0; this.length > p;) this.shift();
                var q = "boolean" !== typeof n || n;
                return ir() && q
            };
            var e = b.slice(0).map(function(g) {
                return a(g)
            });
            Zq.push.apply(Zq, e);
            if (lr()) {
                if (R(70)) {
                    var f = wn(Vm.C.ue, S.D);
                    xn(f)
                }
                F(kr)
            }
        },
        lr = function() {
            var a = !0;
            return a
        };

    function nr(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Fa();
        return b < c + 3E5 && b > c - 9E5
    }

    function or(a) {
        return a && 0 === a.indexOf("pending:") ? nr(a.substr(8)) : !1
    };
    var vc = {};
    vc.Sd = new String("undefined");
    var pr = function(a) {
        this.h = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === vc.Sd ? b : a[d]);
            return c.join("")
        }
    };
    pr.prototype.toString = function() {
        return this.h("undefined")
    };
    pr.prototype.valueOf = pr.prototype.toString;
    vc.Xi = pr;
    vc.Ze = {};
    vc.mj = function(a) {
        return new pr(a)
    };
    var qr = {};
    vc.lk = function(a, b) {
        var c = re();
        qr[c] = [a, b];
        return c
    };
    vc.nh = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = qr[c];
            if (d && "function" === typeof d[b]) d[b]();
            qr[c] = void 0
        }
    };
    vc.Kj = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    vc.dk = function(a) {
        if (a === vc.Sd) return a;
        var b = re();
        vc.Ze[b] = a;
        return 'google_tag_manager["' + S.D + '"].macro(' + b + ")"
    };
    vc.Vj = function(a, b, c) {
        a instanceof vc.Xi && (a = a.h(vc.lk(b, c)), b = oa);
        return {
            Fj: a,
            R: b
        }
    };
    var rr = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Ib(a, "className"),
                "gtm.elementId": a["for"] || Db(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Ib(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Ib(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        sr = function(a) {
            Yd.hasOwnProperty("autoEventsSettings") || (Yd.autoEventsSettings = {});
            var b = Yd.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        tr = function(a, b, c) {
            sr(a)[b] = c
        },
        ur = function(a, b, c, d) {
            var e = sr(a),
                f = Ga(e, b, d);
            e[b] = c(f)
        },
        vr = function(a, b, c) {
            var d = sr(a);
            return Ga(d, b, c)
        };
    var wr = ["input", "select", "textarea"],
        xr = ["button", "hidden", "image", "reset", "submit"],
        yr = function(a) {
            var b = a.tagName.toLowerCase();
            return 0 > wr.indexOf(b) || "input" === b && 0 <= xr.indexOf(a.type.toLowerCase()) ? !1 : !0
        },
        zr = function(a) {
            return a.form ? a.form.tagName ? a.form : D.getElementById(a.form) : Gb(a, ["form"], 100)
        },
        Ar = function(a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
                var g = a.elements[e];
                if (yr(g)) {
                    if (g.dataset[c] === d) return f;
                    f++
                }
            }
            return 0
        };
    var Br = !!A.MutationObserver,
        Cr = void 0,
        Dr = function(a) {
            if (!Cr) {
                var b = function() {
                    var c = D.body;
                    if (c)
                        if (Br)(new MutationObserver(function() {
                            for (var e = 0; e < Cr.length; e++) F(Cr[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            Bb(c, "DOMNodeInserted", function() {
                                d || (d = !0, F(function() {
                                    d = !1;
                                    for (var e = 0; e < Cr.length; e++) F(Cr[e])
                                }))
                            })
                        }
                };
                Cr = [];
                D.body ? b() : F(b)
            }
            Cr.push(a)
        };
    var Or = function(a, b, c) {
        function d() {
            var g = a();
            f += e ? (Fa() - e) * g.playbackRate / 1E3 : 0;
            e = Fa()
        }
        var e = 0,
            f = 0;
        return {
            createEvent: function(g, k, m) {
                var n = a(),
                    p = n.ph,
                    q = void 0 !== m ? Math.round(m) : void 0 !== k ? Math.round(n.ph * k) : Math.round(n.oj),
                    t = void 0 !== k ? Math.round(100 * k) : 0 >= p ? 0 : Math.round(q / p * 100),
                    u = D.hidden ? !1 : .5 <= Ie(c);
                d();
                var r = void 0;
                void 0 !== b && (r = [b]);
                var v = rr(c, "gtm.video", r);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = g;
                v["gtm.videoUrl"] = n.url;
                v["gtm.videoTitle"] = n.title;
                v["gtm.videoDuration"] =
                    Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(q);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = t;
                v["gtm.videoVisible"] = u;
                return v
            },
            pk: function() {
                e = Fa()
            },
            bf: function() {
                d()
            }
        }
    };
    var Pr = A.clearTimeout,
        Qr = A.setTimeout,
        T = function(a, b, c, d) {
            if (Ch()) {
                b && F(b)
            } else return xb(a, b, c, d)
        },
        Rr = function() {
            return new Date
        },
        Sr = function() {
            return A.location.href
        },
        Tr = function(a) {
            return We(Ye(a), "fragment")
        },
        Ur = function(a) {
            return Xe(Ye(a))
        },
        Vr = function(a, b) {
            return xe(a, b || 2)
        },
        Wr = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = dr(a)) : d = dr(a);
            return d
        },
        Xr = function(a, b) {
            A[a] = b
        },
        W = function(a, b, c) {
            b &&
                (void 0 === A[a] || c && !A[a]) && (A[a] = b);
            return A[a]
        },
        Yr = function(a, b, c) {
            return lg(a, b, void 0 === c ? !0 : !!c)
        },
        Zr = function(a, b, c) {
            return 0 === ug(a, b, c)
        },
        $r = function(a, b) {
            if (Ch()) {
                b && F(b)
            } else zb(a, b)
        },
        as = function(a) {
            return !!vr(a, "init", !1)
        },
        bs = function(a) {
            tr(a, "init", !0)
        },
        cs = function(a, b, c) {
            Gi && (Pb(a) || Rj(c, b, a))
        };
    var ds = vc.Vj;
    var As = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function Bs(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var Cs = new ua;

    function Ds(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Cs.get(e);
            f || (f = new RegExp(b, d), Cs.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function Es(a, b) {
        function c(g) {
            var k = Ye(g),
                m = We(k, "protocol"),
                n = We(k, "host", !0),
                p = We(k, "port"),
                q = We(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Fs(a) {
        return Gs(a) ? 1 : 0
    }

    function Gs(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = G(a, {});
                G({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Fs(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < As.length; g++) {
                            var k = As[g];
                            if (b[k]) {
                                f = b[k](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return Bs(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return Ds(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return Es(b, c)
        }
        return !1
    };
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);

    function bt() {
        return A.gaGlobal = A.gaGlobal || {}
    }
    var ct = function() {
            var a = bt();
            a.hid = a.hid || ta();
            return a.hid
        },
        dt = function(a, b) {
            var c = bt();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var zt = function() {
            var a = !0;
            xi(7) && xi(9) && xi(10) || (a = !1);
            return a
        },
        At = function() {
            var a = !0;
            xi(3) && xi(4) || (a = !1);
            return a
        };
    var cu = window,
        du = document,
        eu = function(a) {
            var b = cu._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === cu["ga-disable-" + a]) return !0;
            try {
                var c = cu.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = fg("AMP_TOKEN", String(du.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return du.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function mu(a) {
        l(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[N.g.Fa] || {};
        l(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var wu = function(a, b) {};

    function vu(a, b) {
        var c = function() {};
        return c
    }

    function xu(a, b, c) {};
    var fv = function(a, b) {
            if (!b.F) {
                var c = P(b, N.g.Ta),
                    d = P(b, N.g.jb),
                    e = P(b, c);
                if (void 0 === e) {
                    var f = void 0;
                    cv.hasOwnProperty(c) ? f = cv[c] : dv.hasOwnProperty(c) && (f = dv[c]);
                    1 === f && (f = ev(c));
                    h(f) ? Lo()(function() {
                        var g = Lo().getByName(a).get(f);
                        d(g)
                    }) : d(void 0)
                } else d(e)
            }
        },
        gv = function(a, b) {
            var c = a[N.g.Sb],
                d = b + ".",
                e = a[N.g.N] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                g = !!a[N.g.yb];
            e = String(e).replace(/\s+/g, "").split(",");
            var k = Lo();
            k(d + "require", "linker");
            k(d + "linker:autoLink", e, f, g)
        },
        kv = function(a, b, c) {
            if (Pf() &&
                (!c.F || !hv[a])) {
                var d = !ag(N.g.O),
                    e = function(f) {
                        var g, k, m = Lo(),
                            n = iv(b, "", c),
                            p, q = n.createOnlyFields._useUp;
                        if (c.F || jv(b, n.createOnlyFields)) {
                            c.F && (g = "gtm" + re(), k = n.createOnlyFields, n.gtmTrackerName && (k.name = g));
                            m(function() {
                                var u = m.getByName(b);
                                u && (p = u.get("clientId"));
                                c.F || m.remove(b)
                            });
                            m("create", a, c.F ? k : n.createOnlyFields);
                            d &&
                                ag(N.g.O) && (d = !1, m(function() {
                                    var u = Lo().getByName(c.F ? g : b);
                                    !u || u.get("clientId") == p && q || (c.F ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&gcut"] = Ud[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&gcut"] = Ud[f]), u.set(n.fieldsToSet), c.F ? u.send("pageview") : u.send("pageview", n.fieldsToSend))
                                }));
                            c.F && m(function() {
                                m.remove(g)
                            })
                        }
                    };
                cg(function() {
                    return e(N.g.O)
                }, N.g.O);
                cg(function() {
                    return e(N.g.H)
                }, N.g.H);
                c.F && (hv[a] = !0)
            }
        },
        lv = function(a, b) {
            co() && b && (a[N.g.xb] = b)
        },
        uv = function(a, b, c) {
            function d() {
                var E = P(c,
                    N.g.Ac);
                k(function() {
                    if (!c.F && Ob(E)) {
                        var K = r.fieldsToSend,
                            M = m().getByName(n),
                            U;
                        for (U in E)
                            if (E.hasOwnProperty(U) && /^(dimension|metric)\d+$/.test(U) && void 0 != E[U]) {
                                var fa = M.get(ev(E[U]));
                                mv(K, U, fa)
                            }
                    }
                })
            }

            function e() {
                if (r.displayfeatures) {
                    var E = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: E
                    })
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                k = c.F ? No(P(c, "gaFunctionName")) : No();
            if (pa(k)) {
                var m = Lo,
                    n;
                c.F ? n = P(c, "name") || P(c, "gtmTrackerName") : n = "gtag_" +
                    f.split("-").join("_");
                var p = function(E) {
                        var K = [].slice.call(arguments, 0);
                        K[0] = n ? n + "." + K[0] : "" + K[0];
                        k.apply(window, K)
                    },
                    q = function(E) {
                        var K = function(da, Y) {
                                for (var V = 0; Y && V < Y.length; V++) p(da, Y[V])
                            },
                            M = c.F,
                            U = M ? nv(r) : ov(b, c);
                        if (U) {
                            var fa = {};
                            lv(fa, E);
                            p("require", "ec", "ec.js", fa);
                            M && U.ff && p("set", "&cu", U.ff);
                            var L = U.action;
                            if (M || "impressions" === L)
                                if (K("ec:addImpression", U.vh), !M) return;
                            if ("promo_click" === L || "promo_view" === L || M && U.bd) {
                                var O = U.bd;
                                K("ec:addPromo", O);
                                if (O && 0 < O.length && "promo_click" === L) {
                                    M ? p("ec:setAction",
                                        L, U.Oa) : p("ec:setAction", L);
                                    return
                                }
                                if (!M) return
                            }
                            "promo_view" !== L && "impressions" !== L && (K("ec:addProduct", U.Eb), p("ec:setAction", L, U.Oa))
                        }
                    },
                    t = function(E) {
                        if (E) {
                            var K = {};
                            if (Ob(E))
                                for (var M in pv) pv.hasOwnProperty(M) && qv(pv[M], M, E[M], K);
                            lv(K, y);
                            p("require", "linkid", K)
                        }
                    },
                    u = function() {
                        if (Ch()) {} else {
                            var E = P(c, N.g.Ai);
                            E && (p("require", E, {
                                dataLayer: Xd.ca
                            }), p("require", "render"))
                        }
                    },
                    r = iv(n, b, c),
                    v = function(E, K, M) {
                        M && (K = "" + K);
                        r.fieldsToSend[E] =
                            K
                    };
                !c.F && jv(n, r.createOnlyFields) && (k(function() {
                    m() && m().remove(n)
                }), rv[n] = !1);
                k("create", f, r.createOnlyFields);
                if (r.createOnlyFields[N.g.xb] && !c.F) {
                    var w = fe || he ? bo(r.createOnlyFields[N.g.xb], "/analytics.js") : void 0;
                    w && (g = w)
                }
                var y = c.F ? r.fieldsToSet[N.g.xb] : r.createOnlyFields[N.g.xb];
                if (y) {
                    var x = c.F ? r.fieldsToSet[N.g.Id] : r.createOnlyFields[N.g.Id];
                    x && !rv[n] && (rv[n] = !0, k(Ro(n, x)))
                }
                c.F ? r.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), t(r.linkAttribution));
                var B = r[N.g.oa];
                B && B[N.g.N] &&
                    gv(B, n);
                p("set", r.fieldsToSet);
                if (c.F) {
                    if (r.enableLinkId) {
                        var z = {};
                        lv(z, y);
                        p("require", "linkid", "linkid.js", z)
                    }
                    Pf() && kv(f, n, c)
                }
                if (b === N.g.uc)
                    if (c.F) {
                        e();
                        if (r.remarketingLists) {
                            var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", {
                                cookieName: C
                            })
                        }
                        q(y);
                        p("send", "pageview");
                        r.createOnlyFields._useUp && Oo(n + ".")
                    } else u(), p("send", "pageview", r.fieldsToSend);
                else b === N.g.xa ? (u(), cl(f, c), P(c, N.g.lb) && (Ek(["aw", "dc"]), Oo(n + ".")), 0 != r.sendPageView && p("send", "pageview", r.fieldsToSend), kv(f,
                    n, c)) : b === N.g.Ca ? fv(n, c) : "screen_view" === b ? p("send", "screenview", r.fieldsToSend) : "timing_complete" === b ? (r.fieldsToSend.hitType = "timing", v("timingCategory", r.eventCategory, !0), c.F ? v("timingVar", r.timingVar, !0) : v("timingVar", r.name, !0), v("timingValue", Aa(r.value)), void 0 !== r.eventLabel && v("timingLabel", r.eventLabel, !0), p("send", r.fieldsToSend)) : "exception" === b ? p("send", "exception", r.fieldsToSend) : "" === b && c.F || ("track_social" === b && c.F ? (r.fieldsToSend.hitType = "social", v("socialNetwork", r.socialNetwork, !0), v("socialAction", r.socialAction, !0), v("socialTarget", r.socialTarget, !0)) : ((c.F || sv[b]) && q(y), c.F && e(), r.fieldsToSend.hitType = "event", v("eventCategory", r.eventCategory, !0), v("eventAction", r.eventAction || b, !0), void 0 !== r.eventLabel && v("eventLabel", r.eventLabel, !0), void 0 !== r.value && v("eventValue", Aa(r.value))), p("send", r.fieldsToSend));
                if (!tv && !c.F) {
                    tv = !0;
                    var H = function() {
                            c.P()
                        },
                        I = function() {
                            m().loaded || H()
                        };
                    Ch() ? F(I) : xb(g, I, H)
                }
            } else F(c.P)
        },
        vv = function(a, b, c, d) {
            dg(function() {
                uv(a, b, d)
            }, [N.g.O,
                N.g.H
            ])
        },
        xv = function(a) {
            function b(e) {
                function f(k, m) {
                    for (var n = 0; n < m.length; n++) {
                        var p = m[n];
                        if (e[p]) {
                            g[k] = e[p];
                            break
                        }
                    }
                }
                var g = G(e);
                f("id", ["id", "item_id", "promotion_id"]);
                f("name", ["name", "item_name", "promotion_name"]);
                f("brand", ["brand", "item_brand"]);
                f("variant", ["variant", "item_variant"]);
                f("list", ["list_name", "item_list_name"]);
                f("position", ["list_position", "creative_slot", "index"]);
                (function() {
                    if (e.category) g.category = e.category;
                    else {
                        for (var k = "", m = 0; m < wv.length; m++) void 0 !== e[wv[m]] && (k && (k +=
                            "/"), k += e[wv[m]]);
                        k && (g.category = k)
                    }
                })();
                f("listPosition", ["list_position"]);
                f("creative", ["creative_name"]);
                f("list", ["list_name"]);
                f("position", ["list_position", "creative_slot"]);
                return g
            }
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && Ob(a[d]) && c.push(b(a[d]));
            return c.length ? c : void 0
        },
        yv = function(a) {
            return ag(a)
        },
        zv = !1;
    var tv, rv = {},
        hv = {},
        Av = {},
        cv = Object.freeze((Av.client_storage = "storage", Av.sample_rate =
            1, Av.site_speed_sample_rate = 1, Av.store_gac = 1, Av.use_amp_client_id = 1, Av[N.g.fb] = 1, Av[N.g.na] = "storeGac", Av[N.g.hb] = 1, Av[N.g.Ia] = 1, Av[N.g.ib] = 1, Av[N.g.yc] = 1, Av[N.g.ze] = 1, Av[N.g.Nb] = 1, Av)),
        Bv = {},
        Cv = Object.freeze((Bv._cs = 1, Bv._useUp = 1, Bv.allowAnchor = 1, Bv.allowLinker = 1, Bv.alwaysSendReferrer = 1, Bv.clientId = 1, Bv.cookieDomain = 1, Bv.cookieExpires = 1, Bv.cookieFlags = 1, Bv.cookieName = 1, Bv.cookiePath = 1, Bv.cookieUpdate = 1, Bv.legacyCookieDomain = 1, Bv.legacyHistoryImport = 1, Bv.name = 1, Bv.sampleRate = 1, Bv.siteSpeedSampleRate =
            1, Bv.storage = 1, Bv.storeGac = 1, Bv.useAmpClientId = 1, Bv._cd2l = 1, Bv)),
        Dv = Object.freeze({
            anonymize_ip: 1
        }),
        Ev = {},
        dv = Object.freeze((Ev.campaign = {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            }, Ev.app_id = 1, Ev.app_installer_id = 1, Ev.app_name = 1, Ev.app_version = 1, Ev.description = "exDescription", Ev.fatal = "exFatal", Ev.language = 1, Ev.page_hostname = "hostname", Ev.transport_type = "transport", Ev[N.g.la] = "currencyCode", Ev[N.g.rg] = 1, Ev[N.g.Ka] =
            "location", Ev[N.g.Nd] = "page", Ev[N.g.La] = "referrer", Ev[N.g.Tb] = "title", Ev[N.g.zg] = 1, Ev[N.g.ra] = 1, Ev)),
        Fv = {},
        Gv = Object.freeze((Fv.content_id = 1, Fv.event_action = 1, Fv.event_category = 1, Fv.event_label = 1, Fv.link_attribution = 1, Fv.name = 1, Fv[N.g.oa] = 1, Fv[N.g.qg] = 1, Fv[N.g.Ea] = 1, Fv[N.g.ja] = 1, Fv)),
        Hv = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        wv = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
        Iv = {},
        pv = Object.freeze((Iv.levels = 1, Iv[N.g.Ia] = "duration", Iv[N.g.yc] = 1, Iv)),
        Jv = {},
        Kv = Object.freeze((Jv.anonymize_ip = 1, Jv.fatal = 1, Jv.send_page_view = 1, Jv.store_gac = 1, Jv.use_amp_client_id = 1, Jv[N.g.na] = 1, Jv[N.g.rg] = 1, Jv)),
        qv = function(a, b, c, d) {
            if (void 0 !== c)
                if (Kv[b] && (c = Ba(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[ev(b)] = c;
                else if (h(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) &&
                    void 0 !== c[e] && (d[a[e]] = c[e])
        },
        ev = function(a) {
            return a && h(a) ? a.replace(/(_[a-z])/g, function(b) {
                return b[1].toUpperCase()
            }) : a
        },
        Lv = {},
        sv = Object.freeze((Lv.checkout_progress = 1, Lv.select_content = 1, Lv.set_checkout_option = 1, Lv[N.g.nc] = 1, Lv[N.g.oc] = 1, Lv[N.g.Kb] = 1, Lv[N.g.qc] = 1, Lv[N.g.tb] = 1, Lv[N.g.Lb] = 1, Lv[N.g.ub] = 1, Lv[N.g.Aa] = 1, Lv[N.g.sc] = 1, Lv[N.g.Ba] = 1, Lv)),
        Mv = {},
        Nv = Object.freeze((Mv.checkout_progress = 1, Mv.set_checkout_option = 1, Mv[N.g.Vf] = 1, Mv[N.g.Wf] = 1, Mv[N.g.nc] = 1, Mv[N.g.oc] = 1, Mv[N.g.Xf] = 1, Mv[N.g.Kb] =
            1, Mv[N.g.Aa] = 1, Mv[N.g.sc] = 1, Mv[N.g.Yf] = 1, Mv)),
        Ov = {},
        Pv = Object.freeze((Ov.generate_lead = 1, Ov.login = 1, Ov.search = 1, Ov.select_content = 1, Ov.share = 1, Ov.sign_up = 1, Ov.view_search_results = 1, Ov[N.g.qc] = 1, Ov[N.g.tb] = 1, Ov[N.g.Lb] = 1, Ov[N.g.ub] = 1, Ov[N.g.Ba] = 1, Ov)),
        Qv = function(a) {
            var b = "general";
            Nv[a] ? b = "ecommerce" : Pv[a] ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        Rv = {},
        Sv = Object.freeze((Rv.view_search_results = 1, Rv[N.g.tb] = 1, Rv[N.g.ub] = 1, Rv[N.g.Ba] = 1, Rv)),
        mv = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] =
                c)
        },
        Tv = function(a) {
            if (ra(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        iv = function(a, b, c) {
            var d = function(K) {
                    return P(c, K)
                },
                e = {},
                f = {},
                g = {},
                k = {},
                m = Tv(d(N.g.zi));
            !c.F && m && mv(f, "exp", m);
            g["&gtm"] = Oh(!0);
            R(69) && !c.F && (g._no_slc = !0);
            Pf() && (k._cs = yv);
            var n = d(N.g.Ac);
            if (!c.F && Ob(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                        var q =
                            d(String(n[p]));
                        void 0 !== q && mv(f, p, q)
                    }
            for (var t = zl(c), u = 0; u < t.length; ++u) {
                var r = t[u];
                if (c.F) {
                    var v = d(r);
                    Hv.hasOwnProperty(r) ? e[r] = v : Cv.hasOwnProperty(r) ? k[r] = v : g[r] = v
                } else {
                    var w = void 0;
                    w = r !== N.g.Z ? d(r) : Al(c, r);
                    if (Gv.hasOwnProperty(r)) qv(Gv[r], r, w, e);
                    else if (Dv.hasOwnProperty(r)) qv(Dv[r], r, w, g);
                    else if (dv.hasOwnProperty(r)) qv(dv[r], r, w, f);
                    else if (cv.hasOwnProperty(r)) qv(cv[r], r, w, k);
                    else if (/^(dimension|metric|content_group)\d+$/.test(r)) qv(1, r, w, f);
                    else if (r === N.g.Z) {
                        if (!zv) {
                            var y = Oa(w);
                            y && (f["&did"] =
                                y)
                        }
                        var x = void 0,
                            B = void 0;
                        b === N.g.xa ? x = Oa(Al(c, r), ".") : (x = Oa(Al(c, r, 1), "."), B = Oa(Al(c, r, 2), "."));
                        x && (f["&gdid"] = x);
                        B && (f["&edid"] = B)
                    } else r === N.g.Sa && 0 > t.indexOf(N.g.yc) && (k.cookieName = w + "_ga")
                }
            }!1 !== d(N.g.li) && !1 !== d(N.g.vb) && zt() || (g.allowAdFeatures = !1);
            !1 !== d(N.g.X) && At() || (g.allowAdPersonalizationSignals = !1);
            !c.F && d(N.g.lb) && (k._useUp = !0);
            if (c.F) {
                k.name = k.name || e.gtmTrackerName;
                var z = g.hitCallback;
                g.hitCallback = function() {
                    pa(z) && z();
                    c.R()
                }
            } else {
                mv(k, "cookieDomain", "auto");
                mv(g, "forceSSL", !0);
                mv(e,
                    "eventCategory", Qv(b));
                Sv[b] && mv(f, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? mv(e, "eventLabel", d(N.g.qg)) : "search" === b || "view_search_results" === b ? mv(e, "eventLabel", d(N.g.Gi)) : "select_content" === b && mv(e, "eventLabel", d(N.g.oi));
                var C = e[N.g.oa] || {},
                    H = C[N.g.Rb];
                H || 0 != H && C[N.g.N] ? k.allowLinker = !0 : !1 === H && mv(k, "useAmpClientId", !1);
                f.hitCallback = c.R;
                k.name = a
            }
            Pf() && (g["&gcs"] = bg(), ag(N.g.O) || (k.storage = "none"), ag(N.g.H) || (g.allowAdFeatures = !1, k.storeGac = !1));
            var I = d(N.g.qa) || d(N.g.xb),
                E = d(N.g.Id);
            I && (c.F || (k[N.g.xb] = I), k._cd2l = !0);
            E && !c.F && (k[N.g.Id] = E);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = k;
            return e
        },
        nv = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.ff = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.vh = "impressions" === b.translateIfKeyEquals ? xv(d) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.bd = "promoView" === b.translateIfKeyEquals ? xv(e) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.bd = "promoClick" === b.translateIfKeyEquals ? xv(f) : f;
                c.Oa = b.promoClick.actionField;
                return c
            }
            for (var g in b)
                if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                    c.action = g;
                    var k = b[g].products;
                    c.Eb = "products" === b.translateIfKeyEquals ? xv(k) : k;
                    c.Oa = b[g].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        ov = function(a, b) {
            function c(r) {
                return {
                    id: d(N.g.Ma),
                    affiliation: d(N.g.wi),
                    revenue: d(N.g.ja),
                    tax: d(N.g.dg),
                    shipping: d(N.g.Cd),
                    coupon: d(N.g.xi),
                    list: d(N.g.Ce) || d(N.g.Be) || r
                }
            }
            for (var d = function(r) {
                    return P(b, r)
                }, e = d(N.g.ba), f, g = 0; e && g < e.length && !(f = e[g][N.g.Ce] || e[g][N.g.Be]); g++);
            var k = d(N.g.Ac);
            if (Ob(k))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in k) k.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != k[p] && mv(n, p, n[k[p]])
                }
            var q = null,
                t = d(N.g.yi);
            if (a === N.g.Aa || a === N.g.sc) q = {
                action: a,
                Oa: c(),
                Eb: xv(e)
            };
            else if (a === N.g.nc) q = {
                action: "add",
                Oa: c(),
                Eb: xv(e)
            };
            else if (a === N.g.oc) q = {
                action: "remove",
                Oa: c(),
                Eb: xv(e)
            };
            else if (a === N.g.Ba) q = {
                action: "detail",
                Oa: c(f),
                Eb: xv(e)
            };
            else if (a === N.g.tb) q = {
                action: "impressions",
                vh: xv(e)
            };
            else if (a === N.g.ub) q = {
                action: "promo_view",
                bd: xv(t) || xv(e)
            };
            else if ("select_content" === a && t && 0 < t.length || a === N.g.Lb) q = {
                action: "promo_click",
                bd: xv(t) || xv(e)
            };
            else if ("select_content" === a || a === N.g.qc) q = {
                action: "click",
                Oa: {
                    list: d(N.g.Ce) || d(N.g.Be) || f
                },
                Eb: xv(e)
            };
            else if (a === N.g.Kb || "checkout_progress" === a) {
                var u = {
                    step: a === N.g.Kb ? 1 : d(N.g.cg),
                    option: d(N.g.ag)
                };
                q = {
                    action: "checkout",
                    Eb: xv(e),
                    Oa: G(c(), u)
                }
            } else "set_checkout_option" === a && (q = {
                action: "checkout_option",
                Oa: {
                    step: d(N.g.cg),
                    option: d(N.g.ag)
                }
            });
            q && (q.ff = d(N.g.la));
            return q
        },
        Uv = {},
        jv = function(a, b) {
            var c = Uv[a];
            Uv[a] = G(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    var Vv = vu;
    var Xv = encodeURI,
        X = encodeURIComponent,
        Yv = function(a, b, c) {
            Ab(a, b, c)
        },
        Zv = function(a, b) {
            if (!a) return !1;
            var c = We(Ye(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        $v = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
                a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Z = {
        o: {}
    };

    Z.o.jsm = ["customScripts"],
        function() {
            (function(a) {
                Z.__jsm = a;
                Z.__jsm.s = "jsm";
                Z.__jsm.isVendorTemplate = !0;
                Z.__jsm.priorityOverride = 0;
                Z.__jsm.isInfrastructure = !1
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = W("google_tag_manager");
                        var d = c && c.e && c.e(b);
                        cs(d, "jsm", a.vtp_gtmEventId);
                        return d
                    } catch (e) {}
                }
            })
        }();
    Z.o.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.s = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !1
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.o.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.s = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0;
                Z.__f.isInfrastructure = !1
            })(function(a) {
                var b = Vr("gtm.referrer", 1) || D.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? We(Ye(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Ur(String(b)) : String(b)
            })
        }();
    Z.o.cl = ["google"],
        function() {
            function a(b) {
                var c = b.target;
                if (c) {
                    var d = rr(c, "gtm.click");
                    Wr(d)
                }
            }(function(b) {
                Z.__cl = b;
                Z.__cl.s = "cl";
                Z.__cl.isVendorTemplate = !0;
                Z.__cl.priorityOverride = 0;
                Z.__cl.isInfrastructure = !1
            })(function(b) {
                if (!as("cl")) {
                    var c = W("document");
                    Bb(c, "click", a, !0);
                    bs("cl")
                }
                F(b.vtp_gtmOnSuccess)
            })
        }();
    Z.o.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.s = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0;
                Z.__u.isInfrastructure = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Vr("gtm.url", 1)) || Sr();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Ur(String(c));
                var e = Ye(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        k = b[a("vtp_queryKey").toString()] || "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? ra(k) ? n = k : n = String(k).replace(/\s+/g, "").split(",") : n = [String(k)];
                    for (var p = 0; p < n.length; p++) {
                        var q = We(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = We(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Z.o.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.s = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0;
                Z.__v.isInfrastructure = !1
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = Vr(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                cs(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();

    Z.o.ytl = ["google"],
        function() {
            function a() {
                var r = Math.round(1E9 * Math.random()) + "";
                return D.getElementById(r) ? a() : r
            }

            function b(r, v) {
                if (!r) return !1;
                for (var w = 0; w < p.length; w++)
                    if (0 <= r.indexOf("//" + p[w] + "/" + v)) return !0;
                return !1
            }

            function c(r, v) {
                var w = r.getAttribute("src");
                if (b(w, "embed/")) {
                    if (0 < w.indexOf("enablejsapi=1")) return !0;
                    if (v) {
                        var y = r.setAttribute,
                            x;
                        var B = -1 !== w.indexOf("?") ? "&" : "?";
                        if (-1 < w.indexOf("origin=")) x = w + B + "enablejsapi=1";
                        else {
                            if (!t) {
                                var z = W("document");
                                t = z.location.protocol + "//" + z.location.hostname;
                                z.location.port && (t += ":" + z.location.port)
                            }
                            x = w + B + "enablejsapi=1&origin=" + encodeURIComponent(t)
                        }
                        y.call(r, "src", x);
                        return !0
                    }
                }
                return !1
            }

            function d(r, v) {
                if (!r.getAttribute("data-gtm-yt-inspected-" + v.If) && (r.setAttribute("data-gtm-yt-inspected-" + v.If, "true"), c(r, v.sh))) {
                    r.id || (r.id = a());
                    var w = W("YT"),
                        y = w.get(r.id);
                    y || (y = new w.Player(r.id));
                    var x = f(y, v),
                        B = {},
                        z;
                    for (z in x) B.jc = z, x.hasOwnProperty(B.jc) && y.addEventListener(B.jc, function(C) {
                        return function(H) {
                            return x[C.jc](H.data)
                        }
                    }(B)), B = {
                        jc: B.jc
                    }
                }
            }

            function e(r) {
                F(function() {
                    function v() {
                        for (var y =
                                w.getElementsByTagName("iframe"), x = y.length, B = 0; B < x; B++) d(y[B], r)
                    }
                    var w = W("document");
                    v();
                    Dr(v)
                })
            }

            function f(r, v) {
                var w, y;

                function x() {
                    U = Or(function() {
                        return {
                            url: O,
                            title: da,
                            ph: L,
                            oj: r.getCurrentTime(),
                            playbackRate: Y
                        }
                    }, v.If, r.getIframe());
                    L = 0;
                    da = O = "";
                    Y = 1;
                    return B
                }

                function B(xa) {
                    switch (xa) {
                        case q.PLAYING:
                            L = Math.round(r.getDuration());
                            O = r.getVideoUrl();
                            if (r.getVideoData) {
                                var za = r.getVideoData();
                                da = za ? za.title : ""
                            }
                            Y = r.getPlaybackRate();
                            v.jj ? Wr(U.createEvent("start")) : U.bf();
                            fa = m(v.hk, v.gk, r.getDuration());
                            return z(xa);
                        default:
                            return B
                    }
                }

                function z() {
                    V = r.getCurrentTime();
                    wa = Rr().getTime();
                    U.pk();
                    M();
                    return C
                }

                function C(xa) {
                    var za;
                    switch (xa) {
                        case q.ENDED:
                            return I(xa);
                        case q.PAUSED:
                            za = "pause";
                        case q.BUFFERING:
                            var Pa = r.getCurrentTime() - V;
                            za = 1 < Math.abs((Rr().getTime() - wa) / 1E3 * Y - Pa) ? "seek" : za || "buffering";
                            r.getCurrentTime() && (v.ij ? Wr(U.createEvent(za)) : U.bf());
                            K();
                            return H;
                        case q.UNSTARTED:
                            return x(xa);
                        default:
                            return C
                    }
                }

                function H(xa) {
                    switch (xa) {
                        case q.ENDED:
                            return I(xa);
                        case q.PLAYING:
                            return z(xa);
                        case q.UNSTARTED:
                            return x(xa);
                        default:
                            return H
                    }
                }

                function I() {
                    for (; y;) {
                        var xa = w;
                        Pr(y);
                        xa()
                    }
                    v.gj && Wr(U.createEvent("complete", 1));
                    return x(q.UNSTARTED)
                }

                function E() {}

                function K() {
                    y && (Pr(y), y = 0, w = E)
                }

                function M() {
                    if (fa.length && 0 !== Y) {
                        var xa = -1,
                            za;
                        do {
                            za = fa[0];
                            if (za.Fb > r.getDuration()) return;
                            xa = (za.Fb - r.getCurrentTime()) / Y;
                            if (0 > xa && (fa.shift(), 0 === fa.length)) return
                        } while (0 > xa);
                        w = function() {
                            y = 0;
                            w = E;
                            0 < fa.length && fa[0].Fb === za.Fb && (fa.shift(), Wr(U.createEvent("progress", za.Ah, za.Ih)));
                            M()
                        };
                        y = Qr(w, 1E3 * xa)
                    }
                }
                var U, fa = [],
                    L, O, da, Y, V, wa, Na =
                    x(q.UNSTARTED);
                y = 0;
                w = E;
                return {
                    onStateChange: function(xa) {
                        Na = Na(xa)
                    },
                    onPlaybackRateChange: function(xa) {
                        V = r.getCurrentTime();
                        wa = Rr().getTime();
                        U.bf();
                        Y = xa;
                        K();
                        M()
                    }
                }
            }

            function g(r) {
                for (var v = r.split(","), w = v.length, y = [], x = 0; x < w; x++) {
                    var B = parseInt(v[x], 10);
                    isNaN(B) || 100 < B || 0 > B || y.push(B / 100)
                }
                y.sort(function(z, C) {
                    return z - C
                });
                return y
            }

            function k(r) {
                for (var v = r.split(","), w = v.length, y = [], x = 0; x < w; x++) {
                    var B = parseInt(v[x], 10);
                    isNaN(B) || 0 > B || y.push(B)
                }
                y.sort(function(z, C) {
                    return z - C
                });
                return y
            }

            function m(r,
                v, w) {
                var y = r.map(function(z) {
                    return {
                        Fb: z,
                        Ih: z,
                        Ah: void 0
                    }
                });
                if (!v.length) return y;
                var x = v.map(function(z) {
                    return {
                        Fb: z * w,
                        Ih: void 0,
                        Ah: z
                    }
                });
                if (!y.length) return x;
                var B = y.concat(x);
                B.sort(function(z, C) {
                    return z.Fb - C.Fb
                });
                return B
            }

            function n(r) {
                var v = !!r.vtp_captureStart,
                    w = !!r.vtp_captureComplete,
                    y = !!r.vtp_capturePause,
                    x = g(r.vtp_progressThresholdsPercent + ""),
                    B = k(r.vtp_progressThresholdsTimeInSeconds + ""),
                    z = !!r.vtp_fixMissingApi;
                if (v || w || y || x.length || B.length) {
                    var C = {
                            jj: v,
                            gj: w,
                            ij: y,
                            gk: x,
                            hk: B,
                            sh: z,
                            If: void 0 ===
                                r.vtp_uniqueTriggerId ? "" : r.vtp_uniqueTriggerId
                        },
                        H = W("YT"),
                        I = function() {
                            e(C)
                        };
                    F(r.vtp_gtmOnSuccess);
                    if (H) H.ready && H.ready(I);
                    else {
                        var E = W("onYouTubeIframeAPIReady");
                        Xr("onYouTubeIframeAPIReady", function() {
                            E && E();
                            I()
                        });
                        F(function() {
                            for (var K = W("document"), M = K.getElementsByTagName("script"), U = M.length, fa = 0; fa < U; fa++) {
                                var L = M[fa].getAttribute("src");
                                if (b(L, "iframe_api") || b(L, "player_api")) return
                            }
                            for (var O = K.getElementsByTagName("iframe"), da = O.length, Y = 0; Y < da; Y++)
                                if (!u && c(O[Y], C.sh)) {
                                    T("https://www.youtube.com/iframe_api");
                                    u = !0;
                                    break
                                }
                        })
                    }
                } else F(r.vtp_gtmOnSuccess)
            }
            var p = ["www.youtube.com", "www.youtube-nocookie.com"],
                q = {
                    UNSTARTED: -1,
                    ENDED: 0,
                    PLAYING: 1,
                    PAUSED: 2,
                    BUFFERING: 3,
                    CUED: 5
                },
                t, u = !1;
            (function(r) {
                Z.__ytl = r;
                Z.__ytl.s = "ytl";
                Z.__ytl.isVendorTemplate = !0;
                Z.__ytl.priorityOverride = 0;
                Z.__ytl.isInfrastructure = !1
            })(function(r) {
                r.vtp_triggerStartOption ? n(r) : Ao(function() {
                    n(r)
                })
            })
        }();

    Z.o.aev = ["google"],
        function() {
            function a(t, u, r, v, w) {
                w || (w = "element");
                var y = u + "." + r,
                    x;
                if (n.hasOwnProperty(y)) x = n[y];
                else {
                    var B = t[w];
                    if (B && (x = v(B), n[y] = x, p.push(y), 35 < p.length)) {
                        var z = p.shift();
                        delete n[z]
                    }
                }
                return x
            }

            function b(t, u, r) {
                var v = t[q[u]];
                return void 0 !== v ? v : r
            }

            function c(t, u) {
                if (!t) return !1;
                var r = d(Sr());
                ra(u) || (u = String(u || "").replace(/\s+/g, "").split(","));
                for (var v = [r], w = 0; w < u.length; w++) {
                    var y = u[w];
                    if (y.hasOwnProperty("is_regex"))
                        if (y.is_regex) try {
                            y = new RegExp(y.domain)
                        } catch (z) {
                            continue
                        } else y =
                            y.domain;
                    var x = d(t);
                    if (y instanceof RegExp) {
                        if (y.test(x)) return !1
                    } else {
                        var B = y;
                        if (0 != B.length) {
                            if (0 <= x.indexOf(B)) return !1;
                            v.push(d(B))
                        }
                    }
                }
                return !Zv(t, v)
            }

            function d(t) {
                m.test(t) || (t = "http://" + t);
                return We(Ye(t), "HOST", !0)
            }

            function e(t, u, r, v) {
                switch (t) {
                    case "SUBMIT_TEXT":
                        return a(u, r, "FORM." + t, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var w = a(u, r, "FORM." + t, g);
                        return void 0 === w ? v : w;
                    case "INTERACTED_FIELD_ID":
                        return k(u, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return k(u, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return k(u,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var y = u.interactedFormFieldPosition;
                        return void 0 === y ? v : y;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var x = u.interactSequenceNumber;
                        return void 0 === x ? v : x;
                    default:
                        return v
                }
            }

            function f(t) {
                switch (t.tagName.toLowerCase()) {
                    case "input":
                        return Db(t, "value");
                    case "button":
                        return Eb(t);
                    default:
                        return null
                }
            }

            function g(t) {
                if ("form" === t.tagName.toLowerCase() && t.elements) {
                    for (var u = 0, r = 0; r < t.elements.length; r++) yr(t.elements[r]) && u++;
                    return u
                }
            }

            function k(t, u, r) {
                var v = t.interactedFormField;
                return v && Db(v, u) || r
            }
            var m = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(t) {
                Z.__aev = t;
                Z.__aev.s = "aev";
                Z.__aev.isVendorTemplate = !0;
                Z.__aev.priorityOverride = 0;
                Z.__aev.isInfrastructure = !1
            })(function(t) {
                var u =
                    t.vtp_gtmEventId,
                    r = t.vtp_defaultValue,
                    v = t.vtp_varType,
                    w = t.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var y = w.element;
                        return y && y.tagName || r;
                    case "TEXT":
                        return a(w, u, v, Eb) || r;
                    case "URL":
                        var x;
                        a: {
                            var B = String(w.elementUrl || r || ""),
                                z = Ye(B),
                                C = String(t.vtp_component || "URL");
                            switch (C) {
                                case "URL":
                                    x = B;
                                    break a;
                                case "IS_OUTBOUND":
                                    x = c(B, t.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    x = We(z, C, t.vtp_stripWww, t.vtp_defaultPages, t.vtp_queryKey)
                            }
                        }
                        return x;
                    case "ATTRIBUTE":
                        var H;
                        if (void 0 === t.vtp_attribute) H = b(w,
                            v, r);
                        else {
                            var I = w.element;
                            H = I && Db(I, t.vtp_attribute) || r || ""
                        }
                        return H;
                    case "MD":
                        var E = t.vtp_mdValue,
                            K = a(w, u, "MD", Kr);
                        return E && K ? Nr(K, E) || r : K || r;
                    case "FORM":
                        return e(String(t.vtp_component || "SUBMIT_TEXT"), w, u, r);
                    default:
                        var M = b(w, v, r);
                        cs(M, "aev", t.vtp_gtmEventId);
                        return M
                }
            })
        }();
    Z.o.fsl = [],
        function() {
            function a() {
                var e = W("document"),
                    f = c(),
                    g = HTMLFormElement.prototype.submit;
                Bb(e, "click", function(k) {
                    var m = k.target;
                    if (m && (m = Gb(m, ["button", "input"], 100)) && ("submit" == m.type || "image" == m.type) && m.name && Db(m, "value")) {
                        var n;
                        m.form ? m.form.tagName ? n = m.form : n = D.getElementById(m.form) : n = Gb(m, ["form"], 100);
                        n && f.store(n, m)
                    }
                }, !1);
                Bb(e, "submit", function(k) {
                    var m = k.target;
                    if (!m) return k.returnValue;
                    var n = k.defaultPrevented || !1 === k.returnValue,
                        p = b(m) && !n,
                        q = f.get(m),
                        t = !0;
                    if (d(m, function() {
                            if (t) {
                                var u;
                                q && (u = e.createElement("input"), u.type = "hidden", u.name = q.name, u.value = q.value, m.appendChild(u));
                                g.call(m);
                                u && m.removeChild(u)
                            }
                        }, n, p, q)) t = !1;
                    else return n || (k.preventDefault && k.preventDefault(), k.returnValue = !1), !1;
                    return k.returnValue
                }, !1);
                HTMLFormElement.prototype.submit = function() {
                    var k = this,
                        m = b(k),
                        n = !0;
                    d(k, function() {
                        n && g.call(k)
                    }, !1, m) && (g.call(k), n = !1)
                }
            }

            function b(e) {
                var f = e.target;
                return f && "_self" !== f && "_parent" !== f && "_top" !== f ? !1 : !0
            }

            function c() {
                var e = [],
                    f = function(g) {
                        return sa(e, function(k) {
                            return k.form ===
                                g
                        })
                    };
                return {
                    store: function(g, k) {
                        var m = f(g);
                        m ? m.button = k : e.push({
                            form: g,
                            button: k
                        })
                    },
                    get: function(g) {
                        var k = f(g);
                        return k ? k.button : null
                    }
                }
            }

            function d(e, f, g, k, m) {
                var n = vr("fsl", g ? "nv.mwt" : "mwt", 0),
                    p;
                p = g ? vr("fsl", "nv.ids", []) : vr("fsl", "ids", []);
                if (!p.length) return !0;
                var q = rr(e, "gtm.formSubmit", p),
                    t = e.action;
                t && t.tagName && (t = e.cloneNode(!1).action);
                q["gtm.elementUrl"] = t;
                if (R(79) && "https://www.facebook.com/tr/" === t) return !0;
                m && (q["gtm.formSubmitElement"] = m);
                if (k && n) {
                    if (!Wr(q, er(f, n), n)) return !1
                } else Wr(q,
                    function() {}, n || 2E3);
                return !0
            }(function(e) {
                Z.__fsl = e;
                Z.__fsl.s = "fsl";
                Z.__fsl.isVendorTemplate = !0;
                Z.__fsl.priorityOverride = 0;
                Z.__fsl.isInfrastructure = !1
            })(function(e) {
                var f = e.vtp_waitForTags,
                    g = e.vtp_checkValidation,
                    k = Number(e.vtp_waitForTagsTimeout);
                if (!k || 0 >= k) k = 2E3;
                var m = e.vtp_uniqueTriggerId || "0";
                if (f) {
                    var n = function(q) {
                        return Math.max(k, q)
                    };
                    ur("fsl", "mwt", n, 0);
                    g || ur("fsl", "nv.mwt", n, 0)
                }
                var p = function(q) {
                    q.push(m);
                    return q
                };
                ur("fsl", "ids", p, []);
                g || ur("fsl", "nv.ids", p, []);
                as("fsl") || (a(), bs("fsl"));
                F(e.vtp_gtmOnSuccess)
            })
        }();
    Z.o.paused = [],
        function() {
            (function(a) {
                Z.__paused = a;
                Z.__paused.s = "paused";
                Z.__paused.isVendorTemplate = !0;
                Z.__paused.priorityOverride = 0;
                Z.__paused.isInfrastructure = !1
            })(function(a) {
                F(a.vtp_gtmOnFailure)
            })
        }();


    Z.o.lcl = [],
        function() {
            function a() {
                var c = W("document"),
                    d = 0,
                    e = function(f) {
                        var g = f.target;
                        if (g && 3 !== f.which && !(f.Jj || f.timeStamp && f.timeStamp === d)) {
                            d = f.timeStamp;
                            g = Gb(g, ["a", "area"], 100);
                            if (!g) return f.returnValue;
                            var k = f.defaultPrevented || !1 === f.returnValue,
                                m = vr("lcl", k ? "nv.mwt" : "mwt", 0),
                                n;
                            n = k ? vr("lcl", "nv.ids", []) : vr("lcl", "ids", []);
                            if (n.length) {
                                var p = rr(g, "gtm.linkClick", n);
                                if (b(f, g, c) && !k && m && g.href) {
                                    var q = !!sa(String(Ib(g, "rel") || "").split(" "), function(v) {
                                            return "noreferrer" === v.toLowerCase()
                                        }),
                                        t = W((Ib(g, "target") || "_self").substring(1)),
                                        u = !0,
                                        r = er(function() {
                                            var v;
                                            if (v = u && t) {
                                                var w;
                                                a: if (q) {
                                                    var y;
                                                    try {
                                                        y = new MouseEvent(f.type, {
                                                            bubbles: !0
                                                        })
                                                    } catch (x) {
                                                        if (!c.createEvent) {
                                                            w = !1;
                                                            break a
                                                        }
                                                        y = c.createEvent("MouseEvents");
                                                        y.initEvent(f.type, !0, !0)
                                                    }
                                                    y.Jj = !0;
                                                    f.target.dispatchEvent(y);
                                                    w = !0
                                                } else w = !1;
                                                v = !w
                                            }
                                            v && (t.location.href = Ib(g, "href"))
                                        }, m);
                                    if (Wr(p, r, m)) u = !1;
                                    else return f.preventDefault && f.preventDefault(), f.returnValue = !1
                                } else Wr(p, function() {}, m || 2E3);
                                return !0
                            }
                        }
                    };
                Bb(c, "click", e, !1);
                Bb(c, "auxclick", e, !1)
            }

            function b(c, d, e) {
                if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
                var f = Ib(d, "href"),
                    g = f.indexOf("#"),
                    k = Ib(d, "target");
                if (k && "_self" !== k && "_parent" !== k && "_top" !== k || 0 === g) return !1;
                if (0 < g) {
                    var m = Ur(f),
                        n = Ur(e.location);
                    return m !== n
                }
                return !0
            }(function(c) {
                Z.__lcl = c;
                Z.__lcl.s = "lcl";
                Z.__lcl.isVendorTemplate = !0;
                Z.__lcl.priorityOverride = 0;
                Z.__lcl.isInfrastructure = !1
            })(function(c) {
                var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                    e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
                    f = Number(c.vtp_waitForTagsTimeout);
                if (!f || 0 >= f) f = 2E3;
                var g = c.vtp_uniqueTriggerId || "0";
                if (d) {
                    var k = function(n) {
                        return Math.max(f, n)
                    };
                    ur("lcl", "mwt", k, 0);
                    e || ur("lcl", "nv.mwt", k, 0)
                }
                var m = function(n) {
                    n.push(g);
                    return n
                };
                ur("lcl", "ids", m, []);
                e || ur("lcl", "nv.ids", m, []);
                as("lcl") || (a(), bs("lcl"));
                F(c.vtp_gtmOnSuccess)
            })
        }();
    Z.o.evl = ["google"],
        function() {
            function a() {
                var f = Number(Vr("gtm.start")) || 0;
                return Rr().getTime() - f
            }

            function b(f, g, k, m) {
                function n() {
                    if (!Ge(f.target)) {
                        g.has(d.Vd) || g.set(d.Vd, "" + a());
                        g.has(d.Ve) || g.set(d.Ve, "" + a());
                        var q = 0;
                        g.has(d.Xd) && (q = Number(g.get(d.Xd)));
                        q += 100;
                        g.set(d.Xd, "" + q);
                        if (q >= k) {
                            var t = rr(f.target, "gtm.elementVisibility", [g.h]),
                                u = Ie(f.target);
                            t["gtm.visibleRatio"] = Math.round(1E3 * u) / 10;
                            t["gtm.visibleTime"] = k;
                            t["gtm.visibleFirstTime"] = Number(g.get(d.Ve));
                            t["gtm.visibleLastTime"] = Number(g.get(d.Vd));
                            Wr(t);
                            m()
                        }
                    }
                }
                if (!g.has(d.Lc) && (0 == k && n(), !g.has(d.Ub))) {
                    var p = W("self").setInterval(n, 100);
                    g.set(d.Lc, p)
                }
            }

            function c(f) {
                f.has(d.Lc) && (W("self").clearInterval(Number(f.get(d.Lc))), f.m(d.Lc))
            }
            var d = {
                    Lc: "polling-id-",
                    Ve: "first-on-screen-",
                    Vd: "recent-on-screen-",
                    Xd: "total-visible-time-",
                    Ub: "has-fired-"
                },
                e = function(f, g) {
                    this.element = f;
                    this.h = g
                };
            e.prototype.has = function(f) {
                return !!this.element.getAttribute("data-gtm-vis-" + f + this.h)
            };
            e.prototype.get = function(f) {
                return this.element.getAttribute("data-gtm-vis-" +
                    f + this.h)
            };
            e.prototype.set = function(f, g) {
                this.element.setAttribute("data-gtm-vis-" + f + this.h, g)
            };
            e.prototype.m = function(f) {
                this.element.removeAttribute("data-gtm-vis-" + f + this.h)
            };
            (function(f) {
                Z.__evl = f;
                Z.__evl.s = "evl";
                Z.__evl.isVendorTemplate = !0;
                Z.__evl.priorityOverride = 0;
                Z.__evl.isInfrastructure = !1
            })(function(f) {
                function g() {
                    var y = !1,
                        x = null;
                    if ("CSS" === m) {
                        try {
                            x = ed(n)
                        } catch (I) {}
                        y = !!x && v.length != x.length
                    } else if ("ID" === m) {
                        var B = D.getElementById(n);
                        B && (x = [B], y = 1 != v.length || v[0] !== B)
                    }
                    x || (x = [], y = 0 < v.length);
                    if (y) {
                        for (var z = 0; z < v.length; z++) {
                            var C = new e(v[z], u);
                            c(C)
                        }
                        v = [];
                        for (var H = 0; H < x.length; H++) v.push(x[H]);
                        0 <= w && Oe(w);
                        0 < v.length && (w = Ne(k, v, [t]))
                    }
                }

                function k(y) {
                    var x = new e(y.target, u);
                    y.intersectionRatio >= t ? x.has(d.Ub) || b(y, x, q, "ONCE" === r ? function() {
                        for (var B = 0; B < v.length; B++) {
                            var z = new e(v[B], u);
                            z.set(d.Ub, "1");
                            c(z)
                        }
                        Oe(w);
                        if (p && Cr)
                            for (var C = 0; C < Cr.length; C++) Cr[C] === g && Cr.splice(C, 1)
                    } : function() {
                        x.set(d.Ub, "1");
                        c(x)
                    }) : (c(x), "MANY_PER_ELEMENT" === r && x.has(d.Ub) && (x.m(d.Ub), x.m(d.Xd)), x.m(d.Vd))
                }
                var m =
                    f.vtp_selectorType,
                    n;
                "ID" === m ? n = String(f.vtp_elementId) : "CSS" === m && (n = String(f.vtp_elementSelector));
                var p = !!f.vtp_useDomChangeListener,
                    q = f.vtp_useOnScreenDuration && Number(f.vtp_onScreenDuration) || 0,
                    t = (Number(f.vtp_onScreenRatio) || 50) / 100,
                    u = f.vtp_uniqueTriggerId,
                    r = f.vtp_firingFrequency,
                    v = [],
                    w = -1;
                g();
                p && Dr(g);
                F(f.vtp_gtmOnSuccess)
            })
        }();






    Z.o.ua = ["google"],
        function() {
            function a(m, n) {
                for (var p in m)
                    if (!k[p] && m.hasOwnProperty(p)) {
                        var q = g[p] ? Ba(m[p]) : m[p];
                        "anonymizeIp" != p || q || (q = void 0);
                        n[p] = q
                    }
            }

            function b(m) {
                var n = {};
                m.vtp_gaSettings && G($v(m.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
                G($v(m.vtp_fieldsToSet, "fieldName", "value"), n);
                Ba(n.urlPassthrough) && (n._useUp = !0);
                m.vtp_transportUrl && (n._x_19 = m.vtp_transportUrl);
                return n
            }

            function c(m, n) {
                return void 0 === n ? n : m(n)
            }

            function d(m, n, p) {}

            function e(m, n) {
                if (!f) {
                    var p = m.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    m.vtp_useInternalVersion && !m.vtp_useDebugVersion && (p = "internal/" + p);
                    f = !0;
                    var q = m.vtp_gtmOnFailure,
                        t = fe || he ? bo(n._x_19, "/analytics.js") : void 0,
                        u = Sk("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                    T("analytics.js" === p && t ? t : u, function() {
                        var r = Lo();
                        r && r.loaded || q();
                    }, q)
                }
            }
            var f, g = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                k = {
                    urlPassthrough: !0
                };
            (function(m) {
                Z.__ua = m;
                Z.__ua.s = "ua";
                Z.__ua.isVendorTemplate = !0;
                Z.__ua.priorityOverride = 0;
                Z.__ua.isInfrastructure = !1
            })(function(m) {
                function n() {
                    if (m.vtp_doubleClick || "DISPLAY_FEATURES" == m.vtp_advertisingFeaturesType) v.displayfeatures = !0
                }
                var p = {},
                    q = {},
                    t = {};
                if (m.vtp_gaSettings) {
                    var u = m.vtp_gaSettings;
                    G($v(u.vtp_contentGroup, "index", "group"), p);
                    G($v(u.vtp_dimension, "index", "dimension"), q);
                    G($v(u.vtp_metric, "index", "metric"), t);
                    var r = G(u);
                    r.vtp_fieldsToSet = void 0;
                    r.vtp_contentGroup = void 0;
                    r.vtp_dimension = void 0;
                    r.vtp_metric = void 0;
                    m = G(m, r)
                }
                G($v(m.vtp_contentGroup, "index", "group"), p);
                G($v(m.vtp_dimension, "index", "dimension"), q);
                G($v(m.vtp_metric, "index", "metric"), t);
                var v = b(m),
                    w = String(m.vtp_trackingId || ""),
                    y = "",
                    x = "",
                    B = "";
                m.vtp_setTrackerName &&
                    "string" == typeof m.vtp_trackerName ? "" !== m.vtp_trackerName && (B = m.vtp_trackerName, x = B + ".") : (B = "gtm" + re(), x = B + ".");
                var z = function(Y, V) {
                    for (var wa in V) V.hasOwnProperty(wa) && (v[Y + wa] = V[wa])
                };
                z("contentGroup", p);
                z("dimension", q);
                z("metric", t);
                m.vtp_enableEcommerce && (y = m.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(m, v, y));
                if ("TRACK_EVENT" === m.vtp_trackType) y = "track_event", n(), v.eventCategory = String(m.vtp_eventCategory), v.eventAction = String(m.vtp_eventAction), v.eventLabel = c(String, m.vtp_eventLabel), v.value =
                    c(Aa, m.vtp_eventValue);
                else if ("TRACK_PAGEVIEW" == m.vtp_trackType) {
                    if (y = N.g.uc, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == m.vtp_advertisingFeaturesType && (v.remarketingLists = !0), m.vtp_autoLinkDomains) {
                        var C = {};
                        C[N.g.N] = m.vtp_autoLinkDomains;
                        C.use_anchor = m.vtp_useHashAutoLink;
                        C[N.g.yb] = m.vtp_decorateFormsAutoLink;
                        v[N.g.oa] = C
                    }
                } else "TRACK_SOCIAL" === m.vtp_trackType ? (y = "track_social", v.socialNetwork = String(m.vtp_socialNetwork), v.socialAction = String(m.vtp_socialAction), v.socialTarget = String(m.vtp_socialActionTarget)) :
                    "TRACK_TIMING" == m.vtp_trackType && (y = "timing_complete", v.eventCategory = String(m.vtp_timingCategory), v.timingVar = String(m.vtp_timingVar), v.value = Aa(m.vtp_timingValue), v.eventLabel = c(String, m.vtp_timingLabel));
                m.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
                m.vtp_enableLinkId && (v.enableLinkId = !0);
                var H = {};
                a(v, H);
                v.name || (H.gtmTrackerName = B);
                H.gaFunctionName = m.vtp_functionName;
                void 0 !== m.vtp_nonInteraction && (H.nonInteraction = m.vtp_nonInteraction);
                var I = Nl(Ml(Ll(Kl(Dl(new Cl(m.vtp_gtmEventId, m.vtp_gtmPriorityId),
                    H), m.vtp_gtmOnSuccess), m.vtp_gtmOnFailure)));
                vv(w, y, Date.now(), I);
                var E = No(m.vtp_functionName);
                if (pa(E)) {
                    var K = function(Y) {
                        var V = [].slice.call(arguments, 0);
                        V[0] = x + V[0];
                        E.apply(window, V)
                    };
                    if ("TRACK_TRANSACTION" == m.vtp_trackType) {} else if ("DECORATE_LINK" == m.vtp_trackType) {} else if ("DECORATE_FORM" == m.vtp_trackType) {} else if ("TRACK_DATA" == m.vtp_trackType) {}
                    e(m, v)
                } else F(m.vtp_gtmOnFailure)
            })
        }();
    Z.o.gas = ["google"],
        function() {
            (function(a) {
                Z.__gas = a;
                Z.__gas.s = "gas";
                Z.__gas.isVendorTemplate = !0;
                Z.__gas.priorityOverride = 0;
                Z.__gas.isInfrastructure = !1
            })(function(a) {
                var b = G(a),
                    c = b;
                c[Qb.Na] = null;
                c[Qb.Xe] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();







    var rx = {};
    rx.macro = function(a) {
        if (vc.Ze.hasOwnProperty(a)) return vc.Ze[a]
    }, rx.onHtmlSuccess = vc.nh(!0), rx.onHtmlFailure = vc.nh(!1);
    rx.dataLayer = ye;
    rx.callback = function(a) {
        oe.hasOwnProperty(a) && pa(oe[a]) && oe[a]();
        delete oe[a]
    };
    rx.bootstrap = 0;
    rx._spx = !1;

    function sx() {
        Yd[S.D] = Yd[S.D] || rx;
        S.Qa && (Yd["ctid_" + S.Qa] = rx);
        Ih();
        Kh() || l(Lh(), function(a, b) {
            go(a, b.transportUrl, b.context);
            J(92)
        });
        Ia(pe, Z.o);
        wc();
        xc = Fc
    }
    (function(a) {
        function b() {
            m = D.documentElement.getAttribute("data-tag-assistant-present");
            nr(m) && (k = g.Ii)
        }
        if (!A["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (D.referrer) {
                var d = Ye(D.referrer);
                c = "cct.google" === Ve(d, "host")
            }
            if (!c) {
                var e = lg("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (A["__TAGGY_INSTALLED"] = !0, xb("https://cct.google/taggy/agent.js"))
        }
        if (je) a();
        else {
            var f = function(r) {
                    var v = "GTM",
                        w = "GTM";
                    de ? (v = "OGT", w = "GTAG") : je && (w = v = "OPT");
                    var y = A["google.tagmanager.debugui2.queue"];
                    y || (y = [],
                        A["google.tagmanager.debugui2.queue"] = y, xb("https://" + Xd.nd + "/debug/bootstrap?id=" + S.D + "&src=" + w + "&cond=" + r + "&gtm=" + Oh()));
                    var x = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: rb,
                            containerProduct: v,
                            debug: !1,
                            id: S.D,
                            isGte: ce
                        }
                    };
                    x.data.resume = function() {
                        a()
                    };
                    Xd.Zh && (x.data.initialPublish = !0);
                    y.push(x)
                },
                g = {
                    Ik: 1,
                    Ji: 2,
                    Vi: 3,
                    bi: 4,
                    Ii: 5
                },
                k = void 0,
                m = void 0,
                n = We(A.location, "query", !1, void 0, "gtm_debug");
            nr(n) && (k = g.Ji);
            if (!k && D.referrer) {
                var p = Ye(D.referrer);
                "tagassistant.google.com" === Ve(p, "host") && (k = g.Vi)
            }
            if (!k) {
                var q =
                    lg("__TAG_ASSISTANT");
                q.length && q[0].length && (k = g.bi)
            }
            k || b();
            if (!k && or(m)) {
                var t = function() {
                        if (u) return !0;
                        u = !0;
                        b();
                        k && rb ? f(k) : a()
                    },
                    u = !1;
                Bb(D, "TADebugSignal", function() {
                    t()
                }, !1);
                A.setTimeout(function() {
                    t()
                }, 200)
            } else k && rb ? f(k) : a()
        }
    })(function() {
        var a = !1;
        a && Cn("INIT");
        if (R(70)) {
            var b =
                wn(Vm.C.kc, S.D);
            xn(b)
        }
        Df().m();
        ui();
        if (S.Qa ? Yd["ctid_" + S.Qa] : Yd[S.D]) {
            var c = Yd.zones;
            c && c.unregisterChild(Eh());
        } else {
            for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) nc.push(e[f]);
            for (var g = d.tags || [], k = 0; k < g.length; k++) qc.push(g[k]);
            for (var m = d.predicates || [], n = 0; n < m.length; n++) pc.push(m[n]);
            for (var p = d.rules || [], q = 0; q < p.length; q++) {
                for (var t = p[q], u = {}, r = 0; r < t.length; r++) u[t[r][0]] = Array.prototype.slice.call(t[r], 1);
                oc.push(u)
            }
            sc = Z;
            tc = Fs;
            sx();
            mr();
            vo = !1;
            wo = 0;
            if ("interactive" == D.readyState && !D.createEventObject || "complete" == D.readyState) yo();
            else {
                Bb(D, "DOMContentLoaded", yo);
                Bb(D, "readystatechange", yo);
                if (D.createEventObject && D.documentElement.doScroll) {
                    var v = !0;
                    try {
                        v = !A.frameElement
                    } catch (H) {}
                    v && zo()
                }
                Bb(A, "load", yo)
            }
            Cq = !1;
            "complete" === D.readyState ? Eq() : Bb(A, "load", Eq);
            Gi && A.setInterval(Li, 864E5);
            R(46) && (J(111), Ya("HEALTH", 1));
            R(47) && (J(112), Ya("HEALTH", 2));
            ne = Fa();
            rx.bootstrap = ne;
            if (a) {
                var B = Dn("INIT");
            }
            if (R(70)) {
                var z = wn(Vm.C.Of, S.D);
                if (xn(z)) {
                    var C = wn(Vm.C.kc, S.D);
                    yn(z, C)
                }
            }
        }
    });

})()