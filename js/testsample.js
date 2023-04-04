
var $progressValue = 0;
var resultList=[];


const quizdata=[
      {
        question:"<h3>두 그림을 비교해 보고 똑같으면 ○표 다른 부분이 있으면 ×표 하세요.</h3><img src='../../images/test1/test1-1.png'></img>",
        options:["<img src='../../images/test1/test1-1-1.png'></img>", "<img src='../../images/test1/test1-1-2.png'></img>"],
        answer:"<img src='../../images/test1/test1-1-2.png'></img>",
        category:2
      },
      {
        question:"<h3>그림의 일부분을 잘 살펴보고, 알맞은 동물을 찾으세요.</h3><img src='../../images/test1/test1-2.png'></img>",
        options:["<img src='../../images/test1/test1-2-1.png'></img>", "<img src='../../images/test1/test1-2-2.png'></img>", "<img src='../../images/test1/test1-2-3.png'></img>", "<img src='../../images/test1/test1-2-4.png'></img>"],
        answer:"<img src='../../images/test1/test1-2-3.png'></img>",
        category:3
      },
      {
        question:"<h3>위쪽 그림과 같은 장소에 세워야 하는 표지판을 찾으세요.</h3><img src='../../images/test1/test1-3.png'></img>",
        options:["<img src='../../images/test1/test1-3-1.png'></img>", "<img src='../../images/test1/test1-3-2.png'></img>", "<img src='../../images/test1/test1-3-3.png'></img>", "<img src='../../images/test1/test1-3-4.png'></img>"],
        answer:"<img src='../../images/test1/test1-3-3.png'></img>",
        category:3
      },
      {
        question:"<h3>빈 곳에 알맞은 조각을 찾으세요.</h3><img src='../../images/test1/test1-4.png'></img>",
        options:["<img src='../../images/test1/test1-4-1.png'></img>", "<img src='../../images/test1/test1-4-2.png'></img>", "<img src='../../images/test1/test1-4-3.png'></img>", "<img src='../../images/test1/test1-4-4.png'></img>"],
        answer:"<img src='../../images/test1/test1-4-4.png'></img>",
        category:4
      },
      {
        question:"<h3>위쪽의 소리와 가장 잘 어울리는 동물을 찾으세요.</h3><img src='../../images/test1/test1-5.png'></img>",
        options:["<img src='../../images/test1/test1-5-1.png'></img>", "<img src='../../images/test1/test1-5-2.png'></img>", "<img src='../../images/test1/test1-5-3.png'></img>", "<img src='../../images/test1/test1-5-4.png'></img>"],
        answer:"<img src='../../images/test1/test1-5-4.png'></img>",
        category:4
      },
      {
        question:"<h3>상자의 규칙을 알아보고, 알맞은 그림을 찾으세요.</h3><img src='../../images/test1/test1-6.png'></img>",
        options:["<img src='../../images/test1/test1-6-1.png'></img>", "<img src='../../images/test1/test1-6-2.png'></img>"],
        answer:"<img src='../../images/test1/test1-6-1.png'></img>",
        category:1
      },
      {
        question:"<h3>빨간색 톱니바퀴가 화살표 방향으로 돌 때, 초록색 톱니바퀴는 어는 쪽으로 돌까요?</h3><img src='../../images/test1/test1-7.png'></img>",
        options:["<img src='../../images/test1/test1-7-1.png'></img>", "<img src='../../images/test1/test1-7-2.png'></img>"],
        answer:"<img src='../../images/test1/test1-7-1.png'></img>",
        category:1
      },
      {
        question:"<h3>위쪽 그림을 잘 살펴보고, 알맞은 그림자를 찾으세요.</h3><img src='../../images/test1/test1-8.png'></img>",
        options:["<img src='../../images/test1/test1-8-1.png'></img>", "<img src='../../images/test1/test1-8-2.png'></img>", "<img src='../../images/test1/test1-8-3.png'></img>", "<img src='../../images/test1/test1-8-4.png'></img>"],
        answer:"<img src='../../images/test1/test1-8-4.png'></img>",
        category:4
      },
      {
        question:"<h3>규칙을 생각해 보고, ?에 알맞은 그림을 찾으세요.</h3><img src='../../images/test1/test1-9.png'></img>",
        options:["<img src='../../images/test1/test1-9-1.png'></img>", "<img src='../../images/test1/test1-9-2.png'></img>", "<img src='../../images/test1/test1-9-3.png'></img>"],
        answer:"<img src='../../images/test1/test1-9-2.png'></img>",
        category:2
      },
      {
        question:"<h3>주어진 2개의 벽돌 블럭으로 만들 수 없는 모양을 찾으세요.</h3><img src='../../images/test1/test1-10.png'></img>",
        options:["<img src='../../images/test1/test1-10-1.png'></img>", "<img src='../../images/test1/test1-10-2.png'></img>", "<img src='../../images/test1/test1-10-3.png'></img>", "<img src='../../images/test1/test1-10-4.png'></img>"],
        answer:"<img src='../../images/test1/test1-10-1.png'></img>",
        category:1
      },
      {
        question:"<h3>위쪽 그림을 잘 보고 관계없는 그림을 찾으세요.</h3><img src='../../images/test1/test1-11.png'></img>",
        options:["<img src='../../images/test1/test1-11-1.png'></img>", "<img src='../../images/test1/test1-11-2.png'></img>", "<img src='../../images/test1/test1-11-3.png'></img>", "<img src='../../images/test1/test1-11-4.png'></img>"],
        answer:"<img src='../../images/test1/test1-11-3.png'></img>",
        category:3
      },
      {
        question:"<h3>자동차들이 배를 타려고 해요. 배를 탈 수 있는 자동차를 찾으세요.</h3><img src='../../images/test1/test1-12.png'></img>",
        options:["A", "B", "C", "D"],
        answer:"D",
        category:4
      },
      {
        question:"<h3>위쪽 그림과 똑같은 그림을 찾으세요.</h3><img src='../../images/test1/test1-13.png'></img>",
        options:["<img src='../../images/test1/test1-13-1.png'></img>", "<img src='../../images/test1/test1-13-2.png'></img>", "<img src='../../images/test1/test1-13-3.png'></img>", "<img src='../../images/test1/test1-13-4.png'></img>"],
        answer:"<img src='../../images/test1/test1-13-2.png'></img>",
        category:2
      },
      {
        question:"<h3>겹쳐진 4장의 색종이를 보고 가장 아래에 놓인 것을 찾으세요.</h3><img src='../../images/test1/test1-14.png'></img>",
        options:["<img src='../../images/test1/test1-14-1.png'></img>", "<img src='../../images/test1/test1-14-2.png'></img>", "<img src='../../images/test1/test1-14-3.png'></img>", "<img src='../../images/test1/test1-14-4.png'></img>"],
        answer:"<img src='../../images/test1/test1-14-1.png'></img>",
        category:1
      },
      {
        question:"<h3>모두 몇 마리인지 알맞은 수를 찾으세요.</h3><img src='../../images/test1/test1-15.png'></img>",
        options:["2마리", "3마리", "4마리", "5마리"],
        answer:"5마리",
        category:4
      },
      {
        question:"<h3>가장 무거운 과일을 찾으세요.</h3><img src='../../images/test1/test1-16.png'></img>",
        options:["<img src='../../images/test1/test1-16-1.png'></img>", "<img src='../../images/test1/test1-16-2.png'></img>", "<img src='../../images/test1/test1-16-3.png'></img>"],
        answer:"<img src='../../images/test1/test1-16-3.png'></img>",
        category:3
      },
      {
        question:"<h3>나머지 셋과 다른 하나를 찾으세요.</h3>",
        options:["<img src='../../images/test1/test1-17-1.png'></img>", "<img src='../../images/test1/test1-17-2.png'></img>", "<img src='../../images/test1/test1-17-3.png'></img>", "<img src='../../images/test1/test1-17-4.png'></img>"],
        answer:"<img src='../../images/test1/test1-17-2.png'></img>",
        category:2
      },
      {
        question:"<h3>주어진 모양에서 쌓기나무를 1개만 움직여서 만들 수 없는 모양을 찾으세요.</h3><img src='../../images/test1/test1-18.png'></img>",
        options:["<img src='../../images/test1/test1-18-1.png'></img>", "<img src='../../images/test1/test1-18-2.png'></img>", "<img src='../../images/test1/test1-18-3.png'></img>", "<img src='../../images/test1/test1-18-4.png'></img>"],
        answer:"<img src='../../images/test1/test1-18-2.png'></img>",
        category:2
      },
      {
        question:"<h3>중간에 무슨 일이 있었을까요? 상상하여 ?에 알맞은 그림을 찾으세요.</h3><img src='../../images/test1/test1-19.png'></img>",
        options:["<img src='../../images/test1/test1-19-1.png'></img>", "<img src='../../images/test1/test1-19-2.png'></img>", "<img src='../../images/test1/test1-19-3.png'></img>"],
        answer:"<img src='../../images/test1/test1-19-2.png'></img>",
        category:2
      },
      {
        question:"<h3>다음 글을 읽고 알맞은 사람을 찾으세요.</h3><img src='../../images/test1/test1-20.png'></img>",
        options:["<img src='../../images/test1/test1-20-1.png'></img>", "<img src='../../images/test1/test1-20-2.png'></img>", "<img src='../../images/test1/test1-20-3.png'></img>", "<img src='../../images/test1/test1-20-4.png'></img>"],
        answer:"<img src='../../images/test1/test1-20-2.png'></img>",
        category:2
      }
    ];
