import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import WorkExperiences from "../data/workExperiences";
import WorkExperienceModal from "./WorkExperienceModal";
import IWorkExperience from "../interfaces/workExperiences";

const Experience = (): JSX.Element => {
  const [modalData, setModalData] = useState<IWorkExperience>(null);
  const [detailsModalShow, setDetailsModalShow] = useState<boolean>(false);

  const showDetailsModal = (work: IWorkExperience): void => {
    setModalData(work);
    setDetailsModalShow(true);
  };

  const closeDetailsModal = (): void => {
    setDetailsModalShow(false);
  };

  const sectionName = "Work Experiences";
  const work = WorkExperiences.slice()
    .reverse()
    .map((work, i) => {
      const tech = work.technologies.map((technology, i) => {
        return (
          <Badge className="experience-badge mr-2 mb-2" key={i}>
            {technology.label}
          </Badge>
        );
      });
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--item vertical-timeline-element"
          date={`${work.startDate} - ${work.endDate ?? "Present"}`}
          iconStyle={{
            background: "#AE944F", // circle colour
            color: "#fff", // lines colour
            textAlign: "center",
          }}
          contentStyle={{
            cursor: "pointer",
          }}
          icon={
            <i
              className={`${
                work.endDate ? "fas fa-check" : "fas fa-hourglass-start"
              } experience-icon`}
            ></i>
          }
          key={i}
          onTimelineElementClick={() => showDetailsModal(work)}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ textAlign: "left" }}
          >
            {work.role}
          </h3>
          <h5
            className="vertical-timeline-element-subtitle"
            style={{ textAlign: "left" }}
          >
            {`${work.organisation} - ${work.location}`}
          </h5>
          <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
        </VerticalTimelineElement>
      );
    });

  return (
    <section id="resume" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span className="text-black" style={{ textAlign: "center" }}>
              {sectionName}
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline className="pb-2-important">
          {work}
          <VerticalTimelineElement
            iconStyle={{
              background: "#AE944F", // circle colour
              color: "#fff", // lines colour
              textAlign: "center",
            }}
            icon={
              <i className="fas fa-fist-raised mx-auto experience-icon"></i>
            }
            className="vertical-timeline-element"
          />
        </VerticalTimeline>
        {modalData && (
          <WorkExperienceModal
            show={detailsModalShow}
            onHide={closeDetailsModal}
            data={modalData}
          />
        )}
      </div>
    </section>
  );
};

export default Experience;
