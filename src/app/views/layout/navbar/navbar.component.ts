import { Component, OnInit, Inject, Renderer2, HostListener, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { MENU } from './menu';
import { MenuItem } from './menu.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  menuItems: MenuItem[] = [];
  industry = false;

  unsub$ = new Subject<void>();

  /**
  * Fixed header menu on scroll
  */
  @HostListener('window:scroll', ['$event']) getScrollHeight() {
    if (window.matchMedia('(min-width: 992px)').matches) {
      let header: HTMLElement = document.querySelector('.horizontal-menu') as HTMLElement;
      if(window.pageYOffset >= 60) {
        header.parentElement!.classList.add('fixed-on-scroll')
      } else {
        header.parentElement!.classList.remove('fixed-on-scroll')
      }
    }
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.menuItems = MENU;

    if (this.router.routerState.snapshot.url === '/dashboard') {
      this.industry = true;
    }
    this.router.events.pipe(
      takeUntil(this.unsub$)
    ).subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        if (val?.url === '/dashboard') {
          this.industry = true;
        } else {
          this.industry = false;
        }
      }
  });
    // console.log(this.router.url)
    /**
    * closing the header menu after route change in tablet/mobile devices
    */
    if (window.matchMedia('(max-width: 991px)').matches) {
      this.router.events.forEach((event) => {
        if (event instanceof NavigationEnd) {
          document.querySelector('.horizontal-menu .bottom-navbar')!.classList.remove('header-toggled');
        }
      });
    }
  }

  ngOnDestroy(): void {
      this.unsub$.next();
      this.unsub$.unsubscribe();
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subMenus !== undefined ? item.subMenus.length > 0 : false;
  }

  /**
   * Logout
   */
  onLogout(e: Event) {
    e.preventDefault();
    localStorage.removeItem('isLoggedin');

    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/auth/login']);
    }
  }

  /**
   * Toggle header menu in tablet/mobile devices
   */
  toggleHeaderMenu() {
    document.querySelector('.horizontal-menu .bottom-navbar')!.classList.toggle('header-toggled');
  }


}
