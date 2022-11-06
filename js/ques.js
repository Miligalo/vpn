let id = 0
let name_question = 'question_' + id;
function createQues(e) {
    id = id + 1;
    name_question = 'question_' + id;

    let nameQues = $(e.target).parent().parent().find('.name_ques').val();
    let mainQues = `<div id="${id}" class="main_question card w-75 ques_style card" draggable="true" data-name="${nameQues}">
                      <div class="ques_title">
                            <h1 id="case_name">${nameQues} <span class="handle1">Тяни</span></h1>
                            <div>
                                <button type="submit" class="trash ques_trash">
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </button>
                                
                            </div>
                            
                         </div>
                        <div class="question_add">
                            <div class="input-group mb-3 w-50">
                            <input type="text" id="add_ques" class="form-control question_name" placeholder="Название вопроса">
                            <button type="submit" style="margin: auto" class="btn btn-primary ques create_question">Создать вопрос</button>
                        </div>
                        </div>
                 <div id="${name_question}"  class="question">
                  <div>
                 </div>`;
    $(e.target).parent().parent().find('#ques').append(mainQues);

    dragula([document.getElementById(name_question)], {
        moves: function (el, container, handle) {
            return handle.className === 'handle';
        }
    });
}
$(document).on('click','.ques',function (e){
    createQues(e);
});

let id_answer = 0;
let name_answer = 'question_' + id_answer;

function createQuestion(e) {
    id_answer = id_answer + 1;
    name_answer = 'question_' + id;
    let nameQuestion = $(e.target).parent().parent().parent().find('.question_name').val();
    let addQuestion = `<div class="question_content" data-name="${nameQuestion}">
                            <div class="question_title">
                                <h3 id="case">${nameQuestion} <span class="handle">Тяни</span></h3>
                                <button type="submit" class="trash question_trash">
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div class="answer_add">
                                 <div class="input-group mb-3 w-50">
                                    <input type="text" id="add_answer" class="form-control answer_name" placeholder="Вариант ответа">
                                    <button type="submit" style="margin: auto" class="btn btn-primary ques create_answer">Создать ответ</button>
                                 </div>
                            </div>
                            <div id="${name_answer}" class="main_answer">
                             </div>
                        </div>`;
    $(e.target).parent().parent().parent().find('.question').append(addQuestion);

    dragula([document.getElementById(name_answer)], {
        moves: function (el, container, handle) {
            return handle.className === 'handle2';
        }
    });
}

$(document).on('click','.create_question',function (e){
    createQuestion(e);
});



function createAnswer(e) {
    let element_question = $(e.target).parent().parent().parent().find('#case').text();
    let element_ques = $(e.target).parent().parent().parent().parent().parent().find('#case_name').text();
    let nameAnswer = $(e.target).parent().parent().parent().find('.answer_name').val();
    let answer = `<div class="answer_title" data-name="${nameAnswer}">
                          <label>
                                Верно?
                                    <input type="radio" name="${element_question} ${element_ques}" class="nice_checkbox" name="languages">
                                     ${nameAnswer} <span class="handle2">Тяни</span>
                                    <span>
                                         <button type="submit" class="trash answer_trash">
                                             <i class="fa fa-trash" aria-hidden="true"></i>
                                         </button>
                                    </span>
                           </label>
                    </div>`;
    $(e.target).parent().parent().parent().find('.main_answer').append(answer);
}
$(document).on('click','.create_answer',function (e){
    createAnswer(e);
});

function deleteQues(e){
    $(e.target).parent().parent().parent().parent().remove()
}
$(document).on('click', '.ques_trash', function (e){
    deleteQues(e);
});

function deleteQuestion(e){
    $(e.target).parent().parent().parent().remove()
}
$(document).on('click', '.question_trash', function (e){
    deleteQuestion(e);
});

function deleteAnswer(e){
    $(e.target).parent().parent().parent().parent().remove();
}
$(document).on('click', '.answer_trash', function (e){
    deleteAnswer(e);
})
function save(){

    let ques_array = [];
    $('.main_question').each(function (index){
        let ques_title = $(this).data('name');
        let question_array = [];
        $(this).find('.question_content').each(function (){
            let question_title = $(this).data('name');
            let answer_array = [];
            $(this).find('.answer_title').each(function (){
                let answer_title = $(this).data('name');
                let answer_obj = {}
                answer_obj[answer_title] = $(this).find('.nice_checkbox').is(":checked")
                answer_array.push(answer_obj)
            });
            let question_obj = {}
            question_obj[question_title] = answer_array
            question_array.push(question_obj);
        });
        let ques_obj = {}
        ques_obj[ques_title] = question_array
        ques_array.push(ques_obj)
    });
    console.log(ques_array);
}


dragula([document.getElementById("ques")], {
    moves: function (el, container, handle) {
        return handle.className === 'handle1';
    }
});





