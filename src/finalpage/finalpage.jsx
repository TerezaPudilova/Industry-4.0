import React from "react";
import { render } from "react-dom";
import {Kontakty} from './kontakty.jsx';

export const FinalPage=()=>{
render (
  <>
    
     <div className="finalPageText1">
        <h1>Vaše celkové skóre v auditu připravenosti na Industry 4.0 je</h1>
        <p>Výslední skóre je vygenerováno na základě odpovědí, které jste zvolili v každém oddílu dotazníku. Níže si můžete prohlédnout graf, který ukazuje vaše silné stránky i potenciál na zlepšení. Závěrečnou zprávu je možné ihned vytisknout, nebo vygenerovat ve formátu pdf a zaslat na vaší emailovou adresu zadanou při registraci. </p>
      </div>
      
      <div className="finalPageText2">
        <h1>Návod na čtení výsledků</h1>
      </div>

      <div className="hodnoceniVysledku">
        <h1>X-Y bodů</h1>
        <p>Top úroveň - vaše firma je velmi dobře připravená na transformaci dle principů Industry 4.0. Ale není dobře spokojit se ze současným stavem - konkurence nikdy nespí.</p>
        <h1>X-Y bodů</h1>
        <p>Střední úroveň - vaše firma je na transformaci dle principů Industry 4.0 připravena v některých oblastech. Inspirujte se doporučeními, snažte se zejména o systematický přístup k celkovému zlepšování. Nezapomínejte na motivaci vašich lidí.</p>
        <h1>X-Y bodů</h1>
        <p> Vaše firma má ještě velký potenciál v systému a procesech, který je potřeba využít pro přípravu na Industry 4.0.  Doporučujeme co nejdříve začít realizovat projekty, které Vám pomůžou nastartovat změny směrem k celkové optimalizaci.</p>
      </div>

      <Kontakty/>

  </>, document.getElementById("app"),

)}



