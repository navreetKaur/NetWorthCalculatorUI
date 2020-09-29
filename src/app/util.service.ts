import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }


  /**
   * Generic sort.
   */
  sort(list: any, key: string, reverse: boolean) {

    list.sort((a: any, b: any) => {

      let v1 = a[key] == null ? '' : a[key];
      let v2 = b[key] == null ? '' : b[key];

      if (isNaN(v1)) {
        v1 = v1.toLowerCase();
        v2 = v2.toLowerCase();
      } else {
        v1 = Number(v1);
        v2 = Number(v2);
      }

      if (v1 > v2) {
        if (reverse)
          return -1;
        return 1;
      } else if (v1 < v2) {
        if (reverse)
          return 1;
        return -1;
      }
      return 0;
    });
  }
}
