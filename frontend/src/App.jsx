import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./pages/FooterPage";

function App() {
	return (
		<Box minH={"100vh"} bg={useColorModeValue("green.100", "green.900")}>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/create' element={<CreatePage />} />
			</Routes>
		{/* Added Footer at the bottom */}
		<Footer />
		</Box>
	);
}

export default App;
