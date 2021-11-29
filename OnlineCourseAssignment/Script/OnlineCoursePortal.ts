var AutoUserId=1001;
var AutoCourseId=501;

class UserDetails{

 UserName:string;
 Age:number;
 PhoneNumber:number;
 UserId:string;


 constructor(UserNameP:string,AgeP:number,PhoneNumberP:number)
 {
     AutoUserId++;
    this.UserId="SE-"+(AutoUserId);
    this.UserName=UserNameP;
    this.Age=AgeP;
    this.PhoneNumber=PhoneNumberP;
 }
}
 class CourseDetails{

    UserId:string;
    CourseName:string;
    CourseId:string;
    CourseDuration:number;

    constructor(CourseNameP:string,CourseIdP:string,CourseDurationP:number)
    {
        AutoCourseId++;
        this.UserId="SE-"+(AutoUserId).toString();
        this.CourseId="C-ID-"+AutoCourseId;
        this.CourseName=CourseNameP;
        this.CourseDuration=CourseDurationP;
    }

 }
var UserDetailsList:Array<UserDetails>=new Array<UserDetails>();
UserDetailsList.push(new UserDetails("Dummy1",50,8878945645));
UserDetailsList.push(new UserDetails("Dummy2",25,8844445645));

var CourseDetailsList:Array<CourseDetails>=new Array<CourseDetails>();
CourseDetailsList.push(new CourseDetails("C#",UserDetailsList[0].UserId,20));
CourseDetailsList.push(new CourseDetails("PYTHON",UserDetailsList[1].UserId,10));
// onclick Fn of NewUserReg Button

function HomePage()
{
    (document.getElementById("Homepage")as HTMLElement).style.display="block";
    (document.getElementById("Enrolled")as HTMLElement).style.display="none";
}
function UserRegPage()
{
    (document.getElementById("Homepage")as HTMLElement).style.display="none";
    (document.getElementById("UserRegPage")as HTMLElement).style.display="block";
 
}
//onclick Fn of Existing user Button
function LoginPage()
{
    (document.getElementById("Homepage")as HTMLElement).style.display="none";
    (document.getElementById("LoginPage")as HTMLElement).style.display="block";

    for ( var i=0;i<UserDetailsList.length;i++)
    {
            document.getElementById("ExistingUsers").innerHTML+=`Username==>${UserDetailsList[i].UserName} || UserID==>${UserDetailsList[i].UserId}<br>`
    }    
}
//onclick Fn of Sign_Up Button
function SignUp()
{
    var tempname=(document.getElementById("Usernameinp") as HTMLInputElement).value;
    var tempage=(document.getElementById("Ageinp") as HTMLInputElement).value;
    var tempphonenumber=(document.getElementById("Phonenumberinp") as HTMLInputElement).value;
    let userobj = new UserDetails(tempname,+tempage,+tempphonenumber);
    let currentuserid=userobj.UserId;
    UserDetailsList.push(userobj);

    (document.getElementById("UserRegPage")as HTMLElement).style.display="none";
    (document.getElementById("Homepage")as HTMLDivElement).style.display="block";
    
    alert(`Registration successful! Your User ID is ${currentuserid}`);
}
//onclick Fn of Login Button
function CourseUI()
{
    let count:Boolean=false;
    if(document.getElementById("Login").onclick)
    {
            var tempuserid=(document.getElementById("UserIdinp") as HTMLInputElement).value;
        for(var i=0;i<UserDetailsList.length;i++)
        {
            if(tempuserid==UserDetailsList[i].UserId)
            {
                count=false;
                (document.getElementById("CoursesAvailable")as HTMLElement).style.display="none";
                (document.getElementById("LoginPage")as HTMLElement).style.display="none";
                (document.getElementById("CourseUI")as HTMLElement).style.display="block";
            }
            else
            {
                 count=true;
            }
        }
        if(count)
        {
            alert("SignUp First then Login! or Check UserID");
           
        }
    }
    
}
//onclick Fn of Course-Selection Button
function CoursesAvailable()
{
    (document.getElementById("CourseUI")as HTMLElement).style.display="none";
    (document.getElementById("CoursesAvailable")as HTMLElement).style.display="block";
}
//onclick Fn of Enrolled-Courses Button
function EnrolledCourses()
{
   
    var tempuserid=(document.getElementById("UserIdinp") as HTMLInputElement).value;
    var totalduration=0;
    (document.getElementById("hist").innerHTML)="Enrolled Courses";
    for(var i=0;i<CourseDetailsList.length;i++)
    {
        if(tempuserid==CourseDetailsList[i].UserId)
        {
            (document.getElementById("CourseUI")as HTMLElement).style.display="none";
            (document.getElementById("Enrolled")as HTMLElement).style.display="block";
            (document.getElementById("hist").innerHTML)+=
            `couseName:${CourseDetailsList[i].CourseName} | Course Duration${CourseDetailsList[i].CourseDuration}<br>`;
            totalduration=CourseDetailsList[i].CourseDuration+totalduration;
            (document.getElementById("totaldur").innerHTML)+=CourseDetailsList[i].CourseDuration+totalduration ;
            
        }
       
    }
    
}

function enrollvalidate()
{
    
        var tempcoursename=(document.getElementById("courseinp")as HTMLInputElement).value;
        var tempcoursedur=(document.getElementById("CourseDuration")as HTMLInputElement).value;
        CourseDetailsList.push(new CourseDetails("C#",UserDetailsList[0].UserId,20));
        (document.getElementById("CoursesAvailable")as HTMLElement).style.display="none";
        (document.getElementById("CourseUI")as HTMLElement).style.display="block";
    
}



