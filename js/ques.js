function createQues(e) {
     let nameQues = $(e.target).parent().parent().find('.name_ques').val();
    let mainQues = `<div class="main_question card w-75 ques_style" data-name="${nameQues}">
                      <div class="ques_title">
                            <h1>${nameQues}</h1>
                         </div>
                        <div class="question_add">
                            <div class="input-group mb-3 w-50">
                            <input type="text" id="add_ques" class="form-control question_name" placeholder="Название вопроса">
                            <button type="submit" style="margin: auto" class="btn btn-primary ques create_question">Создать вопрос</button>
                        </div>
                        </div>
                 <div id="question">
                 </div>`;
    $(e.target).parent().parent().find('#ques').append(mainQues);
}
$(document).on('click','.ques',function (e){
    createQues(e);
});

function createQuestion(e) {
    let nameQuestion = $(e.target).parent().parent().parent().find('.question_name').val();

    let addQuestion = `<div class="question_content" data-name="${nameQuestion}">
                            <div class="question_title">
                            <h3>${nameQuestion}</h3>
                            </div>
                            <div class="answer_add">
                                 <div class="input-group mb-3 w-50">
                                    <input type="text" id="add_answer" class="form-control answer_name" placeholder="Вариант ответа">
                                    <button type="submit" style="margin: auto" class="btn btn-primary ques create_answer">Создать ответ</button>
                                 </div>
                            </div>
                            <div id="answer" class="main_answer">
                             </div>
                        </div>`;
    $(e.target).parent().parent().parent().find('#question').append(addQuestion);
}
$(document).on('click','.create_question',function (e){
    createQuestion(e);
});

function createAnswer(e) {
    let nameAnswer = $(e.target).parent().parent().parent().find('.answer_name').val();
    let answer = `<div class="answer_title" data-name="${nameAnswer}">
                          <label>
                                <input type="checkbox" class="nice_checkbox" name="languages">
                                    ${nameAnswer}
                           </label>
                    </div>`;
    $(e.target).parent().parent().parent().find('#answer').append(answer);
}
$(document).on('click','.create_answer',function (e){
    createAnswer(e);
});

function save(){
    let array = [];
    $('.main_question').each(function (){
        let ques_title = $(this).data('name');
        array[ques_title] = [];
        $(this).find('.question_content').each(function (){
            let question_title = $(this).data('name');
            array[ques_title][question_title] = [];
            $(this).find('.answer_title').each(function (){
                let answer_title = $(this).data('name');
                array[ques_title][question_title][answer_title] = $(this).find('.nice_checkbox').is(":checked");
            });
        });
    });
    console.log(array);
}
