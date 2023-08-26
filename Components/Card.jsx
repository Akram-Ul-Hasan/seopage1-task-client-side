import "./Card.css";
import {
  FaLayerGroup,
  FaClipboardList,
  FaRegComments,
  FaCalendarAlt,
} from "react-icons/fa";
import { ImAttachment } from "react-icons/im";

const Card = () => {
  return (
    <div className="card">
      <div className="cardTop">
        <div className="client">
          <img className="image" src="/public/client.jpg" alt="" />
          <h5 className="clientName">Client Name</h5>
        </div>

        <div className="person">
          <img className="image" src="/public/people.jpg" alt="" />
          <h5 className="personName">Sadik Istiak</h5>
        </div>
      </div>

      <div className="cardMiddle">
        <div className="textWithIcon">
          <div>
            <FaLayerGroup />
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </div>

        <div className="textWithIcon task">
          <div>
            <FaClipboardList />
          </div>
          <div>
            <h5>1/2</h5>
          </div>
        </div>
      </div>

      <div className="cardBottom">
        <div className="peopleList">
          <img className="image" src="/public/client.jpg" alt="" />
          <img className="image" src="/public/people.jpg" alt="" />
          <h5 className="peopleListText">12+</h5>
        </div>

        <div className="textWithIcon">
          <div>
            <FaRegComments />
          </div>
          <div>
            <h5>15</h5>
          </div>
        </div>
        <div className="textWithIcon">
          <div>
            <ImAttachment />
          </div>
          <div>
            <h5>25</h5>
          </div>
        </div>

        <div className="textWithIcon">
          <div>
            <FaCalendarAlt />
          </div>
          <div>
            <h5>30-12-2022</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
