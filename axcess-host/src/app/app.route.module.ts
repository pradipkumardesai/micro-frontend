import { Routes } from '@angular/router';

import { AxcessShellComponent } from './core/components/axcess-shell/axcess-shell.component';
import { AuthGuard } from './core/services/auth-guard/auth.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UnauthorizedUserComponent } from './shared/components/unauthorized-user/unauthorized-user.component';

export const routes: Routes = [
    { path: "invalidreq", component: PageNotFoundComponent },
    { path: "unauth", component: UnauthorizedUserComponent },
    { path: ":id", component: AxcessShellComponent, canActivate: [AuthGuard] },
   
    { path: "**", redirectTo: "/am" }
];