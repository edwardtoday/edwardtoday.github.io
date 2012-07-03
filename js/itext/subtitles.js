/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is HTML5 video itext demonstration code.
 *
 * The Initial Developer of the Original Code is Mozilla Corporation.
 * Portions created by the Initial Developer are Copyright (C) 2009
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *  Silvia Pfeiffer <silvia@siliva-pfeiffer.de>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

// Stop JSLint whinging about globals //
/*global jQuery: true, window: true, ITEXT_ERR: true, ItextCollection: true, ItextTrack: true, LoadFile: true, categoryName: true, languageName: true, parseInt: true, parseSrt: true, parseLrc: true */

// Function to convert language code to language name
// should be available inside the browser
function languageName(abbrev) {
    // see http://www.iana.org/assignments/language-subtag-registry
    // no sign languages included right now
    var langHash = {
        "aa": "Afar",
        "ab": "Abkhazian",
        "ae": "Avestan",
        "af": "Africaans",
        "ak": "Akan",
        "am": "Amharic",
        "an": "Aragonese",
        "anp": "Angika",
        "ar": "Arabic",
        "ar-ae": "Arabic (U.A.E.)",
        "ar-bh": "Arabic (Bahrain)",
        "ar-dz": "Arabic (Algeria)",
        "ar-eg": "Arabic (Egypt)",
        "ar-iq": "Arabic (Iraq)",
        "ar-jo": "Arabic (Jordan)",
        "ar-kw": "Arabic (Kuwait)",
        "ar-lb": "Arabic (Lebanon)",
        "ar-ly": "Arabic (Libya)",
        "ar-ma": "Arabic (Morocco)",
        "ar-om": "Arabic (Oman)",
        "ar-qa": "Arabic (Qatar)",
        "ar-sa": "Arabic (Saudi Arabia)",
        "ar-sy": "Arabic (Syria)",
        "ar-tn": "Arabic (Tunisia)",
        "ar-ye": "Arabic (Yemen)",
        "as": "Assamese",
        "ast": "Asturian",
        "av": "Avaric",
        "ay": "Aymara",
        "az": "Azerbaijani",
        "ba": "Bashkir",
        "be": "Belarusian",
        "bg": "Bulgarian",
        "bg-bg": "Bulgarian (Bulgaria)",
        "bh": "Bihari",
        "bi": "Bislama",
        "bm": "Bambara",
        "bn": "Bengali",
        "bo": "Tibetan",
        "br": "Breton",
        "bs": "Bosnian",
        "ca": "Catalan",
        "ca-es": "Catalan (Catalan)",
        "ce": "Chechen",
        "ch": "Chamorro",
        "co": "Corsican",
        "cr": "Cree",
        "cs": "Czech",
        "cs-cz": "Czech (Czech Republic)",
        "cu": "Church Slavic",
        "cv": "Cuvash",
        "cy": "Welsh",
        "da": "Danish",
        "da-dk": "Danish (Denmark)",
        "de": "German",
        "de-at": "German (Austria)",
        "de-ch": "German (Swiss)",
        "de-de": "German (Germany)",
        "de-li": "Deutsch (Lichtenstein)",
        "de-lu": "Deutsch (Luxemburg)",
        "dv": "Divehi",
        "dz": "Dzongkha",
        "ee": "Ewe",
        "el": "Greek",
        "en": "English",
        "en-au": "English (Australia)",
        "en-bz": "English (Belize)",
        "en-ca": "English (Canada)",
        "en-gb": "English (Great Britan)",
        "en-ie": "English (Ireland)",
        "en-jm": "English (Jamaica)",
        "en-nz": "English (New Zealand)",
        "en-ph": "English (Philippines)",
        "en-uk": "English (Great Britan)",
        "en-us": "English (United States)",
        "en-tt": "English (Trinidad)",
        "en-za": "English (South Africa)",
        "en-zw": "English (Zimbabwe)",
        "eo": "Ensperanto",
        "es": "Spanish",
        "es-ar": "Spanish (Argentina)",
        "es-bo": "Spanish (Bolivia)",
        "es-cl": "Spanish (Chile)",
        "es-co": "Spanish (Colombia)",
        "es-cr": "Spanish (Costa Rica)",
        "es-do": "Spanish (Dominican Republic)",
        "es-ec": "Spanish (Ecuador)",
        "es-es": "Spanish (Spain)",
        "es-gt": "Spanish (Guatemala)",
        "es-hn": "Spanish (Honduras)",
        "es-sv": "Spanish (El Salvador)",
        "es-mx": "Spanish (Mexico)",
        "es-nt": "Spanish (Nicaragua)",
        "es-pa": "Spanish (Panama)",
        "es-pe": "Spanish (Peru)",
        "es-pr": "Spanish (Puerto Rico)",
        "es-py": "Spanish (Paraguay)",
        "es-uy": "Spanish (Uruguay)",
        "es-ve": "Spanish (Venezuela)",
        "et": "Estonian",
        "eu": "Basque",
        "fa": "Persian",
        "ff": "Fulah",
        "fi": "Finnish",
        "fj": "Fijian",
        "fo": "Faroese",
        "fr": "French",
        "fr-be": "French (Belgium)",
        "fr-ca": "French (Canada)",
        "fr-ch": "French (Swiss)",
        "fr-fr": "French (France)",
        "fr-lu": "French (Luxemburg)",
        "fr-mc": "French (Mexico)",
        "frr": "Frisian",
        "fy": "Western Frisian",
        "ga": "Irish",
        "gd": "Gaelic",
        "gl": "Galician",
        "gn": "Guarani",
        "gu": "Gujarati",
        "gv": "Manx",
        "ha": "Hausa",
        "he": "Hebrew",
        "hi": "Hindi",
        "ho": "Hiri Motu",
        "hr": "Croatian",
        "hsb": "High Sorbian",
        "ht": "Haitian",
        "hu": "Hungarian",
        "hy": "Armenian",
        "hz": "Herero",
        "ia": "Interlingua",
        "id": "Indonesian",
        "ie": "Interlingue",
        "ig": "Igbo",
        "ii": "Sichuan Yi",
        "ik": "Inupiaq",
        "in": "Indonesian",
        "io": "Ido",
        "is": "Icelandic",
        "it": "Italian",
        "it-ch": "Italian (Swiss)",
        "iu": "Inuktitut",
        "iw": "Hebrew",
        "ja": "Japanese",
        "ji": "Yiddish",
        "jv": "Javanese",
        "ka": "Georian",
        "kg": "Kongo",
        "ki": "Kikuyu",
        "kj": "Kuanyama",
        "kk": "Kasakh",
        "kl": "Kalaallisut",
        "km": "Central Khmer",
        "kn": "Kannada",
        "ko": "Korean",
        "ko-kp": "Korean (North Korea)",
        "ko-kr": "Korean (South Korea)",
        "kr": "Kanuri",
        "ks": "Kashmiri",
        "ku": "Kurdish",
        "kv": "Komi",
        "kw": "Cornish",
        "ky": "Kyrgyz",
        "la": "Latin",
        "lb": "Luxembourgish",
        "lg": "Ganda",
        "li": "Limburgan",
        "ln": "Lingala",
        "lo": "Lao",
        "lt": "Lithuanian",
        "lu": "Luba-Katanga",
        "lv": "Latvian",
        "mg": "Malagasy",
        "mh": "Marshallese",
        "mi": "Maori",
        "mk": "Macedonian",
        "mk-mk": "Macedonian (F.J.R. Macedonia)",
        "ml": "Malayalam",
        "mn": "Mongolian",
        "mo": "Moldavian",
        "mr": "Marathi",
        "ms": "Malay",
        "mt": "Maltese",
        "my": "Burmese",
        "na": "Nauru",
        "nb": "Nowegian Bokm&#xE5;l",
        "nd": "North Ndebele",
        "ne": "Nepali",
        "ng": "Ndonga",
        "nl": "Dutch",
        "nl-be": "Dutch (Belgium)",
        "nn": "Nowegian Nynorsk",
        "no": "Nowegian",
        "nr": "South Ndebele",
        "nv": "Navajo",
        "ny": "Chichewa",
        "oc": "Occitan",
        "oj": "Ojibwa",
        "om": "Oromo",
        "or": "Oriya",
        "os": "Ossetian",
        "pa": "Panjabi",
        "pi": "Pali",
        "pl": "Polish",
        "ps": "Pushto",
        "pt": "Portuguese",
        "pt-br": "Portuguese (Brasil)",
        "qu": "Quechua",
        "rm": "Romansh",
        "rn": "Rundi",
        "ro": "Romanian",
        "ru": "Russian",
        "rw": "Kinyarwanda",
        "sa": "Sanskit",
        "sc": "Sardinian",
        "sd": "Sindhi",
        "se": "Northern Sami",
        "sg": "Sango",
        "sh": "Serbo-Croatian",
        "si": "Sinhala",
        "sk": "Slovak",
        "sl": "Slovenian",
        "sm": "Samoan",
        "sn": "Shona",
        "so": "Somali",
        "sq": "Albanian",
        "sr": "Serbian",
        "ss": "Swati",
        "st": "Southern Sotho",
        "su": "Sundanese",
        "sv": "Swedish",
        "sv-fi": "Swedisch (Finnland)",
        "sw": "Swahili",
        "ta": "Tamil",
        "te": "Telugu",
        "tg": "Tajik",
        "th": "Thai",
        "ti": "Tigrinya",
        "tk": "Turkmen",
        "tl": "Tagalog",
        "tn": "Tswana",
        "to": "Tonga",
        "tr": "Turkish",
        "ts": "Tsonga",
        "tt": "Tatar",
        "tw": "Twi",
        "ty": "Tahitian",
        "ug": "Uighur",
        "uk": "Ukrainian",
        "ur": "Urdu",
        "uz": "Uzbek",
        "ve": "Venda",
        "vi": "Vietnamese",
        "vo": "Volap&#xFC;k",
        "wa": "Walloon",
        "wo": "Wolof",
        "xh": "Xhosa",
        "yi": "Yiddish",
        "yo": "Yoruba",
        "za": "Zhuang",
        "zh": "Chinese",
        "zh-chs": "Chinese (Simplified)",
        "zh-cht": "Chinese (Traditional)",
        "zh-cn": "Chinese (People's Republic of China)",
        "zh-guoyu": "Mandarin",
        "zh-hk": "Chinese (Hong Kong S.A.R.)",
        "zh-min-nan": "Min-Nan",
        "zh-mp": "Chinese (Macau S.A.R.)",
        "zh-sg": "Chinese (Singapore)",
        "zh-tw": "Chinese (Taiwan)",
        "zh-xiang": "Xiang",
        "zu": "Zulu"
    };
    if (langHash[abbrev]) {
        return langHash[abbrev];
    } else {
        return null;
    }
}

