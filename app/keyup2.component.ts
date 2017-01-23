/**
 * Created by jessietang on 12/27/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'key-up2',
    templateUrl: 'app/views/keyUp2.html'
})
export class KeyUpComponent_v2{

    /*从【模板变量】获得输入框比通过$event对象更加简单。
     下面的代码重写了之前keyup示例，它使用变量来获得用户输入。
     这个方法最漂亮的一点是：组件代码从视图中获得了干净的数据值。
     再也不用了解$event变量及其结构了。*/

    values = '';
    onKey(value: string){
        this.values += value + '|';
    }
}