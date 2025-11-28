import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IngredientsPage from "./pages/IngredientsPage";
import RecipeCalculatorPage from "./pages/RecipeCalculatorPage";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ingredients" element={<IngredientsPage />} />
                <Route path="/calculator" element={<RecipeCalculatorPage />} />
            </Routes>
        </Router>
    );
}

function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            <div className="text-center space-y-4">
                <div className="text-5xl">👨‍🍳</div>
                <h1 className="text-3xl font-bold">Chef's Kitchen Manager</h1>
                <p className="text-gray-600 text-sm">Professional ingredient management and recipe cost calculator</p>

                <div className="space-y-4 mt-6">
                    <Link to="/ingredients">
                        <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg text-lg shadow">
                            Manage Ingredients
                        </button>
                    </Link>
                    <Link to="/calculator">
                        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg shadow">
                            Calculate Recipe
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
