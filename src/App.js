import './App.css';
import Header from './components/Header';
import Autocomplete from './components/Autocomplete';
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient({});
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header/>
        <Autocomplete/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
