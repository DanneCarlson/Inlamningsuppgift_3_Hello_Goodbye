
// Tjena Andreas!

/* Jag har en fråga: först deklarerade jag variabeln newMessage utanför funktionen (för att kunna se värdet på den i Consolen). Men det 
är väl bättre att ha den inne i funktionen så att den hålls privat?

En fråga till: Jag antar att jag kunnat lösa det med newHeader med bara en rad kod, hade det varit snyggare/bättre?
*/

// Hämtar in rubrik-elementet via Id
//let newHeader = document.getElementById("header");

// Deklararerar variabel
//let newMessage;

function changeMessage(){
   let newMessage = "Goodbye World";
   let newHeader = document.getElementById("header");
   newHeader.innerHTML=newMessage;
}




