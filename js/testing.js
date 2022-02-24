"use strict";

//Testing

import StoreHouseSingleton from "./StoreHouse.js";
import { Category } from "./Category.js";
import { Movie } from "./Movie.js";
import { Store } from "./Store.js";
import { Coords } from "./Coords.js";
import { Music } from "./Music.js";
import { Books } from "./Books.js";
//import { Product } from "./Product.js";

let SH = StoreHouseSingleton.getInstance('Laura Álvarez-Ugena Gil-Ortega'); //Para instanciarlo, se añade todo aquí
//Creamos Categorías
let CatSFMovie = new Category('Sciencie Fiction Movie', 'Ciencia Ficción');
let CatTMovie = new Category('Terror Movie', 'Películas de Miedo');
let CatCMovie = new Category('Comedy Movie', 'Películas de Comedia');
let CatRMusic = new Category('Rock', 'Variedad de Música Rock (Álbum)');
let CatCMusic = new Category('Classic Music', 'Música Clásica (Álbum)');
let CatPMusic = new Category('Pop Music', 'Música Pop (Álbum)');
let CatMBooks = new Category('Mangas', 'Libros Tipo Mangas');
let CatCBooks = new Category('Comics', 'Libros Tipo Comic');
let CatDBooks = new Category('Default Book', 'Libros por Defecto');


//Creamos Productos
let ProdBook1 = new Books(111, 'El Señor de los Anillos', 'Resumen', '20$', '21%', [], '756-3-16-198710-0', 'J. R. R. Tolkien', 600);
let ProdBook2 = new Books(222, 'Los Pilares de la Tierra', 'Resumen', '22$', '21%', [], '879-3-16-198710-0', 'Ken Follett', 700);
let ProdMusic1 = new Music(333, 'AM', 'Álbum', '10$', '21%', [], 'Artic Monkeys', 'Rock', 8)
let ProdMusic2 = new Music(444, 'La Novena Sinfonía', 'Álbum', '8$', '21%', [], 'Beethoven', 'Classical', 10)
let ProdMusic3 = new Music(555, 'Happier Than Ever', 'Álbum', '12$', '21%', [], 'Billie Eilish', 'Pop', 6)
let ProdManga1 = new Books(666, 'Jujutsu Kaisen', 'Resumen', '8$', '21%', [], '978-3-16-198710-0', 'Gege Akutami', 500)
let ProdManga2 = new Books(777, 'Ataque a los Titanes', 'Resumen', '8$', '21%', [], '178-3-16-148510-0', 'Hajime Isayama', 100)
let ProdManga3 = new Books(888, 'Demon Slayer', 'Resumen', '8$', '21%', [], '378-3-16-116410-0', 'Koyoharu Gotouge', 110)
let ProdComic1 = new Books(999, 'SpiderMan', 'Resumen', '7$', '21%',[], '487-3-16-116410-0', 'Marvel Comics', 120)
let ProdComic2 = new Books(123, 'X-Men', 'Resumen', '6$', '21%', [], '521-3-16-116410-0', 'Marvel Comics', 80)
let ProdTMovie = new Movie(456, 'IT', 'Resumen Terror', '18$', '21%', [], 'Andrés Muschietti', '2017', '2h 15min')
let ProdCMovie = new Movie(789, 'DeadPool', 'Resumen Comedia', '20$', '21%', [], 'Tim Miller', '2016', '1h 48min')
let ProdSFMovie = new Movie(213, 'Star Wars', 'Guerra de las Galaxias', '12$', '21%', [], 'George Lucas', '1980', '2h 50min')
let ProdSF2Movie = new Movie(435, 'Harry Potter y el prisionero de Azkaban', 'Cosas mágicas', '20$', '21%', [], 'Alfonso Cuarón', '2004', '2h 19min');
let ProdSF3Movie = new Movie(678,'Avatar','Resumen Ciencia Ficción','17$','21%',[],'James Cameron','2007','2h 49min');


//Creamos Tiendas (Stores)

let StoreCorteIngles = new Store('200', 'Corte Inglés', 'Gran Vía', '789456123', new Coords(2, 2));
let StoreSerendipia = new Store('300', 'Serendipia', 'Calle Altagracia', '989456123', new Coords(3, 3));
let StoreFnac = new Store('400', 'Fnac', 'Gran Vía', '657456123', new Coords(4, 4));



try {
    SH.addCategory(CatSFMovie);
    SH.addCategory(CatCMovie);
    SH.addCategory(CatMBooks);
} catch (error) {
    console.error(error);
}


SH.addProduct(ProdSF3Movie, CatSFMovie);
console.log(SH.name)

SH.addShop(StoreFnac);
for (const iterator of SH.category) { //Recorre el iterador
    console.log(iterator);

}
try {
    SH.addProductInShop(ProdSF3Movie, StoreFnac, 3);
    SH.addProductInShop(ProdManga1, StoreFnac, 1);
} catch (error) {
    console.error(error);
}
SH.addQuantityProductInShop(ProdSF3Movie, StoreFnac,1);

let prueba = SH.getShopProducts(StoreFnac, Movie);
let prueba2 = SH.getCategoryProducts(CatMBooks, Books);


console.log("Iterador generador");
for (const iterator of prueba) {
    console.log(iterator);
}
console.log("Iterador generador2");
for (const iterator of prueba2) {
    console.log(iterator);
}

for (const iterator of SH.category) {
    console.log(iterator)
}