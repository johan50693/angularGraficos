import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule,ThemeService  } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineasComponent } from './components/lineas/lineas.component';
import { BarraComponent } from './components/barra/barra.component';
import { DonaComponent } from './components/dona/dona.component';

@NgModule({
  declarations: [
    AppComponent,
    LineasComponent,
    BarraComponent,
    DonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
