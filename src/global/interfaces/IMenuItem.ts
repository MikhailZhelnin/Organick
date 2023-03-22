export interface ISubmenu {
  id: number
  title: string
  link: string
}

export interface IMenuItem {
  id: number
  title: string
  link: string
  submenu?: ISubmenu[]
}