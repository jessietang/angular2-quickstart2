/**
 * Created by jessietang on 12/27/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'key-up3',
    templateUrl: 'app/views/keyUp3.html'
})

export class KeyUpComponent_v3{
    values = '';

    values2 = '';
    onEnter(value: string){
        this.values2 += value;
    }
}

