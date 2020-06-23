M.AutoInit();

const content = [
  {
    title: "A sound mind in a sound body",
    img: "./img/1.png",
    body: `<p><b>По-английски</b> - A sound mind in a sound body</p>

        <p><b>Перевод</b> - Здоровый дух в здоровом теле</p>
        
        <p><b>Аналог в русском</b> - В здоровом теле здоровый дух</p>`,
  },
  {
    title: "After us the deluge",
    img: "./img/2.png",
    body: `<p><b>По-английски</b> - After us the deluge</p>

        <p><b>Перевод</b> - После нас хоть потоп</p>
        
        <p><b>Аналог в русском</b>- После нас хоть потоп</p>`,
  },
  {
    title: "As you sow, so shall you reap",
    img: "./img/3.png",
    body: `<p><b>По-английски</b>- As you sow, so shall you reap</p>

        <p><b>Перевод</b>- Как посеешь, так и пожнешь</p>
        
        <p><b>Аналог в русском</b>- Что посеешь, то и пожнешь</p>`,
  },
  {
    title: "One fire drives out another",
    img: "./img/162.png",
    body: `
        <p><b>По-английски</b>-One fire drives out another</p>

        <p><b>Перевод</b>-Один огонь другим тушится</p>
        
        <p><b>Аналог в русском</b>-Клин клином вышибается</p>
        `,
  },
  {
    title: "Silence gives consent",
    img: "./img/169.png",
    body: `
       <p><b>По-английски</b>-Silence gives consent</p>

        <p><b>Перевод</b>-Молчание обозначает согласие</p>
        
        <p><b>Аналог в русском</b>-Молчание—знак согласия</p>
        `,
  },
  {
    title: "When pigs fly",
    img: "./img/200.png",
    body: `
        <p><b>По-английски</b>-When pigs fly</p>

        <p><b>Перевод</b>-Когда свиньи полетят</p>
        
        <p><b>Аналог в русском</b>-После дождичка в четверг</p>
        `,
  },
  {
    title: "Never judge a book by its cover",
    img: "./img/149.png",
    body: `
        <p><b>По-английски</b>- Never judge a book by its cover</p>
        <p><b>Перевод</b>- Не суди о книге по обложке</p>
        <p><b>Аналог в русском</b>- стречают по одежке, провожают по уму</p>
      `,
  },
  {
    title: "Money has no smell",
    img: "./img/141.png",
    body: `
        <p><b>По-английски</b> - Money has no smell</p>
        <p><b>Перевод</b> - Деньги не пахнут</p>
        <p><b>Аналог в русском</b> - Деньги не пахнут</p>
      `,
  },
  {
    title: "То plough the sand",
    img: "./img/192.png",
    body: `
        <p><b>По-английски</b> - То plough the sand</p>
        <p><b>Перевод</b> - Пахать песок</p>
        <p><b>Аналог в русском</b> - Толочь воду в ступе</p>
      `,
  },
  {
    title: "The devil is not so black as he is painted",
    img: "./img/183.png",
    body: `
        <p><b>По-английски</b> - The devil is not so black as he is painted</p>
        <p><b>Перевод</b> - Чёрт есть не такой чёрный, как его рисуют</p>
        <p><b>Аналог в русском</b> - Не так страшен чёрт, как его малюют</p>
      `,
  },
  {
    title: "The end crowns the work",
    img: "./img/184.png",
    body: `
    <p><b>По-английски</b> - The end crowns the work</p>

    <p><b>Перевод</b>- Конец венчает дело</p>
    
    <p><b>Аналог в русском</b>- Конец — делу венец</p>
    `,
  },
  {
    title: "Tastes differ",
    img: "./img/180.png",
    body: `
    <p><b>По-английски</b>- Tastes differ</p>

    <p><b>Перевод</b> - Вкусы расходятся</p>
    
    <p><b>Аналог в русском</b> - О вкусах не спорят</p>
    `,
  },
  {
    title: "Sink or swim",
    img: "./img/170.png",
    body: `
    <p><b>По-английски</b>- Sink or swim</p>

    <p><b>Перевод</b>- Потону или выплыву</p>
    
    <p><b>Аналог в русском</b>- Эх, была не была</p>
    `,
  },
  {
    title: "Something is rotten in the state of Denmark",
    img: "./img/174.png",
    body: `
    <p><b>По-английски</b>- Something is rotten in the state of Denmark</p>

    <p><b>Перевод</b>- Подгнило что-то в Датском королевстве</p>
    
    <p><b>Аналог в русском</b>- Тут что-то не так</p>
    
    

    `,
  },
  {
    title: "Oaks may fall when reeds stand the storm",
    img: "./img/159.png",
    body: `
    <p><b>По-английски</b> - Oaks may fall when reeds stand the storm</p>

    <p><b>Перевод</b> - Буря валит дубы, а тростник может устоять</p>

    <p><b>Аналог в русском</b> - Мал, да удал</p>

    `,
  },
  {
    title: "What must be, must be",
    img: "./img/198.png",
    body: `
    <p><b>По-английски</b> - What must be, must be</p>

    <p><b>Перевод</b> - Чему быть, того не миновать</p> 

    <p><b>Аналог в русском</b> - Чему быть, того не миновать</p>

    `,
  },
  {
    title: "Slow and steady wins the race",
    img: "./img/91.png",
    body: `
    <p><b>По-английски</b>- Slow and steady wins the race</p>

    <p><b>Перевод</b>- Медленно и верно, и победа за тобой</p>

    <p><b>Аналог в русском</b>- Тише едешь, дальше будешь</p>

    `,
  },
  {
    title: "Forbidden fruit is sweet",
    img: "./img/89.png",
    body: `
    
    <p><b>По-английски</b> - Forbidden fruit is sweet</p>

    <p><b>Перевод</b>- Запретный плод сладок</p>
    
    <p><b>Аналог в русском</b> - Запретный плод сладок</p>

    `,
  },
  {
    title: "Don’t bite the hand that feeds",
    img: "./img/60.png",
    body: `
    <p><b>По-английски</b> - Don’t bite the hand that feeds you</p>

    <p><b>Перевод</b> - Не кусай руку, кормящую тебя</p>
    
    <p><b>Аналог в русском</b> - Не пили сук, на котором сидишь</p>

    `,
  },
  {
    title: "Beauty is in the eye of the beholder",
    img: "./img/27.png",
    body: `
    <p><b>По-английски</b> - Beauty is in the eye of the beholder</p>

    <p><b>Перевод</b> - Красота в глазу того, кто смотрит</p>

    <p><b>Аналог в русском</b> - О вкусах не спорят.</p>

    `,
  },
  {
    title: "As innocent as a babe unborn",
    img: "./img/19.png",
    body: `
    <p><b>По-английски</b> - As innocent as a babe unborn</p>

    <p><b>Перевод</b> - Невинный, как неродившийся младенец</p>

    <p><b>Аналог в русском</b> - Сущий младенец</p>

    `,
  },
  {
    title: "Make haste slowly",
    img: "./img/133.png",
    body: `
    <p><b>По-английски</b>- Make haste slowly</p>

    <p><b>Перевод</b> - Торопись медленно</p>
    
    <p><b>Аналог в русском</b>-Тише едешь, дальше будешь</p>

    `,
  },
  {
    title: "Measure for measure",
    img: "./img/139.png",
    body: `
    <p><b>По-английски</b> - Measure for measure</p>

    <p><b>Перевод</b> - Мера за меру</p>

    <p><b>Аналог в русском</b> - Око за око, зуб за зуб</p>

    `,
  },
  {
    title: " Fools and madmen speak the truth",
    img: "./img/87.png",
    body: `
    <p><b>По-английски</b> - Fools and madmen speak the truth</p>

    <p><b>Перевод</b> - Глупцы и безумцы правду говорят</p>
    
    <p><b>Аналог в русском</b> - У дурака что на уме, то и на языке</p>

    `,
  },
  {
    title: "Cut off your nose to spite your face",
    img: "./img/50.png",
    body: `
    <p><b>По-английски</b>-Cut off your nose to spite your face</p>

    <p><b>Перевод</b>-Отрежь свой нос, чтобы досадить лицу</p>

    <p><b>Аналог в русском</b>-Назло бабушке нос отморожу</p>

    `,
  },
  {
    title: "Of two evils choose the least",
    img: "./img/160.png",
    body: `
    <p><b>По-английски</b>-Of two evils choose the least</p>

    <p><b>Перевод</b>-Из двух зол выбирай меньшее</p>

    <p><b>Аналог в русском</b>-Из двух зол выбирай меньшее</p>

    `,
  },
  {
    title: "Out of sight, out of mind",
    img: "./img/166.png",
    body: `
    <p><b>По-английски</b>-Out of sight, out of mind</p>

    <p><b>Перевод</b>-Прочь из виду, прочь из памяти</p>
    
    <p><b>Аналог в русском</b>-С глаз долой — из сердца вон</p>

    `,
  },
  {
    title: "Caution is the parent of safety",
    img: "./img/43.png",
    body: `
    <p><b>По-английски</b> - Caution is the parent of safety</p>

    <p><b>Перевод</b> - Осторожность — мать безопасности</p>
    
    <p><b>Аналог в русском</b> - Береженого и бог бережет</p>

    `,
  },
  {
    title: " Dog eats dog",
    img: "./img/58.png",
    body: `
    <p><b>По-английски</b>- Dog eats dog</p>

    <p><b>Перевод</b>- Собака собаку ест</p>
    
    <p><b>Аналог в русском</b> - Человек человеку волк</p>

    `,
  },
  {
    title: "Far from eye, far from heart",
    img: "./img/82(2).png",
    body: `
    <p><b>По-английски</b>- Far from eye, far from heart</p>

    <p><b>Перевод</b>- С глаз долой, из сердца вон</p>
    
    <p><b>Аналог в русском</b> - С глаз долой, из сердца вон</p>

    `,
  },
  {
    title: "Fish begins to stink at the head",
    img: "./img/85.png",
    body: `
    <p><b>По-английски</b>- Fish begins to stink at the head</p>

    <p><b>Перевод</b>- Рыба с головы начинает пахнуть</p>
    
    <p><b>Аналог в русском</b> - Рыба с головы гниет</p>

    `,
  },
  {
    title: "Out of the frying-pan into the fire",
    img: "./img/167 (1).png",
    body: `
    <p><b>По-английски</b>- Out of the frying-pan into the fire</p>

    <p><b>Перевод</b>- Co сковороды, да в огонь</p>
    
    <p><b>Аналог в русском</b> - Из огня, да в полымя</p>

    `,
  },
  {
    title: "Neither fish nor flesh",
    img: "./img/146.png",
    body: `
    <p><b>По-английски</b>- Neither fish nor flesh</p>

    <p><b>Перевод</b>- Ни рыба, ни мясо</p>
    
    <p><b>Аналог в русском</b> - Ни рыба, ни мясо</p>

    `,
  },
  {
    title: "Delays are dangerous",
    img: "./img/52.png",
    body: `
    <p><b>По-английски</b>- Delays are dangerous</p>

    <p><b>Перевод</b>- Промедление опасно</p>
    
    <p><b>Аналог в русском</b> - Промедление смерти подобно</p>

    `,
  },
  {
    title: "Between two stools",
    img: "./img/34.png",
    body: `
    <p><b>По-английски</b>-Between two stools</p>

    <p><b>Перевод</b>- Между двумя стульямителе</p>
    
    <p><b>Аналог в русском</b> - Между двумя стульями</p>

    `,
  },
  {
    title: "Don't whistle (halloo) until you are out of the wood",
    img: "./img/66.png",
    body: `
    <p><b>По-английски</b>-Don't whistle (halloo) until you are out of the wood</p>

    <p><b>Перевод</b>- He насвистывай, пока не выбрался из лесу</p>
    
    <p><b>Аналог в русском</b> - Не говори “гоп”, пока не перепрыгнешь</p>

    `,
  },
  {
    title: "Catch the bear before you sell his skin",
    img: "./img/42.png",
    body: `
    <p><b>По-английски</b>-Catch the bear before you sell his skin</p>

    <p><b>Перевод</b>- Прежде поймай медведя, а потом продавай его шкуру</p>
    
    <p><b>Аналог в русском</b> - Не дели шкуру неубитого медведя</p>

    `,
  },
  {
    title: "A friend in need is a friend indeed",
    img: "./img/8.png",
    body: `
    <p><b>По-английски</b>- A friend in need is a friend indeed/p>

    <p><b>Перевод</b>- Друг в беде есть настоящий друг</p>
    
    <p><b>Аналог в русском</b> - Друзья познаются в беде</p>

    `,
  },
  {
    title: "A stitch in time saves nine",
    img: "./img/12.png",
    body: `
    <p><b>По-английски</b>-A stitch in time saves nine</p>

    <p><b>Перевод</b>-Один стежок, сделанный вовремя, стоит девяти</p>
    
    <p><b>Аналог в русском</b> - ороша ложка к обеду</p>

    `,
  },
  {
    title: "A wolf in sheep's clothing",
    img: "./img/14.png",
    body: `
    <p><b>По-английски</b>- A wolf in sheep's clothing</p>

    <p><b>Перевод</b>-Волк в овечьей шкуре</p>
    
    <p><b>Аналог в русском</b> -Волк в овечьей шкуре</p>

    `,
  },

  {
    title: "As old as the hills",
    img: "./img/20.png",
    body: `
    <p><b>По-английски</b>- As old as the hills</p>

    <p><b>Перевод</b>-Древний, как холмы</p>
    
    <p><b>Аналог в русском</b> -Старо как мир</p>

    `,
  },
  {
    title: "Bad news has wings",
    img: "./img/24.png",
    body: `
    <p><b>По-английски</b>- Bad news has wings</p>

    <p><b>Перевод</b>-Дурная весть имеет крылья</p>
    
    <p><b>Аналог в русском</b> -Худые вести не лежат на месте</p>

    `,
  },
  {
    title: "As well be hanged for a sheep as for a lamb",
    img: "./img/21.png",
    body: `
    <p><b>По-английски</b>- As well be hanged for a sheep as for a lamb</p>

    <p><b>Перевод</b>-Всё равно за что быть повешенным: за овцу или ягненка</p>
    
    <p><b>Аналог в русском</b> - Семь бед — один ответ</p>

    `,
  },
  {
    title: "Better late than never",
    img: "./img/31.png",
    body: `
    <p><b>По-английски</b>-Better late than never</p>

    <p><b>Перевод</b>-Лучше поздно, чем никогда</p>
    
    <p><b>Аналог в русском</b> -Лучше поздно, чем никогда</p>

    `,
  },
  {
    title: "Better safe than sorry",
    img: "./img/32.png",
    body: `
    <p><b>По-английски</b>-Better safe than sorry</p>

    <p><b>Перевод</b>-Побережешься вовремя, не о чем будет жалеть после</p>
    
    <p><b>Аналог в русском</b> - Бережёного Бог бережёт</p>

    `,
  },
  {
    title: "Curses like chickens come home to roost",
    img: "./img/49.png",
    body: `
    <p><b>По-английски</b>-Curses like chickens come home to roost</p>

    <p><b>Перевод</b>-Проклятия, подобно цыплятам, возвращаются на свой насест</p>
    
    <p><b>Аналог в русском</b> -  Не рой другому яму, сам в нее попадешь</p>

    `,
  },
  {
    title: "As sure as eggs is eggs",
    img: "./img/20.png",
    body: `
    <p><b>По-английски</b>-As sure as eggs is eggs</p>

    <p><b>Перевод</b>-Верно, как то, что яйца суть яйца</p>
    
    <p><b>Аналог в русском</b> - Как дважды два — четыре</p>

    `,
  },
  {
    title: "At the ends of the earth",
    img: "./img/23.png",
    body: `
    <p><b>По-английски</b>-At the ends of the earth</p>

    <p><b>Перевод</b>-На краю света</p>
    
    <p><b>Аналог в русском</b> - У чёрта на куличках</p>

    `,
  },
  {
    title: "Best defence is offence",
    img: "./img/29.png",
    body: `
    <p><b>По-английски</b>-Best defence is offence</p>

    <p><b>Перевод</b>- Нападение — лучший вид защиты</p>
    
    <p><b>Аналог в русском</b> - Лучшая защита – нападение</p>

    `,
  },
  {
    title: "Birds of a feather flock together",
    img: "./img/38.png",
    body: `
    <p><b>По-английски</b>-Birds of a feather flock together</p>

    <p><b>Перевод</b>- Птицы одного оперения собираются вместе</p>
    
    <p><b>Аналог в русском</b> - Рыбак рыбака видит издалека</p>

    `,
  },
  {
    title: "Divide and rule",
    img: "./img/55.png",
    body: `
    <p><b>По-английски</b>-Divide and rule</p>

    <p><b>Перевод</b>- Разделяй и властвуй</p>
    
    <p><b>Аналог в русском</b>- Разделяй и властвуй</p>

    `,
  },



];

