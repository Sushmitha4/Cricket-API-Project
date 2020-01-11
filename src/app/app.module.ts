import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { PlayerComponent } from "./player/player.component";
import { PlayerstatisticsComponent } from "./playerstatistics/playerstatistics.component";

@NgModule({
  declarations: [AppComponent, PlayerComponent, PlayerstatisticsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: " ", component: PlayerComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
