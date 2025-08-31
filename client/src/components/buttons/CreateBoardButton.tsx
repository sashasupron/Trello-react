import { useNavigate } from "react-router-dom";

const CreateBoardButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/board");  
  };


  return (
    <>
      <button onClick={handleClick}> 
        Create
      </button>
    </>
  )
}

export default CreateBoardButton
