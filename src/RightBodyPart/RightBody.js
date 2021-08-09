import React from "react";
import image from "../images/image1.jpg";
import RightBodyLinks from "./RightBodyLinks";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CreateIcon from "@material-ui/icons/Create";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
const RightBody = () => {
  return (
    <div className="mainRightDiv">
      <div id="rightUpper">
        <h4>Patient Information</h4>
        <div id="rightUpperRight">
          <p>
            Last updated: <b>10:25 AM, today </b>
          </p>
          <b id="dotted">
            <MoreHorizIcon />
          </b>
        </div>
      </div>

      <div className="rightMiddle">
        <div>
          <img className="img3" src={image} alt="person"></img>
        </div>
        <div id="firstInfo">
          <h2 id="sara">Sara Smith </h2>
          <div id="firstBodyInfo">
            <div className="userInfoHeading">
              <div className="heading">
                <small>Phone:</small>
              </div>
              <div className="heading">
                <small>Email:</small>
              </div>
              <div className="heading">
                <small>Gender:</small>
              </div>
              <div className="heading">
                <small>Age:</small>
              </div>
            </div>

            <div className="userInfoValue">
              <div className="value">
                <b>302-857-9685</b>
              </div>
              <div className="value">
                <b>Sarasmith@gmail.com</b>
              </div>
              <div className="value">
                <b>Female</b>
              </div>
              <div className="value">
                <b>45</b>
              </div>
            </div>
          </div>
        </div>
        <div id="otherInfo">
          <div className="userInfoHeading2">
            <div className="heading">
              <small>Surgry Type:</small>
            </div>
            <div className="heading">
              <small>Surgry Date:</small>
            </div>
            <div className="heading">
              <small>Height (cm):</small>
            </div>
            <div className="heading">
              <small>Weight(lb):</small>
            </div>
            <div className="heading">
              <small>BMI:</small>
            </div>
          </div>
          <div className="userInfoValue2">
            <div className="value">
              <b>Rotator Cuff Repair</b>
            </div>
            <div className="value">
              <b>15 Aug 2020</b>
            </div>
            <div className="value">
              <b>163</b>
            </div>
            <div className="value">
              <b>110</b>
            </div>
            <div className="value">
              <b>19</b>
            </div>
          </div>

          <div className="userInfoHeading3">
            <div className="heading">
              <small>Anesthesiologist:</small>
            </div>
            <div className="heading">
              <small>Anesthesiologist Phone:</small>
            </div>
            <div className="heading">
              <small>Anesthesiologist Email:</small>
            </div>
          </div>
          <div className="userInfoValue3">
            <div className="value">
              <b>Dr. Christina Hardway</b>
            </div>
            <div className="value">
              <b>301-896-8745</b>
            </div>
            <div className="value">
              <b>christina@h3a.com</b>
            </div>
          </div>

          <div id="surgeryInfo">
            <div>
              <small id="surgeryText">Surgury Clearence</small>
            </div>
            <div id="notify"></div>
            <div id="yesNotification">Yes</div>
          </div>
        </div>
      </div>

      <div className="RightBodyLinks">
        <RightBodyLinks name={["List of prior", <br />, "Surgeries"]} />
        <RightBodyLinks name={["List of Medical", <br />, " Diagnosis"]} />
        <RightBodyLinks name={["List of", <br />, " Medications"]} />
        <RightBodyLinks name={["Airway", <br />, " Evaluation"]} />
        <RightBodyLinks
          name={["Anesthesis Clearence and", <br />, " Recommendation"]}
        />
      </div>  

      <div id="lowerDiv">
        <div id="aboutSurgery">
          <div class="aboutSurgeryInfo">
            <div className="ques">
              <small><h3>First Time Surgury</h3></small>
            </div>
            <div className="ans">No</div>
          </div>
          <div class="aboutSurgeryInfo">
            <div className="ques">
              Family History of Surgical Complications?
            </div>
            <div className="ans">Yes</div>
          </div>
          <div class="aboutSurgeryInfo">
            <div className="ques">if Yes,please provide more details</div>
            <div className="ans">
              Lorem ipsum dolor sit amet, consectelur adipiscing elit.
              <br />
              Vestibulum placerat ex ut commondo mollis.Proin sapien mauris,
              <br />
              porttitor eget augue vitae, vehicula scelerisque eros.
            </div>
          </div>
        </div>

        <h4 id="previousSurgery"> Previous Surgeries</h4>
        <div id="previousSurgeryHed">
          <small id="hed1">Surgery Type</small>
          <small id="hed2">Date</small>
          <small id="hed3">Anesthesis Type</small>
          <small id="hed4">Surgical Complications</small>
          {/* <div id="divhed5"> */}
          <small id="hed5">
            Anesthetic Complications(nauses,vomiting,difficult intubation)
          </small>
          {/* </div> */}
        </div>
        <div id="previousSurgeryVal">
          <small id="val1">Shoulder reconstruction</small>
          <small id="val2">January 2008</small>
          <small id="val3">General "Breathing Tube"</small>
          <small id="val4">No</small>
          <small id="val5">No</small>
          <div id="icons">
            <DeleteOutlineIcon />
            <CreateIcon id="icon2" />
          </div>
        </div>
        <button id="addSurgeryButton">+ Add Surgery</button>
      </div>
    </div>
  );
};
export default RightBody;