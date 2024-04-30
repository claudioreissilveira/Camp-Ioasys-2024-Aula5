import React from "react";
import {
  userEvent,
  render,
  screen,
  fireEvent,
  waitFor,
  getByPlaceholderText,
} from "../../utils/tests";
import ToDoList from "./index";

describe("<ToDoList />", () => {
  it("renderizar inputs e botão do formulário", () => {
    render(<ToDoList />);

    const inputext = screen.getByPlaceholderText("Produto");
    const inputnum = screen.getByPlaceholderText("Qtd");
    const button = screen.getByText("ADICIONAR");

    expect(inputext);
    expect(inputnum);
    expect(button);
  });

  it("renderizar elementos cadastrados ao dar submit no botao com os campos preenchidos", () => {
    render(<ToDoList />);

    const titleInput = screen.getByPlaceholderText("Produto");
    fireEvent.change(titleInput, { target: { value: "Maçã" } });

    const numberInput = screen.getByPlaceholderText("Qtd");
    fireEvent.change(numberInput, { target: { value: "5" } });

    const addButton = screen.getByText("ADICIONAR");
    fireEvent.click(addButton);

    const productCell = screen.getByText("Maçã");
    const quantityCell = screen.getByText("5");

    expect(productCell).toBeInTheDocument();
    expect(quantityCell).toBeInTheDocument();
  });
});

test("exclusao de um item da lista quando o botao 'Excluir' é clicado", () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<ToDoList />);

  const produto = "Produto de Teste";
  const quantidade = "5";
  fireEvent.change(getByPlaceholderText("Produto"), {
    target: { value: produto },
  });
  fireEvent.change(getByPlaceholderText("Qtd"), {
    target: { value: quantidade },
  });
  fireEvent.click(getByText("ADICIONAR"));

  expect(getByText(produto)).toBeInTheDocument();
  expect(getByText(quantidade)).toBeInTheDocument();

  fireEvent.click(getByText("Excluir"));

  expect(queryByText(produto)).toBeNull();
  expect(queryByText(quantidade)).toBeNull();
});

test("deve remover corretamente um item da lista após o clique no botão de exclusão", () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<ToDoList />);

  const produto = "Produto de Teste";
  const quantidade = "5";
  fireEvent.change(getByPlaceholderText("Produto"), {
    target: { value: produto },
  });
  fireEvent.change(getByPlaceholderText("Qtd"), {
    target: { value: quantidade },
  });
  fireEvent.click(getByText("ADICIONAR"));

  expect(getByText(produto)).toBeInTheDocument();
  expect(getByText(quantidade)).toBeInTheDocument();

  fireEvent.click(getByText("Excluir"));

  expect(queryByText(produto)).toBeNull();
  expect(queryByText(quantidade)).toBeNull();
});
