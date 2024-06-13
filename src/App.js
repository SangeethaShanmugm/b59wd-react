import { AddColor } from "./AddColor";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import { MovieList } from "./component/MovieList";
import { Home } from "./component/Home";
import { NotFoundPage } from "./component/NotFoundPage";
import { MovieDetails } from "./component/MovieDetails";
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ExampleContext from "./component/context/ExampleContext";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AddMovie from "./component/AddMovie";
import Ref from "./component/Hooks/Ref";
import Reducer from "./component/Hooks/Reducer";
import TicTacToe from "./component/TicTacToe";

export const INITIAL_MOVIE_LIST = [
  {
    name: "Brigerton",
    poster: "http://image.tmdb.org/t/p/original//luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg",
    rating: 4,
    trailer: "https://www.youtube.com/embed/gpv7ayf_tyE",
    summary: "Bridgerton follows Daphne Bridgerton (Phoebe Dynevor), the eldest daughter of the powerful Bridgerton family as she makes her debut onto Regency London's competitive marriage market. Hoping to follow in her parent's footsteps and find Link match sparked by true love, Daphne's prospects initially seem to be unrivaled.",
    cast: {
      actor: "Nicola Coughlan",
      actress: "Claudia Jessie"
    },
    duration: "60min"
  },
  {
    name: "Lucifer",
    poster: "http://image.tmdb.org/t/p/original//ekZobS8isE6mA53RAiGDG93hBxL.jpg",
    rating: 4.7,
    trailer: "https://www.youtube.com/embed/X4bF_quwNtw",
    summary: "Lucifer Morningstar (Tom Ellis) is the devil. He's tired of Hell and takes Link break in L.A. He's running his nightclub Lux with demon disciple Mazikeen (Lesley-Ann Brandt). His brother Amenadiel (D.B. Woodside) demands that he returns to Hell.",
    cast: {
      actor: "Tom Ellis",
      actress: "Lauren German"
    },
    duration: "100min"
  },
  {
    name: "Journey 2",
    poster: "https://upload.wikimedia.org/wikipedia/en/8/8e/Journey_2_Poster.jpg",
    rating: 5.7,
    trailer: "https://www.youtube.com/watch?v=Q2JMEKIf5VU",
    summary: "Now 17, Sean Anderson (Josh Hutcherson) receives a coded distress signal from an island where none should exist. Knowing that he will not be able to dissuade Sean from tracking the signal to its source, Hank (Dwayne Johnson), Sean's new stepfather, joins the teen on a quest to the South Pacific. Together with helicopter pilot Gabato (Luis Guzmán) and Gabato's feisty daughter, Kailani (Vanessa Hudgens), they set out to find the island and rescue its sole human inhabitant (Michael Caine).",
    cast: {
      actor: "Dwayne Johnson",
      actress: "Vanessa Hudgens"
    },
    duration: "95min"
  },
  {
    name: "Jurassic World",
    poster: "https://picfiles.alphacoders.com/459/459865.jpg",
    rating: 6.1,
    trailer: "https://www.youtube.com/watch?v=vn9mMeWcgoM",
    summary: "Three years after the destruction of the Jurassic World theme park, Owen Grady and Claire Dearing return to the island of Isla Nublar to save the remaining dinosaurs from a volcano that's about to erupt. They soon encounter terrifying new breeds of gigantic dinosaurs, while uncovering a conspiracy that threatens the entire planet.",
    cast: {
      actor: "Chris Pratt",
      actress: "TBryce Dallas Howard"
    },
    duration: "130min"
  },
  {
    name: "Sonic the Hedgehog 2",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIG-G9rwGzGb6aVgZsXbXT5yx554zeno4MwA&s",
    rating: 6.5,
    trailer: "https://www.youtube.com/watch?v=1m-scl4rBgY",
    summary: "After settling in Green Hills, Sonic is eager to prove that he has what it takes to be a true hero. His test comes when Dr. Robotnik returns with a new partner, Knuckles, in search of a mystical emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
    cast: {
      actor: "Ben Schwartz",
      actress: "Tika Sumpter"
    },
    duration: "110min"
  },
  {
    name: "JMadame Web",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Madame_Web_%28film%29_poster.jpg/220px-Madame_Web_%28film%29_poster.jpg",
    rating: 3.9,
    trailer: "https://www.youtube.com/watch?v=D9sPaHgCWkw",
    summary: "Cassandra Webb is a New York City paramedic who starts to show signs of clairvoyance. Forced to confront revelations about her past, she must protect three young women from a mysterious adversary who wants them dead.",
    cast: {
      actor: "Tahar Rahim",
      actress: "Sydney Sweeney"
    },
    duration: "90min"
  },
  {
    name: "Center of the Earth",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/ad/Journey_to_the_Center_of_the_Earth_%28TV_miniseries%29_dvd_cover.jpg",
    rating: 5.8,
    trailer: "https://www.youtube.com/watch?v=GKq7QlNz3CA",
    summary: "What's the Story? In Jules Verne's JOURNEY TO THE CENTER OF THE EARTH, a geology professor, Otto Lidenbrock, and his nephew Axel discover and decode an ancient document that purports to show that a dormant volcano holds a secret entrance to a series of caverns leading to a subterranean world at the earth's center.",
    cast: {
      actor: "Brendan Fraser",
      actress: "Anita Briem"
    },
    duration: "90min"
  },
  {
    name: "Hellboy II",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/0b79c527738b06b0a77d4c968f77c54a7161a29086f65cc82dbd50ea740afee5._SX1080_FMjpg_.jpg",
    rating: 7,
    trailer: "https://www.youtube.com/watch?v=HMWQEi8vvto",
    summary: "Lucifer Morningstar (Tom Ellis) is the devil. He's tired of Hell and takes Link break in L.A. He's running his nightclub Lux with demon disciple Mazikeen (Lesley-Ann Brandt). His brother Amenadiel (D.B. Woodside) demands that he returns to Hell.",
    cast: {
      actor: "Ron Perlman",
      actress: "Selma Blair"
    },
    duration: "120min"
  },
  {
    name: "Arrival",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/df/Arrival%2C_Movie_Poster.jpg",
    rating: 7.9,
    trailer: "https://www.youtube.com/watch?v=tFMo3UJ4B4g",
    summary: "Linguistics professor Louise Banks (Amy Adams) leads an elite team of investigators when gigantic spaceships touch down in 12 locations around the world. As nations teeter on the verge of global war, Banks and her crew must race against time to find a way to communicate with the extraterrestrial visitors. Hoping to unravel the mystery, she takes a chance that could threaten her life and quite possibly all of mankind.",
    cast: {
      actor: "Amy Adams",
      actress: "Jeremy Renner"
    },
    duration: "116min"
  },
  {
    name: "Mad Max: Fury Road",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg",
    rating: 8.1,
    trailer: "https://www.youtube.com/watch?v=hEJnMQG9ev8",
    summary: "Years after the collapse of civilization, the tyrannical Immortan Joe enslaves apocalypse survivors inside the desert fortress the Citadel. When the warrior Imperator Furiosa (Charlize Theron) leads the despot's five wives in a daring escape, she forges an alliance with Max Rockatansky (Tom Hardy), a loner and former captive. Fortified in the massive, armored truck the War Rig, they try to outrun the ruthless warlord and his henchmen in a deadly high-speed chase through the Wasteland.",
    cast: {
      actor: "Tom Hardy",
      actress: "Charlize Theron"
    },
    duration: "120min"
  },
  {
    name: "Joker",
    poster: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg",
    rating: 8.4,
    trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
    summary: "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
    cast: {
      actor: "Joaquin Phoenix",
      actress: "Zazie Beetz"
    },
    duration: "122min"
  },
  {
    name: "Black Panther",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg",
    rating: 7.3,
    trailer: "https://www.youtube.com/watch?v=xjDjIWPwcPU",
    summary: "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.",
    cast: {
      actor: "Chadwick Boseman",
      actress: " Lupita Nyong'o"
    },
    duration: "134min"
  },
  {
    name: "Get Out",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
    rating: 7.7,
    trailer: "https://www.youtube.com/watch?v=sRfnevzM9kQ",
    summary: "Now that Chris and his girlfriend, Rose, have reached the meet-the-parents milestone of dating, she invites him for a weekend getaway upstate with her parents, Missy and Dean. At first, Chris reads the family's overly accommodating behaviour as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries leads him to a truth that he never could have imagined.",
    cast: {
      actor: "Daniel Kaluuya",
      actress: "Allison Williams"
    },
    duration: "104min"
  },
  {
    name: "A Star Is Born",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/39/A_Star_is_Born.png",
    rating: 7.7,
    trailer: "https://www.youtube.com/watch?v=nSbzyEJ8X9E",
    summary: "Seasoned musician Jackson Maine discovers -- and falls in love with -- struggling artist Ally. She has just about given up on her dream to make it big as a singer until Jackson coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jackson fights an ongoing battle with his own internal demons.",
    cast: {
      actor: "Bradley Cooper",
      actress: "Lady Gaga"
    },
    duration: "136min"
  },
  {
    name: "Gravity",
    poster: "https://upload.wikimedia.org/wikipedia/en/f/f6/Gravity_Poster.jpg",
    rating: 7.7,
    trailer: "https://www.youtube.com/watch?v=OiTiKOy59o4",
    summary: "Dr. Ryan Stone (Sandra Bullock) is a medical engineer on her first shuttle mission. Her commander is veteran astronaut Matt Kowalsky (George Clooney), helming his last flight before retirement. Then, during a routine space walk by the pair, disaster strikes: The shuttle is destroyed, leaving Ryan and Matt stranded in deep space with no link to Earth and no hope of rescue. As fear turns to panic, they realize that the only way home may be to venture further into space.",
    cast: {
      actor: "Sandra Bullock",
      actress: "George Clooney"
    },
    duration: "91min"
  },
  {
    name: "The Twilight Saga",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/b6/Twilight_%282008_film%29_poster.jpg",
    rating: 4.9,
    trailer: "https://www.youtube.com/watch?v=PQNLfo-SOR4",
    summary: "The series tells the story—fraught with danger, suspense, and searing passion—of teenager Bella Swan and her vampire boyfriend, Edward Cullen. Twilight introduces Bella as she moves to Washington state and meets Edward, who instantly falls for her even though he is a vampire.",
    cast: {
      actor: "Kristen Stewart",
      actress: "Robert Pattinson"
    },
    duration: "117min"
  },
  {
    name: "The Last Airbender",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Avatar_The_Last_Airbender_%282024_TV_series%29_poster.png/220px-Avatar_The_Last_Airbender_%282024_TV_series%29_poster.png",
    rating: 4.0,
    trailer: "https://www.youtube.com/watch?v=-egQ79OrYCs",
    summary: "The four nations of Air, Water, Earth and Fire lived in harmony until the Fire Nation declared war. A century later, there is still no end in sight to the destruction, then, an Avatar named Aang (Noah Ringer) discovers that he has the power to control the four elements. He joins forces with Katara (Nicola Peltz), a Waterbender, and her brother, Sokka, to restore balance and harmony to their world.",
    cast: {
      actor: "Noah Ringer",
      actress: "Nicola Peltz"
    },
    duration: "103min"
  },
  {
    name: "The Emoji Movie",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/63/The_Emoji_Movie_film_poster.jpg",
    rating: 3.2,
    trailer: "https://www.youtube.com/watch?v=o_nfdzMhmrA",
    summary: "Hidden inside a smartphone, the bustling city of Textopolis is home to all emojis. Each emoji has only one facial expression, except for Gene, an exuberant emoji with multiple expressions. Determined to become like the other emojis, Gene enlists the help of his best friend Hi-5 and a notorious code breaker called Jailbreak. During their travels through the other apps, the three emojis discover a great danger that could threaten their phone's very existence.",
    cast: {
      actor: "T.J. Miller",
      actress: "James Corden"
    },
    duration: "86min"
  },
  {
    name: "Movie 43",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJhfMM_SPSlPWYZb4YX7PC1tG54xdfgJg6Q&s",
    rating: 6.0,
    trailer: "https://www.youtube.com/watch?v=4wxyy8Rcz4k",
    summary: "Jaime Reyes suddenly finds himself in possession of an ancient relic of alien biotechnology called the Scarab. When the Scarab chooses Jaime to be its symbiotic host, he's bestowed with an incredible suit of armor that's capable of extraordinary and unpredictable powers, forever changing his destiny as he becomes the superhero Blue Beetle.",
    cast: {
      actor: "Xolo Maridueña",
      actress: "Bruna Marquezine"
    },
    duration: "127min"
  },
  {
    name: "Knights of the Zodiac",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/d8/Knights_of_the_Zodiac_poster.jpg",
    rating: 4.4,
    trailer: "https://www.youtube.com/watch?v=Q2JMEKIf5VU",
    summary: "When a headstrong street orphan unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess who was sent to watch over humanity.",
    cast: {
      actor: "Mackenyu",
      actress: "Famke Janssen"
    },
    duration: "102min"
  },
  {
    name: "The Avengers",
    poster: "https://media.vogue.fr/photos/5d385448282990000800dc0c/1:1/w_1080,h_1080,c_limit/raw.jpg",
    rating: 4.1,
    trailer: "https://www.youtube.com/watch?v=6ZfuNTqbHE8&pp=ygUQdHJhaWxlciBhdmFuZ2Vycw%3D%3D",
    summary: "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    cast: {
      actor: "Mark Ruffalo, Chris Hemsworth, Robert Downey Jr.",
      actress: "Elizabeth Olsen, Scarlett Johansson"
    },
    duration: "150min",
    genre: "Action, Triller, Fantasy",
    language: "English"
  },
  {
    name: "Shrek",
    poster: "https://images.moviesanywhere.com/5948f139cd669fb5984d2c782e7678be/99cedd1f-ae78-4026-a3e8-b79840b71cbc.jpg",
    rating: 3.9,
    trailer: "https://youtu.be/CwXOrWvPBPk",
    summary: "In a bid to get his land back, Shrek agrees to retrieve Princess Fiona for the fairytale-hating Lord Farquaad of Duloc, but falls in love with her on the way.",
    cast: {
      actor: "Mike Myers as Shrek",
      actress: "Cameron Diaz as Fiona"
    },
    duration: "135min",
    genre: "Animation, Comedy",
    language: "English"
  },
  {
    name: "The Pursuit of Happyness",
    poster: "https://images.moviesanywhere.com/08b5312f6334adf18414ccfb2093960a/80420ae5-16eb-41ce-b0be-a6f2a04b1a16.jpg",
    rating: 4,
    trailer: "https://youtu.be/DMOBlEcRuw8",
    summary: "Chris Gardner takes up an unpaid internship in a brokerage firm after he loses his life's earnings selling a product he invested in. His wife leaves him and he is left with the custody of his son.",
    cast: {
      actor: "Will Smith",
      actress: "Thandiwe Newton"
    },
    duration: "160min",
    genre: "Family, Drama",
    language: "English"
  },
  {
    name: "Lights Out",
    poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12543830_p_v8_ao.jpg",
    rating: 3.2,
    trailer: "https://youtu.be/6LiKKFZyhRU",
    summary: "A young woman realizes that her mother is possessed by a supernatural spirit that hunts only in the dark. However, a spate of murders compels her to confront the spirit and save her family.",
    cast: {
      actor: "Alexander DiPersia",
      actress: "Teresa Palmer"
    },
    duration: "120min",
    genre: "Horror, Triller",
    language: "English"
  },
  {
    name: "Pirates of the Caribbean",
    poster: "https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_FMjpg_UX1000_.jpg",
    rating: 4.1,
    trailer: "https://youtu.be/naQr0uTrH_s",
    summary: "Pirates of the Caribbean is an American fantasy supernatural swashbuckler film series produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the titular media franchise.",
    cast: {
      actor: "Johnny Depp, Orlando Bloom",
      actress: "Keira Knightley"
    },
    duration: "170min",
    genre: "Action, Triller, Fantasy",
    language: "English"
  },
  {
    name: "Forrest Gump",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/2d0c9e38968936e6711c7fb2bc7895b82d8bb9178b5a854e14dffa4b17b88487.jpg",
    rating: 4.4,
    trailer: "https://youtu.be/bLvqoHBptjg",
    summary: "Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny.",
    cast: {
      actor: "Tom Hanks",
      actress: "Robin Wright"
    },
    duration: "155min",
    genre: "Comedy, Drama",
    language: "English"
  },
  {
    name: "How to Train Your Dragon",
    poster: "https://play-lh.googleusercontent.com/1NgUHgo2XvJxeaW71iacayJiA0Xs_yxFZH5N-UN7BkjI36NJmp9mSdtVN84JOjqwfYDsMw",
    rating: 4.1,
    trailer: "https://youtu.be/2AKsAxrhqgM",
    summary: "A Viking breaks all rules and befriends a dragon he is supposed to kill. He decides to call him Toothless and they join forces to put an end to the terror that wreaks havoc in their respective worlds.",
    cast: {
      actor: "Jay Baruchel",
      actress: "America Ferrera"
    },
    duration: "90min",
    genre: "Animation, Action, Fantasy",
    language: "English"
  },
  {
    name: "The Lord of the Rings",
    poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 4.5,
    trailer: "https://youtu.be/V75dMMIW2B4",
    summary: "The Lord of the Rings is a trilogy of epic fantasy adventure films directed by Peter Jackson, based on the novel The Lord of the Rings by British author J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring, The Two Towers, and The Return of the King.",
    cast: {
      actor: "Elijah Wood, Viggo Mortensen",
      actress: "Liv Tyler, Cate Blanchett"
    },
    duration: "188min",
    genre: "Action, Triller, Fantasy",
    language: "English"
  },
  {

    name: "Moana",
    poster: "https://m.media-amazon.com/images/I/71RgCh-pLWL._AC_UF1000,1000_QL80_.jpg",
    rating: 3.8,
    trailer: "https://youtu.be/cPAbx5kgCJo",
    summary: "Moana, daughter of chief Tui, embarks on a journey to return the heart of goddess Te Fitti from Maui, a demigod, after the plants and the fish on her island start dying due to a blight.",
    cast: {
      actor: "Dwayne Johnson",
      actress: "Auli'i Cravalho"
    },
    duration: "90min",
    genre: "Animation",
    language: "English"
  },
  {

    name: "Aavesham",
    poster: "https://m.media-amazon.com/images/M/MV5BYTA0YTgxNWUtYjllOS00MWNhLTk3MTQtYjQ1N2RmNTZjYzI2XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg",
    rating: 4,
    trailer: "https://youtu.be/L0yEMl8PXnw",
    summary: "Three teens come to Bangalore for their engineering education and get involved in a fight. They find a local gangster to help them.",
    cast: {
      actor: "Fahadh Faasil, Mithun Jai Shankar, Midhutty",
      actress: "-"
    },
    duration: "210min",
    genre: "Action, Comedy",
    language: "Malayalam"
  },
  {

    name: "Theeran Adhigaaram Ondru",
    poster: "https://m.media-amazon.com/images/M/MV5BNTAxOTBlZWMtMDdmMi00ZWE2LWI3YTUtNDM4OGM2NDkzMDU5XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    rating: 4.1,
    trailer: "https://youtu.be/uLuGOOFORAs",
    summary: "Theeran, a dedicated police officer, pays the price for his honesty and faces hardships when he tries to investigate the illegal activities conducted by a powerful gangster.",
    cast: {
      actor: "Karthi",
      actress: "Rakul Preet Singh"
    },
    duration: "185min",
    genre: "Action, Triller",
    language: "Tamil"
  },
  {

    name: "Thani Oruvan",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/4e8fce2e8fa91e118901c3feee7b6be2dbc8c2517e8423f204fc1cd244107f63.jpg",
    rating: 4.2,
    trailer: "https://youtu.be/r5Lih8rKd6k",
    summary: "A wealthy and powerful scientist commits many medical malpractices for money. Hence, a dutiful police officer sets out to expose him and bring him to justice.",
    cast: {
      actor: "Jayam Ravi, Arvind Swamy",
      actress: "Nayanthara"
    },
    duration: "160min",
    genre: "Action, Triller",
    language: "Tamil"
  },
  {

    name: "Inception",
    poster: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
    rating: 4.4,
    trailer: "https://youtu.be/YoHD9XEInc0",
    summary: "Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform a nearly impossible task.",
    cast: {
      actor: "Leonardo DiCaprio, Cillian Murphy",
      actress: "Marion Cotillard"
    },
    duration: "190min",
    genre: "Action, Triller, Si-fi",
    language: "English"
  },
  {

    name: "The Wailing",
    poster: "https://m.media-amazon.com/images/M/MV5BODkwMTgxNjA2NF5BMl5BanBnXkFtZTgwMDc0OTcwOTE@._V1_.jpg",
    rating: 3.7,
    trailer: "https://youtu.be/43uAputjI4k",
    summary: "When an outsider visits a village, its inhabitants experience a mysterious epidemic. A police officer then tries to solve the mystery behind the outbreak to save his sick daughter.",
    cast: {
      actor: "Kwak Do-won",
      actress: "Chun Woo-Hee"
    },
    duration: "150min",
    genre: "Horror, Triller",
    language: "Korean"
  },
  {

    name: "Memories of Murder",
    poster: "https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    rating: 4,
    trailer: "https://youtu.be/ux6VHo5jQVw",
    summary: "While South Korea is still under the military's reign, two local, unreliable detectives are joined by an experienced one from Seoul to investigate a series of mysterious murder cases.",
    cast: {
      actor: "Kang ho Song, Hae il Park",
      actress: "Jung In-sun"
    },
    duration: "130min",
    genre: "Action, Triller, Suspense",
    language: "Korean"
  },
  {

    name: "300",
    poster: "https://resizing.flixster.com/98zLtkl_x1_-MkA94IKZe-KCVyQ=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p163191_p_v8_al.jpg",
    rating: 3.8,
    trailer: "https://youtu.be/UrIbxk7idYA",
    summary: "In the ancient battle of Thermopylae, King Leonidas and 300 Spartans fight against Xerxes and his massive Persian army. They face insurmountable odds when they are betrayed by a Spartan reject.",
    cast: {
      actor: "Gerard Butler",
      actress: "Lena Headey"
    },
    duration: "115min",
    genre: "Action",
    language: "English"
  },
  {

    name: "Gladiator",
    poster: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: 4.3,
    trailer: "https://youtu.be/P5ieIbInFpg",
    summary: "Commodus takes over power and demotes Maximus, one of the preferred generals of his father, Emperor Marcus Aurelius. As a result, Maximus is relegated to fighting till death as a gladiator.",
    cast: {
      actor: "Russell Crowe",
      actress: "Connie Nielsen"
    },
    duration: "160min",
    genre: "Action",
    language: "English"
  },
  {

    name: "Bad Boys",
    poster: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/badboys_onesheet_1400x2100_0.jpg?itok=GGzVOfd0",
    rating: 3.4,
    trailer: "https://youtu.be/Xm12NSa8jsM",
    summary: "When their late police captain gets linked to drug cartels, wisecracking Miami cops Mike Lowrey and Marcus Burnett embark on a dangerous mission to clear his name.",
    cast: {
      actor: "Will Smith, Joe Pantoliano",
      actress: "Theresa Randle, Téa Leoni"
    },
    duration: "115min",
    genre: "Comedy, Action",
    language: "English"
  },
  {

    name: "Soodhu Kavvum",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/31/Soodhu_Kavvum.jpg",
    rating: 4.2,
    trailer: "https://youtu.be/aaQuRwnwH54",
    summary: "Das kidnaps Arumai, the son of a politician who has been planning his own kidnapping to extract money from his father. Problems arise when an insane police officer is brought to handle the case.",
    cast: {
      actor: "Vijay Sethupathi, Bobby Simha, Ashok Selvan, Ramesh Thilak, Karunakaran",
      actress: "Sanchita Shetty"
    },
    duration: "140min",
    genre: "Comedy, Action",
    language: "Tamil"
  }


]


