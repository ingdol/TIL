export const SERVER_URL = "/api";

// Header - Global Navigation
export const GNB = [{ name: "Diagnosis", to: "/diagnosis" }];

// 접수 승인 및 대기시간
export const TREAT_TIMES = [5, 10, 15, 20, 30, 40, 50, 60];

// 접수 / 진료 취소 사유
export const CANCEL_REASONS = [
  "병원 현장 이슈 (방문 환자 급증 등)",
  "응급 환자 대응",
  "응급 수술 (분만)",
  "진료 분야 아님",
  "기타",
];

// 고객센터
export const INQUIRY_CATEGORIES = [
  { value: "서비스 이용문의", label: "서비스 이용문의" },
  { value: "정산", label: "정산" },
  { value: "사이트 오류", label: "사이트 오류" },
  { value: "개선제안", label: "개선제안" },
  { value: "기타", label: "기타" },
];

// 검색
export const SEARCH_TYPE_FILTER = [
  { value: "medi", label: "의사명" },
  { value: "user", label: "환자명" },
];

export const SEARCH_TYPE_CHARGE = [
  { value: "", label: "전체보기" },
  { value: "before_calculate", label: "정산 전" },
  { value: "after_calculate", label: "정산완료" },
];

// 마이 페이지
export const WEEK = ["일", "월", "화", "수", "목", "금", "토"];

// 진료 과목
export const SPECIALITIES = [
  "내과",
  "피부과",
  "산부인과",
  "가정의학과",
  "이비인후과",
  "비뇨기과",
  "소아청소년과",
  "정형외과/재활의학과",
  "마취통증의학과",
  "안과",
  "성형외과",
  "응급의학과",
  "정신건강의학과",
  "신경외과/신경과",
  "치과",
  "한의원",
];

// 태그
export const TAGS = [
  "코로나치료",
  "감기/몸살",
  "근육통/허리통증",
  "복통/변비",
  "두통",
  "비염",
  "고혈압/당뇨/고지혈증",
  "생리통",
  "여드름/피부염",
  "아토피",
  "비만/다이어트",
  "방광염",
  "탈모",
  "사후피임",
  "정신건강",
  "남성성기능",
  "속쓰림/소화불량",
];

export const SYMPTOM_TAGS = [
  { value: "symptom_all", label: "전체 선택" },
  { value: "corona", label: "코로나 치료" },
  { value: "coldsore", label: "감기/몸살" },
  { value: "muscle", label: "근육통/허리통증" },
  { value: "stomachache", label: "복통/변비" },
  { value: "headache", label: "두통" },
  { value: "rhinitis", label: "비염" },
  { value: "hypertension", label: "고혈압/당뇨/고지혈증" },
  { value: "periodpain", label: "생리통" },
  { value: "pimple", label: "여드름/피부염" },
  { value: "atopy", label: "아토피" },
  { value: "overweight", label: "비만/다이어트" },
  { value: "cystitis", label: "방광염" },
  { value: "hairloss", label: "탈모" },
  { value: "contracept", label: "사후피임" },
  { value: "mental", label: "정신건강" },
  { value: "male", label: "남성성기능" },
  { value: "brash", label: "속쓰림/소화불량" },
];
export const FIRST_AID_TAGS = [
  { value: "first_aid_all", label: "안함" },
  { value: "water", label: "찬물" },
  { value: "ointment", label: "연고" },
  { value: "ice", label: "얼음" },
  { value: "iceWater", label: "얼음물" },
  { value: "band", label: "밴드" },
  { value: "remedy", label: "민간요법" },
  { value: "hospital", label: "인근병원" },
  { value: "other", label: "기타" },
];
// video format
export const VIDEO_FORMAT = [
  "mp4",
  "mov",
  "wmv",
  "avi",
  "avchd",
  "flv",
  "f4v",
  "swf",
  "mkv",
];

export const BODY_CHECK_POSITION = [
  {
    id: "head",
    label: "Head",
    img: {
      front: require("../assets/img/body/front/head.svg").default,
      back: require("../assets/img/body/back/head.svg").default,
    },
    position: {
      front: {
        left: "58px",
      },
      back: {
        left: "58px",
      },
    },
  },
  {
    id: "neck",
    label: "Neck",
    img: {
      front: require("../assets/img/body/front/neck.svg").default,
      back: require("../assets/img/body/back/neck.svg").default,
    },
    position: {
      front: {
        top: "61px",
        left: "69.5px",
      },
      back: {
        top: "61px",
        left: "68.5px",
      },
    },
  },
  {
    id: "ant_trunk",
    label: "Ant trunk",
    img: {
      front: require("../assets/img/body/front/ant trunk.svg").default,
      back: require("../assets/img/body/back/pos trunk.svg").default,
    },
    position: {
      front: {
        top: "81px",
        left: "30.5px",
      },
      back: {
        top: "80.5px",
        left: "31.3px",
      },
    },
  },
  // {
  //   id: "pos_trunk",
  //   label: "Pos trunk",
  //   img: require("../assets/img/body/front/ant trunk.svg").default,
  //   position: {
  //     top: "81px",
  //     left: "30.5px",
  //   },
  // },
  {
    id: "genitalia",
    label: "Genitalia",
    img: {
      front: require("../assets/img/body/front/genitalia.svg").default,
      back: require("../assets/img/body/front/genitalia.svg").default,
    },
    position: {
      front: {
        top: "248px",
        left: "39.2px",
      },
      back: {
        top: "248px",
        left: "39.2px",
      },
    },
  },
  {
    id: "rt_upper_arm",
    label: "Rt upper arm",
    img: {
      front: require("../assets/img/body/front/rt upper arm.svg").default,
      back: require("../assets/img/body/back/rt upper arm.svg").default,
    },
    position: {
      front: {
        top: "98.3px",
        left: "13px",
      },
      back: {
        top: "96.8px",
        right: "14px",
      },
    },
  },
];
