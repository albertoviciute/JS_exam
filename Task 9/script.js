/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie{
    constructor(title,director,budget){
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive(){
        if(this.budget > 100000000){
            return console.log(true);
        }
        else{
            return console.log(false);
        }
    }
}

const Shrek = new Movie("Shrek","Andrew Adamson, Vicky Jenson", 60000000);
Shrek.wasExpensive();
