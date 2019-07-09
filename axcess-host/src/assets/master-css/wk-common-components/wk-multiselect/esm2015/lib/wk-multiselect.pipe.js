/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
export class HighlightPipe {
    /**
     * @param {?} text
     * @param {?} search
     * @return {?}
     */
    transform(text, search) {
        // check if search text is passed or not, if passed
        //replace search text with given regular expression
        if (search) {
            var /** @type {?} */ pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            // split pattern with empty spaces and filter the text with length greater than zero
            // and join the text with pipe
            pattern = pattern.split(' ').filter((t) => {
                return t.length > 0;
            }).join('|');
            var /** @type {?} */ regex = new RegExp(pattern, 'gi');
            // append the match text to label tag
            return search ? text.replace(regex, (match) => `<label class="highlight">${match}</label>`) : text;
        }
        return text;
    }
}
HighlightPipe.decorators = [
    { type: Pipe, args: [{ name: 'highlight' },] },
];
export class FilterPipe {
    /**
     * @param {?} items
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    transform(items, field, value) {
        // check if value is present or not
        if (value) {
            // returns empty array if items are empty
            if (!items) {
                return [];
            }
            var /** @type {?} */ re = new RegExp(value, 'gi');
            // returns filtered items with regular expression re and searching the text
            return items.filter(it => it[field].toLowerCase().replace(re, "<mark>" + value.toLocaleLowerCase() + "</mark>").indexOf(value.toLowerCase()) > -1);
        }
        return items;
    }
}
FilterPipe.decorators = [
    { type: Pipe, args: [{
                name: 'FilterPipe',
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2stbXVsdGlzZWxlY3QucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3drLW11bHRpc2VsZWN0LyIsInNvdXJjZXMiOlsibGliL3drLW11bHRpc2VsZWN0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BELE1BQU07Ozs7OztJQUNKLFNBQVMsQ0FBQyxJQUFZLEVBQUUsTUFBTTs7O1FBRzVCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxxQkFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQ0FBcUMsRUFBRSxNQUFNLENBQUMsQ0FBQzs7O1lBRzVFLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNiLHFCQUFJLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7O1lBRXRDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyw0QkFBNEIsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ3BHO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNiOzs7WUFqQkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs7QUF1QjNCLE1BQU07Ozs7Ozs7SUFDSixTQUFTLENBQUMsS0FBWSxFQUFFLEtBQWEsRUFBRSxLQUFhOztRQUVsRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOztZQUVWLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2FBQUU7WUFDMUIscUJBQUksRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQzs7WUFFakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxRQUFRLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEo7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7OztZQWRGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsWUFBWTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnaGlnaGxpZ2h0JyB9KVxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHRleHQ6IHN0cmluZywgc2VhcmNoKTogc3RyaW5nIHtcbiAgICAvLyBjaGVjayBpZiBzZWFyY2ggdGV4dCBpcyBwYXNzZWQgb3Igbm90LCBpZiBwYXNzZWRcbiAgICAvL3JlcGxhY2Ugc2VhcmNoIHRleHQgd2l0aCBnaXZlbiByZWd1bGFyIGV4cHJlc3Npb25cbiAgICBpZiAoc2VhcmNoKSB7XG4gICAgICB2YXIgcGF0dGVybiA9IHNlYXJjaC5yZXBsYWNlKC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZywgXCJcXFxcJCZcIik7XG4gICAgICAvLyBzcGxpdCBwYXR0ZXJuIHdpdGggZW1wdHkgc3BhY2VzIGFuZCBmaWx0ZXIgdGhlIHRleHQgd2l0aCBsZW5ndGggZ3JlYXRlciB0aGFuIHplcm9cbiAgICAgIC8vIGFuZCBqb2luIHRoZSB0ZXh0IHdpdGggcGlwZVxuICAgICAgcGF0dGVybiA9IHBhdHRlcm4uc3BsaXQoJyAnKS5maWx0ZXIoKHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHQubGVuZ3RoID4gMDtcbiAgICAgIH0pLmpvaW4oJ3wnKTtcbiAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAocGF0dGVybiwgJ2dpJyk7XG4gICAgICAvLyBhcHBlbmQgdGhlIG1hdGNoIHRleHQgdG8gbGFiZWwgdGFnXG4gICAgICByZXR1cm4gc2VhcmNoID8gdGV4dC5yZXBsYWNlKHJlZ2V4LCAobWF0Y2gpID0+IGA8bGFiZWwgY2xhc3M9XCJoaWdobGlnaHRcIj4ke21hdGNofTwvbGFiZWw+YCkgOiB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdGaWx0ZXJQaXBlJyxcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCBmaWVsZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogYW55W10ge1xuICAgIC8vIGNoZWNrIGlmIHZhbHVlIGlzIHByZXNlbnQgb3Igbm90XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyByZXR1cm5zIGVtcHR5IGFycmF5IGlmIGl0ZW1zIGFyZSBlbXB0eVxuICAgICAgaWYgKCFpdGVtcykgeyByZXR1cm4gW107IH1cbiAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAodmFsdWUsICdnaScpO1xuICAgICAgLy8gcmV0dXJucyBmaWx0ZXJlZCBpdGVtcyB3aXRoIHJlZ3VsYXIgZXhwcmVzc2lvbiByZSBhbmQgc2VhcmNoaW5nIHRoZSB0ZXh0XG4gICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ID0+IGl0W2ZpZWxkXS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UocmUsIFwiPG1hcms+XCIgKyB2YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpICsgXCI8L21hcms+XCIpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbiAgfVxufVxuIl19