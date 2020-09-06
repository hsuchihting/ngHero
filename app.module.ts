// 系統元件
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// 自訂元件
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MassagesComponent } from './massages/massages.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

// service
import { HeroService } from './hero.service';
import { MassageService } from './massage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MassagesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [HeroService, MassageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
