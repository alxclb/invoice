import React, { useRef } from "react";
import "./App.css";
import { ItemList } from "./components/items/itemList";
import { Navbar } from "./components/navbar/navbar";
import { ListProvider } from "./components/items/ListContext";
import { DocHeader } from "./components/docHeader/header";
import { Footer } from "./components/footer/footer";
import { DocFooter } from "./components/docFooter/docFooter";
import { SettingsProvider } from "./contexts/settingsContext";
import { InvoiceTitle } from "./components/navbar/invoiceTitle";

function App() {
  const componentRef = useRef();

  return (
    <ListProvider>
      <div className="App">
        <InvoiceTitle />
        <Navbar componentRef={componentRef} />
        <div ref={componentRef} className="page">
          <SettingsProvider>
            <DocHeader />
            <ItemList></ItemList>
            <DocFooter />
          </SettingsProvider>
        </div>
        <Footer />
      </div>
    </ListProvider>
  );
}

export default App;
