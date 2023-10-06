# react-compound-factory

place components where you want.<br />
for design that could not be expressed as a series of children.

## Usage

```jsx
import { getCompoundFactory } from "react-compound-factory"

function Image(/* ... */) {
  return <img />
}

function Name(/* ... */) {
  return <h1>{/* ... */}</h1>
}

function Description(/* ... */) {
  return <p>{/* ... */}</p>
}

function Statistics(/* ... */) {
  return <>{/* ... */}</>
}

function ButtonGroup(/* ... */) {
  return <div className="flex justify-between">{/* ... */}</div>
}

function Card({ children }: { children: React.ReactNode }) {
  const { image, name, description, statistics, buttonGroup } =
    getCompoundFactory(children, {
      image: Image,
      name: Name,
      description: Description,
      statistics: Statistics,
      buttonGroup: ButtonGroup,
    })

  return (
    <section className="card">
      <div className="flex">
        {image}
        <div className="wrapInformation">
          {name}
          {description}
          <div className="flex">{statistics}</div>
        </div>
      </div>
      {buttonGroup}
    </section>
  )
}

export default Object.assign(Card, {
  Image,
  Name,
  Description,
  Statistics,
  ButtonGroup,
})
```
