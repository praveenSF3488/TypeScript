var AutoUserId = 1001;
var AutoCourseId = 501;
var UserDetails = /** @class */ (function () {
    function UserDetails(UserNameP, AgeP, PhoneNumberP) {
        AutoUserId++;
        this.UserId = "SE-" + (AutoUserId);
        this.UserName = UserNameP;
        this.Age = AgeP;
        this.PhoneNumber = PhoneNumberP;
    }
    return UserDetails;
}());
var CourseDetails = /** @class */ (function () {
    function CourseDetails(CourseNameP, CourseIdP, CourseDurationP) {
        AutoCourseId++;
        this.UserId = "SE-" + (AutoUserId).toString();
        this.CourseId = "C-ID-" + AutoCourseId;
        this.CourseName = CourseNameP;
        this.CourseDuration = CourseDurationP;
    }
    return CourseDetails;
}());
var UserDetailsList = new Array();
UserDetailsList.push(new UserDetails("Dummy1", 50, 8878945645));
UserDetailsList.push(new UserDetails("Dummy2", 25, 8844445645));
var CourseDetailsList = new Array();
CourseDetailsList.push(new CourseDetails("C#", UserDetailsList[0].UserId, 20));
CourseDetailsList.push(new CourseDetails("PYTHON", UserDetailsList[1].UserId, 10));
// onclick Fn of NewUserReg Button
function HomePage() {
    document.getElementById("Homepage").style.display = "block";
    document.getElementById("Enrolled").style.display = "none";
}
function UserRegPage() {
    document.getElementById("Homepage").style.display = "none";
    document.getElementById("UserRegPage").style.display = "block";
}
//onclick Fn of Existing user Button
function LoginPage() {
    document.getElementById("Homepage").style.display = "none";
    document.getElementById("LoginPage").style.display = "block";
    for (var i = 0; i < UserDetailsList.length; i++) {
        document.getElementById("ExistingUsers").innerHTML += "Username==>".concat(UserDetailsList[i].UserName, " || UserID==>").concat(UserDetailsList[i].UserId, "<br>");
    }
}
//onclick Fn of Sign_Up Button
function SignUp() {
    var tempname = document.getElementById("Usernameinp").value;
    var tempage = document.getElementById("Ageinp").value;
    var tempphonenumber = document.getElementById("Phonenumberinp").value;
    UserDetailsList.push(new UserDetails(tempname, +tempage, +tempphonenumber));
    document.getElementById("UserRegPage").style.display = "none";
    document.getElementById("Homepage").style.display = "block";
}
//onclick Fn of Login Button
function CourseUI() {
    var count = false;
    if (document.getElementById("Login").onclick) {
        var tempuserid = document.getElementById("UserIdinp").value;
        for (var i = 0; i < UserDetailsList.length; i++) {
            if (tempuserid == UserDetailsList[i].UserId) {
                count = false;
                document.getElementById("CoursesAvailable").style.display = "none";
                document.getElementById("LoginPage").style.display = "none";
                document.getElementById("CourseUI").style.display = "block";
            }
            else {
                count = true;
            }
        }
        if (count) {
            alert("SignUp First then Login! or Check UserID");
        }
    }
    else {
        alert("not working");
    }
}
//onclick Fn of Course-Selection Button
function CoursesAvailable() {
    document.getElementById("CourseUI").style.display = "none";
    document.getElementById("CoursesAvailable").style.display = "block";
}
//onclick Fn of Enrolled-Courses Button
function EnrolledCourses() {
    var tempuserid = document.getElementById("UserIdinp").value;
    var totalduration = 0;
    (document.getElementById("hist").innerHTML) = "Enrolled Courses";
    for (var i = 0; i < CourseDetailsList.length; i++) {
        if (tempuserid == CourseDetailsList[i].UserId) {
            document.getElementById("CourseUI").style.display = "none";
            document.getElementById("Enrolled").style.display = "block";
            (document.getElementById("hist").innerHTML) +=
                "couseName:".concat(CourseDetailsList[i].CourseName, " | Course Duration").concat(CourseDetailsList[i].CourseDuration, "<br>");
            totalduration = CourseDetailsList[i].CourseDuration + totalduration;
            (document.getElementById("totaldur").innerHTML) += CourseDetailsList[i].CourseDuration + totalduration;
        }
    }
}
function enrollvalidate() {
    var tempcoursename = document.getElementById("courseinp").value;
    var tempcoursedur = document.getElementById("CourseDuration").value;
    CourseDetailsList.push(new CourseDetails("C#", UserDetailsList[0].UserId, 20));
    document.getElementById("CoursesAvailable").style.display = "none";
    document.getElementById("CourseUI").style.display = "block";
}

function LoginValidate()
{
    var count = false;
    if (document.getElementById("Login").onclick) {
        var tempuserid = document.getElementById("UserIdinp").value;
        for (var i = 0; i < UserDetailsList.length; i++) {
            if (tempuserid == UserDetailsList[i].UserId) {
                count = false;
                document.getElementById("CoursesAvailable").style.display = "none";
                document.getElementById("LoginPage").style.display = "none";
                document.getElementById("CourseUI").style.display = "block";
            }
            else {
                count = true;
            }
        }
        if (count) {
            alert("SignUp First then Login! or Check UserID");
        }
    }
    else {
        alert("not working");
    } 
}
