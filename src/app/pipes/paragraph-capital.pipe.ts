import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraphCapital',
})
export class ParagraphCapitalPipe implements PipeTransform {
  transform(value: string): string {
    const trimmed = value.trim();
    const fixed =
      trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
    const lastChar = fixed.charAt(fixed.length - 1);
    return fixed + (lastChar == '.' ? '' : '.');
  }
}
