document.getElementById('daily-btn').addEventListener('click', showDaily);

document.getElementById('weekly-btn').addEventListener('click', showWeekly);

document.getElementById('monthly-btn').addEventListener('click', showMonthly);

async function showDaily(){
   // make a GET request to the external JSON file

   const response = await fetch('data.json')
   .then(function(res){
      return res.json();
   })
   .then(function(data){
      // console.log(data[0].timeframes.daily.current);
      const obj1 = data[0].timeframes.daily,
            obj2 = data[1].timeframes.daily,
            obj3 = data[2].timeframes.daily,
            obj4 = data[3].timeframes.daily,
            obj5 = data[4].timeframes.daily,
            obj6 = data[5].timeframes.daily;

         // work Section
      const workdaily = document.getElementById('workDailyHours');
      const prevWeek = document.getElementById('workPreviousWeek');

      workdaily.innerHTML = `<h1>${obj1.current}hrs</h1>`;

      prevWeek.innerHTML = `<p>Previous Day - ${obj1.previous}hrs</p>`;

      // play section

      const playdaily = document.getElementById('playDailyHours');
      const playprevWeek = document.getElementById('playPreviousWeek');

      playdaily.innerHTML = `<h1>${obj2.current}hrs</h1>`;

      playprevWeek.innerHTML = `<p>Previous Day - ${obj2.previous}hrs</p>`;

      // study section

      const studyDaily = document.getElementById('studyDailyHours');
      const studyPrevWeek = document.getElementById('studyPreviousWeek');

      studyDaily.innerHTML = `<h1>${obj3.current}hrs</h1>`;

      studyPrevWeek.innerHTML = `<p>Previous Day - ${obj3.previous}hrs</p>`;

      // exercise Section
      const exerciseDaily = document.getElementById('exerciseDailyHours');
      const exercisePrevWeek = document.getElementById('exercisePreviousWeek');

      exerciseDaily.innerHTML = `<h1>${obj4.current}hrs</h1>`;

      exercisePrevWeek.innerHTML = `<p>Previous Day - ${obj4.previous}hrs</p>`;

      // social section

      const socialDaily = document.getElementById('socialDailyHours');
      const socialPrevWeek = document.getElementById('socialPreviousWeek');

      socialDaily.innerHTML = `<h1>${obj5.current}hrs</h1>`;

      socialPrevWeek.innerHTML = `<p>Previous Day - ${obj5.previous}hrs</p>`;

      // selfCare section

      const selfDaily = document.getElementById('selfDailyHours');
      const selfPrevWeek = document.getElementById('selfPreviousWeek');

      selfDaily.innerHTML = `<h1>${obj6.current}hrs</h1>`;

      selfPrevWeek.innerHTML = `<p>Previous Day - ${obj6.previous}hrs</p>`;
       
   })
   .catch(function(err){
      console.log(err);
   })
}