/** Random shuffle questions 무작위 섞기 질문**/
function shuffleArray(question){
   var shuffled=question.sort(function() {
    return .5 - Math.random();
 });
   return shuffled;
}

function shuffle(a) {
  for (var i = a.length; i; i--) {
    var j = Math.floor(Math.random() * i);
    var _ref = [a[j], a[i - 1]];
    a[i - 1] = _ref[0];
    a[j] = _ref[1];
  }
}

/*** Return shuffled question 섞은 질문 반환 ***/
function generateQuestions(){
  var questions=shuffleArray(quizdata);    
  return questions;
}

/*** Return list of options 옵션 목록 반환 ***/
function returnOptionList(opts, i){

  var optionHtml='<li class="myoptions">'+
    '<input value="'+opts+'" name="optRdBtn" type="radio" id="rd_'+i+'">'+
    '<label for="rd_'+i+'">'+opts+'</label>'+
    '<div class="bullet">'+
      '<div class="line zero"></div>'+
      '<div class="line one"></div>'+
      '<div class="line two"></div>'+
      '<div class="line three"></div>'+
      '<div class="line four"></div>'+
      '<div class="line five"></div>'+
      '<div class="line six"></div>'+
      '<div class="line seven"></div>'+
    '</div>'+
  '</li>';

  return optionHtml;
}

