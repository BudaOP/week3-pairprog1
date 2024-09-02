let feedbackArray = [];
let nextId = 1;

function getAll() {
  return feedbackArray;
}

function addOne(sender, message, rating) {
  if (!sender || !message || !rating) {
    return false;
  }

  const newFeedback = {
    id: nextId++,
    sender,
    message,
    rating,
  };

  feedbackArray.push(newFeedback);
  return newFeedback;
}

function findById(id) {
  const feedback = feedbackArray.find((item) => item.id == id);
  if (feedback) {
    return feedback;
  } else {
    return false;
  }
}

function updateOneById(id, updatedData) {
  const feedback = findById(id);

  if (feedback) {
    if (updatedData.sender) {
      feedback.sender = updatedData.sender;
    }
    if (updatedData.message) {
      feedback.message = updatedData.message;
    }
    if (updatedData.rating) {
      feedback.rating = updatedData.rating;
    }
    return feedback;
  }
  return false;
}

function deleteOneById(id) {
  const feedback = findById(id);

  if (feedback) {
    const initialLength = feedbackArray.length;
    feedbackArray = feedbackArray.filter((feedback) => feedback.id != id);
    return feedbackArray.length < initialLength;
  }
  return false;
}

if (require.main === module) {
  console.log("getAll called:", getAll());
}

Feedback = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = Feedback;
