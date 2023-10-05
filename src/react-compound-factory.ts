/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children, isValidElement } from "react"

export const isComponentOf = (
  component: JSX.Element,
  constructor: (...args: any) => React.ReactNode,
) => constructor === component.type

export const getCompoundFactory = <
  T extends Record<string, React.JSXElementConstructor<any>>,
>(
  children: React.ReactNode,
  map: T,
) => {
  const invertMap = new Map<React.JSXElementConstructor<any>, keyof T>()
  Object.entries(map).forEach(([key, value]) => invertMap.set(value, key))

  const factory: Partial<Record<keyof T, React.ReactNode>> = {}
  const childrenArray = Children.toArray(children)

  childrenArray.forEach((element) => {
    if (!isValidElement(element)) {
      return
    }

    const { type } = element
    if (typeof type === "string") {
      return
    }

    const key = invertMap.get(type)
    if (key) {
      factory[key] = element
    }
  })

  return factory
}
