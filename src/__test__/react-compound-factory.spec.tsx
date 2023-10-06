import { render, screen } from "@testing-library/react"
import Modal from "./Mock"

describe("react-compound-factory", () => {
  describe("하위 컴포넌트가 부분적으로 주어졌을때", () => {
    test("해당 위치에 렌더링 됨", () => {
      render(
        <Modal>
          <Modal.Header>header</Modal.Header>
        </Modal>,
      )

      expect(screen.getByTestId("header").textContent).toBe("header")
    })
  })

  describe("하위 컴포넌트가 모두 주어졌을때", () => {
    test("각자 위치에 모두 렌더링 됨", () => {
      render(
        <Modal>
          <Modal.Footer>footer</Modal.Footer>
          <Modal.Body>body</Modal.Body>
          <Modal.Header>header</Modal.Header>
        </Modal>,
      )

      expect(screen.getByTestId("header").textContent).toBe("header")
      expect(screen.getByTestId("body").textContent).toBe("body")
      expect(screen.getByTestId("footer").textContent).toBe("footer")
    })
  })
})
