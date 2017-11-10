import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {DpDatePickerModule} from 'ng2-date-picker';
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
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './home/registration/registration.component';
import { GeneralComponent } from './home/registration/general/general.component';
import { MoreinfoComponent } from './home/registration/moreinfo/moreinfo.component';
import { PaymentComponent } from './home/registration/payment/payment.component';
import { InfoComponent } from './home/registration/info/info.component'


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
    ComponentNineComponent,
    FormComponent,
    HomeComponent,
    RegistrationComponent,
    GeneralComponent,
    MoreinfoComponent,
    PaymentComponent,
    InfoComponent,
  
 
  ],
  imports: [
    DpDatePickerModule,
    BrowserModule,
    FormsModule,
  RouterModule.forRoot([
  {
    path:'form',
    component:FormComponent
  },
{
  path:'',
  pathMatch:'full',
  component:HomeComponent
}
  ]),
  RouterModule.forRoot([
    {
      path:'registration',
      component:RegistrationComponent
    },
  {
    path:'',
    pathMatch:'full',
    component:HomeComponent
  }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
