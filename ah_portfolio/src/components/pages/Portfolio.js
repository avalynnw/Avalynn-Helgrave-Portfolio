import React from "react";

export default function Portfolio() {
  return (
    <div>
      <h2>My Portfolio</h2>
      <div class="container portfolio_container">
        <div class="row">
          <div class="col-sm hobbyhub">
            <p><a href="https://hobbyhub10.herokuapp.com/" target="blank">HobbyHub</a><a href="https://github.com/svellucci18/HobbyHub" target="blank"><i class="fa-brands fa-1x fa fa-github"></i></a></p>
          </div>
          <div class="col-sm textpop">
            <p><a href="https://textpop.herokuapp.com/" target="blank">TextPop</a><a href="https://github.com/avalynnw/TextPop" target="blank"><i class="fa-brands fa-1x fa fa-github"></i></a></p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm tpg">
            <p><a href="https://avalynnw.github.io/Team-Profile-Generator/" target="blank">Team Profile Generator</a><a href="https://github.com/avalynnw/Team-Profile-Generator" target="blank"><i class="fa-brands fa-1x fa fa-github"></i></a></p>
          </div>
          <div class="col-sm bsapi">
            <p><a href="https://watch.screencastify.com/v/cXkbDomTdIvz9DSIhpYF" target="blank">Basic Social API</a><a href="https://github.com/avalynnw/Basic-Social-API" target="blank"><i class="fa-brands fa-1x fa fa-github"></i></a></p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm sqled">
            <p><a href="https://watch.screencastify.com/v/q5sQFUH5EZwKv4q2JG0w" target="blank">SQL Employee Database</a><a href="https://github.com/avalynnw/SQL-Employee-Database" target="blank"><i class="fa-brands fa-1x fa fa-github"></i></a></p>
          </div>
          <div class="col-sm wds">
            <p><a href="https://avalynnw.github.io/Work-Day-Scheduler-Avalynn-Winsor-/" target="blank">Work Day Scheduler</a><a href="https://github.com/avalynnw/Work-Day-Scheduler-Avalynn-Winsor-" target="blank"><i class="fa-brands fa-1x fa fa-github"></i></a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
