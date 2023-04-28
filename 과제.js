window.onload = function () { // 이름을 재설정 하는 함수
  rename_front();
  rename_back();
  rename_ai();
  rename_all();
};

function All() { // All 버튼을 클릭 시 3가지 전체를 보여줌
                // all 버튼 클릭 시 나머지 selected 버튼을 off, all toggle을 ON
  show_ai();
  show_backend();
  show_front();
  const off = document.querySelector(".selected");
  off.classList.toggle("selected");
  const tog_all = document.querySelector("#category__btn__all");
  tog_all.classList.toggle("selected");
}

function Front() { // Front 버튼을 클릭 시 Backend와 AI는 display :none으로 설정, Front만 보임
                  // Frontend 버튼 클릭 시 나머지 selected 버튼을 off, frontend toggle을 ON
  del_backend();
  del_ai();
  show_front();
  const off = document.querySelector(".selected");
  off.classList.toggle("selected");
  const tog_f = document.querySelector("#category__btn__front");
  tog_f.classList.toggle("selected");
}

function Back() {// Backend 버튼을 클릭 시 Front와 AI는 display :none으로 설정, Backend만 보임
                // backend 버튼 클릭 시 나머지 selected 버튼을 off, backend toggle을 ON
  del_backend();
  del_front();
  del_ai();
  show_backend();
  const off = document.querySelector(".selected");
  off.classList.toggle("selected");
  const tog_b = document.querySelector("#category__btn__back");
  tog_b.classList.toggle("selected");
}

function Ai() { // AI 버튼을 클릭 시 Backend와 Front는 display :none으로 설정, AI만 보임
                // ai 버튼 클릭 시 나머지 selected 버튼을 off, ai toggle을 ON
  del_backend();
  del_backend();
  del_front();
  show_ai();
  const off = document.querySelector(".selected");
  off.classList.toggle("selected");
  const tog_a = document.querySelector("#category__btn__ai");
  tog_a.classList.toggle("selected");
}

function del_backend() { // Backend의 display를 none값으로 바꿈
  const backend = document.getElementsByClassName('project__b');
  for (let i = 0; i < backend.length; i++) {
    backend[i].style.display = 'none';
  }
}

function del_ai() { // AI의 display를 none값으로 바꿈
  const ai = document.getElementsByClassName('project__a');
  for (let i = 0; i < ai.length; i++) {
    ai[i].style.display = 'none';
  }
}

function del_front() { // Front의 display를 none값으로 바꿈
  const front = document.getElementsByClassName('project__f');
  for (let i = 0; i < front.length; i++) {
    front[i].style.display = 'none';
  }
}

function show_backend() { // Backend의 display를 flex값으로 바꿈
  const front = document.getElementsByClassName('project__b');
  for (let i = 0; i < front.length; i++) {
    front[i].style.display = 'flex';
  }
}

function show_ai() { // AI의 display를 flex값으로 바꿈
  const ai = document.getElementsByClassName('project__a');
  for (let i = 0; i < ai.length; i++) {
    ai[i].style.display = 'flex';
  }
}

function show_front() { // Front의 display를 flex값으로 바꿈
  const backend = document.getElementsByClassName('project__f');
  for (let i = 0; i < backend.length; i++) {
    backend[i].style.display = 'flex';
  }

}

function count_num_front() { // Front의 갯수를 셈
  const cfront = document.getElementsByClassName('project__f').length;
  return cfront;
}

function count_num_back() { // Backend의 갯수를 셈
  const cback = document.getElementsByClassName('project__b').length;
  return cback;
}

function count_num_ai() { // AI의 갯수를 셈
  const cai = document.getElementsByClassName('project__a').length;
  return cai;
}

function count_num_all() { // All의 갯수를 셈
  let res1 = count_num_front();
  let res2 = count_num_back();
  let res3 = count_num_ai();
  res = res1 + res2 + res3;
  return res;
}

function rename_front() { //count_num_front() 함수를 적용
  const refront = document.getElementById('category__count__f');
  refront.innerText = count_num_front();
}

function rename_back() { //back_num_front() 함수를 적용
  const reback = document.getElementById('category__count__b');
  reback.innerText = count_num_back();
}

function rename_ai() { //ai_num_front() 함수를 적용
  const reai = document.getElementById('category__count__a');
  reai.innerText = count_num_ai();
}

function rename_all() { // all_num_front() 함수를 적용
  const reall = document.getElementById('category__count');
  reall.innerText = count_num_all();
}

let tog = document.querySelector('#category__btn__all')
const clicked = "clicked"

function handleClick() {
  tog.classList.toggle(clicked);
}