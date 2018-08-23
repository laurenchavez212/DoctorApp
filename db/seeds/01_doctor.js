
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('doctor').del()
    .then(function () {
      // Inserts seed entries
      return knex('doctor').insert([
        {name: 'James Smith', email: 'jamesS@gmail.com', bio: 'Dr. James Smith, MD, is a urologist practicing at UCSF Medical Center in San ... of clinical, translational and basic mechanisms of male reproductive biology.', img_url: 'https://d2t808ag5aqhkh.cloudfront.net/63b631c2-98be-4e74-a2e2-03e8e040601czoom.jpg', password: '123'},
        {name: 'Jass Jones', email: 'jassJ@gmail.com', bio: 'Jass Robert Jones[1] (born 19 June 1953[2]) is an English general practitioner, presenter and writer on medical issues, known for her media appearances, most especially on television. She is known for being part of News of the World (now The Sun on Sunday) magazine team "The A Team" as the health expert.', img_url: 'https://pbs.twimg.com/profile_images/919948956355977218/WYE-k_ic_400x400.jpg', password: '123'},
        {name: 'Meryl Krich', email: 'meryl@gmail.com', bio: 'In 2002, Dr. Katherine M. Detre was named a distinguished professor of epidemiology at the University of Pittsburghs Graduate School of Public Health, in recognition of her many acheivements. A leading expert in epidemiological analysis, she designed and led large-scale health studies undertaken across the country', img_url: 'https://s.sharecare.com/img/profile/8/b/1/8b1b5411-1b54-440a-aee0-25e5d4552caa_200_200_95.JPG', password: '123'},
      ]);
    });
};
