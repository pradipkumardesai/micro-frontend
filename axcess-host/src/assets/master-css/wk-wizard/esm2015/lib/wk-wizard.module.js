/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { WizardTabset, WizardTab, WizardTabContent, WizardTabTitle } from './wk-wizard.component';
const /** @type {?} */ WIZARD_TABSET_DIRECTIVES = [
    WizardTabset,
    WizardTab,
    WizardTabContent,
    WizardTabTitle
];
export class WizardTabsetModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: WizardTabsetModule
        };
    }
}
WizardTabsetModule.decorators = [
    { type: NgModule, args: [{
                declarations: WIZARD_TABSET_DIRECTIVES,
                exports: WIZARD_TABSET_DIRECTIVES,
                imports: [
                    CommonModule,
                    NgbModalModule.forRoot()
                ]
            },] },
];
function WizardTabsetModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    WizardTabsetModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    WizardTabsetModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2std2l6YXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3drLXdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi93ay13aXphcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTVELE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR2xHLHVCQUFNLHdCQUF3QixHQUFHO0lBQy9CLFlBQVk7SUFDWixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGNBQWM7Q0FDZixDQUFDO0FBVUYsTUFBTTs7OztJQUNKLE1BQU0sQ0FBQyxPQUFPO1FBQ1osTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtTQUM3QixDQUFDO0tBQ0g7OztZQWJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsd0JBQXdCO2dCQUN0QyxPQUFPLEVBQUUsd0JBQXdCO2dCQUNqQyxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixjQUFjLENBQUMsT0FBTyxFQUFFO2lCQUN6QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5nYk1vZGFsTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBXaXphcmRUYWJzZXQsIFdpemFyZFRhYiwgV2l6YXJkVGFiQ29udGVudCwgV2l6YXJkVGFiVGl0bGUgfSBmcm9tICcuL3drLXdpemFyZC5jb21wb25lbnQnO1xuXG5cbmNvbnN0IFdJWkFSRF9UQUJTRVRfRElSRUNUSVZFUyA9IFtcbiAgV2l6YXJkVGFic2V0LCBcbiAgV2l6YXJkVGFiLCBcbiAgV2l6YXJkVGFiQ29udGVudCwgXG4gIFdpemFyZFRhYlRpdGxlXG5dO1xuXG5ATmdNb2R1bGUoeyBcbiAgZGVjbGFyYXRpb25zOiBXSVpBUkRfVEFCU0VUX0RJUkVDVElWRVMsIFxuICBleHBvcnRzOiBXSVpBUkRfVEFCU0VUX0RJUkVDVElWRVMsIFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE5nYk1vZGFsTW9kdWxlLmZvclJvb3QoKVxuICBdIFxufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRUYWJzZXRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHsgXG4gICAgcmV0dXJuIHsgXG4gICAgICBuZ01vZHVsZTogV2l6YXJkVGFic2V0TW9kdWxlIFxuICAgIH07IFxuICB9XG59Il19