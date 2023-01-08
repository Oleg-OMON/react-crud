import { CardTitle, Image, CardText } from "../Atoms/Atoms";
import witchDateTimePretty from "../HOCs/DateTimePretty";
import { nanoid } from "nanoid";

export default function Post(props) {
 

  return (
    <>
      <div className="post-header">
        <Image key={nanoid(5)} url={props.avatar} className={"post-image"} />
        <CardText key={nanoid(5)} text={props.author} type={"post"}/>
        <CardTextHOC key={nanoid(5)} text={props.created} type={"post"}/>
      </div>
      <div className="post-content">
        <CardTitle
          key={nanoid(5)}
          title={props.title}
          className={props.className}
        />
      </div>
    </>
  );
}

const CardTextHOC=witchDateTimePretty(CardText)