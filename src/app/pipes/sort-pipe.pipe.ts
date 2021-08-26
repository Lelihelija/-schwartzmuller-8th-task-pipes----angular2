import { Pipe, PipeTransform } from '@angular/core'
import { Server } from '../app.component'

@Pipe({
  name: 'sortByField',
})
export class SortPipePipe implements PipeTransform {
  transform(value: Server[], sortField: string): Server[] {
    value.sort((a: Server, b: Server) =>
      a[sortField].toLowerCase().localeCompare(b[sortField].toLowerCase()),
    )
    return value
  }
}
