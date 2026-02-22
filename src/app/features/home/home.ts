import { Component, OnInit, inject } from '@angular/core';
import { HeroSection } from '../hero-section/hero-section';
import { HighlightsSection } from '../highlights-section/highlights-section';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [HeroSection, HighlightsSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit() {
    this.titleService.setTitle('دواجن المختار | أجود أنواع الدواجن الطازجة والمجمدة');
    this.metaService.addTags([
      { name: 'description', content: 'نقدم لكم أفضل أنواع الدواجن الطازجة والمجمدة بأعلى معايير الجودة والنظافة. اطلب الآن من دواجن المختار وتوصيل سريع.' },
      { name: 'keywords', content: 'دواجن, دجاج طازج, فراخ مجمدة, دواجن المختار, فراخ بانيه, توصيل دواجن' },
      { property: 'og:title', content: 'دواجن المختار | أجود أنواع الدواجن الطازجة' },
      { property: 'og:description', content: 'نقدم لكم أفضل أنواع الدواجن الطازجة والمجمدة بأعلى معايير الجودة.' },
    ]);
  }
}
