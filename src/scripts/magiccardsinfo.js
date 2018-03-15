import jQuery from "./lib/jquery-3.3.1.min";

import ext from "./utils/ext";

let $ = jQuery;

let cardTitle = $("title").text();

//delete
cardTitle = cardTitle.substring(0,cardTitle.indexOf("("));

let cardmarketButton = "<div class=\"TCGPViewAllPricesDiv\"><a target=\"_blank\" href=\"https://www.cardmarket.com/de/Magic/MainPage/showSearchResult?searchFor="+cardTitle+"\">Search on cardmarket.com</a></div>"

$(".legal").last().append(cardmarketButton);