/** Render Options 렌더링 옵션 **/
function renderOptions(optionList){
  var ulContainer=$('<ul>').attr('id','optionList');
  for (var i = 0, len = optionList.length; i < len; i++) {
    var optionContainer=returnOptionList(optionList[i], i)
    ulContainer.append(optionContainer);
  }
  $(".answerOptions").html('').append(ulContainer);
}

/** Render question 렌더링 질문 **/
function renderQuestion(question){
  $(".question").html("<h3>"+question+"</h3>");
}

/** Render quiz :: Question and option 렌더링 퀴즈 :: 질문 및 옵션 **/
function renderQuiz(questions, index){ 
  var currentQuest=questions[index];  
  renderQuestion(currentQuest.question); 
  renderOptions(currentQuest.options); 
  console.log("Question");
  console.log(questions[index]);
}

/** Return correct answer of a question 질문의 정답을 반환 ***/
function getCorrectAnswer(questions, index){
  return questions[index].answer;
}

/** pushanswers in array 배열의 푸시 답변 **/
function correctAnswerArray(resultByCat){
  var arrayForChart=[];
  for(var i=0; i<resultByCat.length;i++){
   arrayForChart.push(resultByCat[i].correctanswer);
  }

  return arrayForChart;
}
/** Generate array for percentage calculation 백분율 계산을 위한 배열 생성 **/
function genResultArray(results, wrong){
  var resultByCat = resultByCategory(results);
  var arrayForChart=correctAnswerArray(resultByCat);
  arrayForChart.push(wrong);
  return arrayForChart
}

