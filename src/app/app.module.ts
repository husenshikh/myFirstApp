import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MobileComponent } from './component/mobile/mobile.component';
// import { PlayerComponent } from './player/player.component';
// import { CarComponent } from './car/car.component';
// import { ActorComponent } from './actor/actor.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MobileComponent,
    // PlayerComponent,
    // CarComponent,
    // ActorComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
