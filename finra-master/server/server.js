const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.listen(8080, () => {
  console.log('Server started!');
});

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions))
app.use(bodyParser.json());


app.route('/phonenumber').get((req, res) => {
  const phoneNumber = req.query.number;
  const phoneNumberArray = phoneNumber.split(',').map(Number)
  let data = phonePerm(phoneNumberArray);
  res.send({
    result: data
  });

  function phonePerm(array) {
    const len = array.length,
      result = [];

    array.sort(function(a, b) {
      return a - b;
    });

    helper(result, len, [], [], array);

    return result;
  };

  function helper(result, len, curArr, used, array) {
    if (curArr.length === len) {
      result.push(curArr.join(''));
      return;
    }

    for (let i = 0; i < len; i++) {
      if (used[i] || (i > 0 && array[i] === array[i - 1] && !used[i - 1])) {
        continue;
      }

      curArr.push(array[i]);
      used[i] = true;
      helper(result, len, curArr.concat(), used.concat(), array);
      used[i] = false;
      curArr.pop();
    }
  }
});

module.exports = app;