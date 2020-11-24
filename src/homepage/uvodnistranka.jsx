import React from 'react';
import './menu.jsx';


export const UvodniStranka=()=>{
  
return( 
  <>
    <div className="homepagetitle">
    <button className="title">Audit připravenosti firmy na implmentaci principů Industry 4.0</button>

    <div className="titleText">
       Náš on-line dotazník vám umožní posoudit připravenost vaší společnosti na implementaci principů Industry 4.0.
        Na základě jeho výsledků budete moci definovat svoje silné stránky i konkrétní potenciály na zlepšení. 
    </div>
    <button className="nezzacnete">Než začnete...</button>
  </div>

  <div className="industryText">
  <strong>Průmysl 4.0 </strong>(čtvrtá průmyslová revoluce) je označení pro současný trend digitalizace, s ní související automatizace výroby a změny na trhu práce. Filosofie Industry 4.0 nabízí možnosti na vytvoření  skutečně štíhlé firmy. Umožňuje jednodušší a obsáhlejší pochopení požadavků a potřeb zákazníků (big data) a okamžité sdílení potřebných informací přes komplexní řeťězce dodávek a sítí. Smart firmy produkují víc, s menším plýtváním - a stávají se tak <strong>víc konkurence schopné i na globálních trzích</strong>.
  </div>

  <div className="dotaznik">
    <div className="dotaznikText">
      <br/>Dotazník je rozdělen na 7 průřezových oblastí charakterizujících fungování firmy. Každá oblast obsahuje 7 otázek s alternativami odpovědí. <br/>
      <br/>Výstupem z hodnocení je Závěrečná zpráva, která graficky znázorní úroveň vaší společnosti  v definovaných oblastech. V závěru uvádí tipy na zlepšení.<br/>
    </div>
    <div className="graf">
      <img src="img/graf.jpg" alt="graf"/>
    </div>
  </div>

  <div className="nezZacnete">
    <p className="nezZacneteButton">Než začnete</p>

    <div className="prvniRadek">
      <div>Na začátku vás čeká jednoduchá registrace</div>
      <div>Samohodnocení vám zabere cca 30-60 minut</div>
      <div>Budete vyplňovat 7 oddílů po 7 otázkách</div>
   </div>
   <div className="druhyRadek">
      <div>Pro obdržení Závěrečné zprávy je nutné odpověděť na všechny otázky</div>
      <div>K již zodpovězeným otázkám je možné se vrátit a případně upravit hodnocení</div>
      <div>Dotazník je nutné vyplnit najednou, průběžné výsledky se neukládají</div>
    </div>

   </div>
   </>
);
  }

