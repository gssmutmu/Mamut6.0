/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu';
import { login_PhonePortrait } from '../pages/login/PhonePortrait/login';
import { site_PhonePortrait } from '../pages/site/PhonePortrait/site';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    login_PhonePortrait,
    site_PhonePortrait
  ];
  static mapping = {
    'login': {
      PhonePortrait: login_PhonePortrait
    },
    'site': {
      PhonePortrait: site_PhonePortrait
    }
  }
}