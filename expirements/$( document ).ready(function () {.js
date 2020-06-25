<<<<<<< HEAD
$( document ).ready(function () {
  function applyNewContent(node, newTextContent) {
    var parent = node.parentNode;
    var spanNode = document.createElement('span');
    spanNode.innerHTML = newTextContent;
    var children = spanNode.childNodes;
    for (var nextSibling = node.nextSibling; children.length > 0;) {
      var newNode = children[children.length - 1];
      parent.insertBefore(newNode, nextSibling);
      nextSibling = newNode;
    }
    parent.removeChild(node);
  }

  var attachWordsActing = function (node, exclude) {
    //nodeType.TEXT_NODE only
    if(node.nodeType === 3) {
      var prevTextContent = node.nodeValue;
      var newTextContent = prevTextContent.replace(/[a-zA-Z][a-zA-Z'-]*/g, function (textPayload) {
        return '<span class="context-word-action">' + textPayload + '</span>';
      });
      if (prevTextContent != newTextContent) {
        applyNewContent(node, newTextContent);
      }
    } else {
      if(exclude[node.tagName] == undefined) {
        var childList =  Array.prototype.slice.call(node.childNodes);
        for (var i = 0; i < childList.length; i++) {
          attachWordsActing(childList[i], exclude);
        }
      }
    }
  };

  $(".howling").each(function (index) {
    attachWordsActing(this, {"A": true, "BUTTON": true});
    $(".context-word-action").click(function (index) {
      var that = $(this);

      var done = function() {
        that.removeClass("playing");
      };

      that.addClass("playing");
      var word = this.innerText.toLowerCase().trim();
      var wordPath = "file:///C:/Users/jAXT/Downloads/product/index.html/" + word + ".mp3";
      //console.log(wordPath);
      var sound = new Howl({ src: [wordPath], html5: true});
      sound.once('load', function(){
        sound.once('end', done);
        sound.play();
      });
      sound.once('playerror', done);
      sound.once('loaderror', done);
    })
  });

=======
$( document ).ready(function () {
  function applyNewContent(node, newTextContent) {
    var parent = node.parentNode;
    var spanNode = document.createElement('span');
    spanNode.innerHTML = newTextContent;
    var children = spanNode.childNodes;
    for (var nextSibling = node.nextSibling; children.length > 0;) {
      var newNode = children[children.length - 1];
      parent.insertBefore(newNode, nextSibling);
      nextSibling = newNode;
    }
    parent.removeChild(node);
  }

  var attachWordsActing = function (node, exclude) {
    //nodeType.TEXT_NODE only
    if(node.nodeType === 3) {
      var prevTextContent = node.nodeValue;
      var newTextContent = prevTextContent.replace(/[a-zA-Z][a-zA-Z'-]*/g, function (textPayload) {
        return '<span class="context-word-action">' + textPayload + '</span>';
      });
      if (prevTextContent != newTextContent) {
        applyNewContent(node, newTextContent);
      }
    } else {
      if(exclude[node.tagName] == undefined) {
        var childList =  Array.prototype.slice.call(node.childNodes);
        for (var i = 0; i < childList.length; i++) {
          attachWordsActing(childList[i], exclude);
        }
      }
    }
  };

  $(".howling").each(function (index) {
    attachWordsActing(this, {"A": true, "BUTTON": true});
    $(".context-word-action").click(function (index) {
      var that = $(this);

      var done = function() {
        that.removeClass("playing");
      };

      that.addClass("playing");
      var word = this.innerText.toLowerCase().trim();
      var wordPath = "file:///C:/Users/jAXT/Downloads/product/index.html/" + word + ".mp3";
      //console.log(wordPath);
      var sound = new Howl({ src: [wordPath], html5: true});
      sound.once('load', function(){
        sound.once('end', done);
        sound.play();
      });
      sound.once('playerror', done);
      sound.once('loaderror', done);
    })
  });

>>>>>>> 2aa29c3cae17aa3ecb487b802609abd3cc685680
});