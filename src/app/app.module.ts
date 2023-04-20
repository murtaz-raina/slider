import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NormalLandingComponent } from './normal-landing/normal-landing.component';
import { UaeLandingComponent } from './uae-landing/uae-landing.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: NormalLandingComponent },
  { path: 'uae', component: UaeLandingComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NormalLandingComponent,
    UaeLandingComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
