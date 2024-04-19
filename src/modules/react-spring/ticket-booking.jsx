import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import "./style.css";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("idle");
  const [showSpinner, setShowSpinner] = useState(true);
  const spinnerSpring = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
    config: { duration: 1000 },
    reset: true,
    loop: status === "loading",
  });

  const overlaySpring = useSpring({ opacity: status === "loading" ? 1 : 0 });

  // await + async
  const _handleGetAllTodo = async () => {
    try {
      const nm = Math.floor(Math.random() * 100);
      setStatus("loading");

      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_limit=10&_start=${nm}`
      );
  
      const _todos = await resp.json();

      
      setTodos(_todos);
    } catch (e) {
      setStatus("fail");
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const nm = Math.floor(Math.random() * 100);
        setStatus("loading");
        setTimeout(()=>{
          if(!showSpinner){
            setStatus("success");
          }else{
            setStatus('loading')
          }
        },1000)
        const resp = await fetch(
          `https://jsonplaceholder.typicode.com/todos?_limit=10&_start=${nm}`
        );
        setShowSpinner(false)
        setStatus("success");

        const _todos = await resp.json();
        setShowSpinner(false)
        setStatus("success");
        setTodos(_todos);
      } catch (e) {
        setStatus("fail");
      }
    })();
  }, []);

  return (
    <div style={{ position: "relative",width:"100vh",height:"100vh",margin:'auto'}}>
      {status === "loading" && (
        <animated.div style={overlaySpring} className="overlay" />
      )}

      {status === "loading" && (
        <animated.div
          style={{
            position: "absolute",
            zIndex: 99,
            ...spinnerSpring,
          }}
          className="spinner3"
        />
      )}
      <></>
      <ul style={{ listStyle: "none", position: "relative", zIndex: 1 }}>
        {todos.map((t) => (
          <li
            className={`alert ${
              t.completed ? "alert-success" : "alert-danger"
            }`}
            key={t.id}
          >
            {t.title}
          </li>
        ))}
      </ul>
      {status !== "loading" && (
        <button onClick={_handleGetAllTodo} className="btn btn-success">
          Get All Todo
        </button>
      )}
    </div>
  );
}
