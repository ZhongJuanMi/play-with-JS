
let answerAry = [];

// 每道题验证逻辑
function judge(i, conditionsAry) {
    if (conditionsAry[i-1]) {
        return true;
    }
}

// 生成每个答案出现的次数
function count(arrayObj) {
    let temp = ""; 
    let count = 0; 
    let arrNew = []; 
    // 下面开始循环　
    for (let i = 0; i < arrayObj.length; i++) {　　
        if (arrayObj[i] != -1) {　　
            temp = arrayObj[i];　　
            for (let j = 0; j < arrayObj.length; j++) { 
                　　
                if (temp == arrayObj[j]) {　　
                    count++;                    　　
                    arrayObj[j] = -1; 
                }
            }　　
            arrNew.push({ 'num': temp, 'count': count }); 　　
            count = 0;   　　
        }　　
    }
    arrNew.sort(function(a, b) {
        return a.count - b.count;
    });
    return arrNew;
}

// 所有判断逻辑
function work(answerAry){
    if(!judge(answerAry[1], [
        answerAry[4] == 3,
        answerAry[4] == 4,
        answerAry[4] == 1,
        answerAry[4] == 2
    	])){
    	return;
    }
    if(!judge(answerAry[2], [
        answerAry[5] == answerAry[1] &&answerAry[1] == answerAry[3] && answerAry[2] != answerAry[5],
        answerAry[2] == answerAry[1] &&answerAry[1] == answerAry[3] && answerAry[5] != answerAry[2],
        answerAry[5] == answerAry[2] &&answerAry[2] == answerAry[3] && answerAry[1] != answerAry[5],
        answerAry[5] == answerAry[1] &&answerAry[1] == answerAry[2] && answerAry[3] != answerAry[5]
    	])){
    	return;
    }
    if(!judge(answerAry[3], [
        answerAry[0] == answerAry[4],
        answerAry[1] == answerAry[6],
        answerAry[0] == answerAry[8],
        answerAry[5] == answerAry[9]
    	])){
    	return;
    }
    if(!judge(answerAry[4], [
        answerAry[4] == answerAry[7],
        answerAry[4] == answerAry[3],
        answerAry[4] == answerAry[8],
        answerAry[4] == answerAry[6]
    ])){
    	return;
    }
    if(!judge(answerAry[5], [
        answerAry[7] == answerAry[1] && answerAry[1] == answerAry[3],
        answerAry[7] == answerAry[0] && answerAry[0] == answerAry[5],
        answerAry[7] == answerAry[2] && answerAry[2] == answerAry[9],
        answerAry[7] == answerAry[4] && answerAry[4] == answerAry[8]
    ])){
    	return;
    }
    let aryA=[...answerAry];
    let a=count(aryA);
    let minCountNum=a[0].num;
    let minCount=a[0].count;
    if(!judge(answerAry[6], [
        minCountNum==3,
        minCountNum==2,
        minCountNum==1,
        minCountNum==4
    ])){
    	return;
    }
    if(!judge(answerAry[7], [
        Math.abs(answerAry[0] - answerAry[6]) != 1,
        Math.abs(answerAry[0] - answerAry[4]) != 1,
        Math.abs(answerAry[0] - answerAry[1]) != 1,
        Math.abs(answerAry[0] - answerAry[9]) != 1
    	])){
    	return;
    }
    if(!judge(answerAry[8], [
        answerAry[5] == answerAry[0] != answerAry[4] == answerAry[5],
        answerAry[5] == answerAry[0] != answerAry[4] == answerAry[9],
        answerAry[5] == answerAry[0] != answerAry[4] == answerAry[1],
        answerAry[5] == answerAry[0] != answerAry[4] == answerAry[8]
    	])){
    	return;
    }
    let aryB=[...answerAry];
    let result=[...count(aryB)];
    let maxCount=result[result.length-1].count;
    if(!judge(answerAry[9], [
        maxCount-minCount == 3,
        maxCount-minCount == 2,
        maxCount-minCount == 4,
        maxCount-minCount == 1
    	])){
    	return;
    }
    return true;
}

// 生成所有的答案并验证
for (let j = 1; j < 5; j++) {
    answerAry[0] = j;
    for (let j = 1; j < 5; j++) {
        answerAry[1] = j;
        for (let j = 1; j < 5; j++) {
            answerAry[2] = j;
            for (let j = 1; j < 5; j++) {
                answerAry[3] = j;
                for (let j = 1; j < 5; j++) {
                    answerAry[4] = j;
                    for (let j = 1; j < 5; j++) {
                        answerAry[5] = j;
                        for (let j = 1; j < 5; j++) {
                            answerAry[6] = j;
                            for (let j = 1; j < 5; j++) {
                                answerAry[7] = j;
                                for (let j = 1; j < 5; j++) {
                                    answerAry[8] = j;
                                    for (let j = 1; j < 5; j++) {
                                        answerAry[9] = j;
                                        if(work(answerAry)){
                                        	console.log(answerAry.join(',').replace(/1/g,'A').replace(/2/g,'B').replace(/3/g,'C').replace(/,/g,'').replace(/4/g,'D'),'bingo~');
                                        	return;
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }

        }
    }
}