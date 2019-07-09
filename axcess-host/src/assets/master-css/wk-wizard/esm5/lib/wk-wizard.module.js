/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { WizardTabset, WizardTab, WizardTabContent, WizardTabTitle } from './wk-wizard.component';
var /** @type {?} */ WIZARD_TABSET_DIRECTIVES = [
    WizardTabset,
    WizardTab,
    WizardTabContent,
    WizardTabTitle
];
var WizardTabsetModule = /** @class */ (function () {
    function WizardTabsetModule() {
    }
    /**
     * @return {?}
     */
    WizardTabsetModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: WizardTabsetModule
        };
    };
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
    return WizardTabsetModule;
}());
export { WizardTabsetModule };
function WizardTabsetModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    WizardTabsetModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    WizardTabsetModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2std2l6YXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3drLXdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi93ay13aXphcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTVELE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR2xHLHFCQUFNLHdCQUF3QixHQUFHO0lBQy9CLFlBQVk7SUFDWixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGNBQWM7Q0FDZixDQUFDOzs7Ozs7O0lBV08sMEJBQU87OztJQUFkO1FBQ0UsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtTQUM3QixDQUFDO0tBQ0g7O2dCQWJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsd0JBQXdCO29CQUN0QyxPQUFPLEVBQUUsd0JBQXdCO29CQUNqQyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixjQUFjLENBQUMsT0FBTyxFQUFFO3FCQUN6QjtpQkFDRjs7NkJBdEJEOztTQXVCYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTmdiTW9kYWxNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IFdpemFyZFRhYnNldCwgV2l6YXJkVGFiLCBXaXphcmRUYWJDb250ZW50LCBXaXphcmRUYWJUaXRsZSB9IGZyb20gJy4vd2std2l6YXJkLmNvbXBvbmVudCc7XG5cblxuY29uc3QgV0laQVJEX1RBQlNFVF9ESVJFQ1RJVkVTID0gW1xuICBXaXphcmRUYWJzZXQsIFxuICBXaXphcmRUYWIsIFxuICBXaXphcmRUYWJDb250ZW50LCBcbiAgV2l6YXJkVGFiVGl0bGVcbl07XG5cbkBOZ01vZHVsZSh7IFxuICBkZWNsYXJhdGlvbnM6IFdJWkFSRF9UQUJTRVRfRElSRUNUSVZFUywgXG4gIGV4cG9ydHM6IFdJWkFSRF9UQUJTRVRfRElSRUNUSVZFUywgXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTmdiTW9kYWxNb2R1bGUuZm9yUm9vdCgpXG4gIF0gXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZFRhYnNldE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMgeyBcbiAgICByZXR1cm4geyBcbiAgICAgIG5nTW9kdWxlOiBXaXphcmRUYWJzZXRNb2R1bGUgXG4gICAgfTsgXG4gIH1cbn0iXX0=