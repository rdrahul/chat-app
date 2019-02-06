import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { MessagegroundComponent } from './components/messageground/messageground.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ChannelsComponent,
    MessagegroundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
