/**
 * Created by jessietang on 12/27/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'key-up1',
    templateUrl: 'app/views/keyUp1.html' /*路径是相对于index.html的*/
})
export class KeyUpComponent_v1{
    values = '';
    /*
    //非强类型
    onKey(event:any){
        this.values += event.target.value + '|';
    }
    */

    //强类型
    onKey(event:KeyboardEvent){
        this.values += (<HTMLInputElement>event.target).value + '|';
    }
}