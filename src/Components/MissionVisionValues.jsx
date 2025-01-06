import React from "react";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa"; // Icons for mission, vision, and values
import "./MissionVisionValues.css"; // Import CSS for styling

const MissionVisionValues = () => {
  return (
    <section className="mission-vision-values">
      <div className="container">
        {/* Mission Section */}
        <div className="item">
          <FaBullseye className="icon" />
          <h2>Our Mission</h2>
          <p>
            Women's health has often been marginalized, with a long history of inadequate research and negligence.
            At CareCompanion, we recognize this disparity and aim to empower women, ensuring they take charge of their well-being.
            Our mission is to address the unique healthcare challenges women face, offering meaningful and personalized solutions.
          </p>
        </div>

        {/* Vision Section */}
        <div className="item">
          <FaEye className="icon" />
          <h2>Our Vision</h2>
          <p>
            We envision a world where women's healthcare is not an afterthought but a priority. 
            CareCompanion was created to provide a platform that listens, understands, and supports women as they navigate critical health concerns.
            Through expert guidance, community support, and innovative solutions, we empower women to take control of their health with confidence.
          </p>
        </div>

        {/* Values Section */}
        <div className="item">
          <FaHeart className="icon" />
          <h2>Our Values</h2>
          <p>
            Our focus is on six key areas: <strong>Cancer Prevention, Menstrual Health, PCOS, Pregnancy, Postpartum Recovery, and Mental Health.</strong>
            These are more than just medical issues—they are deeply personal experiences that shape women’s lives. 
            We are committed to breaking the stigma surrounding women's health, providing accessible healthcare, and fostering a supportive community.
          </p>
        </div>

        {/* Impact Section */}
        <div className="impact">
          <h3>Our Impact</h3>
          <p>
            Since our launch, CareCompanion has revolutionized access to healthcare, especially for women in rural areas.
            We have built a trusted community and partnered with leading medical professionals to ensure women receive the care they deserve.
            Our efforts have led to a <strong>65% increase</strong> in medical help-seeking behavior in target rural regions, with over <strong>1000+ diagnoses</strong> and
            <strong>1600 completed treatments</strong> successfully provided.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
