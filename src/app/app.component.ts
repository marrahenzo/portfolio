import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  TranslateDirective,
  TranslatePipe,
  TranslateService,
} from '@ngx-translate/core';
import translationsEn from '../../public/i18n/en.json';
import translationsEs from '../../public/i18n/es.json';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setTranslation('en', translationsEn);
    this.translate.setTranslation('es', translationsEs);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
