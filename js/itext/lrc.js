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
/*global parseInt: true, parseLrc: true */

// LRC specification from http://www.cdmi.net/a2player/lrc_center.html

// Function to parse lrc file
function parseLrc(data) {
    var lrc = data.replace(/\r+/g, ''); // remove dos newlines
    lrc = lrc.replace(/\n+/g, '\n'); // remove empty lines
    lrc = lrc.replace(/^\s+|\s+$/g, ''); // trim white space start and end
    lrc = lrc.replace(/<[a-zA-Z\/][^>]*>/g, ''); // remove all html tags for security reasons
    // this last one also removes karaoke style time markup (ok for now)

    // get lyrics lines
    var lines = [];
    var start, end, content;
    content = null;
    lrclist = lrc.split('\n');
    for (var i = 0; i < lrclist.length; i=i+1) {
            var line = lrclist[i];
        // parse [xx] from rest of line
        var m = line.match(/\[([^\]]+)\](.*)/);
        var s = m[1].match(/(\d+):(\d+)(?:\.(\d+))?/);
        if (s) { // ignore header strings and broken time codes
              end =
                      (parseInt(s[1], 10) * 60) +
                  (parseInt(s[2], 10)) +
                  (parseInt(s[3], 10) / 100);

              // write previous line if there is content from before
              if (content) {
                lines.push({start: start, end: end, content: content});
          }
          start = end;
          content = m[2];
        }
        }
    // write last line if it has content
    if (content) {
          lines.push({start: start, end: null, content: content});
    }
    return lines;
}
