
import React, { useState } from "react";




export const RegisterForm =()=>{
      return (
  <>
  <div className="registracniFormular">Registrační formulář</div>
        <div className="registrationForm">
        <form>
            <label>
            Jméno a příjmení:
            <input 
              name="jmenoPrijmeni"
              type="string"
               />
          </label>
          <br />
          <label>
            Kontaktní telefon:
            <input
              name="kontaktniTelefon"
              type="string"
               />
          </label>
          <br/>
          <label>
            e-mail:
            <input
              name="email"
              type="string"
               />
          </label>
          <br/>
          <label>
            Pracovní pozice:
            <input
              name="pracovniPozice"
              type="string"
               />
          </label>
          <br/>
          <label>
            Název firmy:
            <input
              name="nazevFirmy"
              type="string"
               />
          </label>
        </form>
        </div>
        </>
      );
    }
 
  