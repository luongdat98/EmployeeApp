import { _saveQuestion, _saveQuestionAnswer } from "../_DATA";

describe("_saveQuestion function", () => {
  test("Add Question successfully", async () => {
    const questionModel = {
      author: "author",
      optionOneText: "Test 1",
      optionTwoText: "Test 2",
    };
    const expectQuestion = await _saveQuestion(questionModel);
    expect(expectQuestion.author).toBe(questionModel.author);
  });

  test("Return error message when missing author", async () => {
    const questionModel = {
      optionOneText: "Test 1",
      optionTwoText: "Test 2",
    };
    await expect(_saveQuestion(questionModel)).rejects.toBe(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  test("Return error message when miss optionOne", async () => {
    const questionModel = {
      author: "author",
      optionTwoText: "Test 2",
    };
    await expect(_saveQuestion(questionModel)).rejects.toBe(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
  test("Return error message when miss optionTwo", async () => {
    const questionModel = {
      author: "author",
      optionOneText: "Test 1",
    };
    await expect(_saveQuestion(questionModel)).rejects.toBe(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  test("Return error message when miss all", async () => {
    const questionModel = {};
    await expect(_saveQuestion(questionModel)).rejects.toBe(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer function", () => {
  test("Add Question Answer successfully", async () => {
    const questionModel = {
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };
    const expectQuestion = await _saveQuestionAnswer(questionModel);
    expect(expectQuestion.author).toBe(questionModel.author);
  });

  test("Return error message", async () => {
    await expect(
      _saveQuestionAnswer("undefined", undefined, undefined)
    ).rejects.toBe("Please provide authedUser, qid, and answer");
  });
});
