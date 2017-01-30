class ProjectList{
    constructor(projects=[
        new Project('Rental house','March 2016','Technologies:XML,HTML,CSS,JQuery,PHP, Google map API, Youtube API, Kijiji RSS, Indeed open data' +
            ' Functions: 1.Search for latest jobs and rental houses in different area 2.Locate the address on map 3.Show the route and time. ' +
            'Url:www.rentalhouse.lenaworld.com',null),
        new Project('Movie website','March 2016','Technologies:HTML, CSS, JQuery, PHP, MySql, Git, Bootstrap,Ajax,Json Functions:' +
            ' 1.Login/Logout 2.Admin authentication 3.Booking movie tickets 4.Film shopping cart, food shopping cart' +
            ' 5.Food order management,Food mark and comment 6.Top food and Food recommendation 7.Online payment ' +
            '8.Career section 9.Admin section. Url:php-project.yizhao.me',null),
        new Project('Hotel website','November 2015','Technologies:HTML, CSS, JavaScript. Url:www.airc.hotel.xgnosis.ca',null),
        new Project('Exel Data Search web application','July 2016','Technologies:PHP(Laravel framwork),Jquery,Bootstrap,HTML,CSS,JSON,MySql,AJAX' +
            ' Functions:1.import data from Exel to Database 2. Create a web application for users to search for the different kinds of data(business risks)' +
            '. Url:https://github.com/LenaYu2016/jobtest/tree/master/test',null
        )

    ]){
  this.projects=projects;
    }
    display(){
        let projectsHTML='';
        this.projects.map(project=>{
            let html=HTMLprojectTitle.replace('%data%',project.title)+HTMLprojectDates.replace('%data%',project.dates)+
                HTMLprojectDescription.replace('%data%',project.description);
            projectsHTML+=html;
        });
        $('#projects').append(HTMLprojectStart);
        $('.project-entry').append(projectsHTML);

    }
}