/* eslint-disable react-refresh/only-export-components */
import { getCompoundFactory } from "../react-compound-factory"

function Header({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

function Body({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

function Footer({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

function Modal({ children }: { children: React.ReactNode }) {
  const { header, body, footer } = getCompoundFactory(children, {
    header: Header,
    body: Body,
    footer: Footer,
  })

  return (
    <article>
      <div data-testid="header">{header}</div>
      <div data-testid="body">{body}</div>
      <div data-testid="footer">{footer}</div>
    </article>
  )
}

export default Object.assign(Modal, {
  Header,
  Body,
  Footer,
})
