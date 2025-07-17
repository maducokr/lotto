// 전역 오류 핸들러 추가
window.addEventListener('error', function(e) {
  console.error('JavaScript 오류:', e.error);
  alert('오류가 발생했습니다: ' + e.message);
});

// 페이지 로드 완료 확인
// (이 코드는 script.js가 정상적으로 로드되는지 확인용입니다)
document.addEventListener('DOMContentLoaded', function() {
  console.log('페이지 로드 완료');
  console.log('결과 div 존재:', !!document.getElementById('results'));
  console.log('버튼 존재:', !!document.querySelector('.generate-button'));
});

function getRandomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateFinalNumbers() {
  try {
    const totalNumbers = Array.from({ length: 45 }, (_, i) => i + 1);
    let sets = [];

    // 1세트: 그룹별 선택 + 나머지 2개
    const group1 = [1, 2, 8, 9];
    const group2 = [6, 7, 13, 14];
    const group3 = [29, 30, 36, 37];
    const group4 = [34, 35, 41, 42];
    
    let selected1 = [];
    selected1.push(getRandomFromArray(group1));
    selected1.push(getRandomFromArray(group2));
    selected1.push(getRandomFromArray(group3));
    selected1.push(getRandomFromArray(group4));

    let used = new Set([...group1, ...group2, ...group3, ...group4]);
    let restNumbers = totalNumbers.filter(num => !used.has(num));
    let remainingPool = restNumbers.filter(n => !selected1.includes(n));

    while (selected1.length < 6) {
      let rand = getRandomFromArray(remainingPool);
      if (!selected1.includes(rand)) {
        selected1.push(rand);
      }
    }
    selected1.sort((a, b) => a - b);
    sets.push(selected1);

    // 2세트: 그룹별 선택 + 나머지 2개
    let selected2 = [];
    selected2.push(getRandomFromArray(group1));
    selected2.push(getRandomFromArray(group2));
    selected2.push(getRandomFromArray(group3));
    selected2.push(getRandomFromArray(group4));

    let remainingPool2 = restNumbers.filter(n => !selected2.includes(n));

    while (selected2.length < 6) {
      let rand = getRandomFromArray(remainingPool2);
      if (!selected2.includes(rand)) {
        selected2.push(rand);
      }
    }
    selected2.sort((a, b) => a - b);
    sets.push(selected2);

    // 3세트: 1-29 범위에서 6개 번호
    let set3 = [];
    const range1to29 = Array.from({ length: 29 }, (_, i) => i + 1);
    while (set3.length < 6) {
      let rand = getRandomFromArray(range1to29);
      if (!set3.includes(rand)) {
        set3.push(rand);
      }
    }
    set3.sort((a, b) => a - b);
    sets.push(set3);

    // 4세트: 20-45 범위에서 6개 번호
    let set4 = [];
    const range20to45 = Array.from({ length: 26 }, (_, i) => i + 20);
    while (set4.length < 6) {
      let rand = getRandomFromArray(range20to45);
      if (!set4.includes(rand)) {
        set4.push(rand);
      }
    }
    set4.sort((a, b) => a - b);
    sets.push(set4);

    // 5세트: 10-30 범위에서 6개 번호
    let set5 = [];
    const range10to30 = Array.from({ length: 21 }, (_, i) => i + 10);
    while (set5.length < 6) {
      let rand = getRandomFromArray(range10to30);
      if (!set5.includes(rand)) {
        set5.push(rand);
      }
    }
    set5.sort((a, b) => a - b);
    sets.push(set5);

    console.log('생성된 세트들:', sets);
    return sets;
  } catch (error) {
    console.error('번호 생성 중 오류:', error);
    alert('번호 생성 중 오류가 발생했습니다: ' + error.message);
    return [];
  }
}

async function generateSets() {
  try {
    console.log('번호 생성 시작');
    const resultDiv = document.getElementById('results');
    if (!resultDiv) {
      console.error('결과 div를 찾을 수 없습니다');
      alert('결과를 표시할 요소를 찾을 수 없습니다');
      return;
    }
    
    resultDiv.innerHTML = '';

    const finalSets = generateFinalNumbers();
    if (finalSets.length === 0) {
      console.error('번호 세트 생성 실패');
      return;
    }

    // 모든 5개 세트 표시
    for (let i = 0; i < 5; i++) {
      let table = document.createElement('table');
      let header = document.createElement('tr');
      let th = document.createElement('th');
      th.colSpan = 6;
      th.textContent = `세트 ${i + 1}`;
      header.appendChild(th);
      table.appendChild(header);

      let row = document.createElement('tr');
      let tds = [];

      for (let j = 0; j < 6; j++) {
        let td = document.createElement('td');
        td.textContent = '';
        row.appendChild(td);
        tds.push(td);
      }

      table.appendChild(row);
      resultDiv.appendChild(table);

      // 번호 하나씩 천천히 출력
      for (let j = 0; j < 6; j++) {
        await animateSlot(tds[j], finalSets[i][j], 800 + j * 200);
      }

      await new Promise(resolve => setTimeout(resolve, 600));
    }
    console.log('번호 생성 완료');
  } catch (error) {
    console.error('번호 생성 중 오류:', error);
    alert('번호 생성 중 오류가 발생했습니다: ' + error.message);
  }
}

function animateSlot(td, finalNumber, duration) {
  return new Promise(resolve => {
    try {
      let count = 0;
      let interval = setInterval(() => {
        td.textContent = Math.floor(Math.random() * 45) + 1;
        count++;
        if (count > duration / 80) {
          clearInterval(interval);
          td.textContent = finalNumber;
          resolve();
        }
      }, 200);
    } catch (error) {
      console.error('애니메이션 오류:', error);
      td.textContent = finalNumber;
      resolve();
    }
  });
} 