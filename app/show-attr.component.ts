/**
 * Created by jessietang on 12/27/2016.
 */
import {Component} from '@angular/core';
import {Site} from './site'

@Component({
    selector: 'show-attr',
    templateUrl: 'app/views/showAttr.html'
})

export class ShowAttrComponent {
    title = '站点列表';
    //sites = ['菜鸟教程', 'Google', 'Taobao', 'Facebook'];
    sites = [
        new Site(1,'菜鸟教程'),
        new Site(2,'Google'),
        new Site(3,'Taobao'),
        new Site(4,'Facebook')
    ];
    //mySite = this.sites[0];
    mySite = this.sites[0].name;
    myTitle = this.title + '.....';
}