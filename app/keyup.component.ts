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
    keyValues = '';


    /*
    //非强类型---将$event转换为any类型。这样简化了代码，但是有成本
    onKey(event:any){
        this.values += event.target.value + '|';
    }
    */

    //强类型---$event的类型现在是KeyboardEvent。不是所有的元素都有value属性，
    // 所以它将target转换为输入元素。 OnKey方法更加清晰的表达了它期望从模板得到什么，
    // 以及它是如何解析事件的。
    onKey(event:KeyboardEvent){
        this.values += (<HTMLInputElement>event.target).value + '|';
    }


    // 用event.key替代event.target.value，积累各个按键本身
    onKey2(event:any){
        this.keyValues += event.key + '|';
    }

    /*onKey2(event:KeyboardEvent){
        this.keyValues += (<HTMLInputElement>event.key) + '|';
    }*/
}