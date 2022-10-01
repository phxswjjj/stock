import { MenuItem } from 'primeng/api';

import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  items!: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.config);

    this.items = [];
    this.router.config.forEach(route => {
      const item = this.generateMenuItem(route);
      if (item)
        this.items.push(item);
    });
  }

  generateMenuItem(route: Route, prefixPath: string = ''): MenuItem | null {
    //https://stackoverflow.com/questions/67572355/webpack-5-angular-polyfill-for-node-js-crypto-js/67808287#67808287
    var path = require('path');
    const fullPath = path.join(prefixPath, route.path!);
    if (!fullPath)
      return null;
    else if (!route.data || !route.data['display'])
      return null;

    const item: MenuItem = {
      label: route.data['display'],
      icon: 'pi pi-fw',
    };
    if (route.children) {
      item.items = [];
      route.children.forEach(childRoute => {
        const childItem = this.generateMenuItem(childRoute, fullPath);
        if (childItem)
          item.items!.push(childItem);
      });
    }
    return item;
  }

}
