/**
 * Created by jessietang on 12/27/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'click-me',
    templateUrl: 'app/views/clickMe.html' /*���·���������index.html��*/
})
export class ClickMeComponent{
    clickMessage = '';
    clickMe(){
        this.clickMessage = 'you have clicked me!';
    }
}