const app = document.querySelector("#app");

content.forEach((el) => {
  app.insertAdjacentHTML(
    "beforeEnd",
    `
      <div class="col s12 m12 l12 xl4">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img
              class="activator"
              src="${el.img}"
            />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              <p class="card-title-paragraph">${el.title}</p>
              <i class="material-icons right">more_vert</i>
            </span>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              <i class="material-icons right">close</i>
            </span>
            ${el.body}
          </div>
        </div>
      </div>
    `
  );
});

const article = document.querySelector(".container");
const progressBar = document.querySelector(".progress");




$(document).ready(function () {
  
  $(".dws-progress-bar")
  

    .circularProgress({
      color: "rgba(232, 211, 211, 1)",
      line_width: 12,
      height: "400px",
      width:"240px",
      percent: 0,
      counter_clockwise: false,
      starting_position: 0,
      
      
      
    
    })
  
    .circularProgress("animate", 100, 1718);
 
    
});

$(window).on("load", function () {
  var $preloader = $("#preloader");
  $preloader.delay(1700).fadeOut("slow");
  

  
});
(function ($) {
  var global_settings = {
     
  };
  
  var methods = {
    init: function (options) {
     
      var settings = $.extend(
        {
          color: "#000000",
          height: "400px",
          width: "240px",
          line_width: 12,
          starting_position:0,
          percent: 100,
          counter_clockwise: false,
          percentage: true,
          text: "",
          
          
       
         
        },
        options
      
      );
      global_settings = settings;
     

      var percentage = $("<div class='progress-percentage'></div>");

      if (!global_settings.percentage) {
        percentage.text(global_settings.percentage);
      }
      $(this).append(percentage);

      var text = $("<div class='progress-text'></div>");

      if (global_settings.text != "percent") {
        text.text(global_settings.text);
      }
      $(this).append(text);

      if (global_settings.starting_position != 100) {
        global_settings.starting_position =
          global_settings.starting_position % 100;
      
      }
      if (global_settings.ending_position != 100) {
        global_settings.ending_position = global_settings.ending_position % 100;
      }

      appendUnit(global_settings.width);
      appendUnit(global_settings.height);

      $(this).css({
        height: global_settings.height,
        width: global_settings.width,
        
      });
      $(this).addClass("circular-progress-bar");
     
      $(this).find("canvas").remove();

      $(this).append(createCanvas($(this)));

      return this;
    },
    percent: function (value) {
      global_settings.percent = value;
      

      $(this).css({
        height: global_settings.height,
        width: global_settings.width,
        
      });

      $(this).children("canvas").remove();

      $(this).append(createCanvas($(this)));

      return this;
    },
    animate: function (value, time) {
      $(this).css({
        height: global_settings.height,
        width: global_settings.width,
   
      });

      var num_of_steps = time / 10;

      var percent_change = (value - global_settings.percent) / num_of_steps;

      var scope = $(this);
      var theInterval = setInterval(function () {
        if (global_settings.percent < value) {
          scope.children("canvas").remove();

          global_settings.percent += percent_change;
         

          scope.append(createCanvas(scope));
        } else {
          clearInterval(theInterval);
          
        }
      }, 10);

      return this;
    },
  };

  $.fn.circularProgress = function (methodOrOptions) {
    if (methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(
        this,
        Array.prototype.slice.call(arguments, 1)
      
        
      );
    } else if (typeof methodOrOptions === "object" || !methodOrOptions) {
      return methods.init.apply(this, arguments);
      
    } else {
      $.error("Method " + methodOrOptions + " does not exist.");
    }
  };

  function removeUnit(apples) {
    if (apples.indexOf("px")) {
      return apples.substring(0, apples.length - 2);
    } else if (canvas_height.indexOf("%")) {
      return apples.substring(0, apples.length - 1);
    }
  }

  function appendUnit(apples) {
    if (
      apples.toString().indexOf("px") < -1 &&
      apples.toString().indexOf("%") < -1
    ) {
      return (apples += "px");
    }
  }

  function calcPos(apples, percent) {
    if (percent < 0) {
      var starting_degree = (parseInt(apples) / 100) * 360;
      var starting_radian = starting_degree * (Math.PI / 180);
      return starting_radian - Math.PI / 2;
    } else {
      var ending_degree = ((parseInt(apples) + parseInt(percent)) / 100) * 360;
      var ending_radian = ending_degree * (Math.PI / 180);
      return ending_radian - Math.PI / 2;
    }
  }

  function insertText(scope) {
    $(".progress-percentage").text(Math.round(global_settings.percent) + "%");
  }

  function createCanvas(scope) {
    var canvas_height = removeUnit(global_settings.height.toString());
    var canvas_width = removeUnit(global_settings.width.toString());

    var canvas = document.createElement("canvas");
    canvas.height = canvas_height;
    canvas.width = canvas_width;

    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = global_settings.color;
    ctx.lineWidth = global_settings.line_width;

    ctx.beginPath();

    var starting_radian = calcPos(global_settings.starting_position, -1);
    var ending_radian = calcPos(
      global_settings.starting_position,
      global_settings.percent
    );

    var radius = 0;
    var xcoord = canvas_width / 2;
    var ycoord = canvas_height / 2;

    if (canvas_height >= canvas_width) {
      radius = (canvas_width * 0.9) / 2 - global_settings.line_width * 2;
    } else {
      radius = (canvas_height * 0.9) / 2 - global_settings.line_width * 2;
     
    }

    ctx.arc(
      xcoord,
      ycoord,
      radius,
      starting_radian,
      ending_radian,
      global_settings.counter_clockwise
     
    );
    ctx.stroke();

    if (global_settings.percentage) {
      insertText(scope);
      
    }

    return canvas;
    
  }
})(jQuery);
const button = $(".back-to-top");

$(window).on("scroll", () => {
  if ($(this).scrollTop() >= 50) {
    button.fadeIn();
  } else {
    button.fadeOut();
  }
});

button.on("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


var isMobile = {
      
  Android:        function() { return navigator.userAgent.match(/Android/i) ? true : false; },
  BlackBerry:     function() { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
  iOS:            function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
  Windows:        function() { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
  any:            function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows()); },
 

};


if ( !isMobile.any() ) {
  DragManager.onDragEnd = function(dragObject) {
    dragObject.avatar.rollback();
 }; 

 window.addEventListener("scroll", () => {
  let scrollValue = window.scrollY;
  let articleHeight = article.clientHeight - window.innerHeight;

  let progressPercentage = (scrollValue / articleHeight) * 2560 ;

  progressBar.style.width = progressPercentage + "px";
}); 
  };

