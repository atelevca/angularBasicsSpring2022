import { Pipe, PipeTransform } from '@angular/core';
import {IBook} from "../models/book.model";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: IBook[], filterText: string): IBook[] | [] {
    return list ? list.filter(item => item.title.toLowerCase().includes(filterText.toLowerCase())) : [];
  }

}
