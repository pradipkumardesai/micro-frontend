/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe, HighlightPipe } from './wk-multiselect.pipe';
import { WkMultiselectComponent } from './wk-multiselect.component';
import { WindowRef } from './WindowRef.provider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
var WkMultiselectModule = /** @class */ (function () {
    function WkMultiselectModule() {
    }
    /**
     * @return {?}
     */
    WkMultiselectModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: WkMultiselectModule,
            providers: [
                WindowRef
            ]
        };
    };
    WkMultiselectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule, FormsModule, NgbModule.forRoot()
                    ],
                    declarations: [WkMultiselectComponent, FilterPipe, HighlightPipe],
                    exports: [WkMultiselectComponent]
                },] },
    ];
    return WkMultiselectModule;
}());
export { WkMultiselectModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2stbXVsdGlzZWxlY3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vd2stbXVsdGlzZWxlY3QvIiwic291cmNlcyI6WyJsaWIvd2stbXVsdGlzZWxlY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7OztJQVd2QywyQkFBTzs7OztRQUNuQixNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsRUFBRTtnQkFDVCxTQUFTO2FBQ1Y7U0FDRixDQUFDOzs7Z0JBZkwsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUU7cUJBQy9DO29CQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUM7b0JBQ2pFLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNsQzs7OEJBZEQ7O1NBZ0JhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGaWx0ZXJQaXBlLCBIaWdobGlnaHRQaXBlIH0gZnJvbSAnLi93ay1tdWx0aXNlbGVjdC5waXBlJztcbmltcG9ydCB7IFdrTXVsdGlzZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3drLW11bHRpc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuL1dpbmRvd1JlZi5wcm92aWRlcic7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOZ2JNb2R1bGUuZm9yUm9vdCgpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1drTXVsdGlzZWxlY3RDb21wb25lbnQsIEZpbHRlclBpcGUsIEhpZ2hsaWdodFBpcGVdLFxuICBleHBvcnRzOiBbV2tNdWx0aXNlbGVjdENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBXa011bHRpc2VsZWN0TW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogV2tNdWx0aXNlbGVjdE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBXaW5kb3dSZWZcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG5cbiJdfQ==