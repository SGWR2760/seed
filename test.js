var before = "";
var inputText = "";


function addTime() {
  document.getElementById('outputText').value = document.getElementById('outputText').value + " ";
  before = document.getElementById('outputText').value
  if (window.matchMedia("(max-width: 481px)").matches) {
    var obj = document.getElementById('outputText');
    obj.scrollTop = obj.scrollHeight;
  } else {
    document.getElementById('outputText').focus();
  }
}

function addDate() {
  document.getElementById('outputText').value = document.getElementById('outputText').value + " ";
  before = document.getElementById('outputText').value
  if (window.matchMedia("(max-width: 481px)").matches) {
    var obj = document.getElementById('outputText');
    obj.scrollTop = obj.scrollHeight;
  } else {
    document.getElementById('outputText').focus();
  }
}

function copyText() {
  var textarea = document.getElementById("outputText")
  textarea.select();
  document.execCommand("copy");
}

function resetText() {
  // document.getElementById("outputText").innerHTML = "以下の日程でご都合いかがでしょうか";


  document.getElementById("outputText").value = "";
  // window.location.reload();
}

function addText(text) {
  document.getElementById('outputText').value = document.getElementById('outputText').value;
  before = document.getElementById('outputText').value
  if (window.matchMedia("(max-width: 481px)").matches) {
    var obj = document.getElementById('outputText');
    obj.scrollTop = obj.scrollHeight;
  } else {
    document.getElementById('outputText').focus();
  }

  console.log(before);
  console.log(document.getElementById('outputText').value);
}

function addName() {
  // alert('クリックした日付は' + e.target.dataset.date + 'です')
  console.log(document.getElementById('yourName').value);
  document.getElementById('outputText').value = document.getElementById('outputText').value;
  before = document.getElementById('outputText').value
  if (window.matchMedia("(max-width: 481px)").matches) {
    var obj = document.getElementById('outputText');
    obj.scrollTop = obj.scrollHeight;
  } else {
    document.getElementById('outputText').focus();
  }
}

function addReturn() {
  document.getElementById('outputText').value = document.getElementById('outputText').value + "\n";
  if (window.matchMedia("(max-width: 481px)").matches) {
    var obj = document.getElementById('outputText');
    obj.scrollTop = obj.scrollHeight;
  } else {
    document.getElementById('outputText').focus();
  }
}

function mouseOver(text) {
  // console.log(text);
  inputText = text;
  before = document.getElementById("outputText").value;
  document.getElementById('outputText').value = document.getElementById('outputText').value + text;
  document.getElementById('outputText').focus();
}

function mouseLeave() {
  inputText = "";
  document.getElementById('outputText').value = before;
  before = document.getElementById("outputText").value;
  document.getElementById('outputText').focus();
}

// inputBOXまわり
function updateValue() {
  //
  // console.log(document.getElementById('yourName').value);
  // // cookieに保存
  // document.cookie = document.getElementById('yourName').value;
  // // + ";" + expires + path;
  // console.log(document.cookie);
}

var textAreaHeight;
var textAreaWidth;
var fullScreenFlag = false;

function textAreaZoom() {
  var textArea = document.getElementById('sideBar');
  var cardArea = document.getElementById('card');

  // 全画面でない場合
  if (fullScreenFlag == false) {
    textAreaHeight = document.getElementById('sideBar').clientHeight;
    textAreaWidth = document.getElementById('sideBar').clientWidth;

    var h = document.documentElement.clientHeight
    var w = document.documentElement.clientWidth;


    // var elm = document.getElementById('sideBar').offsetHeight - document.getElementById('card-title').offsetHeight - document.getElementById('sidebar-button').offsetHeight;
    // document.getElementById('input-group').style.height = (elm - 32 - 16 - 8) + 'px';

    if (window.matchMedia("(max-width: 481px)").matches) {
      textArea.style.width = w + 'px';
      textArea.style.height = h + 'px';

      cardArea.style.width = w + 'px';
      cardArea.style.height = h + 'px';

      var elm = document.getElementById('sideBar').offsetHeight - document.getElementById('card-title').offsetHeight - document.getElementById('sidebar-button').offsetHeight;
      document.getElementById('input-group').style.height = (elm - 32 - 16 - 8) + 'px';
    } else {
      textArea.style.width = '90%';
      textArea.style.height = '90%';

      cardArea.style.width = '90%';
      cardArea.style.height = '90%';

      document.getElementById('input-group').style.height = '550px';
    }


    fullScreenFlag = true;
    console.log(fullScreenFlag);

    //現在全画面の場合
  } else {


    if (window.matchMedia("(max-width: 481px)").matches) {
      textArea.style.width = textAreaWidth + 'px';
      textArea.style.height = textAreaHeight + 'px';

      cardArea.style.width = textAreaWidth + 'px';
      cardArea.style.height = textAreaHeight + 'px';

      var elm = document.getElementById('sideBar').offsetHeight - document.getElementById('card-title').offsetHeight - document.getElementById('sidebar-button').offsetHeight;
      document.getElementById('input-group').style.height = (elm - 32 - 16 - 8) + 'px';
    } else {
      textArea.style.width = textAreaWidth + 'px';
      textArea.style.height = textAreaHeight + 'px';

      cardArea.style.width = textAreaWidth + 'px';
      cardArea.style.height = textAreaHeight + 'px';

      // document.getElementById('input-group').style.height = '550px';
    }


    fullScreenFlag = false;
    console.log(fullScreenFlag);
  }

}
