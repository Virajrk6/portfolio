import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textWrap',
})
export class TextWrapPipe implements PipeTransform {
  transform(value: string, maxChars: number = 30): string {
    if (!value) return '';
    if (value.length <= maxChars) return value;
  const names = value.split(',');
    let currentString = '';
    let result = '';

    for (let i = 0; i < names.length; i++) {
      // Create what the next string would look like if we add this name
      const nextString = currentString ? `${currentString},${names[i]}` : names[i];

      // If adding this name exceeds the limit, stop and add the ellipsis
      if (nextString.length > maxChars) {
        return currentString ? `${currentString}, et al.` : 'et al.';
      }

      currentString = nextString;
    }

    return currentString;
  }
}

