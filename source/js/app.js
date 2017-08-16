
$('.goods--scroll').on('click',function(e) {
  e.preventDefault()
  $('html, body').animate({scrollTop:0},500);
});

$('.footer--button').on('click',function(e) {
  e.preventDefault();
  let regexp = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/i
  let data = $('input[name="email"]').val();
  if(data.match(regexp)){
    alert('Вы успешно зарегистрировались.');
  }else {
    alert('введите корректный email');
  }
});

// выводит отсортированный массив в консоль
$('#date').on('click',function() {
  let x = [4,2,7,3,5,9,1];
  function bubble(arr) {
      var len = arr.length;
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){
        if (arr[j] > arr[j + 1]) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
  console.log(bubble(x));
});

// выводит отсортированный в обратном порядке массив
$('#completed').on('click',function() {
  let x = [4,2,7,3,5,9,1];
  function bubble(arr) {
      let len = arr.length;
      for (let i = 0; i < len ; i++) {
        for(let j = 0 ; j < len - i - 1; j++){
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      arr.reverse();
      return arr;
    }
  console.log(bubble(x));
});
