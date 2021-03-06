
import {c, o, cls, Atom, Controller, O, BasicAttributes, Appendable} from 'carbyne';

export class IconController extends Controller {

  name: O<string>

  constructor(name: O<string>) {
    super()
    this.name = name
  }

  onMount() {
    let old_value: string = null
    this.atom.observe(this.name, name => {
      name = `zmdi-${name}`
      if (old_value) this.atom.element.classList.remove(old_value)
      this.atom.element.classList.add(name)
      old_value = name
    })
  }

}

export interface IconAttributes extends BasicAttributes {
  name: O<string>
}

export function Icon(attrs: IconAttributes, content: Appendable) : Atom {

  return c('i.zmdi', {$$: new IconController(attrs.name)})

}