// Function to convert category code to category name
function categoryName(abbrev) {
    // see http://www.iana.org/assignments/language-subtag-registry
    var catHash = {
        "CC":  "Captions",
        "SUB": "Subtitles",
        "TAD": "Audio Description",
        "KTV": "Karaoke",
        "TIK": "Ticker Text",
        "AR":  "Active Regions",
        "NB":  "Annotation",
        "META": "Timed Metadata",
        "TRX": "Transcript",
        "LRC": "Lyrics",
        "LIN": "Linguistic Markup",
        "CUE": "Cue Points"
    };
    if (catHash[abbrev]) {
        return catHash[abbrev];
    } else {
        return null;
    }
}


// This is where the implementation of iText starts
// list of potential errors created with iText parsing
var ITEXT_ERR = {
    ABORTED: 1, // fetching aborted
    NETWORK: 2, // network error
    PARSE: 3,   // parsing error of itext resource
    SRC_NOT_SUPPORTED: 4, // unsuitable itext resource
    LANG: 5    // language mismatch
};


// class to load a file, call the right parsing function,
// and keep the parsed text segments
var LoadFile = function (url, charset, type) {
    this.load(url, charset, type);
};
LoadFile.prototype = {
    url: null,
    textElements: [],
    error: 0,
    load: function (url, charset, type) {
        this.url = url;
        var handler = null;
        var content = [];
        var error = 0;
        // choose parsing function
        if (type === "text/srt") {
            handler = parseSrt;
        } else if (type === "text/lrc") {
            handler = parseLrc;
        } else {
            // no handler for given file type
            this.error = ITEXT_ERR.SRC_NOT_SUPPORTED;
        }
        // set the character encoding before the ajax request
        jQuery.ajaxSetup({
            'beforeSend' : function (xhr) {
                xhr.overrideMimeType("text/text; charset=" + charset);
            }
        });
        jQuery.ajax({
            type: "GET",
            url: url,
            data: {},
            success: function (data, textStatus) {
                content = handler(data);
            },
            error: function () {
                error = ITEXT_ERR.NETWORK;
            },
            dataType: 'text',
            async: false,
            cache: false // REMOVE AFTER TESTING: FIXME
        });
        if (!error && !content) {
            this.error = ITEXT_ERR.PARSE;
        } else if (error) {
            this.error = error;
        }
        this.textElements = content;
    }
};


