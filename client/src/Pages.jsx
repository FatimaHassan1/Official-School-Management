import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import AddUser from "./requestForms/AddUser";
import AllUsers from "./requestForms/AllUsers";
import EditUser from "./requestForms/EditUser";
import Schedule from "./Schedule";
import PresentForms from "./PresentForms";
import LeaveForms from "./LeaveForms";
import SinglePDF from "./requestForms/SinglePDF";
import Students from "./students/Students";
import AddNewStudent from "./students/AddNewStudent";
import EditStudents from "./students/EditStudents";
import AllStationary from "./Stationary/AllStationary";
import AddStationary from "./Stationary/AddStationary";
import Purchase from "./purchase/Purchase";
import AddPurchase from "./purchase/AddPurchase";
import WebsiteMenu from "./WebsiteMenu/WebsiteMenu";
import ExternalLinks from "./ExternalLinks/ExternalLinks";
import Testimonial from "./Testimonial/Testimonial";
import AddTestimonial from "./Testimonial/AddTestimonial";
import WebsiteInformation from "./WebsiteInformation/WebsiteInformation";
import AllPage from "./Page/AllPage";
import addPage from "./Page/addPage";
import MyWebsite from "./MyWebsite/MyWebsite";
import AddMyWebsite from "./MyWebsite/AddMyWebsite";
import Subject from "./Subject/Subjects";
import Levels from "./Levels/Levels";
import Classrooms from "./Classrooms/Classrooms";
import StudentRedirect from "./StudentRedirect/StudentRedirect";
import TeacherREdirect from "./TeacherRedirect/TeacherRedirect";
import ExecutiveREdirect from "./ExecutiveRedirect";
import adminRedirect from "./adminRedirect";
import FinanceREdirect from "./FinanceRedirect";
import TestApiComponent from "./TestApiComponent";
import Login from "./Login";
import Group from "./Group/Group";
import LeaveType from "./Leave Type/LeaveType";
import Payroll from "./Payroll/Payroll";

function Pages() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/group" component={Group} />
        <Route exact path="/leavetype" component={LeaveType} />
        <Route exact path="/payroll" component={Payroll} />
        <Route exact path="/testapicomponent" component={TestApiComponent} />
        <Route exact path="/executivedashbaord" component={ExecutiveREdirect} />
        <Route exact path="/admin" component={adminRedirect} />
        <Route exact path="/financedashbaord" component={FinanceREdirect} />
        <Route exact path="/studentdashbaord" component={StudentRedirect} />
        <Route exact path="/teacherdashboard" component={TeacherREdirect} />
        <Route exact path="/calendar" component={Schedule} />
        <Route exact path="/presentforms" component={PresentForms} />
        <Route exact path="/leaveforms" component={LeaveForms} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/edit/:reqid" component={EditUser} />
        <Route exact path="/pdf/:id" component={SinglePDF} />
        <Route exact path="/students" component={Students} />
        <Route exact path="/addstudents" component={AddNewStudent} />
        <Route exact path="/editstudents/:sid" component={EditStudents} />
        <Route exact path="/allstationary" component={AllStationary} />
        <Route exact path="/addstationary" component={AddStationary} />
        <Route exact path="/purchase" component={Purchase} />
        <Route exact path="/addpurchase" component={AddPurchase} />
        <Route exact path="/websitemenu" component={WebsiteMenu} />
        <Route exact path="/externalLinks" component={ExternalLinks} />
        <Route exact path="/testimonial" component={Testimonial} />
        <Route exact path="/addtestimonial" component={AddTestimonial} />
        <Route
          exact
          path="/websiteinformation"
          component={WebsiteInformation}
        />
        <Route exact path="/allpage" component={AllPage} />
        <Route exact path="/addpage" component={addPage} />
        <Route exact path="/mywebsite" component={MyWebsite} />
        <Route exact path="/addmyWebsite" component={AddMyWebsite} />
        <Route exact path="/subject" component={Subject} />
        <Route exact path="/levels" component={Levels} />
        <Route exact path="/classrooms" component={Classrooms} />
      </Switch>
    </>
  );
}
export default Pages;