async function showWeekly(){
    // make a GET request to the external JSON file

    const response = await fetch('data.json')
    .then(function(res){
       return res.json();
    })
    .then(function(data){
       // console.log(data[0].timeframes.daily.current);
       const obj1 = data[0].timeframes.weekly,
             obj2 = data[1].timeframes.weekly,
             obj3 = data[2].timeframes.weekly,
             obj4 = data[3].timeframes.weekly,
             obj5 = data[4].timeframes.weekly,
             obj6 = data[5].timeframes.weekly;

         
     // work Section
      const workWeekly = document.getElementById('workDailyHours');
      const prevWeek = document.getElementById('workPreviousWeek');

      workWeekly.innerHTML = `<h1>${obj1.current}hrs</h1>`;

      prevWeek.innerHTML = `<p>Last Week - ${obj1.previous}hrs</p>`;

      // play section

      const playdaily = document.getElementById('playDailyHours');
      const playprevWeek = document.getElementById('playPreviousWeek');

      playdaily.innerHTML = `<h1>${obj2.current}hrs</h1>`;

      playprevWeek.innerHTML = `<p>Last Week - ${obj2.previous}hrs</p>`;

      // study section

      const studyDaily = document.getElementById('studyDailyHours');
      const studyPrevWeek = document.getElementById('studyPreviousWeek');

      studyDaily.innerHTML = `<h1>${obj3.current}hrs</h1>`;

      studyPrevWeek.innerHTML = `<p>Last Week - ${obj3.previous}hrs</p>`;

      // exercise Section
      const exerciseDaily = document.getElementById('exerciseDailyHours');
      const exercisePrevWeek = document.getElementById('exercisePreviousWeek');

      exerciseDaily.innerHTML = `<h1>${obj4.current}hrs</h1>`;

      exercisePrevWeek.innerHTML = `<p>Last Week - ${obj4.previous}hrs</p>`;

      // social section

      const socialDaily = document.getElementById('socialDailyHours');
      const socialPrevWeek = document.getElementById('socialPreviousWeek');

      socialDaily.innerHTML = `<h1>${obj5.current}hrs</h1>`;

      socialPrevWeek.innerHTML = `<p>Last Week - ${obj5.previous}hrs</p>`;

      // selfCare section

      const selfDaily = document.getElementById('selfDailyHours');
      const selfPrevWeek = document.getElementById('selfPreviousWeek');

      selfDaily.innerHTML = `<h1>${obj6.current}hrs</h1>`;

      selfPrevWeek.innerHTML = `<p>Last Week - ${obj6.previous}hrs</p>`;

            
       

})
}

async function showMonthly(){
     // make a GET request to the external JSON file

     const response = await fetch('data.json')
     .then(function(res){
        return res.json();
     })
     .then(function(data){
        // console.log(data[0].timeframes.daily.current);
        const obj1 = data[0].timeframes.monthly,
              obj2 = data[1].timeframes.monthly,
              obj3 = data[2].timeframes.monthly,
              obj4 = data[3].timeframes.monthly,
              obj5 = data[4].timeframes.monthly,
              obj6 = data[5].timeframes.monthly;

               // work Section
      const workMonthly = document.getElementById('workDailyHours');
      const prevWeek = document.getElementById('workPreviousWeek');

      workMonthly.innerHTML = `<h1>${obj1.current}hrs</h1>`;

      prevWeek.innerHTML = `<p>Last Month - ${obj1.previous}hrs</p>`;

      // play section

      const playMonthly = document.getElementById('playDailyHours');
      const playprevWeek = document.getElementById('playPreviousWeek');

      playMonthly.innerHTML = `<h1>${obj2.current}hrs</h1>`;

      playprevWeek.innerHTML = `<p>Last Month - ${obj2.previous}hrs</p>`;

      // study section

      const studyDaily = document.getElementById('studyDailyHours');
      const studyPrevWeek = document.getElementById('studyPreviousWeek');

      studyDaily.innerHTML = `<h1>${obj3.current}hrs</h1>`;

      studyPrevWeek.innerHTML = `<p>Last Month - ${obj3.previous}hrs</p>`;

      // exercise Section
      const exerciseDaily = document.getElementById('exerciseDailyHours');
      const exercisePrevWeek = document.getElementById('exercisePreviousWeek');

      exerciseDaily.innerHTML = `<h1>${obj4.current}hrs</h1>`;

      exercisePrevWeek.innerHTML = `<p>Last Month - ${obj4.previous}hrs</p>`;

      // social section

      const socialDaily = document.getElementById('socialDailyHours');
      const socialPrevWeek = document.getElementById('socialPreviousWeek');

      socialDaily.innerHTML = `<h1>${obj5.current}hrs</h1>`;

      socialPrevWeek.innerHTML = `<p>Last Month - ${obj5.previous}hrs</p>`;

      // selfCare section

      const selfDaily = document.getElementById('selfDailyHours');
      const selfPrevWeek = document.getElementById('selfPreviousWeek');

      selfDaily.innerHTML = `<h1>${obj6.current}hrs</h1>`;

      selfPrevWeek.innerHTML = `<p>Last Month - ${obj6.previous}hrs</p>`;
})
}