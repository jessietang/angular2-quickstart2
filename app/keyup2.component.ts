/**
 * Created by jessietang on 12/27/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'key-up2',
    templateUrl: 'app/views/keyUp2.html'
})
export class KeyUpComponent_v2{
    values = '';
    onKey(value: string){
        this.values += value + '|';
    }
}