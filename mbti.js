var i = 1;

// 문제
var testNum = {
  1: {
    'title-num': 'Q. 1',
    'title': '문제가 생겼을 때, 나는 말과 생각 중 어느것이 더 많아지는가?',
    'type': 'EI',
    'A': '말이 많아진다.',
    'B': '생각이 많아진다.'
  },
  2: {
    'title-num': 'Q. 2',
    'title': '당신이 속한 팀이 문제 상황에 처했을 때 당신은 어느 쪽에 가까운가?',
    'type': 'EI',
    'A': '남들에게 어떻게 해야하는지 물어본다.',
    'B': '이 상황을 어떻게 해결할지 혼자 고민한다.'
  },
  3: {
    'title-num': 'Q. 3',
    'title': '당신은 모임에 참석했을 때, 다음 중 어떤 스타일에 가까운가?',
    'type': 'EI',
    'A': '최대한 많은 사람들과 이야기를 나눠보고 싶다.',
    'B': '소수의 사람들과 깊이있는 대화를 나누고 싶다.'
  },
  4: {
    'title-num': 'Q. 4',
    'title': '다른 사람이 실수를 했을 때 나는 어떻게 생각하는가?',
    'type': 'SN',
    'A': "‘그냥 그런가 보다’하고 생각한다.",
    'B': "‘어떻게 그럴 수 있지?’라고 생각한다."
  },
  5: {
    'title-num': 'Q. 5',
    'title': '처음 겪는 상황에 마주했을 때 당신은 어떻게 하는가?',
    'type': 'SN',
    'A': '다른 사람들은 어떻게 대처했는지 검색한다.',
    'B': '스스로 생각하고 그 생각대로 빠르게 추진한다.'
  },
  6: {
    'title-num': 'Q. 6',
    'title': '당신은 의사결정을 할 때 다음 중 어느것에 가까운가?',
    'type': 'SN',
    'A': '데이터와 실제 경험을 중시한다.',
    'B': '속도와 직관에 더 의존한다.'
  },
  7: {
    'title-num': 'Q. 7',
    'title': '다른 사람의 고민을 들을 때 어떤 생각이 드는가?',
    'type': 'TF',
    'A': '이해가 돼야 공감을 하든 말든하지.',
    'B': '이해가 안 되는데 공감은 간다.'
  },
  8: {
    'title-num': 'Q. 8',
    'title': '친한 친구와 조별 과제를 하는데 자료 조사를 하기로 한 친구가 엉뚱한 범위의 자료를 조사해왔다. 다음 보기 중 당신은 어떻게 할 것인가?',
    'type': 'TF',
    'A': '친구에게 화를 내며 빨리 다시 해오라고 한다.',
    'B': '친구를 잘 타이르며 함께 도와서 자료 조사를 한다.'
  },
  9: {
    'title-num': 'Q. 9',
    'title': '의사 결정을 할 때 당신은 어디에 더 가까운가?',
    'type': 'TF',
    'A': '인과관계를 파악해 객관적으로 판단한다.',
    'B': '주관적인 가치에 근거하여 무엇이 중요한지 판단한다.'
  },
  10: {
    'title-num': 'Q. 10',
    'title': '당신은 여행을 갈 때 어느 쪽에 가까운가?',
    'type': 'JP',
    'A': '미리 계획을 꼼꼼히 짜고 계획대로 움직인다.',
    'B': '즉흥적으로 움직이는 스타일이다.'
  },
  11: {
    'title-num': 'Q. 11',
    'title': '당신은 맛집이라고 소문난 식당에 가기로 했다. 그런데 도착해보니 식당은 2시간 후에 오픈을 한다. 이 때 당신은 어떻게 할 것인가?',
    'type': 'JP',
    'A': '근처 카페에 가서 2시간을 기다렸다가 다시 방문한다.',
    'B': '기다리지 않고 근처에 있는 다른 식당에서 식사를 한다.'
  },
  12: {
    'title-num': 'Q. 12',
    'title': '다음 중 당신의 업무 스타일에 더 가까운 것은 무엇인가?',
    'type': 'JP',
    'A': '업무를 미리 처리하고 여유를 즐긴다.',
    'B': '마지막에 몰아서 업무를 처리한다.'
  }
};

