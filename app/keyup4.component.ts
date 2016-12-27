/**
 * Created by jessietang on 12/27/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'key-up4',
    templateUrl: 'app/views/keyUp4.html'
})

export class KeyUpComponent_v4{
    values = '';
    cities = ["成都","上海","广州","北京"];
    placeholders = "please input a city you want to add";
    addCity(newCity: string){
        this.cities.push(newCity);
    }
}