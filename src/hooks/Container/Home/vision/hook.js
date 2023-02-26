import * as React from 'react'

function useVisionDetail() {
  const data = [
    {
      visionTitle: "동아리 비전",
      visionAnswer: [
        "우리의 한계를 인지하고 프로젝트에 더 집중할 수 있는 환경을 구축합니다.",
        "프로젝트를 위한 모임이 아닌, 조금은 부족하더라도 서로를 끝까지 견인하는 모임이 되고자 합니다.",
        "미미하더라도 우리가 깨달은 것을 후배 기수에게 전해주는, 즉 실력의 되물림을 통해 개발씬에서 인정하는 뿌리가 될 것입니다."
      ]
    },
    {
      visionTitle: 
        "동아리 활동",
      visionAnswer: [
        "한 학기동안 프로젝트 수행을 위한 기초적인 클래스(django)를 동기들과 수강합니다.",
        "JS 스터디를 통해 자바스크립트 기본지식을 습득합니다.",
        "미니 프로젝트 + 최종 프로젝트까지 진행하며 혼자가 아니라 동기들, 멘토들과 꾸준함을 나눕니다."
      ]
    },
  ];

  // const qnaLink = "/QnA";

  return { data } // qnaLink };
}

export default useVisionDetail;