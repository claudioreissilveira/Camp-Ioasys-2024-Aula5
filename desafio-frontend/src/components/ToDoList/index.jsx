import React, { useCallback, useState } from "react";
import "./ToDoList.test.jsx";
import "./index.css";

function ToDoList() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskNumber, setTaskNumber] = useState("");
  const [tasks, setTasks] = useState([]);
  const [emptyMessage, setEmptyMessage] = useState(false);
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const handleTaskRegister = useCallback(
    (e) => {
      e.preventDefault();
      if (taskTitle !== "" && taskNumber !== "") {
        setEmptyMessage(false);
        setTasks((old) => [...old, { title: taskTitle, number: taskNumber }]);
        setTaskTitle("");
        setTaskNumber("");
      } else {
        setEmptyMessage(true);
      }
    },
    [taskTitle, taskNumber]
  );

  const handleAdd = useCallback(() => {
    if (taskTitle !== "" && taskNumber !== "") {
      setProducts((oldProducts) => [...oldProducts, taskTitle]);
      setQuantities((oldQuantities) => [...oldQuantities, taskNumber]);
      setTaskTitle("");
      setTaskNumber("");
    }
  }, [taskTitle, taskNumber]);

  const handleDeleteRow = useCallback((index) => {
    setProducts((oldProducts) => oldProducts.filter((_, i) => i !== index));
    setQuantities((oldQuantities) =>
      oldQuantities.filter((_, i) => i !== index)
    );
  }, []);

  return (
    <div className="container">
      <div className="inputs">
        <input
          className="inputsPadd"
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Produto"
        />
        <input
          className="inputsPadd"
          type="number"
          value={taskNumber}
          onChange={(e) => setTaskNumber(e.target.value)}
          placeholder="Qtd"
        />
        <button className="buttonAdd" onClick={handleAdd}>
          ADICIONAR
        </button>
        {emptyMessage && <p>O campo não pode estar vazio!</p>}
      </div>
      <div className="table-container">
        <table>
          {" "}
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product}</td>
                <td>{quantities[index]}</td>
                <td>
                  <button onClick={() => handleDeleteRow(index)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ToDoList;
