import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from "@ngrx/effects";
import { AppLinkService } from '../app-links/services/app-link/app-link.service';
import * as coreActions from './core.actions';
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class AppLinksEffect {

    constructor(private actions: Actions, private appLinkService: AppLinkService) {
        console.log("AppLinksEffect > constructor");
    }

    @Effect()
    loadLinks = this.actions.pipe(ofType(coreActions.CoreActionTypes.LoadAppLinks), mergeMap(

        (action: coreActions.LoadAppLinks) => this.appLinkService.getLinks().pipe(

            map((links: any[]) => new coreActions.LoadAppLinksSuccess(links))

        )

    ))

}