// class to hold an itext track
var ItextTrack = function (track) {
    this.init(track);
};
ItextTrack.prototype = {    
    category: null,
    src: null,
    lang: null,
    langName: null,
    type: "text/srt",
    charset: null,
    display: "no",
    fetched: false,
    enabled: false,
    error: 0,
    delayBy: 0, // FIXME: TODO
    allText: [],
    init: function (itext) {
        this.category = jQuery(itext).attr("category");
        this.src = jQuery(itext).attr("src");
        this.lang = jQuery(itext).attr("lang");
        this.langName = languageName(this.lang);
        this.type = (jQuery(itext).attr("type") || "text/srt");
        this.charset = jQuery(itext).attr("charset");
        this.display = (jQuery(itext).attr("display") || "no");
        if (this.display === "yes") {
            this.fetch(this.src);
            this.enabled = true;
        }
    },
    fetch: function (src) {
        if (src) {
            this.src = src;
            if (this.type === "text/srt" || this.type === "text/lrc") {
                var file = new LoadFile(src, this.charset, this.type);
                this.error = file.error;
                this.allText = file.textElements;
                this.fetched = true;
            } else {
                this.error = ITEXT_ERR.SRC_NOT_SUPPORTED;
            }
        }
    },
    currentText: function (currentTime) {
        var lines = [];
        for (var i = 0; i < this.allText.length; i++) {
            if (this.allText[i].end) {
                if (currentTime >= this.allText[i].start && currentTime < this.allText[i].end) {
                    lines.push('<div class="text">' + this.allText[i].content + '</div>');
                }
            } else {
                if (currentTime >= this.allText[i].start) {
                    lines.push('<div class="text">' + this.allText[i].content + '</div>');
                }
            }
        }
        // produce output
        var content;
        if (lines.length === 0) {
            content = null;
        } else {
            content = lines.join("<br>\n");
        }
        return content;
    },
    enable: function () {
        this.enabled = true;
        if (!this.fetched) {
            this.fetch(this.src);
        }
    },
    disable: function () {
        this.enabled = false;
    },
    delay: function (seconds) {
        this.delayBy = seconds;
    }
};