export default function App() {
  //Lifting the state up => Lifted from child to parent
  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);

  const [mode, setMode] = useState("light")
  const navigate = useNavigate()
  //1. creating  => createContext ✅
  //2. publisher => provider -context.Provider ✅
  //3. subscriber => useContext => useContext(context)

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppBar position="static" style={{ marginBottom: "20px" }}>
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
            <Button color="inherit" onClick={() => navigate("/movies")}>MovieList</Button>
            <Button color="inherit" onClick={() => navigate("/movies/add")}>AddMovie</Button>
            <Button color="inherit" onClick={() => navigate("/add-color")}>AddColor</Button>
            <Button color="inherit" onClick={() => navigate("/context")}>ExampleContext</Button>
            <Button color="inherit" onClick={() => navigate("/somewhere")}>Somewhere</Button>
            <Button color="inherit" onClick={() => navigate("/ref")}>Ref</Button>
            <Button color="inherit" onClick={() => navigate("/reducer")}>Reducer</Button>
            <Button color="inherit" onClick={() => navigate("/game")}>TicTacToe</Button>


            <Button color="inherit" onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              startIcon={mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}>
              {mode === "light" ? "dark" : "light"} Mode</Button>
          </Toolbar>
        </AppBar>
        {/* <nav>
          <ul>
            Link change page without refresh
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">MovieList</Link></li>
            <li><Link to="/add-color">AddColor</Link></li>
            <li><Link to="/context">ExampleContext</Link></li>
            <li><Link to="/somewhere">Somewhere</Link></li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList movieList={movieList} setMovieList={setMovieList} />} />
          <Route path="/movies/:movieid" element={<MovieDetails movieList={movieList} />} />
          <Route path="/movies/add" element={<AddMovie movieList={movieList} setMovieList={setMovieList} />} />


          <Route path="/add-color" element={<AddColor />} />
          <Route path="/context" element={<ExampleContext />} />
          <Route path="/ref" element={<Ref />} />
          <Route path="/reducer" element={<Reducer />} />
          <Route path="/game" element={<TicTacToe />} />


          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
  //JSX ends
}



