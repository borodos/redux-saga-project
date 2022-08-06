import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { incrementAction } from "./store/countReducer";

function App() {
	const count = useSelector((store) => store.countReducer.count);
	const users = useSelector((store) => store.userReducer.users);
	const dispatch = useDispatch();

	return (
		<div className="App">
			<div className="count">{count}</div>
			<div className="container">
				<button className="btn" onClick={() => dispatch(incrementAction())}>
					ИНКРЕМЕНТ++
				</button>
				<button className="btn">ДЕКРЕМЕНТ--</button>
				<button className="btn">ПОЛУЧИТЬ ЮЗЕРОВ</button>
			</div>
		</div>
	);
}

export default App;
