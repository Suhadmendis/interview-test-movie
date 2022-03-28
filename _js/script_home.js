new Vue({
    el: "#app",
    data: {
        MOVIES: [],
        makeQuery: ''
    },
    watch: {
        makeQuery: function (keyword) {
            axios.get("https://api.tvmaze.com/search/shows?q=" + keyword).then((response) => {
                let movies = [];
                
                if (response.data.length > 0) {
                    response.data.map((movie) => {
                        const title = movie.show.name;
                        const description = movie.show.summary;
                        // const image = movie.show.image.original;
                        if (movie.show.image?.original != undefined) {
                            const image = movie.show.image.original;
                            movies.push({ title, description, image });
                        }

                        
                    });  
                    
                    this.MOVIES = [];

                    
                        this.MOVIES = movies;
                    
                    

                }else{
                    
                    alert("No results found");
                    
                    this.initialData();

                }
                

                
                
            });
        }
    },
    mounted: function () {
        this.initialData();
    },
    methods: {
        initialData: function () {
            const initial_data = [
                {
                    title: "Batman Returns",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut...",
                    image: "_img/movie_image/Batman.jpg"
                },
                {
                    title: "Wild Wild West",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut...",
                    image: "_img/movie_image/Wild West.jpg"
                },
                {
                    title: "The Amazing Spiderman",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut...",
                    image: "_img/movie_image/Spiderman.jpg"
                }
            ];
            this.MOVIES = initial_data;
        },
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
      },
});