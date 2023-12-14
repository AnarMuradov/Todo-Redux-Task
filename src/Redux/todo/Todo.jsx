import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { add, remove, edit } from "./todoSlice";

export function Counter() {
  const todo = useSelector((state) => state.Todo.value);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(add({ value: input, id: uuidv4() }, setInput("")))
          }
        >
          add
        </button>
        <div>
          {todo.map((x) => (
            <>
              <li onClick={() => dispatch(remove(x.id))} key={uuidv4()}>
                {x.value}
              </li>
              <button
                onClick={() => dispatch(edit({ value: input, id: x.id }))}
              >
                edit
              </button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
