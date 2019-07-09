/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
var HighlightPipe = /** @class */ (function () {
    function HighlightPipe() {
    }
    /**
     * @param {?} text
     * @param {?} search
     * @return {?}
     */
    HighlightPipe.prototype.transform = /**
     * @param {?} text
     * @param {?} search
     * @return {?}
     */
    function (text, search) {
        // check if search text is passed or not, if passed
        //replace search text with given regular expression
        if (search) {
            var /** @type {?} */ pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            // split pattern with empty spaces and filter the text with length greater than zero
            // and join the text with pipe
            pattern = pattern.split(' ').filter(function (t) {
                return t.length > 0;
            }).join('|');
            var /** @type {?} */ regex = new RegExp(pattern, 'gi');
            // append the match text to label tag
            return search ? text.replace(regex, function (match) { return "<label class=\"highlight\">" + match + "</label>"; }) : text;
        }
        return text;
    };
    HighlightPipe.decorators = [
        { type: Pipe, args: [{ name: 'highlight' },] },
    ];
    return HighlightPipe;
}());
export { HighlightPipe };
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    /**
     * @param {?} items
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    FilterPipe.prototype.transform = /**
     * @param {?} items
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    function (items, field, value) {
        // check if value is present or not
        if (value) {
            // returns empty array if items are empty
            if (!items) {
                return [];
            }
            var /** @type {?} */ re = new RegExp(value, 'gi');
            // returns filtered items with regular expression re and searching the text
            return items.filter(function (it) { return it[field].toLowerCase().replace(re, "<mark>" + value.toLocaleLowerCase() + "</mark>").indexOf(value.toLowerCase()) > -1; });
        }
        return items;
    };
    FilterPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'FilterPipe',
                },] },
    ];
    return FilterPipe;
}());
export { FilterPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2stbXVsdGlzZWxlY3QucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3drLW11bHRpc2VsZWN0LyIsInNvdXJjZXMiOlsibGliL3drLW11bHRpc2VsZWN0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUFJbEQsaUNBQVM7Ozs7O0lBQVQsVUFBVSxJQUFZLEVBQUUsTUFBTTs7O1FBRzVCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxxQkFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQ0FBcUMsRUFBRSxNQUFNLENBQUMsQ0FBQzs7O1lBRzVFLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUM7Z0JBQ3BDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2IscUJBQUksS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzs7WUFFdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxnQ0FBNEIsS0FBSyxhQUFVLEVBQTNDLENBQTJDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ3BHO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNiOztnQkFqQkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs7d0JBRjNCOztTQUdhLGFBQWE7Ozs7Ozs7Ozs7SUF1QnhCLDhCQUFTOzs7Ozs7SUFBVCxVQUFVLEtBQVksRUFBRSxLQUFhLEVBQUUsS0FBYTs7UUFFbEQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7WUFFVixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzthQUFFO1lBQzFCLHFCQUFJLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7O1lBRWpDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsUUFBUSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBdkgsQ0FBdUgsQ0FBQyxDQUFDO1NBQ3BKO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkOztnQkFkRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFlBQVk7aUJBQ25COztxQkF4QkQ7O1NBeUJhLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2hpZ2hsaWdodCcgfSlcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh0ZXh0OiBzdHJpbmcsIHNlYXJjaCk6IHN0cmluZyB7XG4gICAgLy8gY2hlY2sgaWYgc2VhcmNoIHRleHQgaXMgcGFzc2VkIG9yIG5vdCwgaWYgcGFzc2VkXG4gICAgLy9yZXBsYWNlIHNlYXJjaCB0ZXh0IHdpdGggZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uXG4gICAgaWYgKHNlYXJjaCkge1xuICAgICAgdmFyIHBhdHRlcm4gPSBzZWFyY2gucmVwbGFjZSgvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csIFwiXFxcXCQmXCIpO1xuICAgICAgLy8gc3BsaXQgcGF0dGVybiB3aXRoIGVtcHR5IHNwYWNlcyBhbmQgZmlsdGVyIHRoZSB0ZXh0IHdpdGggbGVuZ3RoIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgICAvLyBhbmQgam9pbiB0aGUgdGV4dCB3aXRoIHBpcGVcbiAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnNwbGl0KCcgJykuZmlsdGVyKCh0KSA9PiB7XG4gICAgICAgIHJldHVybiB0Lmxlbmd0aCA+IDA7XG4gICAgICB9KS5qb2luKCd8Jyk7XG4gICAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKHBhdHRlcm4sICdnaScpO1xuICAgICAgLy8gYXBwZW5kIHRoZSBtYXRjaCB0ZXh0IHRvIGxhYmVsIHRhZ1xuICAgICAgcmV0dXJuIHNlYXJjaCA/IHRleHQucmVwbGFjZShyZWdleCwgKG1hdGNoKSA9PiBgPGxhYmVsIGNsYXNzPVwiaGlnaGxpZ2h0XCI+JHttYXRjaH08L2xhYmVsPmApIDogdGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnRmlsdGVyUGlwZScsXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGl0ZW1zOiBhbnlbXSwgZmllbGQ6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IGFueVtdIHtcbiAgICAvLyBjaGVjayBpZiB2YWx1ZSBpcyBwcmVzZW50IG9yIG5vdFxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gcmV0dXJucyBlbXB0eSBhcnJheSBpZiBpdGVtcyBhcmUgZW1wdHlcbiAgICAgIGlmICghaXRlbXMpIHsgcmV0dXJuIFtdOyB9XG4gICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKHZhbHVlLCAnZ2knKTtcbiAgICAgIC8vIHJldHVybnMgZmlsdGVyZWQgaXRlbXMgd2l0aCByZWd1bGFyIGV4cHJlc3Npb24gcmUgYW5kIHNlYXJjaGluZyB0aGUgdGV4dFxuICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpdCA9PiBpdFtmaWVsZF0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKHJlLCBcIjxtYXJrPlwiICsgdmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSArIFwiPC9tYXJrPlwiKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cbn1cbiJdfQ==