import { useState } from "react";
import "./Card.css";
import {
  FaLayerGroup,
  FaClipboardList,
  FaRegComments,
  FaCalendarAlt,
} from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import axios from "axios";


const Card = ({ data }) => {
  const fileCount = data?.files?.length;
  const id = data?._id;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const openModal = () => {
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };

  const handleFileChange = (event) => {
      const fileList = event.target.files;
      const filesArray = Array.from(fileList);

      setSelectedFiles(filesArray);
  };

  const handleFileSubmit = async () => {
    try {
        const formData = new FormData();
        selectedFiles.forEach(file => {
            formData.append('files', file);
        });

        const response = await axios.patch(`https://seop-age1-job-task-server-side.vercel.app/attachment/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log('Files uploaded and updated:', response.data);

        closeModal();
    } catch (error) {
        console.error('Error uploading files:', error);
    }
};

  return (
    <div className="card">
      <div className="cardTop">
        <div className="client">
          <img className="image" src="https://i.ibb.co/bRHpYFj/akram.jpg" alt="" />
          <h5 className="clientName">Client Name</h5>
        </div>

        <div className="person">
          <img className="image" src="https://i.ibb.co/nj2Dtj2/instructor.jpg" alt="" />
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
          <img className="image" src="https://i.ibb.co/bRHpYFj/akram.jpg" alt="" />
          <img className="image" src="https://i.ibb.co/nj2Dtj2/instructor.jpg" alt="" />
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
        <div onClick={openModal} className="textWithIcon clickable-div">
          <div>
            <ImAttachment />
          </div>
          <div>
            <h5>{fileCount}</h5>
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
      {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Select One or Multiple Files</h2>
                        <input type="file" multiple onChange={handleFileChange} />
                        <button onClick={handleFileSubmit}>Submit</button>
                        <div className="file-list">
                            {selectedFiles.map((file, index) => (
                                <div key={index} className="file-item">
                                    <p>File Name: {file.name}</p>
                                    <p>Extension: {file.name.split('.').pop()}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
    </div>
  );
};

export default Card;