import * as React from 'react'

function useQnaDetail () {
  
  const content = [
    {
      "question" : "❓ devRent 회비는 얼마인가요?",
      "answer" : "🔑 회비는 12만원의 교육 보증금과 8만원의 활동비로 총 20만원입니다.\n\
    🧾 12만원의 교육 보증금은 올바른 교육을 위해 사용되며, 8만원의 활동비는 장소 대관, 코드 리뷰, 멘토링 등을 위해 사용됩니다.\n\
    📢 회비는 회계 부장이 회계 내역을 통해 정리하여, 매달 초에 공개합니다."
    },
    {
      "question" : "❓ devRent 과정이 어떻게 되나요?",
      "answer" : "📢 1년에 두 번, 3월과 9월에 모집해요.\n- 코딩테스트와 면접을 통해 선별해요.\
      \n🔥 학기 중에는 스터디와 클래스를 통해 개발 실력을 키워요.\n방학 중에는 프로젝트를 협업하여 어엿한 개발자가 되어요.\n\
      🧑‍🎓 신입은 YB로, 1년 중 6개월의 커리큘럼을 수료하면 OB로 분류가 돼요. YB 6개월, OB 6개월을 마쳐야 해당 기수의 수료가 인정돼요.\n\
      - YB : 튜티\n\
      - OB : 튜터 및 운영진"
    },
    {
      "question" : "❓ devRent 스터디? 클래스?",
      "answer" : "답"
    }
  ]
  return content;
}

export default useQnaDetail;