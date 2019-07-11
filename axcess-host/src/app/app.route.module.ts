import { Routes } from '@angular/router';

import { AxcessShellComponent } from './core/components/axcess-shell/axcess-shell.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UnauthorizedUserComponent } from './shared/components/unauthorized-user/unauthorized-user.component';
import { AuthGuard } from './guards/authentication/authentication-guard/authentication.guard';
import { AuthorizationGuard } from './guards/authorization/guard/authorization.guard';

export const routes: Routes = [
    { path: "invalidreq", component: PageNotFoundComponent },
    { path: "unauth", component: UnauthorizedUserComponent },
    { path: ":id", component: AxcessShellComponent, canActivate: [AuthGuard] },
    { path: "**", redirectTo: "/dashboard" }
];