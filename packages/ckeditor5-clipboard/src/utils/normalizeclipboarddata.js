/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * Removes some popular browser quirks out of the clipboard data (HTML).
 *
 * @param {String} data The HTML data to normalize.
 * @returns {String} Normalized HTML.
 */
export default function normalizeClipboardData( data ) {
	return data
		.replace( /<span class="Apple-converted-space">(\s+)<\/span>/g, ( fullMatch, spaces ) => {
			// Handle the most popular and problematic case when even a single space becomes an nbsp;.
			// Decode those to normal spaces. Read more in https://github.com/ckeditor/ckeditor5-clipboard/issues/2.
			if ( spaces.length == 1 ) {
				return ' ';
			}

			return spaces;
		} );
}