/** percentage Calculation 백분율 계산 **/
function percentCalculation(array, total){
  var percent = array.map(function (d, i) {
    return (100 * d / total).toFixed(2);
  });
  return percent;
}

/*** Get percentage for chart 차트의 백분율 가져오기 **/
function getPercentage(resultByCat, wrong){
  var totalNumber=resultList.length;
  var wrongAnwer=wrong;
  //var arrayForChart=genResultArray(resultByCat, wrong);
  //return percentCalculation(arrayForChart, totalNumber);
}

/** count right and wrong answer number 정답과 오답 수를 세다 **/
function countAnswers(results){

  var countCorrect=0, countWrong=0;

  for(var i=0;i<results.length;i++){
    if(results[i].iscorrect==true)  
        countCorrect++;
    else countWrong++;
  }

  return [countCorrect, countWrong];
}

/**** Categorize result 결과 분류 *****/
function resultByCategory(results){

  var categoryCount = [];
  var ctArray=results.reduce(function (res, value) {
    if (!res[value.category]) {
        res[value.category] = {
            category: value.category,
            correctanswer: 0           
        };
        categoryCount.push(res[value.category])
    }
    var val=(value.iscorrect==true)?1:0;
    res[value.category].correctanswer += val; 
    return res;
  }, {});

  categoryCount.sort(function(a,b) {
    return a.category - b.category;
  });

  return categoryCount;
}


/** Total score pie chart 총점 파이 차트 **/
function totalPieChart(_upto, _cir_progress_id, _correct, _incorrect) {

   $("#"+_cir_progress_id).find("._text_incor").html("Incorrect : "+_incorrect);
   $("#"+_cir_progress_id).find("._text_cor").html("Correct : "+_correct);

   var unchnagedPer=_upto;
   
    _upto = (_upto > 100) ? 100 : ((_upto < 0) ? 0 : _upto);

    var _progress = 0;

    var _cir_progress = $("#"+_cir_progress_id).find("._cir_P_y");
    var _text_percentage = $("#"+_cir_progress_id).find("._cir_Per");

    var _input_percentage;
    var _percentage;

    var _sleep = setInterval(_animateCircle, 25);

    function _animateCircle() {
      //2*pi*r == 753.6 +xxx=764
        _input_percentage = (_upto / 100) * 764;
        _percentage = (_progress / 100) * 764;

        _text_percentage.html(_progress + '%');

        if (_percentage >= _input_percentage) {
             _text_percentage.html('<tspan x="50%" dy="0em">'+unchnagedPer + '% </tspan><tspan  x="50%" dy="1.9em">Your Score</tspan>');
            clearInterval(_sleep);
        } else {

            _progress++;

            _cir_progress.attr("stroke-dasharray",_percentage + ',764');
        }
    }
}

function renderBriefChart(correct, total, incorrect){
  var percent=(100 * correct / total);
  if(Math.round(percent) !== percent) {
          percent = percent.toFixed(2);
  }

 totalPieChart(percent, '_cir_progress', correct, incorrect)
   
}
/*** render chart for result 결과에 대한 차트 렌더링 **/
function renderChart(data){
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: [ "Verbal communication(창의력)", 
              "Non-verbal communication(계산력)", 
              "Written communication(수리력)", 
              "Incorrect"
            ],
    datasets: [
                {
                 
                  data: data,
                  backgroundColor: [  '#e6ded4',
                                      '#968089',
                                      '#e3c3d4',
                                      '#ab4e6b'
                                    ],
                  borderColor: [  'rgba(239, 239, 81, 1)',
                                  '#8e3407',
                                  'rgba((239, 239, 81, 1)',
                                  '#000000'
                                ],
                  borderWidth: 1
                }
              ]
    },
    options: {
         pieceLabel: {
          render: 'percentage',
          fontColor: 'black',
          precision: 2
        }
      }
    
  });
}

