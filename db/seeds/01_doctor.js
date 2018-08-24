
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('doctor').del()
    .then(function () {
      // Inserts seed entries
      return knex('doctor').insert([
        {name: 'Do Little', email: 'dolittle@gmail.com', bio: 'Shuns human patients in favour of animals, with whom he can speak in their own languages. He later becomes a naturalist, using his abilities to speak with animals to better understand nature and the history of the world', img_url: 'https://s3.amazonaws.com/medianetmv/resources/page/image/dr-dolittle-divulgacao.jpg', password: '123'},
        {name: 'Theodor Seuss', email: 'drseuss@gmail.com', bio: 'Geisel adopted the name "Dr. Seuss" as an undergraduate at Dartmouth College and a graduate student at the University of Oxford. He left Oxford in 1927 to begin his career as an illustrator and cartoonist for Vanity Fair, Life, and various other publications. ', img_url: 'https://www.hudsonbooksellers.com/sites/hudsonbooksellers.com/files/dr-seuss.jpg', password: '123'},
        {name: 'Mikhail Varshavski', email: 'mike@gmail.com', bio: " Doctor Mike was born November 12, 1989. He was born in Russia, where his father was a physician and his mother was a mathematics professor. ... He graduated from the New York Institute of Technology with a bachelor's degree in life sciences and as a Doctor of Osteopathic Medicine via an accelerated 7-year combined track.", img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mikhail_Varshavski.jpg/220px-Mikhail_Varshavski.jpg', password: '123'},
        {name: 'Doctor Dre', email: 'dre@gmail.com', bio: 'Andre Romelle Young, better known by his stage name Dr. Dre, is an American rapper, record producer and entrepreneur. He is the founder and CEO of Aftermath Entertainment and Beats Electronics, and was previously co-owner of Death Row Records', img_url: 'https://vignette.wikia.nocookie.net/randomstuffthatsonhere/images/4/4d/DoctorDre.jpg/revision/latest?cb=20120505030932', password: '123'},
        {name: 'John "J.D." Dorian', email: 'jd@gmail.com', bio: 'Dr. John "J.D." Dorian started as an intern at Sacred Heart Hospital and worked his way up the ranks to become an internist Doctor of Internal Medicine. J.D. has a child, Sam Perry Gilligan Dorian, and is married to Elliot Reid who he has another daughter with. J.D. left Sacred Heart at the end of his eighth year so he could live closer to Sammy and his mother Kim Briggs and be a responsible father figure. He recently decided to be a visiting professor at Winston University.', img_url: 'https://vignette.wikia.nocookie.net/scrubs/images/c/c8/Square_JD.png/revision/latest?cb=20110924074113', password: '123'},
        {name: 'Gregory House', email: 'house@gmail.com', bio: 'Gregory House was born to John and Blythe House on June 11, 1959,[10] or May 15, 1959. One place in which his father was stationed was Egypt, where House developed a fascination with archaeology and treasure-hunting, which led him to keep his treasure-hunting tools well into adulthood. Another station was Japan, where a 14-year-old House discovered his vocation after a rock climbing incident with his friend. He witnessed the respect given to a buraku doctor who solved the case no other doctor could. He also spent some time in the Philippines, where he received dental surgery.', img_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/HouseGregoryHouse.png/250px-HouseGregoryHouse.png', password: '123'},
      ]);
    });
};
