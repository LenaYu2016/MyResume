/*import Contact from 'contact';
import Me from 'me';
import ResumeView from 'resumeView';*/
 class ResumeController{

    constructor(){
        this.components=[new Me(),new WorkList(),new Education(),new ProjectList(),
            new Footer(new Me())];

        this.view=new ResumeView();

    }
    init(){
        this.view.init(...this.components);
    }
}