

const API_KEY = "bfcbe24d4bcf96f58e3595bfc9f281e0"
export async function getMovies (){
    try{ const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    if(!response.ok){
        throw new Error("faild to load movies");
    }
        const data = await response.json()
        return data.results ;

    }catch(error){
 console.error(error)
 throw error
}

    
}