// 결과
var result = {
  'INTJ': {
    'name': '피콜로',
    'explain': '기다리게 했군. 금방 끝내주도록 하지.',
    'img': 'char/intj.gif'
  },
  'INTP': {
    'name': '닥터 게로',
    'explain': '크크큭... 이제 남은 에너지는 얼마 없다. 이대로 그냥 죽어버려!',
    'img': 'char/intp.jpg'
  },
  'ENTJ': {
    'name': '프리저',
    'explain': '제 전투력은 53만입니다! 물론 전력으로 당신을 상대해 드리진 않을테니 걱정 마시길...',
    'img': 'char/entj.gif'
  },
  'ENTP': {
    'name': '셀',
    'explain': '완전체가 되는 건 좋지만 이 예쁜 얼굴까지 변해 버리는건 좀 싫은걸?',
    'img': 'char/entp.gif'
  },
  'INFJ': {
    'name': '트랭크스',
    'explain': '사이어인의 긍지를 얕보지 마라!',
    'img': 'char/infj.jpeg'
  },
  'INFP': {
    'name': '손오반',
    'explain': '난 사실 싸우고 싶지 않아… 죽이기 싫단 말야… 비록 너처럼 지독한 악당 녀석일지라도….',
    'img': 'char/infp.gif'
  },
  'ENFJ': {
    'name': '무천도사',
    'explain': '열심히 일하고, 열심히 공부하고, 열심히 놀고, 열심히 먹고, 푹 쉬는 것. 이것이 바로 거북선인류의 수행방식이야',
    'img': 'char/enfj.gif'
  },
  'ENFP': {
    'name': '손오공',
    'explain': '그 덕에 난 지구에 올 수 있었다. 감사해야겠지, 그리고 말야... 낙오자라도 필사적으로 노력하면 엘리트를 뛰어넘을 수 있을지도 모르지',
    'img': 'char/enfp.gif'
  },
  'ISTJ': {
    'name': '베지터',
    'explain': '나는 사이어인의 왕자 베지터다!',
    'img': 'char/istj.gif'
  },
  'ISFJ': {
    'name': '크리링',
    'explain': '나는 무천도사님의 제자라고, 이 정도의 상대에게 질까 보냐!',
    'img': 'char/isfj.gif'
  },
  'ESTJ': {
    'name': '기뉴',
    'explain': '이 몸이 기뉴다! 대장으로 불리고 있지! 네놈의 힘을 모두 보여봐라!',
    'img': 'char/estj.gif'
  },
  'ESFJ': {
    'name': '비델',
    'explain': '얌전히 있어! 아픈 꼴을 보고 싶지 않으면!',
    'img': 'char/esfj.gif'
  },
  'ISTP': {
    'name': '인조인간 18호',
    'explain': '바ㅡ보! 나랑 17호는 쌍둥이 남매야! 그렇다고 날 넘볼 생각 하지 마! 폭탄 제거한 것도 안 고마워! 이 문어 대가리야!',
    'img': 'char/istp.gif'
  },
  'ISFP': {
    'name': '인조인간 16호',
    'explain': '네가 소란을 피우는 바람에 작은 새들이 도망쳐버렸어...',
    'img': 'char/isfp.gif'
  },
  'ESTP': {
    'name': '미스터 사탄',
    'explain': '나, 미스터 사탄이 너의 악마같은 짓을 그냥 두고 볼 줄 알았느냐?',
    'img': 'char/estp.gif'
  },
  'ESFP': {
    'name': '마인 부우',
    'explain': '너, 내 초콜릿이 되어라!',
    'img': 'char/esfp.gif'
  }
};

// 테스트 시작
function run() {
  document.querySelector('#run').style.display = "none";
  document.querySelector('#test').style.display = "block";
  next();
}

document.querySelector('#run-btn').addEventListener('click', run);
document.querySelector('#A').addEventListener('click', function(){
  var type = document.querySelector('#type').value;
  var preValue = document.querySelector('#'+type).value;
  document.querySelector('#'+type).value = parseInt(preValue)+1
  next();
});

document.querySelector('#B').addEventListener('click', function(){
  next();
});

function next() {
  if (i == 13) {
    document.querySelector('#test').style.display = "none";
    document.querySelector('#result').style.display = "block";
    var mbti = '';
    (document.querySelector('#EI').value < 2) ? mbti += 'I' : mbti += 'E';
    (document.querySelector('#SN').value < 2) ? mbti += 'N' : mbti += 'S';
    (document.querySelector('#TF').value < 2) ? mbti += 'F' : mbti += 'T';
    (document.querySelector('#JP').value < 2) ? mbti += 'P' : mbti += 'J';
    document.querySelector('#img').setAttribute('src', result[mbti]['img']);
    document.querySelector('#name').innerHTML = result[mbti]['name'];
    document.querySelector('#explain').innerHTML = result[mbti]['explain'];
  } else {
    document.querySelector('#title-num').innerHTML = testNum[i]['title-num'];
    document.querySelector('#title').innerHTML = testNum[i]['title'];
    document.querySelector('#type').value = testNum[i]['type'];
    document.querySelector('#A').innerHTML = testNum[i]['A'];
    document.querySelector('#B').innerHTML = testNum[i]['B'];
    i++;
  }
}

// 다시 시작하기
function retry() {
  location.reload();
}
document.querySelector('#retry').addEventListener('click', retry);
document.querySelector('#kakao-share').addEventListener('click', sendLink);
