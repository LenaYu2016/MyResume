/*import Contact from 'contact';
import Me from 'me';
import ResumeView from 'resumeView';*/
 class ResumeController{
    constructor(){
      this.me=new Me();
        this.worklist=new WorkList();
        this.education=new Education();
        this.projects=new ProjectList();
        this.footer=new Footer(this.me);
        this.view=new ResumeView();

    }
    init(){
        this.view.init(this.me,this.worklist,this.education,this.projects,this.footer);
    }
}