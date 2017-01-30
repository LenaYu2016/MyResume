class Education{
    constructor(schools=[
        new School('Humber College','Toronto','post-graduate','web development','Graduated September 2016','https://humber.ca'),
        new School('ShangHai Institude of Technology','Shanghai,China','bachelor degree',
            'computer science and technology','Graduated June 2012','http://english.sit.edu.cn')

    ]){
        this.schools=schools;
    }
    display(){
        let schoolHTML='';
            this.schools.map(school=>{
                let html=HTMLschoolName.replace('%data%',school.name)+HTMLschoolDegree.replace('%data%',school.degree)
                    +HTMLschoolDates.replace('%data%',school.dates)+HTMLschoolLocation.replace('%data%',school.location)+
                    HTMLschoolMajor.replace('%data%',school.major)
                schoolHTML+=html;
        });
        $('#education').append(HTMLschoolStart);
        $('.education-entry').append(schoolHTML);
    }
}