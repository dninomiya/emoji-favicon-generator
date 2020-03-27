import { Component, ViewChild, ElementRef } from '@angular/core';
import * as EmojiButton from '@joeattardi/emoji-button';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('pickerContainer') pickerContainer: ElementRef;

  settings = {
    favicon: '🚀',
    title: 'Your Site',
    isDarkMode: false
  };
  downloadURL: string;
  svgCode: string;
  picker;
  linkTag = '<link rel="icon" type="image/svg+xml" href="favicon.svg" />';

  constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) {
    this.picker = new EmojiButton();
    this.generateSVG();
    this.picker.on('emoji', (emoji: string) => {
      this.settings.favicon = emoji;
      this.generateSVG();
    });
  }

  private generateSVG() {
    this.svgCode =
      '<svg xmlns="http://www.w3.org/2000/svg">\n' +
      `  <text y="32" font-size="32">${this.settings.favicon}</text>\n` +
      '</svg>';
    this.downloadURL = 'data:image/svg+xml,' + encodeURIComponent(this.svgCode);
  }

  copy(content) {
    this.clipboard.copy(content);
    this.snackBar.open('copied!', null, {
      duration: 2000
    });
  }

  openEmoji() {
    this.picker.togglePicker(this.pickerContainer.nativeElement);
  }
}
