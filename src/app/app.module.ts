import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadioButtonCardComponent } from './components/radio-button-card/radio-button-card.component';
import { TextComponent } from './components/text/text.component';
import { CardholdersComponent } from './pages/cardholders/cardholders.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BulletTextComponent } from './components/bullet-text/bullet-text.component';
import { MatIconModule } from '@angular/material/icon';
import { PaymentsComponent } from './pages/payments/payments.component';
import { IdentityComponent } from './pages/identity/identity.component';
import { RadioButtonCardIdentityComponent } from './components/radio-button-card-identity/radio-button-card-identity.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { ConclusionComponent } from './pages/conclusion/conclusion.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    RadioButtonCardComponent,
    TextComponent,
    CardholdersComponent,
    BulletTextComponent,
    PaymentsComponent,
    IdentityComponent,
    RadioButtonCardIdentityComponent,
    LoadingComponent,
    ConclusionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
