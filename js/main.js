document.getElementById('formulario').addEventListener('submit',pesquisarFilme);

function pesquisarFilme(e){
    var filmePesquisa = document.getElementById('pesquisar').value;
    buscarFilme(filmePesquisa);
    e.preventDefault();
}
function buscarFilme(filmePesquisa){
    axios.get(https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
            )
    .them(function (response){
        console.log(response);
        var filmes = response.data.Search;
        var mostrarFilmes = '';
        
        for(var i = 0; i < filmes.length; i++){
            mostrarFilmes += `
            <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
            <img src="${filmes[i].Poster}" class="img-thumbnail">
            <h4>${filmes[i].Tittle}</h4>
            <p><a href="#" class="btn btn-primary" role="button" onclick="filmeDetalhes($filmes[i].)">Ver Detalhes</a>></a></p>
            </div>
            </div>
            
            `;
        }
        document.getElementById('filmes').innerHTML = mostrarFilmes;
    })
    .catch(function(error){
        console.log(error);
    });
}

function filmeDetalhes(id){
    console.log(id);
}