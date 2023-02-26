import * as React from 'react'

function useVisionDetail() {
  const data = [
    {
      visionTitle: "왜 devRent인가요?",
      visionAnswer: [
        "흐지부지 식으로 끝나는 모임과 다르다.",
        "우리는 실력을 다른 사람들에게 인정받고 빌려줄 수 있는 개발자가 될 것이다."
      ]
    },
    {
      visionTitle: 
        "devRent에서는 뭘 가르쳐주나요?",
      visionAnswer: [
        "HTML, CSS, JS 기초를 가르쳐줍니다.",
        "Python 기반의 Django를 가르쳐줍니다."
      ]
    },
  ]
  return { data };
}

export default useVisionDetail;