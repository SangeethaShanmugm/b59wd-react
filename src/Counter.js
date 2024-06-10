import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  // console.log("updated Like", like);
  return (
    <div>

      <IconButton
        color="primary"
        aria-label="likeBtn"
        onClick={() => {
          setLike(like + 1);

        }}
      >
        <Badge badgeContent={like} color="primary" >
          👍
        </Badge>
      </IconButton>

      <IconButton
        color="error"
        aria-label="dislikeBtn"
        onClick={() => {
          setDislike(dislike + 1);

        }}
      >
        <Badge badgeContent={dislike} color="error" >
          👎
        </Badge>
      </IconButton>


      {/* <button
        onClick={() => {
          setLike(like + 1);
          // console.log(like);
        }}
      >
        👍 {like}
      </button> */}
      {/* <button
        onClick={() => {
          setDislike(dislike + 1);
          // console.log(dislike);
        }}
      >
        👎 {dislike}
      </button> */}
      {/* <Sample lk={like} /> */}
    </div>
  );
}
