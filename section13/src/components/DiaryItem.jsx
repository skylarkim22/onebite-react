import "./DiaryItem.css";
import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
const DiaryItem = () => {
  const emotionId = 5;
  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} alt="" />
      </div>
      <div className="info_section">
        <div className="create_date">2002.2.2</div>
        <div className="content">컨텐츠</div>
      </div>
      <div className="button_section">
        <Button text="수정하기" />
      </div>
    </div>
  );
};

export default DiaryItem;
