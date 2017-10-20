import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { ComponentFourComponent } from './component-four/component-four.component';
import { ComponentFiveComponent } from './component-five/component-five.component';
import { ComponentSixComponent } from './component-six/component-six.component';
import { ComponentSevenComponent } from './component-seven/component-seven.component';
import { ComponentEightComponent } from './component-eight/component-eight.component';
import { ComponentNineComponent } from './component-nine/component-nine.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ComponentFourComponent,
    ComponentFiveComponent,
    ComponentSixComponent,
    ComponentSevenComponent,
    ComponentEightComponent,
    ComponentNineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
