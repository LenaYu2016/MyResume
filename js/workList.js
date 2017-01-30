class WorkList{
    constructor(workList=[
        new Work('ZheJiang GuHe Gene InC','Perl Data Analyst','HangZhou,China',
            'February 2013 - July 2014','Extract data from defferent website with Perl,' +
            ',Formatting data with Perl,Analysist the Gene data'),
        new Work('DaLian SiTong software','Java Programmer','HangZhou,China','August 2012 - December2012','Participate in a team ' +
            ',Build web application with Java(SSH) (partly)' +
            ',Communicate project/work status orally, written, or other as required' +
            ',Conduct system design, code implementation, debugging for both front-end and back-end development.')

    ]){
        this.jobs=workList;
    }
    display(){

       let jobhtml='';
       this.jobs.map(job=> {
           let dates=HTMLworkDates.replace('%data%',job.dates);
          let location=HTMLworkLocation.replace('%data%',job.location);
          let description=HTMLworkDescription.replace('%data%',job.description);
         jobhtml+=HTMLworkEmployer.replace('%data%',job.employer) + HTMLworkTitle.replace('%data%',job.title)+dates+location+description;
       } );
        $('#workExperience').append(HTMLworkStart);
        $('.work-entry').append(jobhtml);

    }
}