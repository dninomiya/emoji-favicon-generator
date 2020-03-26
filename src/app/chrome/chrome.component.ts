import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chrome',
  templateUrl: './chrome.component.html',
  styleUrls: ['./chrome.component.scss']
})
export class ChromeComponent implements OnInit {
  @Input() settings: {
    favicon: string;
    title: string;
    isDarkMode: boolean;
  };

  activeIndex = 0;
  tabs = [
    {},
    {
      favicon: '🌿',
      title: 'Facebook'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
