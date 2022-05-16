let elInfoList = $("ul");

kinolar.forEach(function(kino) {
    let newLi = elCreateElement("li", "card col-3 col-sm-3 p-1 my-1 me-1 mt-4 border", "");
    let titleMovie = elCreateElement("p", "", `Name:  ${kino.title}`);
    let movieJanr = elCreateElement("p", "", `Genres:  ${kino.genres}`);
    let movieCast = elCreateElement("p", "", `Cast:  ${kino.cast}`);
    let movieYear = elCreateElement("p", "", `Year:  ${kino.year}`);


    newLi.append(titleMovie, movieJanr, movieCast, movieYear)
    elInfoList.append(newLi)
});