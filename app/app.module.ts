/**
 * Created by jessietang on 12/26/2016.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ShowAttrComponent} from './show-attr.component';
import {ClickMeComponent} from './click-me.component';
import {KeyUpComponent_v1} from './keyup.component';
import {KeyUpComponent_v2} from './keyup2.component';
import {KeyUpComponent_v3} from './keyup3.component';
import {KeyUpComponent_v4} from './keyup4.component';


@NgModule({
    imports: [BrowserModule],/*本模块组件模板中需要由其它导出类的模块*/
    declarations: [AppComponent,
        ShowAttrComponent,
        ClickMeComponent,
        KeyUpComponent_v1,
        KeyUpComponent_v2,
        KeyUpComponent_v3,
        KeyUpComponent_v4],/*AppComponent组件类属于这个模块儿*/
    bootstrap: [AppComponent]/*应用的主视图，称为根组件，它是所有其它应用视图的宿主。
    只有根模块需要设置 bootstrap 属性中*/
})
export class AppModule{}