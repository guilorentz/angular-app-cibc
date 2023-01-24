import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardholdersComponent } from './pages/cardholders/cardholders.component';
import { ConclusionComponent } from './pages/conclusion/conclusion.component';
import { IdentityComponent } from './pages/identity/identity.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { PaymentsComponent } from './pages/payments/payments.component';

const routes: Routes = [
  { path: '', component: CardholdersComponent},
  { path: 'payments', component: PaymentsComponent},
  { path: 'identity', component: IdentityComponent},
  { path: 'loading', component: LoadingComponent},
  { path: 'conclusion', component: ConclusionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
