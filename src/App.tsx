import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import MainPage from "./components/MainPage.tsx";

const App = () => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <MainPage/>
        </QueryClientProvider>
    )
}

export default App