/** List question and your answer and correct answer  
질문과 당신의 대답과 정답을 나열하십시오
*****/
function getAllAnswer(results){
    var innerhtml="";
    for(var i=0;i<results.length;i++){

      var _class=((results[i].iscorrect)?"item-correct":"item-incorrect");
       var _classH=((results[i].iscorrect)?"h-correct":"h-incorrect");
      

      var _html='<div class="_resultboard '+_class+'">'+
                  '<div class="_header">'+results[i].question+'</div>'+
                  '<div class="_yourans '+_classH+'">'+results[i].clicked+'</div>';

        var html="";
       if(!results[i].iscorrect)
        html='<div class="_correct">'+results[i].answer+'</div>';
       _html=(_html+html)+'</div>';
       innerhtml+=_html;
    }

  $(".allAnswerBox").html('').append(innerhtml);
}
/** render  Brief Result 렌더링 간략한 결과 **/
function renderResult(resultList){ 
  
  var results=resultList;
  console.log(results);
  var countCorrect=countAnswers(results)[0], 
  countWrong=countAnswers(results)[1];
  
  
  renderBriefChart(countCorrect, resultList.length, countWrong);
}

function renderChartResult(){
   var results=resultList; 
  var countCorrect=countAnswers(results)[0], 
  countWrong=countAnswers(results)[1];
  var dataForChart=genResultArray(resultList, countWrong);
  renderChart(dataForChart);
}

/** Insert progress bar in html HTML에 진행 표시줄 삽입 **/
function getProgressindicator(length){
  var progressbarhtml=" ";
  for(var i=0;i<length;i++){
    progressbarhtml+='<div class="my-progress-indicator progress_'+(i+1)+' '+((i==0)?"active":"")+'"></div>';
  }
  $(progressbarhtml).insertAfter(".my-progress-bar");
} 

/*** change progress bar when next button is clicked
 * 다음 버튼을 클릭하면 진행률 표시줄 변경 ***/
function changeProgressValue(){
  $progressValue+= 5;
  if ($progressValue >= 100) {
    
  } else {
    if($progressValue==99) $progressValue=100;
    $('.my-progress')
      .find('.my-progress-indicator.active')
      .next('.my-progress-indicator')
      .addClass('active');      
    $('progress').val($progressValue);
  }
  $('.js-my-progress-completion').html($('progress').val() + '% complete');

}   
function addClickedAnswerToResult(questions,presentIndex,clicked ){
  var correct=getCorrectAnswer(questions, presentIndex);
    var result={
      index:presentIndex,
      question:questions[presentIndex].question, 
      clicked:clicked,
      iscorrect:(clicked==correct)?true:false,
      answer:correct, 
      category:questions[presentIndex].category
    }
    resultList.push(result);

    console.log("result");
    console.log(result);
      
}

$(document).ready(function() {
  
  var presentIndex=0;
   var clicked=0;

  var questions=generateQuestions();
  renderQuiz(questions, presentIndex);
  getProgressindicator(questions.length);

  $(".answerOptions ").on('click','.myoptions>input', function(e){
    clicked=$(this).val();   

    if(questions.length==(presentIndex+1)){
      $("#submit").removeClass('hidden');
      $("#next").addClass("hidden");
    }
    else{

      $("#next").removeClass("hidden");
    }

     
  
  });



  $("#next").on('click',function(e){
    e.preventDefault();
    addClickedAnswerToResult(questions,presentIndex,clicked);

    $(this).addClass("hidden");
    
    presentIndex++;
    renderQuiz(questions, presentIndex);
    changeProgressValue();
  });

  $("#submit").on('click',function(e){
     addClickedAnswerToResult(questions,presentIndex,clicked);
    $('.multipleChoiceQues').hide();
    $(".resultArea").show();
    renderResult(resultList);

  });

  
  

   $(".resultArea").on('click','.viewchart',function(){
      $(".resultPage2").show();
       $(".resultPage1").hide();
       $(".resultPage3").hide();
       renderChartResult();
   });

    $(".resultArea").on('click','.backBtn',function(){
      $(".resultPage1").show();
       $(".resultPage2").hide();
       $(".resultPage3").hide();
        renderResult(resultList);
   });

    $(".resultArea").on('click','.viewanswer',function(){
      $(".resultPage3").show();
       $(".resultPage2").hide();
       $(".resultPage1").hide();
        getAllAnswer(resultList);
   });

  $(".resultArea").on('click','.replay',function(){
    window.location.reload(true);
  });
  

});