import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearToken } from "../store/slice/authSlice";

function Header() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(clearToken());
        window.location = '/login'
    }

    return (
        <header className="bg-indigo-600 text-white py-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">WATCH ME NANANAE</Link>
                <button
                    className="text-indigo-200 hover:text-white hover:bg-indigo-700 px-4 py-2 rounded-full"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </header>
    )
}
export default Header