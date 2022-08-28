import "./App.css";
import { Routes, Route } from "react-router-dom";
import Invoices from "./pages/Invoices";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import DefaultInvoice from "./pages/DefaultInvoice";
import InvoiceInfo from "./pages/InvoiceInfo";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/Notfound";
import CreateInvoice from "./pages/CreateInvoice";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import StoreProvider from "./store/provider"
import ThemeProviderApp from "./theme/provider"

function App() {
  return (

    <StoreProvider>
      <ThemeProviderApp>
        <Routes>
          <Route path="/" element={<Welcome />}>
            <Route path="/login" element={<Login />} />
            <Route
              path="/create"
              element={
                <ProtectedRoute>
                  <CreateInvoice />
                </ProtectedRoute>
              }
            />
            <Route path="/invoices" element={<Invoices />}>
              <Route index element={<DefaultInvoice />} />
              <Route path=":invoiceNumber" element={<InvoiceInfo />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProviderApp>
    </StoreProvider>

  );
}

export default App;
