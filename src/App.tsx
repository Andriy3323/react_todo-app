import { Route, Routes } from 'react-router-dom';
import { TodoApp } from './components/TodoApp/TodoApp';

export const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<TodoApp />} />
    <Route path="/completed" element={<TodoApp />} />
    <Route path="/active" element={<TodoApp />} />
  </Routes>
);