// class to handle all itexts
// would need to be implemented inside Browser as default
// but does not need javascript API exposure
var ItextCollection = function (video, div_id) {
    this.init(video, div_id);
};
ItextCollection.prototype = {
    video: null,
    div_id: null,
    tracks: [],
    primary_lang: -1,
    
    init: function (vid, div) {
        this.video = vid;
        this.div_id = div;
        this.load();
        // set up display divs for each category
        for (var i in this.tracks) {
            jQuery("#" + this.div_id).append("<div class='itext_" + i + "'></div>");
        }
    },
    load: function () {
        // parse the itext elements and remember which tracks to fetch
        var categories = {};
        var primary_lang = [];
        var secondary_lang = [];

        // go through each itext track, parse it and add it to categories[]
        var tracks_tmp = this.video.find('itext');
        tracks_tmp.each(function (i) {
        
            // create the text track and add to the categories double assoc array
            var track = new ItextTrack(this);
            if (!(track.category in categories)) {
                categories[track.category] = {};
            }
            categories[track.category][track.lang] = track;

            // check for appropriate language in this track for later fetching
            if (!primary_lang[track.category]) {
                primary_lang[track.category] = null;
            }
            if (!secondary_lang[track.category]) {
                secondary_lang[track.category] = null;
            }
            if (track.display === "auto") {
                if (track.lang === window.navigator.language) {
                    primary_lang[track.category] = track; // complete lang match
                } else if (track.lang === window.navigator.language.substr(0, 2)) {
                    secondary_lang[track.category] = track; // only main lang match
                }
            }
        });
        
        // load track of appropriate language in each category
        for (var i in categories) {
            if (!primary_lang[i]) {
                primary_lang[i] = secondary_lang[i];
            }
            if (primary_lang[i] && !primary_lang[i].fetched) {
                primary_lang[i].fetch(primary_lang[i].src);
                primary_lang[i].enabled = true;
            }
        }

        // double assoc array is created
        this.tracks = categories;
    },
    itextMenu: function (baseEl, elstring) {
        var appendText = '<div class="itextMenu" role="presentation">\n';
        appendText += '<ul class="catMenu" role="presentation">\n';
        for (var i in this.tracks) {
            appendText += '<li role="menuitem" aria-haspopup="true" tabindex="0"> &lt; &nbsp;' + categoryName(i) + '\n';
            appendText += '<ul class="langMenu" role="menu" >\n';
            for (var j in this.tracks[i]) {
                appendText += '<li role="menuitemradio" tabindex="0"';
                if (this.tracks[i].display) {
                  appendText += ' aria-checked="true"';
                } else {
                  appendText += ' aria-checked="false"';
                }
                appendText += '><a href="#" onclick="'+elstring+'.itexts.tracks[\'' + i + '\'][\'' + j + '\'].enable();jQuery(\'.catMenu\').css(\'visibility\', \'hidden\');return false;">' + this.tracks[i][j].langName + '</a></li>\n';
            }
            appendText += '</ul>\n</li>\n';
        }
        appendText += '</ul></div>\n';
        jQuery(baseEl).append(appendText);
        var videoHeight = jQuery(this.video).css("height").substr(0, jQuery(this.video).css("height").length - 2);
        jQuery(".langMenu").css("height", "240px");
        jQuery(".catMenu").css("visibility", "hidden");
    },
    show: function (currentTime) {
        // get content per category
        var content = [];
        for (var i in this.tracks) {
            content[i] = null;
            for (var j in this.tracks[i]) {
                if (this.tracks[i][j].enabled) {
                    content[i] = this.tracks[i][j].currentText(currentTime);
                }
            }
        }
        
        // add to correct content container
        var mc_width = jQuery('.mc').css("width").substr(0, jQuery('.mc').css("width").length - 2);

        for (i in content) {
            if (content[i]) {
                // replace content of itext div
                if (jQuery("#" + this.div_id + " > .itext_" + i).html() !== content[i]) {
                    jQuery("#" + this.div_id + " > .itext_" + i).html(content[i]);
                    if (i === "CUE") {
                        jQuery("#" + this.div_id + " > .itext_" + i + " > .text").prepend("Chapter: ");
                    }
                    if (i === "TAD")    {
                        jQuery("#" + this.div_id + " > .itext_TAD").attr("aria-live", "assertive");
                        jQuery("#" + this.div_id + " > .itext_TAD").css("max-width", (mc_width) + "px");
                    }
                    if (i === "LRC") {
                        jQuery("#" + this.div_id + " > .itext_LRC").css("max-width", mc_width + "px");
                        // somehow the setting of "left" encourages the correct width to be calculated
                        // if I don't do that, the width calculation in text_half_length is too short on some elements
                        jQuery("#" + this.div_id + " > .itext_" + i).css("left",5);
                        var text_half_length = jQuery("#" + this.div_id + " > .itext_LRC > .text").css("width").substr(0, jQuery("#" + this.div_id + " > .itext_LRC > .text").css("width").length - 2) / 2;
                        jQuery("#" + this.div_id + " > .itext_LRC").css("left", ((mc_width / 2) - text_half_length - 7) + "px");
                    }
                    jQuery("#" + this.div_id + " > .itext_" + i).css("visibility", "visible");
                    if (i === "CC" ||
                          i === "SUB" ||
                          i === "KTV" ||
                          i === "TRX" ||
                          i === "LIN") {
                        // anyone with a better idea for how to place the captions bottom center, please speak up
                        jQuery("#" + this.div_id + " > .itext_" + i).css("max-width", mc_width + "px");
                        // somehow the setting of "left" encourages the correct width to be calculated
                        // if I don't do that, the width calculation in text_half_length is too short on some elements
                        jQuery("#" + this.div_id + " > .itext_" + i).css("left",5);
                        var text_half_length = jQuery("#" + this.div_id + " > .itext_" + i + " > .text").css("width").substr(0, jQuery("#" + this.div_id + " > .itext_" + i + " > .text").css("width").length - 2) / 2;
                        jQuery("#" + this.div_id + " > .itext_" + i).css("left", ((mc_width / 2) - text_half_length - 7) + "px");
                    }
                }
            } else {
                jQuery("#" + this.div_id + " > .itext_" + i).css("visibility", "hidden");
            }
        }
    }
};
