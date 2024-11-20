import { Injectable } from '@angular/core';
import { TW } from 'src/lang/TW/TW.dev';
import { EN } from 'src/lang/EN/EN.dev';
import { VI } from 'src/lang/VI/VI.dev';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  
  Dictionary = {
    TW : TW,
    EN : EN,
    VI : VI,
  };
  

  Traslation(key: string): string {
    try {
      let text = eval(`this.Dictionary.${(window as any).language}.${key}`);
      return text
    }
    catch (e) {
      console.warn(e);
      return key;
    }
  }

  constructor() { }
}
