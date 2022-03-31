new Vue({
    el: "#app",
    data: {
        MOVIES: [],
        CONTACT: {
            first_name: '',
            last_name: '',
            email: '',
            number: '',
            message: '', 
            agree: false,
        },
        makeQuery: '',
        
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
                            const unique = Math. floor(Math. random() * 10000000);
                            const image = movie.show.image.original;
                            movies.push({ id: unique, title, description, image });
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


            
            // console.log(unique);

            const initial_data = [
                {
                    id: Math. floor(Math. random() * 10000000),
                    title: "Batman Returns",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut...",
                    image: "_img/movie_image/Batman.jpg"
                },
                {
                    id: Math. floor(Math. random() * 10000000),
                    title: "Wild Wild West",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut...",
                    image: "_img/movie_image/Wild West.jpg"
                },
                {
                    id: Math. floor(Math. random() * 10000000),
                    title: "The Amazing Spiderman",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut...",
                    image: "_img/movie_image/Spiderman.jpg"
                }
            ];
            this.MOVIES = initial_data;
        },
        closeMovie: function (targetMovie) {
            
            this.MOVIES = this.MOVIES.filter(movie => movie.id != targetMovie.id);
        },
        contactSubmit: function () {
            
            const checkValidation = this.CONTACT;
            
            if (checkValidation.first_name == "") { alert("Please Enter Your First Name"); return; }
            if (checkValidation.last_name == "") { alert("Please Enter Your Last Name"); return; }
            if (checkValidation.email == "") { alert("Please Enter Your Email Address"); return; }
            if (checkValidation.message == "") { alert("Please Enter a Message"); return; }

            
            checkValidation.first_name = "";
            checkValidation.last_name = "";
            checkValidation.email = "";
            checkValidation.number = "";
            checkValidation.message = "";
            checkValidation.agree = false;

            alert("Success");

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