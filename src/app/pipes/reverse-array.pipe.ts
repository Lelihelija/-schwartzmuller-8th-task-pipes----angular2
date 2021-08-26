import { Pipe, PipeTransform } from '@angular/core'
import { Server } from '../app.component'
import { ReversePipePipe } from './reverse-pipe.pipe'

@Pipe({
  name: 'reverseArrayName',
})
export class ReverseArrayPipe implements PipeTransform {
  constructor(private reversePipe: ReversePipePipe) {}
  transform(value: Server[], sortField: string): Server[] {
    return value.map((elem: Server) => {
      elem[sortField] = this.reversePipe.transform(elem[sortField])
      return elem
    })
  }
}
