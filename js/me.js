// welcomeMessage: string
//skills: array of strings
//biopic: string url
//display: function taking no parameters
 class Me{
    constructor(name='Lena Yu',role='Full Stack Developer',contact=new Contact('6477725042',
     '475099436yu@gmail.com','https://github.com/LenaYu2016','null','10 scott drive,Richmond hill'),
                welcomeMessage='hello,this is my resume',
                biopic='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTVvrxh4SfuQzPepTBMDT1EnYigMtNpposmQJSJ7fGcsbPIADYC',
                skills=['PHP(Laravel5)','JavaScipt','HTML5','CSS3','Git','Angular 2','MySQL','Oracle','Java','JSON','TypeScript','ES6'
                    ,'Ajax','Node js','jQuery','C#','Linux']){
        this.name=name;
        this.role=role;
        this.contact=contact;
        this.welcomeMessage=welcomeMessage;
        this.biopic=biopic;
        this.skills=skills;
    }
    display(){
        const name=HTMLheaderName.replace('%data%',this.name);
        const role=HTMLheaderRole.replace('%data%',this.role);
        const bioPic=HTMLbioPic.replace('%data%',this.biopic);
        const welcome=HTMLwelcomeMsg.replace('%data%',this.welcomeMessage);
        const skilllist=HTMLskillsStart;
        let  skills='';
        this.skills.map(skill=>{skills+=HTMLskills.replace('%data%',skill);});

        let contact='';
        console.log(this.contact.twitter);
        for(let prop in this.contact){
            if(this.contact.hasOwnProperty(prop) && this.contact[prop]) {
                let recontact = HTMLcontactGeneric.replace('%contact%', prop);
                contact += recontact.replace('%data%', this.contact[prop]);
            }
        }

        $('#header').prepend(role).prepend(name).append(bioPic).append(welcome).append(skilllist);
        $('#skills').append(skills);
        $('#topContacts').append(contact);
    }
}