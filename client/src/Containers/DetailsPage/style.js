import {  css } from '@emotion/core';


const style = css`

.tag{
  color: orange;
}
.reply {
  padding: 15px 15px 15px 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  margin-bottom: 10px;
}
.followup::before {
  content: "|";
  margin-right:10px;
  font-size: 200%;
}
.followup {
  padding-left: 15px;
}

.question-subject{
  font-size:200%;
  font-stretch: 150%;
}

`;


export default style
