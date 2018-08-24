
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('doctor').del()
    .then(function () {
      // Inserts seed entries
      return knex('doctor').insert([
        {name: 'Do Little', email: 'dolittle@gmail.com', bio: 'Shuns human patients in favour of animals, with whom he can speak in their own languages. He later becomes a naturalist, using his abilities to speak with animals to better understand nature and the history of the world', img_url: 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/g97xTt18p0WWnj6wxLGC0vBKFwQ.jpg', password: '123'},
        {name: 'Theodor Seuss', email: 'drseuss@gmail.com', bio: 'Geisel adopted the name "Dr. Seuss" as an undergraduate at Dartmouth College and a graduate student at the University of Oxford. He left Oxford in 1927 to begin his career as an illustrator and cartoonist for Vanity Fair, Life, and various other publications. ', img_url: 'https://www.hudsonbooksellers.com/sites/hudsonbooksellers.com/files/dr-seuss.jpg', password: '123'},
        {name: 'Mikhail Varshavski', email: 'mike@gmail.com', bio: " Doctor Mike was born November 12, 1989. He was born in Russia, where his father was a physician and his mother was a mathematics professor. ... He graduated from the New York Institute of Technology with a bachelor's degree in life sciences and as a Doctor of Osteopathic Medicine via an accelerated 7-year combined track.", img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mikhail_Varshavski.jpg/220px-Mikhail_Varshavski.jpg', password: '123'},
        {name: 'James Smith', email: 'jamesS@gmail.com', bio: 'Dr. James Smith, MD, is a urologist practicing at UCSF Medical Center in San ... of clinical, translational and basic mechanisms of male reproductive biology.', img_url: 'https://d2t808ag5aqhkh.cloudfront.net/63b631c2-98be-4e74-a2e2-03e8e040601czoom.jpg', password: '123'},
        {name: 'Jass Jones', email: 'jassJ@gmail.com', bio: 'Jass Robert Jones[1] (born 19 June 1953[2]) is an English general practitioner, presenter and writer on medical issues, known for her media appearances, most especially on television. She is known for being part of News of the World (now The Sun on Sunday) magazine team "The A Team" as the health expert.', img_url: 'https://pbs.twimg.com/profile_images/919948956355977218/WYE-k_ic_400x400.jpg', password: '123'},
        {name: 'Meryl Krich', email: 'meryl@gmail.com', bio: 'In 2002, Dr. Katherine M. Detre was named a distinguished professor of epidemiology at the University of Pittsburghs Graduate School of Public Health, in recognition of her many acheivements. A leading expert in epidemiological analysis, she designed and led large-scale health studies undertaken across the country', img_url: 'https://s.sharecare.com/img/profile/8/b/1/8b1b5411-1b54-440a-aee0-25e5d4552caa_200_200_95.JPG', password: '123'},
      ]);
    });
};
